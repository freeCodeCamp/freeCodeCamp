#include "lmdb-js.h"
#include <string.h>
#include <stdio.h>
#include <node_version.h>

using namespace Napi;

static thread_local char* globalUnsafePtr;
static thread_local size_t globalUnsafeSize;

void setupExportMisc(Napi::Env env, Object exports) {
	Object versionObj = Object::New(env);

	int major, minor, patch;
	char *str = mdb_version(&major, &minor, &patch);
	versionObj.Set("versionString", String::New(env, str));
	versionObj.Set("major", Number::New(env, major));
	versionObj.Set("minor", Number::New(env, minor));
	versionObj.Set("patch", Number::New(env, patch));
	#if ENABLE_V8_API
   versionObj.Set("nodeCompiledVersion", Number::New(env, NODE_MAJOR_VERSION));
	#endif

	exports.Set("version", versionObj);
	exports.Set("setGlobalBuffer", Function::New(env, setGlobalBuffer));
	exports.Set("lmdbError", Function::New(env, lmdbError));
	exports.Set("enableDirectV8", Function::New(env, enableDirectV8));
	EXPORT_NAPI_FUNCTION("createBufferForAddress", createBufferForAddress);
	EXPORT_NAPI_FUNCTION("getAddress", getViewAddress);
	EXPORT_NAPI_FUNCTION("detachBuffer", detachBuffer);
}

void setFlagFromValue(int *flags, int flag, const char *name, bool defaultValue, Object options) {
	Value opt = options.Get(name);
	if (opt.IsBoolean() ? opt.As<Boolean>().Value() : defaultValue)
		*flags |= flag;
}
/*
Value valToStringUnsafe(MDB_val &data) {
	auto resource = new CustomExternalOneByteStringResource(&data);
	auto str = Nan::New<v8::String>(resource);

	return str.ToLocalChecked();
}*/

Value valToUtf8(Env env, MDB_val &data) {
	return String::New(env, (const char*) data.mv_data, data.mv_size);
}

Value valToString(Env env, MDB_val &data) {
	// UTF-16 buffer
	const uint16_t *buffer = reinterpret_cast<const uint16_t*>(data.mv_data);
	// Number of UTF-16 code points
	size_t n = data.mv_size / sizeof(uint16_t);
	
	// Check zero termination
	if (n < 1 || buffer[n - 1] != 0) {
		return throwError(env, "Invalid zero-terminated UTF-16 string");
	}
	
	size_t length = n - 1;
	return String::New(env, (const char16_t*)data.mv_data, length);
}

bool valToBinaryFast(MDB_val &data, DbiWrap* dw) {
	Compression* compression = dw->compression;
	if (compression) {
		if (data.mv_data == compression->decompressTarget) {
			// already decompressed to the target, nothing more to do
		} else {
			if (data.mv_size > compression->decompressSize) {
				return false;
			}
			// copy into the buffer target
			memcpy(compression->decompressTarget, data.mv_data, data.mv_size);
		}
	} else {
		if (data.mv_size > globalUnsafeSize) {
			// TODO: Provide a direct reference if for really large blocks, but we do that we need to detach that in the next turn
			/* if(data.mv_size > 64000) {
				dw->SetUnsafeBuffer(data.mv_data, data.mv_size);
				return Nan::New<Number>(data.mv_size);
			}*/
			return false;
		}
		memcpy(globalUnsafePtr, data.mv_data, data.mv_size);
	}
	return true;
}
Value valToBinaryUnsafe(MDB_val &data, DbiWrap* dw, Env env) {
	valToBinaryFast(data, dw);
	return Number::New(env, data.mv_size);
}


bool getVersionAndUncompress(MDB_val &data, DbiWrap* dw) {
	//fprintf(stdout, "uncompressing %u\n", compressionThreshold);
	unsigned char* charData = (unsigned char*) data.mv_data;
	if (dw->hasVersions) {
		memcpy((dw->ew->keyBuffer + 16), charData, 8);
//		fprintf(stderr, "getVersion %u\n", lastVersion);
		charData = charData + 8;
		data.mv_data = charData;
		data.mv_size -= 8;
	}
	if (data.mv_size == 0) {
		return true;// successFunc(data);
	}
	unsigned char statusByte = dw->compression ? charData[0] : 0;
		//fprintf(stdout, "uncompressing status %X\n", statusByte);
	if (statusByte >= 250) {
		bool isValid;
		dw->compression->decompress(data, isValid, !dw->getFast);
		if (!isValid)
			return false;
			//return Nan::Null();
	}
	return true;
}

Value lmdbError(const CallbackInfo& info) {
	return throwLmdbError(info.Env(), info[0].As<Number>().Int32Value());
}

Value setGlobalBuffer(const CallbackInfo& info) {
	napi_get_typedarray_info(info.Env(), info[0], nullptr, &globalUnsafeSize, (void**) &globalUnsafePtr, nullptr, nullptr);
	return info.Env().Undefined();
}

