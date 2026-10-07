#include <assert.h>
#include <bare.h>
#include <js.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <utf.h>
#include <uv.h>

#ifndef _MSC_VER
#include <unistd.h>
#endif

typedef struct {
  uv_fs_t handle;

  js_env_t *env;
  js_ref_t *ctx;
  js_ref_t *on_result;

  bool exiting;
  bool inflight;

  js_deferred_teardown_t *teardown;
} bare_fs_req_t;

typedef utf8_t bare_fs_path_t[4096 + 1 /* NULL */];

typedef struct {
  uv_dir_t *handle;
} bare_fs_dir_t;

typedef struct {
  uv_fs_event_t handle;

  js_env_t *env;
  js_ref_t *ctx;
  js_ref_t *on_event;
  js_ref_t *on_close;

  bool exiting;
  bool closing;

  js_deferred_teardown_t *teardown;
} bare_fs_watcher_t;

typedef uv_dirent_t bare_fs_dirent_t;

enum {
  bare_fs_async = true,
  bare_fs_sync = false
};

static inline void
bare_fs__request_destroy(bare_fs_req_t *req) {
  int err;

  js_env_t *env = req->env;

  js_deferred_teardown_t *teardown = req->teardown;

  uv_fs_req_cleanup(&req->handle);

  err = js_delete_reference(env, req->on_result);
  assert(err == 0);

  err = js_delete_reference(env, req->ctx);
  assert(err == 0);

  err = js_finish_deferred_teardown_callback(teardown);
  assert(err == 0);
}

static void
bare_fs__on_request_teardown(js_deferred_teardown_t *handle, void *data) {
  int err;

  bare_fs_req_t *req = (bare_fs_req_t *) data;

  req->exiting = true;

  if (req->inflight) {
    err = uv_cancel((uv_req_t *) &req->handle);
    if (err < 0) return;
  }

  bare_fs__request_destroy(req);
}

static inline void
bare_fs__on_request_result(uv_fs_t *handle) {
  int err;

  bare_fs_req_t *req = (bare_fs_req_t *) handle;

  req->inflight = false;

  if (req->exiting) return bare_fs__request_destroy(req);

  js_env_t *env = req->env;

  js_handle_scope_t *scope;
  err = js_open_handle_scope(env, &scope);
  assert(err == 0);

  js_value_t *ctx;
  err = js_get_reference_value(env, req->ctx, &ctx);
  assert(err == 0);

  js_value_t *on_result;
  err = js_get_reference_value(env, req->on_result, &on_result);
  assert(err == 0);

  int status = handle->result;

  js_value_t *args[2];

  if (status < 0) {
    js_value_t *code;
    err = js_create_string_utf8(env, (utf8_t *) uv_err_name(status), -1, &code);
    assert(err == 0);

    js_value_t *message;
    err = js_create_string_utf8(env, (utf8_t *) uv_strerror(status), -1, &message);
    assert(err == 0);

    err = js_create_error(env, code, message, &args[0]);
    assert(err == 0);
  } else {
    err = js_get_null(env, &args[0]);
    assert(err == 0);
  }

  err = js_create_int32(env, status, &args[1]);
  assert(err == 0);

  err = js_call_function(env, ctx, on_result, 2, args, NULL);
  (void) err;

  err = js_close_handle_scope(env, scope);
  assert(err == 0);
}

static inline int
bare_fs__request_pending(js_env_t *env, bare_fs_req_t *req, bool async, int *result) {
  int err;

  if (async) {
    req->inflight = true;

    return 0;
  }

  int status = req->handle.result;

  if (status < 0) {
    err = js_throw_error(env, uv_err_name(status), uv_strerror(status));
    assert(err == 0);

    return -1;
  }

  if (result) *result = status;

  return 1;
}

static js_value_t *
bare_fs_request_init(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  js_value_t *handle;

  bare_fs_req_t *req;
  err = js_create_arraybuffer(env, sizeof(bare_fs_req_t), (void **) &req, &handle);
  assert(err == 0);

  req->env = env;
  req->exiting = false;
  req->inflight = false;

  err = js_create_reference(env, argv[0], 1, &req->ctx);
  assert(err == 0);

  err = js_create_reference(env, argv[1], 1, &req->on_result);
  assert(err == 0);

  err = js_add_deferred_teardown_callback(env, bare_fs__on_request_teardown, (void *) req, &req->teardown);
  assert(err == 0);

  return handle;
}

static js_value_t *
bare_fs_request_destroy(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs__request_destroy(req);

  return NULL;
}

static js_value_t *
bare_fs_request_reset(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uv_fs_req_cleanup(&req->handle);

  return NULL;
}

