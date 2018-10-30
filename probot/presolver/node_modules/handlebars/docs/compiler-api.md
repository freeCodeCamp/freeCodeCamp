# Handlebars Compiler APIs

There are a number of formal APIs that tool implementors may interact with.

## AST

Other tools may interact with the formal AST as defined below. Any JSON structure matching this pattern may be used and passed into the `compile` and `precompile` methods in the same way as the text for a template.

AST structures may be generated either with the `Handlebars.parse` method and then manipulated, via the `Handlebars.AST` objects of the same name, or constructed manually as a generic JavaScript object matching the structure defined below.

```javascript
var ast = Handlebars.parse(myTemplate);

// Modify ast

Handlebars.precompile(ast);
```


### Basic

```java
interface Node {
    type: string;
    loc: SourceLocation | null;
}

interface SourceLocation {
    source: string | null;
    start: Position;
    end: Position;
}

interface Position {
    line: uint >= 1;
    column: uint >= 0;
}
```

### Programs

```java
interface Program <: Node {
    type: "Program";
    body: [ Statement ];
    
    blockParams: [ string ];
}
```

### Statements

```java
interface Statement <: Node { }

interface MustacheStatement <: Statement {
    type: "MustacheStatement";

    path: PathExpression | Literal;
    params: [ Expression ];
    hash: Hash;

    escaped: boolean;
    strip: StripFlags | null;
}

interface BlockStatement <: Statement {
    type: "BlockStatement";
    path: PathExpression;
    params: [ Expression ];
    hash: Hash;

    program: Program | null;
    inverse: Program | null;

    openStrip: StripFlags | null;
    inverseStrip: StripFlags | null;
    closeStrip: StripFlags | null;
}

interface PartialStatement <: Statement {
    type: "PartialStatement";
    name: PathExpression | SubExpression;
    params: [ Expression ];
    hash: Hash;

    indent: string;
    strip: StripFlags | null;
}

interface PartialBlockStatement <: Statement {
    type: "PartialBlockStatement";
    name: PathExpression | SubExpression;
    params: [ Expression ];
    hash: Hash;

    program: Program | null;

    indent: string;
    openStrip: StripFlags | null;
    closeStrip: StripFlags | null;
}
```

`name` will be a `SubExpression` when tied to a dynamic partial, i.e. `{{> (foo) }}`, otherwise this is a path or literal whose `original` value is used to lookup the desired partial.


```java
interface ContentStatement <: Statement {
    type: "ContentStatement";
    value: string;
    original: string;
}

interface CommentStatement <: Statement {
    type: "CommentStatement";
    value: string;

    strip: StripFlags | null;
}
```


```java
interface Decorator <: Statement {
    type: "Decorator";

    path: PathExpression | Literal;
    params: [ Expression ];
    hash: Hash;

    strip: StripFlags | null;
}

interface DecoratorBlock <: Statement {
    type: "DecoratorBlock";
    path: PathExpression | Literal;
    params: [ Expression ];
    hash: Hash;

    program: Program | null;

    openStrip: StripFlags | null;
    closeStrip: StripFlags | null;
}
```

Decorator paths only utilize the `path.original` value and as a consequence do not support depthed evaluation.

### Expressions

```java
interface Expression <: Node { }
```

##### SubExpressions

```java
interface SubExpression <: Expression {
    type: "SubExpression";
    path: PathExpression;
    params: [ Expression ];
    hash: Hash;
}
```

##### Paths

```java
interface PathExpression <: Expression {
    type: "PathExpression";
    data: boolean;
    depth: uint >= 0;
    parts: [ string ];
    original: string;
}
```

- `data` is true when the given expression is a `@data` reference.
- `depth` is an integer representation of which context the expression references. `0` represents the current context, `1` would be `../`, etc.
- `parts` is an array of the names in the path. `foo.bar` would be `['foo', 'bar']`. Scope references, `.`, `..`, and `this` should be omitted from this array.
- `original` is the path as entered by the user. Separator and scope references are left untouched.


