---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: Sử dụng đủ độ tương phản để tránh bị mù màu
---

## Description
<section id = "description"> Màu là một phần quan trọng trong thiết kế trực quan, nhưng việc sử dụng nó giới thiệu hai vấn đề về khả năng truy cập. Đầu tiên, bạn không nên chỉ sử dụng màu sắc như là cách duy nhất để truyền đạt thông tin quan trọng, bởi vì người dùng trình đọc màn hình sẽ không nhìn thấy nó. Thứ hai, màu nền trước và màu nền yêu cầu đủ độ tương phản để người dùng mù màu có thể phân biệt được chúng. Những thách thức trước đây bao gồm các lựa chọn thay thế văn bản để giải quyết vấn đề đầu tiên. Thử thách cuối cùng đã giới thiệu một trình kiểm tra độ tương phản để giúp người thứ hai. WCAG đề xuất tỷ lệ tương phản 4,5: 1 để sử dụng màu và kết hợp thang độ xám. Người dùng mù màu không thể phân biệt được một số màu nhất định và các màu khác - thường là tông màu, nhưng đôi khi chúng là ánh sáng. Bạn có thể nhớ lại các giá trị độ sáng (hoặc độ sáng) tương đối của màu nền trước và màu nền để tính độ tương phản. Trong thực tế, tỷ lệ 4.5: 1 đạt được bằng cách sử dụng bộ kiểm tra độ tương phản màu để làm tối màu tối hơn và màu sáng nhạt hơn. Các màu tối hơn trên bánh xe màu được coi là màu xanh, tím, đỏ tươi và đỏ, trong khi các màu sáng hơn là màu cam, vàng, xanh lục và xanh lục. </ section>

## Instructions
<section id = "instructions"> Camper Cat đang cố gắng sử dụng màu làm văn bản và nền blog của anh ấy, nhưng màu nền <code> màu nền </ code> màu xanh lá cây hiện tại của anh ấy và màu <code> màu cẩm chướng </ code> có 2.5 : 1 tỷ lệ tương phản. Bạn có thể dễ dàng điều chỉnh độ sáng của màu sắc bởi vì anh ta khai báo chúng bằng cách thay đổi tham số thứ ba bằng cách sử dụng thuộc tính CSS <code> hsl () </ code> (đại diện cho màu sắc, độ bão hòa, độ sáng). Tăng giá trị độ sáng <code> màu nền </ code> từ 35% lên 55% và giảm giá trị độ sáng <code> màu </ code> từ 20% xuống 15%. Điều này làm tăng độ tương phản lên 5,9: 1. </ section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Mã của bạn chỉ nên đặt văn bản<code>color</code>Giá trị độ sáng của thuộc tính được thay đổi thành giá trị 15%.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: Mã của bạn chỉ nên<code>background-color</code>Giá trị độ sáng của thuộc tính được thay đổi thành giá trị 55%.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
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
