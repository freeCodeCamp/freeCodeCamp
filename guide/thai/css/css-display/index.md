---
หัวข้อ: การแสดงผล CSS
---
## การแสดงผล CSS

คุณสมบัติการแสดงผลจะระบุชนิดของช่องที่ใช้สำหรับองค์ประกอบ HTML มีค่าคำหลัก 20 ค่าที่เป็นไปได้ ที่ใช้กันทั่วไปคือ: 

```css
    .none             {display: none}
    .block            {display: block}
    .inline-block     {display: inline-block}
    .inline           {display: inline}
    .flex             {display: flex}
    .inline-flex      {display: inline-flex}
    .inline-table     {display: inline-table}
    .table            {display: table}
    .inherit          {display: inherit}
    .initial          {display: initial}
```
คุณสมบัติ `display: none` มักเป็นประโยชน์เมื่อทำเว็บไซต์แบบ responsive ตัวอย่างเช่นคุณอาจต้องการซ่อนองค์ประกอบในเพจเนื่องจากขนาดของหน้าจอหดตัวเพื่อชดเชยการขาดพื้นที่ `display: none` จะไม่เพียง แต่ซ่อนองค์ประกอบ แต่องค์ประกอบอื่น ๆ ทั้งหมดบนหน้าเว็บจะทำงานเหมือนกับว่าองค์ประกอบนั้นไม่มีอยู่ นี่คือข้อแตกต่างที่ยิ่งใหญ่ที่สุดระหว่าง property นี้และคุณสมบัติ `visibility: hidden`ซึ่งจะซ่อนองค์ประกอบ แต่จะเก็บองค์ประกอบของหน้าเว็บทั้งหมดไว้ในที่เดียวกับที่ปรากฏในส่วนที่ซ่อนอยู่

keyword หลักเหล่านี้ถูกจัดกลุ่มเป็นหกหมวดหมู่:

* ```<display-inside>```
* ```<display-outside>```
* ```<display-listitem>```
* ```<display-box>```
* ```<display-internal>```
* ```<display-legacy>```

### ข้อมูลมากกว่านี้:

- [MDN - display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [caniuse - Browser Support](http://caniuse.com/#search=display)
- [CSS-Tricks- A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
