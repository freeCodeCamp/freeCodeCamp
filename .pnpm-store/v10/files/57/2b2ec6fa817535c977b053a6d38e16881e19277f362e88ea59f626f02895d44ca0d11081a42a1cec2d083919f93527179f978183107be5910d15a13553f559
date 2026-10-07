/*
 * LZ4 auto-framing library
 * Copyright (C) 2011-2016, Yann Collet.
 *
 * BSD 2-Clause License (http://www.opensource.org/licenses/bsd-license.php)
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * - Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * - Redistributions in binary form must reproduce the above
 *   copyright notice, this list of conditions and the following disclaimer
 *   in the documentation and/or other materials provided with the
 *   distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * You can contact the author at :
 * - LZ4 homepage : http://www.lz4.org
 * - LZ4 source repository : https://github.com/lz4/lz4
 */

/* LZ4F is a stand-alone API to create LZ4-compressed Frames
 * in full conformance with specification v1.6.1 .
 * This library rely upon memory management capabilities (malloc, free)
 * provided either by <stdlib.h>,
 * or redirected towards another library of user's choice
 * (see Memory Routines below).
 */


/*-************************************
*  Compiler Options
**************************************/
#ifdef _MSC_VER    /* Visual Studio */
#  pragma warning(disable : 4127)        /* disable: C4127: conditional expression is constant */
#endif


/*-************************************
*  Tuning parameters
**************************************/
/*
 * LZ4F_HEAPMODE :
 * Select how default compression functions will allocate memory for their hash table,
 * in memory stack (0:default, fastest), or in memory heap (1:requires malloc()).
 */
#ifndef LZ4F_HEAPMODE
#  define LZ4F_HEAPMODE 0
#endif


/*-************************************
*  Memory routines
**************************************/
/*
 * User may redirect invocations of
 * malloc(), calloc() and free()
 * towards another library or solution of their choice
 * by modifying below section.
 */
#ifndef LZ4_SRC_INCLUDED   /* avoid redefinition when sources are coalesced */
#  include <stdlib.h>   /* malloc, calloc, free */
#  define ALLOC(s)          malloc(s)
#  define ALLOC_AND_ZERO(s) calloc(1,(s))
#  define FREEMEM(p)        free(p)
#endif

#include <string.h>   /* memset, memcpy, memmove */
#ifndef LZ4_SRC_INCLUDED  /* avoid redefinition when sources are coalesced */
#  define MEM_INIT(p,v,s)   memset((p),(v),(s))
#endif


/*-************************************
*  Library declarations
**************************************/
#define LZ4F_STATIC_LINKING_ONLY
#include "lz4frame.h"
#define LZ4_STATIC_LINKING_ONLY
#include "lz4.h"
#define LZ4_HC_STATIC_LINKING_ONLY
#include "lz4hc.h"
#define XXH_STATIC_LINKING_ONLY
#include "xxhash.h"


/*-************************************
*  Debug
**************************************/
#if defined(LZ4_DEBUG) && (LZ4_DEBUG>=1)
#  include <assert.h>
#else
#  ifndef assert
#    define assert(condition) ((void)0)
#  endif
#endif

#define LZ4F_STATIC_ASSERT(c)    { enum { LZ4F_static_assert = 1/(int)(!!(c)) }; }   /* use only *after* variable declarations */

#if defined(LZ4_DEBUG) && (LZ4_DEBUG>=2) && !defined(DEBUGLOG)
#  include <stdio.h>
static int g_debuglog_enable = 1;
#  define DEBUGLOG(l, ...) {                                  \
                if ((g_debuglog_enable) && (l<=LZ4_DEBUG)) {  \
                    fprintf(stderr, __FILE__ ": ");           \
                    fprintf(stderr, __VA_ARGS__);             \
                    fprintf(stderr, " \n");                   \
            }   }
#else
#  define DEBUGLOG(l, ...)      {}    /* disabled */
#endif


/*-************************************
*  Basic Types
**************************************/
#if !defined (__VMS) && (defined (__cplusplus) || (defined (__STDC_VERSION__) && (__STDC_VERSION__ >= 199901L) /* C99 */) )
# include <stdint.h>
  typedef  uint8_t BYTE;
  typedef uint16_t U16;
  typedef uint32_t U32;
  typedef  int32_t S32;
  typedef uint64_t U64;
#else
  typedef unsigned char       BYTE;
  typedef unsigned short      U16;
  typedef unsigned int        U32;
  typedef   signed int        S32;
  typedef unsigned long long  U64;
#endif


/* unoptimized version; solves endianess & alignment issues */
static U32 LZ4F_readLE32 (const void* src)
{
    const BYTE* const srcPtr = (const BYTE*)src;
    U32 value32 = srcPtr[0];
    value32 += ((U32)srcPtr[1])<< 8;
    value32 += ((U32)srcPtr[2])<<16;
    value32 += ((U32)srcPtr[3])<<24;
    return value32;
}

static void LZ4F_writeLE32 (void* dst, U32 value32)
{
    BYTE* const dstPtr = (BYTE*)dst;
    dstPtr[0] = (BYTE)value32;
    dstPtr[1] = (BYTE)(value32 >> 8);
    dstPtr[2] = (BYTE)(value32 >> 16);
    dstPtr[3] = (BYTE)(value32 >> 24);
}

static U64 LZ4F_readLE64 (const void* src)
{
    const BYTE* const srcPtr = (const BYTE*)src;
    U64 value64 = srcPtr[0];
    value64 += ((U64)srcPtr[1]<<8);
    value64 += ((U64)srcPtr[2]<<16);
    value64 += ((U64)srcPtr[3]<<24);
    value64 += ((U64)srcPtr[4]<<32);
    value64 += ((U64)srcPtr[5]<<40);
    value64 += ((U64)srcPtr[6]<<48);
    value64 += ((U64)srcPtr[7]<<56);
    return value64;
}

static void LZ4F_writeLE64 (void* dst, U64 value64)
{
    BYTE* const dstPtr = (BYTE*)dst;
    dstPtr[0] = (BYTE)value64;
    dstPtr[1] = (BYTE)(value64 >> 8);
    dstPtr[2] = (BYTE)(value64 >> 16);
    dstPtr[3] = (BYTE)(value64 >> 24);
    dstPtr[4] = (BYTE)(value64 >> 32);
    dstPtr[5] = (BYTE)(value64 >> 40);
    dstPtr[6] = (BYTE)(value64 >> 48);
    dstPtr[7] = (BYTE)(value64 >> 56);
}


/*-************************************
*  Constants
**************************************/
#ifndef LZ4_SRC_INCLUDED   /* avoid double definition */
#  define KB *(1<<10)
#  define MB *(1<<20)
#  define GB *(1<<30)
#endif

#define _1BIT  0x01
#define _2BITS 0x03
#define _3BITS 0x07
#define _4BITS 0x0F
#define _8BITS 0xFF

#define LZ4F_MAGIC_SKIPPABLE_START 0x184D2A50U
#define LZ4F_MAGICNUMBER 0x184D2204U
#define LZ4F_BLOCKUNCOMPRESSED_FLAG 0x80000000U
#define LZ4F_BLOCKSIZEID_DEFAULT LZ4F_max64KB

static const size_t minFHSize = LZ4F_HEADER_SIZE_MIN;   /*  7 */
static const size_t maxFHSize = LZ4F_HEADER_SIZE_MAX;   /* 19 */
static const size_t BHSize = LZ4F_BLOCK_HEADER_SIZE;  /* block header : size, and compress flag */
static const size_t BFSize = LZ4F_BLOCK_CHECKSUM_SIZE;  /* block footer : checksum (optional) */


/*-************************************
*  Structures and local types
**************************************/
typedef struct LZ4F_cctx_s
{
    LZ4F_preferences_t prefs;
    U32    version;
    U32    cStage;
    const LZ4F_CDict* cdict;
    size_t maxBlockSize;
    size_t maxBufferSize;
    BYTE*  tmpBuff;
    BYTE*  tmpIn;
    size_t tmpInSize;
    U64    totalInSize;
    XXH32_state_t xxh;
    void*  lz4CtxPtr;
    U16    lz4CtxAlloc; /* sized for: 0 = none, 1 = lz4 ctx, 2 = lz4hc ctx */
    U16    lz4CtxState; /* in use as: 0 = none, 1 = lz4 ctx, 2 = lz4hc ctx */
} LZ4F_cctx_t;


/*-************************************
*  Error management
**************************************/
#define LZ4F_GENERATE_STRING(STRING) #STRING,
static const char* LZ4F_errorStrings[] = { LZ4F_LIST_ERRORS(LZ4F_GENERATE_STRING) };


unsigned LZ4F_isError(LZ4F_errorCode_t code)
{
    return (code > (LZ4F_errorCode_t)(-LZ4F_ERROR_maxCode));
}

const char* LZ4F_getErrorName(LZ4F_errorCode_t code)
{
    static const char* codeError = "Unspecified error code";
    if (LZ4F_isError(code)) return LZ4F_errorStrings[-(int)(code)];
    return codeError;
}

LZ4F_errorCodes LZ4F_getErrorCode(size_t functionResult)
{
    if (!LZ4F_isError(functionResult)) return LZ4F_OK_NoError;
    return (LZ4F_errorCodes)(-(ptrdiff_t)functionResult);
}

static LZ4F_errorCode_t err0r(LZ4F_errorCodes code)
{
    /* A compilation error here means sizeof(ptrdiff_t) is not large enough */
    LZ4F_STATIC_ASSERT(sizeof(ptrdiff_t) >= sizeof(size_t));
    return (LZ4F_errorCode_t)-(ptrdiff_t)code;
}

unsigned LZ4F_getVersion(void) { return LZ4F_VERSION; }

int LZ4F_compressionLevel_max(void) { return LZ4HC_CLEVEL_MAX; }

size_t LZ4F_getBlockSize(unsigned blockSizeID)
{
    static const size_t blockSizes[4] = { 64 KB, 256 KB, 1 MB, 4 MB };

    if (blockSizeID == 0) blockSizeID = LZ4F_BLOCKSIZEID_DEFAULT;
    if (blockSizeID < LZ4F_max64KB || blockSizeID > LZ4F_max4MB)
        return err0r(LZ4F_ERROR_maxBlockSize_invalid);
    blockSizeID -= LZ4F_max64KB;
    return blockSizes[blockSizeID];
}

/*-************************************
*  Private functions
**************************************/
#define MIN(a,b)   ( (a) < (b) ? (a) : (b) )

static BYTE LZ4F_headerChecksum (const void* header, size_t length)
{
    U32 const xxh = XXH32(header, length, 0);
    return (BYTE)(xxh >> 8);
}


/*-************************************
*  Simple-pass compression functions
**************************************/
static LZ4F_blockSizeID_t LZ4F_optimalBSID(const LZ4F_blockSizeID_t requestedBSID,
                                           const size_t srcSize)
{
    LZ4F_blockSizeID_t proposedBSID = LZ4F_max64KB;
    size_t maxBlockSize = 64 KB;
    while (requestedBSID > proposedBSID) {
        if (srcSize <= maxBlockSize)
            return proposedBSID;
        proposedBSID = (LZ4F_blockSizeID_t)((int)proposedBSID + 1);
        maxBlockSize <<= 2;
    }
    return requestedBSID;
}

