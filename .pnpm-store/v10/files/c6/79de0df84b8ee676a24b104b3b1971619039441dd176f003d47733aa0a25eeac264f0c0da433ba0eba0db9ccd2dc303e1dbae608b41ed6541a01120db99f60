#ifndef SRC_NAPI_H_
#define SRC_NAPI_H_

#ifndef NAPI_HAS_THREADS
#if !defined(__wasm__) || (defined(__EMSCRIPTEN_PTHREADS__) ||                 \
                           (defined(__wasi__) && defined(_REENTRANT)))
#define NAPI_HAS_THREADS 1
#else
#define NAPI_HAS_THREADS 0
#endif
#endif

#include <node_api.h>
#include <functional>
#include <initializer_list>
#include <memory>
#if NAPI_HAS_THREADS
#include <mutex>
#endif  // NAPI_HAS_THREADS
#include <string>
#include <vector>

// VS2015 RTM has bugs with constexpr, so require min of VS2015 Update 3 (known
// good version)
#if !defined(_MSC_VER) || _MSC_FULL_VER >= 190024210
#define NAPI_HAS_CONSTEXPR 1
#endif

// VS2013 does not support char16_t literal strings, so we'll work around it
// using wchar_t strings and casting them. This is safe as long as the character
// sizes are the same.
#if defined(_MSC_VER) && _MSC_VER <= 1800
static_assert(sizeof(char16_t) == sizeof(wchar_t),
              "Size mismatch between char16_t and wchar_t");
#define NAPI_WIDE_TEXT(x) reinterpret_cast<char16_t*>(L##x)
#else
#define NAPI_WIDE_TEXT(x) u##x
#endif

// If C++ exceptions are not explicitly enabled or disabled, enable them
// if exceptions were enabled in the compiler settings.
#if !defined(NAPI_CPP_EXCEPTIONS) && !defined(NAPI_DISABLE_CPP_EXCEPTIONS)
#if defined(_CPPUNWIND) || defined(__EXCEPTIONS)
#define NAPI_CPP_EXCEPTIONS
#else
#error Exception support not detected. \
      Define either NAPI_CPP_EXCEPTIONS or NAPI_DISABLE_CPP_EXCEPTIONS.
#endif
#endif

// If C++ NAPI_CPP_EXCEPTIONS are enabled, NODE_ADDON_API_ENABLE_MAYBE should
// not be set
#if defined(NAPI_CPP_EXCEPTIONS) && defined(NODE_ADDON_API_ENABLE_MAYBE)
#error NODE_ADDON_API_ENABLE_MAYBE should not be set when \
    NAPI_CPP_EXCEPTIONS is defined.
#endif

#ifdef _NOEXCEPT
#define NAPI_NOEXCEPT _NOEXCEPT
#else
#define NAPI_NOEXCEPT noexcept
#endif

#ifdef NAPI_CPP_EXCEPTIONS

// When C++ exceptions are enabled, Errors are thrown directly. There is no need
// to return anything after the throw statements. The variadic parameter is an
// optional return value that is ignored.
// We need _VOID versions of the macros to avoid warnings resulting from
// leaving the NAPI_THROW_* `...` argument empty.

#define NAPI_THROW(e, ...) throw e
#define NAPI_THROW_VOID(e) throw e

#define NAPI_THROW_IF_FAILED(env, status, ...)                                 \
  if ((status) != napi_ok) throw Napi::Error::New(env);

#define NAPI_THROW_IF_FAILED_VOID(env, status)                                 \
  if ((status) != napi_ok) throw Napi::Error::New(env);

#else  // NAPI_CPP_EXCEPTIONS

// When C++ exceptions are disabled, Errors are thrown as JavaScript exceptions,
// which are pending until the callback returns to JS.  The variadic parameter
// is an optional return value; usually it is an empty result.
// We need _VOID versions of the macros to avoid warnings resulting from
// leaving the NAPI_THROW_* `...` argument empty.

#define NAPI_THROW(e, ...)                                                     \
  do {                                                                         \
    (e).ThrowAsJavaScriptException();                                          \
    return __VA_ARGS__;                                                        \
  } while (0)

#define NAPI_THROW_VOID(e)                                                     \
  do {                                                                         \
    (e).ThrowAsJavaScriptException();                                          \
    return;                                                                    \
  } while (0)

#define NAPI_THROW_IF_FAILED(env, status, ...)                                 \
  if ((status) != napi_ok) {                                                   \
    Napi::Error::New(env).ThrowAsJavaScriptException();                        \
    return __VA_ARGS__;                                                        \
  }

#define NAPI_THROW_IF_FAILED_VOID(env, status)                                 \
  if ((status) != napi_ok) {                                                   \
    Napi::Error::New(env).ThrowAsJavaScriptException();                        \
    return;                                                                    \
  }

#endif  // NAPI_CPP_EXCEPTIONS

#ifdef NODE_ADDON_API_ENABLE_MAYBE
#define NAPI_MAYBE_THROW_IF_FAILED(env, status, type)                          \
  NAPI_THROW_IF_FAILED(env, status, Napi::Nothing<type>())

#define NAPI_RETURN_OR_THROW_IF_FAILED(env, status, result, type)              \
  NAPI_MAYBE_THROW_IF_FAILED(env, status, type);                               \
  return Napi::Just<type>(result);
#else
#define NAPI_MAYBE_THROW_IF_FAILED(env, status, type)                          \
  NAPI_THROW_IF_FAILED(env, status, type())

#define NAPI_RETURN_OR_THROW_IF_FAILED(env, status, result, type)              \
  NAPI_MAYBE_THROW_IF_FAILED(env, status, type);                               \
  return result;
#endif

#define NAPI_DISALLOW_ASSIGN(CLASS) void operator=(const CLASS&) = delete;
#define NAPI_DISALLOW_COPY(CLASS) CLASS(const CLASS&) = delete;

#define NAPI_DISALLOW_ASSIGN_COPY(CLASS)                                       \
  NAPI_DISALLOW_ASSIGN(CLASS)                                                  \
  NAPI_DISALLOW_COPY(CLASS)

#define NAPI_CHECK(condition, location, message)                               \
  do {                                                                         \
    if (!(condition)) {                                                        \
      Napi::Error::Fatal((location), (message));                               \
    }                                                                          \
  } while (0)

#define NAPI_FATAL_IF_FAILED(status, location, message)                        \
  NAPI_CHECK((status) == napi_ok, location, message)

////////////////////////////////////////////////////////////////////////////////
/// Node-API C++ Wrapper Classes
///
/// These classes wrap the "Node-API" ABI-stable C APIs for Node.js, providing a
/// C++ object model and C++ exception-handling semantics with low overhead.
/// The wrappers are all header-only so that they do not affect the ABI.
////////////////////////////////////////////////////////////////////////////////
namespace Napi {

#ifdef NAPI_CPP_CUSTOM_NAMESPACE
// NAPI_CPP_CUSTOM_NAMESPACE can be #define'd per-addon to avoid symbol
// conflicts between different instances of node-addon-api

// First dummy definition of the namespace to make sure that Napi::(name) still
// refers to the right things inside this file.
namespace NAPI_CPP_CUSTOM_NAMESPACE {}
using namespace NAPI_CPP_CUSTOM_NAMESPACE;

namespace NAPI_CPP_CUSTOM_NAMESPACE {
#endif

// Forward declarations
class Env;
class Value;
class Boolean;
class Number;
#if NAPI_VERSION > 5
class BigInt;
#endif  // NAPI_VERSION > 5
#if (NAPI_VERSION > 4)
class Date;
#endif
class String;
class Object;
class Array;
class ArrayBuffer;
class Function;
class Error;
class PropertyDescriptor;
class CallbackInfo;
class TypedArray;
template <typename T>
class TypedArrayOf;

using Int8Array =
    TypedArrayOf<int8_t>;  ///< Typed-array of signed 8-bit integers
using Uint8Array =
    TypedArrayOf<uint8_t>;  ///< Typed-array of unsigned 8-bit integers
using Int16Array =
    TypedArrayOf<int16_t>;  ///< Typed-array of signed 16-bit integers
using Uint16Array =
    TypedArrayOf<uint16_t>;  ///< Typed-array of unsigned 16-bit integers
using Int32Array =
    TypedArrayOf<int32_t>;  ///< Typed-array of signed 32-bit integers
using Uint32Array =
    TypedArrayOf<uint32_t>;  ///< Typed-array of unsigned 32-bit integers
using Float32Array =
    TypedArrayOf<float>;  ///< Typed-array of 32-bit floating-point values
using Float64Array =
    TypedArrayOf<double>;  ///< Typed-array of 64-bit floating-point values
#if NAPI_VERSION > 5
using BigInt64Array =
    TypedArrayOf<int64_t>;  ///< Typed array of signed 64-bit integers
using BigUint64Array =
    TypedArrayOf<uint64_t>;  ///< Typed array of unsigned 64-bit integers
#endif                       // NAPI_VERSION > 5

/// Defines the signature of a Node-API C++ module's registration callback
/// (init) function.
using ModuleRegisterCallback = Object (*)(Env env, Object exports);

class MemoryManagement;

/// A simple Maybe type, representing an object which may or may not have a
/// value.
///
/// If an API method returns a Maybe<>, the API method can potentially fail
/// either because an exception is thrown, or because an exception is pending,
/// e.g. because a previous API call threw an exception that hasn't been
/// caught yet. In that case, a "Nothing" value is returned.
template <class T>
class Maybe {
 public:
  bool IsNothing() const;
  bool IsJust() const;

  /// Short-hand for Unwrap(), which doesn't return a value. Could be used
  /// where the actual value of the Maybe is not needed like Object::Set.
  /// If this Maybe is nothing (empty), node-addon-api will crash the
  /// process.
  void Check() const;

  /// Return the value of type T contained in the Maybe. If this Maybe is
  /// nothing (empty), node-addon-api will crash the process.
  T Unwrap() const;

  /// Return the value of type T contained in the Maybe, or using a default
  /// value if this Maybe is nothing (empty).
  T UnwrapOr(const T& default_value) const;

  /// Converts this Maybe to a value of type T in the out. If this Maybe is
  /// nothing (empty), `false` is returned and `out` is left untouched.
  bool UnwrapTo(T* out) const;

  bool operator==(const Maybe& other) const;
  bool operator!=(const Maybe& other) const;

 private:
  Maybe();
  explicit Maybe(const T& t);

  bool _has_value;
  T _value;

  template <class U>
  friend Maybe<U> Nothing();
  template <class U>
  friend Maybe<U> Just(const U& u);
};

template <class T>
inline Maybe<T> Nothing();

template <class T>
inline Maybe<T> Just(const T& t);

#if defined(NODE_ADDON_API_ENABLE_MAYBE)
template <typename T>
using MaybeOrValue = Maybe<T>;
#else
template <typename T>
using MaybeOrValue = T;
#endif

/// Environment for Node-API values and operations.
///
/// All Node-API values and operations must be associated with an environment.
/// An environment instance is always provided to callback functions; that
/// environment must then be used for any creation of Node-API values or other
/// Node-API operations within the callback. (Many methods infer the
/// environment from the `this` instance that the method is called on.)
///
/// In the future, multiple environments per process may be supported,
/// although current implementations only support one environment per process.
///
/// In the V8 JavaScript engine, a Node-API environment approximately
/// corresponds to an Isolate.
class Env {
 private:
  napi_env _env;
#if NAPI_VERSION > 5
  template <typename T>
  static void DefaultFini(Env, T* data);
  template <typename DataType, typename HintType>
  static void DefaultFiniWithHint(Env, DataType* data, HintType* hint);
#endif  // NAPI_VERSION > 5
 public:
  Env(napi_env env);

  operator napi_env() const;

  Object Global() const;
  Value Undefined() const;
  Value Null() const;

  bool IsExceptionPending() const;
  Error GetAndClearPendingException() const;