static js_value_t *
bare_fs_request_result_stat(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  js_value_t *result;
  err = js_create_array_with_length(env, 14, &result);
  assert(err == 0);

  uint32_t i = 0;

#define V(property) \
  { \
    js_value_t *value; \
    err = js_create_int64(env, req->handle.statbuf.st_##property, &value); \
    assert(err == 0); \
\
    err = js_set_element(env, result, i++, value); \
    assert(err == 0); \
  }
  V(dev)
  V(mode)
  V(nlink)
  V(uid)
  V(gid)
  V(rdev)
  V(blksize)
  V(ino)
  V(size)
  V(blocks)
#undef V

#define V(property) \
  { \
    uv_timespec_t time = req->handle.statbuf.st_##property; \
\
    js_value_t *value; \
    err = js_create_int64(env, time.tv_sec * 1000 + time.tv_nsec / 1000000, &value); \
    assert(err == 0); \
\
    err = js_set_element(env, result, i++, value); \
    assert(err == 0); \
  }
  V(atim)
  V(mtim)
  V(ctim)
  V(birthtim)
#undef V

  return result;
}

static js_value_t *
bare_fs_request_result_statfs(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uv_statfs_t *statfs = req->handle.ptr;

  js_value_t *result;
  err = js_create_array_with_length(env, 7, &result);
  assert(err == 0);

  uint32_t i = 0;

#define V(property) \
  { \
    js_value_t *value; \
    err = js_create_int64(env, statfs->f_##property, &value); \
    assert(err == 0); \
\
    err = js_set_element(env, result, i++, value); \
    assert(err == 0); \
  }
  V(type)
  V(bsize)
  V(blocks)
  V(bfree)
  V(bavail)
  V(files)
  V(ffree)
#undef V

  return result;
}

static js_value_t *
bare_fs_request_result_string(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  size_t len = strlen(req->handle.ptr);

  js_value_t *result;

  void *data;
  err = js_create_arraybuffer(env, len, (void *) &data, &result);
  assert(err == 0);

  strncpy(data, req->handle.ptr, len);

  return result;
}

static js_value_t *
bare_fs_request_result_path(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  const char *path = req->handle.path;

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) path, strlen(path), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_request_result_dir(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  js_value_t *result;

  bare_fs_dir_t *dir;
  err = js_create_arraybuffer(env, sizeof(bare_fs_dir_t), (void **) &dir, &result);
  assert(err == 0);

  dir->handle = req->handle.ptr;

  return result;
}

static js_value_t *
bare_fs_request_result_dirents(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  size_t len = req->handle.result;

  js_value_t *result;
  err = js_create_array_with_length(env, len, &result);
  assert(err == 0);

  uv_dir_t *dir = req->handle.ptr;

  for (uint32_t i = 0; i < len; i++) {
    uv_dirent_t *dirent = &dir->dirents[i];

    js_value_t *entry;
    err = js_create_object(env, &entry);
    assert(err == 0);

    err = js_set_element(env, result, i, entry);
    assert(err == 0);

    size_t name_len = strlen(dirent->name);

    js_value_t *name;

    void *data;
    err = js_create_arraybuffer(env, name_len, &data, &name);
    assert(err == 0);

    memcpy(data, dirent->name, name_len);

    err = js_set_named_property(env, entry, "name", name);
    assert(err == 0);

    js_value_t *type;
    err = js_create_uint32(env, dirent->type, &type);
    assert(err == 0);

    err = js_set_named_property(env, entry, "type", type);
    assert(err == 0);
  }

  return result;
}

static void
bare_fs__on_open(uv_fs_t *handle) {
  int err;

  bare_fs_req_t *req = (bare_fs_req_t *) handle;

  int status = handle->result;

  if (req->exiting && status >= 0) {
    int fd = status;

    uv_fs_req_cleanup(handle);

    err = uv_fs_close(handle->loop, handle, fd, NULL);
    assert(err == 0);
  }

  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__open(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t flags;
  err = js_get_value_int32(env, argv[2], &flags);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[3], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_open(loop, &req->handle, (char *) path, flags, mode, async ? bare_fs__on_open : NULL);
  (void) err;

  int status;
  err = bare_fs__request_pending(env, req, async, &status);
  if (err != 1) return NULL;

  js_value_t *result;
  err = js_create_int32(env, status, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_open(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__open(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_open_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__open(env, info, bare_fs_sync);
}

static void
bare_fs__on_close(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__close(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_close(loop, &req->handle, fd, async ? bare_fs__on_close : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_close(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__close(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_close_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__close(env, info, bare_fs_sync);
}

static void
bare_fs__on_access(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__access(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[2], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_access(loop, &req->handle, (char *) path, mode, async ? bare_fs__on_access : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_access(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__access(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_access_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__access(env, info, bare_fs_sync);
}

static void
bare_fs__on_read(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__read(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 6;
  js_value_t *argv[6];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 6);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uint8_t *data;
  size_t data_len;
  err = js_get_typedarray_info(env, argv[2], NULL, (void **) &data, &data_len, NULL, NULL);
  assert(err == 0);

  uint32_t offset;
  err = js_get_value_uint32(env, argv[3], &offset);
  assert(err == 0);

  uint32_t len;
  err = js_get_value_uint32(env, argv[4], &len);
  assert(err == 0);

  if (offset >= data_len) len = 0;
  else if (offset + len >= data_len) len = data_len - offset;

  int64_t pos;
  err = js_get_value_int64(env, argv[5], &pos);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  uv_buf_t buf = uv_buf_init((void *) (data + offset), len);

  err = uv_fs_read(loop, &req->handle, fd, &buf, 1, pos, async ? bare_fs__on_read : NULL);
  (void) err;

  int status;
  err = bare_fs__request_pending(env, req, async, &status);
  if (err != 1) return NULL;

  js_value_t *result;
  err = js_create_int32(env, status, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_read(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__read(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_read_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__read(env, info, bare_fs_sync);
}

static void
bare_fs__on_readv(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__readv(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  int64_t pos;
  err = js_get_value_int64(env, argv[3], &pos);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  js_value_t *arr = argv[2];

  uint32_t bufs_len;
  err = js_get_array_length(env, arr, &bufs_len);
  assert(err == 0);

  uv_buf_t *bufs = malloc(sizeof(uv_buf_t) * bufs_len);

  js_value_t **elements = malloc(bufs_len * sizeof(js_value_t *));
  err = js_get_array_elements(env, arr, elements, bufs_len, 0, NULL);
  assert(err == 0);

  for (uint32_t i = 0; i < bufs_len; i++) {
    js_value_t *item = elements[i];

    uv_buf_t *buf = &bufs[i];
    err = js_get_typedarray_info(env, item, NULL, (void **) &buf->base, (size_t *) &buf->len, NULL, NULL);
    assert(err == 0);
  }

  err = uv_fs_read(loop, &req->handle, fd, bufs, bufs_len, pos, async ? bare_fs__on_readv : NULL);
  (void) err;

  free(elements);
  free(bufs);

  int status;
  err = bare_fs__request_pending(env, req, async, &status);
  if (err != 1) return NULL;

  js_value_t *result;
  err = js_create_int32(env, status, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_readv(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readv(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_readv_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readv(env, info, bare_fs_sync);
}

static void
bare_fs__on_write(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__write(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 6;
  js_value_t *argv[6];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 6);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uint8_t *data;
  size_t data_len;
  err = js_get_typedarray_info(env, argv[2], NULL, (void **) &data, &data_len, NULL, NULL);
  assert(err == 0);

  uint32_t offset;
  err = js_get_value_uint32(env, argv[3], &offset);
  assert(err == 0);

  uint32_t len;
  err = js_get_value_uint32(env, argv[4], &len);
  assert(err == 0);

  if (offset >= data_len) len = 0;
  else if (offset + len >= data_len) len = data_len - offset;

  int64_t pos;
  err = js_get_value_int64(env, argv[5], &pos);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  uv_buf_t buf = uv_buf_init((void *) (data + offset), len);

  err = uv_fs_write(loop, &req->handle, fd, &buf, 1, pos, async ? bare_fs__on_write : NULL);
  (void) err;

  int status;
  err = bare_fs__request_pending(env, req, async, &status);
  if (err != 1) return NULL;

  js_value_t *result;
  err = js_create_int32(env, status, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_write(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__write(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_write_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__write(env, info, bare_fs_sync);
}

static void
bare_fs__on_writev(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__writev(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  int64_t pos;
  err = js_get_value_int64(env, argv[3], &pos);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  js_value_t *arr = argv[2];

  uint32_t bufs_len;
  err = js_get_array_length(env, arr, &bufs_len);
  assert(err == 0);

  uv_buf_t *bufs = malloc(sizeof(uv_buf_t) * bufs_len);

  js_value_t **elements = malloc(bufs_len * sizeof(js_value_t *));

  err = js_get_array_elements(env, arr, elements, bufs_len, 0, NULL);
  assert(err == 0);

  for (uint32_t i = 0; i < bufs_len; i++) {
    js_value_t *item = elements[i];

    uv_buf_t *buf = &bufs[i];
    err = js_get_typedarray_info(env, item, NULL, (void **) &buf->base, (size_t *) &buf->len, NULL, NULL);
    assert(err == 0);
  }

  err = uv_fs_write(loop, &req->handle, fd, bufs, bufs_len, pos, async ? bare_fs__on_writev : NULL);
  (void) err;

  free(elements);
  free(bufs);

  int status;
  err = bare_fs__request_pending(env, req, async, &status);
  if (err != 1) return NULL;

  js_value_t *result;
  err = js_create_int32(env, status, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_writev(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__writev(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_writev_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__writev(env, info, bare_fs_sync);
}

static void
bare_fs__on_ftruncate(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__ftruncate(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  int64_t len;
  err = js_get_value_int64(env, argv[2], &len);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_ftruncate(loop, &req->handle, fd, len, async ? bare_fs__on_ftruncate : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_ftruncate(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__ftruncate(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_ftruncate_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__ftruncate(env, info, bare_fs_sync);
}

static void
bare_fs__on_chmod(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__chmod(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[2], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_chmod(loop, &req->handle, (char *) path, mode, async ? bare_fs__on_chmod : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_chmod(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__chmod(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_chmod_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__chmod(env, info, bare_fs_sync);
}

static void
bare_fs__on_fchmod(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__fchmod(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[2], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_fchmod(loop, &req->handle, fd, mode, async ? bare_fs__on_fchmod : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_fchmod(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fchmod(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_fchmod_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fchmod(env, info, bare_fs_sync);
}

static void
bare_fs__on_chown(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__chown(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uint32_t uid;
  err = js_get_value_uint32(env, argv[2], &uid);
  assert(err == 0);

  uint32_t gid;
  err = js_get_value_uint32(env, argv[3], &gid);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_chown(loop, &req->handle, (char *) path, uid, gid, async ? bare_fs__on_chown : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_chown(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__chown(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_chown_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__chown(env, info, bare_fs_sync);
}

static void
bare_fs__on_lchown(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__lchown(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uint32_t uid;
  err = js_get_value_uint32(env, argv[2], &uid);
  assert(err == 0);

  uint32_t gid;
  err = js_get_value_uint32(env, argv[3], &gid);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_lchown(loop, &req->handle, (char *) path, uid, gid, async ? bare_fs__on_lchown : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_lchown(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lchown(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_lchown_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lchown(env, info, bare_fs_sync);
}

static void
bare_fs__on_fchown(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__fchown(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uint32_t uid;
  err = js_get_value_uint32(env, argv[2], &uid);
  assert(err == 0);

  uint32_t gid;
  err = js_get_value_uint32(env, argv[3], &gid);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_fchown(loop, &req->handle, fd, uid, gid, async ? bare_fs__on_fchown : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_fchown(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fchown(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_fchown_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fchown(env, info, bare_fs_sync);
}

static void
bare_fs__on_utimes(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__utimes(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  double atime;
  err = js_get_value_double(env, argv[2], &atime);
  assert(err == 0);

  double mtime;
  err = js_get_value_double(env, argv[3], &mtime);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_utime(loop, &req->handle, (char *) path, atime, mtime, async ? bare_fs__on_utimes : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_utimes(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__utimes(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_utimes_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__utimes(env, info, bare_fs_sync);
}

static void
bare_fs__on_lutimes(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__lutimes(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  double atime;
  err = js_get_value_double(env, argv[2], &atime);
  assert(err == 0);

  double mtime;
  err = js_get_value_double(env, argv[3], &mtime);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_lutime(loop, &req->handle, (char *) path, atime, mtime, async ? bare_fs__on_lutimes : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_lutimes(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lutimes(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_lutimes_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lutimes(env, info, bare_fs_sync);
}

static void
bare_fs__on_futimes(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__futimes(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  double atime;
  err = js_get_value_double(env, argv[2], &atime);
  assert(err == 0);

  double mtime;
  err = js_get_value_double(env, argv[3], &mtime);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_futime(loop, &req->handle, fd, atime, mtime, async ? bare_fs__on_futimes : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_futimes(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__futimes(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_futimes_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__futimes(env, info, bare_fs_sync);
}

static void
bare_fs__on_rename(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__rename(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t src;
  err = js_get_value_string_utf8(env, argv[1], src, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  bare_fs_path_t dst;
  err = js_get_value_string_utf8(env, argv[2], dst, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_rename(loop, &req->handle, (char *) src, (char *) dst, async ? bare_fs__on_rename : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_rename(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__rename(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_rename_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__rename(env, info, bare_fs_sync);
}

static void
bare_fs__on_copyfile(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__copyfile(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t src;
  err = js_get_value_string_utf8(env, argv[1], src, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  bare_fs_path_t dst;
  err = js_get_value_string_utf8(env, argv[2], dst, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[3], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_copyfile(loop, &req->handle, (char *) src, (char *) dst, mode, async ? bare_fs__on_copyfile : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_copyfile(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__copyfile(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_copyfile_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__copyfile(env, info, bare_fs_sync);
}

static void
bare_fs__on_mkdir(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__mkdir(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t mode;
  err = js_get_value_int32(env, argv[2], &mode);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_mkdir(loop, &req->handle, (char *) path, mode, async ? bare_fs__on_mkdir : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_mkdir(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__mkdir(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_mkdir_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__mkdir(env, info, bare_fs_sync);
}

static void
bare_fs__on_mkdtemp(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__mkdtemp(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t prefix;
  err = js_get_value_string_utf8(env, argv[1], prefix, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_mkdtemp(loop, &req->handle, (char *) prefix, async ? bare_fs__on_mkdtemp : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_mkdtemp(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__mkdtemp(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_mkdtemp_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__mkdtemp(env, info, bare_fs_sync);
}

static void
bare_fs__on_link(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__link(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t src;
  err = js_get_value_string_utf8(env, argv[1], src, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  bare_fs_path_t dst;
  err = js_get_value_string_utf8(env, argv[2], dst, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_link(loop, &req->handle, (char *) src, (char *) dst, async ? bare_fs__on_link : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_link(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__link(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_link_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__link(env, info, bare_fs_sync);
}

static void
bare_fs__on_rmdir(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__rmdir(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_rmdir(loop, &req->handle, (char *) path, async ? bare_fs__on_rmdir : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_rmdir(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__rmdir(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_rmdir_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__rmdir(env, info, bare_fs_sync);
}

static void
bare_fs__on_stat(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__stat(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_stat(loop, &req->handle, (char *) path, async ? bare_fs__on_stat : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_stat(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__stat(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_stat_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__stat(env, info, bare_fs_sync);
}

static void
bare_fs__on_lstat(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__lstat(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_lstat(loop, &req->handle, (char *) path, async ? bare_fs__on_lstat : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_lstat(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lstat(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_lstat_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__lstat(env, info, bare_fs_sync);
}

static void
bare_fs__on_fstat(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__fstat(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_fstat(loop, &req->handle, fd, async ? bare_fs__on_fstat : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_fstat(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fstat(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_fstat_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fstat(env, info, bare_fs_sync);
}

static void
bare_fs__on_statfs(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__statfs(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_statfs(loop, &req->handle, (char *) path, async ? bare_fs__on_statfs : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_statfs(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__statfs(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_statfs_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__statfs(env, info, bare_fs_sync);
}

static void
bare_fs__on_unlink(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__unlink(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_unlink(loop, &req->handle, (char *) path, async ? bare_fs__on_unlink : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_unlink(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__unlink(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_unlink_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__unlink(env, info, bare_fs_sync);
}

static void
bare_fs__on_realpath(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__realpath(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_realpath(loop, &req->handle, (char *) path, async ? bare_fs__on_realpath : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_realpath(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__realpath(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_realpath_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__realpath(env, info, bare_fs_sync);
}

static void
bare_fs__on_readlink(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__readlink(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_readlink(loop, &req->handle, (char *) path, async ? bare_fs__on_readlink : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_readlink(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readlink(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_readlink_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readlink(env, info, bare_fs_sync);
}

static void
bare_fs__on_symlink(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__symlink(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 4;
  js_value_t *argv[4];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 4);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t target;
  err = js_get_value_string_utf8(env, argv[1], target, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[2], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  int32_t flags;
  err = js_get_value_int32(env, argv[3], &flags);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_symlink(loop, &req->handle, (char *) target, (char *) path, flags, async ? bare_fs__on_symlink : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_symlink(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__symlink(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_symlink_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__symlink(env, info, bare_fs_sync);
}

static void
bare_fs__on_opendir(uv_fs_t *handle) {
  int err;

  bare_fs_req_t *req = (bare_fs_req_t *) handle;

  int status = handle->result;

  if (req->exiting && status >= 0) {
    uv_dir_t *dir = handle->ptr;

    uv_fs_req_cleanup(handle);

    err = uv_fs_closedir(handle->loop, handle, dir, NULL);
    assert(err == 0);
  }

  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__opendir(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[1], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_opendir(loop, &req->handle, (char *) path, async ? bare_fs__on_opendir : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_opendir(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__opendir(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_opendir_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__opendir(env, info, bare_fs_sync);
}

static void
bare_fs__on_readdir(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__readdir(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 3;
  js_value_t *argv[3];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 3);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_dir_t *dir;
  err = js_get_arraybuffer_info(env, argv[1], (void **) &dir, NULL);
  assert(err == 0);

  uint32_t capacity;
  err = js_get_value_uint32(env, argv[2], &capacity);
  assert(err == 0);

  js_value_t *result;

  bare_fs_dirent_t *dirents;
  err = js_create_arraybuffer(env, capacity * sizeof(bare_fs_dirent_t), (void **) &dirents, &result);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  dir->handle->dirents = dirents;
  dir->handle->nentries = capacity;

  err = uv_fs_readdir(loop, &req->handle, dir->handle, async ? bare_fs__on_readdir : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return result;
}

static js_value_t *
bare_fs_readdir(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readdir(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_readdir_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__readdir(env, info, bare_fs_sync);
}

static void
bare_fs__on_closedir(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__closedir(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  bare_fs_dir_t *dir;
  err = js_get_arraybuffer_info(env, argv[1], (void **) &dir, NULL);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_closedir(loop, &req->handle, dir->handle, async ? bare_fs__on_closedir : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_closedir(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__closedir(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_closedir_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__closedir(env, info, bare_fs_sync);
}

static void
bare_fs__on_fsync(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__fsync(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_fsync(loop, &req->handle, fd, async ? bare_fs__on_fsync : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_fsync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fsync(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_fsync_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fsync(env, info, bare_fs_sync);
}

static void
bare_fs__on_fdatasync(uv_fs_t *handle) {
  bare_fs__on_request_result(handle);
}

static inline js_value_t *
bare_fs__fdatasync(js_env_t *env, js_callback_info_t *info, bool async) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  bare_fs_req_t *req;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &req, NULL);
  assert(err == 0);

  uint32_t fd;
  err = js_get_value_uint32(env, argv[1], &fd);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_fdatasync(loop, &req->handle, fd, async ? bare_fs__on_fdatasync : NULL);
  (void) err;

  err = bare_fs__request_pending(env, req, async, NULL);
  (void) err;

  return NULL;
}

static js_value_t *
bare_fs_fdatasync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fdatasync(env, info, bare_fs_async);
}

static js_value_t *
bare_fs_fdatasync_sync(js_env_t *env, js_callback_info_t *info) {
  return bare_fs__fdatasync(env, info, bare_fs_sync);
}

static void
bare_fs__on_watcher_event(uv_fs_event_t *handle, const char *filename, int events, int status) {
  int err;

  bare_fs_watcher_t *watcher = (bare_fs_watcher_t *) handle;

  if (watcher->exiting) return;

  js_env_t *env = watcher->env;

  js_handle_scope_t *scope;
  err = js_open_handle_scope(env, &scope);
  assert(err == 0);

  js_value_t *ctx;
  err = js_get_reference_value(env, watcher->ctx, &ctx);
  assert(err == 0);

  js_value_t *on_event;
  err = js_get_reference_value(env, watcher->on_event, &on_event);
  assert(err == 0);

  js_value_t *args[3];

  if (status < 0) {
    js_value_t *code;
    err = js_create_string_utf8(env, (utf8_t *) uv_err_name(status), -1, &code);
    assert(err == 0);

    js_value_t *message;
    err = js_create_string_utf8(env, (utf8_t *) uv_strerror(status), -1, &message);
    assert(err == 0);

    err = js_create_error(env, code, message, &args[0]);
    assert(err == 0);

    err = js_create_int32(env, 0, &args[1]);
    assert(err == 0);

    err = js_get_null(env, &args[2]);
    assert(err == 0);
  } else {
    err = js_get_null(env, &args[0]);
    assert(err == 0);

    err = js_create_int32(env, events, &args[1]);
    assert(err == 0);

    size_t len = strlen(filename);

    void *data;
    err = js_create_arraybuffer(env, len, &data, &args[2]);
    assert(err == 0);

    memcpy(data, (void *) filename, len);
  }

  err = js_call_function(env, ctx, on_event, 3, args, NULL);
  (void) err;

  err = js_close_handle_scope(env, scope);
  assert(err == 0);
}

static void
bare_fs__on_watcher_close(uv_handle_t *handle) {
  int err;

  bare_fs_watcher_t *watcher = (bare_fs_watcher_t *) handle;

  js_env_t *env = watcher->env;

  js_deferred_teardown_t *teardown = watcher->teardown;

  if (watcher->exiting) {
    err = js_delete_reference(env, watcher->on_event);
    assert(err == 0);

    err = js_delete_reference(env, watcher->on_close);
    assert(err == 0);

    err = js_delete_reference(env, watcher->ctx);
    assert(err == 0);
  } else {
    js_handle_scope_t *scope;
    err = js_open_handle_scope(env, &scope);
    assert(err == 0);

    js_value_t *ctx;
    err = js_get_reference_value(env, watcher->ctx, &ctx);
    assert(err == 0);

    js_value_t *on_close;
    err = js_get_reference_value(env, watcher->on_close, &on_close);
    assert(err == 0);

    err = js_delete_reference(env, watcher->on_event);
    assert(err == 0);

    err = js_delete_reference(env, watcher->on_close);
    assert(err == 0);

    err = js_delete_reference(env, watcher->ctx);
    assert(err == 0);

    err = js_call_function(env, ctx, on_close, 0, NULL, NULL);
    (void) err;

    err = js_close_handle_scope(env, scope);
    assert(err == 0);
  }

  err = js_finish_deferred_teardown_callback(teardown);
  assert(err == 0);
}

static void
bare_fs__on_watcher_teardown(js_deferred_teardown_t *handle, void *data) {
  bare_fs_watcher_t *watcher = (bare_fs_watcher_t *) data;

  watcher->exiting = true;

  if (watcher->closing) return;

  uv_close((uv_handle_t *) &watcher->handle, bare_fs__on_watcher_close);
}

static js_value_t *
bare_fs_watcher_init(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 5;
  js_value_t *argv[5];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 5);

  bare_fs_path_t path;
  err = js_get_value_string_utf8(env, argv[0], path, sizeof(bare_fs_path_t), NULL);
  assert(err == 0);

  bool recursive;
  err = js_get_value_bool(env, argv[1], &recursive);
  assert(err == 0);

  js_value_t *result;

  bare_fs_watcher_t *watcher;
  err = js_create_arraybuffer(env, sizeof(bare_fs_watcher_t), (void **) &watcher, &result);
  assert(err == 0);

  uv_loop_t *loop;
  err = js_get_env_loop(env, &loop);
  assert(err == 0);

  err = uv_fs_event_init(loop, &watcher->handle);

  if (err < 0) {
    err = js_throw_error(env, uv_err_name(err), uv_strerror(err));
    assert(err == 0);

    return NULL;
  }

  err = uv_fs_event_start(&watcher->handle, bare_fs__on_watcher_event, (char *) path, recursive ? UV_FS_EVENT_RECURSIVE : 0);
  assert(err == 0);

  watcher->env = env;
  watcher->closing = false;
  watcher->exiting = false;

  err = js_create_reference(env, argv[2], 1, &watcher->ctx);
  assert(err == 0);

  err = js_create_reference(env, argv[3], 1, &watcher->on_event);
  assert(err == 0);

  err = js_create_reference(env, argv[4], 1, &watcher->on_close);
  assert(err == 0);

  err = js_add_deferred_teardown_callback(env, bare_fs__on_watcher_teardown, (void *) watcher, &watcher->teardown);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_fs_watcher_close(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_watcher_t *watcher;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &watcher, NULL);
  assert(err == 0);

  err = uv_fs_event_stop(&watcher->handle);
  assert(err == 0);

  watcher->closing = true;

  uv_close((uv_handle_t *) &watcher->handle, bare_fs__on_watcher_close);

  return NULL;
}

static js_value_t *
bare_fs_watcher_ref(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_watcher_t *watcher;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &watcher, NULL);
  assert(err == 0);

  uv_ref((uv_handle_t *) &watcher->handle);

  return NULL;
}

static js_value_t *
bare_fs_watcher_unref(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  bare_fs_watcher_t *watcher;
  err = js_get_arraybuffer_info(env, argv[0], (void **) &watcher, NULL);
  assert(err == 0);

  uv_unref((uv_handle_t *) &watcher->handle);

  return NULL;
}

static js_value_t *
bare_fs_exports(js_env_t *env, js_value_t *exports) {
  int err;

#define V(name, fn) \
  { \
    js_value_t *val; \
    err = js_create_function(env, name, -1, fn, NULL, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("requestInit", bare_fs_request_init)
  V("requestDestroy", bare_fs_request_destroy)
  V("requestReset", bare_fs_request_reset)
  V("requestResultStat", bare_fs_request_result_stat)
  V("requestResultStatfs", bare_fs_request_result_statfs)
  V("requestResultString", bare_fs_request_result_string)
  V("requestResultPath", bare_fs_request_result_path)
  V("requestResultDir", bare_fs_request_result_dir)
  V("requestResultDirents", bare_fs_request_result_dirents)

  V("open", bare_fs_open)
  V("openSync", bare_fs_open_sync)
  V("close", bare_fs_close)
  V("closeSync", bare_fs_close_sync)
  V("access", bare_fs_access)
  V("accessSync", bare_fs_access_sync)
  V("read", bare_fs_read)
  V("readSync", bare_fs_read_sync)
  V("readv", bare_fs_readv)
  V("readvSync", bare_fs_readv_sync)
  V("write", bare_fs_write)
  V("writeSync", bare_fs_write_sync)
  V("writev", bare_fs_writev)
  V("writevSync", bare_fs_writev_sync)
  V("ftruncate", bare_fs_ftruncate)
  V("ftruncateSync", bare_fs_ftruncate_sync)
  V("chmod", bare_fs_chmod)
  V("chmodSync", bare_fs_chmod_sync)
  V("fchmod", bare_fs_fchmod)
  V("fchmodSync", bare_fs_fchmod_sync)
  V("chown", bare_fs_chown)
  V("chownSync", bare_fs_chown_sync)
  V("lchown", bare_fs_lchown)
  V("lchownSync", bare_fs_lchown_sync)
  V("fchown", bare_fs_fchown)
  V("fchownSync", bare_fs_fchown_sync)
  V("utimes", bare_fs_utimes)
  V("utimesSync", bare_fs_utimes_sync)
  V("lutimes", bare_fs_lutimes)
  V("lutimesSync", bare_fs_lutimes_sync)
  V("futimes", bare_fs_futimes)
  V("futimesSync", bare_fs_futimes_sync)
  V("rename", bare_fs_rename)
  V("renameSync", bare_fs_rename_sync)
  V("copyfile", bare_fs_copyfile)
  V("copyfileSync", bare_fs_copyfile_sync)
  V("mkdir", bare_fs_mkdir)
  V("mkdirSync", bare_fs_mkdir_sync)
  V("mkdtemp", bare_fs_mkdtemp)
  V("mkdtempSync", bare_fs_mkdtemp_sync)
  V("rmdir", bare_fs_rmdir)
  V("rmdirSync", bare_fs_rmdir_sync)
  V("stat", bare_fs_stat)
  V("statSync", bare_fs_stat_sync)
  V("lstat", bare_fs_lstat)
  V("lstatSync", bare_fs_lstat_sync)
  V("fstat", bare_fs_fstat)
  V("fstatSync", bare_fs_fstat_sync)
  V("statfs", bare_fs_statfs)
  V("statfsSync", bare_fs_statfs_sync)
  V("link", bare_fs_link)
  V("linkSync", bare_fs_link_sync)
  V("unlink", bare_fs_unlink)
  V("unlinkSync", bare_fs_unlink_sync)
  V("realpath", bare_fs_realpath)
  V("realpathSync", bare_fs_realpath_sync)
  V("readlink", bare_fs_readlink)
  V("readlinkSync", bare_fs_readlink_sync)
  V("symlink", bare_fs_symlink)
  V("symlinkSync", bare_fs_symlink_sync)
  V("opendir", bare_fs_opendir)
  V("opendirSync", bare_fs_opendir_sync)
  V("readdir", bare_fs_readdir)
  V("readdirSync", bare_fs_readdir_sync)
  V("closedir", bare_fs_closedir)
  V("closedirSync", bare_fs_closedir_sync)
  V("fsync", bare_fs_fsync)
  V("fsyncSync", bare_fs_fsync_sync)
  V("fdatasync", bare_fs_fdatasync)
  V("fdatasyncSync", bare_fs_fdatasync_sync)

  V("watcherInit", bare_fs_watcher_init)
  V("watcherClose", bare_fs_watcher_close)
  V("watcherRef", bare_fs_watcher_ref)
  V("watcherUnref", bare_fs_watcher_unref)
#undef V

#define V(name) \
  { \
    js_value_t *val; \
    err = js_create_uint32(env, name, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, #name, val); \
    assert(err == 0); \
  }

  V(O_RDWR)
  V(O_RDONLY)
  V(O_WRONLY)
  V(O_CREAT)
  V(O_TRUNC)
  V(O_APPEND)

#ifdef F_OK
  V(F_OK)
#endif
#ifdef R_OK
  V(R_OK)
#endif
#ifdef W_OK
  V(W_OK)
#endif
#ifdef X_OK
  V(X_OK)
#endif

  V(S_IFMT)
  V(S_IFREG)
  V(S_IFDIR)
  V(S_IFCHR)
  V(S_IFLNK)
#ifdef S_IFBLK
  V(S_IFBLK)
#endif
#ifdef S_IFIFO
  V(S_IFIFO)
#endif
#ifdef S_IFSOCK
  V(S_IFSOCK)
#endif

#ifdef S_IRUSR
  V(S_IRUSR)
#endif
#ifdef S_IWUSR
  V(S_IWUSR)
#endif
#ifdef S_IXUSR
  V(S_IXUSR)
#endif
#ifdef S_IRGRP
  V(S_IRGRP)
#endif
#ifdef S_IWGRP
  V(S_IWGRP)
#endif
#ifdef S_IXGRP
  V(S_IXGRP)
#endif
#ifdef S_IROTH
  V(S_IROTH)
#endif
#ifdef S_IWOTH
  V(S_IWOTH)
#endif
#ifdef S_IXOTH
  V(S_IXOTH)
#endif

  V(UV_DIRENT_UNKNOWN)
  V(UV_DIRENT_FILE)
  V(UV_DIRENT_DIR)
  V(UV_DIRENT_LINK)
  V(UV_DIRENT_FIFO)
  V(UV_DIRENT_SOCKET)
  V(UV_DIRENT_CHAR)
  V(UV_DIRENT_BLOCK)

  V(UV_FS_COPYFILE_EXCL)
  V(UV_FS_COPYFILE_FICLONE)
  V(UV_FS_COPYFILE_FICLONE_FORCE)
  V(UV_FS_SYMLINK_DIR)
  V(UV_FS_SYMLINK_JUNCTION)

  V(UV_RENAME)
  V(UV_CHANGE)
#undef V

  return exports;
}

BARE_MODULE(bare_fs, bare_fs_exports)
