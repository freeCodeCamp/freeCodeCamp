## Object Wrappers

The `ObjectWrap` class can be used to make wrapped C++ objects and a factory of wrapped objects.

 - <a href="#api_nan_object_wrap"><b><code>Nan::ObjectWrap</code></b></a>


<a name="api_nan_object_wrap"></a>
### Nan::ObjectWrap()

A reimplementation of `node::ObjectWrap` that adds some API not present in older versions of Node. Should be preferred over `node::ObjectWrap` in all cases for consistency.

Definition:

```c++
class ObjectWrap {
 public:
  ObjectWrap();

  virtual ~ObjectWrap();

  template <class T>
  static inline T* Unwrap(v8::Local<v8::Object> handle);

  inline v8::Local<v8::Object> handle();

  inline Nan::Persistent<v8::Object>& persistent();

 protected:
  inline void Wrap(v8::Local<v8::Object> handle);

  inline void MakeWeak();

  /* Ref() marks the object as being attached to an event loop.
   * Refed objects will not be garbage collected, even if
   * all references are lost.
   */
  virtual void Ref();

  /* Unref() marks an object as detached from the event loop.  This is its
   * default state.  When an object with a "weak" reference changes from
   * attached to detached state it will be freed. Be careful not to access
   * the object after making this call as it might be gone!
   * (A "weak reference" means an object that only has a
   * persistant handle.)
   *
   * DO NOT CALL THIS FROM DESTRUCTOR
   */
  virtual void Unref();

  int refs_;  // ro
};
```

See the Node documentation on [Wrapping C++ Objects](https://nodejs.org/api/addons.html#addons_wrapping_c_objects) for more details.

### This vs. Holder

When calling `Unwrap`, it is important that the argument is indeed some JavaScript object which got wrapped by a `Wrap` call for this class or any derived class.
The `Signature` installed by [`Nan::SetPrototypeMethod()`](methods.md#api_nan_set_prototype_method) does ensure that `info.Holder()` is just such an instance.
In Node 0.12 and later, `info.This()` will also be of such a type, since otherwise the invocation will get rejected.
However, in Node 0.10 and before it was possible to invoke a method on a JavaScript object which just had the extension type in its prototype chain.
In such a situation, calling `Unwrap` on `info.This()` will likely lead to a failed assertion causing a crash, but could lead to even more serious corruption.

On the other hand, calling `Unwrap` in an [accessor](methods.md#api_nan_set_accessor) should not use `Holder()` if the accessor is defined on the prototype.
So either define your accessors on the instance template,
or use `This()` after verifying that it is indeed a valid object.

### Examples

#### Basic

```c++
class MyObject : public Nan::ObjectWrap {
 public:
  static NAN_MODULE_INIT(Init) {
    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("MyObject").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl, "getHandle", GetHandle);
    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);

    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());
    Nan::Set(target, Nan::New("MyObject").ToLocalChecked(),
      Nan::GetFunction(tpl).ToLocalChecked());
  }

 private:
  explicit MyObject(double value = 0) : value_(value) {}
  ~MyObject() {}

  static NAN_METHOD(New) {
    if (info.IsConstructCall()) {
      double value = info[0]->IsUndefined() ? 0 : Nan::To<double>(info[0]).FromJust();
      MyObject *obj = new MyObject(value);
      obj->Wrap(info.This());
      info.GetReturnValue().Set(info.This());
    } else {
      const int argc = 1;
      v8::Local<v8::Value> argv[argc] = {info[0]};
      v8::Local<v8::Function> cons = Nan::New(constructor());
      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
    }
  }

  static NAN_METHOD(GetHandle) {
    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());
    info.GetReturnValue().Set(obj->handle());
  }

  static NAN_METHOD(GetValue) {
    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());
    info.GetReturnValue().Set(obj->value_);
  }

  static inline Nan::Persistent<v8::Function> & constructor() {
    static Nan::Persistent<v8::Function> my_constructor;
    return my_constructor;
  }

  double value_;
};

NODE_MODULE(objectwrapper, MyObject::Init)
```

To use in Javascript:

```Javascript
var objectwrapper = require('bindings')('objectwrapper');

var obj = new objectwrapper.MyObject(5);
console.log('Should be 5: ' + obj.getValue());
```

#### Factory of wrapped objects

```c++
class MyFactoryObject : public Nan::ObjectWrap {
 public:
  static NAN_MODULE_INIT(Init) {
    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);

    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());
  }

  static NAN_METHOD(NewInstance) {
    v8::Local<v8::Function> cons = Nan::New(constructor());
    double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;
    const int argc = 1;
    v8::Local<v8::Value> argv[1] = {Nan::New(value)};
    info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
  }

  // Needed for the next example:
  inline double value() const {
    return value_;
  }

 private:
  explicit MyFactoryObject(double value = 0) : value_(value) {}
  ~MyFactoryObject() {}

  static NAN_METHOD(New) {
    if (info.IsConstructCall()) {
      double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;
      MyFactoryObject * obj = new MyFactoryObject(value);
      obj->Wrap(info.This());
      info.GetReturnValue().Set(info.This());
    } else {
      const int argc = 1;
      v8::Local<v8::Value> argv[argc] = {info[0]};
      v8::Local<v8::Function> cons = Nan::New(constructor());
      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
    }
  }

  static NAN_METHOD(GetValue) {
    MyFactoryObject* obj = ObjectWrap::Unwrap<MyFactoryObject>(info.Holder());
    info.GetReturnValue().Set(obj->value_);
  }

  static inline Nan::Persistent<v8::Function> & constructor() {
    static Nan::Persistent<v8::Function> my_constructor;
    return my_constructor;
  }

  double value_;
};

NAN_MODULE_INIT(Init) {
  MyFactoryObject::Init(target);
  Nan::Set(target,
    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),
    Nan::GetFunction(
      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()
  );
}

NODE_MODULE(wrappedobjectfactory, Init)
```

To use in Javascript:

```Javascript
var wrappedobjectfactory = require('bindings')('wrappedobjectfactory');

var obj = wrappedobjectfactory.newFactoryObjectInstance(10);
console.log('Should be 10: ' + obj.getValue());
```

#### Passing wrapped objects around

Use the `MyFactoryObject` class above along with the following:

```c++
static NAN_METHOD(Sum) {
  Nan::MaybeLocal<v8::Object> maybe1 = Nan::To<v8::Object>(info[0]);
  Nan::MaybeLocal<v8::Object> maybe2 = Nan::To<v8::Object>(info[1]);

  // Quick check:
  if (maybe1.IsEmpty() || maybe2.IsEmpty()) {
    // return value is undefined by default
    return;
  }

  MyFactoryObject* obj1 =
    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe1.ToLocalChecked());
  MyFactoryObject* obj2 =
    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe2.ToLocalChecked());

  info.GetReturnValue().Set(Nan::New<v8::Number>(obj1->value() + obj2->value()));
}

NAN_MODULE_INIT(Init) {
  MyFactoryObject::Init(target);
  Nan::Set(target,
    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),
    Nan::GetFunction(
      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()
  );
  Nan::Set(target,
    Nan::New<v8::String>("sum").ToLocalChecked(),
    Nan::GetFunction(Nan::New<v8::FunctionTemplate>(Sum)).ToLocalChecked()
  );
}

NODE_MODULE(myaddon, Init)
```

To use in Javascript:

```Javascript
var myaddon = require('bindings')('myaddon');

var obj1 = myaddon.newFactoryObjectInstance(5);
var obj2 = myaddon.newFactoryObjectInstance(10);
console.log('sum of object values: ' + myaddon.sum(obj1, obj2));
```