/*! LZ4F_compressBound_internal() :
 *  Provides dstCapacity given a srcSize to guarantee operation success in worst case situations.
 *  prefsPtr is optional : if NULL is provided, preferences will be set to cover worst case scenario.
 * @return is always the same for a srcSize and prefsPtr, so it can be relied upon to size reusable buffers.
 *  When srcSize==0, LZ4F_compressBound() provides an upper bound for LZ4F_flush() and LZ4F_compressEnd() operations.
 */
static size_t LZ4F_compressBound_internal(size_t srcSize,
                                    const LZ4F_preferences_t* preferencesPtr,
                                          size_t alreadyBuffered)
{
    LZ4F_preferences_t prefsNull = LZ4F_INIT_PREFERENCES;
    prefsNull.frameInfo.contentChecksumFlag = LZ4F_contentChecksumEnabled;   /* worst case */
    prefsNull.frameInfo.blockChecksumFlag = LZ4F_blockChecksumEnabled;   /* worst case */
    {   const LZ4F_preferences_t* const prefsPtr = (preferencesPtr==NULL) ? &prefsNull : preferencesPtr;
        U32 const flush = prefsPtr->autoFlush | (srcSize==0);
        LZ4F_blockSizeID_t const blockID = prefsPtr->frameInfo.blockSizeID;
        size_t const blockSize = LZ4F_getBlockSize(blockID);
        size_t const maxBuffered = blockSize - 1;
        size_t const bufferedSize = MIN(alreadyBuffered, maxBuffered);
        size_t const maxSrcSize = srcSize + bufferedSize;
        unsigned const nbFullBlocks = (unsigned)(maxSrcSize / blockSize);
        size_t const partialBlockSize = maxSrcSize & (blockSize-1);
        size_t const lastBlockSize = flush ? partialBlockSize : 0;
        unsigned const nbBlocks = nbFullBlocks + (lastBlockSize>0);

        size_t const blockCRCSize = BFSize * prefsPtr->frameInfo.blockChecksumFlag;
        size_t const frameEnd = BHSize + (prefsPtr->frameInfo.contentChecksumFlag*BFSize);

        return ((BHSize + blockCRCSize) * nbBlocks) +
               (blockSize * nbFullBlocks) + lastBlockSize + frameEnd;
    }
}

size_t LZ4F_compressFrameBound(size_t srcSize, const LZ4F_preferences_t* preferencesPtr)
{
    LZ4F_preferences_t prefs;
    size_t const headerSize = maxFHSize;      /* max header size, including optional fields */

    if (preferencesPtr!=NULL) prefs = *preferencesPtr;
    else MEM_INIT(&prefs, 0, sizeof(prefs));
    prefs.autoFlush = 1;

    return headerSize + LZ4F_compressBound_internal(srcSize, &prefs, 0);;
}


/*! LZ4F_compressFrame_usingCDict() :
 *  Compress srcBuffer using a dictionary, in a single step.
 *  cdict can be NULL, in which case, no dictionary is used.
 *  dstBuffer MUST be >= LZ4F_compressFrameBound(srcSize, preferencesPtr).
 *  The LZ4F_preferences_t structure is optional : you may provide NULL as argument,
 *  however, it's the only way to provide a dictID, so it's not recommended.
 * @return : number of bytes written into dstBuffer,
 *           or an error code if it fails (can be tested using LZ4F_isError())
 */
size_t LZ4F_compressFrame_usingCDict(LZ4F_cctx* cctx,
                                     void* dstBuffer, size_t dstCapacity,
                               const void* srcBuffer, size_t srcSize,
                               const LZ4F_CDict* cdict,
                               const LZ4F_preferences_t* preferencesPtr)
{
    LZ4F_preferences_t prefs;
    LZ4F_compressOptions_t options;
    BYTE* const dstStart = (BYTE*) dstBuffer;
    BYTE* dstPtr = dstStart;
    BYTE* const dstEnd = dstStart + dstCapacity;

    if (preferencesPtr!=NULL)
        prefs = *preferencesPtr;
    else
        MEM_INIT(&prefs, 0, sizeof(prefs));
    if (prefs.frameInfo.contentSize != 0)
        prefs.frameInfo.contentSize = (U64)srcSize;   /* auto-correct content size if selected (!=0) */

    prefs.frameInfo.blockSizeID = LZ4F_optimalBSID(prefs.frameInfo.blockSizeID, srcSize);
    prefs.autoFlush = 1;
    if (srcSize <= LZ4F_getBlockSize(prefs.frameInfo.blockSizeID))
        prefs.frameInfo.blockMode = LZ4F_blockIndependent;   /* only one block => no need for inter-block link */

    MEM_INIT(&options, 0, sizeof(options));
    options.stableSrc = 1;

    if (dstCapacity < LZ4F_compressFrameBound(srcSize, &prefs))  /* condition to guarantee success */
        return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);

    { size_t const headerSize = LZ4F_compressBegin_usingCDict(cctx, dstBuffer, dstCapacity, cdict, &prefs);  /* write header */
      if (LZ4F_isError(headerSize)) return headerSize;
      dstPtr += headerSize;   /* header size */ }

    assert(dstEnd >= dstPtr);
    { size_t const cSize = LZ4F_compressUpdate(cctx, dstPtr, (size_t)(dstEnd-dstPtr), srcBuffer, srcSize, &options);
      if (LZ4F_isError(cSize)) return cSize;
      dstPtr += cSize; }

    assert(dstEnd >= dstPtr);
    { size_t const tailSize = LZ4F_compressEnd(cctx, dstPtr, (size_t)(dstEnd-dstPtr), &options);   /* flush last block, and generate suffix */
      if (LZ4F_isError(tailSize)) return tailSize;
      dstPtr += tailSize; }

    assert(dstEnd >= dstStart);
    return (size_t)(dstPtr - dstStart);
}


/*! LZ4F_compressFrame() :
 *  Compress an entire srcBuffer into a valid LZ4 frame, in a single step.
 *  dstBuffer MUST be >= LZ4F_compressFrameBound(srcSize, preferencesPtr).
 *  The LZ4F_preferences_t structure is optional : you can provide NULL as argument. All preferences will be set to default.
 * @return : number of bytes written into dstBuffer.
 *           or an error code if it fails (can be tested using LZ4F_isError())
 */
size_t LZ4F_compressFrame(void* dstBuffer, size_t dstCapacity,
                    const void* srcBuffer, size_t srcSize,
                    const LZ4F_preferences_t* preferencesPtr)
{
    size_t result;
#if (LZ4F_HEAPMODE)
    LZ4F_cctx_t *cctxPtr;
    result = LZ4F_createCompressionContext(&cctxPtr, LZ4F_VERSION);
    if (LZ4F_isError(result)) return result;
#else
    LZ4F_cctx_t cctx;
    LZ4_stream_t lz4ctx;
    LZ4F_cctx_t *cctxPtr = &cctx;

    DEBUGLOG(4, "LZ4F_compressFrame");
    MEM_INIT(&cctx, 0, sizeof(cctx));
    cctx.version = LZ4F_VERSION;
    cctx.maxBufferSize = 5 MB;   /* mess with real buffer size to prevent dynamic allocation; works only because autoflush==1 & stableSrc==1 */
    if (preferencesPtr == NULL ||
        preferencesPtr->compressionLevel < LZ4HC_CLEVEL_MIN)
    {
        LZ4_initStream(&lz4ctx, sizeof(lz4ctx));
        cctxPtr->lz4CtxPtr = &lz4ctx;
        cctxPtr->lz4CtxAlloc = 1;
        cctxPtr->lz4CtxState = 1;
    }
#endif

    result = LZ4F_compressFrame_usingCDict(cctxPtr, dstBuffer, dstCapacity,
                                           srcBuffer, srcSize,
                                           NULL, preferencesPtr);

#if (LZ4F_HEAPMODE)
    LZ4F_freeCompressionContext(cctxPtr);
#else
    if (preferencesPtr != NULL &&
        preferencesPtr->compressionLevel >= LZ4HC_CLEVEL_MIN)
    {
        FREEMEM(cctxPtr->lz4CtxPtr);
    }
#endif
    return result;
}


/*-***************************************************
*   Dictionary compression
*****************************************************/

struct LZ4F_CDict_s {
    void* dictContent;
    LZ4_stream_t* fastCtx;
    LZ4_streamHC_t* HCCtx;
}; /* typedef'd to LZ4F_CDict within lz4frame_static.h */

/*! LZ4F_createCDict() :
 *  When compressing multiple messages / blocks with the same dictionary, it's recommended to load it just once.
 *  LZ4F_createCDict() will create a digested dictionary, ready to start future compression operations without startup delay.
 *  LZ4F_CDict can be created once and shared by multiple threads concurrently, since its usage is read-only.
 * `dictBuffer` can be released after LZ4F_CDict creation, since its content is copied within CDict
 * @return : digested dictionary for compression, or NULL if failed */
LZ4F_CDict* LZ4F_createCDict(const void* dictBuffer, size_t dictSize)
{
    const char* dictStart = (const char*)dictBuffer;
    LZ4F_CDict* cdict = (LZ4F_CDict*) ALLOC(sizeof(*cdict));
    DEBUGLOG(4, "LZ4F_createCDict");
    if (!cdict) return NULL;
    if (dictSize > 64 KB) {
        dictStart += dictSize - 64 KB;
        dictSize = 64 KB;
    }
    cdict->dictContent = ALLOC(dictSize);
    cdict->fastCtx = LZ4_createStream();
    cdict->HCCtx = LZ4_createStreamHC();
    if (!cdict->dictContent || !cdict->fastCtx || !cdict->HCCtx) {
        LZ4F_freeCDict(cdict);
        return NULL;
    }
    memcpy(cdict->dictContent, dictStart, dictSize);
    LZ4_loadDict (cdict->fastCtx, (const char*)cdict->dictContent, (int)dictSize);
    LZ4_setCompressionLevel(cdict->HCCtx, LZ4HC_CLEVEL_DEFAULT);
    LZ4_loadDictHC(cdict->HCCtx, (const char*)cdict->dictContent, (int)dictSize);
    return cdict;
}

void LZ4F_freeCDict(LZ4F_CDict* cdict)
{
    if (cdict==NULL) return;  /* support free on NULL */
    FREEMEM(cdict->dictContent);
    LZ4_freeStream(cdict->fastCtx);
    LZ4_freeStreamHC(cdict->HCCtx);
    FREEMEM(cdict);
}


/*-*********************************
*  Advanced compression functions
***********************************/

/*! LZ4F_createCompressionContext() :
 *  The first thing to do is to create a compressionContext object, which will be used in all compression operations.
 *  This is achieved using LZ4F_createCompressionContext(), which takes as argument a version and an LZ4F_preferences_t structure.
 *  The version provided MUST be LZ4F_VERSION. It is intended to track potential incompatible differences between different binaries.
 *  The function will provide a pointer to an allocated LZ4F_compressionContext_t object.
 *  If the result LZ4F_errorCode_t is not OK_NoError, there was an error during context creation.
 *  Object can release its memory using LZ4F_freeCompressionContext();
 */
