# Usage Examples

## Basic Usage

### Parsing CSS

```javascript
import { parse } from '@adobe/css-tools';

// Basic CSS parsing
const css = `
  body {
    font-size: 12px;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ast = parse(css);
console.log(ast);
```

### Stringifying AST

```javascript
import { parse, stringify } from '@adobe/css-tools';

const css = 'body { font-size: 12px; color: #333; }';
const ast = parse(css);

// Convert back to CSS
const output = stringify(ast);
console.log(output); // "body { font-size: 12px; color: #333; }"
```

## Advanced Parsing Options

### Source Tracking

```javascript
import { parse } from '@adobe/css-tools';

const css = 'body { color: red; }';
const ast = parse(css, { source: 'styles.css' });

// Position information is available
const rule = ast.stylesheet.rules[0];
console.log(rule.position?.source); // "styles.css"
console.log(rule.position?.start); // { line: 1, column: 1 }
console.log(rule.position?.end); // { line: 1, column: 20 }
```

### Silent Error Handling

```javascript
import { parse } from '@adobe/css-tools';

const malformedCss = `
  body { color: red; }
  { color: blue; } /* Missing selector */
  .valid { background: green; }
`;

// Parse with silent error handling
const result = parse(malformedCss, { silent: true });

// Check for parsing errors
if (result.stylesheet.parsingErrors) {
  console.log('Parsing errors:', result.stylesheet.parsingErrors.length);
  result.stylesheet.parsingErrors.forEach(error => {
    console.log(`Error at line ${error.line}: ${error.message}`);
  });
}

// Valid rules are still parsed
console.log('Valid rules:', result.stylesheet.rules.length);
```

## AST Structure Examples

### Basic Rule

```javascript
import { parse } from '@adobe/css-tools';

const css = `
  .header {
    background: #f0f0f0;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
`;

const ast = parse(css);
const rule = ast.stylesheet.rules[0];

console.log(rule.type); // "rule"
console.log(rule.selectors); // [".header"]
console.log(rule.declarations.length); // 3

rule.declarations.forEach(decl => {
  console.log(`${decl.property}: ${decl.value}`);
});
// Output:
// background: #f0f0f0
// padding: 20px
// border-bottom: 1px solid #ccc
```

### Media Queries

```javascript
import { parse } from '@adobe/css-tools';

const css = `
  @media screen and (max-width: 768px) {
    .container {
      padding: 10px;
    }
    
    .sidebar {
      display: none;
    }
  }
`;

const ast = parse(css);
const mediaRule = ast.stylesheet.rules[0];

console.log(mediaRule.type); // "media"
console.log(mediaRule.media); // "screen and (max-width: 768px)"
console.log(mediaRule.rules.length); // 2
```

### Keyframes

```javascript
import { parse } from '@adobe/css-tools';

const css = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ast = parse(css);
const keyframesRule = ast.stylesheet.rules[0];

console.log(keyframesRule.type); // "keyframes"
console.log(keyframesRule.name); // "fadeIn"
console.log(keyframesRule.keyframes.length); // 2

keyframesRule.keyframes.forEach(keyframe => {
  console.log(`Keyframe: ${keyframe.values.join(', ')}`);
  keyframe.declarations.forEach(decl => {
    console.log(`  ${decl.property}: ${decl.value}`);
  });
});
```

### Comments

```javascript
import { parse } from '@adobe/css-tools';

const css = `
  /* Header styles */
  .header {
    background: red; /* Fallback color */
  }
  
  /* Footer styles */
  .footer {
    background: blue;
  }
`;

const ast = parse(css);

ast.stylesheet.rules.forEach(rule => {
  if (rule.type === 'comment') {
    console.log(`Comment: ${rule.comment}`);
  } else if (rule.type === 'rule') {
    console.log(`Rule: ${rule.selectors.join(', ')}`);
    
    rule.declarations.forEach(decl => {
      if (decl.type === 'comment') {
        console.log(`  Comment: ${decl.comment}`);
      } else {
        console.log(`  ${decl.property}: ${decl.value}`);
      }
    });
  }
});
```

## Stringifying Options

### Compressed Output

```javascript
import { parse, stringify } from '@adobe/css-tools';

const css = `
  body {
    font-size: 12px;
    color: #333;
    margin: 0;
    padding: 0;
  }
`;

const ast = parse(css);

// Compressed output
const compressed = stringify(ast, { compress: true });
console.log(compressed);
// Output: "body{font-size:12px;color:#333;margin:0;padding:0}"
```

### Custom Indentation

```javascript
import { parse, stringify } from '@adobe/css-tools';

const css = 'body { font-size: 12px; color: #333; }';
const ast = parse(css);

// Custom indentation
const formatted = stringify(ast, { indent: '    ' });
console.log(formatted);
// Output:
// body {
//     font-size: 12px;
//     color: #333;
// }
```

## Working with Complex CSS

### Nested Rules and At-Rules

```javascript
import { parse, stringify } from '@adobe/css-tools';

const complexCss = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto');
  
  @charset "UTF-8";
  
  @media print {
    body {
      font-size: 12pt;
    }
  }
  
  @supports (display: grid) {
    .grid {
      display: grid;
    }
  }
  
  @keyframes slideIn {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  
  @font-face {
    font-family: 'CustomFont';
    src: url('custom-font.woff2') format('woff2');
  }
`;

const ast = parse(complexCss);

ast.stylesheet.rules.forEach(rule => {
  switch (rule.type) {
    case 'import':
      console.log(`Import: ${rule.import}`);
      break;
    case 'charset':
      console.log(`Charset: ${rule.charset}`);
      break;
    case 'media':
      console.log(`Media query: ${rule.media}`);
      break;
    case 'supports':
      console.log(`Supports: ${rule.supports}`);
      break;
    case 'keyframes':
      console.log(`Keyframes: ${rule.name}`);
      break;
    case 'font-face':
      console.log('Font-face rule');
      break;
  }
});
```

### Manipulating the AST

```javascript
import { parse, stringify } from '@adobe/css-tools';

const css = `
  .button {
    background: blue;
    color: white;
    padding: 10px;
  }
`;

const ast = parse(css);
const rule = ast.stylesheet.rules[0];

// Add a new declaration
rule.declarations.push({
  type: 'declaration',
  property: 'border-radius',
  value: '5px'
});

// Modify existing declaration
const backgroundDecl = rule.declarations.find(d => d.property === 'background');
if (backgroundDecl) {
  backgroundDecl.value = 'red';
}

// Add a new selector
rule.selectors.push('.btn');

const modifiedCss = stringify(ast);
console.log(modifiedCss);
```

## Error Handling

### Catching Parse Errors

```javascript
import { parse, CssParseError } from '@adobe/css-tools';

try {
  const ast = parse('body { color: red; } { invalid }');
} catch (error) {
  if (error instanceof CssParseError) {
    console.log(`Parse error at line ${error.line}, column ${error.column}:`);
    console.log(error.message);
    console.log(`Source: ${error.filename}`);
  }
}
```

### Working with Silent Errors

```javascript
import { parse } from '@adobe/css-tools';

const problematicCss = `
  body { color: red; }
  { color: blue; } /* Missing selector */
  .valid { background: green; }
  .another { border: 1px solid; } /* Missing closing brace */
`;

const result = parse(problematicCss, { 
  silent: true, 
  source: 'problematic.css' 
});

// Process valid rules
const validRules = result.stylesheet.rules.filter(rule => rule.type === 'rule');
console.log(`Found ${validRules.length} valid rules`);

// Log errors for debugging
if (result.stylesheet.parsingErrors) {
  result.stylesheet.parsingErrors.forEach(error => {
    console.log(`Error: ${error.message} at line ${error.line}`);
  });
}
```

### CSS Minification

```javascript
import { parse, stringify } from '@adobe/css-tools';

function minifyCSS(css) {
  const ast = parse(css);
  return stringify(ast, { compress: true });
}

const css = `
  body {
    font-size: 12px;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const minified = minifyCSS(css);
console.log(minified);
// Output: "body{font-size:12px;color:#333;margin:0;padding:0}.container{max-width:1200px;margin:0 auto}"
```

### CSS Validation

```javascript
import { parse } from '@adobe/css-tools';

function validateCSS(css, filename = 'unknown') {
  try {
    const ast = parse(css, { source: filename });
    return {
      valid: true,
      rules: ast.stylesheet.rules.length,
      errors: []
    };
  } catch (error) {
    return {
      valid: false,
      rules: 0,
      errors: [{
        message: error.message,
        line: error.line,
        column: error.column,
        source: error.filename
      }]
    };
  }
}

const result = validateCSS('body { color: red; } { invalid }', 'test.css');
console.log(result);
```
