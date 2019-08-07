---
title: Xaml
localeTitle: Xaml
---
## XAML: lenguaje de marcado de aplicaciones extensible

XAML pronunciado como "Zammel" es un lenguaje de marca desarrollado por Microsoft. Este lenguaje de marcado se utiliza principalmente para diseñar GUIs. También es popular por su facilidad de uso en el flujo de trabajo.

Áreas como Silverlight, Mobile Development, WPF (Windows Presentation Foindation), Windows Store utiliza XAML en gran medida y abarca cualquier marco CLR y .NET.

Es un lenguaje declarativo y responde QUÉ y CÓMO. Su objetivo es separar el comportamiento del código de diseñador.

## Ejemplo

Creando un TextBlock con varias propiedades. Los TextBlocks se emplean generalmente para la salida de texto, al igual que las etiquetas en versiones anteriores de .NET framework.

```xml
<TextBlock Text="I am a TextBlock!" 
    HorizontalAlignment="Left" 
    FontSize="25" 
    FontWeight="Bold" 
    Margin="50,10,0,0" /> 
```

### Ejemplo 2

El siguiente ejemplo muestra una etiqueta con "Hello World!" como su contenido en un contenedor de nivel superior llamado UserControl.

```xml
<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"> 
    <Label Content="Hello World!" /> 
 </UserControl> 
```

### Más información:

*   [Un artículo para principiantes sobre XAML y el motor WPF](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)
    
*   [Magia XAML: Propiedades Adjuntas](http://www.codemag.com/article/1405061)
    
*   [Descripción general de XAML (WPF)](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)