  MaybeOrValue<Value> RunScript(const char* utf8script) const;
  MaybeOrValue<Value> RunScript(const std::string& utf8script) const;
  MaybeOrValue<Value> RunScript(String script) const;

#if NAPI_VERSION > 2
  template <typename Hook, typename Arg = void>
  class CleanupHook;

  template <typename Hook>
  CleanupHook<Hook> AddCleanupHook(Hook hook);

  template <typename Hook, typename Arg>
  CleanupHook<Hook, Arg> AddCleanupHook(Hook hook, Arg* arg);
#endif  // NAPI_VERSION > 2

#if NAPI_VERSION > 5
  template <typename T>
  T* GetInstanceData() const;

  template <typename T>
  using Finalizer = void (*)(Env, T*);
  template <typename T, Finalizer<T> fini = Env::DefaultFini<T>>
  void SetInstanceData(T* data) const;

  template <typename DataType, typename HintType>
  using FinalizerWithHint = void (*)(Env, DataType*, HintType*);
  template <typename DataType,
            typename HintType,
            FinalizerWithHint<DataType, HintType> fini =
                Env::DefaultFiniWithHint<DataType, HintType>>
  void SetInstanceData(DataType* data, HintType* hint) const;
#endif  // NAPI_VERSION > 5

#if NAPI_VERSION > 2
  template <typename Hook, typename Arg>
  class CleanupHook {
   public:
    CleanupHook();
    CleanupHook(Env env, Hook hook, Arg* arg);
    CleanupHook(Env env, Hook hook);
    bool Remove(Env env);
    bool IsEmpty() const;

   private:
    static inline void Wrapper(void* data) NAPI_NOEXCEPT;
    static inline void WrapperWithArg(void* data) NAPI_NOEXCEPT;

    void (*wrapper)(void* arg);
    struct CleanupData {
      Hook hook;
      Arg* arg;
    } * data;
  };
#endif  // NAPI_VERSION > 2
};

/// A JavaScript value of unknown type.
///
/// For type-specific operations, convert to one of the Value subclasses using a
/// `To*` or `As()` method. The `To*` methods do type coercion; the `As()`
/// method does not.
///
///     Napi::Value value = ...
///     if (!value.IsString()) throw Napi::TypeError::New(env, "Invalid
///     arg..."); Napi::String str = value.As<Napi::String>(); // Cast to a
///     string value
///
///     Napi::Value anotherValue = ...
///     bool isTruthy = anotherValue.ToBoolean(); // Coerce to a boolean value
class Value {
 public:
  Value();  ///< Creates a new _empty_ Value instance.
  Value(napi_env env,
        napi_value value);  ///< Wraps a Node-API value primitive.

  /// Creates a JS value from a C++ primitive.
  ///
  /// `value` may be any of:
  /// - bool
  /// - Any integer type
  /// - Any floating point type
  /// - const char* (encoded using UTF-8, null-terminated)
  /// - const char16_t* (encoded using UTF-16-LE, null-terminated)
  /// - std::string (encoded using UTF-8)
  /// - std::u16string
  /// - napi::Value
  /// - napi_value
  template <typename T>
  static Value From(napi_env env, const T& value);

  /// Converts to a Node-API value primitive.
  ///
  /// If the instance is _empty_, this returns `nullptr`.
  operator napi_value() const;

  /// Tests if this value strictly equals another value.
  bool operator==(const Value& other) const;

  /// Tests if this value does not strictly equal another value.
  bool operator!=(const Value& other) const;

  /// Tests if this value strictly equals another value.
  bool StrictEquals(const Value& other) const;

  /// Gets the environment the value is associated with.
  Napi::Env Env() const;

  /// Checks if the value is empty (uninitialized).
  ///
  /// An empty value is invalid, and most attempts to perform an operation on an
  /// empty value will result in an exception. Note an empty value is distinct
  /// from JavaScript `null` or `undefined`, which are valid values.
  ///
  /// When C++ exceptions are disabled at compile time, a method with a `Value`
  /// return type may return an empty value to indicate a pending exception. So
  /// when not using C++ exceptions, callers should check whether the value is
  /// empty before attempting to use it.
  bool IsEmpty() const;

  napi_valuetype Type() const;  ///< Gets the type of the value.

  bool IsUndefined()
      const;            ///< Tests if a value is an undefined JavaScript value.
  bool IsNull() const;  ///< Tests if a value is a null JavaScript value.
  bool IsBoolean() const;  ///< Tests if a value is a JavaScript boolean.
  bool IsNumber() const;   ///< Tests if a value is a JavaScript number.
#if NAPI_VERSION > 5
  bool IsBigInt() const;  ///< Tests if a value is a JavaScript bigint.
#endif                    // NAPI_VERSION > 5
#if (NAPI_VERSION > 4)
  bool IsDate() const;  ///< Tests if a value is a JavaScript date.
#endif
  bool IsString() const;  ///< Tests if a value is a JavaScript string.
  bool IsSymbol() const;  ///< Tests if a value is a JavaScript symbol.
  bool IsArray() const;   ///< Tests if a value is a JavaScript array.
  bool IsArrayBuffer()
      const;  ///< Tests if a value is a JavaScript array buffer.
  bool IsTypedArray() const;  ///< Tests if a value is a JavaScript typed array.
  bool IsObject() const;      ///< Tests if a value is a JavaScript object.
  bool IsFunction() const;    ///< Tests if a value is a JavaScript function.
  bool IsPromise() const;     ///< Tests if a value is a JavaScript promise.
  bool IsDataView() const;    ///< Tests if a value is a JavaScript data view.
  bool IsBuffer() const;      ///< Tests if a value is a Node buffer.
  bool IsExternal() const;  ///< Tests if a value is a pointer to external data.

  /// Casts to another type of `Napi::Value`, when the actual type is known or
  /// assumed.
  ///
  /// This conversion does NOT coerce the type. Calling any methods
  /// inappropriate for the actual value type will throw `Napi::Error`.
  ///
  /// If `NODE_ADDON_API_ENABLE_TYPE_CHECK_ON_AS` is defined, this method
  /// asserts that the actual type is the expected type.
  template <typename T>
  T As() const;

  MaybeOrValue<Boolean> ToBoolean()
      const;  ///< Coerces a value to a JavaScript boolean.
  MaybeOrValue<Number> ToNumber()
      const;  ///< Coerces a value to a JavaScript number.
  MaybeOrValue<String> ToString()
      const;  ///< Coerces a value to a JavaScript string.
  MaybeOrValue<Object> ToObject()
      const;  ///< Coerces a value to a JavaScript object.

 protected:
  /// !cond INTERNAL
  napi_env _env;
  napi_value _value;
  /// !endcond
};

/// A JavaScript boolean value.
class Boolean : public Value {
 public:
  static Boolean New(napi_env env,  ///< Node-API environment
                     bool value     ///< Boolean value
  );

  static void CheckCast(napi_env env, napi_value value);

  Boolean();  ///< Creates a new _empty_ Boolean instance.
  Boolean(napi_env env,
          napi_value value);  ///< Wraps a Node-API value primitive.

  operator bool() const;  ///< Converts a Boolean value to a boolean primitive.
  bool Value() const;     ///< Converts a Boolean value to a boolean primitive.
};

/// A JavaScript number value.
class Number : public Value {
 public:
  static Number New(napi_env env,  ///< Node-API environment
                    double value   ///< Number value
  );

  static void CheckCast(napi_env env, napi_value value);

  Number();  ///< Creates a new _empty_ Number instance.
  Number(napi_env env,
         napi_value value);  ///< Wraps a Node-API value primitive.

  operator int32_t()
      const;  ///< Converts a Number value to a 32-bit signed integer value.
  operator uint32_t()
      const;  ///< Converts a Number value to a 32-bit unsigned integer value.
  operator int64_t()
      const;  ///< Converts a Number value to a 64-bit signed integer value.
  operator float()
      const;  ///< Converts a Number value to a 32-bit floating-point value.
  operator double()
      const;  ///< Converts a Number value to a 64-bit floating-point value.

  int32_t Int32Value()
      const;  ///< Converts a Number value to a 32-bit signed integer value.
  uint32_t Uint32Value()
      const;  ///< Converts a Number value to a 32-bit unsigned integer value.
  int64_t Int64Value()
      const;  ///< Converts a Number value to a 64-bit signed integer value.
  float FloatValue()
      const;  ///< Converts a Number value to a 32-bit floating-point value.
  double DoubleValue()
      const;  ///< Converts a Number value to a 64-bit floating-point value.
};

#if NAPI_VERSION > 5
/// A JavaScript bigint value.
class BigInt : public Value {
 public:
  static BigInt New(napi_env env,  ///< Node-API environment
                    int64_t value  ///< Number value
  );
  static BigInt New(napi_env env,   ///< Node-API environment
                    uint64_t value  ///< Number value
  );

  /// Creates a new BigInt object using a specified sign bit and a
  /// specified list of digits/words.
  /// The resulting number is calculated as:
  /// (-1)^sign_bit * (words[0] * (2^64)^0 + words[1] * (2^64)^1 + ...)
  static BigInt New(napi_env env,          ///< Node-API environment
                    int sign_bit,          ///< Sign bit. 1 if negative.
                    size_t word_count,     ///< Number of words in array
                    const uint64_t* words  ///< Array of words
  );

  static void CheckCast(napi_env env, napi_value value);

  BigInt();  ///< Creates a new _empty_ BigInt instance.
  BigInt(napi_env env,
         napi_value value);  ///< Wraps a Node-API value primitive.

  int64_t Int64Value(bool* lossless)
      const;  ///< Converts a BigInt value to a 64-bit signed integer value.
  uint64_t Uint64Value(bool* lossless)
      const;  ///< Converts a BigInt value to a 64-bit unsigned integer value.

  size_t WordCount() const;  ///< The number of 64-bit words needed to store
                             ///< the result of ToWords().

  /// Writes the contents of this BigInt to a specified memory location.
  /// `sign_bit` must be provided and will be set to 1 if this BigInt is
  /// negative.
  /// `*word_count` has to be initialized to the length of the `words` array.
  /// Upon return, it will be set to the actual number of words that would
  /// be needed to store this BigInt (i.e. the return value of `WordCount()`).
  void ToWords(int* sign_bit, size_t* word_count, uint64_t* words);
};
#endif  // NAPI_VERSION > 5

#if (NAPI_VERSION > 4)
/// A JavaScript date value.
class Date : public Value {
 public:
  /// Creates a new Date value from a double primitive.
  static Date New(napi_env env,  ///< Node-API environment
                  double value   ///< Number value
  );

  static void CheckCast(napi_env env, napi_value value);

  Date();  ///< Creates a new _empty_ Date instance.
  Date(napi_env env, napi_value value);  ///< Wraps a Node-API value primitive.
  operator double() const;  ///< Converts a Date value to double primitive

  double ValueOf() const;  ///< Converts a Date value to a double primitive.
};
#endif

/// A JavaScript string or symbol value (that can be used as a property name).
class Name : public Value {
 public:
  static void CheckCast(napi_env env, napi_value value);

  Name();  ///< Creates a new _empty_ Name instance.
  Name(napi_env env,
       napi_value value);  ///< Wraps a Node-API value primitive.
};

/// A JavaScript string value.
class String : public Name {
 public:
  /// Creates a new String value from a UTF-8 encoded C++ string.
  static String New(napi_env env,             ///< Node-API environment
                    const std::string& value  ///< UTF-8 encoded C++ string
  );

  /// Creates a new String value from a UTF-16 encoded C++ string.
  static String New(napi_env env,                ///< Node-API environment
                    const std::u16string& value  ///< UTF-16 encoded C++ string
  );

  /// Creates a new String value from a UTF-8 encoded C string.
  static String New(
      napi_env env,      ///< Node-API environment
      const char* value  ///< UTF-8 encoded null-terminated C string
  );

  /// Creates a new String value from a UTF-16 encoded C string.
  static String New(
      napi_env env,          ///< Node-API environment
      const char16_t* value  ///< UTF-16 encoded null-terminated C string
  );

