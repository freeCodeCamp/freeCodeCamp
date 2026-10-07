/* module.h - helper for dynamically loading crypto module */
/*
 * Copyright 2020-2021 Howard Chu, Symas Corp.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted only as authorized by the Symas
 * Dual-Use License.
 *
 * A copy of this license is available in the file LICENSE in the
 * source distribution.
 */

void *mlm_load(const char *file, const char *name, MDB_crypto_funcs **mcf_ptr, char **errmsg);
void mlm_unload(void *lm);
void *mlm_setup(MDB_env *env, const char *file, const char *password, char **errmsg);
