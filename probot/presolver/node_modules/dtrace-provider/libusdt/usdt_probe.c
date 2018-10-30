/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include "usdt_internal.h"

#ifdef __APPLE__

uint32_t
usdt_probe_offset(usdt_probe_t *probe, char *dof, uint8_t argc)
{
        uint32_t offset;
#ifdef __x86_64__
        offset = ((uint64_t) probe->probe_addr - (uint64_t) dof + 2);
#elif __i386__
        offset = ((uint32_t) probe->probe_addr - (uint32_t) dof + 2);
#else
#error "only x86_64 and i386 supported"
#endif
        return (offset);
}

uint32_t
usdt_is_enabled_offset(usdt_probe_t *probe, char *dof) 
{
        uint32_t offset;
#ifdef __x86_64__
        offset = ((uint64_t) probe->isenabled_addr - (uint64_t) dof + 6);
#elif __i386__
        offset = ((uint32_t) probe->isenabled_addr - (uint32_t) dof + 6);
#else
#error "only x86_64 and i386 supported"
#endif
        return (offset);
}

#elif defined __linux__

uint32_t
usdt_probe_offset(usdt_probe_t *probe, char *dof, uint8_t argc)
{
        return (16);
}

uint32_t
usdt_is_enabled_offset(usdt_probe_t *probe, char *dof)
{
        return (10);
}

#else /* solaris and freebsd */

uint32_t
usdt_probe_offset(usdt_probe_t *probe, char *dof, uint8_t argc)
{
        return (16);
}

uint32_t
usdt_is_enabled_offset(usdt_probe_t *probe, char *dof)
{
        return (8);
}

#endif

int
usdt_create_tracepoints(usdt_probe_t *probe)
{
        /* Prepare the tracepoints - for each probe, a separate chunk
         * of memory with the tracepoint code copied into it, to give
         * us unique addresses for each tracepoint.
         *
         * On Oracle Linux, this must be an mmapped file because USDT
         * probes there are implemented as uprobes, which are
         * addressed by inode and offset. The file used is a small
         * mkstemp'd file we immediately unlink.
         *
         * Elsewhere, we can use the heap directly because USDT will
         * instrument any memory mapped by the process.
         */

        size_t size;
#ifdef __linux__
        int fd;
        char tmp[20] = "/tmp/libusdtXXXXXX";

        if ((fd = mkstemp(tmp)) < 0)
                return (-1);
        if (unlink(tmp) < 0)
                return (-1);
        if (write(fd, "\0", FUNC_SIZE) < FUNC_SIZE)
                return (-1);

        probe->isenabled_addr = (int (*)())mmap(NULL, FUNC_SIZE,
                                                PROT_READ | PROT_WRITE | PROT_EXEC,
                                                MAP_PRIVATE, fd, 0);
#else
        probe->isenabled_addr = (int (*)())valloc(FUNC_SIZE);
#endif
        if (probe->isenabled_addr == NULL)
                return (-1);

        /* ensure that the tracepoints will fit the heap we're allocating */
        size = ((char *)usdt_tracepoint_end - (char *)usdt_tracepoint_isenabled);
        assert(size < FUNC_SIZE);

        size = ((char *)usdt_tracepoint_probe - (char *)usdt_tracepoint_isenabled);
        probe->probe_addr = (char *)probe->isenabled_addr + size;

        memcpy((void *)probe->isenabled_addr,
               (const void *)usdt_tracepoint_isenabled, FUNC_SIZE);

#ifdef __linux__
        mprotect((void *)probe->isenabled_addr, FUNC_SIZE,
                 PROT_READ | PROT_EXEC);
#else
        mprotect((void *)probe->isenabled_addr, FUNC_SIZE,
                 PROT_READ | PROT_WRITE | PROT_EXEC);
#endif

        return (0);
}

void
usdt_free_tracepoints(usdt_probe_t *probe)
{
#ifdef __linux__
        (void) munmap(probe->isenabled_addr, FUNC_SIZE);
#else
        free(probe->isenabled_addr);
#endif
}
