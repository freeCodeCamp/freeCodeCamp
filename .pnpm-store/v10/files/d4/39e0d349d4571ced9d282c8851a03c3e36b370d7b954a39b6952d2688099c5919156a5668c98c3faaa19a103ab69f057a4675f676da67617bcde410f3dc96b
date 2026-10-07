"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSamplerFromEnv = exports.loadDefaultConfig = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const AlwaysOffSampler_1 = require("./sampler/AlwaysOffSampler");
const AlwaysOnSampler_1 = require("./sampler/AlwaysOnSampler");
const ParentBasedSampler_1 = require("./sampler/ParentBasedSampler");
const TraceIdRatioBasedSampler_1 = require("./sampler/TraceIdRatioBasedSampler");
var TracesSamplerValues;
(function (TracesSamplerValues) {
    TracesSamplerValues["AlwaysOff"] = "always_off";
    TracesSamplerValues["AlwaysOn"] = "always_on";
    TracesSamplerValues["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
const DEFAULT_RATIO = 1;
/**
 * Load default configuration. For fields with primitive values, any user-provided
 * value will override the corresponding default value. For fields with
 * non-primitive values (like `spanLimits`), the user-provided value will be
 * used to extend the default value.
 */
// object needs to be wrapped in this function and called when needed otherwise
// envs are parsed before tests are ran - causes tests using these envs to fail
function loadDefaultConfig() {
    return {
        sampler: buildSamplerFromEnv(),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: (0, core_1.getNumberFromEnv)('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0, core_1.getNumberFromEnv)('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128,
        },
        spanLimits: {
            attributeValueLengthLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
            linkCountLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
            eventCountLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
            attributePerEventCountLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
            attributePerLinkCountLimit: (0, core_1.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128,
        },
    };
}
exports.loadDefaultConfig = loadDefaultConfig;
/**
 * Based on environment, builds a sampler, complies with specification.
 */
function buildSamplerFromEnv() {
    const sampler = (0, core_1.getStringFromEnv)('OTEL_TRACES_SAMPLER') ??
        TracesSamplerValues.ParentBasedAlwaysOn;
    switch (sampler) {
        case TracesSamplerValues.AlwaysOn:
            return new AlwaysOnSampler_1.AlwaysOnSampler();
        case TracesSamplerValues.AlwaysOff:
            return new AlwaysOffSampler_1.AlwaysOffSampler();
        case TracesSamplerValues.ParentBasedAlwaysOn:
            return new ParentBasedSampler_1.ParentBasedSampler({
                root: new AlwaysOnSampler_1.AlwaysOnSampler(),
            });
        case TracesSamplerValues.ParentBasedAlwaysOff:
            return new ParentBasedSampler_1.ParentBasedSampler({
                root: new AlwaysOffSampler_1.AlwaysOffSampler(),
            });
        case TracesSamplerValues.TraceIdRatio:
            return new TraceIdRatioBasedSampler_1.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
        case TracesSamplerValues.ParentBasedTraceIdRatio:
            return new ParentBasedSampler_1.ParentBasedSampler({
                root: new TraceIdRatioBasedSampler_1.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv()),
            });
        default:
            api_1.diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
            return new ParentBasedSampler_1.ParentBasedSampler({
                root: new AlwaysOnSampler_1.AlwaysOnSampler(),
            });
    }
}
exports.buildSamplerFromEnv = buildSamplerFromEnv;
function getSamplerProbabilityFromEnv() {
    const probability = (0, core_1.getNumberFromEnv)('OTEL_TRACES_SAMPLER_ARG');
    if (probability == null) {
        api_1.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        api_1.diag.error(`OTEL_TRACES_SAMPLER_ARG=${probability} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    return probability;
}
//# sourceMappingURL=config.js.map