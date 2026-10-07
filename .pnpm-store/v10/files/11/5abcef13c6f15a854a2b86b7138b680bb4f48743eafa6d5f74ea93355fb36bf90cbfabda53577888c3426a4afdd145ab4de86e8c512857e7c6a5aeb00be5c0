/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { diag } from '@opentelemetry/api';
import { getNumberFromEnv, getStringFromEnv } from '@opentelemetry/core';
import { AlwaysOffSampler } from './sampler/AlwaysOffSampler';
import { AlwaysOnSampler } from './sampler/AlwaysOnSampler';
import { ParentBasedSampler } from './sampler/ParentBasedSampler';
import { TraceIdRatioBasedSampler } from './sampler/TraceIdRatioBasedSampler';
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
export function loadDefaultConfig() {
    return {
        sampler: buildSamplerFromEnv(),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: getNumberFromEnv('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: getNumberFromEnv('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128,
        },
        spanLimits: {
            attributeValueLengthLimit: getNumberFromEnv('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: getNumberFromEnv('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
            linkCountLimit: getNumberFromEnv('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
            eventCountLimit: getNumberFromEnv('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
            attributePerEventCountLimit: getNumberFromEnv('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
            attributePerLinkCountLimit: getNumberFromEnv('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128,
        },
    };
}
/**
 * Based on environment, builds a sampler, complies with specification.
 */
export function buildSamplerFromEnv() {
    const sampler = getStringFromEnv('OTEL_TRACES_SAMPLER') ??
        TracesSamplerValues.ParentBasedAlwaysOn;
    switch (sampler) {
        case TracesSamplerValues.AlwaysOn:
            return new AlwaysOnSampler();
        case TracesSamplerValues.AlwaysOff:
            return new AlwaysOffSampler();
        case TracesSamplerValues.ParentBasedAlwaysOn:
            return new ParentBasedSampler({
                root: new AlwaysOnSampler(),
            });
        case TracesSamplerValues.ParentBasedAlwaysOff:
            return new ParentBasedSampler({
                root: new AlwaysOffSampler(),
            });
        case TracesSamplerValues.TraceIdRatio:
            return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
        case TracesSamplerValues.ParentBasedTraceIdRatio:
            return new ParentBasedSampler({
                root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv()),
            });
        default:
            diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
            return new ParentBasedSampler({
                root: new AlwaysOnSampler(),
            });
    }
}
function getSamplerProbabilityFromEnv() {
    const probability = getNumberFromEnv('OTEL_TRACES_SAMPLER_ARG');
    if (probability == null) {
        diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        diag.error(`OTEL_TRACES_SAMPLER_ARG=${probability} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    return probability;
}
//# sourceMappingURL=config.js.map