LZ4F_errorCode_t LZ4F_createCompressionContext(LZ4F_cctx** LZ4F_compressionContextPtr, unsigned version)
{
    LZ4F_cctx_t* const cctxPtr = (LZ4F_cctx_t*)ALLOC_AND_ZERO(sizeof(LZ4F_cctx_t));
    if (cctxPtr==NULL) return err0r(LZ4F_ERROR_allocation_failed);

    cctxPtr->version = version;
    cctxPtr->cStage = 0;   /* Next stage : init stream */

    *LZ4F_compressionContextPtr = cctxPtr;

    return LZ4F_OK_NoError;
}


LZ4F_errorCode_t LZ4F_freeCompressionContext(LZ4F_cctx* cctxPtr)
{
    if (cctxPtr != NULL) {  /* support free on NULL */
       FREEMEM(cctxPtr->lz4CtxPtr);  /* note: LZ4_streamHC_t and LZ4_stream_t are simple POD types */
       FREEMEM(cctxPtr->tmpBuff);
       FREEMEM(cctxPtr);
    }

    return LZ4F_OK_NoError;
}


/**
 * This function prepares the internal LZ4(HC) stream for a new compression,
 * resetting the context and attaching the dictionary, if there is one.
 *
 * It needs to be called at the beginning of each independent compression
 * stream (i.e., at the beginning of a frame in blockLinked mode, or at the
 * beginning of each block in blockIndependent mode).
 */
static void LZ4F_initStream(void* ctx,
                            const LZ4F_CDict* cdict,
                            int level,
                            LZ4F_blockMode_t blockMode) {
    if (level < LZ4HC_CLEVEL_MIN) {
        if (cdict != NULL || blockMode == LZ4F_blockLinked) {
            /* In these cases, we will call LZ4_compress_fast_continue(),
             * which needs an already reset context. Otherwise, we'll call a
             * one-shot API. The non-continued APIs internally perform their own
             * resets at the beginning of their calls, where they know what
             * tableType they need the context to be in. So in that case this
             * would be misguided / wasted work. */
            LZ4_resetStream_fast((LZ4_stream_t*)ctx);
        }
        LZ4_attach_dictionary((LZ4_stream_t *)ctx, cdict ? cdict->fastCtx : NULL);
    } else {
        LZ4_resetStreamHC_fast((LZ4_streamHC_t*)ctx, level);
        LZ4_attach_HC_dictionary((LZ4_streamHC_t *)ctx, cdict ? cdict->HCCtx : NULL);
    }
}


/*! LZ4F_compressBegin_usingCDict() :
 *  init streaming compression and writes frame header into dstBuffer.
 *  dstBuffer must be >= LZ4F_HEADER_SIZE_MAX bytes.
 * @return : number of bytes written into dstBuffer for the header
 *           or an error code (can be tested using LZ4F_isError())
 */
size_t LZ4F_compressBegin_usingCDict(LZ4F_cctx* cctxPtr,
                          void* dstBuffer, size_t dstCapacity,
                          const LZ4F_CDict* cdict,
                          const LZ4F_preferences_t* preferencesPtr)
{
    LZ4F_preferences_t prefNull;
    BYTE* const dstStart = (BYTE*)dstBuffer;
    BYTE* dstPtr = dstStart;
    BYTE* headerStart;

    if (dstCapacity < maxFHSize) return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);
    MEM_INIT(&prefNull, 0, sizeof(prefNull));
    if (preferencesPtr == NULL) preferencesPtr = &prefNull;
    cctxPtr->prefs = *preferencesPtr;

    /* Ctx Management */
    {   U16 const ctxTypeID = (cctxPtr->prefs.compressionLevel < LZ4HC_CLEVEL_MIN) ? 1 : 2;
        if (cctxPtr->lz4CtxAlloc < ctxTypeID) {
            FREEMEM(cctxPtr->lz4CtxPtr);
            if (cctxPtr->prefs.compressionLevel < LZ4HC_CLEVEL_MIN) {
                cctxPtr->lz4CtxPtr = LZ4_createStream();
            } else {
                cctxPtr->lz4CtxPtr = LZ4_createStreamHC();
            }
            if (cctxPtr->lz4CtxPtr == NULL)
                return err0r(LZ4F_ERROR_allocation_failed);
            cctxPtr->lz4CtxAlloc = ctxTypeID;
            cctxPtr->lz4CtxState = ctxTypeID;
        } else if (cctxPtr->lz4CtxState != ctxTypeID) {
            /* otherwise, a sufficient buffer is allocated, but we need to
             * reset it to the correct context type */
            if (cctxPtr->prefs.compressionLevel < LZ4HC_CLEVEL_MIN) {
                LZ4_initStream((LZ4_stream_t *) cctxPtr->lz4CtxPtr, sizeof (LZ4_stream_t));
            } else {
                LZ4_initStreamHC((LZ4_streamHC_t *) cctxPtr->lz4CtxPtr, sizeof(LZ4_streamHC_t));
                LZ4_setCompressionLevel((LZ4_streamHC_t *) cctxPtr->lz4CtxPtr, cctxPtr->prefs.compressionLevel);
            }
            cctxPtr->lz4CtxState = ctxTypeID;
        }
    }

    /* Buffer Management */
    if (cctxPtr->prefs.frameInfo.blockSizeID == 0)
        cctxPtr->prefs.frameInfo.blockSizeID = LZ4F_BLOCKSIZEID_DEFAULT;
    cctxPtr->maxBlockSize = LZ4F_getBlockSize(cctxPtr->prefs.frameInfo.blockSizeID);

    {   size_t const requiredBuffSize = preferencesPtr->autoFlush ?
                ((cctxPtr->prefs.frameInfo.blockMode == LZ4F_blockLinked) ? 64 KB : 0) :  /* only needs past data up to window size */
                cctxPtr->maxBlockSize + ((cctxPtr->prefs.frameInfo.blockMode == LZ4F_blockLinked) ? 128 KB : 0);

        if (cctxPtr->maxBufferSize < requiredBuffSize) {
            cctxPtr->maxBufferSize = 0;
            FREEMEM(cctxPtr->tmpBuff);
            cctxPtr->tmpBuff = (BYTE*)ALLOC_AND_ZERO(requiredBuffSize);
            if (cctxPtr->tmpBuff == NULL) return err0r(LZ4F_ERROR_allocation_failed);
            cctxPtr->maxBufferSize = requiredBuffSize;
    }   }
    cctxPtr->tmpIn = cctxPtr->tmpBuff;
    cctxPtr->tmpInSize = 0;
    (void)XXH32_reset(&(cctxPtr->xxh), 0);

    /* context init */
    cctxPtr->cdict = cdict;
    if (cctxPtr->prefs.frameInfo.blockMode == LZ4F_blockLinked) {
        /* frame init only for blockLinked : blockIndependent will be init at each block */
        LZ4F_initStream(cctxPtr->lz4CtxPtr, cdict, cctxPtr->prefs.compressionLevel, LZ4F_blockLinked);
    }
    if (preferencesPtr->compressionLevel >= LZ4HC_CLEVEL_MIN) {
        LZ4_favorDecompressionSpeed((LZ4_streamHC_t*)cctxPtr->lz4CtxPtr, (int)preferencesPtr->favorDecSpeed);
    }

    /* Magic Number */
    LZ4F_writeLE32(dstPtr, LZ4F_MAGICNUMBER);
    dstPtr += 4;
    headerStart = dstPtr;

    /* FLG Byte */
    *dstPtr++ = (BYTE)(((1 & _2BITS) << 6)    /* Version('01') */
        + ((cctxPtr->prefs.frameInfo.blockMode & _1BIT ) << 5)
        + ((cctxPtr->prefs.frameInfo.blockChecksumFlag & _1BIT ) << 4)
        + ((unsigned)(cctxPtr->prefs.frameInfo.contentSize > 0) << 3)
        + ((cctxPtr->prefs.frameInfo.contentChecksumFlag & _1BIT ) << 2)
        +  (cctxPtr->prefs.frameInfo.dictID > 0) );
    /* BD Byte */
    *dstPtr++ = (BYTE)((cctxPtr->prefs.frameInfo.blockSizeID & _3BITS) << 4);
    /* Optional Frame content size field */
    if (cctxPtr->prefs.frameInfo.contentSize) {
        LZ4F_writeLE64(dstPtr, cctxPtr->prefs.frameInfo.contentSize);
        dstPtr += 8;
        cctxPtr->totalInSize = 0;
    }
    /* Optional dictionary ID field */
    if (cctxPtr->prefs.frameInfo.dictID) {
        LZ4F_writeLE32(dstPtr, cctxPtr->prefs.frameInfo.dictID);
        dstPtr += 4;
    }
    /* Header CRC Byte */
    *dstPtr = LZ4F_headerChecksum(headerStart, (size_t)(dstPtr - headerStart));
    dstPtr++;

    cctxPtr->cStage = 1;   /* header written, now request input data block */
    return (size_t)(dstPtr - dstStart);
}


/*! LZ4F_compressBegin() :
 *  init streaming compression and writes frame header into dstBuffer.
 *  dstBuffer must be >= LZ4F_HEADER_SIZE_MAX bytes.
 *  preferencesPtr can be NULL, in which case default parameters are selected.
 * @return : number of bytes written into dstBuffer for the header
 *        or an error code (can be tested using LZ4F_isError())
 */
size_t LZ4F_compressBegin(LZ4F_cctx* cctxPtr,
                          void* dstBuffer, size_t dstCapacity,
                          const LZ4F_preferences_t* preferencesPtr)
{
    return LZ4F_compressBegin_usingCDict(cctxPtr, dstBuffer, dstCapacity,
                                         NULL, preferencesPtr);
}


/*  LZ4F_compressBound() :
 * @return minimum capacity of dstBuffer for a given srcSize to handle worst case scenario.
 *  LZ4F_preferences_t structure is optional : if NULL, preferences will be set to cover worst case scenario.
 *  This function cannot fail.
 */
size_t LZ4F_compressBound(size_t srcSize, const LZ4F_preferences_t* preferencesPtr)
{
    if (preferencesPtr && preferencesPtr->autoFlush) {
        return LZ4F_compressBound_internal(srcSize, preferencesPtr, 0);
    }
    return LZ4F_compressBound_internal(srcSize, preferencesPtr, (size_t)-1);
}


typedef int (*compressFunc_t)(void* ctx, const char* src, char* dst, int srcSize, int dstSize, int level, const LZ4F_CDict* cdict);


/*! LZ4F_makeBlock():
 *  compress a single block, add header and optional checksum.
 *  assumption : dst buffer capacity is >= BHSize + srcSize + crcSize
 */
