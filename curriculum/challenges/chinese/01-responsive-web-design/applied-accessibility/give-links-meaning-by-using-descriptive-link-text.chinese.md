---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: Cho ý nghĩa liên kết bằng cách sử dụng văn bản liên kết mô tả
---

## Description
<section id = "description"> Người dùng trình đọc màn hình có các lựa chọn khác nhau cho loại nội dung họ đọc trên thiết bị của họ. Điều này bao gồm bỏ qua (hoặc ghi đè) phần tử dấu vị trí, chuyển đến nội dung chính hoặc nhận tóm tắt trang từ tiêu đề. Một tùy chọn khác là chỉ lắng nghe các liên kết có sẵn trên trang. Trình đọc màn hình thực hiện việc này bằng cách đọc nội dung giữa văn bản liên kết hoặc thẻ (<code> a </ code>). Liệt kê các liên kết "Bấm vào đây" hoặc "Đọc thêm" không giúp ích gì. Thay vào đó, bạn nên sử dụng văn bản ngắn nhưng mô tả trong thẻ <code> a </ code> để cung cấp cho những người dùng này nhiều ý nghĩa hơn. </ section>

## Instructions
<section id = "instructions"> Nếu không có bối cảnh xung quanh, văn bản liên kết mà Camper Cat đang sử dụng không phải là mô tả. Di chuyển các thẻ neo (<code> a </ code>) để chúng bao quanh văn bản "thông tin về pin" thay vì "bấm vào đây". </ section>

## Tests
<section id='tests'>

```yml
tests:
- văn bản: Mã của bạn nên di chuyển neo <code> a </ code> từ tab "Nhấp vào đây" xung quanh "Thông tin về pin".
    testString: 'assert ($ ("a"). text (). match (/ ^ (thông tin về pin) $ / g), "Mã của bạn nên di chuyển thẻ <code> a </ code> neo từ xung quanh các từ "Bấm vào đây" để quấn quanh các từ "thông tin về pin". "); '
  - văn bản: Đảm bảo phần tử <code> a </ code> của bạn có thẻ kết thúc.
    testString: 'assert (code.match (/ <\ / a> / g) && code.match (/ <\ / a> / g) .length === code.match (/ <a href = ("" | "")> / g) .length, "Đảm bảo phần tử <code> a </ code> của bạn có thẻ đóng."); '
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
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
