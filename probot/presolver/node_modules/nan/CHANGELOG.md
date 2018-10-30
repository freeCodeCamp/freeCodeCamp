# NAN ChangeLog

**Version 2.11.1: current Node 10.11.0, Node 0.12: 0.12.18, Node 0.10: 0.10.48, iojs: 3.3.1**

### 2.11.1 Sep 29 2018

- Fix: adapt to V8 7.0 24a22c3b25eeeec2016c6ec239bdd6169e985447

### 2.11.0 Aug 25 2018

  - Removal: remove `FunctionCallbackInfo::Callee` for nodejs `>= 10` 1a56c0a6efd4fac944cb46c30912a8e023bda7d4
  - Bugfix: Fix `AsyncProgressWorkerBase::WorkProgress` sends invalid data b0c764d1dab11e9f8b37ffb81e2560a4498aad5e
  - Feature: Introduce `GetCurrentEventLoop` b4911b0bb1f6d47d860e10ec014d941c51efac5e
  - Feature: Add `NAN_MODULE_WORKER_ENABLED` macro as a replacement for `NAN_MODULE` b058fb047d18a58250e66ae831444441c1f2ac7a

### 2.10.0 Mar 16 2018

  - Deprecation: Deprecate `MakeCallback` 5e92b19a59e194241d6a658bd6ff7bfbda372950
  - Feature: add `Nan::Call` overload 4482e1242fe124d166fc1a5b2be3c1cc849fe452
  - Feature: add more `Nan::Call` overloads 8584e63e6d04c7d2eb8c4a664e4ef57d70bf672b
  - Feature: Fix deprecation warnings for Node 10 1caf258243b0602ed56922bde74f1c91b0cbcb6a

### 2.9.2 Feb 22 2018

  - Bugfix: Bandaid for async hooks 212bd2f849be14ef1b02fc85010b053daa24252b

### 2.9.1 Feb 22 2018

  - Bugfix: Avoid deprecation warnings in deprecated `Nan::Callback::operator()` 372b14d91289df4604b0f81780709708c45a9aa4
  - Bugfix: Avoid deprecation warnings in `Nan::JSON` 3bc294bce0b7d0a3ee4559926303e5ed4866fda2

### 2.9.0 Feb 22 2018

  - Deprecation: Deprecate legacy `Callback::Call` 6dd5fa690af61ca3523004b433304c581b3ea309
  - Feature: introduce `AsyncResource` class 90c0a179c0d8cb5fd26f1a7d2b1d6231eb402d48o
  - Feature: Add context aware `Nan::Callback::Call` functions 7169e09fb088418b6e388222e88b4c13f07ebaee
  - Feature: Make `AsyncWorker` context aware 066ba21a6fb9e2b5230c9ed3a6fc51f1211736a4
  - Feature: add `Callback` overload to `Nan::Call` 5328daf66e202658c1dc0d916c3aaba99b3cc606
  - Bugfix: fix warning: suggest parentheses around `&&` within `||` b2bb63d68b8ae623a526b542764e1ac82319cb2c
  - Bugfix: Fix compilation on io.js 3 d06114dba0a522fb436f0c5f47b994210968cd7b

### 2.8.0 Nov 15 2017

  - Deprecation: Deprecate `Nan::ForceSet` in favor of `Nan::DefineOwnProperty()` 95cbb976d6fbbba88ba0f86dd188223a8591b4e7
  - Feature: Add `Nan::AsyncProgressQueueWorker` a976636ecc2ef617d1b061ce4a6edf39923691cb
  - Feature: Add `Nan::DefineOwnProperty()` 95cbb976d6fbbba88ba0f86dd188223a8591b4e7
  - Bugfix: Fix compiling on io.js 1 & 2 82705a64503ce60c62e98df5bd02972bba090900
  - Bugfix: Use DefineOwnProperty instead of ForceSet 95cbb976d6fbbba88ba0f86dd188223a8591b4e7

### 2.7.0 Aug 30 2017

  - Feature: Add `Nan::To<v8::Function>()` overload. b93280670c9f6da42ed4cf6cbf085ffdd87bd65b
  - Bugfix: Fix ternary in `Nan::MaybeLocal<T>::FromMaybe<S>()`. 79a26f7d362e756a9524e672a82c3d603b542867

### 2.6.2 Apr 12 2017

  - Bugfix: Fix v8::JSON::Parse() deprecation warning. 87f6a3c65815fa062296a994cc863e2fa124867d