static size_t LZ4F_makeBlock(void* dst,
                       const void* src, size_t srcSize,
                             compressFunc_t compress, void* lz4ctx, int level,
                       const LZ4F_CDict* cdict,
                             LZ4F_blockChecksum_t crcFlag)
{
    BYTE* const cSizePtr = (BYTE*)dst;
    U32 cSize = (U32)compress(lz4ctx, (const char*)src, (char*)(cSizePtr+BHSize),
                                      (int)(srcSize), (int)(srcSize-1),
                                      level, cdict);
    if (cSize == 0) {  /* compression failed */
        DEBUGLOG(5, "LZ4F_makeBlock: compression failed, creating a raw block (size %u)", (U32)srcSize);
        cSize = (U32)srcSize;
        LZ4F_writeLE32(cSizePtr, cSize | LZ4F_BLOCKUNCOMPRESSED_FLAG);
        memcpy(cSizePtr+BHSize, src, srcSize);
    } else {
        LZ4F_writeLE32(cSizePtr, cSize);
    }
    if (crcFlag) {
        U32 const crc32 = XXH32(cSizePtr+BHSize, cSize, 0);  /* checksum of compressed data */
        LZ4F_writeLE32(cSizePtr+BHSize+cSize, crc32);
    }
    return BHSize + cSize + ((U32)crcFlag)*BFSize;
}


static int LZ4F_compressBlock(void* ctx, const char* src, char* dst, int srcSize, int dstCapacity, int level, const LZ4F_CDict* cdict)
{
    int const acceleration = (level < 0) ? -level + 1 : 1;
    LZ4F_initStream(ctx, cdict, level, LZ4F_blockIndependent);
    if (cdict) {
        return LZ4_compress_fast_continue((LZ4_stream_t*)ctx, src, dst, srcSize, dstCapacity, acceleration);
    } else {
        return LZ4_compress_fast_extState_fastReset(ctx, src, dst, srcSize, dstCapacity, acceleration);
    }
}

static int LZ4F_compressBlock_continue(void* ctx, const char* src, char* dst, int srcSize, int dstCapacity, int level, const LZ4F_CDict* cdict)
{
    int const acceleration = (level < 0) ? -level + 1 : 1;
    (void)cdict; /* init once at beginning of frame */
    return LZ4_compress_fast_continue((LZ4_stream_t*)ctx, src, dst, srcSize, dstCapacity, acceleration);
}

static int LZ4F_compressBlockHC(void* ctx, const char* src, char* dst, int srcSize, int dstCapacity, int level, const LZ4F_CDict* cdict)
{
    LZ4F_initStream(ctx, cdict, level, LZ4F_blockIndependent);
    if (cdict) {
        return LZ4_compress_HC_continue((LZ4_streamHC_t*)ctx, src, dst, srcSize, dstCapacity);
    }
    return LZ4_compress_HC_extStateHC_fastReset(ctx, src, dst, srcSize, dstCapacity, level);
}

static int LZ4F_compressBlockHC_continue(void* ctx, const char* src, char* dst, int srcSize, int dstCapacity, int level, const LZ4F_CDict* cdict)
{
    (void)level; (void)cdict; /* init once at beginning of frame */
    return LZ4_compress_HC_continue((LZ4_streamHC_t*)ctx, src, dst, srcSize, dstCapacity);
}

static compressFunc_t LZ4F_selectCompression(LZ4F_blockMode_t blockMode, int level)
{
    if (level < LZ4HC_CLEVEL_MIN) {
        if (blockMode == LZ4F_blockIndependent) return LZ4F_compressBlock;
        return LZ4F_compressBlock_continue;
    }
    if (blockMode == LZ4F_blockIndependent) return LZ4F_compressBlockHC;
    return LZ4F_compressBlockHC_continue;
}

static int LZ4F_localSaveDict(LZ4F_cctx_t* cctxPtr)
{
    if (cctxPtr->prefs.compressionLevel < LZ4HC_CLEVEL_MIN)
        return LZ4_saveDict ((LZ4_stream_t*)(cctxPtr->lz4CtxPtr), (char*)(cctxPtr->tmpBuff), 64 KB);
    return LZ4_saveDictHC ((LZ4_streamHC_t*)(cctxPtr->lz4CtxPtr), (char*)(cctxPtr->tmpBuff), 64 KB);
}

typedef enum { notDone, fromTmpBuffer, fromSrcBuffer } LZ4F_lastBlockStatus;

/*! LZ4F_compressUpdate() :
 *  LZ4F_compressUpdate() can be called repetitively to compress as much data as necessary.
 *  dstBuffer MUST be >= LZ4F_compressBound(srcSize, preferencesPtr).
 *  LZ4F_compressOptions_t structure is optional : you can provide NULL as argument.
 * @return : the number of bytes written into dstBuffer. It can be zero, meaning input data was just buffered.
 *           or an error code if it fails (which can be tested using LZ4F_isError())
 */
size_t LZ4F_compressUpdate(LZ4F_cctx* cctxPtr,
                           void* dstBuffer, size_t dstCapacity,
                     const void* srcBuffer, size_t srcSize,
                     const LZ4F_compressOptions_t* compressOptionsPtr)
{
    LZ4F_compressOptions_t cOptionsNull;
    size_t const blockSize = cctxPtr->maxBlockSize;
    const BYTE* srcPtr = (const BYTE*)srcBuffer;
    const BYTE* const srcEnd = srcPtr + srcSize;
    BYTE* const dstStart = (BYTE*)dstBuffer;
    BYTE* dstPtr = dstStart;
    LZ4F_lastBlockStatus lastBlockCompressed = notDone;
    compressFunc_t const compress = LZ4F_selectCompression(cctxPtr->prefs.frameInfo.blockMode, cctxPtr->prefs.compressionLevel);

    DEBUGLOG(4, "LZ4F_compressUpdate (srcSize=%zu)", srcSize);

    if (cctxPtr->cStage != 1) return err0r(LZ4F_ERROR_GENERIC);
    if (dstCapacity < LZ4F_compressBound_internal(srcSize, &(cctxPtr->prefs), cctxPtr->tmpInSize))
        return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);
    MEM_INIT(&cOptionsNull, 0, sizeof(cOptionsNull));
    if (compressOptionsPtr == NULL) compressOptionsPtr = &cOptionsNull;

    /* complete tmp buffer */
    if (cctxPtr->tmpInSize > 0) {   /* some data already within tmp buffer */
        size_t const sizeToCopy = blockSize - cctxPtr->tmpInSize;
        if (sizeToCopy > srcSize) {
            /* add src to tmpIn buffer */
            memcpy(cctxPtr->tmpIn + cctxPtr->tmpInSize, srcBuffer, srcSize);
            srcPtr = srcEnd;
            cctxPtr->tmpInSize += srcSize;
            /* still needs some CRC */
        } else {
            /* complete tmpIn block and then compress it */
            lastBlockCompressed = fromTmpBuffer;
            memcpy(cctxPtr->tmpIn + cctxPtr->tmpInSize, srcBuffer, sizeToCopy);
            srcPtr += sizeToCopy;

            dstPtr += LZ4F_makeBlock(dstPtr,
                                     cctxPtr->tmpIn, blockSize,
                                     compress, cctxPtr->lz4CtxPtr, cctxPtr->prefs.compressionLevel,
                                     cctxPtr->cdict,
                                     cctxPtr->prefs.frameInfo.blockChecksumFlag);

            if (cctxPtr->prefs.frameInfo.blockMode==LZ4F_blockLinked) cctxPtr->tmpIn += blockSize;
            cctxPtr->tmpInSize = 0;
        }
    }

    while ((size_t)(srcEnd - srcPtr) >= blockSize) {
        /* compress full blocks */
        lastBlockCompressed = fromSrcBuffer;
        dstPtr += LZ4F_makeBlock(dstPtr,
                                 srcPtr, blockSize,
                                 compress, cctxPtr->lz4CtxPtr, cctxPtr->prefs.compressionLevel,
                                 cctxPtr->cdict,
                                 cctxPtr->prefs.frameInfo.blockChecksumFlag);
        srcPtr += blockSize;
    }

    if ((cctxPtr->prefs.autoFlush) && (srcPtr < srcEnd)) {
        /* compress remaining input < blockSize */
        lastBlockCompressed = fromSrcBuffer;
        dstPtr += LZ4F_makeBlock(dstPtr,
                                 srcPtr, (size_t)(srcEnd - srcPtr),
                                 compress, cctxPtr->lz4CtxPtr, cctxPtr->prefs.compressionLevel,
                                 cctxPtr->cdict,
                                 cctxPtr->prefs.frameInfo.blockChecksumFlag);
        srcPtr  = srcEnd;
    }

    /* preserve dictionary if necessary */
    if ((cctxPtr->prefs.frameInfo.blockMode==LZ4F_blockLinked) && (lastBlockCompressed==fromSrcBuffer)) {
        if (compressOptionsPtr->stableSrc) {
            cctxPtr->tmpIn = cctxPtr->tmpBuff;
        } else {
            int const realDictSize = LZ4F_localSaveDict(cctxPtr);
            if (realDictSize==0) return err0r(LZ4F_ERROR_GENERIC);
            cctxPtr->tmpIn = cctxPtr->tmpBuff + realDictSize;
        }
    }

    /* keep tmpIn within limits */
    if ((cctxPtr->tmpIn + blockSize) > (cctxPtr->tmpBuff + cctxPtr->maxBufferSize)   /* necessarily LZ4F_blockLinked && lastBlockCompressed==fromTmpBuffer */
        && !(cctxPtr->prefs.autoFlush))
    {
        int const realDictSize = LZ4F_localSaveDict(cctxPtr);
        cctxPtr->tmpIn = cctxPtr->tmpBuff + realDictSize;
    }

    /* some input data left, necessarily < blockSize */
    if (srcPtr < srcEnd) {
        /* fill tmp buffer */
        size_t const sizeToCopy = (size_t)(srcEnd - srcPtr);
        memcpy(cctxPtr->tmpIn, srcPtr, sizeToCopy);
        cctxPtr->tmpInSize = sizeToCopy;
    }

    if (cctxPtr->prefs.frameInfo.contentChecksumFlag == LZ4F_contentChecksumEnabled)
        (void)XXH32_update(&(cctxPtr->xxh), srcBuffer, srcSize);

    cctxPtr->totalInSize += srcSize;
    return (size_t)(dstPtr - dstStart);
}


/*! LZ4F_flush() :
 *  When compressed data must be sent immediately, without waiting for a block to be filled,
 *  invoke LZ4_flush(), which will immediately compress any remaining data stored within LZ4F_cctx.
 *  The result of the function is the number of bytes written into dstBuffer.
 *  It can be zero, this means there was no data left within LZ4F_cctx.
 *  The function outputs an error code if it fails (can be tested using LZ4F_isError())
 *  LZ4F_compressOptions_t* is optional. NULL is a valid argument.
 */
