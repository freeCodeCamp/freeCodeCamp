/*
   xxHash - Extremely Fast Hash algorithm
   Header File
   Copyright (C) 2012-2016, Yann Collet.

   BSD 2-Clause License (http://www.opensource.org/licenses/bsd-license.php)

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are
   met:

       * Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above
   copyright notice, this list of conditions and the following disclaimer
   in the documentation and/or other materials provided with the
   distribution.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

   You can contact the author at :
   - xxHash source repository : https://github.com/Cyan4973/xxHash
*/

/* Notice extracted from xxHash homepage :

xxHash is an extremely fast Hash algorithm, running at RAM speed limits.
It also successfully passes all tests from the SMHasher suite.

Comparison (single thread, Windows Seven 32 bits, using SMHasher on a Core 2 Duo @3GHz)

Name            Speed       Q.Score   Author
xxHash          5.4 GB/s     10
CrapWow         3.2 GB/s      2       Andrew
MumurHash 3a    2.7 GB/s     10       Austin Appleby
SpookyHash      2.0 GB/s     10       Bob Jenkins
SBox            1.4 GB/s      9       Bret Mulvey
Lookup3         1.2 GB/s      9       Bob Jenkins
SuperFastHash   1.2 GB/s      1       Paul Hsieh
CityHash64      1.05 GB/s    10       Pike & Alakuijala
FNV             0.55 GB/s     5       Fowler, Noll, Vo
CRC32           0.43 GB/s     9
MD5-32          0.33 GB/s    10       Ronald L. Rivest
SHA1-32         0.28 GB/s    10

Q.Score is a measure of quality of the hash function.
It depends on successfully passing SMHasher test set.
10 is a perfect score.

A 64-bit version, named XXH64, is available since r35.
It offers much better speed, but for 64-bit applications only.
Name     Speed on 64 bits    Speed on 32 bits
XXH64       13.8 GB/s            1.9 GB/s
XXH32        6.8 GB/s            6.0 GB/s
*/

#ifndef XXHASH_H_5627135585666179
#define XXHASH_H_5627135585666179 1

