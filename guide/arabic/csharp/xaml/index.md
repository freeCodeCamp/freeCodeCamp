---
title: Xaml
localeTitle: XAML
---
## XAML: لغة توصيف التطبيق القابلة للتوسيع

إعلان XAML باسم "Zammel" هي لغة علامة تم تطويرها بواسطة Microsoft. يتم استخدام لغة الترميز هذه بشكل أساسي لتصميم واجهة المستخدم الرسومية. كما أنها تحظى بشعبية في قابليتها للاستخدام في سير العمل.

تستخدم مناطق مثل Silverlight و Mobile Development و WPF (Windows Presentation Foindation) و Windows Store XAML بكثافة وتمتد عبر أي CLR و .NET framework

في لغة مبدئية والإجابات ما وكيف. يهدف إلى فصل السلوك عن رمز المصمم.

## مثال

إنشاء TextBlock مع خصائص متعددة. يتم استخدام TextBlocks عادة لإخراج النص ، مثل الكثير من التسميات في الإصدارات القديمة من .NET framework.

 `<TextBlock Text="I am a TextBlock!" 
    HorizontalAlignment="Left" 
    FontSize="25" 
    FontWeight="Bold" 
    Margin="50,10,0,0" /> 
` 

### مثال 2

يوضح المثال التالي تسمية "Hello World!" كمحتوى في حاوية مستوى أعلى تسمى UserControl.

 `<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"> 
    <Label Content="Hello World!" /> 
 </UserControl> 
` 

### معلومات اكثر:

*   [مقال مبتدئين حول XAML ومحرك WPF](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)
    
*   [XAML ماجيك: خصائص مرفقة](http://www.codemag.com/article/1405061)
    
*   [XAML نظرة عامة (WPF)](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)