  /// Creates a new String value from a UTF-8 encoded C string with specified
  /// length.
  static String New(napi_env env,       ///< Node-API environment
                    const char* value,  ///< UTF-8 encoded C string (not
                                        ///< necessarily null-terminated)
                    size_t length       ///< length of the string in bytes
  );

  /// Creates a new String value from a UTF-16 encoded C string with specified
  /// length.
  static String New(
      napi_env env,           ///< Node-API environment
      const char16_t* value,  ///< UTF-16 encoded C string (not necessarily
                              ///< null-terminated)
      size_t length           ///< Length of the string in 2-byte code units
  );

  /// Creates a new String based on the original object's type.
  ///
  /// `value` may be any of:
  /// - const char* (encoded using UTF-8, null-terminated)
  /// - const char16_t* (encoded using UTF-16-LE, null-terminated)
  /// - std::string (encoded using UTF-8)
  /// - std::u16string
  template <typename T>
  static String From(napi_env env, const T& value);

  static void CheckCast(napi_env env, napi_value value);

  String();  ///< Creates a new _empty_ String instance.
  String(napi_env env,
         napi_value value);  ///< Wraps a Node-API value primitive.

  operator std::string()
      const;  ///< Converts a String value to a UTF-8 encoded C++ string.
  operator std::u16string()
      const;  ///< Converts a String value to a UTF-16 encoded C++ string.
  std::string Utf8Value()
      const;  ///< Converts a String value to a UTF-8 encoded C++ string.
  std::u16string Utf16Value()
      const;  ///< Converts a String value to a UTF-16 encoded C++ string.
};

/// A JavaScript symbol value.
class Symbol : public Name {
 public:
  /// Creates a new Symbol value with an optional description.
  static Symbol New(
      napi_env env,  ///< Node-API environment
      const char* description =
          nullptr  ///< Optional UTF-8 encoded null-terminated C string
                   ///  describing the symbol
  );

  /// Creates a new Symbol value with a description.
  static Symbol New(
      napi_env env,  ///< Node-API environment
      const std::string&
          description  ///< UTF-8 encoded C++ string describing the symbol
  );

  /// Creates a new Symbol value with a description.
  static Symbol New(napi_env env,       ///< Node-API environment
                    String description  ///< String value describing the symbol
  );

  /// Creates a new Symbol value with a description.
  static Symbol New(
      napi_env env,           ///< Node-API environment
      napi_value description  ///< String value describing the symbol
  );

  /// Get a public Symbol (e.g. Symbol.iterator).
  static MaybeOrValue<Symbol> WellKnown(napi_env, const std::string& name);

  // Create a symbol in the global registry, UTF-8 Encoded cpp string
  static MaybeOrValue<Symbol> For(napi_env env, const std::string& description);

  // Create a symbol in the global registry, C style string (null terminated)
  static MaybeOrValue<Symbol> For(napi_env env, const char* description);

  // Create a symbol in the global registry, String value describing the symbol
  static MaybeOrValue<Symbol> For(napi_env env, String description);

  // Create a symbol in the global registry, napi_value describing the symbol
  static MaybeOrValue<Symbol> For(napi_env env, napi_value description);

  static void CheckCast(napi_env env, napi_value value);

  Symbol();  ///< Creates a new _empty_ Symbol instance.
  Symbol(napi_env env,
         napi_value value);  ///< Wraps a Node-API value primitive.
};

class TypeTaggable : public Value {
 public:
#if NAPI_VERSION >= 8
  void TypeTag(const napi_type_tag* type_tag) const;
  bool CheckTypeTag(const napi_type_tag* type_tag) const;
#endif  // NAPI_VERSION >= 8
 protected:
  TypeTaggable();
  TypeTaggable(napi_env env, napi_value value);
};

/// A JavaScript object value.
class Object : public TypeTaggable {
 public:
  /// Enables property and element assignments using indexing syntax.
  ///
  /// This is a convenient helper to get and set object properties. As
  /// getting and setting object properties may throw with JavaScript
  /// exceptions, it is notable that these operations may fail.
  /// When NODE_ADDON_API_ENABLE_MAYBE is defined, the process will abort
  /// on JavaScript exceptions.
  ///
  /// Example:
  ///
  ///     Napi::Value propertyValue = object1['A'];
  ///     object2['A'] = propertyValue;
  ///     Napi::Value elementValue = array[0];
  ///     array[1] = elementValue;
  template <typename Key>
  class PropertyLValue {
   public:
    /// Converts an L-value to a value.
    operator Value() const;

    /// Assigns a value to the property. The type of value can be
    /// anything supported by `Object::Set`.
    template <typename ValueType>
    PropertyLValue& operator=(ValueType value);

   private:
    PropertyLValue() = delete;
    PropertyLValue(Object object, Key key);
    napi_env _env;
    napi_value _object;
    Key _key;

    friend class Napi::Object;
  };

  /// Creates a new Object value.
  static Object New(napi_env env  ///< Node-API environment
  );

  static void CheckCast(napi_env env, napi_value value);

  Object();  ///< Creates a new _empty_ Object instance.
  Object(napi_env env,
         napi_value value);  ///< Wraps a Node-API value primitive.

  /// Gets or sets a named property.
  PropertyLValue<std::string> operator[](
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  );

  /// Gets or sets a named property.
  PropertyLValue<std::string> operator[](
      const std::string& utf8name  ///< UTF-8 encoded property name
  );

  /// Gets or sets an indexed property or array element.
  PropertyLValue<uint32_t> operator[](
      uint32_t index  /// Property / element index
  );

  /// Gets or sets an indexed property or array element.
  PropertyLValue<Value> operator[](Value index  /// Property / element index
  ) const;

  /// Gets a named property.
  MaybeOrValue<Value> operator[](
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  ) const;

  /// Gets a named property.
  MaybeOrValue<Value> operator[](
      const std::string& utf8name  ///< UTF-8 encoded property name
  ) const;

  /// Gets an indexed property or array element.
  MaybeOrValue<Value> operator[](uint32_t index  ///< Property / element index
  ) const;

  /// Checks whether a property is present.
  MaybeOrValue<bool> Has(napi_value key  ///< Property key primitive
  ) const;

  /// Checks whether a property is present.
  MaybeOrValue<bool> Has(Value key  ///< Property key
  ) const;

  /// Checks whether a named property is present.
  MaybeOrValue<bool> Has(
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  ) const;

  /// Checks whether a named property is present.
  MaybeOrValue<bool> Has(
      const std::string& utf8name  ///< UTF-8 encoded property name
  ) const;

  /// Checks whether a own property is present.
  MaybeOrValue<bool> HasOwnProperty(napi_value key  ///< Property key primitive
  ) const;

  /// Checks whether a own property is present.
  MaybeOrValue<bool> HasOwnProperty(Value key  ///< Property key
  ) const;

  /// Checks whether a own property is present.
  MaybeOrValue<bool> HasOwnProperty(
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  ) const;

  /// Checks whether a own property is present.
  MaybeOrValue<bool> HasOwnProperty(
      const std::string& utf8name  ///< UTF-8 encoded property name
  ) const;

  /// Gets a property.
  MaybeOrValue<Value> Get(napi_value key  ///< Property key primitive
  ) const;

  /// Gets a property.
  MaybeOrValue<Value> Get(Value key  ///< Property key
  ) const;

  /// Gets a named property.
  MaybeOrValue<Value> Get(
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  ) const;

  /// Gets a named property.
  MaybeOrValue<Value> Get(
      const std::string& utf8name  ///< UTF-8 encoded property name
  ) const;

  /// Sets a property.
  template <typename ValueType>
  MaybeOrValue<bool> Set(napi_value key,         ///< Property key primitive
                         const ValueType& value  ///< Property value primitive
  ) const;

  /// Sets a property.
  template <typename ValueType>
  MaybeOrValue<bool> Set(Value key,              ///< Property key
                         const ValueType& value  ///< Property value
  ) const;

  /// Sets a named property.
  template <typename ValueType>
  MaybeOrValue<bool> Set(
      const char* utf8name,  ///< UTF-8 encoded null-terminated property name
      const ValueType& value) const;

  /// Sets a named property.
  template <typename ValueType>
  MaybeOrValue<bool> Set(
      const std::string& utf8name,  ///< UTF-8 encoded property name
      const ValueType& value        ///< Property value primitive
  ) const;

  /// Delete property.
  MaybeOrValue<bool> Delete(napi_value key  ///< Property key primitive
  ) const;

  /// Delete property.
  MaybeOrValue<bool> Delete(Value key  ///< Property key
  ) const;

  /// Delete property.
  MaybeOrValue<bool> Delete(
      const char* utf8name  ///< UTF-8 encoded null-terminated property name
  ) const;

  /// Delete property.
  MaybeOrValue<bool> Delete(
      const std::string& utf8name  ///< UTF-8 encoded property name
  ) const;

  /// Checks whether an indexed property is present.
  MaybeOrValue<bool> Has(uint32_t index  ///< Property / element index
  ) const;

  /// Gets an indexed property or array element.
  MaybeOrValue<Value> Get(uint32_t index  ///< Property / element index
  ) const;

  /// Sets an indexed property or array element.
  template <typename ValueType>
  MaybeOrValue<bool> Set(uint32_t index,         ///< Property / element index
                         const ValueType& value  ///< Property value primitive
  ) const;

  /// Deletes an indexed property or array element.
  MaybeOrValue<bool> Delete(uint32_t index  ///< Property / element index
  ) const;

  /// This operation can fail in case of Proxy.[[OwnPropertyKeys]] and
  /// Proxy.[[GetOwnProperty]] calling into JavaScript. See:
  /// -
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
  /// -
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p
  MaybeOrValue<Array> GetPropertyNames() const;  ///< Get all property names

  /// Defines a property on the object.
  ///
  /// This operation can fail in case of Proxy.[[DefineOwnProperty]] calling
  /// into JavaScript. See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
  MaybeOrValue<bool> DefineProperty(
      const PropertyDescriptor&
          property  ///< Descriptor for the property to be defined
  ) const;

  /// Defines properties on the object.
  ///
  /// This operation can fail in case of Proxy.[[DefineOwnProperty]] calling
  /// into JavaScript. See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
  MaybeOrValue<bool> DefineProperties(
      const std::initializer_list<PropertyDescriptor>& properties
      ///< List of descriptors for the properties to be defined
  ) const;

  /// Defines properties on the object.
  ///
  /// This operation can fail in case of Proxy.[[DefineOwnProperty]] calling
  /// into JavaScript. See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
  MaybeOrValue<bool> DefineProperties(
      const std::vector<PropertyDescriptor>& properties
      ///< Vector of descriptors for the properties to be defined
  ) const;

  /// Checks if an object is an instance created by a constructor function.
  ///
  /// This is equivalent to the JavaScript `instanceof` operator.
  ///
  /// This operation can fail in case of Proxy.[[GetPrototypeOf]] calling into
  /// JavaScript.
  /// See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof
  MaybeOrValue<bool> InstanceOf(
      const Function& constructor  ///< Constructor function
  ) const;

  template <typename Finalizer, typename T>
  inline void AddFinalizer(Finalizer finalizeCallback, T* data) const;

  template <typename Finalizer, typename T, typename Hint>
  inline void AddFinalizer(Finalizer finalizeCallback,
                           T* data,
                           Hint* finalizeHint) const;

#ifdef NAPI_CPP_EXCEPTIONS
  class const_iterator;

  inline const_iterator begin() const;

  inline const_iterator end() const;

  class iterator;

  inline iterator begin();

  inline iterator end();
#endif  // NAPI_CPP_EXCEPTIONS

#if NAPI_VERSION >= 8
  /// This operation can fail in case of Proxy.[[GetPrototypeOf]] calling into
  /// JavaScript.
  /// See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof
  MaybeOrValue<bool> Freeze() const;
  /// This operation can fail in case of Proxy.[[GetPrototypeOf]] calling into
  /// JavaScript.
  /// See
  /// https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof
  MaybeOrValue<bool> Seal() const;
#endif  // NAPI_VERSION >= 8
};

template <typename T>
class External : public TypeTaggable {
 public:
  static External New(napi_env env, T* data);