### 2.6.1 Apr 6 2017

  - Bugfix: nan_json.h: fix build breakage in Node 6 ac8d47dc3c10bfbf3f15a6b951633120c0ee6d51

### 2.6.0 Apr 6 2017

  - Feature: nan: add support for JSON::Parse & Stringify b533226c629cce70e1932a873bb6f849044a56c5

### 2.5.1 Jan 23 2017

  - Bugfix: Fix disappearing handle for private value 6a80995694f162ef63dbc9948fbefd45d4485aa0
  - Bugfix: Add missing scopes a93b8bae6bc7d32a170db6e89228b7f60ee57112
  - Bugfix: Use string::data instead of string::front in NewOneByteString d5f920371e67e1f3b268295daee6e83af86b6e50

### 2.5.0 Dec 21 2016

  - Feature: Support Private accessors a86255cb357e8ad8ccbf1f6a4a901c921e39a178
  - Bugfix: Abort in delete operators that shouldn't be called 0fe38215ff8581703967dfd26c12793feb960018

### 2.4.0 Jul 10 2016

  - Feature: Rewrite Callback to add Callback::Reset c4cf44d61f8275cd5f7b0c911d7a806d4004f649
  - Feature: AsyncProgressWorker: add template types for .send 1242c9a11a7ed481c8f08ec06316385cacc513d0
  - Bugfix: Add constness to old Persistent comparison operators bd43cb9982c7639605d60fd073efe8cae165d9b2

### 2.3.5 May 31 2016

  - Bugfix: Replace NAN_INLINE with 'inline' keyword. 71819d8725f822990f439479c9aba3b240804909

### 2.3.4 May 31 2016

  - Bugfix: Remove V8 deprecation warnings 0592fb0a47f3a1c7763087ebea8e1138829f24f9
  - Bugfix: Fix new versions not to use WeakCallbackInfo::IsFirstPass 615c19d9e03d4be2049c10db0151edbc3b229246
  - Bugfix: Make ObjectWrap::handle() const d19af99595587fe7a26bd850af6595c2a7145afc
  - Bugfix: Fix compilation errors related to 0592fb0a47f3a1c7763087ebea8e1138829f24f9 e9191c525b94f652718325e28610a1adcf90fed8

