// natsu-matsuri-game service worker
// 注: cache key を変える時は CACHE バージョンを bump する (= 古い cache を捨てる)
const CACHE = 'natsu-matsuri-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/images/favicon-32.png',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/images/sprites/char-penguin.png',
  './assets/images/sprites/char-shirokuma.png',
  './assets/images/sprites/char-chick.png',
  './assets/images/sprites/machine-body.png',
  './assets/images/sprites/bowl.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // 同じ origin の GET だけ扱う
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // HTML (= ナビゲーション) は network-first (= 最新を取りに行き、 失敗時 cache fallback)
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).catch(() => caches.match(req).then((r) => r || caches.match('./')))
    );
    return;
  }

  // それ以外 (= sprite / icon / manifest / etc.) は cache-first
  e.respondWith(
    caches.match(req).then((r) => r || fetch(req).then((res) => {
      // ランタイム取得した同 origin リソースを cache に追加 (= 次回オフラインで使える)
      const clone = res.clone();
      caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
      return res;
    }))
  );
});
