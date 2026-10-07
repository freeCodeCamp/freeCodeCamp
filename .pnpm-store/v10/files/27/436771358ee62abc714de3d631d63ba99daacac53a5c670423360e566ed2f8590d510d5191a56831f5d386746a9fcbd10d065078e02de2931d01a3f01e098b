let unpack = require('caniuse-lite/dist/unpacker/feature')

function browsersSort(a, b) {
  a = a.split(' ')
  b = b.split(' ')
  if (a[0] > b[0]) {
    return 1
  } else if (a[0] < b[0]) {
    return -1
  } else {
    return Math.sign(parseFloat(a[1]) - parseFloat(b[1]))
  }
}

// Convert Can I Use data
function f(data, opts, callback) {
  data = unpack(data)

  if (!callback) {
    ;[callback, opts] = [opts, {}]
  }

  let match = opts.match || /\sx($|\s)/
  let need = []

  for (let browser in data.stats) {
    let versions = data.stats[browser]
    for (let version in versions) {
      let support = versions[version]
      if (support.match(match)) {
        need.push(browser + ' ' + version)
      }
    }
  }

  callback(need.sort(browsersSort))
}

// Add data for all properties
let result = {}

function prefix(names, data) {
  for (let name of names) {
    result[name] = Object.assign({}, data)
  }
}

function add(names, data) {
  for (let name of names) {
    result[name].browsers = result[name].browsers
      .concat(data.browsers)
      .sort(browsersSort)
  }
}

module.exports = result

// Border Radius
let prefixBorderRadius = require('caniuse-lite/data/features/border-radius')

f(prefixBorderRadius, browsers =>
  prefix(
    [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius'
    ],
    {
      browsers,
      feature: 'border-radius',
      mistakes: ['-khtml-', '-ms-', '-o-']
    }
  )
)

// Box Shadow
let prefixBoxshadow = require('caniuse-lite/data/features/css-boxshadow')

f(prefixBoxshadow, browsers =>
  prefix(['box-shadow'], {
    browsers,
    feature: 'css-boxshadow',
    mistakes: ['-khtml-']
  })
)

// Animation
let prefixAnimation = require('caniuse-lite/data/features/css-animation')

f(prefixAnimation, browsers =>
  prefix(
    [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-delay',
      'animation-direction',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-play-state',
      'animation-timing-function',
      '@keyframes'
    ],
    {
      browsers,
      feature: 'css-animation',
      mistakes: ['-khtml-', '-ms-']
    }
  )
)

// Transition
let prefixTransition = require('caniuse-lite/data/features/css-transitions')

f(prefixTransition, browsers =>
  prefix(
    [
      'transition',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'transition-timing-function'
    ],
    {
      browsers,
      feature: 'css-transitions',
      mistakes: ['-khtml-', '-ms-']
    }
  )
)

// Transform 2D
let prefixTransform2d = require('caniuse-lite/data/features/transforms2d')

f(prefixTransform2d, browsers =>
  prefix(['transform', 'transform-origin'], {
    browsers,
    feature: 'transforms2d'
  })
)

// Transform 3D
let prefixTransforms3d = require('caniuse-lite/data/features/transforms3d')

f(prefixTransforms3d, browsers => {
  prefix(['perspective', 'perspective-origin'], {
    browsers,
    feature: 'transforms3d'
  })
  return prefix(['transform-style'], {
    browsers,
    feature: 'transforms3d',
    mistakes: ['-ms-', '-o-']
  })
})

f(prefixTransforms3d, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backface-visibility'], {
    browsers,
    feature: 'transforms3d',
    mistakes: ['-ms-', '-o-']
  })
)

// Gradients
let prefixGradients = require('caniuse-lite/data/features/css-gradients')

f(prefixGradients, { match: /y\sx/ }, browsers =>
  prefix(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      browsers,
      feature: 'css-gradients',
      mistakes: ['-ms-'],
      props: [
        'background',
        'background-image',
        'border-image',
        'mask',
        'list-style',
        'list-style-image',
        'content',
        'mask-image'
      ]
    }
  )
)

