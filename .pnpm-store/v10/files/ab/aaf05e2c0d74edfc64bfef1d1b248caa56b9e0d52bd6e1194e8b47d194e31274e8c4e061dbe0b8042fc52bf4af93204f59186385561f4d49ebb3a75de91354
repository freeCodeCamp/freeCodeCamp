// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#include <cmath>
#include <string>

#include <napi.h>
#include <vips/vips8>
#include <vips/vector.h>

#include "common.h"
#include "operations.h"
#include "utilities.h"

/*
  Get and set cache limits
*/
Napi::Value cache(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  // Set memory limit
  if (info[size_t(0)].IsNumber()) {
    vips_cache_set_max_mem(info[size_t(0)].As<Napi::Number>().Int32Value() * 1048576);
  }
  // Set file limit
  if (info[size_t(1)].IsNumber()) {
    vips_cache_set_max_files(info[size_t(1)].As<Napi::Number>().Int32Value());
  }
  // Set items limit
  if (info[size_t(2)].IsNumber()) {
    vips_cache_set_max(info[size_t(2)].As<Napi::Number>().Int32Value());
  }

  // Get memory stats
  Napi::Object memory = Napi::Object::New(env);
  memory.Set("current", round(vips_tracked_get_mem() / 1048576));
  memory.Set("high", round(vips_tracked_get_mem_highwater() / 1048576));
  memory.Set("max", round(vips_cache_get_max_mem() / 1048576));
  // Get file stats
  Napi::Object files = Napi::Object::New(env);
  files.Set("current", vips_tracked_get_files());
  files.Set("max", vips_cache_get_max_files());

  // Get item stats
  Napi::Object items = Napi::Object::New(env);
  items.Set("current", vips_cache_get_size());
  items.Set("max", vips_cache_get_max());

  Napi::Object cache = Napi::Object::New(env);
  cache.Set("memory", memory);
  cache.Set("files", files);
  cache.Set("items", items);
  return cache;
}

/*
  Get and set size of thread pool
*/
Napi::Value concurrency(const Napi::CallbackInfo& info) {
  // Set concurrency
  if (info[size_t(0)].IsNumber()) {
    vips_concurrency_set(info[size_t(0)].As<Napi::Number>().Int32Value());
  }
  // Get concurrency
  return Napi::Number::New(info.Env(), vips_concurrency_get());
}

/*
  Get internal counters (queued tasks, processing tasks)
*/
Napi::Value counters(const Napi::CallbackInfo& info) {
  Napi::Object counters = Napi::Object::New(info.Env());
  counters.Set("queue", sharp::counterQueue);
  counters.Set("process", sharp::counterProcess);
  return counters;
}

/*
  Get and set use of SIMD vector unit instructions
*/
Napi::Value simd(const Napi::CallbackInfo& info) {
  // Set state
  if (info[size_t(0)].IsBoolean()) {
    vips_vector_set_enabled(info[size_t(0)].As<Napi::Boolean>().Value());
  }
  // Get state
  return Napi::Boolean::New(info.Env(), vips_vector_isenabled());
}

/*
  Get libvips version
*/
Napi::Value libvipsVersion(const Napi::CallbackInfo& info) {
  char version[9];
  g_snprintf(version, sizeof(version), "%d.%d.%d", vips_version(0), vips_version(1), vips_version(2));
  return Napi::String::New(info.Env(), version);
}

