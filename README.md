# 夏祭り かき氷フェスティバル

幼児〜小学校低学年向け Web ゲーム。 Canvas 2D 単一 HTML + sprite PNG、 外部依存は Google Fonts のみ。

## プレイ

公開: **https://mm-1989.github.io/natsu-matsuri-game/**

- スマホ・PC ブラウザどちらでも動作
- インストール不要、 タップだけで遊べる
- 数秒のスプラッシュ後にモード選択画面が出ます

## モード

| モード | 対象 | 主役体験 |
|---|---|---|
| ごほうび制作 | 3-5 歳 | タイマーなし。 ハンドルを好きなだけ回し、 「できた！」 ボタンでシロップを選んで完成 |
| チャレンジ | 5-7 歳 | 30 秒で大きく作る、 連打で食べる、 スコアアタック (= 高さ × 倍率 × コンボ) |

どの画面からも 🏠 ホーム ボタンでモード選択に戻れます。

## ローカル起動

```sh
cd /home/mm_admin/natsu-matsuri-game
python3 -m http.server 8765
```

ブラウザで `http://localhost:8765/` を開く。

## ファイル構成

```
natsu-matsuri-game/
├── index.html                      エントリポイント
├── kakigori.html                   当初モックアップ (参考用)
├── assets/images/
│   └── sprites/                    暫定 sprite PNG (キャラ 3 / 機械 / 器)
├── docs/image-prompts.md           画像生成プロンプト下書き
├── tools/export-sprites.html       procedural → sprite 書き出しツール
└── README.md
```

## ロードマップ

### M1 — モード分岐 + UX 整理 ✅
- [x] M1.1 `index.html` 整備 + ローカル起動
- [x] M1.2 モード選択画面 skeleton
- [x] M1.3 ごほうび制作モード雛形 (タイマー/連打/multiplier なし)
- [x] M1.4 scoreboard 英語ラベルを ひらがな化
- [x] M1.5 画像差込先 placeholder + プロンプト下書き

### M2 — sprite 一本化 ✅
- [x] procedural コードを sprite に置換 (キャラ 3 体 + 機械本体 + 器)
- [x] `tools/export-sprites.html` で再生成可能
- [x] user が生成画像を同名で上書きすれば即反映

### M3 — 画面遷移 + 情報優先度 ✅
- [x] title スプラッシュ + 全 phase 共通 🏠 ホーム導線
- [x] Codex レビュー反映 (scoreboard 非表示制御、 シロップ banner 縮小)
- [x] Primary (中央 pill) と Safety-net (左下ホーム) の物理分離

### M4 — 公開 (in progress)
- [x] master → main rename
- [ ] GitHub リポジトリ作成 (= user 操作)
- [ ] 初回 push
- [ ] GitHub Pages 有効化

## 画像アセット

`docs/image-prompts.md` に生成プロンプト下書き。 画像は user が手動生成 (= ChatGPT/DALL·E 等) し、 `assets/images/sprites/` に同名で上書き配置。 ブラウザリロードで反映。

現状の sprite は `tools/export-sprites.html` で procedural から書き出した暫定版。

## 技術メモ

- Canvas 2D のみ (= Three.js / WebGL 不使用)
- フレームワークなし (= Vanilla HTML/CSS/JS、 ビルドなし)
- sprite 画像は 透過 PNG、 procedural からのアスペクト 1:1 維持
- 動く要素 (= ハンドル / 氷山 / シロップ / 粒子 / 提灯) は procedural のまま、 静止要素だけ sprite
