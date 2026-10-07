#include "lmdb-js.h"
#ifndef _WIN32
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#endif
using namespace Napi;

#define IGNORE_NOTFOUND	(1)

env_tracking_t* EnvWrap::envTracking = EnvWrap::initTracking();

env_tracking_t* EnvWrap::initTracking() {
	env_tracking_t* tracking = new env_tracking_t;
	tracking->envsLock = new pthread_mutex_t;
	pthread_mutex_init(tracking->envsLock, nullptr);
	return tracking;
}
thread_local std::vector<EnvWrap*>* EnvWrap::openEnvWraps = nullptr;
void EnvWrap::cleanupEnvWraps(void* data) {
	if (openEnvWraps)
		free(openEnvWraps);
	else
		fprintf(stderr, "How do we end up cleanup env wraps that don't exist?\n");
	openEnvWraps = nullptr;
}
EnvWrap::EnvWrap(const CallbackInfo& info) : ObjectWrap<EnvWrap>(info) {
	int rc;
	rc = mdb_env_create(&(this->env));

	if (rc != 0) {
		mdb_env_close(this->env);
		throwLmdbError(info.Env(), rc);
		return;
	}

	this->currentWriteTxn = nullptr;
	this->currentReadTxn = nullptr;
	this->writeTxn = nullptr;
	this->writeWorker = nullptr;
	this->readTxnRenewed = false;
	this->writingLock = new pthread_mutex_t;
	this->writingCond = new pthread_cond_t;
	info.This().As<Object>().Set("address", Number::New(info.Env(), (size_t) this));
	pthread_mutex_init(this->writingLock, nullptr);
	pthread_cond_init(this->writingCond, nullptr);
}
MDB_env* foundEnv;
const int EXISTING_ENV_FOUND = 10;
int checkExistingEnvs(mdb_filehandle_t fd, MDB_env* env) {
	uint64_t inode, dev;
	#ifdef _WIN32
	BY_HANDLE_FILE_INFORMATION fileInformation;
	if (GetFileInformationByHandle(fd, &fileInformation)) {
		dev = fileInformation.dwVolumeSerialNumber;
		inode = ((uint64_t) fileInformation.nFileIndexHigh << 32) | fileInformation.nFileIndexLow;
	} else
		return MDB_NOTFOUND;
	#else
	struct stat sb;
	if (fstat(fd, &sb) == 0) {
		dev = sb.st_dev;
		inode = sb.st_ino;
	} else
		return MDB_NOTFOUND;
	#endif
	for (auto envRef = EnvWrap::envTracking->envs.begin(); envRef != EnvWrap::envTracking->envs.end();) {
		if (envRef->dev == dev && envRef->inode == inode) {
			envRef->count++;
			foundEnv = envRef->env;
			return EXISTING_ENV_FOUND;
		}
		++envRef;
	}
	SharedEnv envRef;
	envRef.dev = dev;
	envRef.inode = inode;
	envRef.env = env;
	envRef.count = 1;
	EnvWrap::envTracking->envs.push_back(envRef);
	return 0;
}

EnvWrap::~EnvWrap() {
	// Close if not closed already
	closeEnv();
	pthread_mutex_destroy(this->writingLock);
	pthread_cond_destroy(this->writingCond);
	
}

void EnvWrap::cleanupStrayTxns() {
	if (this->currentWriteTxn) {
		mdb_txn_abort(this->currentWriteTxn->txn);
		this->currentWriteTxn->removeFromEnvWrap();
	}
/*	while (this->workers.size()) { // enable this if we do need to do worker cleanup
		AsyncWorker *worker = *this->workers.begin();
		fprintf(stderr, "Deleting running worker\n");
		delete worker;
	}*/
	while (this->readTxns.size()) {
		TxnWrap *tw = *this->readTxns.begin();
		mdb_txn_abort(tw->txn);
		tw->removeFromEnvWrap();
	}
}

