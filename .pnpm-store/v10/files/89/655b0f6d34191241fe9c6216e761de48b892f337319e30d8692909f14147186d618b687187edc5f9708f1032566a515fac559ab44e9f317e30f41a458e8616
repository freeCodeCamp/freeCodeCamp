/* mdb_copy.c - memory-mapped database backup tool */
/*
 * Copyright 2012-2021 Howard Chu, Symas Corp.
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
#ifdef _WIN32
#include <windows.h>
#define	MDB_STDOUT	GetStdHandle(STD_OUTPUT_HANDLE)
#else
#define	MDB_STDOUT	1
#endif
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include "lmdb.h"
#include "module.h"

static void
sighandle(int sig)
{
}

int main(int argc,char * argv[])
{
	int rc;
	MDB_env *env;
	const char *progname = argv[0], *act;
	unsigned flags = MDB_RDONLY;
	unsigned cpflags = 0;
	char *module = NULL, *password = NULL;
	void *mlm = NULL;
	char *errmsg;

	for (; argc > 1 && argv[1][0] == '-'; argc--, argv++) {
		if (argv[1][1] == 'n' && argv[1][2] == '\0')
			flags |= MDB_NOSUBDIR;
		else if (argv[1][1] == 'v' && argv[1][2] == '\0')
			flags |= MDB_PREVSNAPSHOT;
		else if (argv[1][1] == 'c' && argv[1][2] == '\0')
			cpflags |= MDB_CP_COMPACT;
		else if (argv[1][1] == 'V' && argv[1][2] == '\0') {
			printf("%s\n", MDB_VERSION_STRING);
			exit(0);
		} else if (argv[1][1] == 'm' && argv[1][2] == '\0') {
			module = argv[2];
			argc--;
			argv++;
		} else if (argv[1][1] == 'w' && argv[1][2] == '\0') {
			password = argv[2];
			argc--;
			argv++;
		} else
			argc = 0;
	}

	if (argc<2 || argc>3) {
		fprintf(stderr, "usage: %s [-V] [-c] [-n] [-v] [-m module [-w password]] srcpath [dstpath]\n", progname);
		exit(EXIT_FAILURE);
	}


#ifdef SIGPIPE
	signal(SIGPIPE, sighandle);
#endif
#ifdef SIGHUP
	signal(SIGHUP, sighandle);
#endif
	signal(SIGINT, sighandle);
	signal(SIGTERM, sighandle);

	act = "opening environment";
	rc = mdb_env_create(&env);
	if (rc == MDB_SUCCESS) {
		if (module) {
			mlm = mlm_setup(env, module, password, &errmsg);
			if (!mlm) {
				fprintf(stderr, "Failed to load crypto module: %s\n", errmsg);
				exit(EXIT_FAILURE);
			}
		}
		rc = mdb_env_open(env, argv[1], flags, 0600);
	}
	if (rc == MDB_SUCCESS) {
		act = "copying";
		if (argc == 2)
			rc = mdb_env_copyfd2(env, MDB_STDOUT, cpflags);
		else
			rc = mdb_env_copy2(env, argv[2], cpflags);
	}
	if (rc)
		fprintf(stderr, "%s: %s failed, error %d (%s)\n",
			progname, act, rc, mdb_strerror(rc));
	mdb_env_close(env);
	if (mlm)
		mlm_unload(mlm);

	return rc ? EXIT_FAILURE : EXIT_SUCCESS;
}