### 2.3.3 May 4 2016

  - Bugfix: Refactor SetMethod() to deal with v8::Templates (#566) b9083cf6d5de6ebe6bcb49c7502fbb7c0d9ddda8

### 2.3.2 Apr 27 2016

  - Bugfix: Fix compilation on outdated versions due to Handle removal f8b7c875d04d425a41dfd4f3f8345bc3a11e6c52

### 2.3.1 Apr 27 2016

  - Bugfix: Don't use deprecated v8::Template::Set() in SetMethod a90951e9ea70fa1b3836af4b925322919159100e

### 2.3.0 Apr 27 2016

  - Feature: added Signal() for invoking async callbacks without sending data from AsyncProgressWorker d8adba45f20e077d00561b20199133620c990b38
  - Bugfix: Don't use deprecated v8::Template::Set() 00dacf0a4b86027415867fa7f1059acc499dcece

### 2.2.1 Mar 29 2016

  - Bugfix: Use NewFromUnsigned in ReturnValue<T>::Set(uint32_t i) for pre_12 3a18f9bdce29826e0e4c217854bc476918241a58
  - Performance: Remove unneeeded nullptr checks b715ef44887931c94f0d1605b3b1a4156eebece9

### 2.2.0 Jan 9 2016

  - Feature: Add Function::Call wrapper 4c157474dacf284d125c324177b45aa5dabc08c6
  - Feature: Rename GC*logueCallback to GCCallback for > 4.0 3603435109f981606d300eb88004ca101283acec
  - Bugfix: Fix Global::Pass for old versions 367e82a60fbaa52716232cc89db1cc3f685d77d9
  - Bugfix: Remove weird MaybeLocal wrapping of what already is a MaybeLocal 23b4590db10c2ba66aee2338aebe9751c4cb190b

### 2.1.0 Oct 8 2015

  - Deprecation: Deprecate NanErrnoException in favor of ErrnoException 0af1ca4cf8b3f0f65ed31bc63a663ab3319da55c
  - Feature: added helper class for accessing contents of typedarrays 17b51294c801e534479d5463697a73462d0ca555
  - Feature: [Maybe types] Add MakeMaybe(...) 48d7b53d9702b0c7a060e69ea10fea8fb48d814d
  - Feature: new: allow utf16 string with length 66ac6e65c8ab9394ef588adfc59131b3b9d8347b
  - Feature: Introduce SetCallHandler and SetCallAsFunctionHandler 7764a9a115d60ba10dc24d86feb0fbc9b4f75537
  - Bugfix: Enable creating Locals from Globals under Node 0.10. 9bf9b8b190821af889790fdc18ace57257e4f9ff
  - Bugfix: Fix issue #462 where PropertyCallbackInfo data is not stored safely. 55f50adedd543098526c7b9f4fffd607d3f9861f

### 2.0.9 Sep 8 2015

  - Bugfix: EscapableHandleScope in Nan::NewBuffer for Node 0.8 and 0.10 b1654d7

### 2.0.8 Aug 28 2015

  - Work around duplicate linking bug in clang 11902da

### 2.0.7 Aug 26 2015

  - Build: Repackage

### 2.0.6 Aug 26 2015

  - Bugfix: Properly handle null callback in FunctionTemplate factory 6e99cb1
  - Bugfix: Remove unused static std::map instances 525bddc
  - Bugfix: Make better use of maybe versions of APIs bfba85b
  - Bugfix: Fix shadowing issues with handle in ObjectWrap 0a9072d

### 2.0.5 Aug 10 2015

  - Bugfix: Reimplement weak callback in ObjectWrap 98d38c1
  - Bugfix: Make sure callback classes are not assignable, copyable or movable 81f9b1d

### 2.0.4 Aug 6 2015

  - Build: Repackage

### 2.0.3 Aug 6 2015

  - Bugfix: Don't use clang++ / g++ syntax extension. 231450e

### 2.0.2 Aug 6 2015

  - Build: Repackage

### 2.0.1 Aug 6 2015

  - Bugfix: Add workaround for missing REPLACE_INVALID_UTF8 60d6687
  - Bugfix: Reimplement ObjectWrap from scratch to prevent memory leaks 6484601
  - Bugfix: Fix Persistent leak in FunctionCallbackInfo and PropertyCallbackInfo 641ef5f
  - Bugfix: Add missing overload for Nan::NewInstance that takes argc/argv 29450ed

### 2.0.0 Jul 31 2015

  - Change: Renamed identifiers with leading underscores	b5932b4
  - Change: Replaced NanObjectWrapHandle with class NanObjectWrap	464f1e1
  - Change: Replace NanScope and NanEscpableScope macros with classes	47751c4
  - Change: Rename NanNewBufferHandle to NanNewBuffer	6745f99
  - Change: Rename NanBufferUse to NanNewBuffer	3e8b0a5
  - Change: Rename NanNewBuffer to NanCopyBuffer	d6af78d
  - Change: Remove Nan prefix from all names	72d1f67
  - Change: Update Buffer API for new upstream changes	d5d3291
  - Change: Rename Scope and EscapableScope to HandleScope and EscapableHandleScope	21a7a6a
  - Change: Get rid of Handles	 e6c0daf
  - Feature: Support io.js 3 with V8 4.4
  - Feature: Introduce NanPersistent	7fed696
  - Feature: Introduce NanGlobal	4408da1
  - Feature: Added NanTryCatch	10f1ca4
  - Feature: Update for V8 v4.3	4b6404a
  - Feature: Introduce NanNewOneByteString	c543d32
  - Feature: Introduce namespace Nan	67ed1b1
  - Removal: Remove NanLocker and NanUnlocker	dd6e401
  - Removal: Remove string converters, except NanUtf8String, which now follows the node implementation b5d00a9
  - Removal: Remove NanReturn* macros	d90a25c
  - Removal: Remove HasInstance	e8f84fe


### 1.9.0 Jul 31 2015

  - Feature: Added `NanFatalException` 81d4a2c
  - Feature: Added more error types 4265f06
  - Feature: Added dereference and function call operators to NanCallback c4b2ed0
  - Feature: Added indexed GetFromPersistent and SaveToPersistent edd510c
  - Feature: Added more overloads of SaveToPersistent and GetFromPersistent 8b1cef6
  - Feature: Added NanErrnoException dd87d9e
  - Correctness: Prevent assign, copy, and move for classes that do not support it 1f55c59, 4b808cb, c96d9b2, fba4a29, 3357130
  - Deprecation: Deprecate `NanGetPointerSafe` and `NanSetPointerSafe` 81d4a2c
  - Deprecation: Deprecate `NanBooleanOptionValue` and `NanUInt32OptionValue` 0ad254b

### 1.8.4 Apr 26 2015

  - Build: Repackage

### 1.8.3 Apr 26 2015

  - Bugfix: Include missing header 1af8648

### 1.8.2 Apr 23 2015

  - Build: Repackage

### 1.8.1 Apr 23 2015

  - Bugfix: NanObjectWrapHandle should take a pointer 155f1d3

### 1.8.0 Apr 23 2015

  - Feature: Allow primitives with NanReturnValue 2e4475e
  - Feature: Added comparison operators to NanCallback 55b075e
  - Feature: Backport thread local storage 15bb7fa
  - Removal: Remove support for signatures with arguments 8a2069d
  - Correcteness: Replaced NanObjectWrapHandle macro with function 0bc6d59

### 1.7.0 Feb 28 2015

  - Feature: Made NanCallback::Call accept optional target 8d54da7
  - Feature: Support atom-shell 0.21 0b7f1bb

### 1.6.2 Feb 6 2015

  - Bugfix: NanEncode: fix argument type for node::Encode on io.js 2be8639

### 1.6.1 Jan 23 2015

  - Build: version bump

### 1.5.3 Jan 23 2015

  - Build: repackage

### 1.6.0 Jan 23 2015

 - Deprecated `NanNewContextHandle` in favor of `NanNew<Context>` 49259af
 - Support utility functions moved in newer v8 versions (Node 0.11.15, io.js 1.0) a0aa179
 - Added `NanEncode`, `NanDecodeBytes` and `NanDecodeWrite` 75e6fb9

### 1.5.2 Jan 23 2015

  - Bugfix: Fix non-inline definition build error with clang++ 21d96a1, 60fadd4
  - Bugfix: Readded missing String constructors 18d828f
  - Bugfix: Add overload handling NanNew<FunctionTemplate>(..) 5ef813b
  - Bugfix: Fix uv_work_cb versioning 997e4ae
  - Bugfix: Add function factory and test 4eca89c
  - Bugfix: Add object template factory and test cdcb951
  - Correctness: Lifted an io.js related typedef c9490be
  - Correctness: Make explicit downcasts of String lengths 00074e6
  - Windows: Limit the scope of disabled warning C4530 83d7deb

### 1.5.1 Jan 15 2015

  - Build: version bump

### 1.4.3 Jan 15 2015

  - Build: version bump

### 1.4.2 Jan 15 2015

  - Feature: Support io.js 0dbc5e8

### 1.5.0 Jan 14 2015

 - Feature: Support io.js b003843
 - Correctness: Improved NanNew internals 9cd4f6a
 - Feature: Implement progress to NanAsyncWorker 8d6a160

### 1.4.1 Nov 8 2014

 - Bugfix: Handle DEBUG definition correctly
 - Bugfix: Accept int as Boolean

### 1.4.0 Nov 1 2014

 - Feature: Added NAN_GC_CALLBACK 6a5c245
 - Performance: Removed unnecessary local handle creation 18a7243, 41fe2f8
 - Correctness: Added constness to references in NanHasInstance 02c61cd
 - Warnings: Fixed spurious warnings from -Wundef and -Wshadow, 541b122, 99d8cb6
 - Windoze: Shut Visual Studio up when compiling 8d558c1
 - License: Switch to plain MIT from custom hacked MIT license 11de983
 - Build: Added test target to Makefile e232e46
 - Performance: Removed superfluous scope in NanAsyncWorker f4b7821
 - Sugar/Feature: Added NanReturnThis() and NanReturnHolder() shorthands 237a5ff, d697208
 - Feature: Added suitable overload of NanNew for v8::Integer::NewFromUnsigned b27b450

### 1.3.0 Aug 2 2014

 - Added NanNew<v8::String, std::string>(std::string)
 - Added NanNew<v8::String, std::string&>(std::string&)
 - Added NanAsciiString helper class
 - Added NanUtf8String helper class
 - Added NanUcs2String helper class
 - Deprecated NanRawString()
 - Deprecated NanCString()
 - Added NanGetIsolateData(v8::Isolate *isolate)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, v8::Handle<v8::Function> func, int argc, v8::Handle<v8::Value>* argv)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, v8::Handle<v8::String> symbol, int argc, v8::Handle<v8::Value>* argv)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, const char* method, int argc, v8::Handle<v8::Value>* argv)
 - Added NanSetTemplate(v8::Handle<v8::Template> templ, v8::Handle<v8::String> name , v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)
 - Added NanSetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ, v8::Handle<v8::String> name, v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)
 - Added NanSetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ, const char *name, v8::Handle<v8::Data> value)
 - Added NanSetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ, v8::Handle<v8::String> name, v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)

