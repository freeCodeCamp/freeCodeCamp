#include <assert.h>
#include <bare.h>
#include <js.h>
#include <stdlib.h>
#include <utf.h>
#include <uv.h>

static uv_rwlock_t bare_os_env_lock;

static uv_once_t bare_os_env_lock_guard = UV_ONCE_INIT;

static void
bare_os__on_env_lock_init(void) {
  int err = uv_rwlock_init(&bare_os_env_lock);
  assert(err == 0);
}

static js_value_t *
bare_os_type(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_utsname_t buffer;
  err = uv_os_uname(&buffer);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) buffer.sysname, -1, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_version(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_utsname_t buffer;
  err = uv_os_uname(&buffer);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) buffer.version, -1, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_release(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_utsname_t buffer;
  err = uv_os_uname(&buffer);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) buffer.release, -1, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_machine(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_utsname_t buffer;
  err = uv_os_uname(&buffer);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) buffer.machine, -1, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_exec_path(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t len = 4096;
  char exec_path[4096];

  err = uv_exepath(exec_path, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) exec_path, len, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_pid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, uv_os_getpid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_ppid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, uv_os_getppid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_cwd(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t len = 4096;
  char cwd[4096];

  err = uv_cwd(cwd, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) cwd, len, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_chdir(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  utf8_t dir[4096];
  err = js_get_value_string_utf8(env, argv[0], dir, 4096, NULL);
  assert(err == 0);

  err = uv_chdir((char *) dir);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  return NULL;
}

static js_value_t *
bare_os_tmpdir(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t len = 4096;
  char tmpdir[4096];

  err = uv_os_tmpdir(tmpdir, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) tmpdir, len, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_homedir(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t len = 4096;
  char homedir[4096];

  err = uv_os_homedir(homedir, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) homedir, len, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_hostname(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t len = UV_MAXHOSTNAMESIZE;
  char hostname[UV_MAXHOSTNAMESIZE];

  err = uv_os_gethostname(hostname, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) hostname, len, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_user_info(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_passwd_t pwd;
  err = uv_os_get_passwd(&pwd);
  if (err != 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_object(env, &result);
  assert(err == 0);

  js_value_t *uid;
  err = js_create_int32(env, pwd.uid, &uid);
  assert(err == 0);

  err = js_set_named_property(env, result, "uid", uid);
  assert(err == 0);

  js_value_t *gid;
  err = js_create_int32(env, pwd.gid, &gid);
  assert(err == 0);

  err = js_set_named_property(env, result, "gid", gid);
  assert(err == 0);

  js_value_t *username;
  err = js_create_string_utf8(env, (utf8_t *) pwd.username, strlen(pwd.username), &username);
  assert(err == 0);

  err = js_set_named_property(env, result, "username", username);
  assert(err == 0);

  js_value_t *homedir;
  err = js_create_string_utf8(env, (utf8_t *) pwd.homedir, strlen(pwd.homedir), &homedir);
  assert(err == 0);

  err = js_set_named_property(env, result, "homedir", homedir);
  assert(err == 0);

  js_value_t *shell;

  if (pwd.shell == NULL) {
    err = js_get_null(env, &shell);
    assert(err == 0);
  } else {
    err = js_create_string_utf8(env, (utf8_t *) pwd.shell, -1, &shell);
    assert(err == 0);
  }

  err = js_set_named_property(env, result, "shell", shell);
  assert(err == 0);

  uv_os_free_passwd(&pwd);

  return result;
}

static js_value_t *
bare_os_kill(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  uint32_t pid;
  err = js_get_value_uint32(env, argv[0], &pid);
  assert(err == 0);

  uint32_t signum;
  err = js_get_value_uint32(env, argv[1], &signum);
  assert(err == 0);

  err = uv_kill(pid, signum);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  return NULL;
}

static js_value_t *
bare_os_available_parallelism(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_int64(env, uv_available_parallelism(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_cpu_usage(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_rusage_t usage;
  err = uv_getrusage(&usage);
  assert(err == 0);

  js_value_t *result;
  err = js_create_object(env, &result);
  assert(err == 0);

#define V(name, property) \
  { \
    uv_timeval_t time = usage.ru_##property; \
\
    js_value_t *value; \
    err = js_create_int64(env, time.tv_sec * 1e6 + time.tv_usec, &value); \
    assert(err == 0); \
\
    err = js_set_named_property(env, result, name, value); \
    assert(err == 0); \
  }

  V("user", utime)
  V("system", stime)
#undef V

  return result;
}

static js_value_t *
bare_os_cpu_usage_thread(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_rusage_t usage;
  err = uv_getrusage_thread(&usage);
  assert(err == 0);

  js_value_t *result;
  err = js_create_object(env, &result);
  assert(err == 0);

#define V(name, property) \
  { \
    uv_timeval_t time = usage.ru_##property; \
\
    js_value_t *value; \
    err = js_create_int64(env, time.tv_sec * 1e6 + time.tv_usec, &value); \
    assert(err == 0); \
\
    err = js_set_named_property(env, result, name, value); \
    assert(err == 0); \
  }

  V("user", utime)
  V("system", stime)
#undef V

  return result;
}

static js_value_t *
bare_os_resource_usage(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_rusage_t usage;
  err = uv_getrusage(&usage);
  assert(err == 0);

  js_value_t *result;
  err = js_create_object(env, &result);
  assert(err == 0);

#define V(name, property) \
  { \
    uv_timeval_t time = usage.ru_##property; \
\
    js_value_t *value; \
    err = js_create_int64(env, time.tv_sec * 1e6 + time.tv_usec, &value); \
    assert(err == 0); \
\
    err = js_set_named_property(env, result, name, value); \
    assert(err == 0); \
  }

  V("userCPUTime", utime)
  V("systemCPUTime", stime)
#undef V

#define V(name, property) \
  { \
    js_value_t *value; \
    err = js_create_int64(env, usage.ru_##property, &value); \
    assert(err == 0); \
\
    err = js_set_named_property(env, result, name, value); \
    assert(err == 0); \
  }

  V("maxRSS", maxrss)
  V("sharedMemorySize", ixrss)
  V("unsharedDataSize", idrss)
  V("unsharedStackSize", isrss)
  V("minorPageFault", minflt)
  V("majorPageFault", majflt)
  V("swappedOut", nswap)
  V("fsRead", inblock)
  V("fsWrite", oublock)
  V("ipcSent", msgsnd)
  V("ipcReceived", msgrcv)
  V("signalsCount", nsignals)
  V("voluntaryContextSwitches", nvcsw)
  V("involuntaryContextSwitches", nivcsw)
#undef V

  return result;
}

static js_value_t *
bare_os_memory_usage(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_heap_statistics_t stats = {
    .version = 1,

    // Since 0
    .total_heap_size = -1,
    .used_heap_size = -1,

    // Since 1
    .external_memory = -1,
  };

  err = js_get_heap_statistics(env, &stats);
  assert(err == 0);

  js_value_t *result;
  err = js_create_object(env, &result);
  assert(err == 0);

  size_t rss;
  err = uv_resident_set_memory(&rss);
  assert(err == 0);

  js_value_t *value;
  err = js_create_int64(env, rss, &value);
  assert(err == 0);

  err = js_set_named_property(env, result, "rss", value);
  assert(err == 0);

#define V(name, property) \
  { \
    if (stats.property != (size_t) -1) { \
      js_value_t *value; \
      err = js_create_int64(env, stats.property, &value); \
      assert(err == 0); \
\
      err = js_set_named_property(env, result, name, value); \
      assert(err == 0); \
    } \
  }

  V("heapTotal", total_heap_size)
  V("heapUsed", used_heap_size)
  V("external", external_memory)
#undef V

  return result;
}

static js_value_t *
bare_os_freemem(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_int64(env, uv_get_free_memory(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_totalmem(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_int64(env, uv_get_total_memory(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_uptime(js_env_t *env, js_callback_info_t *info) {
  int err;

  double uptime;
  err = uv_uptime(&uptime);
  assert(err == 0);

  js_value_t *result;
  err = js_create_double(env, uptime, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_loadavg(js_env_t *env, js_callback_info_t *info) {
  int err;

  double *data;

  js_value_t *arraybuffer;
  err = js_create_arraybuffer(env, sizeof(double) * 3, (void **) &data, &arraybuffer);
  assert(err == 0);

  js_value_t *result;
  err = js_create_typedarray(env, js_float64array, 3, arraybuffer, 0, &result);
  assert(err == 0);

  uv_loadavg(data);

  return result;
}

static js_value_t *
bare_os_cpus(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_cpu_info_t *cpus;
  int len;
  err = uv_cpu_info(&cpus, &len);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_array_with_length(env, len, &result);
  assert(err == 0);

  for (uint32_t i = 0, n = len; i < n; i++) {
    uv_cpu_info_t cpu = cpus[i];

    js_value_t *item;
    err = js_create_object(env, &item);
    assert(err == 0);

    err = js_set_element(env, result, i, item);
    assert(err == 0);

#define V(name, type, ...) \
  { \
    js_value_t *val; \
    err = type(env, ##__VA_ARGS__, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, item, name, val); \
    assert(err == 0); \
  }

    V("model", js_create_string_utf8, (const utf8_t *) cpu.model, -1)
    V("speed", js_create_double, cpu.speed)
    V("times", js_create_object)
#undef V

    js_value_t *times;
    err = js_get_named_property(env, item, "times", &times);
    assert(err == 0);

#define V(name) \
  { \
    js_value_t *val; \
    err = js_create_int64(env, cpu.cpu_times.name, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, times, #name, val); \
    assert(err == 0); \
  }

    V(user)
    V(nice)
    V(sys)
    V(idle)
    V(irq)
#undef V
  }

  uv_free_cpu_info(cpus, len);

  return result;
}

static js_value_t *
bare_os_get_process_title(js_env_t *env, js_callback_info_t *info) {
  int err;

  char title[256];
  err = uv_get_process_title(title, 256);
  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) title, -1, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_set_process_title(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  utf8_t data[256];
  err = js_get_value_string_utf8(env, argv[0], data, 256, NULL);
  assert(err == 0);

  err = uv_set_process_title((char *) data);
  assert(err == 0);

  return NULL;
}

static js_value_t *
bare_os_get_env_keys(js_env_t *env, js_callback_info_t *info) {
  int err;

  uv_env_item_t *items;
  int len;

  uv_rwlock_rdlock(&bare_os_env_lock);

  err = uv_os_environ(&items, &len);

  uv_rwlock_rdunlock(&bare_os_env_lock);

  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    return NULL;
  }

  js_value_t *result;
  err = js_create_array_with_length(env, len, &result);
  assert(err == 0);

  for (int i = 0; i < len; i++) {
    uv_env_item_t *item = &items[i];

    js_value_t *val;
    err = js_create_string_utf8(env, (utf8_t *) item->name, -1, &val);
    assert(err == 0);

    err = js_set_element(env, result, i, val);
    assert(err == 0);
  }

  uv_os_free_environ(items, len);

  return result;
}

static js_value_t *
bare_os_get_env(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  size_t name_len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &name_len);
  assert(err == 0);

  name_len += 1 /* NULL */;

  utf8_t *name = malloc(name_len);
  err = js_get_value_string_utf8(env, argv[0], name, name_len, &name_len);
  assert(err == 0);

  uv_rwlock_rdlock(&bare_os_env_lock);

  size_t value_len = 256;
  char *value = malloc(value_len);
  err = uv_os_getenv((char *) name, value, &value_len);

  js_value_t *result;

  if (err == UV_ENOENT) {
    err = js_get_undefined(env, &result);
    assert(err == 0);
  } else {
    if (err == UV_ENOBUFS) {
      value = realloc(value, value_len);

      err = uv_os_getenv((char *) name, value, &value_len);
      assert(err == 0);
    } else if (err < 0) {
      uv_rwlock_rdunlock(&bare_os_env_lock);
      js_throw_error(env, uv_err_name(err), uv_strerror(err));
      free(name);
      return NULL;
    }

    err = js_create_string_utf8(env, (utf8_t *) value, value_len, &result);
    assert(err == 0);
  }

  uv_rwlock_rdunlock(&bare_os_env_lock);

  free(name);
  free(value);

  return result;
}

static js_value_t *
bare_os_has_env(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  size_t name_len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &name_len);
  assert(err == 0);

  utf8_t *name = malloc(++name_len);
  err = js_get_value_string_utf8(env, argv[0], name, name_len, &name_len);
  assert(err == 0);

  uv_rwlock_rdlock(&bare_os_env_lock);

  size_t value_len = 1;
  char value[1];
  err = uv_os_getenv((char *) name, value, &value_len);

  uv_rwlock_rdunlock(&bare_os_env_lock);

  if (err != 0 && err != UV_ENOENT && err != UV_ENOBUFS) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    free(name);
    return NULL;
  }

  free(name);

  js_value_t *result;
  err = js_get_boolean(env, err != UV_ENOENT, &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_os_set_env(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 2;
  js_value_t *argv[2];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 2);

  size_t name_len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &name_len);
  assert(err == 0);

  utf8_t *name = malloc(++name_len);
  err = js_get_value_string_utf8(env, argv[0], name, name_len, &name_len);
  assert(err == 0);

  size_t value_len;
  err = js_get_value_string_utf8(env, argv[1], NULL, 0, &value_len);
  assert(err == 0);

  utf8_t *value = malloc(++value_len);
  err = js_get_value_string_utf8(env, argv[1], value, value_len, &value_len);
  assert(err == 0);

  uv_rwlock_wrlock(&bare_os_env_lock);

  err = uv_os_setenv((char *) name, (char *) value);

  uv_rwlock_wrunlock(&bare_os_env_lock);

  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    free(name);
    free(value);
    return NULL;
  }

  free(name);
  free(value);

  return NULL;
}

static js_value_t *
bare_os_unset_env(js_env_t *env, js_callback_info_t *info) {
  int err;

  size_t argc = 1;
  js_value_t *argv[1];

  err = js_get_callback_info(env, info, &argc, argv, NULL, NULL);
  assert(err == 0);

  assert(argc == 1);

  size_t name_len;
  err = js_get_value_string_utf8(env, argv[0], NULL, 0, &name_len);
  assert(err == 0);

  utf8_t *name = malloc(++name_len);
  err = js_get_value_string_utf8(env, argv[0], name, name_len, &name_len);
  assert(err == 0);

  uv_rwlock_wrlock(&bare_os_env_lock);

  err = uv_os_unsetenv((char *) name);

  uv_rwlock_wrunlock(&bare_os_env_lock);

  if (err < 0) {
    js_throw_error(env, uv_err_name(err), uv_strerror(err));
    free(name);
    return NULL;
  }

  free(name);

  return NULL;
}

static js_value_t *
bare_os_exports(js_env_t *env, js_value_t *exports) {
  uv_once(&bare_os_env_lock_guard, bare_os__on_env_lock_init);

  int err;

#define V(name, str) \
  { \
    js_value_t *val; \
    err = js_create_string_utf8(env, (utf8_t *) str, -1, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("platform", BARE_PLATFORM)
  V("arch", BARE_ARCH)
#undef V

#define V(name, fn) \
  { \
    js_value_t *val; \
    err = js_create_function(env, name, -1, fn, NULL, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("type", bare_os_type)
  V("version", bare_os_version)
  V("release", bare_os_release)
  V("machine", bare_os_machine)
  V("execPath", bare_os_exec_path)
  V("pid", bare_os_pid)
  V("ppid", bare_os_ppid)
  V("cwd", bare_os_cwd)
  V("chdir", bare_os_chdir)
  V("tmpdir", bare_os_tmpdir)
  V("homedir", bare_os_homedir)
  V("hostname", bare_os_hostname)
  V("kill", bare_os_kill)
  V("availableParallelism", bare_os_available_parallelism)
  V("cpuUsage", bare_os_cpu_usage)
  V("threadCpuUsage", bare_os_cpu_usage_thread)
  V("resourceUsage", bare_os_resource_usage)
  V("memoryUsage", bare_os_memory_usage)
  V("freemem", bare_os_freemem)
  V("totalmem", bare_os_totalmem)
  V("uptime", bare_os_uptime)
  V("loadavg", bare_os_loadavg)
  V("cpus", bare_os_cpus)
  V("getProcessTitle", bare_os_get_process_title)
  V("setProcessTitle", bare_os_set_process_title)
  V("getEnvKeys", bare_os_get_env_keys)
  V("getEnv", bare_os_get_env)
  V("hasEnv", bare_os_get_env)
  V("setEnv", bare_os_set_env)
  V("unsetEnv", bare_os_unset_env)
  V("userInfo", bare_os_user_info)
#undef V

  const union {
    uint8_t u8[2];
    uint16_t u16;
  } byte_order = {{1, 0}};

  js_value_t *is_little_endian;
  err = js_get_boolean(env, byte_order.u16 == 1, &is_little_endian);
  assert(err == 0);

  err = js_set_named_property(env, exports, "isLittleEndian", is_little_endian);
  assert(err == 0);

  js_value_t *signals;
  err = js_create_object(env, &signals);
  assert(err == 0);

  err = js_set_named_property(env, exports, "signals", signals);
  assert(err == 0);

#define V(name) \
  { \
    js_value_t *val; \
    err = js_create_uint32(env, name, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, signals, #name, val); \
    assert(err == 0); \
  }

#ifdef SIGHUP
  V(SIGHUP);
#endif
#ifdef SIGINT
  V(SIGINT);
#endif
#ifdef SIGQUIT
  V(SIGQUIT);
#endif
#ifdef SIGILL
  V(SIGILL);
#endif
#ifdef SIGTRAP
  V(SIGTRAP);
#endif
#ifdef SIGABRT
  V(SIGABRT);
#endif
#ifdef SIGIOT
  V(SIGIOT);
#endif
#ifdef SIGBUS
  V(SIGBUS);
#endif
#ifdef SIGFPE
  V(SIGFPE);
#endif
#ifdef SIGKILL
  V(SIGKILL);
#endif
#ifdef SIGUSR1
  V(SIGUSR1);
#endif
#ifdef SIGSEGV
  V(SIGSEGV);
#endif
#ifdef SIGUSR2
  V(SIGUSR2);
#endif
#ifdef SIGPIPE
  V(SIGPIPE);
#endif
#ifdef SIGALRM
  V(SIGALRM);
#endif
#ifdef SIGTERM
  V(SIGTERM);
#endif
#ifdef SIGCHLD
  V(SIGCHLD);
#endif
#ifdef SIGSTKFLT
  V(SIGSTKFLT);
#endif
#ifdef SIGCONT
  V(SIGCONT);
#endif
#ifdef SIGSTOP
  V(SIGSTOP);
#endif
#ifdef SIGTSTP
  V(SIGTSTP);
#endif
#ifdef SIGBREAK
  V(SIGBREAK);
#endif
#ifdef SIGTTIN
  V(SIGTTIN);
#endif
#ifdef SIGTTOU
  V(SIGTTOU);
#endif
#ifdef SIGURG
  V(SIGURG);
#endif
#ifdef SIGXCPU
  V(SIGXCPU);
#endif
#ifdef SIGXFSZ
  V(SIGXFSZ);
#endif
#ifdef SIGVTALRM
  V(SIGVTALRM);
#endif
#ifdef SIGPROF
  V(SIGPROF);
#endif
#ifdef SIGWINCH
  V(SIGWINCH);
#endif
#ifdef SIGIO
  V(SIGIO);
#endif
#ifdef SIGPOLL
  V(SIGPOLL);
#endif
#ifdef SIGLOST
  V(SIGLOST);
#endif
#ifdef SIGPWR
  V(SIGPWR);
#endif
#ifdef SIGINFO
  V(SIGINFO);
#endif
#ifdef SIGSYS
  V(SIGSYS);
#endif
#ifdef SIGUNUSED
  V(SIGUNUSED);
#endif
#undef V

  js_value_t *errnos;
  err = js_create_object(env, &errnos);
  assert(err == 0);

  err = js_set_named_property(env, exports, "errnos", errnos);
  assert(err == 0);

#define V(name, msg) \
  { \
    js_value_t *val; \
    err = js_create_int32(env, UV_##name, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, errnos, #name, val); \
    assert(err == 0); \
  }

  UV_ERRNO_MAP(V);
#undef V

  return exports;
}

BARE_MODULE(bare_os, bare_os_exports)
