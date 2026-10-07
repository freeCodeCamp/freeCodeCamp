#include "lmdb-js.h"
#include <string.h>

using namespace Napi;

CursorWrap::CursorWrap(const CallbackInfo& info) : Napi::ObjectWrap<CursorWrap>(info) {
	this->keyType = LmdbKeyType::StringKey;
	this->freeKey = nullptr;
	this->endKey.mv_size = 0; // indicates no end key (yet)
	if (info.Length() < 1) {
		throwError(info.Env(), "Wrong number of arguments");
		return;
	}

	DbiWrap *dw;
	napi_unwrap(info.Env(), info[0], (void**)&dw);

	// Open the cursor
	MDB_cursor *cursor;
	MDB_txn *txn = dw->ew->getReadTxn();
	int rc = mdb_cursor_open(txn, dw->dbi, &cursor);
	if (rc != 0) {
		throwLmdbError(info.Env(), rc);
		return;
	}
	info.This().As<Object>().Set("address", Number::New(info.Env(), (size_t) this));
	this->cursor = cursor;
	this->dw = dw;
	this->txn = txn;
	this->keyType = keyType;
}

CursorWrap::~CursorWrap() {
	if (this->cursor) {
		// Don't close cursor here, it is possible that the environment may already be closed, which causes it to crash
		//mdb_cursor_close(this->cursor);
	}
	if (this->freeKey) {
		this->freeKey(this->key);
	}
}

Value CursorWrap::close(const CallbackInfo& info) {
	if (!this->cursor) {
	  return throwError(info.Env(), "cursor.close: Attempt to close a closed cursor!");
	}
	mdb_cursor_close(this->cursor);
	this->cursor = nullptr;
	return info.Env().Undefined();
}

Value CursorWrap::del(const CallbackInfo& info) {
	int flags = 0;

	if (info.Length() == 1) {
		if (!info[0].IsObject()) {
			return throwError(info.Env(), "cursor.del: Invalid options argument. It should be an object.");
		}
		
		auto options = info[0].As<Object>();
		setFlagFromValue(&flags, MDB_NODUPDATA, "noDupData", false, options);
	}

	int rc = mdb_cursor_del(this->cursor, flags);
	if (rc != 0) {
		return throwLmdbError(info.Env(), rc);
	}
	return info.Env().Undefined();
}
int CursorWrap::returnEntry(int lastRC, MDB_val &key, MDB_val &data) {
	if (lastRC) {
		if (lastRC == MDB_NOTFOUND)
			return 0;
		else {
			return lastRC > 0 ? -lastRC : lastRC;
		}
	}
	if (endKey.mv_size > 0) {
		int comparison;
		if (flags & 0x800)
			comparison = mdb_dcmp(txn, dw->dbi, &endKey, &data);
		else
			comparison = mdb_cmp(txn, dw->dbi, &endKey, &key);
		if ((flags & 0x400) ? comparison >= 0 : (comparison <= 0)) {
			return 0;
		}
	}
	char* keyBuffer = dw->ew->keyBuffer;
	if (flags & 0x100) {
		bool result = getVersionAndUncompress(data, dw);
		if (result)
			result = valToBinaryFast(data, dw);
		*((size_t*)keyBuffer) = data.mv_size;
	}
	if (!(flags & 0x800)) {
		memcpy(keyBuffer + 32, key.mv_data, key.mv_size);
		*(keyBuffer + 32 + key.mv_size) = 0; // make sure it is null terminated for the sake of better ordered-binary performance
	}

	return key.mv_size;
}

