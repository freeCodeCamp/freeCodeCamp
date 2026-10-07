# AXObject Query

![CI](https://github.com/A11yance/axobject-query/workflows/CI/badge.svg)

Approximate model of the [Chrome AXObject](https://cs.chromium.org/chromium/src/third_party/WebKit/Source/modules/accessibility/AXObject.h).

The project attempts to map the AXObject concepts to the [WAI-ARIA 1.1 Roles Model](https://www.w3.org/TR/wai-aria-1.1/#roles) so that a complete representation of the semantic HTML layer, as it is exposed assistive technology, can be obtained.

CDN URL: <https://unpkg.com/axobject-query>

## Utilities

### AXObjects

```javascript
import { AXObjects } from 'axobject-query';
```

#### Interface

These methods are available on each export from the module. The typing here in the documentation is pseudo-typed. Each export will have its own specific types for each method signature.

```javascript
{|
  entries: () => Array<$Item>,
  get: (key: $Key) => ?$Value,
  has: (key: $Key) => boolean,
  keys: () => Array<$Key>,
  values: () => Array<$Value>,
|};
```

### Concepts in the project

AXObjects are mapped to their HTML and ARIA concepts in the `relatedConcepts` field.

The `type` field is a loose association of an AXObject to the `window`, `structure` and `widget` abstract roles in ARIA. The `generic` value is given to `DivRole`; it does not exist in ARIA. Divs are special in HTML in the way that they are used as generic containers. Span might have also been associated with a generic type except that there is no `SpanRole` AXObject.

```javascript
[
  [ 'AbbrRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'AlertDialogRole', { relatedConcepts: [ [Object] ], type: 'window' } ],
  [ 'AlertRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'AnnotationRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ApplicationRole', { relatedConcepts: [ [Object] ], type: 'window' } ],
  [ 'ArticleRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'AudioRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'BannerRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'BlockquoteRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'BusyIndicatorRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'ButtonRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'CanvasRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'CaptionRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'CellRole', { relatedConcepts: [ [Object], [Object], [Object] ], type: 'widget' } ],
  [ 'CheckBoxRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'ColorWellRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'ColumnHeaderRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'ColumnRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ComboBoxRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'ComplementaryRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'ContentInfoRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DateRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'DateTimeRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'DefinitionRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DescriptionListDetailRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DescriptionListRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DescriptionListTermRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DetailsRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'DialogRole', { relatedConcepts: [ [Object], [Object] ], type: 'window' } ],
  [ 'DirectoryRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'DisclosureTriangleRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'DivRole', { relatedConcepts: [ [Object] ], type: 'generic' } ],
  [ 'DocumentRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'EmbeddedObjectRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'FeedRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'FigcaptionRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'FigureRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'FooterRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'FormRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'GridRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'GroupRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'HeadingRole', { relatedConcepts: [ [Object], [Object], [Object], [Object], [Object], [Object], [Object] ], type: 'structure' } ],
  [ 'IframePresentationalRole', { relatedConcepts: [], type: 'window' } ],
  [ 'IframeRole', { relatedConcepts: [ [Object] ], type: 'window' } ],
  [ 'IgnoredRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ImageMapLinkRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'ImageMapRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'ImageRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'InlineTextBoxRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'InputTimeRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'LabelRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'LegendRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'LineBreakRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'LinkRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'ListBoxOptionRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'ListBoxRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'ListItemRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'ListMarkerRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ListRole', { relatedConcepts: [ [Object], [Object], [Object] ], type: 'structure' } ],
  [ 'LogRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'MainRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'MarkRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'MarqueeRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'MathRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'MenuBarRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'MenuButtonRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'MenuItemRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'MenuItemCheckBoxRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'MenuItemRadioRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'MenuListOptionRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'MenuListPopupRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'MenuRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'MeterRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'NavigationRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'NoneRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'NoteRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'OutlineRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ParagraphRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'PopUpButtonRole', { relatedConcepts: [], type: 'widget' } ],
  [ 'PreRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'PresentationalRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'ProgressIndicatorRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'RadioButtonRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'RadioGroupRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'RegionRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'RootWebAreaRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'RowHeaderRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'RowRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'RubyRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'RulerRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ScrollAreaRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'ScrollBarRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'SeamlessWebAreaRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'SearchRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'SearchBoxRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'SliderRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'SliderThumbRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'SpinButtonRole', { relatedConcepts: [ [Object], [Object] ], type: 'widget' } ],
  [ 'SpinButtonPartRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'SplitterRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'StaticTextRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'StatusRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'SVGRootRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'SwitchRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'TabGroupRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TabRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'TableHeaderContainerRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'TableRole', { relatedConcepts: [ [Object], [Object] ], type: 'structure' } ],
  [ 'TabListRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TabPanelRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TermRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TextFieldRole', { relatedConcepts: [ [Object], [Object], [Object] ], type: 'widget' } ],
  [ 'TimeRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TimerRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'ToggleButtonRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'ToolbarRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'TreeRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'TreeGridRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'TreeItemRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'UserInterfaceTooltipRole', { relatedConcepts: [ [Object] ], type: 'structure' } ],
  [ 'VideoRole', { relatedConcepts: [ [Object] ], type: 'widget' } ],
  [ 'WebAreaRole', { relatedConcepts: [], type: 'structure' } ],
  [ 'WindowRole', { relatedConcepts: [], type: 'window' } ],
]
```

### AXObject to Element

```javascript
import { AXObjectElements } from 'axobject-query';
```

AXObjects are mapped to their related HTML concepts, which may require attributes (in the case of inputs) to obtain the correct association.

```javascript
[
  [ 'AbbrRole', [ { name: 'abbr' } ] ],
  [ 'ArticleRole', [ { name: 'article' } ] ],
  [ 'AudioRole', [ { name: 'audio' } ] ],
  [ 'BlockquoteRole', [ { name: 'blockquote' } ] ],
  [ 'ButtonRole', [ { name: 'button' } ] ],
  [ 'CanvasRole', [ { name: 'canvas' } ] ],
  [ 'CaptionRole', [ { name: 'caption' } ] ],
  [ 'CellRole', [ { name: 'td' } ] ],
  [ 'CheckBoxRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'ColorWellRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'ColumnHeaderRole', [ { name: 'th' } ] ],
  [ 'DateRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'DateTimeRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'DefinitionRole', [ { name: 'dfn' } ] ],
  [ 'DescriptionListDetailRole', [ { name: 'dd' } ] ],
  [ 'DescriptionListRole', [ { name: 'dl' } ] ],
  [ 'DescriptionListTermRole', [ { name: 'dt' } ] ],
  [ 'DetailsRole', [ { name: 'details' } ] ],
  [ 'DialogRole', [ { name: 'dialog' } ] ],
  [ 'DirectoryRole', [ { name: 'dir' } ] ],
  [ 'DivRole', [ { name: 'div' } ] ],
  [ 'EmbeddedObjectRole', [ { name: 'embed' } ] ],
  [ 'FigcaptionRole', [ { name: 'figcaption' } ] ],
  [ 'FigureRole', [ { name: 'figure' } ] ],
  [ 'FooterRole', [ { name: 'footer' } ] ],
  [ 'FormRole', [ { name: 'form' } ] ],
  [ 'HeadingRole', [ { name: 'h1' }, { name: 'h2' }, { name: 'h3' }, { name: 'h4' }, { name: 'h5' }, { name: 'h6' } ] ],
  [ 'IframeRole', [ { name: 'iframe' } ] ],
  [ 'ImageMapRole', [ { name: 'img', attributes: [Object] } ] ],
  [ 'ImageRole', [ { name: 'img' } ] ],
  [ 'InlineTextBoxRole', [ { name: 'input' } ] ],
  [ 'InputTimeRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'LabelRole', [ { name: 'label' } ] ],
  [ 'LegendRole', [ { name: 'legend' } ] ],
  [ 'LineBreakRole', [ { name: 'br' } ] ],
  [ 'LinkRole', [ { name: 'a', attributes: [Object] } ] ],
  [ 'ListBoxOptionRole', [ { name: 'option' } ] ],
  [ 'ListItemRole', [ { name: 'li' } ] ],
  [ 'ListRole', [ { name: 'ul' }, { name: 'ol' } ] ],
  [ 'MainRole', [ { name: 'main' } ] ],
  [ 'MarkRole', [ { name: 'mark' } ] ],
  [ 'MarqueeRole', [ { name: 'marquee' } ] ],
  [ 'MenuItemRole', [ { name: 'menuitem' } ] ],
  [ 'MenuRole', [ { name: 'menu' } ] ],
  [ 'MeterRole', [ { name: 'meter' } ] ],
  [ 'NavigationRole', [ { name: 'nav' } ] ],
  [ 'ParagraphRole', [ { name: 'p' } ] ],
  [ 'PreRole', [ { name: 'pre' } ] ],
  [ 'ProgressIndicatorRole', [ { name: 'progress' } ] ],
  [ 'RadioButtonRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'RowHeaderRole', [ { name: 'th', attributes: [Object] } ] ],
  [ 'RowRole', [ { name: 'tr' } ] ],
  [ 'RubyRole', [ { name: 'ruby' } ] ],
  [ 'SearchBoxRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'SliderRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'SpinButtonRole', [ { name: 'input', attributes: [Object] } ] ],
  [ 'TableRole', [ { name: 'table' } ] ],
  [ 'TextFieldRole', [ { name: 'input' }, { name: 'input', attributes: [Object] } ] ],
  [ 'TimeRole', [ { name: 'time' } ] ],
  [ 'VideoRole', [ { name: 'video' ] ],
]
```

### AXObject to Role

```javascript
import { AXObjectRoles } from 'axobject-query';
```

AXObjects are mapped to their related ARIA concepts..

```javascript
[
  [ 'AlertDialogRole', [ { name: 'alertdialog' } ] ],
  [ 'AlertRole', [ { name: 'alert' } ] ],
  [ 'ApplicationRole', [ { name: 'application' } ] ],
  [ 'ArticleRole', [ { name: 'article' } ] ],
  [ 'BannerRole', [ { name: 'banner' } ] ],
  [ 'BusyIndicatorRole', [ { attributes: [Object] } ] ],
  [ 'ButtonRole', [ { name: 'button' } ] ],
  [ 'CellRole', [ { name: 'cell' }, { name: 'gridcell' } ] ],
  [ 'CheckBoxRole', [ { name: 'checkbox' } ] ],
  [ 'ColumnHeaderRole', [ { name: 'columnheader' } ] ],
  [ 'ComboBoxRole', [ { name: 'combobox' } ] ],
  [ 'ComplementaryRole', [ { name: 'complementary' } ] ],
  [ 'ContentInfoRole', [ { name: 'structureinfo' } ] ],
  [ 'DialogRole', [ { name: 'dialog' } ] ],
  [ 'DirectoryRole', [ { name: 'directory' } ] ],
  [ 'DocumentRole', [ { name: 'document' } ] ],
  [ 'FeedRole', [ { name: 'feed' } ] ],
  [ 'FigureRole', [ { name: 'figure' } ] ],
  [ 'FormRole', [ { name: 'form' } ] ],
  [ 'GridRole', [ { name: 'grid' } ] ],
  [ 'GroupRole', [ { name: 'group' } ] ],
  [ 'HeadingRole', [ { name: 'heading' } ] ],
  [ 'ImageRole', [ { name: 'img' } ] ],
  [ 'LinkRole', [ { name: 'link' } ] ],
  [ 'ListBoxOptionRole', [ { name: 'option' } ] ],
  [ 'ListBoxRole', [ { name: 'listbox' } ] ],
  [ 'ListItemRole', [ { name: 'listitem' } ] ],
  [ 'ListRole', [ { name: 'list' } ] ],
  [ 'LogRole', [ { name: 'log' } ] ],
  [ 'MainRole', [ { name: 'main' } ] ],
  [ 'MarqueeRole', [ { name: 'marquee' } ] ],
  [ 'MathRole', [ { name: 'math' } ] ],
  [ 'MenuBarRole', [ { name: 'menubar' } ] ],
  [ 'MenuItemRole', [ { name: 'menuitem' } ] ],
  [ 'MenuItemCheckBoxRole', [ { name: 'menuitemcheckbox' } ] ],
  [ 'MenuItemRadioRole', [ { name: 'menuitemradio' } ] ],
  [ 'MenuRole', [ { name: 'menu' } ] ],
  [ 'NavigationRole', [ { name: 'navigation' } ] ],
  [ 'NoneRole', [ { name: 'none' } ] ],
  [ 'NoteRole', [ { name: 'note' } ] ],
  [ 'PresentationalRole', [ { name: 'presentation' } ] ],
  [ 'ProgressIndicatorRole', [ { name: 'progressbar' } ] ],
  [ 'RadioButtonRole', [ { name: 'radio' } ] ],
  [ 'RadioGroupRole', [ { name: 'radiogroup' } ] ],
  [ 'RegionRole', [ { name: 'region' } ] ],
  [ 'RowHeaderRole', [ { name: 'rowheader' } ] ],
  [ 'RowRole', [ { name: 'row' } ] ],
  [ 'ScrollBarRole', [ { name: 'scrollbar' } ] ],
  [ 'SearchRole', [ { name: 'search' } ] ],
  [ 'SearchBoxRole', [ { name: 'searchbox' } ] ],
  [ 'SliderRole', [ { name: 'slider' } ] ],
  [ 'SpinButtonRole', [ { name: 'spinbutton' } ] ],
  [ 'SplitterRole', [ { name: 'separator' } ] ],
  [ 'StatusRole', [ { name: 'status' } ] ],
  [ 'SwitchRole', [ { name: 'switch' } ] ],
  [ 'TabGroupRole', [ { name: 'tablist' } ] ],
  [ 'TabRole', [ { name: 'tab' } ] ],
  [ 'TableRole', [ { name: 'table' } ] ],
  [ 'TabListRole', [ { name: 'tablist' } ] ],
  [ 'TabPanelRole', [ { name: 'tabpanel' } ] ],
  [ 'TermRole', [ { name: 'term' } ] ],
  [ 'TextFieldRole', [ { name: 'textbox' } ] ],
  [ 'TimerRole', [ { name: 'timer' } ] ],
  [ 'ToggleButtonRole', [ { attributes: [Object] } ] ],
  [ 'ToolbarRole', [ { name: 'toolbar' } ] ],
  [ 'TreeRole', [ { name: 'tree' } ] ],
  [ 'TreeGridRole', [ { name: 'treegrid' } ] ],
  [ 'TreeItemRole', [ { name: 'treeitem' } ] ],
  [ 'UserInterfaceTooltipRole', [ { name: 'tooltip' } ] ],
]
```

### Element to AXObject

```javascript
import { elementAXObjects } from 'axobject-query';
```

HTML elements are mapped to their related AXConcepts concepts.

```javascript
[
  [ { name: 'abbr' }, [ 'AbbrRole' ] ],
  [ { name: 'article' }, [ 'ArticleRole' ] ],
  [ { name: 'audio' }, [ 'AudioRole' ] ],
  [ { name: 'blockquote' }, [ 'BlockquoteRole' ] ],
  [ { name: 'button' }, [ 'ButtonRole' ] ],
  [ { name: 'canvas' }, [ 'CanvasRole' ] ],
  [ { name: 'caption' }, [ 'CaptionRole' ] ],
  [ { name: 'td' }, [ 'CellRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'CheckBoxRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'ColorWellRole' ] ],
  [ { name: 'th' }, [ 'ColumnHeaderRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'DateRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'DateTimeRole' ] ],
  [ { name: 'dfn' }, [ 'DefinitionRole' ] ],
  [ { name: 'dd' }, [ 'DescriptionListDetailRole' ] ],
  [ { name: 'dl' }, [ 'DescriptionListRole' ] ],
  [ { name: 'dt' }, [ 'DescriptionListTermRole' ] ],
  [ { name: 'details' }, [ 'DetailsRole' ] ],
  [ { name: 'dialog' }, [ 'DialogRole' ] ],
  [ { name: 'dir' }, [ 'DirectoryRole' ] ],
  [ { name: 'div' }, [ 'DivRole' ] ],
  [ { name: 'embed' }, [ 'EmbeddedObjectRole' ] ],
  [ { name: 'figcaption' }, [ 'FigcaptionRole' ] ],
  [ { name: 'figure' }, [ 'FigureRole' ] ],
  [ { name: 'footer' }, [ 'FooterRole' ] ],
  [ { name: 'form' }, [ 'FormRole' ] ],
  [ { name: 'h1' }, [ 'HeadingRole' ] ],
  [ { name: 'h2' }, [ 'HeadingRole' ] ],
  [ { name: 'h3' }, [ 'HeadingRole' ] ],
  [ { name: 'h4' }, [ 'HeadingRole' ] ],
  [ { name: 'h5' }, [ 'HeadingRole' ] ],
  [ { name: 'h6' }, [ 'HeadingRole' ] ],
  [ { name: 'iframe' }, [ 'IframeRole' ] ],
  [ { name: 'img', attributes: [ [Object] ] }, [ 'ImageMapRole' ] ],
  [ { name: 'img' }, [ 'ImageRole' ] ],
  [ { name: 'input' }, [ 'InlineTextBoxRole', 'TextFieldRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'InputTimeRole' ] ],
  [ { name: 'label' }, [ 'LabelRole' ] ],
  [ { name: 'legend' }, [ 'LegendRole' ] ],
  [ { name: 'br' }, [ 'LineBreakRole' ] ],
  [ { name: 'a', attributes: [ [Object] ] }, [ 'LinkRole' ] ],
  [ { name: 'option' }, [ 'ListBoxOptionRole' ] ],
  [ { name: 'li' }, [ 'ListItemRole' ] ],
  [ { name: 'ul' }, [ 'ListRole' ] ],
  [ { name: 'ol' }, [ 'ListRole' ] ],
  [ { name: 'main' }, [ 'MainRole' ] ],
  [ { name: 'mark' }, [ 'MarkRole' ] ],
  [ { name: 'marquee' }, [ 'MarqueeRole' ] ],
  [ { name: 'menuitem' }, [ 'MenuItemRole' ] ],
  [ { name: 'menu' }, [ 'MenuRole' ] ],
  [ { name: 'meter' }, [ 'MeterRole' ] ],
  [ { name: 'nav' }, [ 'NavigationRole' ] ],
  [ { name: 'p' }, [ 'ParagraphRole' ] ],
  [ { name: 'pre' }, [ 'PreRole' ] ],
  [ { name: 'progress' }, [ 'ProgressIndicatorRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'RadioButtonRole' ] ],
  [ { name: 'th', attributes: [ [Object] ] }, [ 'RowHeaderRole' ] ],
  [ { name: 'tr' }, [ 'RowRole' ] ],
  [ { name: 'ruby' }, [ 'RubyRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'SearchBoxRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'SliderRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'SpinButtonRole' ] ],
  [ { name: 'table' }, [ 'TableRole' ] ],
  [ { name: 'input' }, [ 'InlineTextBoxRole', 'TextFieldRole' ] ],
  [ { name: 'input', attributes: [ [Object] ] }, [ 'TextFieldRole' ] ],
  [ { name: 'time' }, [ 'TimeRole' ] ],
  [ { name: 'video' }, [ 'VideoRole' ] ],
]
```

## License

Copyright (c) 2021 A11yance
