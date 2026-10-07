// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#include <napi.h>
#include <vips/vips8>

#include "common.h"
#include "metadata.h"
#include "pipeline.h"
#include "utilities.h"
#include "stats.h"

static void* sharp_vips_init(void*) {
  vips_init("sharp");
  return nullptr;
}

Napi::Object init(Napi::Env env, Napi::Object exports) {
  static GOnce sharp_vips_init_once = G_ONCE_INIT;
  g_once(&sharp_vips_init_once, static_cast<GThreadFunc>(sharp_vips_init), nullptr);

  g_log_set_handler("VIPS", static_cast<GLogLevelFlags>(G_LOG_LEVEL_WARNING),
    static_cast<GLogFunc>(sharp::VipsWarningCallback), nullptr);

  // Methods available to JavaScript
  exports.Set("metadata", Napi::Function::New(env, metadata));
  exports.Set("pipeline", Napi::Function::New(env, pipeline));
  exports.Set("cache", Napi::Function::New(env, cache));
  exports.Set("concurrency", Napi::Function::New(env, concurrency));
  exports.Set("counters", Napi::Function::New(env, counters));
  exports.Set("simd", Napi::Function::New(env, simd));
  exports.Set("libvipsVersion", Napi::Function::New(env, libvipsVersion));
  exports.Set("format", Napi::Function::New(env, format));
  exports.Set("block", Napi::Function::New(env, block));
  exports.Set("_maxColourDistance", Napi::Function::New(env, _maxColourDistance));
  exports.Set("_isUsingJemalloc", Napi::Function::New(env, _isUsingJemalloc));
  exports.Set("stats", Napi::Function::New(env, stats));
  return exports;
}

NODE_API_MODULE(sharp, init)
