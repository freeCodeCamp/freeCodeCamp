/* sample-mdb.txt - MDB toy/sample
 *
 * Do a line-by-line comparison of this and sample-bdb.txt
 */
/*
 * Copyright 2012-2020 Howard Chu, Symas Corp.
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
#include "lmdb.h"

int main(int argc,char * argv[])
{
	int rc;
	MDB_env *env;
	MDB_dbi dbi;
	MDB_val key, data;
	MDB_txn *txn;
	MDB_cursor *cursor;
	char sval[32];

	/* Note: Most error checking omitted for simplicity */

	rc = mdb_env_create(&env);
	rc = mdb_env_open(env, "./testdb", 0, 0664);
	rc = mdb_txn_begin(env, NULL, 0, &txn);
	rc = mdb_dbi_open(txn, NULL, 0, &dbi);

	key.mv_size = sizeof(int);
	key.mv_data = sval;
	data.mv_size = sizeof(sval);
	data.mv_data = sval;

	sprintf(sval, "%03x %d foo bar", 32, 3141592);
	rc = mdb_put(txn, dbi, &key, &data, 0);
	rc = mdb_txn_commit(txn);
	if (rc) {
		fprintf(stderr, "mdb_txn_commit: (%d) %s\n", rc, mdb_strerror(rc));
		goto leave;
	}
	rc = mdb_txn_begin(env, NULL, MDB_RDONLY, &txn);
	rc = mdb_cursor_open(txn, dbi, &cursor);
	while ((rc = mdb_cursor_get(cursor, &key, &data, MDB_NEXT)) == 0) {
		printf("key: %p %.*s, data: %p %.*s\n",
			key.mv_data,  (int) key.mv_size,  (char *) key.mv_data,
			data.mv_data, (int) data.mv_size, (char *) data.mv_data);
	}
	mdb_cursor_close(cursor);
	mdb_txn_abort(txn);
leave:
	mdb_dbi_close(env, dbi);
	mdb_env_close(env);
	return 0;
}
