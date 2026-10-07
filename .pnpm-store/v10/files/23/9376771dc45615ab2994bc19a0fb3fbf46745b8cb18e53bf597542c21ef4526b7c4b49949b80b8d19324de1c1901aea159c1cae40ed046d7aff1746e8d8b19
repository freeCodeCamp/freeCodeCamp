
// This file is part of lmdb-js
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

#ifndef NODE_LMDB_H
#define NODE_LMDB_H

#include <vector>
#include <algorithm>
#include <napi.h>
#include <node_api.h>

#include "lmdb.h"
#include "lz4.h"
#ifdef MDB_RPAGE_CACHE
#include "chacha8.h"
#endif

using namespace Napi;

#ifndef __CPTHREAD_H__
#define __CPTHREAD_H__

#ifdef _WIN32
# include <windows.h>
#else
# include <pthread.h>
#endif

#ifdef _WIN32
typedef CRITICAL_SECTION pthread_mutex_t;
typedef void pthread_mutexattr_t;
typedef void pthread_condattr_t;
typedef HANDLE pthread_t;
typedef CONDITION_VARIABLE pthread_cond_t;

#endif

#define NAPI_FUNCTION(name) napi_value name(napi_env env, napi_callback_info info)
#define ARGS(count) napi_value returnValue;\
	size_t argc = count;\
	napi_value args[count];\
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);
#define GET_UINT32_ARG(target, position) napi_get_value_uint32(env, args[position], (uint32_t*) &target)
#define GET_INT64_ARG(position)\
    int64_t i64;\
    napi_get_value_int64(env, args[position], &i64);
#define RETURN_UINT32(value) { napi_create_uint32(env, value, &returnValue); return returnValue; }
#define RETURN_INT32(value) { napi_create_int32(env, value, &returnValue); return returnValue; }
#define RETURN_UNDEFINED { napi_get_undefined(env, &returnValue); return returnValue; }
#define THROW_ERROR(message) { napi_throw_error(env, NULL, message); napi_get_undefined(env, &returnValue); return returnValue; }
#define EXPORT_NAPI_FUNCTION(name, func) { napi_property_descriptor desc = { name, 0, func, 0, 0, 0, (napi_property_attributes) (napi_writable | napi_configurable), 0 };\
	napi_define_properties(env, exports, 1, &desc); }
#define EXPORT_FUNCTION_ADDRESS(name, func) { \
	napi_value address;\
	void* f = (void*) func;\
	napi_create_double(env, *((double*) &f), &address);\
	napi_property_descriptor desc = { name, 0, 0, 0, 0, address, (napi_property_attributes) (napi_writable | napi_configurable), 0 };\
	napi_define_properties(env, exports, 1, &desc); }

#ifdef _WIN32

int pthread_mutex_init(pthread_mutex_t *mutex, pthread_mutexattr_t *attr);
int pthread_mutex_destroy(pthread_mutex_t *mutex);
int pthread_mutex_lock(pthread_mutex_t *mutex);
int pthread_mutex_unlock(pthread_mutex_t *mutex);

int pthread_cond_init(pthread_cond_t *cond, pthread_condattr_t *attr);
int pthread_cond_destroy(pthread_cond_t *cond);
int pthread_cond_wait(pthread_cond_t *cond, pthread_mutex_t *mutex);
int pthread_cond_signal(pthread_cond_t *cond);
int pthread_cond_broadcast(pthread_cond_t *cond);

#endif

int cond_timedwait(pthread_cond_t *cond, pthread_mutex_t *mutex, uint64_t ns);

#endif /* __CPTHREAD_H__ */

class Logging {
  public:
	static int debugLogging;
	static int initLogging();
};

enum class LmdbKeyType {

	// Invalid key (used internally by lmdb-js)
	InvalidKey = -1,
	
	// Default key (used internally by lmdb-js)
	DefaultKey = 0,

	// UCS-2/UTF-16 with zero terminator - Appears to V8 as string
	StringKey = 1,
	
	// LMDB fixed size integer key with 32 bit keys - Appearts to V8 as an Uint32
	Uint32Key = 2,
	
	// LMDB default key format - Appears to V8 as node::Buffer
	BinaryKey = 3,

};
enum class KeyCreation {
	Reset = 0,
	Continue = 1,
	InArray = 2,
};
const int THEAD_MEMORY_THRESHOLD = 4000;

class TxnWrap;
class DbiWrap;
class EnvWrap;
class CursorWrap;
class Compression;

// Exports misc stuff to the module
void setupExportMisc(Env env, Object exports);

// Helper callback
typedef void (*argtokey_callback_t)(MDB_val &key);

