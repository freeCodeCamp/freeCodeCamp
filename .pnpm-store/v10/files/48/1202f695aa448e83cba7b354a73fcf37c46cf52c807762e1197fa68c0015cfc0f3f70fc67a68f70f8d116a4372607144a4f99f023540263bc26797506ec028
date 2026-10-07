/* crypto.c - LMDB encryption helper module */
/*
 * Copyright 2020-2021 Howard Chu, Symas Corp.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted only as authorized by the Symas
 * Dual-Use License.
 *
 * A copy of this license is available in the file LICENSE in the
 * source distribution.
 */
#include <string.h>

#include <openssl/engine.h>

#include "lmdb.h"

MDB_crypto_hooks MDB_crypto;

static EVP_CIPHER *cipher;

static int mcf_str2key(const char *passwd, MDB_val *key)
{
	unsigned int size;
	EVP_MD_CTX *mdctx = EVP_MD_CTX_new();
	EVP_DigestInit_ex(mdctx, EVP_sha256(), NULL);
	EVP_DigestUpdate(mdctx, "Just a Constant", sizeof("Just a Constant"));
	EVP_DigestUpdate(mdctx, passwd, strlen(passwd));
	EVP_DigestFinal_ex(mdctx, key->mv_data, &size);
	EVP_MD_CTX_free(mdctx);
	return 0;
}

/* cheats - internal OpenSSL 1.1 structures */
typedef struct evp_cipher_ctx_st {
    const EVP_CIPHER *cipher;
    ENGINE *engine;             /* functional reference if 'cipher' is
                                 * ENGINE-provided */
    int encrypt;                /* encrypt or decrypt */
    int buf_len;                /* number we have left */
    unsigned char oiv[EVP_MAX_IV_LENGTH]; /* original iv */
    unsigned char iv[EVP_MAX_IV_LENGTH]; /* working iv */
    unsigned char buf[EVP_MAX_BLOCK_LENGTH]; /* saved partial block */
    int num;                    /* used by cfb/ofb/ctr mode */
    /* FIXME: Should this even exist? It appears unused */
    void *app_data;             /* application stuff */
    int key_len;                /* May change for variable length cipher */
    unsigned long flags;        /* Various flags */
    void *cipher_data;          /* per EVP data */
    int final_used;
    int block_mask;
    unsigned char final[EVP_MAX_BLOCK_LENGTH]; /* possible final block */
} EVP_CIPHER_CTX;

#define	CHACHA_KEY_SIZE	32
#define CHACHA_CTR_SIZE	16
#define CHACHA_BLK_SIZE	64
#define POLY1305_BLOCK_SIZE	16

typedef struct {
    union {
        double align;   /* this ensures even sizeof(EVP_CHACHA_KEY)%8==0 */
        unsigned int d[CHACHA_KEY_SIZE / 4];
    } key;
    unsigned int  counter[CHACHA_CTR_SIZE / 4];
    unsigned char buf[CHACHA_BLK_SIZE];
    unsigned int  partial_len;
} EVP_CHACHA_KEY;

typedef struct {
    EVP_CHACHA_KEY key;
    unsigned int nonce[12/4];
    unsigned char tag[POLY1305_BLOCK_SIZE];
    unsigned char tls_aad[POLY1305_BLOCK_SIZE];
    struct { uint64_t aad, text; } len;
    int aad, mac_inited, tag_len, nonce_len;
    size_t tls_payload_length;
} EVP_CHACHA_AEAD_CTX;

static int mcf_encfunc(const MDB_val *src, MDB_val *dst, const MDB_val *key, int encdec)
{
	unsigned char iv[12];
	int ivl, outl, rc;
	mdb_size_t *ptr;
	EVP_CIPHER_CTX ctx = {0};
	EVP_CHACHA_AEAD_CTX cactx;

	ctx.cipher_data = &cactx;
	ptr = key[1].mv_data;
	ivl = ptr[0] & 0xffffffff;
	memcpy(iv, &ivl, 4);
	memcpy(iv+4, ptr+1, sizeof(mdb_size_t));
	EVP_CipherInit_ex(&ctx, cipher, NULL, key[0].mv_data, iv, encdec);
	EVP_CIPHER_CTX_set_padding(&ctx, 0);
	if (!encdec) {
		EVP_CIPHER_CTX_ctrl(&ctx, EVP_CTRL_AEAD_SET_TAG, key[2].mv_size, key[2].mv_data);
	}
	rc = EVP_CipherUpdate(&ctx, dst->mv_data, &outl, src->mv_data, src->mv_size);
	if (rc)
		rc = EVP_CipherFinal_ex(&ctx, key[2].mv_data, &outl);
	if (rc && encdec) {
		EVP_CIPHER_CTX_ctrl(&ctx, EVP_CTRL_AEAD_GET_TAG, key[2].mv_size, key[2].mv_data);
	}
	return rc == 0;
}

static const MDB_crypto_funcs mcf_table = {
	mcf_str2key,
	mcf_encfunc,
	NULL,
	CHACHA_KEY_SIZE,
	POLY1305_BLOCK_SIZE,
	0
};

MDB_crypto_funcs *MDB_crypto()
{
	cipher = (EVP_CIPHER *)EVP_chacha20_poly1305();
	return (MDB_crypto_funcs *)&mcf_table;
}
