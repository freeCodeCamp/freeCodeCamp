---
id: 587d7dbc367417b2b2512bae
title: ドラムマシンを作成する
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**目標:** こちらと似た機能を持つアプリを構築してください: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks</a>

以下のユーザーストーリーを満たし、すべてのテストが成功するようにしてください。 必要に応じて、どのようなライブラリあるいは API を使用してもかまいません。 あなた独自のスタイルを加えましょう。

このプロジェクトを完了するために、HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、および jQuery を自在に組み合わせて利用することができます。 このセクションはフロントエンドフレームワークの学習を目的としていますので、React などのフロントエンドフレームワークを使用してください。 上記以外の他のテクノロジーは推奨されません。使用する場合は自己責任で行ってください。 Angular や Vue などの他のフロントエンドフレームワークのサポートを検討していますが、現時点ではサポートされていません。 このプロジェクトで推奨される一連のテクノロジーを使用している場合の不具合報告については、freeCodeCamp にて報告を受け入れ、修正するよう努めます。 コーディングの成功を祈ります！

**ユーザーストーリー 1:** 対応する `id="drum-machine"` を持ち、他のすべての要素を収める、外側のコンテナーを表示できます。

**ユーザーストーリー 2:** `#drum-machine` の中に、対応する `id="display"` を持つ要素を表示できます。

**ユーザーストーリー 3:** `#drum-machine` の中に、9 つのクリック可能なドラムパッド要素を表示できます。要素はそれぞれ、クラス名 `drum-pad` と、ドラムパットのトリガー用に準備されるオーディオクリップを示す一意の ID、および、キーボードの `Q`、`W`、`E`、`A`、`S`、`D`、`Z`、`X`、`C` のいずれかのキーに対応する内側のテキストを持ちます。 ドラムパッドはこの順序にする必要があります。

**ユーザーストーリー 4:** それぞれの `.drum-pad` の中に、HTML5 の `audio` 要素を配置します。この要素は、オーディオクリップを指し示す `src` 属性、クラス名 `clip`、および、自身の親である `.drum-pad` の内側のテキストに対応する ID を持ちます (`id="Q"`、`id="W"`、`id="E"` など)。

**ユーザーストーリー 5:** `.drum-pad` 要素をクリックすると、その子の `audio` 要素に含まれているオーディオクリップがトリガーされます。

**ユーザーストーリー 6:** それぞれの `.drum-pad` に関連付けられているトリガーキーを押すと、その子の `audio` 要素に含まれているオーディオクリップがトリガーされます。たとえば、`Q` キーを押すと文字列 `Q` を含むドラムパッドがトリガーされ、`W` キーを押すと文字列 `W` を含むドラムパッドがトリガーされる、などとなります。

**ユーザーストーリー 7:** `.drum-pad` がトリガーされると、関連するオーディオクリップを説明する文字列が、`#display` 要素の内側のテキストとして表示されます (文字列はそれぞれ一意にする必要があります)。

ドラムマシンに使用できるオーディオサンプルの例は次のとおりです。

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

<a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">この CodePen テンプレートを使用して</a> あなたのプロジェクトを構築することができます。`Save` をクリックすると、あなた用の pen を作成することができます。 または、下記の CDN リンクを使用して、使い慣れている環境でテストを実行することもできます: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完了したら、すべてのテストが成功する状態の作業プロジェクトの URL を送信してください。

# --solutions--

```js
// solution required
```