void consoleLog(Value val);
void consoleLog(const char *msg);
void consoleLogN(int n);
void setFlagFromValue(int *flags, int flag, const char *name, bool defaultValue, Object options);
void writeValueToEntry(const Value &str, MDB_val *val);
LmdbKeyType keyTypeFromOptions(const Value &val, LmdbKeyType defaultKeyType = LmdbKeyType::DefaultKey);
bool getVersionAndUncompress(MDB_val &data, DbiWrap* dw);
int compareFast(const MDB_val *a, const MDB_val *b);
Value setGlobalBuffer(const CallbackInfo& info);
Value lmdbError(const CallbackInfo& info);
napi_value createBufferForAddress(napi_env env, napi_callback_info info);
napi_value getViewAddress(napi_env env, napi_callback_info info);
napi_value detachBuffer(napi_env env, napi_callback_info info);
Value getAddress(const CallbackInfo& info);
Value lmdbNativeFunctions(const CallbackInfo& info);
Value enableDirectV8(const CallbackInfo& info);

#ifndef thread_local
#ifdef __GNUC__
# define thread_local __thread
#elif __STDC_VERSION__ >= 201112L
# define thread_local _Thread_local
#elif defined(_MSC_VER)
# define thread_local __declspec(thread)
#else
# define thread_local
#endif
#endif

bool valToBinaryFast(MDB_val &data, DbiWrap* dw);
Value valToUtf8(Env env, MDB_val &data);
Value valToString(MDB_val &data);
Value valToStringUnsafe(MDB_val &data);
Value valToBinary(MDB_val &data);
Value valToBinaryUnsafe(MDB_val &data, DbiWrap* dw, Env env);

int putWithVersion(MDB_txn* txn,
		MDB_dbi	 dbi,
		MDB_val *   key,
		MDB_val *   data,
		unsigned int	flags, double version);

Napi::Value throwLmdbError(Napi::Env env, int rc);
Napi::Value throwError(Napi::Env env, const char* message);

class TxnWrap;
class DbiWrap;
class EnvWrap;
class CursorWrap;
class SharedEnv {
  public:
	MDB_env* env;
	uint64_t dev;
	uint64_t inode;
	int count;
};

const int INTERRUPT_BATCH = 9998;
const int WORKER_WAITING = 9997;
const int RESTART_WORKER_TXN = 9999;
const int RESUME_BATCH = 9996;
const int USER_HAS_LOCK = 9995;
const int SEPARATE_FLUSHED = 1;
const int DELETE_ON_CLOSE = 2;

class WriteWorker {
  public:
	WriteWorker(MDB_env* env, EnvWrap* envForTxn, uint32_t* instructions);
	void Write();
	MDB_txn* txn;
	MDB_txn* AcquireTxn(int* flags);
	void UnlockTxn();
	int WaitForCallbacks(MDB_txn** txn, bool allowCommit, uint32_t* target);
	virtual void ReportError(const char* error);
	virtual void SendUpdate();
	int interruptionStatus;
	bool finishedProgress;
	bool hasError;
	EnvWrap* envForTxn;
	virtual ~WriteWorker();
	uint32_t* instructions;
	int progressStatus;
	MDB_env* env;
	static int DoWrites(MDB_txn* txn, EnvWrap* envForTxn, uint32_t* instruction, WriteWorker* worker);
};
class AsyncWriteWorker : public WriteWorker, public AsyncProgressWorker<char> {
  public:
	AsyncWriteWorker(MDB_env* env, EnvWrap* envForTxn, uint32_t* instructions, const Function& callback);
	void Execute(const AsyncProgressWorker::ExecutionProgress& execution);
	void OnProgress(const char* data, size_t count);
	void OnOK();
	void ReportError(const char* error);
	void SendUpdate();
  private:
	ExecutionProgress* executionProgress;
};
class TxnTracked {
  public:
	TxnTracked(MDB_txn *txn, unsigned int flags);
	~TxnTracked();
	unsigned int flags;
	MDB_txn *txn;
	TxnTracked *parent;
};

/*
	`Env`
	Represents a database environment.
	(Wrapper for `MDB_env`)
*/
typedef struct env_tracking_t {
	pthread_mutex_t* envsLock;
	std::vector<SharedEnv> envs;
} env_tracking_t;

class EnvWrap : public ObjectWrap<EnvWrap> {
private:
	// List of open read transactions
	std::vector<TxnWrap*> readTxns;
	static env_tracking_t* initTracking();
	napi_env napiEnv;
	// compression settings and space
	Compression *compression;
	static thread_local std::vector<EnvWrap*>* openEnvWraps;

	// Cleans up stray transactions
	void cleanupStrayTxns();
    static void cleanupEnvWraps(void* data);

	friend class TxnWrap;
	friend class DbiWrap;

public:
	EnvWrap(const CallbackInfo&);
	~EnvWrap();
	// The wrapped object
	MDB_env *env;
	// Current write transaction
	static env_tracking_t* envTracking;
	TxnWrap *currentWriteTxn;
	TxnTracked *writeTxn;
	pthread_mutex_t* writingLock;
	pthread_cond_t* writingCond;
	std::vector<AsyncWorker*> workers;

