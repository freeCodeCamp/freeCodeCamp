/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include "usdt.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static void
create_and_free_provider(int argc, char **argv)
{
        usdt_provider_t *provider;
        usdt_probedef_t *probedef;

        if ((provider = usdt_create_provider("testlibusdt", "modname")) == NULL) {
                fprintf(stderr, "unable to create provider\n");
                exit (1);
        }
        if ((probedef = usdt_create_probe((const char *)argv[1],
                                          (const char *)argv[2],
                                          (argc-3), (const char **)&argv[3])) == NULL)
        {
                fprintf(stderr, "unable to create probe\n");
                exit (1);
        }
        usdt_provider_add_probe(provider, probedef);

        if ((usdt_provider_enable(provider)) < 0) {
                fprintf(stderr, "unable to enable provider: %s\n", usdt_errstr(provider));
                exit (1);
        }

        if ((usdt_provider_disable(provider)) < 0) {
                fprintf(stderr, "unable to disable provider: %s\n", usdt_errstr(provider));
                exit (1);
        }

        usdt_probe_release(probedef);
        usdt_provider_free(provider);
}

int
main(int argc, char **argv)
{
        char char_argv[USDT_ARG_MAX];
        int int_argv[USDT_ARG_MAX * 2];
        int i;
        char buf[255];

        for (i = 0; i < USDT_ARG_MAX; i++)
                int_argv[i] = i + 1;
        for (i = 0; i < USDT_ARG_MAX; i++)
                char_argv[i] = (char) i + 65;

        if (argc < 3) {
                fprintf(stderr, "usage: %s func name [types ...]\n", argv[0]);
                return(1);
        }

        for (i = 0; i < USDT_ARG_MAX; i++) {
                if (argv[i+3] != NULL && i+3 < argc) {
                        if (strncmp("c", argv[i+3], 1) == 0) {
                                argv[i+3] = strdup("char *");
                        }
                        if (strncmp("i", argv[i+3], 1) == 0) {
                                argv[i+3] = strdup("int");
                        }
                }
        }

        for (i = 0; i < 100000; i++)
                create_and_free_provider(argc, argv);

        return 0;
}
