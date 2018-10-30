# Decorators

Decorators allow for blocks to be annotated with metadata or wrapped in functionality prior to execution of the block. This may be used to communicate with the containing helper or to setup a particular state in the system prior to running the block.

Decorators are registered through similar methods as helpers, `registerDecorators` and `unregisterDecorators`. These can then be referenced via the friendly name in the template using the `{{* decorator}}` and `{{#* decorator}}{/decorator}}` syntaxes. These syntaxs are derivitives of the normal mustache syntax and as such have all of the same argument and whitespace behaviors.

Decorators are executed when the block program is instantiated and are passed `(program, props, container, context, data, blockParams, depths)`

- `program`: The block to wrap
- `props`: Object used to set metadata on the final function. Any values set on this object will be set on the function, regardless of if the original function is replaced or not. Metadata should be applied using this object as values applied to `program` may be masked by subsequent decorators that may wrap `program`.
- `container`: The current runtime container
- `context`: The current context. Since the decorator is run before the block that contains it, this is the parent context.
- `data`: The current `@data` values
- `blockParams`: The current block parameters stack
- `depths`: The current context stack

Decorators may set values on `props` or return a modified function that wraps `program` in particular behaviors. If the decorator returns nothing, then `program` is left unaltered.

The [inline partial](https://github.com/wycats/handlebars.js/blob/master/lib/handlebars/decorators/inline.js) implementation provides an example of decorators being used for both metadata and wrapping behaviors.
