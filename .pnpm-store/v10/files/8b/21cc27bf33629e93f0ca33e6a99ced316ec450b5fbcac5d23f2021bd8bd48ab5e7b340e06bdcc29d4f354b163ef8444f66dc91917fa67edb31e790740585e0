/* mdb_dump.c - memory-mapped database dump tool */
/*
 * Copyright 2011-2021 Howard Chu, Symas Corp.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted only as authorized by the OpenLDAP
 * Public License.
 *
 * A copy of this license is available in the file LICENSE in the
 * top-level directory of the distribution or, alternatively, at
 * <http://www.OpenLDAP.org/license.html>.
 */
#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <unistd.h>
#include <signal.h>
#include "lmdb.h"
#include "module.h"

#define Yu	MDB_PRIy(u)

#define PRINT	1
static int mode;

typedef struct flagbit {
	int bit;
	char *name;
} flagbit;

flagbit dbflags[] = {
	{ MDB_REVERSEKEY, "reversekey" },
	{ MDB_DUPSORT, "dupsort" },
	{ MDB_INTEGERKEY, "integerkey" },
	{ MDB_DUPFIXED, "dupfixed" },
	{ MDB_INTEGERDUP, "integerdup" },
	{ MDB_REVERSEDUP, "reversedup" },
	{ 0, NULL }
};

static volatile sig_atomic_t gotsig;

static void dumpsig( int sig )
{
	gotsig=1;
}

static const char hexc[] = "0123456789abcdef";

static void hex(unsigned char c)
{
	putchar(hexc[c >> 4]);
	putchar(hexc[c & 0xf]);
}

static void text(MDB_val *v)
{
	unsigned char *c, *end;

	putchar(' ');
	c = v->mv_data;
	end = c + v->mv_size;
	while (c < end) {
		if (isprint(*c)) {
			if (*c == '\\')
				putchar('\\');
			putchar(*c);
		} else {
			putchar('\\');
			hex(*c);
		}
		c++;
	}
	putchar('\n');
}

static void byte(MDB_val *v)
{
	unsigned char *c, *end;

	putchar(' ');
	c = v->mv_data;
	end = c + v->mv_size;
	while (c < end) {
		hex(*c++);
	}
	putchar('\n');
}

/* Dump in BDB-compatible format */
static int dumpit(MDB_txn *txn, MDB_dbi dbi, char *name)
{
	MDB_cursor *mc;
	MDB_stat ms;
	MDB_val key, data;
	MDB_envinfo info;
	unsigned int flags;
	int rc, i;

	rc = mdb_dbi_flags(txn, dbi, &flags);
	if (rc) return rc;

	rc = mdb_stat(txn, dbi, &ms);
	if (rc) return rc;

	rc = mdb_env_info(mdb_txn_env(txn), &info);
	if (rc) return rc;

	printf("VERSION=3\n");
	printf("format=%s\n", mode & PRINT ? "print" : "bytevalue");
	if (name)
		printf("database=%s\n", name);
	printf("type=btree\n");
	printf("mapsize=%"Yu"\n", info.me_mapsize);
	if (info.me_mapaddr)
		printf("mapaddr=%p\n", info.me_mapaddr);
	printf("maxreaders=%u\n", info.me_maxreaders);

	if (flags & MDB_DUPSORT)
		printf("duplicates=1\n");

	for (i=0; dbflags[i].bit; i++)
		if (flags & dbflags[i].bit)
			printf("%s=1\n", dbflags[i].name);

	printf("db_pagesize=%d\n", ms.ms_psize);
	printf("HEADER=END\n");

	rc = mdb_cursor_open(txn, dbi, &mc);
	if (rc) return rc;

	while ((rc = mdb_cursor_get(mc, &key, &data, MDB_NEXT) == MDB_SUCCESS)) {
		if (gotsig) {
			rc = EINTR;
			break;
		}
		if (mode & PRINT) {
			text(&key);
			text(&data);
		} else {
			byte(&key);
			byte(&data);
		}
	}
	printf("DATA=END\n");
	if (rc == MDB_NOTFOUND)
		rc = MDB_SUCCESS;

	return rc;
}

static void usage(char *prog)
{
	fprintf(stderr, "usage: %s [-V] [-f output] [-l] [-n] [-p] [-v] [-m module [-w password]] [-a|-s subdb] dbpath\n", prog);
	exit(EXIT_FAILURE);
}