	MDB_txn* currentReadTxn;
	WriteWorker* writeWorker;
	bool readTxnRenewed;
	unsigned int jsFlags;
	char* keyBuffer;
	int pageSize;
	MDB_txn* getReadTxn();

	// Sets up exports for the Env constructor
	static void setupExports(Napi::Env env, Object exports);
	void closeEnv();
	int openEnv(int flags, int jsFlags, const char* path, char* keyBuffer, Compression* compression, int maxDbs,
		int maxReaders, mdb_size_t mapSize, int pageSize, char* encryptionKey);
	
	/*
		Gets statistics about the database environment.
	*/
	Napi::Value stat(const CallbackInfo& info);

	/*
		Gets statistics about the free space database
	*/
	Napi::Value freeStat(const CallbackInfo& info);
	
	/*
		Gets information about the database environment.
	*/
	Napi::Value info(const CallbackInfo& info);
	/*
		Check for stale readers
	*/
	Napi::Value readerCheck(const CallbackInfo& info);
	/*
		Print a list of readers
	*/
	Napi::Value readerList(const CallbackInfo& info);

	/*
		Opens the database environment with the specified options. The options will be used to configure the environment before opening it.
		(Wrapper for `mdb_env_open`)

		Parameters:

		* Options object that contains possible configuration options.

		Possible options are:

		* maxDbs: the maximum number of named databases you can have in the environment (default is 1)
		* maxReaders: the maximum number of concurrent readers of the environment (default is 126)
		* mapSize: maximal size of the memory map (the full environment) in bytes (default is 10485760 bytes)
		* path: path to the database environment
	*/
	Napi::Value open(const CallbackInfo& info);
	Napi::Value getMaxKeySize(const CallbackInfo& info);

	/*
		Copies the database environment to a file.
		(Wrapper for `mdb_env_copy2`)

		Parameters:

		* path - Path to the target file
		* compact (optional) - Copy using compact setting
		* callback - Callback when finished (this is performed asynchronously)
	*/
	Napi::Value copy(const CallbackInfo& info);	

	/*
		Closes the database environment.
		(Wrapper for `mdb_env_close`)
	*/
	Napi::Value close(const CallbackInfo& info);

	/*
		Starts a new transaction in the environment.
		(Wrapper for `mdb_txn_begin`)

		Parameters:

		* Options object that contains possible configuration options.

		Possible options are:

		* readOnly: if true, the transaction is read-only
	*/
	Napi::Value beginTxn(const CallbackInfo& info);
	Napi::Value commitTxn(const CallbackInfo& info);
	Napi::Value abortTxn(const CallbackInfo& info);

	/*
		Flushes all data to the disk asynchronously.
		(Asynchronous wrapper for `mdb_env_sync`)

		Parameters:

		* Callback to be executed after the sync is complete.
	*/
	Napi::Value sync(const CallbackInfo& info);

	/*
		Performs a set of operations asynchronously, automatically wrapping it in its own transaction

		Parameters:

		* Callback to be executed after the sync is complete.
	*/
	Napi::Value startWriting(const CallbackInfo& info);
	static napi_value compress(napi_env env, napi_callback_info info);
	static napi_value write(napi_env env, napi_callback_info info);
	static napi_value onExit(napi_env env, napi_callback_info info);
	Napi::Value resetCurrentReadTxn(const CallbackInfo& info);
};

const int TXN_ABORTABLE = 1;
const int TXN_SYNCHRONOUS_COMMIT = 2;
const int TXN_FROM_WORKER = 4;

/*
	`Txn`
	Represents a transaction running on a database environment.
	(Wrapper for `MDB_txn`)
*/
class TxnWrap : public ObjectWrap<TxnWrap> {
private:

	// Reference to the MDB_env of the wrapped MDB_txn
	MDB_env *env;

	// Environment wrapper of the current transaction
	EnvWrap *ew;
	// parent TW, if it is exists
	TxnWrap *parentTw;
	
	// Flags used with mdb_txn_begin
	unsigned int flags;

	friend class CursorWrap;
	friend class DbiWrap;
	friend class EnvWrap;

public:
	TxnWrap(const CallbackInfo& info);
	~TxnWrap();

	// The wrapped object
	MDB_txn *txn;

	// Remove the current TxnWrap from its EnvWrap
	void removeFromEnvWrap();
	int begin(EnvWrap *ew, unsigned int flags);

	/*
		Commits the transaction.
		(Wrapper for `mdb_txn_commit`)
	*/
	Napi::Value commit(const CallbackInfo& info);

