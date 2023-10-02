---
id: 587d8253367417b2b2512c6a
title: 型付き配列
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

配列は、さまざまな要素を大量に保持できる JavaScript オブジェクトです。

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

バックグラウンドで行われることは、基本的に、ブラウザがその配列に対して適切なメモリ空間を自動的に与えることです。 データの追加や削除を行ったときも、必要に応じてメモリ空間が変化します。

しかし、高いパフォーマンスと多様な要素型が求められる世界では、配列に与えるメモリの量をより具体的に指定しなければならない場合があります。

それを可能にするのが<dfn>型付き配列</dfn> です。 これで、配列に与えるメモリの量を指定できるようになります。 利用可能な配列型の基本概要と、その配列に含まれる各要素のサイズ (バイト数) は次の通りです。

<table class='table table-striped'><tbody><tr><th>型</th><th>各要素のサイズ (バイト数)</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

これらのような配列を作る方法は 2 つあります。 方法の一つは、配列を直接作成することです。 長さ 3 の `Int16Array` を作成するには、次のようにします。

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

また、<dfn>バッファ</dfn>を作成して、配列が受け取るデータ量 (バイト数) を割り当てることもできます。 **注**  
バッファを使って型付き配列を作成するには、割り当てるバイト数を、上に示したバイト数の倍数にする必要があります。

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>バッファ</dfn>は、データを保持するだけの汎用オブジェクトです。 通常、バッファにアクセスすることはできません。 アクセスするには、先に<dfn>ビュー</dfn>を作成する必要があります。

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**注**  
型付き配列には、普通の配列が持つメソッドの一部、例えば `.pop()` や `.push()` がありません。 また、型付き配列では、対象物が配列であるかを調べる `Array.isArray()` が失敗します。 この配列は比較的単純ですが、そのことは、旧来の JavaScript エンジンに実装する際の長所になり得ます。

# --instructions--

最初に 64 バイトの `buffer` を作成してください。 次に、`i32View` と呼ばれるビューを持つ `Int32Array` 型の配列を作成してください。

# --hints--

`buffer` のサイズを 64 バイトにする必要があります。

```js
assert(buffer.byteLength === 64);
```

バッファの `i32View` ビューのサイズを 64 バイトにする必要があります。

```js
assert(i32View.byteLength === 64);
```

バッファの `i32View` ビューの長さを 16 要素にする必要があります。

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
