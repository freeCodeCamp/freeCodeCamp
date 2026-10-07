#include "lmdb-js.h"

using namespace Napi;

TxnTracked::TxnTracked(MDB_txn *txn, unsigned int flags) {
	this->txn = txn;
	this->flags = flags;
	parent = nullptr;
}

TxnTracked::~TxnTracked() {
	this->txn = nullptr;
}

TxnWrap::TxnWrap(const Napi::CallbackInfo& info) : ObjectWrap<TxnWrap>(info) {
	EnvWrap *ew;
	napi_unwrap(info.Env(), info[0], (void**)&ew);
	int flags = 0;
	TxnWrap *parentTw;
	if (info[1].IsBoolean() && ew->writeWorker) { // this is from a transaction callback
		txn = ew->writeWorker->AcquireTxn(&flags);
		parentTw = nullptr;
	} else {
		if (info[1].IsObject()) {
			Object options = info[1].As<Object>();

			// Get flags from options

			setFlagFromValue(&flags, MDB_RDONLY, "readOnly", false, options);
		} else if (info[1].IsNumber()) {
			flags = info[1].As<Number>();
		}
		MDB_txn *parentTxn;
		if (info[2].IsObject()) {
			napi_unwrap(info.Env(), info[2], (void**) &parentTw);
			parentTxn = parentTw->txn;
		} else {
			parentTxn = nullptr;
			parentTw = nullptr;
			// Check existence of current write transaction
			if (0 == (flags & MDB_RDONLY)) {
				if (ew->currentWriteTxn != nullptr) {
					throwError(info.Env(), "You have already opened a write transaction in the current process, can't open a second one.");
					return;
				}
				//fprintf(stderr, "begin sync txn");
				auto writeWorker = ew->writeWorker;
				if (writeWorker) {
					parentTxn = writeWorker->AcquireTxn(&flags); // see if we have a paused transaction
					// else we create a child transaction from the current batch transaction. TODO: Except in WRITEMAP mode, where we need to indicate that the transaction should not be committed
				}
			}
		}
		//fprintf(stderr, "txn_begin from txn.cpp %u %p\n", flags, parentTxn);
		int rc = mdb_txn_begin(ew->env, parentTxn, flags, &txn);
		if (rc != 0) {
			txn = nullptr;
			if (rc == EINVAL) {
				throwError(info.Env(), "Invalid parameter, which on MacOS is often due to more transactions than available robust locked semaphors (see docs for more info)");
				return;
			}
			throwLmdbError(info.Env(), rc);
			return;
		}
	}

	// Set the current write transaction
	if (0 == (flags & MDB_RDONLY)) {
		ew->currentWriteTxn = this;
	}
	else {
		ew->readTxns.push_back(this);
		ew->currentReadTxn = txn;
	}
	this->parentTw = parentTw;
	this->flags = flags;
	this->ew = ew;
	this->env = ew->env;
	info.This().As<Object>().Set("address", Number::New(info.Env(), (size_t) this));
}

TxnWrap::~TxnWrap() {
	// Close if not closed already
	if (this->txn) {
		mdb_txn_abort(txn);
		this->removeFromEnvWrap();
	}
}

void TxnWrap::removeFromEnvWrap() {
	if (this->ew) {
		if (this->ew->currentWriteTxn == this) {
			this->ew->currentWriteTxn = this->parentTw;
		}
		else {
			auto it = std::find(ew->readTxns.begin(), ew->readTxns.end(), this);
			if (it != ew->readTxns.end()) {
				ew->readTxns.erase(it);
			}
		}
		this->ew = nullptr;
	}
	this->txn = nullptr;
}