  // Finalizer must implement `void operator()(Env env, T* data)`.
  template <typename Finalizer>
  static External New(napi_env env, T* data, Finalizer finalizeCallback);
  // Finalizer must implement `void operator()(Env env, T* data, Hint* hint)`.
  template <typename Finalizer, typename Hint>
  static External New(napi_env env,
                      T* data,
                      Finalizer finalizeCallback,
                      Hint* finalizeHint);

  static void CheckCast(napi_env env, napi_value value);

  External();
  External(napi_env env, napi_value value);

  T* Data() const;
};

class Array : public Object {
 public:
  static Array New(napi_env env);
  static Array New(napi_env env, size_t length);

  static void CheckCast(napi_env env, napi_value value);

  Array();
  Array(napi_env env, napi_value value);

  uint32_t Length() const;
};

#ifdef NAPI_CPP_EXCEPTIONS
class Object::const_iterator {
 private:
  enum class Type { BEGIN, END };

  inline const_iterator(const Object* object, const Type type);

 public:
  inline const_iterator& operator++();

  inline bool operator==(const const_iterator& other) const;

  inline bool operator!=(const const_iterator& other) const;

  inline const std::pair<Value, Object::PropertyLValue<Value>> operator*()
      const;

 private:
  const Napi::Object* _object;
  Array _keys;
  uint32_t _index;

  friend class Object;
};

class Object::iterator {
 private:
  enum class Type { BEGIN, END };

  inline iterator(Object* object, const Type type);

 public:
  inline iterator& operator++();

  inline bool operator==(const iterator& other) const;

  inline bool operator!=(const iterator& other) const;

  inline std::pair<Value, Object::PropertyLValue<Value>> operator*();

 private:
  Napi::Object* _object;
  Array _keys;
  uint32_t _index;

  friend class Object;
};
#endif  // NAPI_CPP_EXCEPTIONS

/// A JavaScript array buffer value.
class ArrayBuffer : public Object {
 public:
  /// Creates a new ArrayBuffer instance over a new automatically-allocated
  /// buffer.
  static ArrayBuffer New(
      napi_env env,      ///< Node-API environment
      size_t byteLength  ///< Length of the buffer to be allocated, in bytes
  );

#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  /// Creates a new ArrayBuffer instance, using an external buffer with
  /// specified byte length.
  static ArrayBuffer New(
      napi_env env,        ///< Node-API environment
      void* externalData,  ///< Pointer to the external buffer to be used by
                           ///< the array
      size_t byteLength    ///< Length of the external buffer to be used by the
                           ///< array, in bytes
  );

  /// Creates a new ArrayBuffer instance, using an external buffer with
  /// specified byte length.
  template <typename Finalizer>
  static ArrayBuffer New(
      napi_env env,        ///< Node-API environment
      void* externalData,  ///< Pointer to the external buffer to be used by
                           ///< the array
      size_t byteLength,   ///< Length of the external buffer to be used by the
                           ///< array,
                           ///  in bytes
      Finalizer finalizeCallback  ///< Function to be called when the array
                                  ///< buffer is destroyed;
                                  ///  must implement `void operator()(Env env,
                                  ///  void* externalData)`
  );

  /// Creates a new ArrayBuffer instance, using an external buffer with
  /// specified byte length.
  template <typename Finalizer, typename Hint>
  static ArrayBuffer New(
      napi_env env,        ///< Node-API environment
      void* externalData,  ///< Pointer to the external buffer to be used by
                           ///< the array
      size_t byteLength,   ///< Length of the external buffer to be used by the
                           ///< array,
                           ///  in bytes
      Finalizer finalizeCallback,  ///< Function to be called when the array
                                   ///< buffer is destroyed;
                                   ///  must implement `void operator()(Env
                                   ///  env, void* externalData, Hint* hint)`
      Hint* finalizeHint  ///< Hint (second parameter) to be passed to the
                          ///< finalize callback
  );
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED

  static void CheckCast(napi_env env, napi_value value);

  ArrayBuffer();  ///< Creates a new _empty_ ArrayBuffer instance.
  ArrayBuffer(napi_env env,
              napi_value value);  ///< Wraps a Node-API value primitive.

  void* Data();         ///< Gets a pointer to the data buffer.
  size_t ByteLength();  ///< Gets the length of the array buffer in bytes.

#if NAPI_VERSION >= 7
  bool IsDetached() const;
  void Detach();
#endif  // NAPI_VERSION >= 7
};

/// A JavaScript typed-array value with unknown array type.
///
/// For type-specific operations, cast to a `TypedArrayOf<T>` instance using the
/// `As()` method:
///
///     Napi::TypedArray array = ...
///     if (t.TypedArrayType() == napi_int32_array) {
///         Napi::Int32Array int32Array = t.As<Napi::Int32Array>();
///     }
class TypedArray : public Object {
 public:
  static void CheckCast(napi_env env, napi_value value);

  TypedArray();  ///< Creates a new _empty_ TypedArray instance.
  TypedArray(napi_env env,
             napi_value value);  ///< Wraps a Node-API value primitive.

  napi_typedarray_type TypedArrayType()
      const;  ///< Gets the type of this typed-array.
  Napi::ArrayBuffer ArrayBuffer() const;  ///< Gets the backing array buffer.

  uint8_t ElementSize()
      const;  ///< Gets the size in bytes of one element in the array.
  size_t ElementLength() const;  ///< Gets the number of elements in the array.
  size_t ByteOffset()
      const;  ///< Gets the offset into the buffer where the array starts.
  size_t ByteLength() const;  ///< Gets the length of the array in bytes.

 protected:
  /// !cond INTERNAL
  napi_typedarray_type _type;
  size_t _length;

  TypedArray(napi_env env,
             napi_value value,
             napi_typedarray_type type,
             size_t length);

  template <typename T>
  static
#if defined(NAPI_HAS_CONSTEXPR)
      constexpr
#endif
      napi_typedarray_type
      TypedArrayTypeForPrimitiveType() {
    return std::is_same<T, int8_t>::value     ? napi_int8_array
           : std::is_same<T, uint8_t>::value  ? napi_uint8_array
           : std::is_same<T, int16_t>::value  ? napi_int16_array
           : std::is_same<T, uint16_t>::value ? napi_uint16_array
           : std::is_same<T, int32_t>::value  ? napi_int32_array
           : std::is_same<T, uint32_t>::value ? napi_uint32_array
           : std::is_same<T, float>::value    ? napi_float32_array
           : std::is_same<T, double>::value   ? napi_float64_array
#if NAPI_VERSION > 5
           : std::is_same<T, int64_t>::value  ? napi_bigint64_array
           : std::is_same<T, uint64_t>::value ? napi_biguint64_array
#endif  // NAPI_VERSION > 5
                                              : napi_int8_array;
  }
  /// !endcond
};

/// A JavaScript typed-array value with known array type.
///
/// Note while it is possible to create and access Uint8 "clamped" arrays using
/// this class, the _clamping_ behavior is only applied in JavaScript.
template <typename T>
class TypedArrayOf : public TypedArray {
 public:
  /// Creates a new TypedArray instance over a new automatically-allocated array
  /// buffer.
  ///
  /// The array type parameter can normally be omitted (because it is inferred
  /// from the template parameter T), except when creating a "clamped" array:
  ///
  ///     Uint8Array::New(env, length, napi_uint8_clamped_array)
  static TypedArrayOf New(
      napi_env env,          ///< Node-API environment
      size_t elementLength,  ///< Length of the created array, as a number of
                             ///< elements
#if defined(NAPI_HAS_CONSTEXPR)
      napi_typedarray_type type =
          TypedArray::TypedArrayTypeForPrimitiveType<T>()
#else
        napi_typedarray_type type
#endif
      ///< Type of array, if different from the default array type for the
      ///< template parameter T.
  );

  /// Creates a new TypedArray instance over a provided array buffer.
  ///
  /// The array type parameter can normally be omitted (because it is inferred
  /// from the template parameter T), except when creating a "clamped" array:
  ///
  ///     Uint8Array::New(env, length, buffer, 0, napi_uint8_clamped_array)
  static TypedArrayOf New(
      napi_env env,          ///< Node-API environment
      size_t elementLength,  ///< Length of the created array, as a number of
                             ///< elements
      Napi::ArrayBuffer arrayBuffer,  ///< Backing array buffer instance to use
      size_t bufferOffset,  ///< Offset into the array buffer where the
                            ///< typed-array starts
#if defined(NAPI_HAS_CONSTEXPR)
      napi_typedarray_type type =
          TypedArray::TypedArrayTypeForPrimitiveType<T>()
#else
        napi_typedarray_type type
#endif
      ///< Type of array, if different from the default array type for the
      ///< template parameter T.
  );

  static void CheckCast(napi_env env, napi_value value);

  TypedArrayOf();  ///< Creates a new _empty_ TypedArrayOf instance.
  TypedArrayOf(napi_env env,
               napi_value value);  ///< Wraps a Node-API value primitive.

  T& operator[](size_t index);  ///< Gets or sets an element in the array.
  const T& operator[](size_t index) const;  ///< Gets an element in the array.

  /// Gets a pointer to the array's backing buffer.
  ///
  /// This is not necessarily the same as the `ArrayBuffer::Data()` pointer,
  /// because the typed-array may have a non-zero `ByteOffset()` into the
  /// `ArrayBuffer`.
  T* Data();

  /// Gets a pointer to the array's backing buffer.
  ///
  /// This is not necessarily the same as the `ArrayBuffer::Data()` pointer,
  /// because the typed-array may have a non-zero `ByteOffset()` into the
  /// `ArrayBuffer`.
  const T* Data() const;

 private:
  T* _data;

  TypedArrayOf(napi_env env,
               napi_value value,
               napi_typedarray_type type,
               size_t length,
               T* data);
};

/// The DataView provides a low-level interface for reading/writing multiple
/// number types in an ArrayBuffer irrespective of the platform's endianness.
class DataView : public Object {
 public:
  static DataView New(napi_env env, Napi::ArrayBuffer arrayBuffer);
  static DataView New(napi_env env,
                      Napi::ArrayBuffer arrayBuffer,
                      size_t byteOffset);
  static DataView New(napi_env env,
                      Napi::ArrayBuffer arrayBuffer,
                      size_t byteOffset,
                      size_t byteLength);

  static void CheckCast(napi_env env, napi_value value);

  DataView();  ///< Creates a new _empty_ DataView instance.
  DataView(napi_env env,
           napi_value value);  ///< Wraps a Node-API value primitive.

  Napi::ArrayBuffer ArrayBuffer() const;  ///< Gets the backing array buffer.
  size_t ByteOffset()
      const;  ///< Gets the offset into the buffer where the array starts.
  size_t ByteLength() const;  ///< Gets the length of the array in bytes.

  void* Data() const;

  float GetFloat32(size_t byteOffset) const;
  double GetFloat64(size_t byteOffset) const;
  int8_t GetInt8(size_t byteOffset) const;
  int16_t GetInt16(size_t byteOffset) const;
  int32_t GetInt32(size_t byteOffset) const;
  uint8_t GetUint8(size_t byteOffset) const;
  uint16_t GetUint16(size_t byteOffset) const;
  uint32_t GetUint32(size_t byteOffset) const;

  void SetFloat32(size_t byteOffset, float value) const;
  void SetFloat64(size_t byteOffset, double value) const;
  void SetInt8(size_t byteOffset, int8_t value) const;
  void SetInt16(size_t byteOffset, int16_t value) const;
  void SetInt32(size_t byteOffset, int32_t value) const;
  void SetUint8(size_t byteOffset, uint8_t value) const;
  void SetUint16(size_t byteOffset, uint16_t value) const;
  void SetUint32(size_t byteOffset, uint32_t value) const;

 private:
  template <typename T>
  T ReadData(size_t byteOffset) const;

  template <typename T>
  void WriteData(size_t byteOffset, T value) const;