const int START_ADDRESS_POSITION = 4064;
int32_t CursorWrap::doPosition(uint32_t offset, uint32_t keySize, uint64_t endKeyAddress) {
	//char* keyBuffer = dw->ew->keyBuffer;
	MDB_val key, data;
	int rc;
	if (flags & 0x2000) { // TODO: check the txn_id to determine if we need to renew
		rc = mdb_cursor_renew(txn = dw->ew->getReadTxn(), cursor);
		if (rc) {
			if (rc > 0)
				rc = -rc;
			return rc;
		}
	}
	if (endKeyAddress) {
		uint32_t* keyBuffer = (uint32_t*) endKeyAddress;
		endKey.mv_size = *keyBuffer;
		endKey.mv_data = (char*)(keyBuffer + 1);
	} else
		endKey.mv_size = 0;
	iteratingOp = (flags & 0x400) ?
		(flags & 0x100) ?
			(flags & 0x800) ? MDB_PREV_DUP : MDB_PREV :
			MDB_PREV_NODUP :
		(flags & 0x100) ?
			(flags & 0x800) ? MDB_NEXT_DUP : MDB_NEXT :
			MDB_NEXT_NODUP;
	key.mv_size = keySize;
	key.mv_data = dw->ew->keyBuffer;
	if (keySize == 0) {
		rc = mdb_cursor_get(cursor, &key, &data, flags & 0x400 ? MDB_LAST : MDB_FIRST);  
	} else {
		if (flags & 0x800) { // only values for this key
			// take the next part of the key buffer as a pointer to starting data
			uint32_t* startValueBuffer = (uint32_t*)(size_t)(*(double*)(dw->ew->keyBuffer + START_ADDRESS_POSITION));
			data.mv_size = endKeyAddress ? *((uint32_t*)startValueBuffer) : 0;
			data.mv_data = startValueBuffer + 1;
			if (flags & 0x400) {// reverse through values
				MDB_val startValue = data; // save it for comparison
				rc = mdb_cursor_get(cursor, &key, &data, data.mv_size ? MDB_GET_BOTH_RANGE : MDB_SET_KEY);
				if (rc) {
					if (startValue.mv_size) {
						// value specified, but not found, so find key and go to last item
						rc = mdb_cursor_get(cursor, &key, &data, MDB_SET_KEY);
						if (!rc)
							rc = mdb_cursor_get(cursor, &key, &data, MDB_LAST_DUP);
					} // else just couldn't find the key
				} else { // found entry
					if (startValue.mv_size == 0) // no value specified, so go to last value
						rc = mdb_cursor_get(cursor, &key, &data, MDB_LAST_DUP);
					else if (mdb_dcmp(txn, dw->dbi, &startValue, &data)) // the range found the next value *after* the start
						rc = mdb_cursor_get(cursor, &key, &data, MDB_PREV_DUP);
				}
			} else // forward, just do a get by range
				rc = mdb_cursor_get(cursor, &key, &data, data.mv_size ?
					(flags & 0x4000) ? MDB_GET_BOTH : MDB_GET_BOTH_RANGE : MDB_SET_KEY);

			if (rc == MDB_NOTFOUND)
				return 0;
			if (flags & 0x1000 && (!endKeyAddress || (flags & 0x4000))) {
				size_t count;
				rc = mdb_cursor_count(cursor, &count);
				if (rc)
					return rc > 0 ? -rc : rc;
				return count;
			}
		} else {
			if (flags & 0x400) {// reverse
				MDB_val firstKey = key; // save it for comparison
				rc = mdb_cursor_get(cursor, &key, &data, MDB_SET_RANGE);
				if (rc)
					rc = mdb_cursor_get(cursor, &key, &data, MDB_LAST);
				else if (mdb_cmp(txn, dw->dbi, &firstKey, &key)) // the range found the next entry *after* the start
					rc = mdb_cursor_get(cursor, &key, &data, MDB_PREV);
			} else // forward, just do a get by range
				rc = mdb_cursor_get(cursor, &key, &data, (flags & 0x4000) ? MDB_SET_KEY : MDB_SET_RANGE);
		}
	}
	while (offset-- > 0 && !rc) {
		rc = mdb_cursor_get(cursor, &key, &data, iteratingOp);
	}
	if (flags & 0x1000) {
		uint32_t count = 0;
		bool useCursorCount = false;
		// if we are in a dupsort database, and we are iterating over all entries, we can just count all the values for each key
		if (dw->flags & MDB_DUPSORT) {
			if (iteratingOp == MDB_PREV) {
				iteratingOp = MDB_PREV_NODUP;
				useCursorCount = true;
			}
			if (iteratingOp == MDB_NEXT) {
				iteratingOp = MDB_NEXT_NODUP;
				useCursorCount = true;
			}
		}

		while (!rc) {
			if (endKey.mv_size > 0) {
				int comparison;
				if (flags & 0x800)
					comparison = mdb_dcmp(txn, dw->dbi, &endKey, &data);
				else
					comparison = mdb_cmp(txn, dw->dbi, &endKey, &key);
				if ((flags & 0x400) ? comparison >= 0 : (comparison <=0)) {
					return count;
				}
			}
			if (useCursorCount) {
				size_t countForKey;
				rc = mdb_cursor_count(cursor, &countForKey);
				if (rc) {
					if (rc > 0)
						rc = -rc;
					return rc;
				}
				count += countForKey;
			} else
				count++;
			rc = mdb_cursor_get(cursor, &key, &data, iteratingOp);
		}
		return count;
	}
	// TODO: Handle count?
	return returnEntry(rc, key, data);
}
NAPI_FUNCTION(position) {
	ARGS(5)
    GET_INT64_ARG(0);
    CursorWrap* cw = (CursorWrap*) i64;
	GET_UINT32_ARG(cw->flags, 1);
	uint32_t offset;
	GET_UINT32_ARG(offset, 2);
	uint32_t keySize;
	GET_UINT32_ARG(keySize, 3);
    napi_get_value_int64(env, args[4], &i64);
    int64_t endKeyAddress = i64;
	int32_t result = cw->doPosition(offset, keySize, endKeyAddress);
	RETURN_INT32(result);
}
int32_t positionFFI(double cwPointer, uint32_t flags, uint32_t offset, uint32_t keySize, uint64_t endKeyAddress) {
	CursorWrap* cw = (CursorWrap*) (size_t) cwPointer;
	DbiWrap* dw = cw->dw;
	dw->getFast = true;
	cw->flags = flags;
	return cw->doPosition(offset, keySize, endKeyAddress);
}