class SyncWorker : public AsyncWorker {
  public:
	SyncWorker(EnvWrap* env, const Function& callback)
	 : AsyncWorker(callback), env(env) {
		//env->workers.push_back(this);
	 }
	/*~SyncWorker() {
		for (auto workerRef = env->workers.begin(); workerRef != env->workers.end(); ) {
			if (this == *workerRef) {
				env->workers.erase(workerRef);
			}
		}
	}*/
	void OnOK() {
		napi_value result; // we use direct napi call here because node-addon-api interface with throw a fatal error if a worker thread is terminating
		napi_call_function(Env(), Env().Undefined(), Callback().Value(), 0, {}, &result);
	}

	void Execute() {
        #ifdef _WIN32
        int rc = mdb_env_sync(env->env, 1);
        #else
        int retries = 0;
        retry:
        int rc = mdb_env_sync(env->env, 1);
        if (rc == EINVAL) {
            if (retries++ < 10) {
                sleep(1);
                goto retry;
            }
            return SetError("Invalid parameter, which is often due to more transactions than available robust locked mutexes or semaphors (see docs for more info)");
        }
        #endif
		if (rc != 0) {
			SetError(mdb_strerror(rc));
		}
	}

  private:
	EnvWrap* env;
};

class CopyWorker : public AsyncWorker {
  public:
	CopyWorker(MDB_env* env, std::string inPath, int flags, const Function& callback)
	 : AsyncWorker(callback), env(env), path(inPath), flags(flags) {
	 }
	~CopyWorker() {
		//free(path);
	}

	void Execute() {
		int rc = mdb_env_copy2(env, path.c_str(), flags);
		if (rc != 0) {
			fprintf(stderr, "Error on copy code: %u\n", rc);
			SetError("Error on copy");
		}
	}

  private:
	MDB_env* env;
	std::string path;
	int flags;
};
MDB_txn* EnvWrap::getReadTxn() {
	MDB_txn* txn = writeTxn ? writeTxn->txn : nullptr;
	if (txn)
		return txn;
	txn = currentReadTxn;
	if (readTxnRenewed)
		return txn;
	if (txn) {
		if (mdb_txn_renew(txn))
			return nullptr; // if there was an error, signal with nullptr and let error propagate with last_error 
	} else {
		fprintf(stderr, "No current read transaction available");
		return nullptr;
	}
	readTxnRenewed = true;
	return txn;
}

#ifdef MDB_RPAGE_CACHE
static int encfunc(const MDB_val* src, MDB_val* dst, const MDB_val* key, int encdec)
{
	chacha8(src->mv_data, src->mv_size, (uint8_t*) key[0].mv_data, (uint8_t*) key[1].mv_data, (char*)dst->mv_data);
	return 0;
}
#endif

void cleanup(void* data) {
	((EnvWrap*) data)->closeEnv();
}