size_t LZ4F_flush(LZ4F_cctx* cctxPtr,
                  void* dstBuffer, size_t dstCapacity,
            const LZ4F_compressOptions_t* compressOptionsPtr)
{
    BYTE* const dstStart = (BYTE*)dstBuffer;
    BYTE* dstPtr = dstStart;
    compressFunc_t compress;

    if (cctxPtr->tmpInSize == 0) return 0;   /* nothing to flush */
    if (cctxPtr->cStage != 1) return err0r(LZ4F_ERROR_GENERIC);
    if (dstCapacity < (cctxPtr->tmpInSize + BHSize + BFSize))
        return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);
    (void)compressOptionsPtr;   /* not yet useful */

    /* select compression function */
    compress = LZ4F_selectCompression(cctxPtr->prefs.frameInfo.blockMode, cctxPtr->prefs.compressionLevel);

    /* compress tmp buffer */
    dstPtr += LZ4F_makeBlock(dstPtr,
                             cctxPtr->tmpIn, cctxPtr->tmpInSize,
                             compress, cctxPtr->lz4CtxPtr, cctxPtr->prefs.compressionLevel,
                             cctxPtr->cdict,
                             cctxPtr->prefs.frameInfo.blockChecksumFlag);
    assert(((void)"flush overflows dstBuffer!", (size_t)(dstPtr - dstStart) <= dstCapacity));

    if (cctxPtr->prefs.frameInfo.blockMode == LZ4F_blockLinked)
        cctxPtr->tmpIn += cctxPtr->tmpInSize;
    cctxPtr->tmpInSize = 0;

    /* keep tmpIn within limits */
    if ((cctxPtr->tmpIn + cctxPtr->maxBlockSize) > (cctxPtr->tmpBuff + cctxPtr->maxBufferSize)) {  /* necessarily LZ4F_blockLinked */
        int const realDictSize = LZ4F_localSaveDict(cctxPtr);
        cctxPtr->tmpIn = cctxPtr->tmpBuff + realDictSize;
    }

    return (size_t)(dstPtr - dstStart);
}


/*! LZ4F_compressEnd() :
 *  When you want to properly finish the compressed frame, just call LZ4F_compressEnd().
 *  It will flush whatever data remained within compressionContext (like LZ4_flush())
 *  but also properly finalize the frame, with an endMark and an (optional) checksum.
 *  LZ4F_compressOptions_t structure is optional : you can provide NULL as argument.
 * @return: the number of bytes written into dstBuffer (necessarily >= 4 (endMark size))
 *       or an error code if it fails (can be tested using LZ4F_isError())
 *  The context can then be used again to compress a new frame, starting with LZ4F_compressBegin().
 */
size_t LZ4F_compressEnd(LZ4F_cctx* cctxPtr,
                        void* dstBuffer, size_t dstCapacity,
                  const LZ4F_compressOptions_t* compressOptionsPtr)
{
    BYTE* const dstStart = (BYTE*)dstBuffer;
    BYTE* dstPtr = dstStart;

    size_t const flushSize = LZ4F_flush(cctxPtr, dstBuffer, dstCapacity, compressOptionsPtr);
    DEBUGLOG(5,"LZ4F_compressEnd: dstCapacity=%u", (unsigned)dstCapacity);
    if (LZ4F_isError(flushSize)) return flushSize;
    dstPtr += flushSize;

    assert(flushSize <= dstCapacity);
    dstCapacity -= flushSize;

    if (dstCapacity < 4) return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);
    LZ4F_writeLE32(dstPtr, 0);
    dstPtr += 4;   /* endMark */

    if (cctxPtr->prefs.frameInfo.contentChecksumFlag == LZ4F_contentChecksumEnabled) {
        U32 const xxh = XXH32_digest(&(cctxPtr->xxh));
        if (dstCapacity < 8) return err0r(LZ4F_ERROR_dstMaxSize_tooSmall);
        DEBUGLOG(5,"Writing 32-bit content checksum");
        LZ4F_writeLE32(dstPtr, xxh);
        dstPtr+=4;   /* content Checksum */
    }

    cctxPtr->cStage = 0;   /* state is now re-usable (with identical preferences) */
    cctxPtr->maxBufferSize = 0;  /* reuse HC context */

    if (cctxPtr->prefs.frameInfo.contentSize) {
        if (cctxPtr->prefs.frameInfo.contentSize != cctxPtr->totalInSize)
            return err0r(LZ4F_ERROR_frameSize_wrong);
    }

    return (size_t)(dstPtr - dstStart);
}


/*-***************************************************
*   Frame Decompression
*****************************************************/

typedef enum {
    dstage_getFrameHeader=0, dstage_storeFrameHeader,
    dstage_init,
    dstage_getBlockHeader, dstage_storeBlockHeader,
    dstage_copyDirect, dstage_getBlockChecksum,
    dstage_getCBlock, dstage_storeCBlock,
    dstage_flushOut,
    dstage_getSuffix, dstage_storeSuffix,
    dstage_getSFrameSize, dstage_storeSFrameSize,
    dstage_skipSkippable
} dStage_t;

struct LZ4F_dctx_s {
    LZ4F_frameInfo_t frameInfo;
    U32    version;
    dStage_t dStage;
    U64    frameRemainingSize;
    size_t maxBlockSize;
    size_t maxBufferSize;
    BYTE*  tmpIn;
    size_t tmpInSize;
    size_t tmpInTarget;
    BYTE*  tmpOutBuffer;
    const BYTE* dict;
    size_t dictSize;
    BYTE*  tmpOut;
    size_t tmpOutSize;
    size_t tmpOutStart;
    XXH32_state_t xxh;
    XXH32_state_t blockChecksum;
    BYTE   header[LZ4F_HEADER_SIZE_MAX];
};  /* typedef'd to LZ4F_dctx in lz4frame.h */


/*! LZ4F_createDecompressionContext() :
 *  Create a decompressionContext object, which will track all decompression operations.
 *  Provides a pointer to a fully allocated and initialized LZ4F_decompressionContext object.
 *  Object can later be released using LZ4F_freeDecompressionContext().
 * @return : if != 0, there was an error during context creation.
 */
LZ4F_errorCode_t LZ4F_createDecompressionContext(LZ4F_dctx** LZ4F_decompressionContextPtr, unsigned versionNumber)
{
    LZ4F_dctx* const dctx = (LZ4F_dctx*)ALLOC_AND_ZERO(sizeof(LZ4F_dctx));
    if (dctx == NULL) {  /* failed allocation */
        *LZ4F_decompressionContextPtr = NULL;
        return err0r(LZ4F_ERROR_allocation_failed);
    }

    dctx->version = versionNumber;
    *LZ4F_decompressionContextPtr = dctx;
    return LZ4F_OK_NoError;
}

LZ4F_errorCode_t LZ4F_freeDecompressionContext(LZ4F_dctx* dctx)
{
    LZ4F_errorCode_t result = LZ4F_OK_NoError;
    if (dctx != NULL) {   /* can accept NULL input, like free() */
      result = (LZ4F_errorCode_t)dctx->dStage;
      FREEMEM(dctx->tmpIn);
      FREEMEM(dctx->tmpOutBuffer);
      FREEMEM(dctx);
    }
    return result;
}


/*==---   Streaming Decompression operations   ---==*/

void LZ4F_resetDecompressionContext(LZ4F_dctx* dctx)
{
    dctx->dStage = dstage_getFrameHeader;
    dctx->dict = NULL;
    dctx->dictSize = 0;
}


/*! LZ4F_decodeHeader() :
 *  input   : `src` points at the **beginning of the frame**
 *  output  : set internal values of dctx, such as
 *            dctx->frameInfo and dctx->dStage.
 *            Also allocates internal buffers.
 *  @return : nb Bytes read from src (necessarily <= srcSize)
 *            or an error code (testable with LZ4F_isError())
 */
static size_t LZ4F_decodeHeader(LZ4F_dctx* dctx, const void* src, size_t srcSize)
{
    unsigned blockMode, blockChecksumFlag, contentSizeFlag, contentChecksumFlag, dictIDFlag, blockSizeID;
    size_t frameHeaderSize;
    const BYTE* srcPtr = (const BYTE*)src;

    DEBUGLOG(5, "LZ4F_decodeHeader");
    /* need to decode header to get frameInfo */
    if (srcSize < minFHSize) return err0r(LZ4F_ERROR_frameHeader_incomplete);   /* minimal frame header size */
    MEM_INIT(&(dctx->frameInfo), 0, sizeof(dctx->frameInfo));

    /* special case : skippable frames */
    if ((LZ4F_readLE32(srcPtr) & 0xFFFFFFF0U) == LZ4F_MAGIC_SKIPPABLE_START) {
        dctx->frameInfo.frameType = LZ4F_skippableFrame;
        if (src == (void*)(dctx->header)) {
            dctx->tmpInSize = srcSize;
            dctx->tmpInTarget = 8;
            dctx->dStage = dstage_storeSFrameSize;
            return srcSize;
        } else {
            dctx->dStage = dstage_getSFrameSize;
            return 4;
        }
    }

    /* control magic number */
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
    if (LZ4F_readLE32(srcPtr) != LZ4F_MAGICNUMBER) {
        DEBUGLOG(4, "frame header error : unknown magic number");
        return err0r(LZ4F_ERROR_frameType_unknown);
    }
#endif
    dctx->frameInfo.frameType = LZ4F_frame;

    /* Flags */
    {   U32 const FLG = srcPtr[4];
        U32 const version = (FLG>>6) & _2BITS;
        blockChecksumFlag = (FLG>>4) & _1BIT;
        blockMode = (FLG>>5) & _1BIT;
        contentSizeFlag = (FLG>>3) & _1BIT;
        contentChecksumFlag = (FLG>>2) & _1BIT;
        dictIDFlag = FLG & _1BIT;
        /* validate */
        if (((FLG>>1)&_1BIT) != 0) return err0r(LZ4F_ERROR_reservedFlag_set); /* Reserved bit */
        if (version != 1) return err0r(LZ4F_ERROR_headerVersion_wrong);        /* Version Number, only supported value */
    }

    /* Frame Header Size */
    frameHeaderSize = minFHSize + (contentSizeFlag?8:0) + (dictIDFlag?4:0);

    if (srcSize < frameHeaderSize) {
        /* not enough input to fully decode frame header */
        if (srcPtr != dctx->header)
            memcpy(dctx->header, srcPtr, srcSize);
        dctx->tmpInSize = srcSize;
        dctx->tmpInTarget = frameHeaderSize;
        dctx->dStage = dstage_storeFrameHeader;
        return srcSize;
    }

    {   U32 const BD = srcPtr[5];
        blockSizeID = (BD>>4) & _3BITS;
        /* validate */
        if (((BD>>7)&_1BIT) != 0) return err0r(LZ4F_ERROR_reservedFlag_set);   /* Reserved bit */
        if (blockSizeID < 4) return err0r(LZ4F_ERROR_maxBlockSize_invalid);    /* 4-7 only supported values for the time being */
        if (((BD>>0)&_4BITS) != 0) return err0r(LZ4F_ERROR_reservedFlag_set);  /* Reserved bits */
    }

    /* check header */
    assert(frameHeaderSize > 5);
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
    {   BYTE const HC = LZ4F_headerChecksum(srcPtr+4, frameHeaderSize-5);
        if (HC != srcPtr[frameHeaderSize-1])
            return err0r(LZ4F_ERROR_headerChecksum_invalid);
    }
#endif

    /* save */
    dctx->frameInfo.blockMode = (LZ4F_blockMode_t)blockMode;
    dctx->frameInfo.blockChecksumFlag = (LZ4F_blockChecksum_t)blockChecksumFlag;
    dctx->frameInfo.contentChecksumFlag = (LZ4F_contentChecksum_t)contentChecksumFlag;
    dctx->frameInfo.blockSizeID = (LZ4F_blockSizeID_t)blockSizeID;
    dctx->maxBlockSize = LZ4F_getBlockSize(blockSizeID);
    if (contentSizeFlag)
        dctx->frameRemainingSize =
            dctx->frameInfo.contentSize = LZ4F_readLE64(srcPtr+6);
    if (dictIDFlag)
        dctx->frameInfo.dictID = LZ4F_readLE32(srcPtr + frameHeaderSize - 5);

    dctx->dStage = dstage_init;

    return frameHeaderSize;
}