NAPI_FUNCTION(iterate) {
	ARGS(1)
    GET_INT64_ARG(0);
    CursorWrap* cw = (CursorWrap*) i64;
	MDB_val key, data;
	int rc = mdb_cursor_get(cw->cursor, &key, &data, cw->iteratingOp);
	RETURN_INT32(cw->returnEntry(rc, key, data));
}

int32_t iterateFFI(double cwPointer) {
	CursorWrap* cw = (CursorWrap*) (size_t) cwPointer;
	DbiWrap* dw = cw->dw;
	dw->getFast = true;
	MDB_val key, data;
	int rc = mdb_cursor_get(cw->cursor, &key, &data, cw->iteratingOp);
	return cw->returnEntry(rc, key, data);
}


NAPI_FUNCTION(getCurrentValue) {
	ARGS(1)
    GET_INT64_ARG(0);
    CursorWrap* cw = (CursorWrap*) i64;
	MDB_val key, data;
	int rc = mdb_cursor_get(cw->cursor, &key, &data, MDB_GET_CURRENT);
	RETURN_INT32(cw->returnEntry(rc, key, data));
}

napi_finalize noopCursor = [](napi_env, void *, void *) {
	// Data belongs to LMDB, we shouldn't free it here
};
NAPI_FUNCTION(getCurrentShared) {
	ARGS(1)
    GET_INT64_ARG(0);
    CursorWrap* cw = (CursorWrap*) i64;
	MDB_val key, data;
	int rc = mdb_cursor_get(cw->cursor, &key, &data, MDB_GET_CURRENT);
	if (rc)
		RETURN_INT32(cw->returnEntry(rc, key, data));
	getVersionAndUncompress(data, cw->dw);
	napi_create_external_buffer(env, data.mv_size,
		(char*) data.mv_data, noopCursor, nullptr, &returnValue);
	return returnValue;
}

NAPI_FUNCTION(renew) {
	ARGS(1)
    GET_INT64_ARG(0);
    CursorWrap* cw = (CursorWrap*) i64;
	mdb_cursor_renew(cw->txn = cw->dw->ew->getReadTxn(), cw->cursor);
	RETURN_UNDEFINED;
}

void CursorWrap::setupExports(Napi::Env env, Object exports) {
	// CursorWrap: Prepare constructor template
	Function CursorClass = DefineClass(env, "Cursor", {
	// CursorWrap: Add functions to the prototype
		CursorWrap::InstanceMethod("close", &CursorWrap::close),
		CursorWrap::InstanceMethod("del", &CursorWrap::del),
	});
	EXPORT_NAPI_FUNCTION("position", position);
	EXPORT_NAPI_FUNCTION("iterate", iterate);
	EXPORT_NAPI_FUNCTION("getCurrentValue", getCurrentValue);
	EXPORT_NAPI_FUNCTION("getCurrentShared", getCurrentShared);
	EXPORT_NAPI_FUNCTION("renew", renew);
	EXPORT_FUNCTION_ADDRESS("positionPtr", positionFFI);
	EXPORT_FUNCTION_ADDRESS("iteratePtr", iterateFFI);

	exports.Set("Cursor", CursorClass);

//	cursorTpl->InstanceTemplate()->SetInternalFieldCount(1);
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

