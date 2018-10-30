# jest-mock

## API

### `constructor(global)`

Creates a new module mocker that generates mocks as if they were created in an
environment with the given global object.

### `generateFromMetadata(metadata)`

Generates a mock based on the given metadata (Metadata for the mock in the
schema returned by the getMetadata method of this module). Mocks treat functions
specially, and all mock functions have additional members, described in the
documentation for `fn` in this module.

One important note: function prototypes are handled specially by this mocking
framework. For functions with prototypes, when called as a constructor, the mock
will install mocked function members on the instance. This allows different
instances of the same constructor to have different values for its mocks member
and its return values.

### `getMetadata(component)`

Inspects the argument and returns its schema in the following recursive format:

```
{
  type: ...
  members: {}
}
```

Where type is one of `array`, `object`, `function`, or `ref`, and members is an
optional dictionary where the keys are member names and the values are metadata
objects. Function prototypes are defined simply by defining metadata for the
`member.prototype` of the function. The type of a function prototype should
always be `object`. For instance, a simple class might be defined like this:

```js
const classDef = {
  type: 'function',
  members: {
    staticMethod: {type: 'function'},
    prototype: {
      type: 'object',
      members: {
        instanceMethod: {type: 'function'},
      },
    },
  },
};
```

Metadata may also contain references to other objects defined within the same
metadata object. The metadata for the referent must be marked with `refID` key
and an arbitrary value. The referrer must be marked with a `ref` key that has
the same value as object with refID that it refers to. For instance, this
metadata blob:

```js
const refID = {
  type: 'object',
  refID: 1,
  members: {
    self: {ref: 1},
  },
};
```

defines an object with a slot named `self` that refers back to the object.

### `fn`

Generates a stand-alone function with members that help drive unit tests or
confirm expectations. Specifically, functions returned by this method have the
following members:

##### `.mock`

An object with three members, `calls`, `instances` and `timestamps`, which are
all lists. The items in the `calls` list are the arguments with which the
function was called. The "instances" list stores the value of 'this' for each
call to the function. This is useful for retrieving instances from a
constructor. The `timestamps` list stores a number timestamp every time the mock
is called.

##### `.mockReturnValueOnce(value)`

Pushes the given value onto a FIFO queue of return values for the function.

##### `.mockReturnValue(value)`

Sets the default return value for the function.

##### `.mockImplementationOnce(function)`

Pushes the given mock implementation onto a FIFO queue of mock implementations
for the function.

##### `.mockImplementation(function)`

Sets the default mock implementation for the function.

##### `.mockReturnThis()`

Syntactic sugar for .mockImplementation(function() {return this;})

In case both `mockImplementationOnce()/mockImplementation()` and
`mockReturnValueOnce()/mockReturnValue()` are called. The priority of which to
use is based on what is the last call:

* if the last call is mockReturnValueOnce() or mockReturnValue(), use the
  specific return value or default return value. If specific return values are
  used up or no default return value is set, fall back to try
  mockImplementation();
* if the last call is mockImplementationOnce() or mockImplementation(), run the
  specific implementation and return the result or run default implementation
  and return the result.