Napi::Value EnvWrap::open(const CallbackInfo& info) {
	int rc;
	// Get the wrapper
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}
	Object options = info[0].As<Object>();
	int flags = info[1].As<Number>();
	int jsFlags = info[2].As<Number>();

	Compression* compression = nullptr;
	Napi::Value compressionOption = options.Get("compression");
	if (compressionOption.IsObject()) {
		napi_unwrap(info.Env(), compressionOption, (void**)&compression);
		this->compression = compression;
	}
	void* keyBuffer;
	Napi::Value keyBytesValue = options.Get("keyBytes");
	if (!keyBytesValue.IsTypedArray())
		fprintf(stderr, "Invalid key buffer\n");
	size_t keyBufferLength;
	napi_get_typedarray_info(info.Env(), keyBytesValue, nullptr, &keyBufferLength, &keyBuffer, nullptr, nullptr);
	setFlagFromValue(&jsFlags, SEPARATE_FLUSHED, "separateFlushed", false, options);
	String path = options.Get("path").As<String>();
	std::string pathString = path.Utf8Value();
	// Parse the maxDbs option
	int maxDbs = 12;
	Napi::Value option = options.Get("maxDbs");
	if (option.IsNumber())
		maxDbs = option.As<Number>();

	mdb_size_t mapSize = 0;
	// Parse the mapSize option
	option = options.Get("mapSize");
	if (option.IsNumber())
		mapSize = option.As<Number>().Int64Value();
	int pageSize = 4096;
	// Parse the mapSize option
	option = options.Get("pageSize");
	if (option.IsNumber())
		pageSize = option.As<Number>();
	int maxReaders = 126;
	// Parse the mapSize option
	option = options.Get("maxReaders");
	if (option.IsNumber())
		maxReaders = option.As<Number>();

	Napi::Value encryptionKey = options.Get("encryptionKey");
	std::string encryptKey;
	if (!encryptionKey.IsUndefined()) {
		encryptKey = encryptionKey.As<String>().Utf8Value();
		if (encryptKey.length() != 32) {
			return throwError(info.Env(), "Encryption key must be 32 bytes long");
		}
		#ifndef MDB_RPAGE_CACHE
		return throwError(info.Env(), "Encryption not supported with data format version 1");
		#endif
	}

	napiEnv = info.Env();
	rc = openEnv(flags, jsFlags, (const char*)pathString.c_str(), (char*) keyBuffer, compression, maxDbs, maxReaders, mapSize, pageSize, encryptKey.empty() ? nullptr : (char*)encryptKey.c_str());
	//delete[] pathBytes;
	if (rc < 0)
		return throwLmdbError(info.Env(), rc);
	napi_add_env_cleanup_hook(napiEnv, cleanup, this);
	return info.Env().Undefined();
}
int EnvWrap::openEnv(int flags, int jsFlags, const char* path, char* keyBuffer, Compression* compression, int maxDbs,
		int maxReaders, mdb_size_t mapSize, int pageSize, char* encryptionKey) {
	this->keyBuffer = keyBuffer;
	this->compression = compression;
	this->jsFlags = jsFlags;

	int rc;
	rc = mdb_env_set_maxdbs(env, maxDbs);
	if (rc) goto fail;
	rc = mdb_env_set_maxreaders(env, maxReaders);
	if (rc) goto fail;
	rc = mdb_env_set_mapsize(env, mapSize);
	if (rc) goto fail;
	#ifdef MDB_RPAGE_CACHE
	rc = mdb_env_set_pagesize(env, pageSize);
	if (rc) goto fail;
	#endif
	if ((size_t) encryptionKey > 100) {
		MDB_val enckey;
		enckey.mv_data = encryptionKey;
		enckey.mv_size = 32;
		#ifdef MDB_RPAGE_CACHE
		rc = mdb_env_set_encrypt(env, encfunc, &enckey, 0);
		#else
		rc = -1;
		#endif
		if (rc != 0) goto fail;
	}

	if (flags & MDB_OVERLAPPINGSYNC) {
		flags |= MDB_PREVSNAPSHOT;
	}

	if (flags & MDB_NOLOCK) {
		fprintf(stderr, "You chose to use MDB_NOLOCK which is not officially supported by node-lmdb. You have been warned!\n");
	}
	mdb_env_set_check_fd(env, checkExistingEnvs);

	// Set MDB_NOTLS to enable multiple read-only transactions on the same thread (in this case, the nodejs main thread)
	flags |= MDB_NOTLS;
	// TODO: make file attributes configurable
	// *String::Utf8Value(Isolate::GetCurrent(), path)
	pthread_mutex_lock(envTracking->envsLock);
	rc = mdb_env_open(env, path, flags, 0664);

	if (rc != 0) {
		mdb_env_close(env);
		if (rc == EXISTING_ENV_FOUND) {
			env = foundEnv;
		} else
			goto fail;
	}
	mdb_env_get_flags(env, (unsigned int*) &flags);
	if ((jsFlags & DELETE_ON_CLOSE) || (flags & MDB_OVERLAPPINGSYNC)) {
		if (!openEnvWraps) {
			openEnvWraps = new std::vector<EnvWrap*>;
			napi_add_env_cleanup_hook(napiEnv, cleanupEnvWraps, nullptr);
		}
		openEnvWraps->push_back(this);
	}
	pthread_mutex_unlock(envTracking->envsLock);
	return 0;

	fail:
	pthread_mutex_unlock(envTracking->envsLock);
	env = nullptr;
	return rc;
}
Napi::Value EnvWrap::getMaxKeySize(const CallbackInfo& info) {
	return Number::New(info.Env(), mdb_env_get_maxkeysize(this->env));
}
NAPI_FUNCTION(getEnvFlags) {
	ARGS(1)
	GET_INT64_ARG(0);
	EnvWrap* ew = (EnvWrap*) i64;
	unsigned int envFlags;
	mdb_env_get_flags(ew->env, &envFlags);
	RETURN_UINT32(envFlags);
}

