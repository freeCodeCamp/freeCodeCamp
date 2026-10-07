/* mdb_stat.c - memory-mapped database status tool */
/*
 * Copyright 2011-2020 Howard Chu, Symas Corp.
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
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "lmdb.h"

#define Z	MDB_FMT_Z
#define Yu	MDB_PRIy(u)

static void prstat(MDB_stat *ms)
{
#if 0
	printf("  Page size: %u\n", ms->ms_psize);
#endif
	printf("  Tree depth: %u\n", ms->ms_depth);
	printf("  Branch pages: %"Yu"\n",   ms->ms_branch_pages);
	printf("  Leaf pages: %"Yu"\n",     ms->ms_leaf_pages);
	printf("  Overflow pages: %"Yu"\n", ms->ms_overflow_pages);
	printf("  Entries: %"Yu"\n",        ms->ms_entries);
}

static void usage(char *prog)
{
	fprintf(stderr, "usage: %s [-V] [-n] [-e] [-r[r]] [-f[f[f]]] [-v] [-a|-s subdb] dbpath\n", prog);
	exit(EXIT_FAILURE);
}

int main(int argc, char *argv[])
{
	int i, rc;
	MDB_env *env;
	MDB_txn *txn;
	MDB_dbi dbi;
	MDB_stat mst;
	MDB_envinfo mei;
	char *prog = argv[0];
	char *envname;
	char *subname = NULL;
	int alldbs = 0, envinfo = 0, envflags = 0, freinfo = 0, rdrinfo = 0;

	if (argc < 2) {
		usage(prog);
	}

	/* -a: print stat of main DB and all subDBs
	 * -s: print stat of only the named subDB
	 * -e: print env info
	 * -f: print freelist info
	 * -r: print reader info
	 * -n: use NOSUBDIR flag on env_open
	 * -v: use previous snapshot
	 * -V: print version and exit
	 * (default) print stat of only the main DB
	 */
	while ((i = getopt(argc, argv, "Vaefnrs:v")) != EOF) {
		switch(i) {
		case 'V':
			printf("%s\n", MDB_VERSION_STRING);
			exit(0);
			break;
		case 'a':
			if (subname)
				usage(prog);
			alldbs++;
			break;
		case 'e':
			envinfo++;
			break;
		case 'f':
			freinfo++;
			break;
		case 'n':
			envflags |= MDB_NOSUBDIR;
			break;
		case 'v':
			envflags |= MDB_PREVSNAPSHOT;
			break;
		case 'r':
			rdrinfo++;
			break;
		case 's':
			if (alldbs)
				usage(prog);
			subname = optarg;
			break;
		default:
			usage(prog);
		}
	}

	if (optind != argc - 1)
		usage(prog);

	envname = argv[optind];
	rc = mdb_env_create(&env);
	if (rc) {
		fprintf(stderr, "mdb_env_create failed, error %d %s\n", rc, mdb_strerror(rc));
		return EXIT_FAILURE;
	}

	if (alldbs || subname) {
		mdb_env_set_maxdbs(env, 4);
	}

	rc = mdb_env_open(env, envname, envflags | MDB_RDONLY, 0664);
	if (rc) {
		fprintf(stderr, "mdb_env_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	if (envinfo) {
		(void)mdb_env_stat(env, &mst);
		(void)mdb_env_info(env, &mei);
		printf("Environment Info\n");
		printf("  Map address: %p\n", mei.me_mapaddr);
		printf("  Map size: %"Yu"\n", mei.me_mapsize);
		printf("  Page size: %u\n", mst.ms_psize);
		printf("  Max pages: %"Yu"\n", mei.me_mapsize / mst.ms_psize);
		printf("  Number of pages used: %"Yu"\n", mei.me_last_pgno+1);
		printf("  Last transaction ID: %"Yu"\n", mei.me_last_txnid);
		printf("  Max readers: %u\n", mei.me_maxreaders);
		printf("  Number of readers used: %u\n", mei.me_numreaders);
	}

	if (rdrinfo) {
		printf("Reader Table Status\n");
		rc = mdb_reader_list(env, (MDB_msg_func *)fputs, stdout);
		if (rdrinfo > 1) {
			int dead;
			mdb_reader_check(env, &dead);
			printf("  %d stale readers cleared.\n", dead);
			rc = mdb_reader_list(env, (MDB_msg_func *)fputs, stdout);
		}
		if (!(subname || alldbs || freinfo))
			goto env_close;
	}

	rc = mdb_txn_begin(env, NULL, MDB_RDONLY, &txn);
	if (rc) {
		fprintf(stderr, "mdb_txn_begin failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	if (freinfo) {
		MDB_cursor *cursor;
		MDB_val key, data;
		mdb_size_t pages = 0, *iptr;

		printf("Freelist Status\n");
		dbi = 0;
		rc = mdb_cursor_open(txn, dbi, &cursor);
		if (rc) {
			fprintf(stderr, "mdb_cursor_open failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}
		rc = mdb_stat(txn, dbi, &mst);
		if (rc) {
			fprintf(stderr, "mdb_stat failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}
		prstat(&mst);
		while ((rc = mdb_cursor_get(cursor, &key, &data, MDB_NEXT)) == 0) {
			iptr = data.mv_data;
			pages += *iptr;
			if (freinfo > 1) {
				char *bad = "";
				mdb_size_t pg, prev;
				ssize_t i, j, span = 0;
				j = *iptr++;
				for (i = j, prev = 1; --i >= 0; ) {
					pg = iptr[i];
					if (pg <= prev)
						bad = " [bad sequence]";
					prev = pg;
					pg += span;
					for (; i >= span && iptr[i-span] == pg; span++, pg++) ;
				}
				printf("    Transaction %"Yu", %"Z"d pages, maxspan %"Z"d%s\n",
					*(mdb_size_t *)key.mv_data, j, span, bad);
				if (freinfo > 2) {
					for (--j; j >= 0; ) {
						pg = iptr[j];
						for (span=1; --j >= 0 && iptr[j] == pg+span; span++) ;
						printf(span>1 ? "     %9"Yu"[%"Z"d]\n" : "     %9"Yu"\n",
							pg, span);
					}
				}
			}
		}
		mdb_cursor_close(cursor);
		printf("  Free pages: %"Yu"\n", pages);
	}

	rc = mdb_open(txn, subname, 0, &dbi);
	if (rc) {
		fprintf(stderr, "mdb_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}

	rc = mdb_stat(txn, dbi, &mst);
	if (rc) {
		fprintf(stderr, "mdb_stat failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}
	printf("Status of %s\n", subname ? subname : "Main DB");
	prstat(&mst);

	if (alldbs) {
		MDB_cursor *cursor;
		MDB_val key;

		rc = mdb_cursor_open(txn, dbi, &cursor);
		if (rc) {
			fprintf(stderr, "mdb_cursor_open failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}
		while ((rc = mdb_cursor_get(cursor, &key, NULL, MDB_NEXT_NODUP)) == 0) {
			char *str;
			MDB_dbi db2;
			if (memchr(key.mv_data, '\0', key.mv_size))
				continue;
			str = malloc(key.mv_size+1);
			memcpy(str, key.mv_data, key.mv_size);
			str[key.mv_size] = '\0';
			rc = mdb_open(txn, str, 0, &db2);
			if (rc == MDB_SUCCESS)
				printf("Status of %s\n", str);
			free(str);
			if (rc) continue;
			rc = mdb_stat(txn, db2, &mst);
			if (rc) {
				fprintf(stderr, "mdb_stat failed, error %d %s\n", rc, mdb_strerror(rc));
				goto txn_abort;
			}
			prstat(&mst);
			mdb_close(env, db2);
		}
		mdb_cursor_close(cursor);
	}

	if (rc == MDB_NOTFOUND)
		rc = MDB_SUCCESS;

	mdb_close(env, dbi);
txn_abort:
	mdb_txn_abort(txn);
env_close:
	mdb_env_close(env);

	return rc ? EXIT_FAILURE : EXIT_SUCCESS;
}
