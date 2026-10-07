#ifndef SRC_NAPI_INL_DEPRECATED_H_
#define SRC_NAPI_INL_DEPRECATED_H_

////////////////////////////////////////////////////////////////////////////////
// PropertyDescriptor class
////////////////////////////////////////////////////////////////////////////////

template <typename Getter>
inline PropertyDescriptor
PropertyDescriptor::Accessor(const char* utf8name,
                             Getter getter,
                             napi_property_attributes attributes,
                             void* /*data*/) {
  using CbData = details::CallbackData<Getter, Napi::Value>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ getter, nullptr });

  return PropertyDescriptor({
    utf8name,
    nullptr,
    nullptr,
    CbData::Wrapper,
    nullptr,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(const std::string& utf8name,
                                                       Getter getter,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  return Accessor(utf8name.c_str(), getter, attributes, data);
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(napi_value name,
                                                       Getter getter,
                                                       napi_property_attributes attributes,
                                                       void* /*data*/) {
  using CbData = details::CallbackData<Getter, Napi::Value>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ getter, nullptr });

  return PropertyDescriptor({
    nullptr,
    name,
    nullptr,
    CbData::Wrapper,
    nullptr,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(Name name,
                                                       Getter getter,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  napi_value nameValue = name;
  return PropertyDescriptor::Accessor(nameValue, getter, attributes, data);
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(const char* utf8name,
                                                       Getter getter,
                                                       Setter setter,
                                                       napi_property_attributes attributes,
                                                       void* /*data*/) {
  using CbData = details::AccessorCallbackData<Getter, Setter>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ getter, setter, nullptr });

  return PropertyDescriptor({
    utf8name,
    nullptr,
    nullptr,
    CbData::GetterWrapper,
    CbData::SetterWrapper,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(const std::string& utf8name,
                                                       Getter getter,
                                                       Setter setter,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  return Accessor(utf8name.c_str(), getter, setter, attributes, data);
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(napi_value name,
                                                       Getter getter,
                                                       Setter setter,
                                                       napi_property_attributes attributes,
                                                       void* /*data*/) {
  using CbData = details::AccessorCallbackData<Getter, Setter>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ getter, setter, nullptr });

  return PropertyDescriptor({
    nullptr,
    name,
    nullptr,
    CbData::GetterWrapper,
    CbData::SetterWrapper,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(Name name,
                                                       Getter getter,
                                                       Setter setter,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  napi_value nameValue = name;
  return PropertyDescriptor::Accessor(nameValue, getter, setter, attributes, data);
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(const char* utf8name,
                                                       Callable cb,
                                                       napi_property_attributes attributes,
                                                       void* /*data*/) {
  using ReturnType = decltype(cb(CallbackInfo(nullptr, nullptr)));
  using CbData = details::CallbackData<Callable, ReturnType>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ cb, nullptr });

  return PropertyDescriptor({
    utf8name,
    nullptr,
    CbData::Wrapper,
    nullptr,
    nullptr,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(const std::string& utf8name,
                                                       Callable cb,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  return Function(utf8name.c_str(), cb, attributes, data);
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(napi_value name,
                                                       Callable cb,
                                                       napi_property_attributes attributes,
                                                       void* /*data*/) {
  using ReturnType = decltype(cb(CallbackInfo(nullptr, nullptr)));
  using CbData = details::CallbackData<Callable, ReturnType>;
  // TODO: Delete when the function is destroyed
  auto callbackData = new CbData({ cb, nullptr });

  return PropertyDescriptor({
    nullptr,
    name,
    CbData::Wrapper,
    nullptr,
    nullptr,
    nullptr,
    attributes,
    callbackData
  });
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(Name name,
                                                       Callable cb,
                                                       napi_property_attributes attributes,
                                                       void* data) {
  napi_value nameValue = name;
  return PropertyDescriptor::Function(nameValue, cb, attributes, data);
}

#endif // !SRC_NAPI_INL_DEPRECATED_H_