  void* _data;
  size_t _length;
};

class Function : public Object {
 public:
  using VoidCallback = void (*)(const CallbackInfo& info);
  using Callback = Value (*)(const CallbackInfo& info);

  template <VoidCallback cb>
  static Function New(napi_env env,
                      const char* utf8name = nullptr,
                      void* data = nullptr);

  template <Callback cb>
  static Function New(napi_env env,
                      const char* utf8name = nullptr,
                      void* data = nullptr);

  template <VoidCallback cb>
  static Function New(napi_env env,
                      const std::string& utf8name,
                      void* data = nullptr);

  template <Callback cb>
  static Function New(napi_env env,
                      const std::string& utf8name,
                      void* data = nullptr);

  /// Callable must implement operator() accepting a const CallbackInfo&
  /// and return either void or Value.
  template <typename Callable>
  static Function New(napi_env env,
                      Callable cb,
                      const char* utf8name = nullptr,
                      void* data = nullptr);
  /// Callable must implement operator() accepting a const CallbackInfo&
  /// and return either void or Value.
  template <typename Callable>
  static Function New(napi_env env,
                      Callable cb,
                      const std::string& utf8name,
                      void* data = nullptr);

  static void CheckCast(napi_env env, napi_value value);

  Function();
  Function(napi_env env, napi_value value);

  MaybeOrValue<Value> operator()(
      const std::initializer_list<napi_value>& args) const;