/*! LZ4F_headerSize() :
 * @return : size of frame header
 *           or an error code, which can be tested using LZ4F_isError()
 */
size_t LZ4F_headerSize(const void* src, size_t srcSize)
{
    if (src == NULL) return err0r(LZ4F_ERROR_srcPtr_wrong);

    /* minimal srcSize to determine header size */
    if (srcSize < LZ4F_MIN_SIZE_TO_KNOW_HEADER_LENGTH)
        return err0r(LZ4F_ERROR_frameHeader_incomplete);

    /* special case : skippable frames */
    if ((LZ4F_readLE32(src) & 0xFFFFFFF0U) == LZ4F_MAGIC_SKIPPABLE_START)
        return 8;

    /* control magic number */
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
    if (LZ4F_readLE32(src) != LZ4F_MAGICNUMBER)
        return err0r(LZ4F_ERROR_frameType_unknown);
#endif

    /* Frame Header Size */
    {   BYTE const FLG = ((const BYTE*)src)[4];
        U32 const contentSizeFlag = (FLG>>3) & _1BIT;
        U32 const dictIDFlag = FLG & _1BIT;
        return minFHSize + (contentSizeFlag?8:0) + (dictIDFlag?4:0);
    }
}

/*! LZ4F_getFrameInfo() :
 *  This function extracts frame parameters (max blockSize, frame checksum, etc.).
 *  Usage is optional. Objective is to provide relevant information for allocation purposes.
 *  This function works in 2 situations :
 *   - At the beginning of a new frame, in which case it will decode this information from `srcBuffer`, and start the decoding process.
 *     Amount of input data provided must be large enough to successfully decode the frame header.
 *     A header size is variable, but is guaranteed to be <= LZ4F_HEADER_SIZE_MAX bytes. It's possible to provide more input data than this minimum.
 *   - After decoding has been started. In which case, no input is read, frame parameters are extracted from dctx.
 *  The number of bytes consumed from srcBuffer will be updated within *srcSizePtr (necessarily <= original value).
 *  Decompression must resume from (srcBuffer + *srcSizePtr).
 * @return : an hint about how many srcSize bytes LZ4F_decompress() expects for next call,
 *           or an error code which can be tested using LZ4F_isError()
 *  note 1 : in case of error, dctx is not modified. Decoding operations can resume from where they stopped.
 *  note 2 : frame parameters are *copied into* an already allocated LZ4F_frameInfo_t structure.
 */
LZ4F_errorCode_t LZ4F_getFrameInfo(LZ4F_dctx* dctx,
                                   LZ4F_frameInfo_t* frameInfoPtr,
                             const void* srcBuffer, size_t* srcSizePtr)
{
    LZ4F_STATIC_ASSERT(dstage_getFrameHeader < dstage_storeFrameHeader);
    if (dctx->dStage > dstage_storeFrameHeader) {
        /* frameInfo already decoded */
        size_t o=0, i=0;
        *srcSizePtr = 0;
        *frameInfoPtr = dctx->frameInfo;
        /* returns : recommended nb of bytes for LZ4F_decompress() */
        return LZ4F_decompress(dctx, NULL, &o, NULL, &i, NULL);
    } else {
        if (dctx->dStage == dstage_storeFrameHeader) {
            /* frame decoding already started, in the middle of header => automatic fail */
            *srcSizePtr = 0;
            return err0r(LZ4F_ERROR_frameDecoding_alreadyStarted);
        } else {
            size_t const hSize = LZ4F_headerSize(srcBuffer, *srcSizePtr);
            if (LZ4F_isError(hSize)) { *srcSizePtr=0; return hSize; }
            if (*srcSizePtr < hSize) {
                *srcSizePtr=0;
                return err0r(LZ4F_ERROR_frameHeader_incomplete);
            }

            {   size_t decodeResult = LZ4F_decodeHeader(dctx, srcBuffer, hSize);
                if (LZ4F_isError(decodeResult)) {
                    *srcSizePtr = 0;
                } else {
                    *srcSizePtr = decodeResult;
                    decodeResult = BHSize;   /* block header size */
                }
                *frameInfoPtr = dctx->frameInfo;
                return decodeResult;
    }   }   }
}


/* LZ4F_updateDict() :
 * only used for LZ4F_blockLinked mode
 * Condition : dstPtr != NULL
 */
static void LZ4F_updateDict(LZ4F_dctx* dctx,
                      const BYTE* dstPtr, size_t dstSize, const BYTE* dstBufferStart,
                      unsigned withinTmp)
{
    assert(dstPtr != NULL);
    if (dctx->dictSize==0) {
        dctx->dict = (const BYTE*)dstPtr;   /* priority to prefix mode */
    }
    assert(dctx->dict != NULL);

    if (dctx->dict + dctx->dictSize == dstPtr) {  /* prefix mode, everything within dstBuffer */
        dctx->dictSize += dstSize;
        return;
    }

    assert(dstPtr >= dstBufferStart);
    if ((size_t)(dstPtr - dstBufferStart) + dstSize >= 64 KB) {  /* history in dstBuffer becomes large enough to become dictionary */
        dctx->dict = (const BYTE*)dstBufferStart;
        dctx->dictSize = (size_t)(dstPtr - dstBufferStart) + dstSize;
        return;
    }

    assert(dstSize < 64 KB);   /* if dstSize >= 64 KB, dictionary would be set into dstBuffer directly */

    /* dstBuffer does not contain whole useful history (64 KB), so it must be saved within tmpOutBuffer */
    assert(dctx->tmpOutBuffer != NULL);

    if (withinTmp && (dctx->dict == dctx->tmpOutBuffer)) {   /* continue history within tmpOutBuffer */
        /* withinTmp expectation : content of [dstPtr,dstSize] is same as [dict+dictSize,dstSize], so we just extend it */
        assert(dctx->dict + dctx->dictSize == dctx->tmpOut + dctx->tmpOutStart);
        dctx->dictSize += dstSize;
        return;
    }

    if (withinTmp) { /* copy relevant dict portion in front of tmpOut within tmpOutBuffer */
        size_t const preserveSize = (size_t)(dctx->tmpOut - dctx->tmpOutBuffer);
        size_t copySize = 64 KB - dctx->tmpOutSize;
        const BYTE* const oldDictEnd = dctx->dict + dctx->dictSize - dctx->tmpOutStart;
        if (dctx->tmpOutSize > 64 KB) copySize = 0;
        if (copySize > preserveSize) copySize = preserveSize;

        memcpy(dctx->tmpOutBuffer + preserveSize - copySize, oldDictEnd - copySize, copySize);

        dctx->dict = dctx->tmpOutBuffer;
        dctx->dictSize = preserveSize + dctx->tmpOutStart + dstSize;
        return;
    }

    if (dctx->dict == dctx->tmpOutBuffer) {    /* copy dst into tmp to complete dict */
        if (dctx->dictSize + dstSize > dctx->maxBufferSize) {  /* tmp buffer not large enough */
            size_t const preserveSize = 64 KB - dstSize;
            memcpy(dctx->tmpOutBuffer, dctx->dict + dctx->dictSize - preserveSize, preserveSize);
            dctx->dictSize = preserveSize;
        }
        memcpy(dctx->tmpOutBuffer + dctx->dictSize, dstPtr, dstSize);
        dctx->dictSize += dstSize;
        return;
    }

    /* join dict & dest into tmp */
    {   size_t preserveSize = 64 KB - dstSize;
        if (preserveSize > dctx->dictSize) preserveSize = dctx->dictSize;
        memcpy(dctx->tmpOutBuffer, dctx->dict + dctx->dictSize - preserveSize, preserveSize);
        memcpy(dctx->tmpOutBuffer + preserveSize, dstPtr, dstSize);
        dctx->dict = dctx->tmpOutBuffer;
        dctx->dictSize = preserveSize + dstSize;
    }
}



/*! LZ4F_decompress() :
 *  Call this function repetitively to regenerate compressed data in srcBuffer.
 *  The function will attempt to decode up to *srcSizePtr bytes from srcBuffer
 *  into dstBuffer of capacity *dstSizePtr.
 *
 *  The number of bytes regenerated into dstBuffer will be provided within *dstSizePtr (necessarily <= original value).
 *
 *  The number of bytes effectively read from srcBuffer will be provided within *srcSizePtr (necessarily <= original value).
 *  If number of bytes read is < number of bytes provided, then decompression operation is not complete.
 *  Remaining data will have to be presented again in a subsequent invocation.
 *
 *  The function result is an hint of the better srcSize to use for next call to LZ4F_decompress.
 *  Schematically, it's the size of the current (or remaining) compressed block + header of next block.
 *  Respecting the hint provides a small boost to performance, since it allows less buffer shuffling.
 *  Note that this is just a hint, and it's always possible to any srcSize value.
 *  When a frame is fully decoded, @return will be 0.
 *  If decompression failed, @return is an error code which can be tested using LZ4F_isError().
 */