### 1.2.0 Jun 5 2014

 - Add NanSetPrototypeTemplate
 - Changed NAN_WEAK_CALLBACK internals, switched _NanWeakCallbackData to class,
     introduced _NanWeakCallbackDispatcher
 - Removed -Wno-unused-local-typedefs from test builds
 - Made test builds Windows compatible ('Sleep()')

### 1.1.2 May 28 2014

 - Release to fix more stuff-ups in 1.1.1

### 1.1.1 May 28 2014

 - Release to fix version mismatch in nan.h and lack of changelog entry for 1.1.0

### 1.1.0 May 25 2014

 - Remove nan_isolate, use v8::Isolate::GetCurrent() internally instead
 - Additional explicit overloads for NanNew(): (char*,int), (uint8_t*[,int]),
     (uint16_t*[,int), double, int, unsigned int, bool, v8::String::ExternalStringResource*,
     v8::String::ExternalAsciiStringResource*
 - Deprecate NanSymbol()
 - Added SetErrorMessage() and ErrorMessage() to NanAsyncWorker

### 1.0.0 May 4 2014

 - Heavy API changes for V8 3.25 / Node 0.11.13
 - Use cpplint.py
 - Removed NanInitPersistent
 - Removed NanPersistentToLocal
 - Removed NanFromV8String
 - Removed NanMakeWeak
 - Removed NanNewLocal
 - Removed NAN_WEAK_CALLBACK_OBJECT
 - Removed NAN_WEAK_CALLBACK_DATA
 - Introduce NanNew, replaces NanNewLocal, NanPersistentToLocal, adds many overloaded typed versions
 - Introduce NanUndefined, NanNull, NanTrue and NanFalse
 - Introduce NanEscapableScope and NanEscapeScope
 - Introduce NanMakeWeakPersistent (requires a special callback to work on both old and new node)
 - Introduce NanMakeCallback for node::MakeCallback
 - Introduce NanSetTemplate
 - Introduce NanGetCurrentContext
 - Introduce NanCompileScript and NanRunScript
 - Introduce NanAdjustExternalMemory
 - Introduce NanAddGCEpilogueCallback, NanAddGCPrologueCallback, NanRemoveGCEpilogueCallback, NanRemoveGCPrologueCallback
 - Introduce NanGetHeapStatistics
 - Rename NanAsyncWorker#SavePersistent() to SaveToPersistent()

### 0.8.0 Jan 9 2014

 - NanDispose -> NanDisposePersistent, deprecate NanDispose
 - Extract _NAN_*_RETURN_TYPE, pull up NAN_*()

### 0.7.1 Jan 9 2014

 - Fixes to work against debug builds of Node
 - Safer NanPersistentToLocal (avoid reinterpret_cast)
 - Speed up common NanRawString case by only extracting flattened string when necessary

### 0.7.0 Dec 17 2013

 - New no-arg form of NanCallback() constructor.
 - NanCallback#Call takes Handle rather than Local
 - Removed deprecated NanCallback#Run method, use NanCallback#Call instead
 - Split off _NAN_*_ARGS_TYPE from _NAN_*_ARGS
 - Restore (unofficial) Node 0.6 compatibility at NanCallback#Call()
 - Introduce NanRawString() for char* (or appropriate void*) from v8::String
     (replacement for NanFromV8String)
 - Introduce NanCString() for null-terminated char* from v8::String

### 0.6.0 Nov 21 2013

 - Introduce NanNewLocal<T>(v8::Handle<T> value) for use in place of
     v8::Local<T>::New(...) since v8 started requiring isolate in Node 0.11.9

### 0.5.2 Nov 16 2013

 - Convert SavePersistent and GetFromPersistent in NanAsyncWorker from protected and public

### 0.5.1 Nov 12 2013

 - Use node::MakeCallback() instead of direct v8::Function::Call()

### 0.5.0 Nov 11 2013

 - Added @TooTallNate as collaborator
 - New, much simpler, "include_dirs" for binding.gyp
 - Added full range of NAN_INDEX_* macros to match NAN_PROPERTY_* macros

### 0.4.4 Nov 2 2013

 - Isolate argument from v8::Persistent::MakeWeak removed for 0.11.8+

### 0.4.3 Nov 2 2013

 - Include node_object_wrap.h, removed from node.h for Node 0.11.8.

### 0.4.2 Nov 2 2013

 - Handle deprecation of v8::Persistent::Dispose(v8::Isolate* isolate)) for
     Node 0.11.8 release.

