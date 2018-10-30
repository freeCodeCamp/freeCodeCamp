/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

#include "usdt_internal.h"

#include <sys/ioctl.h>

static uint8_t
dof_version(uint8_t header_version)
{
        uint8_t dof_version;
        /* DOF versioning: Apple always needs version 3, but Solaris can use
           1 or 2 depending on whether is-enabled probes are needed. */
#ifdef __APPLE__
        dof_version = DOF_VERSION_3;
#else
        switch(header_version) {
        case 1:
                dof_version = DOF_VERSION_1;
                break;
        case 2:
                dof_version = DOF_VERSION_2;
                break;
        default:
                dof_version = DOF_VERSION;
        }
#endif
        return dof_version;
}

#ifdef __APPLE__
static const char *helper = "/dev/dtracehelper";

static int
load_dof(int fd, dof_helper_t *dh)
{
        int ret;
        uint8_t buffer[sizeof(dof_ioctl_data_t) + sizeof(dof_helper_t)];
        dof_ioctl_data_t* ioctlData = (dof_ioctl_data_t*)buffer;
        user_addr_t val;

        ioctlData->dofiod_count = 1;
        memcpy(&ioctlData->dofiod_helpers[0], dh, sizeof(dof_helper_t));

        val = (user_addr_t)(unsigned long)ioctlData;
        ret = ioctl(fd, DTRACEHIOC_ADDDOF, &val);

        if (ret < 0)
                return ret;

        return (int)(ioctlData->dofiod_helpers[0].dofhp_dof);
}

#else /* Solaris and FreeBSD */

/* ignore Sol10 GA ... */
static const char *helper = "/dev/dtrace/helper";

static int
load_dof(int fd, dof_helper_t *dh)
{
        int ret;

        ret = ioctl(fd, DTRACEHIOC_ADDDOF, dh);
#if defined(__FreeBSD__) && __FreeBSD__ <= 10
	if (ret != -1)
	    ret = dh ->gen;
#endif
        return ret;
}

#endif

static void
pad_section(usdt_dof_section_t *sec)
{
        size_t i, pad;

        if (sec->align > 1) {
                i = sec->offset % sec->align;
                if (i > 0) {
                        pad = sec->align - i;
                        sec->offset = (pad + sec->offset);
                        sec->pad = pad;
                }
        }
}

static void
dof_header(dof_hdr_t *header)
{
        int i;

        header->dofh_ident[DOF_ID_MAG0] = DOF_MAG_MAG0;
        header->dofh_ident[DOF_ID_MAG1] = DOF_MAG_MAG1;
        header->dofh_ident[DOF_ID_MAG2] = DOF_MAG_MAG2;
        header->dofh_ident[DOF_ID_MAG3] = DOF_MAG_MAG3;

        header->dofh_ident[DOF_ID_MODEL]    = DOF_MODEL_NATIVE;
        header->dofh_ident[DOF_ID_ENCODING] = DOF_ENCODE_NATIVE;
        header->dofh_ident[DOF_ID_VERSION]  = dof_version(2);
        header->dofh_ident[DOF_ID_DIFVERS]  = DIF_VERSION;
        header->dofh_ident[DOF_ID_DIFIREG]  = DIF_DIR_NREGS;
        header->dofh_ident[DOF_ID_DIFTREG]  = DIF_DTR_NREGS;

        for (i = DOF_ID_PAD; i < DOF_ID_SIZE; i++)
                header->dofh_ident[i] = 0;

        header->dofh_flags = 0;

        header->dofh_hdrsize = sizeof(dof_hdr_t);
        header->dofh_secsize = sizeof(dof_sec_t);
        header->dofh_secoff = sizeof(dof_hdr_t);

        header->dofh_loadsz = 0;
        header->dofh_filesz = 0;
        header->dofh_pad = 0;
}

static size_t
add_header(usdt_dof_file_t *file, size_t offset, usdt_dof_section_t *section)
{
        dof_sec_t header;

        header.dofs_flags   = section->flags;
        header.dofs_type    = section->type;
        header.dofs_offset  = section->offset;
        header.dofs_size    = section->size;
        header.dofs_entsize = section->entsize;
        header.dofs_align   = section->align;

        memcpy((file->dof + offset), &header, sizeof(dof_sec_t));
        return (offset + sizeof(dof_sec_t));
}

