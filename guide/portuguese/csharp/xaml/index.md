---
title: Xaml
localeTitle: Xaml
---
## XAML: Extensible Application Markup Language

XAML pronunciado como "Zammel" é uma linguagem de marca desenvolvida pela Microsoft. Essa linguagem de marcação é usada principalmente para projetar GUIs. Também é popular pela sua usabilidade no fluxo de trabalho.

Áreas como Silverlight, Desenvolvimento Móvel, WPF (Windows Presentation Foindation), Windows Store usam o XAML muito e abrangem qualquer estrutura CLR e .NET

É uma linguagem declarativa e responde o que e como. Destina-se a separar o comportamento do código de designer.

## Exemplo

Criando um TextBlock com várias propriedades. TextBlocks geralmente são empregados para a saída de texto, muito parecido com Labels em versões mais antigas do .NET framework.

```xml
<TextBlock Text="I am a TextBlock!" 
    HorizontalAlignment="Left" 
    FontSize="25" 
    FontWeight="Bold" 
    Margin="50,10,0,0" /> 
```

### Exemplo 2

O exemplo a seguir mostra um rótulo com "Hello World!" como seu conteúdo em um contêiner de nível superior chamado UserControl.

```xml
<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"> 
    <Label Content="Hello World!" /> 
 </UserControl> 
```

### Mais Informações:

*   [Um artigo para iniciantes sobre o XAML e o mecanismo do WPF](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)
    
*   [XAML Magic: propriedades anexadas](http://www.codemag.com/article/1405061)
    
*   [Visão Geral do XAML (WPF)](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)