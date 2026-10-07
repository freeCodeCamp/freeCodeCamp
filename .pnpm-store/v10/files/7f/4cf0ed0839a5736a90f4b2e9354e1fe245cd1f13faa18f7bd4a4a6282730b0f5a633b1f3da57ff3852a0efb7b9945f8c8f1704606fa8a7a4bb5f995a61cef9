/* mdb_load.c - memory-mapped database load tool */
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
#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include <ctype.h>
#include <unistd.h>
#include "lmdb.h"
#include "module.h"

#define PRINT	1
#define NOHDR	2
static int mode;

static char *subname = NULL;

static mdb_size_t lineno;
static int version;

static int flags;

static char *prog;

static int Eof;

static MDB_envinfo info;

static MDB_val kbuf, dbuf;
static MDB_val k0buf;

static unsigned int pagesize;

#define Yu	MDB_PRIy(u)

#define STRLENOF(s)	(sizeof(s)-1)

typedef struct flagbit {
	int bit;
	char *name;
	int len;
} flagbit;

#define S(s)	s, STRLENOF(s)

flagbit dbflags[] = {
	{ MDB_REVERSEKEY, S("reversekey") },
	{ MDB_DUPSORT, S("dupsort") },
	{ MDB_INTEGERKEY, S("integerkey") },
	{ MDB_DUPFIXED, S("dupfixed") },
	{ MDB_INTEGERDUP, S("integerdup") },
	{ MDB_REVERSEDUP, S("reversedup") },
	{ 0, NULL, 0 }
};

