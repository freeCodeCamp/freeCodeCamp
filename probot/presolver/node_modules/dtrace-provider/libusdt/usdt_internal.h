/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#ifdef __linux__
#include <endian.h>
#if __BYTE_ORDER == __LITTLE_ENDIAN
#ifndef _LITTLE_ENDIAN
#define _LITTLE_ENDIAN
#endif
#endif
#endif

#include <sys/dtrace.h>
#include <sys/types.h>
#include <sys/mman.h>

#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdint.h>
#include <assert.h>

#define FUNC_SIZE 32

#include "usdt.h"

extern void usdt_tracepoint_isenabled(void);
extern void usdt_tracepoint_probe(void);
extern void usdt_tracepoint_end(void);
extern void usdt_probe_args(void *, int, void**);

uint32_t usdt_probe_offset(usdt_probe_t *probe, char *dof, uint8_t argc);
uint32_t usdt_is_enabled_offset(usdt_probe_t *probe, char *dof);
int usdt_create_tracepoints(usdt_probe_t *probe);
void usdt_free_tracepoints(usdt_probe_t *probe);

typedef struct usdt_dof_section {
        dof_secidx_t index;
        uint32_t type;
        uint32_t flags;
        uint32_t align;
        uint64_t offset;
        uint64_t size;
        uint32_t entsize;
        size_t pad;
        struct usdt_dof_section *next;
        char *data;
} usdt_dof_section_t;

int usdt_dof_section_init(usdt_dof_section_t *section,
                          uint32_t type, dof_secidx_t index);
int usdt_dof_section_add_data(usdt_dof_section_t *section,
                              void *data, size_t length);
void usdt_dof_section_free(usdt_dof_section_t *section);

typedef struct usdt_strtab {
        dof_secidx_t index;
        uint32_t type;
        uint32_t flags;
        uint32_t align;
        uint64_t offset;
        uint64_t size;
        uint32_t entsize;
        size_t pad;
        int strindex;
        char *data;
} usdt_strtab_t;

int usdt_strtab_init(usdt_strtab_t *strtab, dof_secidx_t index);
dof_stridx_t usdt_strtab_add(usdt_strtab_t *strtab, const char *string);
char *usdt_strtab_header(usdt_strtab_t *strtab);
size_t usdt_strtab_size(usdt_strtab_t *strtab);

size_t usdt_provider_dof_size(usdt_provider_t *provider, usdt_strtab_t *strtab);

typedef struct usdt_dof_file {
        char *dof;
        int gen;
        size_t size;
        usdt_dof_section_t *sections;
} usdt_dof_file_t;

usdt_dof_file_t *usdt_dof_file_init(usdt_provider_t *provider, size_t size);
void usdt_dof_file_append_section(usdt_dof_file_t *file, usdt_dof_section_t *section);
void usdt_dof_file_generate(usdt_dof_file_t *file, usdt_strtab_t *strtab);
int usdt_dof_file_load(usdt_dof_file_t *file, const char *module);
int usdt_dof_file_unload(usdt_dof_file_t *file);
void usdt_dof_file_free(usdt_dof_file_t *file);

int usdt_dof_probes_sect(usdt_dof_section_t *probes,
                         usdt_provider_t *provider, usdt_strtab_t *strtab);
int usdt_dof_prargs_sect(usdt_dof_section_t *prargs,
                         usdt_provider_t *provider);
int usdt_dof_proffs_sect(usdt_dof_section_t *proffs,
                         usdt_provider_t *provider, char *dof);
int usdt_dof_prenoffs_sect(usdt_dof_section_t *prenoffs,
                           usdt_provider_t *provider, char *dof);
int usdt_dof_provider_sect(usdt_dof_section_t *provider_s,
                           usdt_provider_t *provider);