/*
  Get available input/output file/buffer/stream formats
*/
Napi::Value format(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::Object format = Napi::Object::New(env);
  for (std::string const f : {
    "jpeg", "png", "webp", "tiff", "magick", "openslide", "dz",
    "ppm", "fits", "gif", "svg", "heif", "pdf", "vips", "jp2k", "jxl"
  }) {
    // Input
    const VipsObjectClass *oc = vips_class_find("VipsOperation", (f + "load").c_str());
    Napi::Boolean hasInputFile = Napi::Boolean::New(env, oc);
    Napi::Boolean hasInputBuffer =
      Napi::Boolean::New(env, vips_type_find("VipsOperation", (f + "load_buffer").c_str()));
    Napi::Object input = Napi::Object::New(env);
    input.Set("file", hasInputFile);
    input.Set("buffer", hasInputBuffer);
    input.Set("stream", hasInputBuffer);
    if (hasInputFile) {
      const VipsForeignClass *fc = VIPS_FOREIGN_CLASS(oc);
      if (fc->suffs) {
        Napi::Array fileSuffix = Napi::Array::New(env);
        const char **suffix = fc->suffs;
        for (int i = 0; *suffix; i++, suffix++) {
          fileSuffix.Set(i, Napi::String::New(env, *suffix));
        }
        input.Set("fileSuffix", fileSuffix);
      }
    }
    // Output
    Napi::Boolean hasOutputFile =
      Napi::Boolean::New(env, vips_type_find("VipsOperation", (f + "save").c_str()));
    Napi::Boolean hasOutputBuffer =
      Napi::Boolean::New(env, vips_type_find("VipsOperation", (f + "save_buffer").c_str()));
    Napi::Object output = Napi::Object::New(env);
    output.Set("file", hasOutputFile);
    output.Set("buffer", hasOutputBuffer);
    output.Set("stream", hasOutputBuffer);
    // Other attributes
    Napi::Object container = Napi::Object::New(env);
    container.Set("id", f);
    container.Set("input", input);
    container.Set("output", output);
    // Add to set of formats
    format.Set(f, container);
  }

  // Raw, uncompressed data
  Napi::Boolean supported = Napi::Boolean::New(env, true);
  Napi::Boolean unsupported = Napi::Boolean::New(env, false);
  Napi::Object rawInput = Napi::Object::New(env);
  rawInput.Set("file", unsupported);
  rawInput.Set("buffer", supported);
  rawInput.Set("stream", supported);
  Napi::Object rawOutput = Napi::Object::New(env);
  rawOutput.Set("file", unsupported);
  rawOutput.Set("buffer", supported);
  rawOutput.Set("stream", supported);
  Napi::Object raw = Napi::Object::New(env);
  raw.Set("id", "raw");
  raw.Set("input", rawInput);
  raw.Set("output", rawOutput);
  format.Set("raw", raw);

  return format;
}

/*
  (Un)block libvips operations at runtime.
*/
void block(const Napi::CallbackInfo& info) {
  Napi::Array ops = info[size_t(0)].As<Napi::Array>();
  bool const state = info[size_t(1)].As<Napi::Boolean>().Value();
  for (unsigned int i = 0; i < ops.Length(); i++) {
    vips_operation_block_set(ops.Get(i).As<Napi::String>().Utf8Value().c_str(), state);
  }
}

/*
  Synchronous, internal-only method used by some of the functional tests.
  Calculates the maximum colour distance using the DE2000 algorithm
  between two images of the same dimensions and number of channels.
*/
Napi::Value _maxColourDistance(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  // Open input files
  VImage image1;
  sharp::ImageType imageType1 = sharp::DetermineImageType(info[size_t(0)].As<Napi::String>().Utf8Value().data());
  if (imageType1 != sharp::ImageType::UNKNOWN) {
    try {
      image1 = VImage::new_from_file(info[size_t(0)].As<Napi::String>().Utf8Value().c_str());
    } catch (...) {
      throw Napi::Error::New(env, "Input file 1 has corrupt header");
    }
  } else {
    throw Napi::Error::New(env, "Input file 1 is of an unsupported image format");
  }
  VImage image2;
  sharp::ImageType imageType2 = sharp::DetermineImageType(info[size_t(1)].As<Napi::String>().Utf8Value().data());
  if (imageType2 != sharp::ImageType::UNKNOWN) {
    try {
      image2 = VImage::new_from_file(info[size_t(1)].As<Napi::String>().Utf8Value().c_str());
    } catch (...) {
      throw Napi::Error::New(env, "Input file 2 has corrupt header");
    }
  } else {
    throw Napi::Error::New(env, "Input file 2 is of an unsupported image format");
  }
  // Ensure same number of channels
  if (image1.bands() != image2.bands()) {
    throw Napi::Error::New(env, "mismatchedBands");
  }
  // Ensure same dimensions
  if (image1.width() != image2.width() || image1.height() != image2.height()) {
    throw Napi::Error::New(env, "mismatchedDimensions");
  }

  double maxColourDistance;
  try {
    // Premultiply and remove alpha
    if (sharp::HasAlpha(image1)) {
      image1 = image1.premultiply().extract_band(1, VImage::option()->set("n", image1.bands() - 1));
    }
    if (sharp::HasAlpha(image2)) {
      image2 = image2.premultiply().extract_band(1, VImage::option()->set("n", image2.bands() - 1));
    }
    // Calculate colour distance
    maxColourDistance = image1.dE00(image2).max();
  } catch (vips::VError const &err) {
    throw Napi::Error::New(env, err.what());
  }

  // Clean up libvips' per-request data and threads
  vips_error_clear();
  vips_thread_shutdown();

  return Napi::Number::New(env, maxColourDistance);
}

#if defined(__GNUC__)
// mallctl will be resolved by the runtime linker when jemalloc is being used
extern "C" {
  int mallctl(const char *name, void *oldp, size_t *oldlenp, void *newp, size_t newlen) __attribute__((weak));
}
Napi::Value _isUsingJemalloc(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::Boolean::New(env, mallctl != nullptr);
}
#else
Napi::Value _isUsingJemalloc(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::Boolean::New(env, false);
}
#endif