NAPI_FUNCTION(setJSFlags) {
	ARGS(2)
	GET_INT64_ARG(0);
    EnvWrap* ew = (EnvWrap*) i64;
    int64_t jsFlags;
    napi_get_value_int64(env, args[1], &jsFlags);
	ew->jsFlags = jsFlags;
	RETURN_UNDEFINED;
}

#ifdef _WIN32
// TODO: I think we should switch to DeleteFileW (but have to convert to UTF16)
#define unlink DeleteFileA
#else
#include <unistd.h>
#endif


NAPI_FUNCTION(EnvWrap::onExit) {
	// close all the environments
	if (openEnvWraps) {
		for (auto envWrap : *openEnvWraps)
			envWrap->closeEnv();
	}
	napi_value returnValue;
	RETURN_UNDEFINED;
}
NAPI_FUNCTION(getEnvsPointer) {
	napi_value returnValue;
	napi_create_double(env, (double) (size_t) EnvWrap::envTracking, &returnValue);
	return returnValue;
}

NAPI_FUNCTION(setEnvsPointer) {
	// If another version of lmdb-js is running, switch to using its list of envs
	ARGS(1)
	GET_INT64_ARG(0);
    env_tracking_t* adoptedTracking = (env_tracking_t*) i64;
	// copy any existing ones over to the central one
	adoptedTracking->envs.assign(EnvWrap::envTracking->envs.begin(), EnvWrap::envTracking->envs.end());
	EnvWrap::envTracking = adoptedTracking;
	RETURN_UNDEFINED;
}

void EnvWrap::closeEnv() {
	if (!env)
		return;
	if (openEnvWraps) {
		for (auto ewRef = openEnvWraps->begin(); ewRef != openEnvWraps->end(); ) {
			if (*ewRef == this) {
				openEnvWraps->erase(ewRef);
				break;
			}
			++ewRef;
		}
	}
	napi_remove_env_cleanup_hook(napiEnv, cleanup, this);
	cleanupStrayTxns();
	pthread_mutex_lock(envTracking->envsLock);
	for (auto envPath = envTracking->envs.begin(); envPath != envTracking->envs.end(); ) {
		if (envPath->env == env) {
			envPath->count--;
			if (envPath->count <= 0) {
				// last thread using it, we can really close it now
				unsigned int envFlags; // This is primarily useful for detecting termination of threads and sync'ing on their termination
				mdb_env_get_flags(env, &envFlags);
				if (envFlags & MDB_OVERLAPPINGSYNC) {
					mdb_env_sync(env, 1);
				}
				char* path;
				mdb_env_get_path(env, (const char**)&path);
				path = strdup(path);
				mdb_env_close(env);
				if (jsFlags & DELETE_ON_CLOSE) {
					unlink(path);
					//unlink(strcat(envPath->path, "-lock"));
				}
				envTracking->envs.erase(envPath);
			}
			break;
		}
		++envPath;
	}
	pthread_mutex_unlock(envTracking->envsLock);
	env = nullptr;
}

