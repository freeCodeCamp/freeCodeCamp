---
title: Xaml
localeTitle: Xaml
---
## XAML: расширяемый язык разметки приложений

XAML, объявленный как «Zammel», является языком знаков, разработанным Microsoft. Этот язык разметки в основном используется для проектирования графических интерфейсов. Также он популярен благодаря удобству использования в рабочем процессе.

Области, такие как Silverlight, Mobile Development, WPF (Windows Presentation Foindation), Windows Store использует XAML в значительной степени и охватывает любые среды CLR и .NET

Его декларативный язык и ответы WHAT и HOW. Он направлен на отделение поведения от кода дизайнера.

## пример

Создание TextBlock с несколькими свойствами. TextBlocks обычно используются для вывода текста, подобно методам в старых версиях .NET framework.

```xml
<TextBlock Text="I am a TextBlock!" 
    HorizontalAlignment="Left" 
    FontSize="25" 
    FontWeight="Bold" 
    Margin="50,10,0,0" /> 
```

### Пример 2.

В следующем примере показана метка с «Hello World!». как его содержимое в контейнере верхнего уровня, называемом UserControl.

```xml
<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"> 
    <Label Content="Hello World!" /> 
 </UserControl> 
```

### Дополнительная информация:

*   [Статья начинающих о XAML и WPF Engine](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)
    
*   [XAML Magic: добавленные свойства](http://www.codemag.com/article/1405061)
    
*   [Обзор XAML (WPF)](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)