f(prefixGradients, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/firefox|op/.test(i)) {
      return i
    } else {
      return `${i} old`
    }
  })
  return add(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      browsers,
      feature: 'css-gradients'
    }
  )
})

// Box sizing
let prefixBoxsizing = require('caniuse-lite/data/features/css3-boxsizing')

f(prefixBoxsizing, browsers =>
  prefix(['box-sizing'], {
    browsers,
    feature: 'css3-boxsizing'
  })
)

// Filter Effects
let prefixFilters = require('caniuse-lite/data/features/css-filters')

f(prefixFilters, browsers =>
  prefix(['filter'], {
    browsers,
    feature: 'css-filters'
  })
)

// filter() function
let prefixFilterFunction = require('caniuse-lite/data/features/css-filter-function')

f(prefixFilterFunction, browsers =>
  prefix(['filter-function'], {
    browsers,
    feature: 'css-filter-function',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Backdrop-filter
let prefixBackdropFilter = require('caniuse-lite/data/features/css-backdrop-filter')

f(prefixBackdropFilter, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backdrop-filter'], {
    browsers,
    feature: 'css-backdrop-filter'
  })
)

// element() function
let prefixElementFunction = require('caniuse-lite/data/features/css-element-function')

f(prefixElementFunction, browsers =>
  prefix(['element'], {
    browsers,
    feature: 'css-element-function',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Multicolumns
let prefixMulticolumns = require('caniuse-lite/data/features/multicolumn')

f(prefixMulticolumns, browsers => {
  prefix(
    [
      'columns',
      'column-width',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-width',
      'column-count',
      'column-rule-style',
      'column-span',
      'column-fill'
    ],
    {
      browsers,
      feature: 'multicolumn'
    }
  )

  let noff = browsers.filter(i => !/firefox/.test(i))
  prefix(['break-before', 'break-after', 'break-inside'], {
    browsers: noff,
    feature: 'multicolumn'
  })
})

// User select
let prefixUserSelect = require('caniuse-lite/data/features/user-select-none')

f(prefixUserSelect, browsers =>
  prefix(['user-select'], {
    browsers,
    feature: 'user-select-none',
    mistakes: ['-khtml-']
  })
)

// Flexible Box Layout
let prefixFlexbox = require('caniuse-lite/data/features/flexbox')

f(prefixFlexbox, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/ie|firefox/.test(i)) {
      return i
    } else {
      return `${i} 2009`
    }
  })
  prefix(['display-flex', 'inline-flex'], {
    browsers,
    feature: 'flexbox',
    props: ['display']
  })
  prefix(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    browsers,
    feature: 'flexbox'
  })
  prefix(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      browsers,
      feature: 'flexbox'
    }
  )
})

f(prefixFlexbox, { match: /y\sx/ }, browsers => {
  add(['display-flex', 'inline-flex'], {
    browsers,
    feature: 'flexbox'
  })
  add(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    browsers,
    feature: 'flexbox'
  })
  add(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      browsers,
      feature: 'flexbox'
    }
  )
})

// calc() unit
let prefixCalc = require('caniuse-lite/data/features/calc')

f(prefixCalc, browsers =>
  prefix(['calc'], {
    browsers,
    feature: 'calc',
    props: ['*']
  })
)

// Background options
let prefixBackgroundOptions = require('caniuse-lite/data/features/background-img-opts')

f(prefixBackgroundOptions, browsers =>
  prefix(['background-origin', 'background-size'], {
    browsers,
    feature: 'background-img-opts'
  })
)

// background-clip: text
let prefixBackgroundClipText = require('caniuse-lite/data/features/background-clip-text')

f(prefixBackgroundClipText, browsers =>
  prefix(['background-clip'], {
    browsers,
    feature: 'background-clip-text'
  })
)

// Font feature settings
let prefixFontFeature = require('caniuse-lite/data/features/font-feature')

f(prefixFontFeature, browsers =>
  prefix(
    [
      'font-feature-settings',
      'font-variant-ligatures',
      'font-language-override'
    ],
    {
      browsers,
      feature: 'font-feature'
    }
  )
)

