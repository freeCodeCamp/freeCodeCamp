---
title: CSS Icons
---
## CSS Icons
 ## วิธีการเพิ่มไอคอน
 **วิธีการเพิ่มไอคอน**
วิธีที่ง่ายที่สุดในการเพิ่มไอคอนไปยังหน้า HTML ของคุณคือใช้ไลบรารีไอคอนเช่น Font Awesome เพิ่มชื่อของคลาสไอคอนที่ระบุไปยังองค์ประกอบ HTML แบบอินไลน์ (เช่น <i> หรือ <span>) ไอคอนทั้งหมดในไลบรารีไอคอนด้านล่างเป็นเวกเตอร์แบบปรับขนาดได้ซึ่งสามารถปรับแต่งด้วย CSS (ขนาดสีเงา ฯลฯ )
 **Font Awesome Icons**
ในการใช้ไอคอน Awesome ให้เพิ่มบรรทัดต่อไปนี้ภายในส่วน <head> ของหน้า HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
**ตัวอย่าง**
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <i class="fa fa-cloud"></i>
    <i class="fa fa-heart"></i>
    <i class="fa fa-car"></i>
    <i class="fa fa-file"></i>
    <i class="fa fa-bars"></i>
  </body>
</html>
```