Napi::Value EnvWrap::close(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}
	this->closeEnv();
	return info.Env().Undefined();
}

Napi::Value EnvWrap::stat(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}
	int rc;
	MDB_stat stat;

	rc = mdb_env_stat(this->env, &stat);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	Object stats = Object::New(info.Env());
	stats.Set("pageSize", Number::New(info.Env(), stat.ms_psize));
	stats.Set("treeDepth", Number::New(info.Env(), stat.ms_depth));
	stats.Set("treeBranchPageCount", Number::New(info.Env(), stat.ms_branch_pages));
	stats.Set("treeLeafPageCount", Number::New(info.Env(), stat.ms_leaf_pages));
	stats.Set("entryCount", Number::New(info.Env(), stat.ms_entries));
	stats.Set("overflowPages", Number::New(info.Env(), stat.ms_overflow_pages));
	return stats;
}

Napi::Value EnvWrap::freeStat(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(),"The environment is already closed.");
	}
	int rc;
	MDB_stat stat;
	TxnWrap *txn;
	napi_unwrap(info.Env(), info[0], (void**)&txn);
	rc = mdb_stat(txn->txn, 0, &stat);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	Object stats = Object::New(info.Env());
	stats.Set("pageSize", Number::New(info.Env(), stat.ms_psize));
	stats.Set("treeDepth", Number::New(info.Env(), stat.ms_depth));
	stats.Set("treeBranchPageCount", Number::New(info.Env(), stat.ms_branch_pages));
	stats.Set("treeLeafPageCount", Number::New(info.Env(), stat.ms_leaf_pages));
	stats.Set("entryCount", Number::New(info.Env(), stat.ms_entries));
	stats.Set("overflowPages", Number::New(info.Env(), stat.ms_overflow_pages));
	return stats;
}

Napi::Value EnvWrap::info(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(),"The environment is already closed.");
	}
	int rc;
	MDB_envinfo envinfo;

	rc = mdb_env_info(this->env, &envinfo);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	Object stats = Object::New(info.Env());
	stats.Set("mapSize", Number::New(info.Env(), envinfo.me_mapsize));
	stats.Set("lastPageNumber", Number::New(info.Env(), envinfo.me_last_pgno));
	stats.Set("lastTxnId", Number::New(info.Env(), envinfo.me_last_txnid));
	stats.Set("maxReaders", Number::New(info.Env(), envinfo.me_maxreaders));
	stats.Set("numReaders", Number::New(info.Env(), envinfo.me_numreaders));
	return stats;
}

Napi::Value EnvWrap::readerCheck(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}

	int rc, dead;
	rc = mdb_reader_check(this->env, &dead);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	return Number::New(info.Env(), dead);
}

Array readerStrings;
MDB_msg_func* printReaders = ([](const char* message, void* env) -> int {
	readerStrings.Set(readerStrings.Length(), String::New(*(Env*)env, message));
	return 0;
});

Napi::Value EnvWrap::readerList(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}
	readerStrings = Array::New(info.Env());
	int rc;
	Napi::Env env = info.Env();
	rc = mdb_reader_list(this->env, printReaders, &env);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	return readerStrings;
}


Napi::Value EnvWrap::copy(const CallbackInfo& info) {
	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}

	// Check that the correct number/type of arguments was given.
	if (!info[0].IsString()) {
		return throwError(info.Env(), "Call env.copy(path, compact?, callback) with a file path.");
	}
	if (!info[info.Length() - 1].IsFunction()) {
		return throwError(info.Env(), "Call env.copy(path, compact?, callback) with a file path.");
	}

	int flags = 0;
	if (info.Length() > 1 && info[1].IsBoolean() && info[1].ToBoolean()) {
		flags = MDB_CP_COMPACT;
	}

	CopyWorker* worker = new CopyWorker(
		this->env, info[0].As<String>().Utf8Value(), flags, info[info.Length()	> 2 ? 2 : 1].As<Function>()
	);
	worker->Queue();
	return info.Env().Undefined();
}

