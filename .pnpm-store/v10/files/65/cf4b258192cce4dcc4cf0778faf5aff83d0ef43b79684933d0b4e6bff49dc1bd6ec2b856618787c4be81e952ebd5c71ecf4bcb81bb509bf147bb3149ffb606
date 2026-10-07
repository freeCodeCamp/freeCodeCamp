#include "lmdb-js.h"

using namespace Napi;

int Logging::initLogging() {
	char* logging = getenv("LMDB_JS_LOGGING");
	if (logging)
		fprintf(stderr, "Start logging for lmdb-js\n");
	return !!logging;
}
int Logging::debugLogging = Logging::initLogging();

Object InitAll(Napi::Env env, Object exports) {
	if (Logging::debugLogging)
		fprintf(stderr, "Start initialization\n");
	// Initializes the module
	// Export Env as constructor for EnvWrap
	EnvWrap::setupExports(env, exports);

	// Export Cursor as constructor for CursorWrap
	CursorWrap::setupExports(env, exports);
	TxnWrap::setupExports(env, exports);
	DbiWrap::setupExports(env, exports);
	CursorWrap::setupExports(env, exports);
	Compression::setupExports(env, exports);

	// Export misc things
	setupExportMisc(env, exports);
	if (Logging::debugLogging)
		fprintf(stderr, "Finished initialization\n");
	return exports;
}
NAPI_MODULE_INIT() {
	Value exp = Value::From(env, exports);
	return InitAll(env, exp.As<Object>());
}

#ifndef _WIN32
extern "C" void node_module_register(void* m) {
	//fprintf(stderr, "This is just a dummy function to be called if node isn't there so deno can load this module\n");
}
#endif

// This file contains code from the node-lmdb project
// Copyright (c) 2013-2017 Timur Kristóf
// Licensed to you under the terms of the MIT license
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
