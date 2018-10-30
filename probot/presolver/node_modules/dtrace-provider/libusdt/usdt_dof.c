/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include "usdt_internal.h"

int
usdt_dof_section_add_data(usdt_dof_section_t *section, void *data, size_t length)
{
        int newlen = section->size + length;

        if ((section->data = realloc((char *)section->data, newlen)) == NULL)
                return (-1);

        memcpy(section->data + section->size, data, length);
        section->size = newlen;
        return (0);
}

size_t
usdt_provider_dof_size(usdt_provider_t *provider, usdt_strtab_t *strtab)
{
        uint8_t i, j;
        int args = 0;
        int probes = 0;
        size_t size = 0;
        usdt_probedef_t *pd;
        size_t sections[8];

        for (pd = provider->probedefs; pd != NULL; pd = pd->next) {
                args += pd->argc;
                probes++;
        }

        sections[0] = sizeof(dof_hdr_t);
        sections[1] = sizeof(dof_sec_t) * 6;
        sections[2] = strtab->size;
        sections[3] = sizeof(dof_probe_t) * probes;
        sections[4] = sizeof(uint8_t) * args;
        sections[5] = sizeof(uint32_t) * probes;
        sections[6] = sizeof(uint32_t) * probes;
        sections[7] = sizeof(dof_provider_t);

        for (i = 0; i < 8; i++) {
                size += sections[i];
                j = size % 8;
                if (j > 0)
                        size += (8 - j);
        }

        return size;
}

int
usdt_dof_section_init(usdt_dof_section_t *section, uint32_t type, dof_secidx_t index)
{
        section->type    = type;
        section->index   = index;
        section->flags   = DOF_SECF_LOAD;
        section->offset  = 0;
        section->size    = 0;
        section->entsize = 0;
        section->pad	 = 0;
        section->next    = NULL;

        if ((section->data = malloc(1)) == NULL)
                return (-1);

        switch(type) {
        case DOF_SECT_PROBES:   section->align = 8; break;
        case DOF_SECT_PRARGS:   section->align = 1; break;
        case DOF_SECT_PROFFS:   section->align = 4; break;
        case DOF_SECT_PRENOFFS: section->align = 4; break;
        case DOF_SECT_PROVIDER: section->align = 4; break;
        }

        return (0);
}

void
usdt_dof_section_free(usdt_dof_section_t *section)
{
        free(section->data);
}

int
usdt_strtab_init(usdt_strtab_t *strtab, dof_secidx_t index)
{
        strtab->type    = DOF_SECT_STRTAB;;
        strtab->index   = index;
        strtab->flags   = DOF_SECF_LOAD;
        strtab->offset  = 0;
        strtab->size    = 0;
        strtab->entsize = 0;
        strtab->pad	  = 0;
        strtab->data    = NULL;
        strtab->align   = 1;
        strtab->strindex = 1;

        if ((strtab->data = (char *) malloc(1)) == NULL)
                return (-1);

        *strtab->data = '\0';

        return (0);
}

dof_stridx_t
usdt_strtab_add(usdt_strtab_t *strtab, const char *string)
{
        size_t length;
        int index;

        length = strlen(string);
        index = strtab->strindex;
        strtab->strindex += (length + 1);

        if ((strtab->data = realloc(strtab->data, strtab->strindex)) == NULL)
                return (0);

        memcpy((char *) (strtab->data + index), (char *)string, length + 1);
        strtab->size = index + length + 1;

        return (index);
}