	/*
		Aborts the transaction.
		(Wrapper for `mdb_txn_abort`)
	*/
	Napi::Value abort(const CallbackInfo& info);

	/*
		Aborts a read-only transaction but makes it renewable with `renew`.
		(Wrapper for `mdb_txn_reset`)
	*/
	void reset();
	/*
		Renews a read-only transaction after it has been reset.
		(Wrapper for `mdb_txn_renew`)
	*/
	Napi::Value renew(const CallbackInfo& info);
	static void setupExports(Napi::Env env, Object exports);
};

const int HAS_VERSIONS = 0x1000;
/*
	`Dbi`
	Represents a database instance in an environment.
	(Wrapper for `MDB_dbi`)
*/
class DbiWrap : public ObjectWrap<DbiWrap> {
public:
	// Tells how keys should be treated
	LmdbKeyType keyType;
	// Stores flags set when opened
	int flags;
	// The wrapped object
	MDB_dbi dbi;
	// Reference to the MDB_env of the wrapped MDB_dbi
	MDB_env *env;
	// The EnvWrap object of the current Dbi
	EnvWrap *ew;
	// Whether the Dbi was opened successfully
	bool isOpen;
	// compression settings and space
	Compression* compression;
	// versions stored in data
	bool hasVersions;
	// current unsafe buffer for this db
	bool getFast;

	friend class TxnWrap;
	friend class CursorWrap;
	friend class EnvWrap;

	DbiWrap(const CallbackInfo& info);
	~DbiWrap();

	/*
		Closes the database instance.
		Wrapper for `mdb_dbi_close`)
	*/
	Napi::Value close(const CallbackInfo& info);

	/*
		Drops the database instance, either deleting it completely (default) or just freeing its pages.

		Parameters:

		* Options object that contains possible configuration options.

		Possible options are:

		* justFreePages - indicates that the database pages need to be freed but the database shouldn't be deleted

	*/
	Napi::Value drop(const CallbackInfo& info);

	Napi::Value stat(const CallbackInfo& info);
	int prefetch(uint32_t* keys);
	int open(int flags, char* name, bool hasVersions, LmdbKeyType keyType, Compression* compression);
	int32_t doGetByBinary(uint32_t keySize);
	static void setupExports(Napi::Env env, Object exports);
};

class Compression : public ObjectWrap<Compression> {
public:
	char* dictionary; // dictionary to use to decompress
	char* compressDictionary; // separate dictionary to use to compress since the decompression dictionary can move around in the main thread
	unsigned int dictionarySize;
	char* decompressTarget;
	unsigned int decompressSize;
	unsigned int compressionThreshold;
	// compression acceleration (defaults to 1)
	int acceleration;
	static thread_local LZ4_stream_t* stream;
	void decompress(MDB_val& data, bool &isValid, bool canAllocate);
	argtokey_callback_t compress(MDB_val* value, argtokey_callback_t freeValue);
	int compressInstruction(EnvWrap* env, double* compressionAddress);
	Napi::Value ctor(const CallbackInfo& info);
	Napi::Value setBuffer(const CallbackInfo& info);
	Compression(const CallbackInfo& info);
	friend class EnvWrap;
	friend class DbiWrap;
	//NAN_METHOD(Compression::startCompressing);
	static void setupExports(Napi::Env env, Object exports);
};

/*
	`Cursor`
	Represents a cursor instance that is assigned to a transaction and a database instance
	(Wrapper for `MDB_cursor`)
*/
class CursorWrap : public ObjectWrap<CursorWrap> {

private:

	// Key/data pair where the cursor is at, and ending key
	MDB_val key, data, endKey;
	// Free function for the current key
	argtokey_callback_t freeKey;

public:
	MDB_cursor_op iteratingOp;	
	MDB_cursor *cursor;
	// Stores how key is represented
	LmdbKeyType keyType;
	int flags;
	DbiWrap *dw;
	MDB_txn *txn;

	// The wrapped object
	CursorWrap(MDB_cursor* cursor);
	CursorWrap(const CallbackInfo& info);
	~CursorWrap();

	// Sets up exports for the Cursor constructor
	static void setupExports(Napi::Env env, Object exports);

	/*
		Closes the cursor.
		(Wrapper for `mdb_cursor_close`)

		Parameters:

		* Transaction object
		* Database instance object
	*/
	Napi::Value close(const CallbackInfo& info);
	/*
		Deletes the key/data pair to which the cursor refers.
		(Wrapper for `mdb_cursor_del`)
	*/
	Napi::Value del(const CallbackInfo& info);

	int returnEntry(int lastRC, MDB_val &key, MDB_val &data);
	int32_t doPosition(uint32_t offset, uint32_t keySize, uint64_t endKeyAddress);
	//Value getStringByBinary(const CallbackInfo& info);
};

#endif // NODE_LMDB_H