static size_t
add_section(usdt_dof_file_t *file, size_t offset, usdt_dof_section_t *section)
{
        if (section->pad > 0) {
                /* maximum padding required is 7 */
                memcpy((file->dof + offset), "\0\0\0\0\0\0\0", section->pad);
                offset += section->pad;
        }

        memcpy((file->dof + offset), section->data, section->size);
        return (offset + section->size);
}

int
usdt_dof_file_unload(usdt_dof_file_t *file)
{
        int fd, ret;

        if ((fd = open(helper, O_RDWR)) < 0)
                return (-1);

#ifdef __FreeBSD__
        ret = ioctl(fd, DTRACEHIOC_REMOVE, &file->gen);
#else
        ret = ioctl(fd, DTRACEHIOC_REMOVE, file->gen);
#endif

        if (ret < 0)
                return (-1);

        if ((close(fd)) < 0)
                return (-1);

        return (0);
}

int
usdt_dof_file_load(usdt_dof_file_t *file, const char *module)
{
        dof_helper_t dh;
        dof_hdr_t *dof;
        int fd;

        dof = (dof_hdr_t *) file->dof;

        dh.dofhp_dof  = (uintptr_t)dof;
        dh.dofhp_addr = (uintptr_t)dof;
#if __FreeBSD__ >= 11
        dh.dofhp_pid = getpid();
#endif
        (void) strncpy(dh.dofhp_mod, module, sizeof (dh.dofhp_mod));

        if ((fd = open(helper, O_RDWR)) < 0)
                return (-1);

        file->gen = load_dof(fd, &dh);

        if ((close(fd)) < 0)
                return (-1);

        if (file->gen < 0)
                return (-1);

        return (0);
}

void
usdt_dof_file_append_section(usdt_dof_file_t *file, usdt_dof_section_t *section)
{
        usdt_dof_section_t *s;

        if (file->sections == NULL) {
                file->sections = section;
        }
        else {
                for (s = file->sections; (s->next != NULL); s = s->next) ;
                s->next = section;
        }
}

void
usdt_dof_file_generate(usdt_dof_file_t *file, usdt_strtab_t *strtab)
{
        dof_hdr_t header;
        uint64_t filesz;
        uint64_t loadsz;
        usdt_dof_section_t *sec;
        size_t offset;

        dof_header(&header);
        header.dofh_secnum = 6;

        filesz = sizeof(dof_hdr_t) + (sizeof(dof_sec_t) * header.dofh_secnum);
        loadsz = filesz;

        strtab->offset = filesz;
        pad_section((usdt_dof_section_t *)strtab);
        filesz += strtab->size + strtab->pad;

        if (strtab->flags & 1)
                loadsz += strtab->size + strtab->pad;

        for (sec = file->sections; sec != NULL; sec = sec->next) {
                sec->offset = filesz;
                pad_section(sec);
                filesz += sec->size + sec->pad;
                if (sec->flags & 1)
                        loadsz += sec->size + sec->pad;
        }

        header.dofh_loadsz = loadsz;
        header.dofh_filesz = filesz;
        memcpy(file->dof, &header, sizeof(dof_hdr_t));

        offset = sizeof(dof_hdr_t);

        offset = add_header(file, offset, (usdt_dof_section_t *)strtab);

        for (sec = file->sections; sec != NULL; sec = sec->next)
                offset = add_header(file, offset, sec);

        offset = add_section(file, offset, (usdt_dof_section_t *)strtab);

        for (sec = file->sections; sec != NULL; sec = sec->next)
                offset = add_section(file, offset, sec);
}

usdt_dof_file_t *
usdt_dof_file_init(usdt_provider_t *provider, size_t size)
{
        usdt_dof_file_t *file;

        if ((file = malloc(sizeof(*file))) == NULL) {
                usdt_error(provider, USDT_ERROR_MALLOC);
                return (NULL);
        }

        if ((file->dof = valloc(size)) == NULL) {
                usdt_error(provider, USDT_ERROR_VALLOC);
                return (NULL);
        }

        file->sections = NULL;
        file->size = size;

        return (file);
}

void
usdt_dof_file_free(usdt_dof_file_t *file)
{
        free(file->dof);
        free(file);
}