// CSS font-kerning property
let prefixFontKerning = require('caniuse-lite/data/features/font-kerning')

f(prefixFontKerning, browsers =>
  prefix(['font-kerning'], {
    browsers,
    feature: 'font-kerning'
  })
)

// Border image
let prefixBorderImage = require('caniuse-lite/data/features/border-image')

f(prefixBorderImage, browsers =>
  prefix(['border-image'], {
    browsers,
    feature: 'border-image'
  })
)

// Selection selector
let prefixSelection = require('caniuse-lite/data/features/css-selection')

f(prefixSelection, browsers =>
  prefix(['::selection'], {
    browsers,
    feature: 'css-selection',
    selector: true
  })
)

// Placeholder selector
let prefixPlaceholder = require('caniuse-lite/data/features/css-placeholder')

f(prefixPlaceholder, browsers => {
  prefix(['::placeholder'], {
    browsers: browsers.concat(['ie 10 old', 'ie 11 old', 'firefox 18 old']),
    feature: 'css-placeholder',
    selector: true
  })
})

// Placeholder-shown selector
let prefixPlaceholderShown = require('caniuse-lite/data/features/css-placeholder-shown')

f(prefixPlaceholderShown, browsers => {
  prefix([':placeholder-shown'], {
    browsers,
    feature: 'css-placeholder-shown',
    selector: true
  })
})

// Hyphenation
let prefixHyphens = require('caniuse-lite/data/features/css-hyphens')

f(prefixHyphens, browsers =>
  prefix(['hyphens'], {
    browsers,
    feature: 'css-hyphens'
  })
)

// Fullscreen selector
let prefixFullscreen = require('caniuse-lite/data/features/fullscreen')

f(prefixFullscreen, browsers =>
  prefix([':fullscreen'], {
    browsers,
    feature: 'fullscreen',
    selector: true
  })
)

// ::backdrop pseudo-element
// https://caniuse.com/mdn-css_selectors_backdrop
let prefixBackdrop = require('caniuse-lite/data/features/mdn-css-backdrop-pseudo-element')

f(prefixBackdrop, browsers =>
  prefix(['::backdrop'], {
    browsers,
    feature: 'backdrop',
    selector: true
  })
)

// File selector button
let prefixFileSelectorButton = require('caniuse-lite/data/features/css-file-selector-button')

f(prefixFileSelectorButton, browsers =>
  prefix(['::file-selector-button'], {
    browsers,
    feature: 'file-selector-button',
    selector: true
  })
)

// :autofill
let prefixAutofill = require('caniuse-lite/data/features/css-autofill')

f(prefixAutofill, browsers =>
  prefix([':autofill'], {
    browsers,
    feature: 'css-autofill',
    selector: true
  })
)

// Tab size
let prefixTabsize = require('caniuse-lite/data/features/css3-tabsize')

f(prefixTabsize, browsers =>
  prefix(['tab-size'], {
    browsers,
    feature: 'css3-tabsize'
  })
)

// Intrinsic & extrinsic sizing
let prefixIntrinsic = require('caniuse-lite/data/features/intrinsic-width')

let sizeProps = [
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'block-size',
  'min-block-size',
  'max-block-size',
  'grid',
  'grid-template',
  'grid-template-rows',
  'grid-template-columns',
  'grid-auto-columns',
  'grid-auto-rows'
]

f(prefixIntrinsic, browsers =>
  prefix(['max-content', 'min-content'], {
    browsers,
    feature: 'intrinsic-width',
    props: sizeProps
  })
)