int main(int argc, char *argv[])
{
	int i, rc;
	MDB_env *env;
	MDB_txn *txn;
	MDB_dbi dbi;
	char *prog = argv[0];
	char *envname;
	char *subname = NULL;
	int alldbs = 0, envflags = 0, list = 0;
	char *module = NULL, *password = NULL, *errmsg;
	void *mlm = NULL;

	if (argc < 2) {
		usage(prog);
	}

	/* -a: dump main DB and all subDBs
	 * -s: dump only the named subDB
	 * -n: use NOSUBDIR flag on env_open
	 * -p: use printable characters
	 * -f: write to file instead of stdout
	 * -v: use previous snapshot
	 * -V: print version and exit
	 * (default) dump only the main DB
	 */
	while ((i = getopt(argc, argv, "af:lm:nps:vw:V")) != EOF) {
		switch(i) {
		case 'V':
			printf("%s\n", MDB_VERSION_STRING);
			exit(0);
			break;
		case 'l':
			list = 1;
			/*FALLTHROUGH*/
		case 'a':
			if (subname)
				usage(prog);
			alldbs++;
			break;
		case 'f':
			if (freopen(optarg, "w", stdout) == NULL) {
				fprintf(stderr, "%s: %s: reopen: %s\n",
					prog, optarg, strerror(errno));
				exit(EXIT_FAILURE);
			}
			break;
		case 'n':
			envflags |= MDB_NOSUBDIR;
			break;
		case 'v':
			envflags |= MDB_PREVSNAPSHOT;
			break;
		case 'p':
			mode |= PRINT;
			break;
		case 's':
			if (alldbs)
				usage(prog);
			subname = optarg;
			break;
		case 'm':
			module = optarg;
			break;
		case 'w':
			password = optarg;
			break;
		default:
			usage(prog);
		}
	}

	if (optind != argc - 1)
		usage(prog);

#ifdef SIGPIPE
	signal(SIGPIPE, dumpsig);
#endif
#ifdef SIGHUP
	signal(SIGHUP, dumpsig);
#endif
	signal(SIGINT, dumpsig);
	signal(SIGTERM, dumpsig);

	envname = argv[optind];
	rc = mdb_env_create(&env);
	if (rc) {
		fprintf(stderr, "mdb_env_create failed, error %d %s\n", rc, mdb_strerror(rc));
		return EXIT_FAILURE;
	}

	if (module) {
		mlm = mlm_setup(env, module, password, &errmsg);
		if (!mlm) {
			fprintf(stderr, "Failed to load crypto module: %s\n", errmsg);
			goto env_close;
		}
	}

	if (alldbs || subname) {
		mdb_env_set_maxdbs(env, 2);
	}

	rc = mdb_env_open(env, envname, envflags | MDB_RDONLY, 0664);
	if (rc) {
		fprintf(stderr, "mdb_env_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	rc = mdb_txn_begin(env, NULL, MDB_RDONLY, &txn);
	if (rc) {
		fprintf(stderr, "mdb_txn_begin failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	rc = mdb_dbi_open(txn, subname, 0, &dbi);
	if (rc) {
		fprintf(stderr, "mdb_dbi_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}

	if (alldbs) {
		MDB_cursor *cursor;
		MDB_val key;
		int count = 0;

		rc = mdb_cursor_open(txn, dbi, &cursor);
		if (rc) {
			fprintf(stderr, "mdb_cursor_open failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}
		while ((rc = mdb_cursor_get(cursor, &key, NULL, MDB_NEXT_NODUP)) == 0) {
			MDB_dbi db2;
			if (!mdb_cursor_is_db(cursor))
				continue;
			count++;
			rc = mdb_dbi_open(txn, key.mv_data, 0, &db2);
			if (rc == MDB_SUCCESS) {
				if (list) {
					printf("%s\n", (char *)key.mv_data);
					list++;
				} else {
					rc = dumpit(txn, db2, key.mv_data);
					if (rc)
						break;
				}
				mdb_dbi_close(env, db2);
			}
			if (rc) continue;
		}
		mdb_cursor_close(cursor);
		if (!count) {
			fprintf(stderr, "%s: %s does not contain multiple databases\n", prog, envname);
			rc = MDB_NOTFOUND;
		} else if (rc == MDB_NOTFOUND) {
			rc = MDB_SUCCESS;
		}
	} else {
		rc = dumpit(txn, dbi, subname);
	}
	if (rc && rc != MDB_NOTFOUND)
		fprintf(stderr, "%s: %s: %s\n", prog, envname, mdb_strerror(rc));

	mdb_close(env, dbi);
txn_abort:
	mdb_txn_abort(txn);
env_close:
	mdb_env_close(env);
	if (mlm)
		mlm_unload(mlm);

	return rc ? EXIT_FAILURE : EXIT_SUCCESS;
}