int TxnWrap::begin(EnvWrap *ew, unsigned int flags) {
	this->ew = ew;
	this->flags = flags;
	MDB_env *env = ew->env;
	unsigned int envFlags;
	mdb_env_get_flags(env, &envFlags);
	if (flags & MDB_RDONLY) {
		mdb_txn_begin(env, nullptr, flags & 0xf0000, &this->txn);
	} else {
		//fprintf(stderr, "begin sync txn %i\n", flags);

		if (ew->writeTxn)
			txn = ew->writeTxn->txn;
		else if (ew->writeWorker) {
			// try to acquire the txn from the current batch
			txn = ew->writeWorker->AcquireTxn((int*) &flags);
			//fprintf(stderr, "acquired %p %p %p\n", ew->writeWorker, txn, flags);
		} else {
			pthread_mutex_lock(ew->writingLock);
			txn = nullptr;
		}

		if (txn) {
			if (flags & TXN_ABORTABLE) {
				if (envFlags & MDB_WRITEMAP)
					flags &= ~TXN_ABORTABLE;
				else {
					// child txn
					mdb_txn_begin(env, this->txn, flags & 0xf0000, &this->txn);
					TxnTracked* childTxn = new TxnTracked(txn, flags);
					childTxn->parent = ew->writeTxn;
					ew->writeTxn = childTxn;
					return 0;
				}
			}
		} else {
			mdb_txn_begin(env, nullptr, flags & 0xf0000, &this->txn);
			flags |= TXN_ABORTABLE;
		}
		ew->writeTxn = new TxnTracked(txn, flags);
		return 0;
	}
	// Set the current write transaction
	if (0 == (flags & MDB_RDONLY)) {
		ew->currentWriteTxn = this;
	}
	else {
		ew->readTxns.push_back(this);
		ew->currentReadTxn = txn;
		ew->readTxnRenewed = true;
	}
	return 0;
}
Value TxnWrap::commit(const Napi::CallbackInfo& info) {
	if (!this->txn) {
		return throwError(info.Env(), "The transaction is already closed.");
	}
	int rc;
	WriteWorker* writeWorker = this->ew->writeWorker;
	if (writeWorker) {
		// if (writeWorker->txn && env->writeMap)
		// rc = 0
		// else
		rc = mdb_txn_commit(this->txn);
		
		pthread_mutex_unlock(this->ew->writingLock);
	}
	else
		rc = mdb_txn_commit(this->txn);
	//fprintf(stdout, "commit done\n");
	this->removeFromEnvWrap();

	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	return info.Env().Undefined();
}

Value TxnWrap::abort(const Napi::CallbackInfo& info) {
	if (!this->txn) {
		return throwError(info.Env(), "The transaction is already closed.");
	}

	mdb_txn_abort(this->txn);
	this->removeFromEnvWrap();
	return info.Env().Undefined();
}
NAPI_FUNCTION(resetTxn) {
	ARGS(1)
    GET_INT64_ARG(0);
    TxnWrap* tw = (TxnWrap*) i64;
	if (!tw->txn) {
		THROW_ERROR("The transaction is already closed.");
	}
	tw->reset();
	RETURN_UNDEFINED;
}
void resetTxnFFI(double twPointer) {
	TxnWrap* tw = (TxnWrap*) (size_t) twPointer;
	tw->reset();
}

void TxnWrap::reset() {
	ew->readTxnRenewed = false;
	mdb_txn_reset(txn);
}
Value TxnWrap::renew(const Napi::CallbackInfo& info) {
	if (!this->txn) {
		return throwError(info.Env(), "The transaction is already closed.");
	}

	int rc = mdb_txn_renew(this->txn);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	return info.Env().Undefined();
}
void TxnWrap::setupExports(Napi::Env env, Object exports) {
		// TxnWrap: Prepare constructor template
	Function TxnClass = DefineClass(env, "Txn", {
		// TxnWrap: Add functions to the prototype
		TxnWrap::InstanceMethod("commit", &TxnWrap::commit),
		TxnWrap::InstanceMethod("abort", &TxnWrap::abort),
		TxnWrap::InstanceMethod("renew", &TxnWrap::renew),
	});
	exports.Set("Txn", TxnClass);
	EXPORT_NAPI_FUNCTION("resetTxn", resetTxn);
	EXPORT_FUNCTION_ADDRESS("resetTxnPtr", resetTxnFFI);
	//txnTpl->InstanceTemplate()->SetInternalFieldCount(1);
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
