# 画像生成プロンプト下書き

natsu-matsuri-game に組み込む画像アセットの生成プロンプト一覧。 user が ChatGPT (DALL·E) / その他画像生成ツールに貼り付けて使う想定。

## 共通スタイル指針

全画像で **一貫した手描き絵本タッチの夏祭り風** を維持する。プロンプトを書く際は次の要素を含める。

| 要素 | 指定例 |
|---|---|
| 全体 | 日本の絵本タッチ、 やわらかな水彩風、 線は太めの墨色、 紙のテクスチャを薄く感じる |
| 配色 | 暖色寄り。 赤 `#e94560` / 緑 `#6cba87` / 青 `#4287d6` / 黄 `#ffd84a` / オレンジ `#f08a4b` を主軸 |
| 質感 | ベタ塗り中心、 ハイライトは控えめ、 アンチエイリアス強め |
| キャラ | 顔は単純化 (丸い目 + 小さい口 + チークの淡いピンク)、 手足は短くずんぐり |
| 雰囲気 | 夜祭りより**昼の縁日**寄り。 提灯はうすい灯り、 空は淡いクリーム色 |
| NG | 写実、 大人びた絵柄、 怖い顔、 とがったライン、 メタリック質感、 文字・ロゴ・著名キャラの引用 |

**画像ファイル仕様**

- 形式: **PNG (透過 alpha ON)** を基本。 背景一枚絵だけ JPG 可
- 解像度: 表示サイズの **2x** で生成 (例: 表示 280×200 → 560×400)。 縮小で粗が消える
- ファイル名: 仕様表に書かれたファイル名そのままで `assets/images/` に保存

---

## 必須 (M1.5 で差込済み、 画像配置すれば即反映)

### 1. `title-key.png` — モード選択画面のキービジュアル

- **配置場所**: モード選択画面の上部 (= 「どっちで あそぶ？」 の上に表示)
- **表示サイズ**: 約 280×200 (推奨生成解像度: 560×400)
- **透過**: ON
- **役割**: ゲームの世界観を一目で伝える「掴み」 の絵

**プロンプト案 (日本語、 ChatGPT/DALL·E に貼る)**

```
日本の絵本タッチで、 夏祭りのかき氷屋台を描いてください。
中央に大きなかき氷器 (赤いドーム型のフタ、 白い本体、 「氷」 の旗) を配置し、
器の前にはペンギン・しろくま・ひよこの 3 匹の子どもキャラがニコニコ並んでいます。
上部には提灯と三角フラッグの飾り、 周りに紙吹雪が舞っています。
配色は赤 (#e94560) ・ 緑 (#6cba87) ・ 黄 (#ffd84a) ・ オレンジ (#f08a4b) を主軸、
背景はやわらかいクリーム色 (#fff4dc)。 線は太めの墨色、 ベタ塗り中心、 水彩のにじみを少し。
キャラの顔は丸い目と小さな口、 ほっぺは淡いピンク。 怖い表情・写実・メタリック質感は禁止。
横長 (16:11 程度) で透過 PNG として描いてください。
```

**プロンプト案 (英語、 fallback)**

```
Japanese picture-book style illustration of a summer festival shaved-ice stall.
In the center, a large red-domed shaved-ice machine with a white body and a small
"氷" sign-flag. In front of the machine, three small mascot characters (a penguin,
a polar-bear cub, and a yellow chick) stand together smiling. Above them: paper
lanterns and a triangular bunting string, with confetti drifting. Color palette
warm and inviting: red #e94560, green #6cba87, yellow #ffd84a, orange #f08a4b on a
soft cream background #fff4dc. Thick ink outlines, flat shading with subtle
watercolor bleeds, round simple eyes with tiny pink blush on cheeks. No realism,
no metallic surfaces, no scary expressions. Landscape 16:11 aspect ratio,
transparent PNG.
```

---

## 推奨 (M2 で差込予定)

### 2. `mode-reward-icon.png` — モード選択「ごほうび」ボタン用アイコン