Napi::Value EnvWrap::beginTxn(const CallbackInfo& info) {
	int flags = info[0].As<Number>();
	if (!(flags & MDB_RDONLY)) {
		MDB_env *env = this->env;
		unsigned int envFlags;
		mdb_env_get_flags(env, &envFlags);
		MDB_txn *txn;

		if (this->writeTxn)
			txn = this->writeTxn->txn;
		else if (this->writeWorker) {
			// try to acquire the txn from the current batch
			txn = this->writeWorker->AcquireTxn(&flags);
		} else {
			pthread_mutex_lock(this->writingLock);
			txn = nullptr;
		}

		if (txn) {
			if (flags & TXN_ABORTABLE) {
				if (envFlags & MDB_WRITEMAP)
					flags &= ~TXN_ABORTABLE;
				else {
					// child txn
					mdb_txn_begin(env, txn, flags & 0xf0000, &txn);
					TxnTracked* childTxn = new TxnTracked(txn, flags);
					childTxn->parent = this->writeTxn;
					this->writeTxn = childTxn;
					return info.Env().Undefined();
				}
			}
		} else {
			mdb_txn_begin(env, nullptr, flags & 0xf0000, &txn);
			flags |= TXN_ABORTABLE;
		}
		this->writeTxn = new TxnTracked(txn, flags);
		return info.Env().Undefined();
	}

	if (info.Length() > 1) {
		fprintf(stderr, "Invalid number of arguments");
	} else {
		fprintf(stderr, "Invalid number of arguments");
	}
	return info.Env().Undefined();
}
Napi::Value EnvWrap::commitTxn(const CallbackInfo& info) {
	TxnTracked *currentTxn = this->writeTxn;
	//fprintf(stderr, "commitTxn %p\n", currentTxn);
	int rc = 0;
	if (currentTxn->flags & TXN_ABORTABLE) {
		//fprintf(stderr, "txn_commit\n");
		rc = mdb_txn_commit(currentTxn->txn);
	}
	this->writeTxn = currentTxn->parent;
	if (!this->writeTxn) {
		//fprintf(stderr, "unlock txn\n");
		if (this->writeWorker)
			this->writeWorker->UnlockTxn();
		else
			pthread_mutex_unlock(this->writingLock);
	}
	delete currentTxn;
	if (rc)
		throwLmdbError(info.Env(), rc);
	return info.Env().Undefined();
}
Napi::Value EnvWrap::abortTxn(const CallbackInfo& info) {
	TxnTracked *currentTxn = this->writeTxn;
	if (currentTxn->flags & TXN_ABORTABLE) {
		mdb_txn_abort(currentTxn->txn);
	} else {
		throwError(info.Env(), "Can not abort this transaction");
	}
	this->writeTxn = currentTxn->parent;
	if (!this->writeTxn) {
		if (this->writeWorker)
			this->writeWorker->UnlockTxn();
		else
			pthread_mutex_unlock(this->writingLock);
	}
	delete currentTxn;
	return info.Env().Undefined();
}
/*Napi::Value EnvWrap::openDbi(const CallbackInfo& info) {


	const unsigned argc = 5;
	Local<Value> argv[argc] = { info.This(), info[0], info[1], info[2], info[3] };
	Nan::MaybeLocal<Object> maybeInstance = Nan::NewInstance(Nan::New(*dbiCtor), argc, argv);

	// Check if database could be opened
	if ((maybeInstance.IsEmpty())) {
		// The maybeInstance is empty because the dbiCtor called throwError.
		// No need to call that here again, the user will get the error thrown there.
		return;
	}

	Local<Object> instance = maybeInstance.ToLocalChecked();
	DbiWrap *dw = Nan::ObjectWrap::Unwrap<DbiWrap>(instance);
	if (dw->dbi == (MDB_dbi) 0xffffffff)
		info.GetReturnValue().Set(Nan::Undefined());
	else
		info.GetReturnValue().Set(instance);
}*/

