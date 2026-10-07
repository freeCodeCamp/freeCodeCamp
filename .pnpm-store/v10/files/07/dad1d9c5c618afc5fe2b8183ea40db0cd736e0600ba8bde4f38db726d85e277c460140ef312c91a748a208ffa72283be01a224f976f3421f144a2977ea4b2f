# Tools

## clang-format

The clang-format checking tools is designed to check changed lines of code compared to given git-refs.

## Migration Script

The migration tool is designed to reduce repetitive work in the migration process. However, the script is not aiming to convert every thing for you. There are usually some small fixes and major reconstruction required.

### How To Use

To run the conversion script, first make sure you have the latest `node-addon-api` in your `node_modules` directory.
```
npm install node-addon-api
```

Then run the script passing your project directory
```
node ./node_modules/node-addon-api/tools/conversion.js ./
```

After finish, recompile and debug things that are missed by the script.


### Quick Fixes
Here is the list of things that can be fixed easily.
  1. Change your methods' return value to void if it doesn't return value to JavaScript.
  2. Use `.` to access attribute or to invoke member function in Napi::Object instead of `->`.
  3. `Napi::New(env, value);` to `Napi::[Type]::New(env, value);


### Major Reconstructions
The implementation of `Napi::ObjectWrap` is significantly different from NAN's. `Napi::ObjectWrap` takes a pointer to the wrapped object and creates a reference to the wrapped object inside ObjectWrap constructor. `Napi::ObjectWrap` also associates wrapped object's instance methods to Javascript module instead of static methods like NAN.

So if you use Nan::ObjectWrap in your module, you will need to execute the following steps.

  1. Convert your [ClassName]::New function to a constructor function that takes a `Napi::CallbackInfo`. Declare it as
```
[ClassName](const Napi::CallbackInfo& info);
```
and define it as
```
[ClassName]::[ClassName](const Napi::CallbackInfo& info) : Napi::ObjectWrap<[ClassName]>(info){
  ...
}
```
This way, the `Napi::ObjectWrap` constructor will be invoked after the object has been instantiated and `Napi::ObjectWrap` can use the `this` pointer to create a reference to the wrapped object.

  2. Move your original constructor code into the new constructor. Delete your original constructor.
  3. In your class initialization function, associate native methods in the following way.
```
Napi::FunctionReference constructor;

void [ClassName]::Init(Napi::Env env, Napi::Object exports, Napi::Object module) {
  Napi::HandleScope scope(env);
  Napi::Function ctor = DefineClass(env, "Canvas", {
    InstanceMethod<&[ClassName]::Func1>("Func1"),
    InstanceMethod<&[ClassName]::Func2>("Func2"),
    InstanceAccessor<&[ClassName]::ValueGetter>("Value"),
    StaticMethod<&[ClassName]::StaticMethod>("MethodName"),
    InstanceValue("Value", Napi::[Type]::New(env, value)),
  });

  constructor = Napi::Persistent(ctor);
  constructor .SuppressDestruct();
  exports.Set("[ClassName]", ctor);
}
```
  4. In function where you need to Unwrap the ObjectWrap in NAN like `[ClassName]* native = Nan::ObjectWrap::Unwrap<[ClassName]>(info.This());`, use `this` pointer directly as the unwrapped object as each ObjectWrap instance is associated with a unique object instance.


If you still find issues after following this guide, please leave us an issue describing your problem and we will try to resolve it.