/*Value getBufferForAddress) {
	char* address = (char*) (size_t) Nan::To<v8::Number>(info[0]).ToLocalChecked()->Value();
	std::unique_ptr<v8::BackingStore> backing = v8::ArrayBuffer::NewBackingStore(
	address, 0x100000000, [](void*, size_t, void*){}, nullptr);
	auto array_buffer = v8::ArrayBuffer::New(Isolate::GetCurrent(), std::move(backing));
	info.GetReturnValue().Set(array_buffer);
}*/
NAPI_FUNCTION(createBufferForAddress) {
	ARGS(2)
    GET_INT64_ARG(0);
    void* data = (void*) i64;   
	uint32_t length;
	GET_UINT32_ARG(length, 1);
	napi_create_external_buffer(env, length, data, nullptr, nullptr, &returnValue);
	return returnValue;
}

NAPI_FUNCTION(getViewAddress) {
	ARGS(1)
	void* data;
	napi_get_typedarray_info(env, args[0], nullptr, nullptr, &data, nullptr, nullptr);
	napi_create_double(env, (double) (size_t) data, &returnValue);
	return returnValue;
}

NAPI_FUNCTION(detachBuffer) {
	ARGS(1)
	#if (NAPI_VERSION > 6)
	napi_detach_arraybuffer(env, args[0]);
	#endif
	RETURN_UNDEFINED;
}

Value lmdbNativeFunctions(const CallbackInfo& info) {
	// no-op, just doing this to give a label to the native functions
	return info.Env().Undefined();
}

Napi::Value throwLmdbError(Napi::Env env, int rc) {
	if (rc < 0 && !(rc < -30700 && rc > -30800))
		rc = -rc;
	Error error = Error::New(env, mdb_strerror(rc));
	error.Set("code", Number::New(env, rc));
	error.ThrowAsJavaScriptException();
	return env.Undefined();
}

Napi::Value throwError(Napi::Env env, const char* message) {
	Error::New(env, message).ThrowAsJavaScriptException();
	return env.Undefined();
}

int putWithVersion(MDB_txn *   txn,
		MDB_dbi	 dbi,
		MDB_val *   key,
		MDB_val *   data,
		unsigned int	flags, double version) {
	// leave 8 header bytes available for version and copy in with reserved memory
	char* sourceData = (char*) data->mv_data;
	int size = data->mv_size;
	data->mv_size = size + 8;
	int rc = mdb_put(txn, dbi, key, data, flags | MDB_RESERVE);
	if (rc == 0) {
		// if put is successful, data->mv_data will point into the database where we copy the data to
		memcpy((char*) data->mv_data + 8, sourceData, size);
		*((double*) data->mv_data) = version;
	}
	data->mv_data = sourceData; // restore this so that if it points to data that needs to be freed, it points to the right place
	return rc;
}


#ifdef _WIN32

int pthread_mutex_init(pthread_mutex_t *mutex, pthread_mutexattr_t *attr)
{
	(void)attr;

	if (mutex == NULL)
		return 1;

	InitializeCriticalSection(mutex);
	return 0;
}

int pthread_mutex_destroy(pthread_mutex_t *mutex)
{
	if (mutex == NULL)
		return 1;
	DeleteCriticalSection(mutex);
	return 0;
}

int pthread_mutex_lock(pthread_mutex_t *mutex)
{
	if (mutex == NULL)
		return 1;
	EnterCriticalSection(mutex);
	return 0;
}

int pthread_mutex_unlock(pthread_mutex_t *mutex)
{
	if (mutex == NULL)
		return 1;
	LeaveCriticalSection(mutex);
	return 0;
}

int pthread_cond_init(pthread_cond_t *cond, pthread_condattr_t *attr)
{
	(void)attr;
	if (cond == NULL)
		return 1;
	InitializeConditionVariable(cond);
	return 0;
}

int pthread_cond_destroy(pthread_cond_t *cond)
{
	/* Windows does not have a destroy for conditionals */
	(void)cond;
	return 0;
}

int pthread_cond_wait(pthread_cond_t *cond, pthread_mutex_t *mutex)
{
	if (cond == NULL || mutex == NULL)
		return 1;
	if (!SleepConditionVariableCS(cond, mutex, INFINITE))
		return 1;
	return 0;
}

int cond_timedwait(pthread_cond_t *cond, pthread_mutex_t *mutex, uint64_t ms)
{
	if (cond == NULL || mutex == NULL)
		return 1;
	if (!SleepConditionVariableCS(cond, mutex, ms))
		return 1;
	return 0;
}

int pthread_cond_signal(pthread_cond_t *cond)
{
	if (cond == NULL)
		return 1;
	WakeConditionVariable(cond);
	return 0;
}

int pthread_cond_broadcast(pthread_cond_t *cond)
{
	if (cond == NULL)
		return 1;
	WakeAllConditionVariable(cond);
	return 0;
}

#else
int cond_timedwait(pthread_cond_t *cond, pthread_mutex_t *mutex, uint64_t cms)
{
	struct timespec ts;
	clock_gettime(CLOCK_REALTIME, &ts);
	uint64_t ns = ts.tv_nsec + cms * 10000;
	ts.tv_sec += ns / 1000000000;
	ts.tv_nsec += ns % 1000000000;
	return pthread_cond_timedwait(cond, mutex, &ts);
}

#endif

// This file contains code from the node-lmdb project
// Copyright (c) 2013-2017 Timur Kristóf
// Copyright (c) 2021 Kristopher Tate
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