f(prefixIntrinsic, { match: /x|\s#4/ }, browsers =>
  prefix(['fill', 'fill-available'], {
    browsers,
    feature: 'intrinsic-width',
    props: sizeProps
  })
)

f(prefixIntrinsic, { match: /x|\s#5/ }, browsers => {
  let ffFix = browsers.filter(i => {
    let [name, version] = i.split(' ')
    if (name === 'firefox' || name === 'and_ff') {
      return parseInt(version) < 94
    } else {
      return true
    }
  })
  return prefix(['fit-content'], {
    browsers: ffFix,
    feature: 'intrinsic-width',
    props: sizeProps
  })
})

// Stretch value

let prefixStretch = require('caniuse-lite/data/features/css-width-stretch')

f(prefixStretch, browsers => {
  f(prefixIntrinsic, { match: /x|\s#2/ }, firefox => {
    browsers = browsers.concat(firefox)
  })
  return prefix(['stretch'], {
    browsers,
    feature: 'css-width-stretch',
    props: sizeProps
  })
})

// Zoom cursors
let prefixCursorsNew = require('caniuse-lite/data/features/css3-cursors-newer')

f(prefixCursorsNew, browsers =>
  prefix(['zoom-in', 'zoom-out'], {
    browsers,
    feature: 'css3-cursors-newer',
    props: ['cursor']
  })
)

// Grab cursors
let prefixCursorsGrab = require('caniuse-lite/data/features/css3-cursors-grab')

f(prefixCursorsGrab, browsers =>
  prefix(['grab', 'grabbing'], {
    browsers,
    feature: 'css3-cursors-grab',
    props: ['cursor']
  })
)

// Sticky position
let prefixSticky = require('caniuse-lite/data/features/css-sticky')

f(prefixSticky, browsers =>
  prefix(['sticky'], {
    browsers,
    feature: 'css-sticky',
    props: ['position']
  })
)

// Pointer Events
let prefixPointer = require('caniuse-lite/data/features/pointer')

f(prefixPointer, browsers =>
  prefix(['touch-action'], {
    browsers,
    feature: 'pointer'
  })
)

// Text decoration
let prefixDecoration = require('caniuse-lite/data/features/text-decoration')

f(prefixDecoration, { match: /x.*#[235]/ }, browsers =>
  prefix(['text-decoration-skip', 'text-decoration-skip-ink'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationShorthand = require('caniuse-lite/data/features/mdn-text-decoration-shorthand')

f(prefixDecorationShorthand, browsers =>
  prefix(['text-decoration'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationColor = require('caniuse-lite/data/features/mdn-text-decoration-color')

f(prefixDecorationColor, browsers =>
  prefix(['text-decoration-color'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationLine = require('caniuse-lite/data/features/mdn-text-decoration-line')

f(prefixDecorationLine, browsers =>
  prefix(['text-decoration-line'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationStyle = require('caniuse-lite/data/features/mdn-text-decoration-style')

f(prefixDecorationStyle, browsers =>
  prefix(['text-decoration-style'], {
    browsers,
    feature: 'text-decoration'
  })
)

// Text Size Adjust
let prefixTextSizeAdjust = require('caniuse-lite/data/features/text-size-adjust')

f(prefixTextSizeAdjust, browsers =>
  prefix(['text-size-adjust'], {
    browsers,
    feature: 'text-size-adjust'
  })
)

// CSS Masks
let prefixCssMasks = require('caniuse-lite/data/features/css-masks')

f(prefixCssMasks, browsers => {
  prefix(
    [
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-origin',
      'mask-repeat',
      'mask-border-repeat',
      'mask-border-source'
    ],
    {
      browsers,
      feature: 'css-masks'
    }
  )
  prefix(
    [
      'mask',
      'mask-position',
      'mask-size',
      'mask-border',
      'mask-border-outset',
      'mask-border-width',
      'mask-border-slice'
    ],
    {
      browsers,
      feature: 'css-masks'
    }
  )
})

// CSS clip-path property
let prefixClipPath = require('caniuse-lite/data/features/css-clip-path')

f(prefixClipPath, browsers =>
  prefix(['clip-path'], {
    browsers,
    feature: 'css-clip-path'
  })
)

// Fragmented Borders and Backgrounds
let prefixBoxdecoration = require('caniuse-lite/data/features/css-boxdecorationbreak')

f(prefixBoxdecoration, browsers =>
  prefix(['box-decoration-break'], {
    browsers,
    feature: 'css-boxdecorationbreak'
  })
)

// CSS3 object-fit/object-position
let prefixObjectFit = require('caniuse-lite/data/features/object-fit')

f(prefixObjectFit, browsers =>
  prefix(['object-fit', 'object-position'], {
    browsers,
    feature: 'object-fit'
  })
)

// CSS Shapes
let prefixShapes = require('caniuse-lite/data/features/css-shapes')

f(prefixShapes, browsers =>
  prefix(['shape-margin', 'shape-outside', 'shape-image-threshold'], {
    browsers,
    feature: 'css-shapes'
  })
)

// CSS3 text-overflow
let prefixTextOverflow = require('caniuse-lite/data/features/text-overflow')

f(prefixTextOverflow, browsers =>
  prefix(['text-overflow'], {
    browsers,
    feature: 'text-overflow'
  })
)

// Viewport at-rule
let prefixDeviceadaptation = require('caniuse-lite/data/features/css-deviceadaptation')

f(prefixDeviceadaptation, browsers =>
  prefix(['@viewport'], {
    browsers,
    feature: 'css-deviceadaptation'
  })
)

// Resolution Media Queries
let prefixResolut = require('caniuse-lite/data/features/css-media-resolution')

f(prefixResolut, { match: /( x($| )|a #2)/ }, browsers =>
  prefix(['@resolution'], {
    browsers,
    feature: 'css-media-resolution'
  })
)

// CSS text-align-last
let prefixTextAlignLast = require('caniuse-lite/data/features/css-text-align-last')

f(prefixTextAlignLast, browsers =>
  prefix(['text-align-last'], {
    browsers,
    feature: 'css-text-align-last'
  })
)

// Crisp Edges Image Rendering Algorithm
let prefixCrispedges = require('caniuse-lite/data/features/css-crisp-edges')

f(prefixCrispedges, { match: /y x|a x #1/ }, browsers =>
  prefix(['pixelated'], {
    browsers,
    feature: 'css-crisp-edges',
    props: ['image-rendering']
  })
)

f(prefixCrispedges, { match: /a x #2/ }, browsers =>
  prefix(['image-rendering'], {
    browsers,
    feature: 'css-crisp-edges'
  })
)

// Logical Properties
let prefixLogicalProps = require('caniuse-lite/data/features/css-logical-props')

f(prefixLogicalProps, browsers =>
  prefix(
    [
      'border-inline-start',
      'border-inline-end',
      'margin-inline-start',
      'margin-inline-end',
      'padding-inline-start',
      'padding-inline-end'
    ],
    {
      browsers,
      feature: 'css-logical-props'
    }
  )
)

f(prefixLogicalProps, { match: /x\s#2/ }, browsers =>
  prefix(
    [
      'border-block-start',
      'border-block-end',
      'margin-block-start',
      'margin-block-end',
      'padding-block-start',
      'padding-block-end'
    ],
    {
      browsers,
      feature: 'css-logical-props'
    }
  )
)

// CSS appearance
let prefixAppearance = require('caniuse-lite/data/features/css-appearance')

f(prefixAppearance, { match: /#2|x/ }, browsers =>
  prefix(['appearance'], {
    browsers,
    feature: 'css-appearance'
  })
)

// CSS Scroll snap points
let prefixSnappoints = require('caniuse-lite/data/features/css-snappoints')

f(prefixSnappoints, browsers =>
  prefix(
    [
      'scroll-snap-type',
      'scroll-snap-coordinate',
      'scroll-snap-destination',
      'scroll-snap-points-x',
      'scroll-snap-points-y'
    ],
    {
      browsers,
      feature: 'css-snappoints'
    }
  )
)

// CSS Regions
let prefixRegions = require('caniuse-lite/data/features/css-regions')

f(prefixRegions, browsers =>
  prefix(['flow-into', 'flow-from', 'region-fragment'], {
    browsers,
    feature: 'css-regions'
  })
)

// CSS image-set
let prefixImageSet = require('caniuse-lite/data/features/css-image-set')

f(prefixImageSet, browsers =>
  prefix(['image-set'], {
    browsers,
    feature: 'css-image-set',
    props: [
      'background',
      'background-image',
      'border-image',
      'cursor',
      'mask',
      'mask-image',
      'list-style',
      'list-style-image',
      'content'
    ]
  })
)

// Writing Mode
let prefixWritingMode = require('caniuse-lite/data/features/css-writing-mode')

f(prefixWritingMode, { match: /a|x/ }, browsers =>
  prefix(['writing-mode'], {
    browsers,
    feature: 'css-writing-mode'
  })
)

// Cross-Fade Function
let prefixCrossFade = require('caniuse-lite/data/features/css-cross-fade')

f(prefixCrossFade, browsers =>
  prefix(['cross-fade'], {
    browsers,
    feature: 'css-cross-fade',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Read Only selector
let prefixReadOnly = require('caniuse-lite/data/features/css-read-only-write')

f(prefixReadOnly, browsers =>
  prefix([':read-only', ':read-write'], {
    browsers,
    feature: 'css-read-only-write',
    selector: true
  })
)

// Text Emphasize
let prefixTextEmphasis = require('caniuse-lite/data/features/text-emphasis')

f(prefixTextEmphasis, browsers =>
  prefix(
    [
      'text-emphasis',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-emphasis-color'
    ],
    {
      browsers,
      feature: 'text-emphasis'
    }
  )
)

// CSS Grid Layout
let prefixGrid = require('caniuse-lite/data/features/css-grid')

f(prefixGrid, browsers => {
  prefix(['display-grid', 'inline-grid'], {
    browsers,
    feature: 'css-grid',
    props: ['display']
  })
  prefix(
    [
      'grid-template-columns',
      'grid-template-rows',
      'grid-row-start',
      'grid-column-start',
      'grid-row-end',
      'grid-column-end',
      'grid-row',
      'grid-column',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'place-self'
    ],
    {
      browsers,
      feature: 'css-grid'
    }
  )
})

f(prefixGrid, { match: /a x/ }, browsers =>
  prefix(['grid-column-align', 'grid-row-align'], {
    browsers,
    feature: 'css-grid'
  })
)

// CSS text-spacing
let prefixTextSpacing = require('caniuse-lite/data/features/css-text-spacing')

f(prefixTextSpacing, browsers =>
  prefix(['text-spacing'], {
    browsers,
    feature: 'css-text-spacing'
  })
)

// :any-link selector
let prefixAnyLink = require('caniuse-lite/data/features/css-any-link')

f(prefixAnyLink, browsers =>
  prefix([':any-link'], {
    browsers,
    feature: 'css-any-link',
    selector: true
  })
)

// unicode-bidi

let bidiIsolate = require('caniuse-lite/data/features/mdn-css-unicode-bidi-isolate')

f(bidiIsolate, browsers =>
  prefix(['isolate'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

let bidiPlaintext = require('caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext')

f(bidiPlaintext, browsers =>
  prefix(['plaintext'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

let bidiOverride = require('caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override')

f(bidiOverride, { match: /y x/ }, browsers =>
  prefix(['isolate-override'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

// overscroll-behavior selector
let prefixOverscroll = require('caniuse-lite/data/features/css-overscroll-behavior')

f(prefixOverscroll, { match: /a #1/ }, browsers =>
  prefix(['overscroll-behavior'], {
    browsers,
    feature: 'css-overscroll-behavior'
  })
)

// text-orientation
let prefixTextOrientation = require('caniuse-lite/data/features/css-text-orientation')

f(prefixTextOrientation, browsers =>
  prefix(['text-orientation'], {
    browsers,
    feature: 'css-text-orientation'
  })
)

// print-color-adjust
let prefixPrintAdjust = require('caniuse-lite/data/features/css-print-color-adjust')

f(prefixPrintAdjust, browsers =>
  prefix(['print-color-adjust', 'color-adjust'], {
    browsers,
    feature: 'css-print-color-adjust'
  })
)
