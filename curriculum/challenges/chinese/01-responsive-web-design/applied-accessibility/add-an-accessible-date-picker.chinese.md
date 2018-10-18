---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Thêm bộ chọn ngày có thể truy cập
---

## Description
Biểu mẫu <section id = "description"> thường chứa trường <code> input </ code> có thể được sử dụng để tạo nhiều điều khiển biểu mẫu khác nhau. Thuộc tính <code> type </ code> của phần tử này cho biết đầu vào nào sẽ được tạo. Bạn có thể đã nhận thấy <code> văn bản </ code> và trong kiểu đầu vào <code> gửi </ code> trước đó, HTML5 đã đưa ra một tùy chọn để chỉ định trường <code> date </ code>. Tùy thuộc vào sự hỗ trợ của trình duyệt, khi bộ chọn ngày được lấy nét, nó sẽ được hiển thị trong trường <code> input </ code>, giúp mọi người dùng điền vào biểu mẫu dễ dàng hơn. Đối với các trình duyệt cũ hơn, loại này sẽ mặc định thành <code> văn bản </ code>, vì vậy nó giúp hiển thị cho người dùng định dạng ngày hoặc văn bản giữ chỗ dự kiến trong nhãn chỉ trong trường hợp. Dưới đây là ví dụ: <blockquote> & lt; label for = "input1" & gt; Nhập ngày: & lt; / label & gt; <br> & lt; kiểu nhập = "ngày" id = "input1" name = "input1" & gt; Br> </ blockquote> </ section>

## Instructions
<section id="instructions"> Camper CatGiữ một game hành động trực tiếp，Và muốn đối thủ cạnh tranh của mình xem ngày nào là tốt nhất.
。Thêm một<code>input</code>Đánh dấu，Của nó<code>type</code>Tài sản là“date”， <code>id</code>Tài sản là“pickdate”， <code>name</code>Tài sản là“date”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Mã của bạn nên thêm mã vào trường bộ chọn ngày<code>input</code>Đánh dấu。
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Của bạn<code>input</code>Thẻ phải có giá trị ngày<code>type</code>Thuộc tính。
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Của bạn<code>input</code>Thẻ phải có giá trị là lựa chọn<code>id</code>Thuộc tính。
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Của bạn<code>input</code>Thẻ phải có giá trị ngày<code>name</code>Thuộc tính。
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
