#include <assert.h>
#include <bare.h>
#include <js.h>
#include <stddef.h>
#include <stdlib.h>
#include <string.h>
#include <url.h>
#include <utf.h>
#include <utf/string.h>

static js_type_tag_t bare_url__tag = {0x6f1fd92f476698b0, 0x93b59c349143ee50};

static js_value_t *
bare_url_parse (js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bool should_throw;
  err = js_get_value_bool(env, argv[3], &should_throw);
  assert(err == 0);

  bool has_base;
  err = js_is_string(env, argv[1], &has_base);
  assert(err == 0);

  url_t base;
  url_init(&base);

  if (has_base) {
    size_t len;
    err = js_get_value_string_utf8(env, argv[1], NULL, 0, &len);
    assert(err == 0);

    utf8_t *input = malloc(len);
    err = js_get_value_string_utf8(env, argv[1], input, len, NULL);
    assert(err == 0);

    err = url_parse(&base, input, len, NULL);

    free(input);

    if (err < 0) {
      url_destroy(&base);

      if (should_throw) js_throw_error(env, NULL, "Invalid base URL");

      return NULL;
    }
  }

  size_t len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &len);
  assert(err == 0);

  utf8_t *input = malloc(len);
  err = js_get_value_string_utf8(env, argv[0], input, len, NULL);
  assert(err == 0);

  js_value_t *handle;

  url_t url;
  url_init(&url);

  err = url_parse(&url, input, len, has_base ? &base : NULL);

  free(input);

  if (err < 0) {
    url_destroy(&base);
    url_destroy(&url);

    if (should_throw) js_throw_error(env, NULL, "Invalid URL");

    return NULL;
  }

  js_value_t *href;
  err = js_create_string_utf8(env, url.href.data, url.href.len, &href);
  assert(err == 0);

  uint32_t *components;
  err = js_get_typedarray_info(env, argv[2], NULL, (void **) &components, NULL, NULL, NULL);
  assert(err == 0);

  memcpy(components, &url.components, sizeof(url.components));

  url_destroy(&base);
  url_destroy(&url);

  return href;
}

static js_value_t *
bare_url_can_parse (js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bool has_base;
  err = js_is_string(env, argv[1], &has_base);
  assert(err == 0);

  url_t base;
  url_init(&base);

  if (has_base) {
    size_t len;
    err = js_get_value_string_utf8(env, argv[1], NULL, 0, &len);
    assert(err == 0);

    utf8_t *input = malloc(len);
    err = js_get_value_string_utf8(env, argv[1], input, len, NULL);
    assert(err == 0);

    err = url_parse(&base, input, len, NULL);

    free(input);

    if (err < 0) {
      url_destroy(&base);

      js_value_t *result;
      err = js_get_boolean(env, false, &result);
      assert(err == 0);

      return result;
    }
  }

  size_t len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &len);
  assert(err == 0);

  utf8_t *input = malloc(len);
  err = js_get_value_string_utf8(env, argv[0], input, len, NULL);
  assert(err == 0);

  url_t url;
  url_init(&url);

  err = url_parse(&url, input, len, has_base ? &base : NULL);

  free(input);

  url_destroy(&base);
  url_destroy(&url);

  js_value_t *result;
  err = js_get_boolean(env, err == 0, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_url_exports (js_env_t *env, js_value_t *exports) {
  int err;

#define V(name, fn) \
  { \
    js_value_t *val; \
    err = js_create_function(env, name, -1, fn, NULL, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("parse", bare_url_parse)
  V("canParse", bare_url_can_parse)
#undef V

  return exports;
}

BARE_MODULE(bare_url, bare_url_exports)