### 0.4.1 Sep 16 2013

 - Added explicit `#include <uv.h>` as it was removed from node.h for v0.11.8

### 0.4.0 Sep 2 2013

 - Added NAN_INLINE and NAN_DEPRECATED and made use of them
 - Added NanError, NanTypeError and NanRangeError
 - Cleaned up code

### 0.3.2 Aug 30 2013

 - Fix missing scope declaration in GetFromPersistent() and SaveToPersistent
     in NanAsyncWorker

### 0.3.1 Aug 20 2013

 - fix "not all control paths return a value" compile warning on some platforms

### 0.3.0 Aug 19 2013

 - Made NAN work with NPM
 - Lots of fixes to NanFromV8String, pulling in features from new Node core
 - Changed node::encoding to Nan::Encoding in NanFromV8String to unify the API
 - Added optional error number argument for NanThrowError()
 - Added NanInitPersistent()
 - Added NanReturnNull() and NanReturnEmptyString()
 - Added NanLocker and NanUnlocker
 - Added missing scopes
 - Made sure to clear disposed Persistent handles
 - Changed NanAsyncWorker to allocate error messages on the heap
 - Changed NanThrowError(Local<Value>) to NanThrowError(Handle<Value>)
 - Fixed leak in NanAsyncWorker when errmsg is used

