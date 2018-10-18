---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: Tránh mù màu bằng cách lựa chọn cẩn thận màu sắc của tin nhắn
---

## Description
<section id = "description"> Có nhiều dạng mù màu khác nhau. Những phạm vi này có thể được giảm từ độ nhạy với ánh sáng của một bước sóng cụ thể để không có màu nào cả. Dạng phổ biến nhất là phát hiện sự giảm độ nhạy của màu xanh lá cây. Ví dụ: nếu hai màu xanh tương tự là màu nền trước và màu nền của nội dung, người dùng bị mù màu có thể không phân biệt được chúng. Tắt màu sắc có thể được coi là hàng xóm trên bánh xe màu và tránh những kết hợp này khi truyền đạt thông tin quan trọng. <strong> Lưu ý </ strong> <br> Một số công cụ chọn màu trực tuyến bao gồm mô phỏng trực quan về cách màu bị mù đối với các loại màu khác nhau. Đây là những tài nguyên tốt ngoài máy tính kiểm tra độ tương phản trực tuyến. </ section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Mã của bạn phải là<code>button</code>Văn bản<code>color</code>Thay đổi thành màu lam đậm。
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
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