size_t LZ4F_decompress(LZ4F_dctx* dctx,
                       void* dstBuffer, size_t* dstSizePtr,
                       const void* srcBuffer, size_t* srcSizePtr,
                       const LZ4F_decompressOptions_t* decompressOptionsPtr)
{
    LZ4F_decompressOptions_t optionsNull;
    const BYTE* const srcStart = (const BYTE*)srcBuffer;
    const BYTE* const srcEnd = srcStart + *srcSizePtr;
    const BYTE* srcPtr = srcStart;
    BYTE* const dstStart = (BYTE*)dstBuffer;
    BYTE* const dstEnd = dstStart ? dstStart + *dstSizePtr : NULL;
    BYTE* dstPtr = dstStart;
    const BYTE* selectedIn = NULL;
    unsigned doAnotherStage = 1;
    size_t nextSrcSizeHint = 1;


    DEBUGLOG(5, "LZ4F_decompress : %p,%u => %p,%u",
            srcBuffer, (unsigned)*srcSizePtr, dstBuffer, (unsigned)*dstSizePtr);
    if (dstBuffer == NULL) assert(*dstSizePtr == 0);
    MEM_INIT(&optionsNull, 0, sizeof(optionsNull));
    if (decompressOptionsPtr==NULL) decompressOptionsPtr = &optionsNull;
    *srcSizePtr = 0;
    *dstSizePtr = 0;
    assert(dctx != NULL);

    /* behaves as a state machine */

    while (doAnotherStage) {

        switch(dctx->dStage)
        {

        case dstage_getFrameHeader:
            DEBUGLOG(6, "dstage_getFrameHeader");
            if ((size_t)(srcEnd-srcPtr) >= maxFHSize) {  /* enough to decode - shortcut */
                size_t const hSize = LZ4F_decodeHeader(dctx, srcPtr, (size_t)(srcEnd-srcPtr));  /* will update dStage appropriately */
                if (LZ4F_isError(hSize)) return hSize;
                srcPtr += hSize;
                break;
            }
            dctx->tmpInSize = 0;
            if (srcEnd-srcPtr == 0) return minFHSize;   /* 0-size input */
            dctx->tmpInTarget = minFHSize;   /* minimum size to decode header */
            dctx->dStage = dstage_storeFrameHeader;
            /* fall-through */

        case dstage_storeFrameHeader:
            DEBUGLOG(6, "dstage_storeFrameHeader");
            {   size_t const sizeToCopy = MIN(dctx->tmpInTarget - dctx->tmpInSize, (size_t)(srcEnd - srcPtr));
                memcpy(dctx->header + dctx->tmpInSize, srcPtr, sizeToCopy);
                dctx->tmpInSize += sizeToCopy;
                srcPtr += sizeToCopy;
            }
            if (dctx->tmpInSize < dctx->tmpInTarget) {
                nextSrcSizeHint = (dctx->tmpInTarget - dctx->tmpInSize) + BHSize;   /* rest of header + nextBlockHeader */
                doAnotherStage = 0;   /* not enough src data, ask for some more */
                break;
            }
            {   size_t const hSize = LZ4F_decodeHeader(dctx, dctx->header, dctx->tmpInTarget);  /* will update dStage appropriately */
                if (LZ4F_isError(hSize)) return hSize;
            }
            break;

        case dstage_init:
            DEBUGLOG(6, "dstage_init");
            if (dctx->frameInfo.contentChecksumFlag) (void)XXH32_reset(&(dctx->xxh), 0);
            /* internal buffers allocation */
            {   size_t const bufferNeeded = dctx->maxBlockSize
                    + ((dctx->frameInfo.blockMode==LZ4F_blockLinked) ? 128 KB : 0);
                if (bufferNeeded > dctx->maxBufferSize) {   /* tmp buffers too small */
                    dctx->maxBufferSize = 0;   /* ensure allocation will be re-attempted on next entry*/
                    FREEMEM(dctx->tmpIn);
                    dctx->tmpIn = (BYTE*)ALLOC(dctx->maxBlockSize + BFSize /* block checksum */);
                    if (dctx->tmpIn == NULL)
                        return err0r(LZ4F_ERROR_allocation_failed);
                    FREEMEM(dctx->tmpOutBuffer);
                    dctx->tmpOutBuffer= (BYTE*)ALLOC(bufferNeeded);
                    if (dctx->tmpOutBuffer== NULL)
                        return err0r(LZ4F_ERROR_allocation_failed);
                    dctx->maxBufferSize = bufferNeeded;
            }   }
            dctx->tmpInSize = 0;
            dctx->tmpInTarget = 0;
            dctx->tmpOut = dctx->tmpOutBuffer;
            dctx->tmpOutStart = 0;
            dctx->tmpOutSize = 0;

            dctx->dStage = dstage_getBlockHeader;
            /* fall-through */

        case dstage_getBlockHeader:
            if ((size_t)(srcEnd - srcPtr) >= BHSize) {
                selectedIn = srcPtr;
                srcPtr += BHSize;
            } else {
                /* not enough input to read cBlockSize field */
                dctx->tmpInSize = 0;
                dctx->dStage = dstage_storeBlockHeader;
            }

            if (dctx->dStage == dstage_storeBlockHeader)   /* can be skipped */
        case dstage_storeBlockHeader:
            {   size_t const remainingInput = (size_t)(srcEnd - srcPtr);
                size_t const wantedData = BHSize - dctx->tmpInSize;
                size_t const sizeToCopy = MIN(wantedData, remainingInput);
                memcpy(dctx->tmpIn + dctx->tmpInSize, srcPtr, sizeToCopy);
                srcPtr += sizeToCopy;
                dctx->tmpInSize += sizeToCopy;

                if (dctx->tmpInSize < BHSize) {   /* not enough input for cBlockSize */
                    nextSrcSizeHint = BHSize - dctx->tmpInSize;
                    doAnotherStage  = 0;
                    break;
                }
                selectedIn = dctx->tmpIn;
            }   /* if (dctx->dStage == dstage_storeBlockHeader) */

        /* decode block header */
            {   U32 const blockHeader = LZ4F_readLE32(selectedIn);
                size_t const nextCBlockSize = blockHeader & 0x7FFFFFFFU;
                size_t const crcSize = dctx->frameInfo.blockChecksumFlag * BFSize;
                if (blockHeader==0) {  /* frameEnd signal, no more block */
                    DEBUGLOG(5, "end of frame");
                    dctx->dStage = dstage_getSuffix;
                    break;
                }
                if (nextCBlockSize > dctx->maxBlockSize) {
                    return err0r(LZ4F_ERROR_maxBlockSize_invalid);
                }
                if (blockHeader & LZ4F_BLOCKUNCOMPRESSED_FLAG) {
                    /* next block is uncompressed */
                    dctx->tmpInTarget = nextCBlockSize;
                    DEBUGLOG(5, "next block is uncompressed (size %u)", (U32)nextCBlockSize);
                    if (dctx->frameInfo.blockChecksumFlag) {
                        (void)XXH32_reset(&dctx->blockChecksum, 0);
                    }
                    dctx->dStage = dstage_copyDirect;
                    break;
                }
                /* next block is a compressed block */
                dctx->tmpInTarget = nextCBlockSize + crcSize;
                dctx->dStage = dstage_getCBlock;
                if (dstPtr==dstEnd || srcPtr==srcEnd) {
                    nextSrcSizeHint = BHSize + nextCBlockSize + crcSize;
                    doAnotherStage = 0;
                }
                break;
            }

        case dstage_copyDirect:   /* uncompressed block */
            DEBUGLOG(6, "dstage_copyDirect");
            {   size_t sizeToCopy;
                if (dstPtr == NULL) {
                    sizeToCopy = 0;
                } else {
                    size_t const minBuffSize = MIN((size_t)(srcEnd-srcPtr), (size_t)(dstEnd-dstPtr));
                    sizeToCopy = MIN(dctx->tmpInTarget, minBuffSize);
                    memcpy(dstPtr, srcPtr, sizeToCopy);
                    if (dctx->frameInfo.blockChecksumFlag) {
                        (void)XXH32_update(&dctx->blockChecksum, srcPtr, sizeToCopy);
                    }
                    if (dctx->frameInfo.contentChecksumFlag)
                        (void)XXH32_update(&dctx->xxh, srcPtr, sizeToCopy);
                    if (dctx->frameInfo.contentSize)
                        dctx->frameRemainingSize -= sizeToCopy;

                    /* history management (linked blocks only)*/
                    if (dctx->frameInfo.blockMode == LZ4F_blockLinked) {
                        LZ4F_updateDict(dctx, dstPtr, sizeToCopy, dstStart, 0);
                }   }

                srcPtr += sizeToCopy;
                dstPtr += sizeToCopy;
                if (sizeToCopy == dctx->tmpInTarget) {   /* all done */
                    if (dctx->frameInfo.blockChecksumFlag) {
                        dctx->tmpInSize = 0;
                        dctx->dStage = dstage_getBlockChecksum;
                    } else
                        dctx->dStage = dstage_getBlockHeader;  /* new block */
                    break;
                }
                dctx->tmpInTarget -= sizeToCopy;  /* need to copy more */
            }
            nextSrcSizeHint = dctx->tmpInTarget +
                            +(dctx->frameInfo.blockChecksumFlag ? BFSize : 0)
                            + BHSize /* next header size */;
            doAnotherStage = 0;
            break;

        /* check block checksum for recently transferred uncompressed block */
        case dstage_getBlockChecksum:
            DEBUGLOG(6, "dstage_getBlockChecksum");
            {   const void* crcSrc;
                if ((srcEnd-srcPtr >= 4) && (dctx->tmpInSize==0)) {
                    crcSrc = srcPtr;
                    srcPtr += 4;
                } else {
                    size_t const stillToCopy = 4 - dctx->tmpInSize;
                    size_t const sizeToCopy = MIN(stillToCopy, (size_t)(srcEnd-srcPtr));
                    memcpy(dctx->header + dctx->tmpInSize, srcPtr, sizeToCopy);
                    dctx->tmpInSize += sizeToCopy;
                    srcPtr += sizeToCopy;
                    if (dctx->tmpInSize < 4) {  /* all input consumed */
                        doAnotherStage = 0;
                        break;
                    }
                    crcSrc = dctx->header;
                }
                {   U32 const readCRC = LZ4F_readLE32(crcSrc);
                    U32 const calcCRC = XXH32_digest(&dctx->blockChecksum);
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
                    DEBUGLOG(6, "compare block checksum");
                    if (readCRC != calcCRC) {
                        DEBUGLOG(4, "incorrect block checksum: %08X != %08X",
                                readCRC, calcCRC);
                        return err0r(LZ4F_ERROR_blockChecksum_invalid);
                    }
#else
                    (void)readCRC;
                    (void)calcCRC;
#endif
            }   }
            dctx->dStage = dstage_getBlockHeader;  /* new block */
            break;

        case dstage_getCBlock:
            DEBUGLOG(6, "dstage_getCBlock");
            if ((size_t)(srcEnd-srcPtr) < dctx->tmpInTarget) {
                dctx->tmpInSize = 0;
                dctx->dStage = dstage_storeCBlock;
                break;
            }
            /* input large enough to read full block directly */
            selectedIn = srcPtr;
            srcPtr += dctx->tmpInTarget;

            if (0)  /* always jump over next block */
        case dstage_storeCBlock:
            {   size_t const wantedData = dctx->tmpInTarget - dctx->tmpInSize;
                size_t const inputLeft = (size_t)(srcEnd-srcPtr);
                size_t const sizeToCopy = MIN(wantedData, inputLeft);
                memcpy(dctx->tmpIn + dctx->tmpInSize, srcPtr, sizeToCopy);
                dctx->tmpInSize += sizeToCopy;
                srcPtr += sizeToCopy;
                if (dctx->tmpInSize < dctx->tmpInTarget) { /* need more input */
                    nextSrcSizeHint = (dctx->tmpInTarget - dctx->tmpInSize)
                                    + (dctx->frameInfo.blockChecksumFlag ? BFSize : 0)
                                    + BHSize /* next header size */;
                    doAnotherStage = 0;
                    break;
                }
                selectedIn = dctx->tmpIn;
            }

            /* At this stage, input is large enough to decode a block */
            if (dctx->frameInfo.blockChecksumFlag) {
                dctx->tmpInTarget -= 4;
                assert(selectedIn != NULL);  /* selectedIn is defined at this stage (either srcPtr, or dctx->tmpIn) */
                {   U32 const readBlockCrc = LZ4F_readLE32(selectedIn + dctx->tmpInTarget);
                    U32 const calcBlockCrc = XXH32(selectedIn, dctx->tmpInTarget, 0);
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
                    if (readBlockCrc != calcBlockCrc)
                        return err0r(LZ4F_ERROR_blockChecksum_invalid);
#else
                    (void)readBlockCrc;
                    (void)calcBlockCrc;
#endif
            }   }

            if ((size_t)(dstEnd-dstPtr) >= dctx->maxBlockSize) {
                const char* dict = (const char*)dctx->dict;
                size_t dictSize = dctx->dictSize;
                int decodedSize;
                assert(dstPtr != NULL);
                if (dict && dictSize > 1 GB) {
                    /* the dictSize param is an int, avoid truncation / sign issues */
                    dict += dictSize - 64 KB;
                    dictSize = 64 KB;
                }
                /* enough capacity in `dst` to decompress directly there */
                decodedSize = LZ4_decompress_safe_usingDict(
                        (const char*)selectedIn, (char*)dstPtr,
                        (int)dctx->tmpInTarget, (int)dctx->maxBlockSize,
                        dict, (int)dictSize);
                if (decodedSize < 0) return err0r(LZ4F_ERROR_GENERIC);   /* decompression failed */
                if (dctx->frameInfo.contentChecksumFlag)
                    XXH32_update(&(dctx->xxh), dstPtr, (size_t)decodedSize);
                if (dctx->frameInfo.contentSize)
                    dctx->frameRemainingSize -= (size_t)decodedSize;

                /* dictionary management */
                if (dctx->frameInfo.blockMode==LZ4F_blockLinked) {
                    LZ4F_updateDict(dctx, dstPtr, (size_t)decodedSize, dstStart, 0);
                }

                dstPtr += decodedSize;
                dctx->dStage = dstage_getBlockHeader;
                break;
            }

            /* not enough place into dst : decode into tmpOut */
            /* ensure enough place for tmpOut */
            if (dctx->frameInfo.blockMode == LZ4F_blockLinked) {
                if (dctx->dict == dctx->tmpOutBuffer) {
                    if (dctx->dictSize > 128 KB) {
                        memcpy(dctx->tmpOutBuffer, dctx->dict + dctx->dictSize - 64 KB, 64 KB);
                        dctx->dictSize = 64 KB;
                    }
                    dctx->tmpOut = dctx->tmpOutBuffer + dctx->dictSize;
                } else {  /* dict not within tmp */
                    size_t const reservedDictSpace = MIN(dctx->dictSize, 64 KB);
                    dctx->tmpOut = dctx->tmpOutBuffer + reservedDictSpace;
            }   }

            /* Decode block */
            {   const char* dict = (const char*)dctx->dict;
                size_t dictSize = dctx->dictSize;
                int decodedSize;
                if (dict && dictSize > 1 GB) {
                    /* the dictSize param is an int, avoid truncation / sign issues */
                    dict += dictSize - 64 KB;
                    dictSize = 64 KB;
                }
                decodedSize = LZ4_decompress_safe_usingDict(
                        (const char*)selectedIn, (char*)dctx->tmpOut,
                        (int)dctx->tmpInTarget, (int)dctx->maxBlockSize,
                        dict, (int)dictSize);
                if (decodedSize < 0)  /* decompression failed */
                    return err0r(LZ4F_ERROR_decompressionFailed);
                if (dctx->frameInfo.contentChecksumFlag)
                    XXH32_update(&(dctx->xxh), dctx->tmpOut, (size_t)decodedSize);
                if (dctx->frameInfo.contentSize)
                    dctx->frameRemainingSize -= (size_t)decodedSize;
                dctx->tmpOutSize = (size_t)decodedSize;
                dctx->tmpOutStart = 0;
                dctx->dStage = dstage_flushOut;
            }
            /* fall-through */

        case dstage_flushOut:  /* flush decoded data from tmpOut to dstBuffer */
            DEBUGLOG(6, "dstage_flushOut");
            if (dstPtr != NULL) {
                size_t const sizeToCopy = MIN(dctx->tmpOutSize - dctx->tmpOutStart, (size_t)(dstEnd-dstPtr));
                memcpy(dstPtr, dctx->tmpOut + dctx->tmpOutStart, sizeToCopy);

                /* dictionary management */
                if (dctx->frameInfo.blockMode == LZ4F_blockLinked)
                    LZ4F_updateDict(dctx, dstPtr, sizeToCopy, dstStart, 1 /*withinTmp*/);

                dctx->tmpOutStart += sizeToCopy;
                dstPtr += sizeToCopy;
            }
            if (dctx->tmpOutStart == dctx->tmpOutSize) { /* all flushed */
                dctx->dStage = dstage_getBlockHeader;  /* get next block */
                break;
            }
            /* could not flush everything : stop there, just request a block header */
            doAnotherStage = 0;
            nextSrcSizeHint = BHSize;
            break;

        case dstage_getSuffix:
            if (dctx->frameRemainingSize)
                return err0r(LZ4F_ERROR_frameSize_wrong);   /* incorrect frame size decoded */
            if (!dctx->frameInfo.contentChecksumFlag) {  /* no checksum, frame is completed */
                nextSrcSizeHint = 0;
                LZ4F_resetDecompressionContext(dctx);
                doAnotherStage = 0;
                break;
            }
            if ((srcEnd - srcPtr) < 4) {  /* not enough size for entire CRC */
                dctx->tmpInSize = 0;
                dctx->dStage = dstage_storeSuffix;
            } else {
                selectedIn = srcPtr;
                srcPtr += 4;
            }

            if (dctx->dStage == dstage_storeSuffix)   /* can be skipped */
        case dstage_storeSuffix:
            {   size_t const remainingInput = (size_t)(srcEnd - srcPtr);
                size_t const wantedData = 4 - dctx->tmpInSize;
                size_t const sizeToCopy = MIN(wantedData, remainingInput);
                memcpy(dctx->tmpIn + dctx->tmpInSize, srcPtr, sizeToCopy);
                srcPtr += sizeToCopy;
                dctx->tmpInSize += sizeToCopy;
                if (dctx->tmpInSize < 4) { /* not enough input to read complete suffix */
                    nextSrcSizeHint = 4 - dctx->tmpInSize;
                    doAnotherStage=0;
                    break;
                }
                selectedIn = dctx->tmpIn;
            }   /* if (dctx->dStage == dstage_storeSuffix) */

        /* case dstage_checkSuffix: */   /* no direct entry, avoid initialization risks */
            {   U32 const readCRC = LZ4F_readLE32(selectedIn);
                U32 const resultCRC = XXH32_digest(&(dctx->xxh));
#ifndef FUZZING_BUILD_MODE_UNSAFE_FOR_PRODUCTION
                if (readCRC != resultCRC)
                    return err0r(LZ4F_ERROR_contentChecksum_invalid);
#else
                (void)readCRC;
                (void)resultCRC;
#endif
                nextSrcSizeHint = 0;
                LZ4F_resetDecompressionContext(dctx);
                doAnotherStage = 0;
                break;
            }

        case dstage_getSFrameSize:
            if ((srcEnd - srcPtr) >= 4) {
                selectedIn = srcPtr;
                srcPtr += 4;
            } else {
                /* not enough input to read cBlockSize field */
                dctx->tmpInSize = 4;
                dctx->tmpInTarget = 8;
                dctx->dStage = dstage_storeSFrameSize;
            }

            if (dctx->dStage == dstage_storeSFrameSize)
        case dstage_storeSFrameSize:
            {   size_t const sizeToCopy = MIN(dctx->tmpInTarget - dctx->tmpInSize,
                                             (size_t)(srcEnd - srcPtr) );
                memcpy(dctx->header + dctx->tmpInSize, srcPtr, sizeToCopy);
                srcPtr += sizeToCopy;
                dctx->tmpInSize += sizeToCopy;
                if (dctx->tmpInSize < dctx->tmpInTarget) {
                    /* not enough input to get full sBlockSize; wait for more */
                    nextSrcSizeHint = dctx->tmpInTarget - dctx->tmpInSize;
                    doAnotherStage = 0;
                    break;
                }
                selectedIn = dctx->header + 4;
            }   /* if (dctx->dStage == dstage_storeSFrameSize) */

        /* case dstage_decodeSFrameSize: */   /* no direct entry */
            {   size_t const SFrameSize = LZ4F_readLE32(selectedIn);
                dctx->frameInfo.contentSize = SFrameSize;
                dctx->tmpInTarget = SFrameSize;
                dctx->dStage = dstage_skipSkippable;
                break;
            }

        case dstage_skipSkippable:
            {   size_t const skipSize = MIN(dctx->tmpInTarget, (size_t)(srcEnd-srcPtr));
                srcPtr += skipSize;
                dctx->tmpInTarget -= skipSize;
                doAnotherStage = 0;
                nextSrcSizeHint = dctx->tmpInTarget;
                if (nextSrcSizeHint) break;  /* still more to skip */
                /* frame fully skipped : prepare context for a new frame */
                LZ4F_resetDecompressionContext(dctx);
                break;
            }
        }   /* switch (dctx->dStage) */
    }   /* while (doAnotherStage) */

    /* preserve history within tmp whenever necessary */
    LZ4F_STATIC_ASSERT((unsigned)dstage_init == 2);
    if ( (dctx->frameInfo.blockMode==LZ4F_blockLinked)  /* next block will use up to 64KB from previous ones */
      && (dctx->dict != dctx->tmpOutBuffer)             /* dictionary is not already within tmp */
      && (dctx->dict != NULL)                           /* dictionary exists */
      && (!decompressOptionsPtr->stableDst)             /* cannot rely on dst data to remain there for next call */
      && ((unsigned)(dctx->dStage)-2 < (unsigned)(dstage_getSuffix)-2) )  /* valid stages : [init ... getSuffix[ */
    {
        if (dctx->dStage == dstage_flushOut) {
            size_t const preserveSize = (size_t)(dctx->tmpOut - dctx->tmpOutBuffer);
            size_t copySize = 64 KB - dctx->tmpOutSize;
            const BYTE* oldDictEnd = dctx->dict + dctx->dictSize - dctx->tmpOutStart;
            if (dctx->tmpOutSize > 64 KB) copySize = 0;
            if (copySize > preserveSize) copySize = preserveSize;
            assert(dctx->tmpOutBuffer != NULL);

            memcpy(dctx->tmpOutBuffer + preserveSize - copySize, oldDictEnd - copySize, copySize);

            dctx->dict = dctx->tmpOutBuffer;
            dctx->dictSize = preserveSize + dctx->tmpOutStart;
        } else {
            const BYTE* const oldDictEnd = dctx->dict + dctx->dictSize;
            size_t const newDictSize = MIN(dctx->dictSize, 64 KB);

            memcpy(dctx->tmpOutBuffer, oldDictEnd - newDictSize, newDictSize);

            dctx->dict = dctx->tmpOutBuffer;
            dctx->dictSize = newDictSize;
            dctx->tmpOut = dctx->tmpOutBuffer + newDictSize;
        }
    }

    *srcSizePtr = (size_t)(srcPtr - srcStart);
    *dstSizePtr = (size_t)(dstPtr - dstStart);
    return nextSrcSizeHint;
}

/*! LZ4F_decompress_usingDict() :
 *  Same as LZ4F_decompress(), using a predefined dictionary.
 *  Dictionary is used "in place", without any preprocessing.
 *  It must remain accessible throughout the entire frame decoding.
 */
size_t LZ4F_decompress_usingDict(LZ4F_dctx* dctx,
                       void* dstBuffer, size_t* dstSizePtr,
                       const void* srcBuffer, size_t* srcSizePtr,
                       const void* dict, size_t dictSize,
                       const LZ4F_decompressOptions_t* decompressOptionsPtr)
{
    if (dctx->dStage <= dstage_init) {
        dctx->dict = (const BYTE*)dict;
        dctx->dictSize = dictSize;
    }
    return LZ4F_decompress(dctx, dstBuffer, dstSizePtr,
                           srcBuffer, srcSizePtr,
                           decompressOptionsPtr);
}