#if defined (__cplusplus)
extern "C" {
#endif


/* ****************************
*  Definitions
******************************/
#include <stddef.h>   /* size_t */
typedef enum { XXH_OK=0, XXH_ERROR } XXH_errorcode;


/* ****************************
 *  API modifier
 ******************************/
/** XXH_INLINE_ALL (and XXH_PRIVATE_API)
 *  This is useful to include xxhash functions in `static` mode
 *  in order to inline them, and remove their symbol from the public list.
 *  Inlining can offer dramatic performance improvement on small keys.
 *  Methodology :
 *     #define XXH_INLINE_ALL
 *     #include "xxhash.h"
 * `xxhash.c` is automatically included.
 *  It's not useful to compile and link it as a separate module.
 */
#if defined(XXH_INLINE_ALL) || defined(XXH_PRIVATE_API)
#  ifndef XXH_STATIC_LINKING_ONLY
#    define XXH_STATIC_LINKING_ONLY
#  endif
#  if defined(__GNUC__)
#    define XXH_PUBLIC_API static __inline __attribute__((unused))
#  elif defined (__cplusplus) || (defined (__STDC_VERSION__) && (__STDC_VERSION__ >= 199901L) /* C99 */)
#    define XXH_PUBLIC_API static inline
#  elif defined(_MSC_VER)
#    define XXH_PUBLIC_API static __inline
#  else
     /* this version may generate warnings for unused static functions */
#    define XXH_PUBLIC_API static
#  endif
#else
#  define XXH_PUBLIC_API   /* do nothing */
#endif /* XXH_INLINE_ALL || XXH_PRIVATE_API */

/*! XXH_NAMESPACE, aka Namespace Emulation :
 *
 * If you want to include _and expose_ xxHash functions from within your own library,
 * but also want to avoid symbol collisions with other libraries which may also include xxHash,
 *
 * you can use XXH_NAMESPACE, to automatically prefix any public symbol from xxhash library
 * with the value of XXH_NAMESPACE (therefore, avoid NULL and numeric values).
 *
 * Note that no change is required within the calling program as long as it includes `xxhash.h` :
 * regular symbol name will be automatically translated by this header.
 */
#ifdef XXH_NAMESPACE
#  define XXH_CAT(A,B) A##B
#  define XXH_NAME2(A,B) XXH_CAT(A,B)
#  define XXH_versionNumber XXH_NAME2(XXH_NAMESPACE, XXH_versionNumber)
#  define XXH32 XXH_NAME2(XXH_NAMESPACE, XXH32)
#  define XXH32_createState XXH_NAME2(XXH_NAMESPACE, XXH32_createState)
#  define XXH32_freeState XXH_NAME2(XXH_NAMESPACE, XXH32_freeState)
#  define XXH32_reset XXH_NAME2(XXH_NAMESPACE, XXH32_reset)
#  define XXH32_update XXH_NAME2(XXH_NAMESPACE, XXH32_update)
#  define XXH32_digest XXH_NAME2(XXH_NAMESPACE, XXH32_digest)
#  define XXH32_copyState XXH_NAME2(XXH_NAMESPACE, XXH32_copyState)
#  define XXH32_canonicalFromHash XXH_NAME2(XXH_NAMESPACE, XXH32_canonicalFromHash)
#  define XXH32_hashFromCanonical XXH_NAME2(XXH_NAMESPACE, XXH32_hashFromCanonical)
#  define XXH64 XXH_NAME2(XXH_NAMESPACE, XXH64)
#  define XXH64_createState XXH_NAME2(XXH_NAMESPACE, XXH64_createState)
#  define XXH64_freeState XXH_NAME2(XXH_NAMESPACE, XXH64_freeState)
#  define XXH64_reset XXH_NAME2(XXH_NAMESPACE, XXH64_reset)
#  define XXH64_update XXH_NAME2(XXH_NAMESPACE, XXH64_update)
#  define XXH64_digest XXH_NAME2(XXH_NAMESPACE, XXH64_digest)
#  define XXH64_copyState XXH_NAME2(XXH_NAMESPACE, XXH64_copyState)
#  define XXH64_canonicalFromHash XXH_NAME2(XXH_NAMESPACE, XXH64_canonicalFromHash)
#  define XXH64_hashFromCanonical XXH_NAME2(XXH_NAMESPACE, XXH64_hashFromCanonical)
#endif


/* *************************************
*  Version
***************************************/
#define XXH_VERSION_MAJOR    0
#define XXH_VERSION_MINOR    6
#define XXH_VERSION_RELEASE  5
#define XXH_VERSION_NUMBER  (XXH_VERSION_MAJOR *100*100 + XXH_VERSION_MINOR *100 + XXH_VERSION_RELEASE)
XXH_PUBLIC_API unsigned XXH_versionNumber (void);


/*-**********************************************************************
*  32-bit hash
************************************************************************/
typedef unsigned int XXH32_hash_t;

/*! XXH32() :
    Calculate the 32-bit hash of sequence "length" bytes stored at memory address "input".
    The memory between input & input+length must be valid (allocated and read-accessible).
    "seed" can be used to alter the result predictably.
    Speed on Core 2 Duo @ 3 GHz (single thread, SMHasher benchmark) : 5.4 GB/s */
XXH_PUBLIC_API XXH32_hash_t XXH32 (const void* input, size_t length, unsigned int seed);

/*======   Streaming   ======*/
typedef struct XXH32_state_s XXH32_state_t;   /* incomplete type */
XXH_PUBLIC_API XXH32_state_t* XXH32_createState(void);
XXH_PUBLIC_API XXH_errorcode  XXH32_freeState(XXH32_state_t* statePtr);
XXH_PUBLIC_API void XXH32_copyState(XXH32_state_t* dst_state, const XXH32_state_t* src_state);

XXH_PUBLIC_API XXH_errorcode XXH32_reset  (XXH32_state_t* statePtr, unsigned int seed);
XXH_PUBLIC_API XXH_errorcode XXH32_update (XXH32_state_t* statePtr, const void* input, size_t length);
XXH_PUBLIC_API XXH32_hash_t  XXH32_digest (const XXH32_state_t* statePtr);

/*
 * Streaming functions generate the xxHash of an input provided in multiple segments.
 * Note that, for small input, they are slower than single-call functions, due to state management.
 * For small inputs, prefer `XXH32()` and `XXH64()`, which are better optimized.
 *
 * XXH state must first be allocated, using XXH*_createState() .
 *
 * Start a new hash by initializing state with a seed, using XXH*_reset().
 *
 * Then, feed the hash state by calling XXH*_update() as many times as necessary.
 * The function returns an error code, with 0 meaning OK, and any other value meaning there is an error.
 *
 * Finally, a hash value can be produced anytime, by using XXH*_digest().
 * This function returns the nn-bits hash as an int or long long.
 *
 * It's still possible to continue inserting input into the hash state after a digest,
 * and generate some new hashes later on, by calling again XXH*_digest().
 *
 * When done, free XXH state space if it was allocated dynamically.
 */

/*======   Canonical representation   ======*/

typedef struct { unsigned char digest[4]; } XXH32_canonical_t;
XXH_PUBLIC_API void XXH32_canonicalFromHash(XXH32_canonical_t* dst, XXH32_hash_t hash);
XXH_PUBLIC_API XXH32_hash_t XXH32_hashFromCanonical(const XXH32_canonical_t* src);

/* Default result type for XXH functions are primitive unsigned 32 and 64 bits.
 * The canonical representation uses human-readable write convention, aka big-endian (large digits first).
 * These functions allow transformation of hash result into and from its canonical format.
 * This way, hash values can be written into a file / memory, and remain comparable on different systems and programs.
 */


#ifndef XXH_NO_LONG_LONG
/*-**********************************************************************
*  64-bit hash
************************************************************************/
typedef unsigned long long XXH64_hash_t;

/*! XXH64() :
    Calculate the 64-bit hash of sequence of length "len" stored at memory address "input".
    "seed" can be used to alter the result predictably.
    This function runs faster on 64-bit systems, but slower on 32-bit systems (see benchmark).
*/
XXH_PUBLIC_API XXH64_hash_t XXH64 (const void* input, size_t length, unsigned long long seed);

/*======   Streaming   ======*/
typedef struct XXH64_state_s XXH64_state_t;   /* incomplete type */
XXH_PUBLIC_API XXH64_state_t* XXH64_createState(void);
XXH_PUBLIC_API XXH_errorcode  XXH64_freeState(XXH64_state_t* statePtr);
XXH_PUBLIC_API void XXH64_copyState(XXH64_state_t* dst_state, const XXH64_state_t* src_state);

XXH_PUBLIC_API XXH_errorcode XXH64_reset  (XXH64_state_t* statePtr, unsigned long long seed);
XXH_PUBLIC_API XXH_errorcode XXH64_update (XXH64_state_t* statePtr, const void* input, size_t length);
XXH_PUBLIC_API XXH64_hash_t  XXH64_digest (const XXH64_state_t* statePtr);

/*======   Canonical representation   ======*/
typedef struct { unsigned char digest[8]; } XXH64_canonical_t;
XXH_PUBLIC_API void XXH64_canonicalFromHash(XXH64_canonical_t* dst, XXH64_hash_t hash);
XXH_PUBLIC_API XXH64_hash_t XXH64_hashFromCanonical(const XXH64_canonical_t* src);
#endif  /* XXH_NO_LONG_LONG */



#ifdef XXH_STATIC_LINKING_ONLY

/* ================================================================================================
   This section contains declarations which are not guaranteed to remain stable.
   They may change in future versions, becoming incompatible with a different version of the library.
   These declarations should only be used with static linking.
   Never use them in association with dynamic linking !
=================================================================================================== */

/* These definitions are only present to allow
 * static allocation of XXH state, on stack or in a struct for example.
 * Never **ever** use members directly. */

#if !defined (__VMS) \
  && (defined (__cplusplus) \
  || (defined (__STDC_VERSION__) && (__STDC_VERSION__ >= 199901L) /* C99 */) )
#   include <stdint.h>

struct XXH32_state_s {
   uint32_t total_len_32;
   uint32_t large_len;
   uint32_t v1;
   uint32_t v2;
   uint32_t v3;
   uint32_t v4;
   uint32_t mem32[4];
   uint32_t memsize;
   uint32_t reserved;   /* never read nor write, might be removed in a future version */
};   /* typedef'd to XXH32_state_t */

struct XXH64_state_s {
   uint64_t total_len;
   uint64_t v1;
   uint64_t v2;
   uint64_t v3;
   uint64_t v4;
   uint64_t mem64[4];
   uint32_t memsize;
   uint32_t reserved[2];          /* never read nor write, might be removed in a future version */
};   /* typedef'd to XXH64_state_t */

# else

struct XXH32_state_s {
   unsigned total_len_32;
   unsigned large_len;
   unsigned v1;
   unsigned v2;
   unsigned v3;
   unsigned v4;
   unsigned mem32[4];
   unsigned memsize;
   unsigned reserved;   /* never read nor write, might be removed in a future version */
};   /* typedef'd to XXH32_state_t */

#   ifndef XXH_NO_LONG_LONG  /* remove 64-bit support */
struct XXH64_state_s {
   unsigned long long total_len;
   unsigned long long v1;
   unsigned long long v2;
   unsigned long long v3;
   unsigned long long v4;
   unsigned long long mem64[4];
   unsigned memsize;
   unsigned reserved[2];     /* never read nor write, might be removed in a future version */
};   /* typedef'd to XXH64_state_t */
#    endif

# endif


#if defined(XXH_INLINE_ALL) || defined(XXH_PRIVATE_API)
#  include "xxhash.c"   /* include xxhash function bodies as `static`, for inlining */
#endif

#endif /* XXH_STATIC_LINKING_ONLY */


#if defined (__cplusplus)
}
#endif

#endif /* XXHASH_H_5627135585666179 */
