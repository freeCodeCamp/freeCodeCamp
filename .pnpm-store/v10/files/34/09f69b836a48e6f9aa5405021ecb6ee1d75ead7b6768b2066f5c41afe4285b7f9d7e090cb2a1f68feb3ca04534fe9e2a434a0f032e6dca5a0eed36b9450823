/* mdb_drop.c - memory-mapped database delete tool */
/*
 * Copyright 2016-2021 Howard Chu, Symas Corp.
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

static volatile sig_atomic_t gotsig;

static void dumpsig( int sig )
{
	gotsig=1;
}

static void usage(char *prog)
{
	fprintf(stderr, "usage: %s [-V] [-n] [-d] [-m module [-w password]] [-s subdb] dbpath\n", prog);
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
	int envflags = 0, delete = 0;
	char *module = NULL, *password = NULL;
	void *mlm = NULL;
	char *errmsg;

	if (argc < 2) {
		usage(prog);
	}

	/* -d: delete the db, don't just empty it
	 * -s: drop the named subDB
	 * -n: use NOSUBDIR flag on env_open
	 * -V: print version and exit
	 * (default) empty the main DB
	 */
	while ((i = getopt(argc, argv, "dm:ns:w:V")) != EOF) {
		switch(i) {
		case 'V':
			printf("%s\n", MDB_VERSION_STRING);
			exit(0);
			break;
		case 'd':
			delete = 1;
			break;
		case 'n':
			envflags |= MDB_NOSUBDIR;
			break;
		case 's':
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

	mdb_env_set_maxdbs(env, 2);

	rc = mdb_env_open(env, envname, envflags, 0664);
	if (rc) {
		fprintf(stderr, "mdb_env_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	rc = mdb_txn_begin(env, NULL, 0, &txn);
	if (rc) {
		fprintf(stderr, "mdb_txn_begin failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	rc = mdb_open(txn, subname, 0, &dbi);
	if (rc) {
		fprintf(stderr, "mdb_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}

	rc = mdb_drop(txn, dbi, delete);
	if (rc) {
		fprintf(stderr, "mdb_drop failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}
	rc = mdb_txn_commit(txn);
	if (rc) {
		fprintf(stderr, "mdb_txn_commit failed, error %d %s\n", rc, mdb_strerror(rc));
		goto txn_abort;
	}
	txn = NULL;

txn_abort:
	if (txn)
		mdb_txn_abort(txn);
env_close:
	mdb_env_close(env);
	if (mlm)
		mlm_unload(mlm);

	return rc ? EXIT_FAILURE : EXIT_SUCCESS;
}
