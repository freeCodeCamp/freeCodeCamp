/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_DEFINE_OWN_PROPERTY_HELPER_H_
#define NAN_DEFINE_OWN_PROPERTY_HELPER_H_

namespace imp {

inline Maybe<bool> DefineOwnPropertyHelper(
    v8::PropertyAttribute current
  , v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  return !(current & v8::DontDelete) ||                     // configurable OR
                  (!(current & v8::ReadOnly) &&             // writable AND
                   !((attribs ^ current) & ~v8::ReadOnly))  // same excluding RO
             ? Just<bool>(obj->ForceSet(key, value, attribs))
             : Nothing<bool>();
}

}  // end of namespace imp

#endif  // NAN_DEFINE_OWN_PROPERTY_HELPER_H_