##### Literals

```java
interface Literal <: Expression { }

interface StringLiteral <: Literal {
    type: "StringLiteral";
    value: string;
    original: string;
}

interface BooleanLiteral <: Literal {
    type: "BooleanLiteral";
    value: boolean;
    original: boolean;
}

interface NumberLiteral <: Literal {
    type: "NumberLiteral";
    value: number;
    original: number;
}

interface UndefinedLiteral <: Literal {
    type: "UndefinedLiteral";
}

interface NullLiteral <: Literal {
    type: "NullLiteral";
}
```


### Miscellaneous

```java
interface Hash <: Node {
    type: "Hash";
    pairs: [ HashPair ];
}

interface HashPair <: Node {
    type: "HashPair";
    key: string;
    value: Expression;
}

interface StripFlags {
    open: boolean;
    close: boolean;
}
```

`StripFlags` are used to signify whitespace control character that may have been entered on a given statement.

## AST Visitor

`Handlebars.Visitor` is available as a base class for general interaction with AST structures. This will by default traverse the entire tree and individual methods may be overridden to provide specific responses to particular nodes.

Recording all referenced partial names:

```javascript
var Visitor = Handlebars.Visitor;

function ImportScanner() {
  this.partials = [];
}
ImportScanner.prototype = new Visitor();

ImportScanner.prototype.PartialStatement = function(partial) {
  this.partials.push({request: partial.name.original});

  Visitor.prototype.PartialStatement.call(this, partial);
};

var scanner = new ImportScanner();
scanner.accept(ast);
```

The current node's ancestors will be maintained in the `parents` array, with the most recent parent listed first.

The visitor may also be configured to operate in mutation mode by setting the `mutation` field to true. When in this mode, handler methods may return any valid AST node and it will replace the one they are currently operating on. Returning `false` will remove the given value (if valid) and returning `undefined` will leave the node in tact. This return structure only apply to mutation mode and non-mutation mode visitors are free to return whatever values they wish.

Implementors that may need to support mutation mode are encouraged to utilize the `acceptKey`, `acceptRequired` and `acceptArray` helpers which provide the conditional overwrite behavior as well as implement sanity checks where pertinent.

## JavaScript Compiler

The `Handlebars.JavaScriptCompiler` object has a number of methods that may be customized to alter the output of the compiler:

- `nameLookup(parent, name, type)`
  Used to generate the code to resolve a give path component.

  - `parent` is the existing code in the path resolution
  - `name` is the current path component
  - `type` is the type of name being evaluated. May be one of `context`, `data`, `helper`, `decorator`, or `partial`.

  Note that this does not impact dynamic partials, which implementors need to be aware of. Overriding `VM.resolvePartial` may be required to support dynamic cases.

- `depthedLookup(name)`
  Used to generate code that resolves parameters within any context in the stack. Is only used in `compat` mode. 

- `compilerInfo()`
  Allows for custom compiler flags used in the runtime version checking logic.

- `appendToBuffer(source, location, explicit)`
    Allows for code buffer emitting code. Defaults behavior is string concatenation.

    - `source` is the source code whose result is to be appending
    - `location` is the location of the source in the source map.
    - `explicit` is a flag signaling that the emit operation must occur, vs. the lazy evaled options otherwise.

- `initializeBuffer()`
    Allows for buffers other than the default string buffer to be used. Generally needs to be paired with a custom `appendToBuffer` implementation.

```javascript
function MyCompiler() {
  Handlebars.JavaScriptCompiler.apply(this, arguments);
}
MyCompiler.prototype = Object.create(Handlebars.JavaScriptCompiler);

MyCompiler.nameLookup = function(parent, name, type) {
  if (type === 'partial') {
    return 'MyPartialList[' + JSON.stringify(name) ']';
  } else {
    return Handlebars.JavaScriptCompiler.prototype.nameLookup.call(this, parent, name, type);
  }
};

var env = Handlebars.create();
env.JavaScriptCompiler = MyCompiler;
env.compile('my template');
```
