# 夏祭り かき氷フェスティバル

幼児〜小学校低学年向け Web ゲーム。Canvas 2D 単一 HTML、外部依存は Google Fonts のみ。

## モード (構想)

| モード | 対象 | 主役体験 |
|---|---|---|
| ごほうび制作 | 3-5 歳 | タイマーなし。 好きなだけ削って、 シロップ選んで、 ほめてもらう |
| チャレンジ | 5-7 歳 | 30 秒で大きく作る、 連打で食べる、 スコアアタック (= 旧 `kakigori.html` の中身を引き継ぎ) |

## ローカル起動

```sh
cd /home/mm_admin/natsu-matsuri-game
python3 -m http.server 8765
```

ブラウザで `http://localhost:8765/` を開く。

## ファイル構成

- `index.html` — エントリポイント (作業対象)
- `kakigori.html` — 当初モックアップ (参考用に保持)
- `assets/images/` — 画像アセット置き場 (画像は user が手動生成)
- `docs/image-prompts.md` — 画像生成プロンプト下書き (M1.5 で整備予定)

## ロードマップ (M1)

- [x] M1.1 `index.html` 整備 + 起動確認
- [ ] M1.2 モード選択画面 skeleton
- [ ] M1.3 ごほうび制作モード雛形
- [ ] M1.4 UX 整理 (英数字ラベル日本語化)
- [ ] M1.5 画像差込先 placeholder + プロンプト下書き

## 公開先想定

GitHub Pages (M1 完了後)。