Napi::Value EnvWrap::sync(const CallbackInfo& info) {

	if (!this->env) {
		return throwError(info.Env(), "The environment is already closed.");
	}
	if (info.Length() > 0) {
		SyncWorker* worker = new SyncWorker(this, info[0].As<Function>());
		worker->Queue();
	} else {
		int rc = mdb_env_sync(this->env, 1);
		if (rc != 0) {
			return throwLmdbError(info.Env(), rc);
		}
	}
	return info.Env().Undefined();
}

Napi::Value EnvWrap::resetCurrentReadTxn(const CallbackInfo& info) {
	mdb_txn_reset(this->currentReadTxn);
	this->readTxnRenewed = false;
	return info.Env().Undefined();
}
int32_t writeFFI(double ewPointer, uint64_t instructionAddress) {
	EnvWrap* ew = (EnvWrap*) (size_t) ewPointer;
	int rc;
	if (instructionAddress)
		rc = WriteWorker::DoWrites(ew->writeTxn->txn, ew, (uint32_t*)instructionAddress, nullptr);
	else {
		pthread_cond_signal(ew->writingCond);
		rc = 0;
	}
	return rc;
}


void EnvWrap::setupExports(Napi::Env env, Object exports) {
	// EnvWrap: Prepare constructor template
	Function EnvClass = ObjectWrap<EnvWrap>::DefineClass(env, "Env", {
		EnvWrap::InstanceMethod("open", &EnvWrap::open),
		EnvWrap::InstanceMethod("getMaxKeySize", &EnvWrap::getMaxKeySize),
		EnvWrap::InstanceMethod("close", &EnvWrap::close),
		EnvWrap::InstanceMethod("beginTxn", &EnvWrap::beginTxn),
		EnvWrap::InstanceMethod("commitTxn", &EnvWrap::commitTxn),
		EnvWrap::InstanceMethod("abortTxn", &EnvWrap::abortTxn),
		EnvWrap::InstanceMethod("sync", &EnvWrap::sync),
		EnvWrap::InstanceMethod("startWriting", &EnvWrap::startWriting),
		EnvWrap::InstanceMethod("stat", &EnvWrap::stat),
		EnvWrap::InstanceMethod("freeStat", &EnvWrap::freeStat),
		EnvWrap::InstanceMethod("info", &EnvWrap::info),
		EnvWrap::InstanceMethod("readerCheck", &EnvWrap::readerCheck),
		EnvWrap::InstanceMethod("readerList", &EnvWrap::readerList),
		EnvWrap::InstanceMethod("copy", &EnvWrap::copy),
		//EnvWrap::InstanceMethod("detachBuffer", &EnvWrap::detachBuffer),
		EnvWrap::InstanceMethod("resetCurrentReadTxn", &EnvWrap::resetCurrentReadTxn),
	});
	EXPORT_NAPI_FUNCTION("compress", compress);
	EXPORT_NAPI_FUNCTION("write", write);
	EXPORT_NAPI_FUNCTION("onExit", onExit);
	EXPORT_NAPI_FUNCTION("getEnvsPointer", getEnvsPointer);
	EXPORT_NAPI_FUNCTION("setEnvsPointer", setEnvsPointer);
	EXPORT_NAPI_FUNCTION("getEnvFlags", getEnvFlags);
	EXPORT_NAPI_FUNCTION("setJSFlags", setJSFlags);
	EXPORT_FUNCTION_ADDRESS("writePtr", writeFFI);
	//envTpl->InstanceTemplate()->SetInternalFieldCount(1);
	exports.Set("Env", EnvClass);
}

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

