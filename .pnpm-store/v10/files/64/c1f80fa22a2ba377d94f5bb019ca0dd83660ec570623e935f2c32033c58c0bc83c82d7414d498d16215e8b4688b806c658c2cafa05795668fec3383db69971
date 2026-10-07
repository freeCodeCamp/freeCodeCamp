/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

/////////////////////////////
/// Worker Async Iterable APIs
/////////////////////////////

interface FileSystemDirectoryHandleAsyncIterator<T> extends AsyncIteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.asyncIterator](): FileSystemDirectoryHandleAsyncIterator<T>;
}

interface FileSystemDirectoryHandle {
    [Symbol.asyncIterator](): FileSystemDirectoryHandleAsyncIterator<[string, FileSystemHandle]>;
    entries(): FileSystemDirectoryHandleAsyncIterator<[string, FileSystemHandle]>;
    keys(): FileSystemDirectoryHandleAsyncIterator<string>;
    values(): FileSystemDirectoryHandleAsyncIterator<FileSystemHandle>;
}

interface ReadableStreamAsyncIterator<T> extends AsyncIteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.asyncIterator](): ReadableStreamAsyncIterator<T>;
}

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
    values(options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
}
