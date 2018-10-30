/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include "usdt_internal.h"

int
usdt_dof_probes_sect(usdt_dof_section_t *probes,
                     usdt_provider_t *provider, usdt_strtab_t *strtab)
{
        usdt_probedef_t *pd;
        dof_probe_t p;
        dof_stridx_t type, argv;
        uint8_t argc, i;
        uint32_t argidx = 0;
        uint32_t offidx = 0;

        usdt_dof_section_init(probes, DOF_SECT_PROBES, 1);

        for (pd = provider->probedefs; pd != NULL; pd = pd->next) {
                argc = 0;
                argv = 0;
                type = 0;

                for (i = 0; i < pd->argc; i++) {
                        type = usdt_strtab_add(strtab, pd->types[i]);
                        argc++;
                        if (argv == 0)
                                argv = type;
                }

                if (usdt_create_tracepoints(pd->probe) < 0) {
                        usdt_error(provider, USDT_ERROR_VALLOC);
                        return (-1);
                }

#ifdef __x86_64__
                p.dofpr_addr     = (uint64_t) pd->probe->isenabled_addr;
#elif __i386__ || __i386
                p.dofpr_addr     = (uint32_t) pd->probe->isenabled_addr;
#else
#error "only x86_64 and i386 supported"
#endif
                p.dofpr_func     = usdt_strtab_add(strtab, pd->function);
                p.dofpr_name     = usdt_strtab_add(strtab, pd->name);
                p.dofpr_nargv    = argv;
                p.dofpr_xargv    = argv;
                p.dofpr_argidx   = argidx;
                p.dofpr_offidx   = offidx;
                p.dofpr_nargc    = argc;
                p.dofpr_xargc    = argc;
                p.dofpr_noffs    = 1;
                p.dofpr_enoffidx = offidx;
                p.dofpr_nenoffs  = 1;
                p.dofpr_pad1     = 0;
                p.dofpr_pad2     = 0;

                usdt_dof_section_add_data(probes, &p, sizeof(dof_probe_t));
                probes->entsize = sizeof(dof_probe_t);

                argidx += argc;
                offidx++;
        }

        return (0);
}

int
usdt_dof_prargs_sect(usdt_dof_section_t *prargs, usdt_provider_t *provider)
{
        usdt_probedef_t *pd;
        uint8_t i;

        usdt_dof_section_init(prargs, DOF_SECT_PRARGS, 2);
        prargs->entsize = 1;

        for (pd = provider->probedefs; pd != NULL; pd = pd->next) {
                for (i = 0; i < pd->argc; i++)
                        usdt_dof_section_add_data(prargs, &i, 1);
        }
        if (prargs->size == 0) {
                i = 0;
                if (usdt_dof_section_add_data(prargs, &i, 1) < 0) {
                        usdt_error(provider, USDT_ERROR_MALLOC);
                        return (-1);
                }
        }

        return (0);
}

int
usdt_dof_proffs_sect(usdt_dof_section_t *proffs,
                     usdt_provider_t *provider, char *dof)
{
        usdt_probedef_t *pd;
        uint32_t off;

        usdt_dof_section_init(proffs, DOF_SECT_PROFFS, 3);
        proffs->entsize = 4;

        for (pd = provider->probedefs; pd != NULL; pd = pd->next) {
                off = usdt_probe_offset(pd->probe, dof, pd->argc);
                if (usdt_dof_section_add_data(proffs, &off, 4) < 0) {
                        usdt_error(provider, USDT_ERROR_MALLOC);
                        return (-1);
                }
        }

        return (0);
}

int
usdt_dof_prenoffs_sect(usdt_dof_section_t *prenoffs,
                       usdt_provider_t *provider, char *dof)
{
        usdt_probedef_t *pd;
        uint32_t off;

        usdt_dof_section_init(prenoffs, DOF_SECT_PRENOFFS, 4);
        prenoffs->entsize = 4;

        for (pd = provider->probedefs; pd != NULL; pd = pd->next) {
                off = usdt_is_enabled_offset(pd->probe, dof);
                if (usdt_dof_section_add_data(prenoffs, &off, 4) < 0) {
                        usdt_error(provider, USDT_ERROR_MALLOC);
                        return (-1);
                }
        }

        return (0);
}

int
usdt_dof_provider_sect(usdt_dof_section_t *provider_s, usdt_provider_t *provider)
{
        dof_provider_t p;

        usdt_dof_section_init(provider_s, DOF_SECT_PROVIDER, 5);

        p.dofpv_strtab   = 0;
        p.dofpv_probes   = 1;
        p.dofpv_prargs   = 2;
        p.dofpv_proffs   = 3;
        p.dofpv_prenoffs = 4;
        p.dofpv_name     = 1; /* provider name always first strtab entry. */

        /*
         * Stability is something of a hack. Everything is marked *
         * "stable" here to permit use of the "args" array, which is *
         * needed to access arguments past "arg9".
         *
         * It should be up to the creator of the provider to decide
         * this, though, and it should be possible to set the
         * appropriate stability at creation time.
         */

        p.dofpv_provattr = DOF_ATTR(DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE);
        p.dofpv_modattr  = DOF_ATTR(DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE);
        p.dofpv_funcattr = DOF_ATTR(DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE);
        p.dofpv_nameattr = DOF_ATTR(DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE);
        p.dofpv_argsattr = DOF_ATTR(DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE,
                                    DTRACE_STABILITY_STABLE);

        if ((usdt_dof_section_add_data(provider_s, &p, sizeof(p))) < 0) {
                usdt_error(provider, USDT_ERROR_MALLOC);
                return (-1);
        }

        return (0);
}