### 0.2.2 Aug 5 2013

 - Fixed usage of undefined variable with node::BASE64 in NanFromV8String()

### 0.2.1 Aug 5 2013

 - Fixed 0.8 breakage, node::BUFFER encoding type not available in 0.8 for
     NanFromV8String()

### 0.2.0 Aug 5 2013

 - Added NAN_PROPERTY_GETTER, NAN_PROPERTY_SETTER, NAN_PROPERTY_ENUMERATOR,
     NAN_PROPERTY_DELETER, NAN_PROPERTY_QUERY
 - Extracted _NAN_METHOD_ARGS, _NAN_GETTER_ARGS, _NAN_SETTER_ARGS,
     _NAN_PROPERTY_GETTER_ARGS, _NAN_PROPERTY_SETTER_ARGS,
     _NAN_PROPERTY_ENUMERATOR_ARGS, _NAN_PROPERTY_DELETER_ARGS,
     _NAN_PROPERTY_QUERY_ARGS
 - Added NanGetInternalFieldPointer, NanSetInternalFieldPointer
 - Added NAN_WEAK_CALLBACK, NAN_WEAK_CALLBACK_OBJECT,
     NAN_WEAK_CALLBACK_DATA, NanMakeWeak
 - Renamed THROW_ERROR to _NAN_THROW_ERROR
 - Added NanNewBufferHandle(char*, size_t, node::smalloc::FreeCallback, void*)
 - Added NanBufferUse(char*, uint32_t)
 - Added NanNewContextHandle(v8::ExtensionConfiguration*,
       v8::Handle<v8::ObjectTemplate>, v8::Handle<v8::Value>)
 - Fixed broken NanCallback#GetFunction()
 - Added optional encoding and size arguments to NanFromV8String()
 - Added NanGetPointerSafe() and NanSetPointerSafe()
 - Added initial test suite (to be expanded)
 - Allow NanUInt32OptionValue to convert any Number object

### 0.1.0 Jul 21 2013

 - Added `NAN_GETTER`, `NAN_SETTER`
 - Added `NanThrowError` with single Local<Value> argument
 - Added `NanNewBufferHandle` with single uint32_t argument
 - Added `NanHasInstance(Persistent<FunctionTemplate>&, Handle<Value>)`
 - Added `Local<Function> NanCallback#GetFunction()`
 - Added `NanCallback#Call(int, Local<Value>[])`
 - Deprecated `NanCallback#Run(int, Local<Value>[])` in favour of Call
