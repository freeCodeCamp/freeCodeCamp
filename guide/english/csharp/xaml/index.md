---
title: Xaml
---

## XAML: Extensible Application Markup Language


XAML pronounced as "Zammel" is a mark language developed by Microsoft. This markup language is mainly used for designing GUIs. Also it is popular for its usability in workflow. 

Areas like Silverlight, Mobile Development, WPF (Windows Presentation Foindation), Windows Store uses XAML heavily and span accross any CLR and .NET framework

Its a declaritive language and answers WHAT and HOW. It aims at separating the behavior from the designer code.

## Example
Creating a TextBlock with several properties.  TextBlocks are usually employed for the output of text, much like Labels in older versions of the .NET framework.

```xml
<TextBlock Text="I am a TextBlock!" 
	HorizontalAlignment="Left" 
	FontSize="25" 
	FontWeight="Bold" 
	Margin="50,10,0,0" />
```

### Example 2
The following example shows a label with "Hello World!" as its content in a top level container called UserControl.
```xml
<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
    <Label Content="Hello World!" />
</UserControl>
```

### More Information:

* [A Beginners Article about XAML and the WPF Engine](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)

* [XAML Magic: Attached Properties](http://www.codemag.com/article/1405061)

* [XAML Overview (WPF)](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)
