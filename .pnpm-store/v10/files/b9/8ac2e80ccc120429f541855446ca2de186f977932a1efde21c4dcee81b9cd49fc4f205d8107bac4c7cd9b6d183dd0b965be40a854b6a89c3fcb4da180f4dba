/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
import { DiagAPI } from './api/diag';
/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 *
 * @since 1.0.0
 */
export const diag = DiagAPI.instance();
//# sourceMappingURL=diag-api.js.map