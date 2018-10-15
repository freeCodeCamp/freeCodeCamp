---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Thêm văn bản thay thế cho hình ảnh cho người khiếm thị
---

## Description
<section id = "description"> Bạn hoàn toàn có thể thấy thuộc tính <code> alt </ code> của thẻ <code> img </ code> trong các thử thách khác. Văn bản <code> Alt </ code> mô tả nội dung của hình ảnh và cung cấp giải pháp thay thế văn bản. Điều này giúp trong trường hợp hình ảnh không tải hoặc người dùng không thể nhìn thấy. Nó cũng được sử dụng bởi các công cụ tìm kiếm để hiểu những gì hình ảnh chứa để đưa nó vào kết quả tìm kiếm. Dưới đây là ví dụ: <code> & lt; img src = & quot; importantLogo.jpeg & quot; alt = & quot; Biểu tượng công ty & quot; & gt; </ code> Người khiếm thị dựa vào trình đọc màn hình để chuyển nội dung web thành giao diện âm thanh. Nếu họ chỉ được trình bày trực quan, họ sẽ không thể nhận được thông tin. Đối với hình ảnh, trình đọc màn hình có thể truy cập thuộc tính <code> alt </ code> và đọc nội dung của nó để cung cấp thông tin quan trọng. Văn bản <code> alt </ code> tốt nhưng ngắn gọn và có ý nghĩa để truyền tải ý nghĩa của hình ảnh một thời gian ngắn. Bạn phải luôn bao gồm thuộc tính <code> alt </ code> trên hình ảnh. Theo đặc tả HTML5, điều này hiện được coi là bắt buộc. </ section>

## Instructions
<section id = "instructions"> Camper Cat xảy ra là một ninja mã hóa và một ninja thực sự, và đang xây dựng một trang web để chia sẻ kiến  thức của mình. Hình ảnh cá nhân anh ấy muốn sử dụng thể hiện kỹ năng của mình và nên được tất cả khách truy cập trang web đánh giá cao. Việc thêm thuộc tính <code> alt </ code> vào thẻ <code> img </ code> giải thích rằng Camper Cat đang làm karate. (Hình ảnh <code> src </ code> không được liên kết với tệp thực, vì vậy bạn sẽ thấy văn bản <code> alt </ code> trong màn hình.) </ Section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>img</code>Thẻ phải có<code>alt</code>Thuộc tính, không được để trống.
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
