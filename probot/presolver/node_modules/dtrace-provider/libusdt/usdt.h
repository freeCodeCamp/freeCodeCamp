/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include <stdint.h>
#include <unistd.h>

#define USDT_ARG_MAX 32

typedef enum usdt_error {
        USDT_ERROR_MALLOC = 0,
        USDT_ERROR_VALLOC,
        USDT_ERROR_NOPROBES,
        USDT_ERROR_LOADDOF,
        USDT_ERROR_ALREADYENABLED,
        USDT_ERROR_UNLOADDOF,
        USDT_ERROR_DUP_PROBE,
        USDT_ERROR_REMOVE_PROBE
} usdt_error_t;

typedef struct usdt_probe {
        int (*isenabled_addr)(void);
        void *probe_addr;
} usdt_probe_t;

int usdt_is_enabled(usdt_probe_t *probe);
void usdt_fire_probe(usdt_probe_t *probe, size_t argc, void **argv);

typedef struct usdt_probedef {
        const char *name;
        const char *function;
        size_t argc;
        char *types[USDT_ARG_MAX];
        struct usdt_probe *probe;
        struct usdt_probedef *next;
        int refcnt;
} usdt_probedef_t;

usdt_probedef_t *usdt_create_probe(const char *func, const char *name,
                                   size_t argc, const char **types);
void usdt_probe_release(usdt_probedef_t *probedef);

typedef struct usdt_provider {
        const char *name;
        const char *module;
        usdt_probedef_t *probedefs;
        char *error;
        int enabled;
        void *file;
} usdt_provider_t;

usdt_provider_t *usdt_create_provider(const char *name, const char *module);
int usdt_provider_add_probe(usdt_provider_t *provider, usdt_probedef_t *probedef);
int usdt_provider_remove_probe(usdt_provider_t *provider, usdt_probedef_t *probedef);
int usdt_provider_enable(usdt_provider_t *provider);
int usdt_provider_disable(usdt_provider_t *provider);
void usdt_provider_free(usdt_provider_t *provider);

void usdt_error(usdt_provider_t *provider, usdt_error_t error, ...);
char *usdt_errstr(usdt_provider_t *provider);