static void readhdr(void)
{
	char *ptr;

	flags = 0;
	while (fgets(dbuf.mv_data, dbuf.mv_size, stdin) != NULL) {
		lineno++;
		if (!strncmp(dbuf.mv_data, "VERSION=", STRLENOF("VERSION="))) {
			version=atoi((char *)dbuf.mv_data+STRLENOF("VERSION="));
			if (version > 3) {
				fprintf(stderr, "%s: line %"Yu": unsupported VERSION %d\n",
					prog, lineno, version);
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "HEADER=END", STRLENOF("HEADER=END"))) {
			break;
		} else if (!strncmp(dbuf.mv_data, "format=", STRLENOF("format="))) {
			if (!strncmp((char *)dbuf.mv_data+STRLENOF("FORMAT="), "print", STRLENOF("print")))
				mode |= PRINT;
			else if (strncmp((char *)dbuf.mv_data+STRLENOF("FORMAT="), "bytevalue", STRLENOF("bytevalue"))) {
				fprintf(stderr, "%s: line %"Yu": unsupported FORMAT %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("FORMAT="));
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "database=", STRLENOF("database="))) {
			ptr = memchr(dbuf.mv_data, '\n', dbuf.mv_size);
			if (ptr) *ptr = '\0';
			if (subname) free(subname);
			subname = strdup((char *)dbuf.mv_data+STRLENOF("database="));
		} else if (!strncmp(dbuf.mv_data, "type=", STRLENOF("type="))) {
			if (strncmp((char *)dbuf.mv_data+STRLENOF("type="), "btree", STRLENOF("btree")))  {
				fprintf(stderr, "%s: line %"Yu": unsupported type %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("type="));
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "mapaddr=", STRLENOF("mapaddr="))) {
			int i;
			ptr = memchr(dbuf.mv_data, '\n', dbuf.mv_size);
			if (ptr) *ptr = '\0';
			i = sscanf((char *)dbuf.mv_data+STRLENOF("mapaddr="), "%p", &info.me_mapaddr);
			if (i != 1) {
				fprintf(stderr, "%s: line %"Yu": invalid mapaddr %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("mapaddr="));
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "mapsize=", STRLENOF("mapsize="))) {
			int i;
			ptr = memchr(dbuf.mv_data, '\n', dbuf.mv_size);
			if (ptr) *ptr = '\0';
			i = sscanf((char *)dbuf.mv_data+STRLENOF("mapsize="),
				"%" MDB_SCNy(u), &info.me_mapsize);
			if (i != 1) {
				fprintf(stderr, "%s: line %"Yu": invalid mapsize %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("mapsize="));
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "maxreaders=", STRLENOF("maxreaders="))) {
			int i;
			ptr = memchr(dbuf.mv_data, '\n', dbuf.mv_size);
			if (ptr) *ptr = '\0';
			i = sscanf((char *)dbuf.mv_data+STRLENOF("maxreaders="), "%u", &info.me_maxreaders);
			if (i != 1) {
				fprintf(stderr, "%s: line %"Yu": invalid maxreaders %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("maxreaders="));
				exit(EXIT_FAILURE);
			}
		} else if (!strncmp(dbuf.mv_data, "db_pagesize=", STRLENOF("db_pagesize="))) {
			int i;
			ptr = memchr(dbuf.mv_data, '\n', dbuf.mv_size);
			if (ptr) *ptr = '\0';
			i = sscanf((char *)dbuf.mv_data+STRLENOF("db_pagesize="),
				"%u", &pagesize);
			if (i != 1) {
				fprintf(stderr, "%s: line %"Yu": invalid pagesize %s\n",
					prog, lineno, (char *)dbuf.mv_data+STRLENOF("db_pagesize="));
				exit(EXIT_FAILURE);
			}
		} else {
			int i;
			for (i=0; dbflags[i].bit; i++) {
				if (!strncmp(dbuf.mv_data, dbflags[i].name, dbflags[i].len) &&
					((char *)dbuf.mv_data)[dbflags[i].len] == '=') {
					flags |= dbflags[i].bit;
					break;
				}
			}
			if (!dbflags[i].bit) {
				ptr = memchr(dbuf.mv_data, '=', dbuf.mv_size);
				if (!ptr) {
					fprintf(stderr, "%s: line %"Yu": unexpected format\n",
						prog, lineno);
					exit(EXIT_FAILURE);
				} else {
					*ptr = '\0';
					fprintf(stderr, "%s: line %"Yu": unrecognized keyword ignored: %s\n",
						prog, lineno, (char *)dbuf.mv_data);
				}
			}
		}
	}
}

static void badend(void)
{
	fprintf(stderr, "%s: line %"Yu": unexpected end of input\n",
		prog, lineno);
}

static int unhex(unsigned char *c2)
{
	int x, c;
	x = *c2++ & 0x4f;
	if (x & 0x40)
		x -= 55;
	c = x << 4;
	x = *c2 & 0x4f;
	if (x & 0x40)
		x -= 55;
	c |= x;
	return c;
}

static int readline(MDB_val *out, MDB_val *buf)
{
	unsigned char *c1, *c2, *end;
	size_t len, l2;
	int c;

	if (!(mode & NOHDR)) {
		c = fgetc(stdin);
		if (c == EOF) {
			Eof = 1;
			return EOF;
		}
		if (c != ' ') {
			lineno++;
			if (fgets(buf->mv_data, buf->mv_size, stdin) == NULL) {
badend:
				Eof = 1;
				badend();
				return EOF;
			}
			if (c == 'D' && !strncmp(buf->mv_data, "ATA=END", STRLENOF("ATA=END")))
				return EOF;
			goto badend;
		}
	}
	if (fgets(buf->mv_data, buf->mv_size, stdin) == NULL) {
		Eof = 1;
		return EOF;
	}
	lineno++;

	c1 = buf->mv_data;
	len = strlen((char *)c1);
	l2 = len;

	/* Is buffer too short? */
	while (c1[len-1] != '\n') {
		buf->mv_data = realloc(buf->mv_data, buf->mv_size*2);
		if (!buf->mv_data) {
			Eof = 1;
			fprintf(stderr, "%s: line %"Yu": out of memory, line too long\n",
				prog, lineno);
			return EOF;
		}
		c1 = buf->mv_data;
		c1 += l2;
		if (fgets((char *)c1, buf->mv_size+1, stdin) == NULL) {
			Eof = 1;
			badend();
			return EOF;
		}
		buf->mv_size *= 2;
		len = strlen((char *)c1);
		l2 += len;
	}
	c1 = c2 = buf->mv_data;
	len = l2;
	c1[--len] = '\0';
	end = c1 + len;

	if (mode & PRINT) {
		while (c2 < end) {
			if (*c2 == '\\') {
				if (c2[1] == '\\') {
					*c1++ = *c2;
				} else {
					if (c2+3 > end || !isxdigit(c2[1]) || !isxdigit(c2[2])) {
						Eof = 1;
						badend();
						return EOF;
					}
					*c1++ = unhex(++c2);
				}
				c2 += 2;
			} else {
				/* copies are redundant when no escapes were used */
				*c1++ = *c2++;
			}
		}
	} else {
		/* odd length not allowed */
		if (len & 1) {
			Eof = 1;
			badend();
			return EOF;
		}
		while (c2 < end) {
			if (!isxdigit(*c2) || !isxdigit(c2[1])) {
				Eof = 1;
				badend();
				return EOF;
			}
			*c1++ = unhex(c2);
			c2 += 2;
		}
	}
	c2 = out->mv_data = buf->mv_data;
	out->mv_size = c1 - c2;

	return 0;
}

static void usage(void)
{
	fprintf(stderr, "usage: %s [-V] [-a] [-f input] [-n] [-m module [-w password]] [-s name] [-N] [-T] dbpath\n", prog);
	exit(EXIT_FAILURE);
}

static int greater(const MDB_val *a, const MDB_val *b)
{
	return 1;
}

int main(int argc, char *argv[])
{
	int i, rc;
	MDB_env *env;
	MDB_txn *txn;
	MDB_cursor *mc;
	MDB_dbi dbi;
	char *envname;
	int envflags = MDB_NOSYNC, putflags = 0;
	int dohdr = 0, append = 0;
	MDB_val prevk;
	char *module = NULL, *password = NULL, *errmsg;
	void *mlm = NULL;

	prog = argv[0];

	if (argc < 2) {
		usage();
	}

	/* -a: append records in input order
	 * -f: load file instead of stdin
	 * -n: use NOSUBDIR flag on env_open
	 * -s: load into named subDB
	 * -N: use NOOVERWRITE on puts
	 * -T: read plaintext
	 * -V: print version and exit
	 */
	while ((i = getopt(argc, argv, "af:m:ns:w:NTV")) != EOF) {
		switch(i) {
		case 'V':
			printf("%s\n", MDB_VERSION_STRING);
			exit(0);
			break;
		case 'a':
			append = 1;
			break;
		case 'f':
			if (freopen(optarg, "r", stdin) == NULL) {
				fprintf(stderr, "%s: %s: reopen: %s\n",
					prog, optarg, strerror(errno));
				exit(EXIT_FAILURE);
			}
			break;
		case 'n':
			envflags |= MDB_NOSUBDIR;
			break;
		case 's':
			subname = strdup(optarg);
			break;
		case 'N':
			putflags = MDB_NOOVERWRITE|MDB_NODUPDATA;
			break;
		case 'T':
			mode |= NOHDR | PRINT;
			break;
		case 'm':
			module = optarg;
			break;
		case 'w':
			password = optarg;
			break;
		default:
			usage();
		}
	}

	if (optind != argc - 1)
		usage();

	dbuf.mv_size = 4096;
	dbuf.mv_data = malloc(dbuf.mv_size);

	if (!(mode & NOHDR))
		readhdr();

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

	if (info.me_maxreaders)
		mdb_env_set_maxreaders(env, info.me_maxreaders);

	if (info.me_mapsize)
		mdb_env_set_mapsize(env, info.me_mapsize);

	if (pagesize)
		mdb_env_set_pagesize(env, pagesize);

	if (info.me_mapaddr)
		envflags |= MDB_FIXEDMAP;

	rc = mdb_env_open(env, envname, envflags, 0664);
	if (rc) {
		fprintf(stderr, "mdb_env_open failed, error %d %s\n", rc, mdb_strerror(rc));
		goto env_close;
	}

	kbuf.mv_size = mdb_env_get_maxkeysize(env) * 2 + 2;
	kbuf.mv_data = malloc(kbuf.mv_size * 2);
	k0buf.mv_size = kbuf.mv_size;
	k0buf.mv_data = (char *)kbuf.mv_data + kbuf.mv_size;
	prevk.mv_data = k0buf.mv_data;

	while(!Eof) {
		MDB_val key, data;
		int batch = 0;
		int appflag;

		if (!dohdr) {
			dohdr = 1;
		} else if (!(mode & NOHDR))
			readhdr();
		
		rc = mdb_txn_begin(env, NULL, 0, &txn);
		if (rc) {
			fprintf(stderr, "mdb_txn_begin failed, error %d %s\n", rc, mdb_strerror(rc));
			goto env_close;
		}

		rc = mdb_dbi_open(txn, subname, flags|MDB_CREATE, &dbi);
		if (rc) {
			fprintf(stderr, "mdb_dbi_open failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}
		prevk.mv_size = 0;
		if (append) {
			mdb_set_compare(txn, dbi, greater);
			if (flags & MDB_DUPSORT)
				mdb_set_dupsort(txn, dbi, greater);
		}

		rc = mdb_cursor_open(txn, dbi, &mc);
		if (rc) {
			fprintf(stderr, "mdb_cursor_open failed, error %d %s\n", rc, mdb_strerror(rc));
			goto txn_abort;
		}

		while(1) {
			rc = readline(&key, &kbuf);
			if (rc)  /* rc == EOF */
				break;

			rc = readline(&data, &dbuf);
			if (rc) {
				fprintf(stderr, "%s: line %"Yu": failed to read key value\n", prog, lineno);
				goto txn_abort;
			}
			if (!key.mv_size) {
				fprintf(stderr, "%s: line %"Yu": zero-length key(ignored)\n", prog, lineno);
				continue;
			}

			if (append) {
				appflag = MDB_APPEND;
				if (flags & MDB_DUPSORT) {
					if (prevk.mv_size == key.mv_size && !memcmp(prevk.mv_data, key.mv_data, key.mv_size))
						appflag = MDB_CURRENT|MDB_APPENDDUP;
					else {
						memcpy(prevk.mv_data, key.mv_data, key.mv_size);
						prevk.mv_size = key.mv_size;
					}
				}
			} else {
				appflag = 0;
			}
			rc = mdb_cursor_put(mc, &key, &data, putflags|appflag);
			if (rc == MDB_KEYEXIST && putflags)
				continue;
			if (rc) {
				fprintf(stderr, "mdb_cursor_put failed, error %d %s\n", rc, mdb_strerror(rc));
				goto txn_abort;
			}
			batch++;
			if (batch == 100) {
				rc = mdb_txn_commit(txn);
				if (rc) {
					fprintf(stderr, "%s: line %"Yu": txn_commit: %s\n",
						prog, lineno, mdb_strerror(rc));
					goto env_close;
				}
				rc = mdb_txn_begin(env, NULL, 0, &txn);
				if (rc) {
					fprintf(stderr, "mdb_txn_begin failed, error %d %s\n", rc, mdb_strerror(rc));
					goto env_close;
				}
				rc = mdb_cursor_open(txn, dbi, &mc);
				if (rc) {
					fprintf(stderr, "mdb_cursor_open failed, error %d %s\n", rc, mdb_strerror(rc));
					goto txn_abort;
				}
				if (appflag & MDB_APPENDDUP) {
					MDB_val k, d;
					mdb_cursor_get(mc, &k, &d, MDB_LAST);
				}
				batch = 0;
			}
		}
		rc = mdb_txn_commit(txn);
		txn = NULL;
		if (rc) {
			fprintf(stderr, "%s: line %"Yu": txn_commit: %s\n",
				prog, lineno, mdb_strerror(rc));
			goto env_close;
		}
		mdb_dbi_close(env, dbi);
	}

txn_abort:
	mdb_txn_abort(txn);
env_close:
	mdb_env_close(env);
	if (mlm)
		mlm_unload(mlm);

	return rc ? EXIT_FAILURE : EXIT_SUCCESS;
}
