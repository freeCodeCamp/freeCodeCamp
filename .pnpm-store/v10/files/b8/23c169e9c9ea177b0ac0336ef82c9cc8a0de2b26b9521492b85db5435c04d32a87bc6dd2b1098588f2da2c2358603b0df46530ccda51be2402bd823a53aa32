# Makefile for liblmdb (Lightning memory-mapped database library).

########################################################################
# Configuration. The compiler options must enable threaded compilation.
#
# Preprocessor macros (for CPPFLAGS) of interest...
# Note that the defaults should already be correct for most
# platforms; you should not need to change any of these.
# Read their descriptions in mdb.c if you do:
#
# - MDB_USE_POSIX_MUTEX, MDB_USE_POSIX_SEM, MDB_USE_SYSV_SEM
# - MDB_DSYNC
# - MDB_FDATASYNC
# - MDB_FDATASYNC_WORKS
# - MDB_USE_PWRITEV
# - MDB_USE_ROBUST
#
# There may be other macros in mdb.c of interest. You should
# read mdb.c before changing any of them.
#
CC	= gcc
AR	= ar
W	= -W -Wall -Wno-unused-parameter -Wbad-function-cast -Wuninitialized
THREADS = -pthread
OPT = -O2 -g
CFLAGS	= $(THREADS) $(OPT) $(W) $(XCFLAGS)
LDLIBS	= 
SOLIBS	= 
SOEXT	= .so
prefix	= /usr/local
exec_prefix = $(prefix)
bindir = $(exec_prefix)/bin
libdir = $(exec_prefix)/lib
includedir = $(prefix)/include
datarootdir = $(prefix)/share
mandir = $(datarootdir)/man

########################################################################

IHDRS	= lmdb.h
ILIBS	= liblmdb.a liblmdb$(SOEXT)
IPROGS	= mdb_stat mdb_copy mdb_dump mdb_load mdb_drop
IDOCS	= mdb_stat.1 mdb_copy.1 mdb_dump.1 mdb_load.1 mdb_drop.1
PROGS	= $(IPROGS) mtest mtest2 mtest3 mtest4 mtest5
all:	$(ILIBS) $(PROGS)

install: $(ILIBS) $(IPROGS) $(IHDRS)
	mkdir -p $(DESTDIR)$(bindir)
	mkdir -p $(DESTDIR)$(libdir)
	mkdir -p $(DESTDIR)$(includedir)
	mkdir -p $(DESTDIR)$(mandir)/man1
	for f in $(IPROGS); do cp $$f $(DESTDIR)$(bindir); done
	for f in $(ILIBS); do cp $$f $(DESTDIR)$(libdir); done
	for f in $(IHDRS); do cp $$f $(DESTDIR)$(includedir); done
	for f in $(IDOCS); do cp $$f $(DESTDIR)$(mandir)/man1; done

clean:
	rm -rf $(PROGS) *.[ao] *.[ls]o *~ testdb

test:	all
	rm -rf testdb && mkdir testdb
	./mtest && ./mdb_stat testdb

liblmdb.a:	mdb.o midl.o
	$(AR) rs $@ mdb.o midl.o

liblmdb$(SOEXT):	mdb.lo midl.lo
#	$(CC) $(LDFLAGS) -pthread -shared -Wl,-Bsymbolic -o $@ mdb.o midl.o $(SOLIBS)
	$(CC) $(LDFLAGS) -pthread -shared -o $@ mdb.lo midl.lo $(SOLIBS)

mdb_stat: mdb_stat.o liblmdb.a
mdb_copy: mdb_copy.o liblmdb.a
mdb_dump: mdb_dump.o liblmdb.a
mdb_load: mdb_load.o liblmdb.a
mdb_drop: mdb_drop.o liblmdb.a
mtest:    mtest.o    liblmdb.a
mtest2:	mtest2.o liblmdb.a
mtest3:	mtest3.o liblmdb.a
mtest4:	mtest4.o liblmdb.a
mtest5:	mtest5.o liblmdb.a
mtest6:	mtest6.o liblmdb.a

mdb.o: mdb.c lmdb.h midl.h
	$(CC) $(CFLAGS) $(CPPFLAGS) -c mdb.c

midl.o: midl.c midl.h
	$(CC) $(CFLAGS) $(CPPFLAGS) -c midl.c

mdb.lo: mdb.c lmdb.h midl.h
	$(CC) $(CFLAGS) -fPIC $(CPPFLAGS) -c mdb.c -o $@

midl.lo: midl.c midl.h
	$(CC) $(CFLAGS) -fPIC $(CPPFLAGS) -c midl.c -o $@

%:	%.o
	$(CC) $(CFLAGS) $(LDFLAGS) $^ $(LDLIBS) -o $@

%.o:	%.c lmdb.h
	$(CC) $(CFLAGS) $(CPPFLAGS) -c $<

COV_FLAGS=-fprofile-arcs -ftest-coverage
COV_OBJS=xmdb.o xmidl.o

coverage: xmtest
	for i in mtest*.c [0-9]*.c; do j=`basename \$$i .c`; $(MAKE) $$j.o; \
		gcc -o x$$j $$j.o $(COV_OBJS) -pthread $(COV_FLAGS); \
		rm -rf testdb; mkdir testdb; ./x$$j; done
	gcov xmdb.c
	gcov xmidl.c

xmtest:	mtest.o xmdb.o xmidl.o
	gcc -o xmtest mtest.o xmdb.o xmidl.o -pthread $(COV_FLAGS)

xmdb.o: mdb.c lmdb.h midl.h
	$(CC) $(CFLAGS) -fPIC $(CPPFLAGS) -O0 $(COV_FLAGS) -c mdb.c -o $@

xmidl.o: midl.c midl.h
	$(CC) $(CFLAGS) -fPIC $(CPPFLAGS) -O0 $(COV_FLAGS) -c midl.c -o $@