  MaybeOrValue<Value> Call(const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Value> Call(const std::vector<napi_value>& args) const;
  MaybeOrValue<Value> Call(const std::vector<Value>& args) const;
  MaybeOrValue<Value> Call(size_t argc, const napi_value* args) const;
  MaybeOrValue<Value> Call(napi_value recv,
                           const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Value> Call(napi_value recv,
                           const std::vector<napi_value>& args) const;
  MaybeOrValue<Value> Call(napi_value recv,
                           const std::vector<Value>& args) const;
  MaybeOrValue<Value> Call(napi_value recv,
                           size_t argc,
                           const napi_value* args) const;

  MaybeOrValue<Value> MakeCallback(
      napi_value recv,
      const std::initializer_list<napi_value>& args,
      napi_async_context context = nullptr) const;
  MaybeOrValue<Value> MakeCallback(napi_value recv,
                                   const std::vector<napi_value>& args,
                                   napi_async_context context = nullptr) const;
  MaybeOrValue<Value> MakeCallback(napi_value recv,
                                   size_t argc,
                                   const napi_value* args,
                                   napi_async_context context = nullptr) const;

  MaybeOrValue<Object> New(const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Object> New(const std::vector<napi_value>& args) const;
  MaybeOrValue<Object> New(size_t argc, const napi_value* args) const;
};

class Promise : public Object {
 public:
  class Deferred {
   public:
    static Deferred New(napi_env env);
    Deferred(napi_env env);

    Napi::Promise Promise() const;
    Napi::Env Env() const;

    void Resolve(napi_value value) const;
    void Reject(napi_value value) const;

   private:
    napi_env _env;
    napi_deferred _deferred;
    napi_value _promise;
  };

  static void CheckCast(napi_env env, napi_value value);

  Promise(napi_env env, napi_value value);
};

template <typename T>
class Buffer : public Uint8Array {
 public:
  static Buffer<T> New(napi_env env, size_t length);
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  static Buffer<T> New(napi_env env, T* data, size_t length);

  // Finalizer must implement `void operator()(Env env, T* data)`.
  template <typename Finalizer>
  static Buffer<T> New(napi_env env,
                       T* data,
                       size_t length,
                       Finalizer finalizeCallback);
  // Finalizer must implement `void operator()(Env env, T* data, Hint* hint)`.
  template <typename Finalizer, typename Hint>
  static Buffer<T> New(napi_env env,
                       T* data,
                       size_t length,
                       Finalizer finalizeCallback,
                       Hint* finalizeHint);
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED

  static Buffer<T> NewOrCopy(napi_env env, T* data, size_t length);
  // Finalizer must implement `void operator()(Env env, T* data)`.
  template <typename Finalizer>
  static Buffer<T> NewOrCopy(napi_env env,
                             T* data,
                             size_t length,
                             Finalizer finalizeCallback);
  // Finalizer must implement `void operator()(Env env, T* data, Hint* hint)`.
  template <typename Finalizer, typename Hint>
  static Buffer<T> NewOrCopy(napi_env env,
                             T* data,
                             size_t length,
                             Finalizer finalizeCallback,
                             Hint* finalizeHint);

  static Buffer<T> Copy(napi_env env, const T* data, size_t length);

  static void CheckCast(napi_env env, napi_value value);

  Buffer();
  Buffer(napi_env env, napi_value value);
  size_t Length() const;
  T* Data() const;

 private:
  mutable size_t _length;
  mutable T* _data;

  Buffer(napi_env env, napi_value value, size_t length, T* data);
  void EnsureInfo() const;
};

/// Holds a counted reference to a value; initially a weak reference unless
/// otherwise specified, may be changed to/from a strong reference by adjusting
/// the refcount.
///
/// The referenced value is not immediately destroyed when the reference count
/// is zero; it is merely then eligible for garbage-collection if there are no
/// other references to the value.
template <typename T>
class Reference {
 public:
  static Reference<T> New(const T& value, uint32_t initialRefcount = 0);

  Reference();
  Reference(napi_env env, napi_ref ref);
  ~Reference();

  // A reference can be moved but cannot be copied.
  Reference(Reference<T>&& other);
  Reference<T>& operator=(Reference<T>&& other);
  NAPI_DISALLOW_ASSIGN(Reference<T>)

  operator napi_ref() const;
  bool operator==(const Reference<T>& other) const;
  bool operator!=(const Reference<T>& other) const;

  Napi::Env Env() const;
  bool IsEmpty() const;

  // Note when getting the value of a Reference it is usually correct to do so
  // within a HandleScope so that the value handle gets cleaned up efficiently.
  T Value() const;

  uint32_t Ref() const;
  uint32_t Unref() const;
  void Reset();
  void Reset(const T& value, uint32_t refcount = 0);

  // Call this on a reference that is declared as static data, to prevent its
  // destructor from running at program shutdown time, which would attempt to
  // reset the reference when the environment is no longer valid. Avoid using
  // this if at all possible. If you do need to use static data, MAKE SURE to
  // warn your users that your addon is NOT threadsafe.
  void SuppressDestruct();

 protected:
  Reference(const Reference<T>&);

  /// !cond INTERNAL
  napi_env _env;
  napi_ref _ref;
  /// !endcond

 private:
  bool _suppressDestruct;
};

class ObjectReference : public Reference<Object> {
 public:
  ObjectReference();
  ObjectReference(napi_env env, napi_ref ref);

  // A reference can be moved but cannot be copied.
  ObjectReference(Reference<Object>&& other);
  ObjectReference& operator=(Reference<Object>&& other);
  ObjectReference(ObjectReference&& other);
  ObjectReference& operator=(ObjectReference&& other);
  NAPI_DISALLOW_ASSIGN(ObjectReference)

  MaybeOrValue<Napi::Value> Get(const char* utf8name) const;
  MaybeOrValue<Napi::Value> Get(const std::string& utf8name) const;
  MaybeOrValue<bool> Set(const char* utf8name, napi_value value) const;
  MaybeOrValue<bool> Set(const char* utf8name, Napi::Value value) const;
  MaybeOrValue<bool> Set(const char* utf8name, const char* utf8value) const;
  MaybeOrValue<bool> Set(const char* utf8name, bool boolValue) const;
  MaybeOrValue<bool> Set(const char* utf8name, double numberValue) const;
  MaybeOrValue<bool> Set(const std::string& utf8name, napi_value value) const;
  MaybeOrValue<bool> Set(const std::string& utf8name, Napi::Value value) const;
  MaybeOrValue<bool> Set(const std::string& utf8name,
                         std::string& utf8value) const;
  MaybeOrValue<bool> Set(const std::string& utf8name, bool boolValue) const;
  MaybeOrValue<bool> Set(const std::string& utf8name, double numberValue) const;

  MaybeOrValue<Napi::Value> Get(uint32_t index) const;
  MaybeOrValue<bool> Set(uint32_t index, const napi_value value) const;
  MaybeOrValue<bool> Set(uint32_t index, const Napi::Value value) const;
  MaybeOrValue<bool> Set(uint32_t index, const char* utf8value) const;
  MaybeOrValue<bool> Set(uint32_t index, const std::string& utf8value) const;
  MaybeOrValue<bool> Set(uint32_t index, bool boolValue) const;
  MaybeOrValue<bool> Set(uint32_t index, double numberValue) const;

 protected:
  ObjectReference(const ObjectReference&);
};

class FunctionReference : public Reference<Function> {
 public:
  FunctionReference();
  FunctionReference(napi_env env, napi_ref ref);

  // A reference can be moved but cannot be copied.
  FunctionReference(Reference<Function>&& other);
  FunctionReference& operator=(Reference<Function>&& other);
  FunctionReference(FunctionReference&& other);
  FunctionReference& operator=(FunctionReference&& other);
  NAPI_DISALLOW_ASSIGN_COPY(FunctionReference)

  MaybeOrValue<Napi::Value> operator()(
      const std::initializer_list<napi_value>& args) const;

  MaybeOrValue<Napi::Value> Call(
      const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Napi::Value> Call(const std::vector<napi_value>& args) const;
  MaybeOrValue<Napi::Value> Call(
      napi_value recv, const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Napi::Value> Call(napi_value recv,
                                 const std::vector<napi_value>& args) const;
  MaybeOrValue<Napi::Value> Call(napi_value recv,
                                 size_t argc,
                                 const napi_value* args) const;

  MaybeOrValue<Napi::Value> MakeCallback(
      napi_value recv,
      const std::initializer_list<napi_value>& args,
      napi_async_context context = nullptr) const;
  MaybeOrValue<Napi::Value> MakeCallback(
      napi_value recv,
      const std::vector<napi_value>& args,
      napi_async_context context = nullptr) const;
  MaybeOrValue<Napi::Value> MakeCallback(
      napi_value recv,
      size_t argc,
      const napi_value* args,
      napi_async_context context = nullptr) const;

  MaybeOrValue<Object> New(const std::initializer_list<napi_value>& args) const;
  MaybeOrValue<Object> New(const std::vector<napi_value>& args) const;
};

// Shortcuts to creating a new reference with inferred type and refcount = 0.
template <typename T>
Reference<T> Weak(T value);
ObjectReference Weak(Object value);
FunctionReference Weak(Function value);

// Shortcuts to creating a new reference with inferred type and refcount = 1.
template <typename T>
Reference<T> Persistent(T value);
ObjectReference Persistent(Object value);
FunctionReference Persistent(Function value);

/// A persistent reference to a JavaScript error object. Use of this class
/// depends somewhat on whether C++ exceptions are enabled at compile time.
///
/// ### Handling Errors With C++ Exceptions
///
/// If C++ exceptions are enabled, then the `Error` class extends
/// `std::exception` and enables integrated error-handling for C++ exceptions
/// and JavaScript exceptions.
///
/// If a Node-API call fails without executing any JavaScript code (for
/// example due to an invalid argument), then the Node-API wrapper
/// automatically converts and throws the error as a C++ exception of type
/// `Napi::Error`. Or if a JavaScript function called by C++ code via Node-API
/// throws a JavaScript exception, then the Node-API wrapper automatically
/// converts and throws it as a C++ exception of type `Napi::Error`.
///
/// If a C++ exception of type `Napi::Error` escapes from a Node-API C++
/// callback, then the Node-API wrapper automatically converts and throws it
/// as a JavaScript exception. Therefore, catching a C++ exception of type
/// `Napi::Error` prevents a JavaScript exception from being thrown.
///
/// #### Example 1A - Throwing a C++ exception:
///
///     Napi::Env env = ...
///     throw Napi::Error::New(env, "Example exception");
///
/// Following C++ statements will not be executed. The exception will bubble
/// up as a C++ exception of type `Napi::Error`, until it is either caught
/// while still in C++, or else automatically propataged as a JavaScript
/// exception when the callback returns to JavaScript.
///
/// #### Example 2A - Propagating a Node-API C++ exception:
///
///     Napi::Function jsFunctionThatThrows = someObj.As<Napi::Function>();
///     Napi::Value result = jsFunctionThatThrows({ arg1, arg2 });
///
/// Following C++ statements will not be executed. The exception will bubble
/// up as a C++ exception of type `Napi::Error`, until it is either caught
/// while still in C++, or else automatically propagated as a JavaScript
/// exception when the callback returns to JavaScript.
///
/// #### Example 3A - Handling a Node-API C++ exception:
///
///     Napi::Function jsFunctionThatThrows = someObj.As<Napi::Function>();
///     Napi::Value result;
///     try {
///        result = jsFunctionThatThrows({ arg1, arg2 });
///     } catch (const Napi::Error& e) {
///       cerr << "Caught JavaScript exception: " + e.what();
///     }
///
/// Since the exception was caught here, it will not be propagated as a
/// JavaScript exception.
///
/// ### Handling Errors Without C++ Exceptions
///
/// If C++ exceptions are disabled (by defining `NAPI_DISABLE_CPP_EXCEPTIONS`)
/// then this class does not extend `std::exception`, and APIs in the `Napi`
/// namespace do not throw C++ exceptions when they fail. Instead, they raise
/// _pending_ JavaScript exceptions and return _empty_ `Value`s. Calling code
/// should check `Value::IsEmpty()` before attempting to use a returned value,
/// and may use methods on the `Env` class to check for, get, and clear a
/// pending JavaScript exception. If the pending exception is not cleared, it
/// will be thrown when the native callback returns to JavaScript.
///
/// #### Example 1B - Throwing a JS exception
///
///     Napi::Env env = ...
///     Napi::Error::New(env, "Example
///     exception").ThrowAsJavaScriptException(); return;
///
/// After throwing a JS exception, the code should generally return
/// immediately from the native callback, after performing any necessary
/// cleanup.
///
/// #### Example 2B - Propagating a Node-API JS exception:
///
///     Napi::Function jsFunctionThatThrows = someObj.As<Napi::Function>();
///     Napi::Value result = jsFunctionThatThrows({ arg1, arg2 });
///     if (result.IsEmpty()) return;
///
/// An empty value result from a Node-API call indicates an error occurred,
/// and a JavaScript exception is pending. To let the exception propagate, the
/// code should generally return immediately from the native callback, after
/// performing any necessary cleanup.
///
/// #### Example 3B - Handling a Node-API JS exception:
///
///     Napi::Function jsFunctionThatThrows = someObj.As<Napi::Function>();
///     Napi::Value result = jsFunctionThatThrows({ arg1, arg2 });
///     if (result.IsEmpty()) {
///       Napi::Error e = env.GetAndClearPendingException();
///       cerr << "Caught JavaScript exception: " + e.Message();
///     }
///
/// Since the exception was cleared here, it will not be propagated as a
/// JavaScript exception after the native callback returns.
class Error : public ObjectReference
#ifdef NAPI_CPP_EXCEPTIONS
    ,
              public std::exception
#endif  // NAPI_CPP_EXCEPTIONS
{
 public:
  static Error New(napi_env env);
  static Error New(napi_env env, const char* message);
  static Error New(napi_env env, const std::string& message);

  static NAPI_NO_RETURN void Fatal(const char* location, const char* message);

  Error();
  Error(napi_env env, napi_value value);

  // An error can be moved or copied.
  Error(Error&& other);
  Error& operator=(Error&& other);
  Error(const Error&);
  Error& operator=(const Error&);

  const std::string& Message() const NAPI_NOEXCEPT;
  void ThrowAsJavaScriptException() const;

  Object Value() const;

#ifdef NAPI_CPP_EXCEPTIONS
  const char* what() const NAPI_NOEXCEPT override;
#endif  // NAPI_CPP_EXCEPTIONS

 protected:
  /// !cond INTERNAL
  using create_error_fn = napi_status (*)(napi_env envb,
                                          napi_value code,
                                          napi_value msg,
                                          napi_value* result);

  template <typename TError>
  static TError New(napi_env env,
                    const char* message,
                    size_t length,
                    create_error_fn create_error);
  /// !endcond

 private:
  static inline const char* ERROR_WRAP_VALUE() NAPI_NOEXCEPT;
  mutable std::string _message;
};

class TypeError : public Error {
 public:
  static TypeError New(napi_env env, const char* message);
  static TypeError New(napi_env env, const std::string& message);

  TypeError();
  TypeError(napi_env env, napi_value value);
};

class RangeError : public Error {
 public:
  static RangeError New(napi_env env, const char* message);
  static RangeError New(napi_env env, const std::string& message);

  RangeError();
  RangeError(napi_env env, napi_value value);
};

class CallbackInfo {
 public:
  CallbackInfo(napi_env env, napi_callback_info info);
  ~CallbackInfo();

  // Disallow copying to prevent multiple free of _dynamicArgs
  NAPI_DISALLOW_ASSIGN_COPY(CallbackInfo)

  Napi::Env Env() const;
  Value NewTarget() const;
  bool IsConstructCall() const;
  size_t Length() const;
  const Value operator[](size_t index) const;
  Value This() const;
  void* Data() const;
  void SetData(void* data);
  explicit operator napi_callback_info() const;

 private:
  const size_t _staticArgCount = 6;
  napi_env _env;
  napi_callback_info _info;
  napi_value _this;
  size_t _argc;
  napi_value* _argv;
  napi_value _staticArgs[6];
  napi_value* _dynamicArgs;
  void* _data;
};

class PropertyDescriptor {
 public:
  using GetterCallback = Napi::Value (*)(const Napi::CallbackInfo& info);
  using SetterCallback = void (*)(const Napi::CallbackInfo& info);

#ifndef NODE_ADDON_API_DISABLE_DEPRECATED
  template <typename Getter>
  static PropertyDescriptor Accessor(
      const char* utf8name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter>
  static PropertyDescriptor Accessor(
      const std::string& utf8name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter>
  static PropertyDescriptor Accessor(
      napi_value name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter>
  static PropertyDescriptor Accessor(
      Name name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      const char* utf8name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      const std::string& utf8name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      napi_value name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      Name name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      const char* utf8name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      const std::string& utf8name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      napi_value name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      Name name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
#endif  // !NODE_ADDON_API_DISABLE_DEPRECATED

  template <GetterCallback Getter>
  static PropertyDescriptor Accessor(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <GetterCallback Getter>
  static PropertyDescriptor Accessor(
      const std::string& utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <GetterCallback Getter>
  static PropertyDescriptor Accessor(
      Name name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <GetterCallback Getter, SetterCallback Setter>
  static PropertyDescriptor Accessor(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <GetterCallback Getter, SetterCallback Setter>
  static PropertyDescriptor Accessor(
      const std::string& utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <GetterCallback Getter, SetterCallback Setter>
  static PropertyDescriptor Accessor(
      Name name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);

  template <typename Getter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      const char* utf8name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      const std::string& utf8name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      Name name,
      Getter getter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      const char* utf8name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      const std::string& utf8name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Getter, typename Setter>
  static PropertyDescriptor Accessor(
      Napi::Env env,
      Napi::Object object,
      Name name,
      Getter getter,
      Setter setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      Napi::Env env,
      Napi::Object object,
      const char* utf8name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      Napi::Env env,
      Napi::Object object,
      const std::string& utf8name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <typename Callable>
  static PropertyDescriptor Function(
      Napi::Env env,
      Napi::Object object,
      Name name,
      Callable cb,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor Value(
      const char* utf8name,
      napi_value value,
      napi_property_attributes attributes = napi_default);
  static PropertyDescriptor Value(
      const std::string& utf8name,
      napi_value value,
      napi_property_attributes attributes = napi_default);
  static PropertyDescriptor Value(
      napi_value name,
      napi_value value,
      napi_property_attributes attributes = napi_default);
  static PropertyDescriptor Value(
      Name name,
      Napi::Value value,
      napi_property_attributes attributes = napi_default);

  PropertyDescriptor(napi_property_descriptor desc);

  operator napi_property_descriptor&();
  operator const napi_property_descriptor&() const;

 private:
  napi_property_descriptor _desc;
};

/// Property descriptor for use with `ObjectWrap::DefineClass()`.
///
/// This is different from the standalone `PropertyDescriptor` because it is
/// specific to each `ObjectWrap<T>` subclass. This prevents using descriptors
/// from a different class when defining a new class (preventing the callbacks
/// from having incorrect `this` pointers).
template <typename T>
class ClassPropertyDescriptor {
 public:
  ClassPropertyDescriptor(napi_property_descriptor desc) : _desc(desc) {}

  operator napi_property_descriptor&() { return _desc; }
  operator const napi_property_descriptor&() const { return _desc; }

 private:
  napi_property_descriptor _desc;
};

template <typename T, typename TCallback>
struct MethodCallbackData {
  TCallback callback;
  void* data;
};

template <typename T, typename TGetterCallback, typename TSetterCallback>
struct AccessorCallbackData {
  TGetterCallback getterCallback;
  TSetterCallback setterCallback;
  void* data;
};

template <typename T>
class InstanceWrap {
 public:
  using InstanceVoidMethodCallback = void (T::*)(const CallbackInfo& info);
  using InstanceMethodCallback = Napi::Value (T::*)(const CallbackInfo& info);
  using InstanceGetterCallback = Napi::Value (T::*)(const CallbackInfo& info);
  using InstanceSetterCallback = void (T::*)(const CallbackInfo& info,
                                             const Napi::Value& value);

  using PropertyDescriptor = ClassPropertyDescriptor<T>;

  static PropertyDescriptor InstanceMethod(
      const char* utf8name,
      InstanceVoidMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceMethod(
      const char* utf8name,
      InstanceMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceMethod(
      Symbol name,
      InstanceVoidMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceMethod(
      Symbol name,
      InstanceMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceVoidMethodCallback method>
  static PropertyDescriptor InstanceMethod(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceMethodCallback method>
  static PropertyDescriptor InstanceMethod(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceVoidMethodCallback method>
  static PropertyDescriptor InstanceMethod(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceMethodCallback method>
  static PropertyDescriptor InstanceMethod(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceAccessor(
      const char* utf8name,
      InstanceGetterCallback getter,
      InstanceSetterCallback setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceAccessor(
      Symbol name,
      InstanceGetterCallback getter,
      InstanceSetterCallback setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceGetterCallback getter,
            InstanceSetterCallback setter = nullptr>
  static PropertyDescriptor InstanceAccessor(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <InstanceGetterCallback getter,
            InstanceSetterCallback setter = nullptr>
  static PropertyDescriptor InstanceAccessor(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor InstanceValue(
      const char* utf8name,
      Napi::Value value,
      napi_property_attributes attributes = napi_default);
  static PropertyDescriptor InstanceValue(
      Symbol name,
      Napi::Value value,
      napi_property_attributes attributes = napi_default);

 protected:
  static void AttachPropData(napi_env env,
                             napi_value value,
                             const napi_property_descriptor* prop);

 private:
  using This = InstanceWrap<T>;

  using InstanceVoidMethodCallbackData =
      MethodCallbackData<T, InstanceVoidMethodCallback>;
  using InstanceMethodCallbackData =
      MethodCallbackData<T, InstanceMethodCallback>;
  using InstanceAccessorCallbackData =
      AccessorCallbackData<T, InstanceGetterCallback, InstanceSetterCallback>;

  static napi_value InstanceVoidMethodCallbackWrapper(napi_env env,
                                                      napi_callback_info info);
  static napi_value InstanceMethodCallbackWrapper(napi_env env,
                                                  napi_callback_info info);
  static napi_value InstanceGetterCallbackWrapper(napi_env env,
                                                  napi_callback_info info);
  static napi_value InstanceSetterCallbackWrapper(napi_env env,
                                                  napi_callback_info info);

  template <InstanceSetterCallback method>
  static napi_value WrappedMethod(napi_env env,
                                  napi_callback_info info) NAPI_NOEXCEPT;

  template <InstanceSetterCallback setter>
  struct SetterTag {};

  template <InstanceSetterCallback setter>
  static napi_callback WrapSetter(SetterTag<setter>) NAPI_NOEXCEPT {
    return &This::WrappedMethod<setter>;
  }
  static napi_callback WrapSetter(SetterTag<nullptr>) NAPI_NOEXCEPT {
    return nullptr;
  }
};

/// Base class to be extended by C++ classes exposed to JavaScript; each C++
/// class instance gets "wrapped" by a JavaScript object that is managed by this
/// class.
///
/// At initialization time, the `DefineClass()` method must be used to
/// hook up the accessor and method callbacks. It takes a list of
/// property descriptors, which can be constructed via the various
/// static methods on the base class.
///
/// #### Example:
///
///     class Example: public Napi::ObjectWrap<Example> {
///       public:
///         static void Initialize(Napi::Env& env, Napi::Object& target) {
///           Napi::Function constructor = DefineClass(env, "Example", {
///             InstanceAccessor<&Example::GetSomething,
///             &Example::SetSomething>("value"),
///             InstanceMethod<&Example::DoSomething>("doSomething"),
///           });
///           target.Set("Example", constructor);
///         }
///
///         Example(const Napi::CallbackInfo& info); // Constructor
///         Napi::Value GetSomething(const Napi::CallbackInfo& info);
///         void SetSomething(const Napi::CallbackInfo& info, const Napi::Value&
///         value); Napi::Value DoSomething(const Napi::CallbackInfo& info);
///     }
template <typename T>
class ObjectWrap : public InstanceWrap<T>, public Reference<Object> {
 public:
  ObjectWrap(const CallbackInfo& callbackInfo);
  virtual ~ObjectWrap();

  static T* Unwrap(Object wrapper);

  // Methods exposed to JavaScript must conform to one of these callback
  // signatures.
  using StaticVoidMethodCallback = void (*)(const CallbackInfo& info);
  using StaticMethodCallback = Napi::Value (*)(const CallbackInfo& info);
  using StaticGetterCallback = Napi::Value (*)(const CallbackInfo& info);
  using StaticSetterCallback = void (*)(const CallbackInfo& info,
                                        const Napi::Value& value);

  using PropertyDescriptor = ClassPropertyDescriptor<T>;

  static Function DefineClass(
      Napi::Env env,
      const char* utf8name,
      const std::initializer_list<PropertyDescriptor>& properties,
      void* data = nullptr);
  static Function DefineClass(Napi::Env env,
                              const char* utf8name,
                              const std::vector<PropertyDescriptor>& properties,
                              void* data = nullptr);
  static PropertyDescriptor StaticMethod(
      const char* utf8name,
      StaticVoidMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticMethod(
      const char* utf8name,
      StaticMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticMethod(
      Symbol name,
      StaticVoidMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticMethod(
      Symbol name,
      StaticMethodCallback method,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticVoidMethodCallback method>
  static PropertyDescriptor StaticMethod(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticVoidMethodCallback method>
  static PropertyDescriptor StaticMethod(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticMethodCallback method>
  static PropertyDescriptor StaticMethod(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticMethodCallback method>
  static PropertyDescriptor StaticMethod(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticAccessor(
      const char* utf8name,
      StaticGetterCallback getter,
      StaticSetterCallback setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticAccessor(
      Symbol name,
      StaticGetterCallback getter,
      StaticSetterCallback setter,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticGetterCallback getter, StaticSetterCallback setter = nullptr>
  static PropertyDescriptor StaticAccessor(
      const char* utf8name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  template <StaticGetterCallback getter, StaticSetterCallback setter = nullptr>
  static PropertyDescriptor StaticAccessor(
      Symbol name,
      napi_property_attributes attributes = napi_default,
      void* data = nullptr);
  static PropertyDescriptor StaticValue(
      const char* utf8name,
      Napi::Value value,
      napi_property_attributes attributes = napi_default);
  static PropertyDescriptor StaticValue(
      Symbol name,
      Napi::Value value,
      napi_property_attributes attributes = napi_default);
  static Napi::Value OnCalledAsFunction(const Napi::CallbackInfo& callbackInfo);
  virtual void Finalize(Napi::Env env);

 private:
  using This = ObjectWrap<T>;

  static napi_value ConstructorCallbackWrapper(napi_env env,
                                               napi_callback_info info);
  static napi_value StaticVoidMethodCallbackWrapper(napi_env env,
                                                    napi_callback_info info);
  static napi_value StaticMethodCallbackWrapper(napi_env env,
                                                napi_callback_info info);
  static napi_value StaticGetterCallbackWrapper(napi_env env,
                                                napi_callback_info info);
  static napi_value StaticSetterCallbackWrapper(napi_env env,
                                                napi_callback_info info);
  static void FinalizeCallback(napi_env env, void* data, void* hint);
  static Function DefineClass(Napi::Env env,
                              const char* utf8name,
                              const size_t props_count,
                              const napi_property_descriptor* props,
                              void* data = nullptr);

  using StaticVoidMethodCallbackData =
      MethodCallbackData<T, StaticVoidMethodCallback>;
  using StaticMethodCallbackData = MethodCallbackData<T, StaticMethodCallback>;

  using StaticAccessorCallbackData =
      AccessorCallbackData<T, StaticGetterCallback, StaticSetterCallback>;

  template <StaticSetterCallback method>
  static napi_value WrappedMethod(napi_env env,
                                  napi_callback_info info) NAPI_NOEXCEPT;

  template <StaticSetterCallback setter>
  struct StaticSetterTag {};

  template <StaticSetterCallback setter>
  static napi_callback WrapStaticSetter(StaticSetterTag<setter>) NAPI_NOEXCEPT {
    return &This::WrappedMethod<setter>;
  }
  static napi_callback WrapStaticSetter(StaticSetterTag<nullptr>)
      NAPI_NOEXCEPT {
    return nullptr;
  }

  bool _construction_failed = true;
};

class HandleScope {
 public:
  HandleScope(napi_env env, napi_handle_scope scope);
  explicit HandleScope(Napi::Env env);
  ~HandleScope();

  // Disallow copying to prevent double close of napi_handle_scope
  NAPI_DISALLOW_ASSIGN_COPY(HandleScope)

  operator napi_handle_scope() const;

  Napi::Env Env() const;

 private:
  napi_env _env;
  napi_handle_scope _scope;
};

class EscapableHandleScope {
 public:
  EscapableHandleScope(napi_env env, napi_escapable_handle_scope scope);
  explicit EscapableHandleScope(Napi::Env env);
  ~EscapableHandleScope();

  // Disallow copying to prevent double close of napi_escapable_handle_scope
  NAPI_DISALLOW_ASSIGN_COPY(EscapableHandleScope)

  operator napi_escapable_handle_scope() const;

  Napi::Env Env() const;
  Value Escape(napi_value escapee);

 private:
  napi_env _env;
  napi_escapable_handle_scope _scope;
};

#if (NAPI_VERSION > 2)
class CallbackScope {
 public:
  CallbackScope(napi_env env, napi_callback_scope scope);
  CallbackScope(napi_env env, napi_async_context context);
  virtual ~CallbackScope();

  // Disallow copying to prevent double close of napi_callback_scope
  NAPI_DISALLOW_ASSIGN_COPY(CallbackScope)

  operator napi_callback_scope() const;

  Napi::Env Env() const;

 private:
  napi_env _env;
  napi_callback_scope _scope;
};
#endif

class AsyncContext {
 public:
  explicit AsyncContext(napi_env env, const char* resource_name);
  explicit AsyncContext(napi_env env,
                        const char* resource_name,
                        const Object& resource);
  virtual ~AsyncContext();

  AsyncContext(AsyncContext&& other);
  AsyncContext& operator=(AsyncContext&& other);
  NAPI_DISALLOW_ASSIGN_COPY(AsyncContext)

  operator napi_async_context() const;

  Napi::Env Env() const;

 private:
  napi_env _env;
  napi_async_context _context;
};

#if NAPI_HAS_THREADS
class AsyncWorker {
 public:
  virtual ~AsyncWorker();

  NAPI_DISALLOW_ASSIGN_COPY(AsyncWorker)

  operator napi_async_work() const;

  Napi::Env Env() const;

  void Queue();
  void Cancel();
  void SuppressDestruct();

  ObjectReference& Receiver();
  FunctionReference& Callback();

  virtual void OnExecute(Napi::Env env);
  virtual void OnWorkComplete(Napi::Env env, napi_status status);

 protected:
  explicit AsyncWorker(const Function& callback);
  explicit AsyncWorker(const Function& callback, const char* resource_name);
  explicit AsyncWorker(const Function& callback,
                       const char* resource_name,
                       const Object& resource);
  explicit AsyncWorker(const Object& receiver, const Function& callback);
  explicit AsyncWorker(const Object& receiver,
                       const Function& callback,
                       const char* resource_name);
  explicit AsyncWorker(const Object& receiver,
                       const Function& callback,
                       const char* resource_name,
                       const Object& resource);

  explicit AsyncWorker(Napi::Env env);
  explicit AsyncWorker(Napi::Env env, const char* resource_name);
  explicit AsyncWorker(Napi::Env env,
                       const char* resource_name,
                       const Object& resource);

  virtual void Execute() = 0;
  virtual void OnOK();
  virtual void OnError(const Error& e);
  virtual void Destroy();
  virtual std::vector<napi_value> GetResult(Napi::Env env);

  void SetError(const std::string& error);

 private:
  static inline void OnAsyncWorkExecute(napi_env env, void* asyncworker);
  static inline void OnAsyncWorkComplete(napi_env env,
                                         napi_status status,
                                         void* asyncworker);

  napi_env _env;
  napi_async_work _work;
  ObjectReference _receiver;
  FunctionReference _callback;
  std::string _error;
  bool _suppress_destruct;
};
#endif  // NAPI_HAS_THREADS

#if (NAPI_VERSION > 3 && NAPI_HAS_THREADS)
class ThreadSafeFunction {
 public:
  // This API may only be called from the main thread.
  template <typename ResourceString>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename ContextType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename Finalizer>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                Finalizer finalizeCallback);

  // This API may only be called from the main thread.
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                Finalizer finalizeCallback,
                                FinalizerDataType* data);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename ContextType, typename Finalizer>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context,
                                Finalizer finalizeCallback);

  // This API may only be called from the main thread.
  template <typename ResourceString,
            typename ContextType,
            typename Finalizer,
            typename FinalizerDataType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context,
                                Finalizer finalizeCallback,
                                FinalizerDataType* data);

  // This API may only be called from the main thread.
  template <typename ResourceString>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename ContextType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename Finalizer>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                Finalizer finalizeCallback);

  // This API may only be called from the main thread.
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                Finalizer finalizeCallback,
                                FinalizerDataType* data);

  // This API may only be called from the main thread.
  template <typename ResourceString, typename ContextType, typename Finalizer>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context,
                                Finalizer finalizeCallback);

  // This API may only be called from the main thread.
  template <typename ResourceString,
            typename ContextType,
            typename Finalizer,
            typename FinalizerDataType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context,
                                Finalizer finalizeCallback,
                                FinalizerDataType* data);

  ThreadSafeFunction();
  ThreadSafeFunction(napi_threadsafe_function tsFunctionValue);

  operator napi_threadsafe_function() const;

  // This API may be called from any thread.
  napi_status BlockingCall() const;

  // This API may be called from any thread.
  template <typename Callback>
  napi_status BlockingCall(Callback callback) const;

  // This API may be called from any thread.
  template <typename DataType, typename Callback>
  napi_status BlockingCall(DataType* data, Callback callback) const;

  // This API may be called from any thread.
  napi_status NonBlockingCall() const;

  // This API may be called from any thread.
  template <typename Callback>
  napi_status NonBlockingCall(Callback callback) const;

  // This API may be called from any thread.
  template <typename DataType, typename Callback>
  napi_status NonBlockingCall(DataType* data, Callback callback) const;

  // This API may only be called from the main thread.
  void Ref(napi_env env) const;

  // This API may only be called from the main thread.
  void Unref(napi_env env) const;

  // This API may be called from any thread.
  napi_status Acquire() const;

  // This API may be called from any thread.
  napi_status Release() const;

  // This API may be called from any thread.
  napi_status Abort() const;

  struct ConvertibleContext {
    template <class T>
    operator T*() {
      return static_cast<T*>(context);
    }
    void* context;
  };

  // This API may be called from any thread.
  ConvertibleContext GetContext() const;

 private:
  using CallbackWrapper = std::function<void(Napi::Env, Napi::Function)>;

  template <typename ResourceString,
            typename ContextType,
            typename Finalizer,
            typename FinalizerDataType>
  static ThreadSafeFunction New(napi_env env,
                                const Function& callback,
                                const Object& resource,
                                ResourceString resourceName,
                                size_t maxQueueSize,
                                size_t initialThreadCount,
                                ContextType* context,
                                Finalizer finalizeCallback,
                                FinalizerDataType* data,
                                napi_finalize wrapper);

  napi_status CallInternal(CallbackWrapper* callbackWrapper,
                           napi_threadsafe_function_call_mode mode) const;

  static void CallJS(napi_env env,
                     napi_value jsCallback,
                     void* context,
                     void* data);

  napi_threadsafe_function _tsfn;
};

// A TypedThreadSafeFunction by default has no context (nullptr) and can
// accept any type (void) to its CallJs.
template <typename ContextType = std::nullptr_t,
          typename DataType = void,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*) =
              nullptr>
class TypedThreadSafeFunction {
 public:
  // This API may only be called from the main thread.
  // Helper function that returns nullptr if running Node-API 5+, otherwise a
  // non-empty, no-op Function. This provides the ability to specify at
  // compile-time a callback parameter to `New` that safely does no action
  // when targeting _any_ Node-API version.
#if NAPI_VERSION > 4
  static std::nullptr_t EmptyFunctionFactory(Napi::Env env);
#else
  static Napi::Function EmptyFunctionFactory(Napi::Env env);
#endif
  static Napi::Function FunctionOrEmpty(Napi::Env env,
                                        Napi::Function& callback);

#if NAPI_VERSION > 4
  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [missing] Resource [missing] Finalizer [missing]
  template <typename ResourceString>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [missing] Resource [passed] Finalizer [missing]
  template <typename ResourceString>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Object& resource,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [missing] Resource [missing] Finalizer [passed]
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType = void>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context,
      Finalizer finalizeCallback,
      FinalizerDataType* data = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [missing] Resource [passed] Finalizer [passed]
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType = void>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Object& resource,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context,
      Finalizer finalizeCallback,
      FinalizerDataType* data = nullptr);
#endif

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [passed] Resource [missing] Finalizer [missing]
  template <typename ResourceString>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Function& callback,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [passed] Resource [passed] Finalizer [missing]
  template <typename ResourceString>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Function& callback,
      const Object& resource,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [passed] Resource [missing] Finalizer [passed]
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType = void>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Function& callback,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context,
      Finalizer finalizeCallback,
      FinalizerDataType* data = nullptr);

  // This API may only be called from the main thread.
  // Creates a new threadsafe function with:
  //   Callback [passed] Resource [passed] Finalizer [passed]
  template <typename CallbackType,
            typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      CallbackType callback,
      const Object& resource,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context,
      Finalizer finalizeCallback,
      FinalizerDataType* data = nullptr);

  TypedThreadSafeFunction();
  TypedThreadSafeFunction(napi_threadsafe_function tsFunctionValue);

  operator napi_threadsafe_function() const;

  // This API may be called from any thread.
  napi_status BlockingCall(DataType* data = nullptr) const;

  // This API may be called from any thread.
  napi_status NonBlockingCall(DataType* data = nullptr) const;

  // This API may only be called from the main thread.
  void Ref(napi_env env) const;

  // This API may only be called from the main thread.
  void Unref(napi_env env) const;

  // This API may be called from any thread.
  napi_status Acquire() const;

  // This API may be called from any thread.
  napi_status Release() const;

  // This API may be called from any thread.
  napi_status Abort() const;

  // This API may be called from any thread.
  ContextType* GetContext() const;

 private:
  template <typename ResourceString,
            typename Finalizer,
            typename FinalizerDataType>
  static TypedThreadSafeFunction<ContextType, DataType, CallJs> New(
      napi_env env,
      const Function& callback,
      const Object& resource,
      ResourceString resourceName,
      size_t maxQueueSize,
      size_t initialThreadCount,
      ContextType* context,
      Finalizer finalizeCallback,
      FinalizerDataType* data,
      napi_finalize wrapper);

  static void CallJsInternal(napi_env env,
                             napi_value jsCallback,
                             void* context,
                             void* data);

 protected:
  napi_threadsafe_function _tsfn;
};
template <typename DataType>
class AsyncProgressWorkerBase : public AsyncWorker {
 public:
  virtual void OnWorkProgress(DataType* data) = 0;
  class ThreadSafeData {
   public:
    ThreadSafeData(AsyncProgressWorkerBase* asyncprogressworker, DataType* data)
        : _asyncprogressworker(asyncprogressworker), _data(data) {}

    AsyncProgressWorkerBase* asyncprogressworker() {
      return _asyncprogressworker;
    };
    DataType* data() { return _data; };

   private:
    AsyncProgressWorkerBase* _asyncprogressworker;
    DataType* _data;
  };
  void OnWorkComplete(Napi::Env env, napi_status status) override;

 protected:
  explicit AsyncProgressWorkerBase(const Object& receiver,
                                   const Function& callback,
                                   const char* resource_name,
                                   const Object& resource,
                                   size_t queue_size = 1);
  virtual ~AsyncProgressWorkerBase();

// Optional callback of Napi::ThreadSafeFunction only available after
// NAPI_VERSION 4. Refs: https://github.com/nodejs/node/pull/27791
#if NAPI_VERSION > 4
  explicit AsyncProgressWorkerBase(Napi::Env env,
                                   const char* resource_name,
                                   const Object& resource,
                                   size_t queue_size = 1);
#endif

  static inline void OnAsyncWorkProgress(Napi::Env env,
                                         Napi::Function jsCallback,
                                         void* data);

  napi_status NonBlockingCall(DataType* data);

 private:
  ThreadSafeFunction _tsfn;
  bool _work_completed = false;
  napi_status _complete_status;
  static inline void OnThreadSafeFunctionFinalize(
      Napi::Env env, void* data, AsyncProgressWorkerBase* context);
};

template <class T>
class AsyncProgressWorker : public AsyncProgressWorkerBase<void> {
 public:
  virtual ~AsyncProgressWorker();

  class ExecutionProgress {
    friend class AsyncProgressWorker;

   public:
    void Signal() const;
    void Send(const T* data, size_t count) const;

   private:
    explicit ExecutionProgress(AsyncProgressWorker* worker) : _worker(worker) {}
    AsyncProgressWorker* const _worker;
  };

  void OnWorkProgress(void*) override;

 protected:
  explicit AsyncProgressWorker(const Function& callback);
  explicit AsyncProgressWorker(const Function& callback,
                               const char* resource_name);
  explicit AsyncProgressWorker(const Function& callback,
                               const char* resource_name,
                               const Object& resource);
  explicit AsyncProgressWorker(const Object& receiver,
                               const Function& callback);
  explicit AsyncProgressWorker(const Object& receiver,
                               const Function& callback,
                               const char* resource_name);
  explicit AsyncProgressWorker(const Object& receiver,
                               const Function& callback,
                               const char* resource_name,
                               const Object& resource);

// Optional callback of Napi::ThreadSafeFunction only available after
// NAPI_VERSION 4. Refs: https://github.com/nodejs/node/pull/27791
#if NAPI_VERSION > 4
  explicit AsyncProgressWorker(Napi::Env env);
  explicit AsyncProgressWorker(Napi::Env env, const char* resource_name);
  explicit AsyncProgressWorker(Napi::Env env,
                               const char* resource_name,
                               const Object& resource);
#endif
  virtual void Execute(const ExecutionProgress& progress) = 0;
  virtual void OnProgress(const T* data, size_t count) = 0;

 private:
  void Execute() override;
  void Signal();
  void SendProgress_(const T* data, size_t count);

  std::mutex _mutex;
  T* _asyncdata;
  size_t _asyncsize;
  bool _signaled;
};

template <class T>
class AsyncProgressQueueWorker
    : public AsyncProgressWorkerBase<std::pair<T*, size_t>> {
 public:
  virtual ~AsyncProgressQueueWorker(){};

  class ExecutionProgress {
    friend class AsyncProgressQueueWorker;

   public:
    void Signal() const;
    void Send(const T* data, size_t count) const;

   private:
    explicit ExecutionProgress(AsyncProgressQueueWorker* worker)
        : _worker(worker) {}
    AsyncProgressQueueWorker* const _worker;
  };

  void OnWorkComplete(Napi::Env env, napi_status status) override;
  void OnWorkProgress(std::pair<T*, size_t>*) override;

 protected:
  explicit AsyncProgressQueueWorker(const Function& callback);
  explicit AsyncProgressQueueWorker(const Function& callback,
                                    const char* resource_name);
  explicit AsyncProgressQueueWorker(const Function& callback,
                                    const char* resource_name,
                                    const Object& resource);
  explicit AsyncProgressQueueWorker(const Object& receiver,
                                    const Function& callback);
  explicit AsyncProgressQueueWorker(const Object& receiver,
                                    const Function& callback,
                                    const char* resource_name);
  explicit AsyncProgressQueueWorker(const Object& receiver,
                                    const Function& callback,
                                    const char* resource_name,
                                    const Object& resource);

// Optional callback of Napi::ThreadSafeFunction only available after
// NAPI_VERSION 4. Refs: https://github.com/nodejs/node/pull/27791
#if NAPI_VERSION > 4
  explicit AsyncProgressQueueWorker(Napi::Env env);
  explicit AsyncProgressQueueWorker(Napi::Env env, const char* resource_name);
  explicit AsyncProgressQueueWorker(Napi::Env env,
                                    const char* resource_name,
                                    const Object& resource);
#endif
  virtual void Execute(const ExecutionProgress& progress) = 0;
  virtual void OnProgress(const T* data, size_t count) = 0;

 private:
  void Execute() override;
  void Signal() const;
  void SendProgress_(const T* data, size_t count);
};
#endif  // NAPI_VERSION > 3 && NAPI_HAS_THREADS

// Memory management.
class MemoryManagement {
 public:
  static int64_t AdjustExternalMemory(Env env, int64_t change_in_bytes);
};

// Version management
class VersionManagement {
 public:
  static uint32_t GetNapiVersion(Env env);
  static const napi_node_version* GetNodeVersion(Env env);
};

#if NAPI_VERSION > 5
template <typename T>
class Addon : public InstanceWrap<T> {
 public:
  static inline Object Init(Env env, Object exports);
  static T* Unwrap(Object wrapper);

 protected:
  using AddonProp = ClassPropertyDescriptor<T>;
  void DefineAddon(Object exports,
                   const std::initializer_list<AddonProp>& props);
  Napi::Object DefineProperties(Object object,
                                const std::initializer_list<AddonProp>& props);

 private:
  Object entry_point_;
};
#endif  // NAPI_VERSION > 5

#ifdef NAPI_CPP_CUSTOM_NAMESPACE
}  // namespace NAPI_CPP_CUSTOM_NAMESPACE
#endif

}  // namespace Napi

// Inline implementations of all the above class methods are included here.
#include "napi-inl.h"

#endif  // SRC_NAPI_H_