- **表示サイズ**: 64×64 (推奨生成解像度: 128×128)、 正方形
- **役割**: 現状 🍧 emoji を画像置換
- **プロンプト要点**: 完成した一杯のかき氷 (シロップたっぷり、 さくらんぼトッピング)、 やさしい雰囲気、 ゆるい線
- **背景**: 透過 PNG

```
日本の絵本タッチで、 シロップ (赤) たっぷりのかわいいかき氷 1 杯を真正面から
描いてください。 上にさくらんぼ 1 粒、 ガラスの器、 線は太め、 ベタ塗り、 ほっこり感。
正方形、 透過 PNG、 中央配置で余白少なめ。
```

### 3. `mode-challenge-icon.png` — モード選択「チャレンジ」ボタン用アイコン

- **表示サイズ**: 64×64 (推奨生成解像度: 128×128)、 正方形
- **役割**: 現状 ⏱️ emoji を画像置換
- **プロンプト要点**: 手描き風のストップウォッチ、 オレンジ針が勢いよく回るような flash 線、 元気な雰囲気

```
日本の絵本タッチで、 手描き風のかわいいストップウォッチを描いてください。
オレンジの針が勢いよく回っているような短い動き線 (manga 風スピード線) を周囲に少し。
線は太め、 ベタ塗り、 怖くなく元気な雰囲気。 正方形、 透過 PNG。
```

---

## 任意 (M2+ で検討、 procedural 描画から置換する可能性)

### 4. キャラスプライト (3 体)

procedural 描画を PNG sprite で置換するなら以下 3 ファイル。 各 96×96 推奨、 透過 PNG、 正面ポーズ + ジャンプポーズ の 2 フレーム sprite sheet。

| ファイル | キャラ |
|---|---|
| `char-penguin.png` | 子どもペンギン (黒×白、 オレンジくちばし、 ピンクほっぺ) |
| `char-shirokuma.png` | しろくま (クリーム白、 小さい耳、 ピンクの内耳) |
| `char-chick.png` | ひよこ (黄、 短い羽、 オレンジくちばし) |

スプライト sheet は 2 フレーム横並びで合計 192×96。 1 フレーム目 = 立ちポーズ、 2 フレーム目 = 軽くジャンプ (両手両足広げる)。 同じスタイルで揃えること。

### 5. シロップ瓶 4 種 (`syrup-ichigo.png` 等)

- **サイズ**: 48×64、 透過 PNG
- **構図**: 縦長の瓶、 ラベルにシロップ名 (いちご / メロン / ブルー / レモン)、 中身の色がそれぞれ赤・緑・青・黄
- **用途**: controls pill 内のシロップボタンに置換、 emoji の代わりに

### 6. `done-key.png` — 完成シーンの背景フレーム (= SNS シェア風)

- **サイズ**: 420×280
- **構図**: 額縁風、 上に「できたね！」 のリボン、 周囲に紙吹雪
- **用途**: done 画面の banner 背景。 完成かき氷を撮影したかのような演出

### 7. `bg-lanterns.png` — 提灯+フラッグ背景 (parallax 用)

- **サイズ**: 920×120 (横長)、 透過 PNG
- **構図**: 提灯 7 個 + 三角フラッグ string、 横に並べて canvas 上部にタイル状に流す
- **用途**: 現状 procedural な提灯を PNG 置換 (= 質感向上)

---

## 配置と動作確認

1. ChatGPT / DALL·E 等で画像生成
2. `/home/mm_admin/natsu-matsuri-game/assets/images/` に該当ファイル名で保存
3. ブラウザで `http://localhost:8765/` をリロードして反映確認
4. `title-key.png` だけは既に index.html に `<img>` で差込済 (= ファイル置けば自動表示、 不在時は `onerror` で非表示)
5. その他は M2 以降に Claude 側で差込実装する (= 現時点では index.html 側未対応)

## 注意

- ファイル名は **厳密に一致** させる (大文字小文字も)
- 透過 PNG の背景が薄いグレーチェックパターンになるツールもあるが、 これは透過の表示で問題なし
- 同じ画像を複数モードで使い回すなら、 都度コピーせず M2 で symlink or 共通アセット参照を検討
