import {
  EvalContext,
  FeatureDefinition,
  FeatureResult,
  Experiment,
  FeatureResultSource,
  Result,
  Filter,
  VariationRange,
  VariationMeta,
  StickyExperimentKey,
  StickyAssignments,
  StickyAttributeKey,
  StickyAssignmentsDocument,
  FeatureApiResponse,
  Options,
  ClientOptions,
} from "./types/growthbook";
import { evalCondition } from "./mongrule";
import { ConditionInterface } from "./types/mongrule";
import {
  chooseVariation,
  decrypt,
  getBucketRanges,
  getQueryStringOverride,
  getUrlRegExp,
  hash,
  inNamespace,
  inRange,
  isIncluded,
  isURLTargeted,
  toString,
} from "./util";
import { StickyBucketService } from "./sticky-bucket-service";

export const EVENT_FEATURE_EVALUATED = "Feature Evaluated";
export const EVENT_EXPERIMENT_VIEWED = "Experiment Viewed";

function getForcedFeatureValues(ctx: EvalContext) {
  // Merge user and global values
  const ret: typeof ctx.global.forcedFeatureValues = new Map();
  if (ctx.global.forcedFeatureValues) {
    ctx.global.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  if (ctx.user.forcedFeatureValues) {
    ctx.user.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  return ret;
}

function getForcedVariations(ctx: EvalContext) {
  // Merge user and global values
  if (ctx.global.forcedVariations && ctx.user.forcedVariations) {
    return { ...ctx.global.forcedVariations, ...ctx.user.forcedVariations };
  } else if (ctx.global.forcedVariations) {
    return ctx.global.forcedVariations;
  } else if (ctx.user.forcedVariations) {
    return ctx.user.forcedVariations;
  } else {
    return {};
  }
}

async function safeCall(fn: () => void | Promise<void>) {
  try {
    await fn();
  } catch (e) {
    // Do nothing
  }
}

function onExperimentViewed(
  ctx: EvalContext,
  experiment: Experiment<unknown>,
  result: Result<unknown>,
): Promise<void>[] {
  // Make sure a tracking callback is only fired once per unique experiment
  if (ctx.user.trackedExperiments) {
    const k = getExperimentDedupeKey(experiment, result);
    if (ctx.user.trackedExperiments.has(k)) {
      return [];
    }
    ctx.user.trackedExperiments.add(k);
  }

  if (ctx.user.enableDevMode && ctx.user.devLogs) {
    ctx.user.devLogs.push({
      experiment,
      result,
      timestamp: Date.now().toString(),
      logType: "experiment",
    });
  }

  const calls: Promise<void>[] = [];

  if (ctx.global.trackingCallback) {
    const cb = ctx.global.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result, ctx.user)));
  }
  if (ctx.user.trackingCallback) {
    const cb = ctx.user.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result)));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    calls.push(
      safeCall(() =>
        cb(
          EVENT_EXPERIMENT_VIEWED,
          {
            experimentId: experiment.key,
            variationId: result.key,
            hashAttribute: result.hashAttribute,
            hashValue: result.hashValue,
          },
          ctx.user,
        ),
      ),
    );
  }
  return calls;
}

function onFeatureUsage(
  ctx: EvalContext,
  key: string,
  ret: FeatureResult<unknown>,
): void {
  // Only track a feature once, unless the assigned value changed
  if (ctx.user.trackedFeatureUsage) {
    const stringifiedValue = JSON.stringify(ret.value);
    if (ctx.user.trackedFeatureUsage[key] === stringifiedValue) return;
    ctx.user.trackedFeatureUsage[key] = stringifiedValue;

    if (ctx.user.enableDevMode && ctx.user.devLogs) {
      ctx.user.devLogs.push({
        featureKey: key,
        result: ret,
        timestamp: Date.now().toString(),
        logType: "feature",
      });
    }
  }

  if (ctx.global.onFeatureUsage) {
    const cb = ctx.global.onFeatureUsage;
    safeCall(() => cb(key, ret, ctx.user));
  }
  if (ctx.user.onFeatureUsage) {
    const cb = ctx.user.onFeatureUsage;
    safeCall(() => cb(key, ret));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    safeCall(() =>
      cb(
        EVENT_FEATURE_EVALUATED,
        {
          feature: key,
          source: ret.source,
          value: ret.value,
          ruleId: ret.source === "defaultValue" ? "$default" : ret.ruleId || "",
          variationId: ret.experimentResult ? ret.experimentResult.key : "",
        },
        ctx.user,
      ),
    );
  }
}

export function evalFeature<V = unknown>(
  id: string,
  ctx: EvalContext,
): FeatureResult<V | null> {
  if (ctx.stack.evaluatedFeatures.has(id)) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log(
        `evalFeature: circular dependency detected: ${ctx.stack.id} -> ${id}`,
        {
          from: ctx.stack.id,
          to: id,
        },
      );
    return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
  }
  ctx.stack.evaluatedFeatures.add(id);
  ctx.stack.id = id;

  // Global override
  const forcedValues = getForcedFeatureValues(ctx);
  if (forcedValues.has(id)) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Global override", {
        id,
        value: forcedValues.get(id),
      });
    return getFeatureResult(ctx, id, forcedValues.get(id), "override");
  }

  // Unknown feature id
  if (!ctx.global.features || !ctx.global.features[id]) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Unknown feature", { id });
    return getFeatureResult(ctx, id, null, "unknownFeature");
  }

  // Get the feature
  const feature: FeatureDefinition<V> = ctx.global.features[id];

  // Loop through the rules
  if (feature.rules) {
    const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
    rules: for (const rule of feature.rules) {
      // If there are prerequisite flag(s), evaluate them
      if (rule.parentConditions) {
        for (const parentCondition of rule.parentConditions) {
          ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
          const parentResult = evalFeature(parentCondition.id, ctx);
          // break out for cyclic prerequisites
          if (parentResult.source === "cyclicPrerequisite") {
            return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
          }

          const evalObj = { value: parentResult.value };
          const evaled = evalCondition(
            evalObj,
            parentCondition.condition || {},
          );
          if (!evaled) {
            // blocking prerequisite eval failed: feature evaluation fails
            if (parentCondition.gate) {
              process.env.NODE_ENV !== "production" &&
                ctx.global.log("Feature blocked by prerequisite", { id, rule });
              return getFeatureResult(ctx, id, null, "prerequisite");
            }
            // non-blocking prerequisite eval failed: break out of parentConditions loop, jump to the next rule
            process.env.NODE_ENV !== "production" &&
              ctx.global.log(
                "Skip rule because prerequisite evaluation fails",
                {
                  id,
                  rule,
                },
              );
            continue rules;
          }
        }
      }

      // If there are filters for who is included (e.g. namespaces)
      if (rule.filters && isFilteredOut(rule.filters, ctx)) {
        process.env.NODE_ENV !== "production" &&
          ctx.global.log("Skip rule because of filters", {
            id,
            rule,
          });
        continue;
      }

      // Feature value is being forced
      if ("force" in rule) {
        // If it's a conditional rule, skip if the condition doesn't pass
        if (rule.condition && !conditionPasses(rule.condition, ctx)) {
          process.env.NODE_ENV !== "production" &&
            ctx.global.log("Skip rule because of condition ff", {
              id,
              rule,
            });
          continue;
        }

        // If this is a percentage rollout, skip if not included
        if (
          !isIncludedInRollout(
            ctx,
            rule.seed || id,
            rule.hashAttribute,
            ctx.user.saveStickyBucketAssignmentDoc &&
              !rule.disableStickyBucketing
              ? rule.fallbackAttribute
              : undefined,
            rule.range,
            rule.coverage,
            rule.hashVersion,
          )
        ) {
          process.env.NODE_ENV !== "production" &&
            ctx.global.log("Skip rule because user not included in rollout", {
              id,
              rule,
            });
          continue;
        }

        process.env.NODE_ENV !== "production" &&
          ctx.global.log("Force value from rule", {
            id,
            rule,
          });

        // If this was a remotely evaluated experiment, fire the tracking callbacks
        if (rule.tracks) {
          rule.tracks.forEach((t) => {
            const calls = onExperimentViewed(ctx, t.experiment, t.result);
            if (!calls.length && ctx.global.saveDeferredTrack) {
              ctx.global.saveDeferredTrack({
                experiment: t.experiment,
                result: t.result,
              });
            }
          });
        }

        return getFeatureResult(ctx, id, rule.force as V, "force", rule.id);
      }
      if (!rule.variations) {
        process.env.NODE_ENV !== "production" &&
          ctx.global.log("Skip invalid rule", {
            id,
            rule,
          });

        continue;
      }

      // For experiment rules, run an experiment
      const exp: Experiment<V> = {
        variations: rule.variations as [V, V, ...V[]],
        key: rule.key || id,
      };
      if ("coverage" in rule) exp.coverage = rule.coverage;
      if (rule.weights) exp.weights = rule.weights;
      if (rule.hashAttribute) exp.hashAttribute = rule.hashAttribute;
      if (rule.fallbackAttribute)
        exp.fallbackAttribute = rule.fallbackAttribute;
      if (rule.disableStickyBucketing)
        exp.disableStickyBucketing = rule.disableStickyBucketing;
      if (rule.bucketVersion !== undefined)
        exp.bucketVersion = rule.bucketVersion;
      if (rule.minBucketVersion !== undefined)
        exp.minBucketVersion = rule.minBucketVersion;
      if (rule.namespace) exp.namespace = rule.namespace;
      if (rule.meta) exp.meta = rule.meta;
      if (rule.ranges) exp.ranges = rule.ranges;
      if (rule.name) exp.name = rule.name;
      if (rule.phase) exp.phase = rule.phase;
      if (rule.seed) exp.seed = rule.seed;
      if (rule.hashVersion) exp.hashVersion = rule.hashVersion;
      if (rule.filters) exp.filters = rule.filters;
      if (rule.condition) exp.condition = rule.condition;

      // Only return a value if the user is part of the experiment
      const { result } = runExperiment(exp, id, ctx);
      ctx.global.onExperimentEval && ctx.global.onExperimentEval(exp, result);
      if (result.inExperiment && !result.passthrough) {
        return getFeatureResult(
          ctx,
          id,
          result.value,
          "experiment",
          rule.id,
          exp,
          result,
        );
      }
    }
  }

  process.env.NODE_ENV !== "production" &&
    ctx.global.log("Use default value", {
      id,
      value: feature.defaultValue,
    });

  // Fall back to using the default value
  return getFeatureResult(
    ctx,
    id,
    feature.defaultValue === undefined ? null : feature.defaultValue,
    "defaultValue",
  );
}

export function runExperiment<T>(
  experiment: Experiment<T>,
  featureId: string | null,
  ctx: EvalContext,
): {
  result: Result<T>;
  trackingCall?: Promise<void>;
} {
  const key = experiment.key;
  const numVariations = experiment.variations.length;

  // 1. If experiment has less than 2 variations, return immediately
  if (numVariations < 2) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Invalid experiment", { id: key });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 2. If the context is disabled, return immediately
  if (ctx.global.enabled === false || ctx.user.enabled === false) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Context disabled", { id: key });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 2.5. Merge in experiment overrides from the context
  experiment = mergeOverrides(experiment, ctx);

  // 2.6 New, more powerful URL targeting
  if (
    experiment.urlPatterns &&
    !isURLTargeted(ctx.user.url || "", experiment.urlPatterns)
  ) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because of url targeting", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 3. If a variation is forced from a querystring, return the forced variation
  const qsOverride = getQueryStringOverride(
    key,
    ctx.user.url || "",
    numVariations,
  );
  if (qsOverride !== null) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Force via querystring", {
        id: key,
        variation: qsOverride,
      });
    return {
      result: getExperimentResult(
        ctx,
        experiment,
        qsOverride,
        false,
        featureId,
      ),
    };
  }

  // 4. If a variation is forced in the context, return the forced variation
  const forcedVariations = getForcedVariations(ctx);
  if (key in forcedVariations) {
    const variation = forcedVariations[key];
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Force via dev tools", {
        id: key,
        variation,
      });
    return {
      result: getExperimentResult(ctx, experiment, variation, false, featureId),
    };
  }

  // 5. Exclude if a draft experiment or not active
  if (experiment.status === "draft" || experiment.active === false) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because inactive", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 6. Get the hash attribute and return if empty
  const { hashAttribute, hashValue } = getHashAttribute(
    ctx,
    experiment.hashAttribute,
    ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing
      ? experiment.fallbackAttribute
      : undefined,
  );
  if (!hashValue) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because missing hashAttribute", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  let assigned = -1;

  let foundStickyBucket = false;
  let stickyBucketVersionIsBlocked = false;
  if (
    ctx.user.saveStickyBucketAssignmentDoc &&
    !experiment.disableStickyBucketing
  ) {
    const { variation, versionIsBlocked } = getStickyBucketVariation({
      ctx,
      expKey: experiment.key,
      expBucketVersion: experiment.bucketVersion,
      expHashAttribute: experiment.hashAttribute,
      expFallbackAttribute: experiment.fallbackAttribute,
      expMinBucketVersion: experiment.minBucketVersion,
      expMeta: experiment.meta,
    });
    foundStickyBucket = variation >= 0;
    assigned = variation;
    stickyBucketVersionIsBlocked = !!versionIsBlocked;
  }

  // Some checks are not needed if we already have a sticky bucket
  if (!foundStickyBucket) {
    // 7. Exclude if user is filtered out (used to be called "namespace")
    if (experiment.filters) {
      if (isFilteredOut(experiment.filters, ctx)) {
        process.env.NODE_ENV !== "production" &&
          ctx.global.log("Skip because of filters", {
            id: key,
          });
        return {
          result: getExperimentResult(ctx, experiment, -1, false, featureId),
        };
      }
    } else if (
      experiment.namespace &&
      !inNamespace(hashValue, experiment.namespace)
    ) {
      process.env.NODE_ENV !== "production" &&
        ctx.global.log("Skip because of namespace", {
          id: key,
        });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId),
      };
    }

    // 7.5. Exclude if experiment.include returns false or throws
    if (experiment.include && !isIncluded(experiment.include)) {
      process.env.NODE_ENV !== "production" &&
        ctx.global.log("Skip because of include function", {
          id: key,
        });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId),
      };
    }

    // 8. Exclude if condition is false
    if (experiment.condition && !conditionPasses(experiment.condition, ctx)) {
      process.env.NODE_ENV !== "production" &&
        ctx.global.log("Skip because of condition exp", {
          id: key,
        });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId),
      };
    }

    // 8.05. Exclude if prerequisites are not met
    if (experiment.parentConditions) {
      const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
      for (const parentCondition of experiment.parentConditions) {
        ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
        const parentResult = evalFeature(parentCondition.id, ctx);
        // break out for cyclic prerequisites
        if (parentResult.source === "cyclicPrerequisite") {
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId),
          };
        }

        const evalObj = { value: parentResult.value };
        if (!evalCondition(evalObj, parentCondition.condition || {})) {
          process.env.NODE_ENV !== "production" &&
            ctx.global.log("Skip because prerequisite evaluation fails", {
              id: key,
            });
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId),
          };
        }
      }
    }

    // 8.1. Exclude if user is not in a required group
    if (
      experiment.groups &&
      !hasGroupOverlap(experiment.groups as string[], ctx)
    ) {
      process.env.NODE_ENV !== "production" &&
        ctx.global.log("Skip because of groups", {
          id: key,
        });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId),
      };
    }
  }

  // 8.2. Old style URL targeting
  if (experiment.url && !urlIsValid(experiment.url as RegExp, ctx)) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because of url", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 9. Get the variation from the sticky bucket or get bucket ranges and choose variation
  const n = hash(
    experiment.seed || key,
    hashValue,
    experiment.hashVersion || 1,
  );
  if (n === null) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because of invalid hash version", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  if (!foundStickyBucket) {
    const ranges =
      experiment.ranges ||
      getBucketRanges(
        numVariations,
        experiment.coverage === undefined ? 1 : experiment.coverage,
        experiment.weights,
      );
    assigned = chooseVariation(n, ranges);
  }

  // 9.5 Unenroll if any prior sticky buckets are blocked by version
  if (stickyBucketVersionIsBlocked) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because sticky bucket version is blocked", {
        id: key,
      });
    return {
      result: getExperimentResult(
        ctx,
        experiment,
        -1,
        false,
        featureId,
        undefined,
        true,
      ),
    };
  }

  // 10. Return if not in experiment
  if (assigned < 0) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because of coverage", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 11. Experiment has a forced variation
  if ("force" in experiment) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Force variation", {
        id: key,
        variation: experiment.force,
      });
    return {
      result: getExperimentResult(
        ctx,
        experiment,
        experiment.force === undefined ? -1 : experiment.force,
        false,
        featureId,
      ),
    };
  }

  // 12. Exclude if in QA mode
  if (ctx.global.qaMode || ctx.user.qaMode) {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because QA mode", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 12.5. Exclude if experiment is stopped
  if (experiment.status === "stopped") {
    process.env.NODE_ENV !== "production" &&
      ctx.global.log("Skip because stopped", {
        id: key,
      });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId),
    };
  }

  // 13. Build the result object
  const result = getExperimentResult(
    ctx,
    experiment,
    assigned,
    true,
    featureId,
    n,
    foundStickyBucket,
  );

  // 13.5. Persist sticky bucket
  if (
    ctx.user.saveStickyBucketAssignmentDoc &&
    !experiment.disableStickyBucketing
  ) {
    const {
      changed,
      key: attrKey,
      doc,
    } = generateStickyBucketAssignmentDoc(
      ctx,
      hashAttribute,
      toString(hashValue),
      {
        [getStickyBucketExperimentKey(
          experiment.key,
          experiment.bucketVersion,
        )]: result.key,
      },
    );
    if (changed) {
      // update local docs
      ctx.user.stickyBucketAssignmentDocs =
        ctx.user.stickyBucketAssignmentDocs || {};
      ctx.user.stickyBucketAssignmentDocs[attrKey] = doc;
      // save doc
      ctx.user.saveStickyBucketAssignmentDoc(doc);
    }
  }

  // 14. Fire the tracking callback(s)
  // Store the promise in case we're awaiting it (ex: browser url redirects)
  const trackingCalls = onExperimentViewed(ctx, experiment, result);
  if (trackingCalls.length === 0 && ctx.global.saveDeferredTrack) {
    ctx.global.saveDeferredTrack({
      experiment,
      result,
    });
  }
  const trackingCall = !trackingCalls.length
    ? undefined
    : trackingCalls.length === 1
      ? trackingCalls[0]
      : Promise.all(trackingCalls).then(() => {});

  // 14.1 Keep track of completed changeIds
  "changeId" in experiment &&
    experiment.changeId &&
    ctx.global.recordChangeId &&
    ctx.global.recordChangeId(experiment.changeId as string);

  // 15. Return the result
  process.env.NODE_ENV !== "production" &&
    ctx.global.log("In experiment", {
      id: key,
      variation: result.variationId,
    });
  return { result, trackingCall };
}

function getFeatureResult<T>(
  ctx: EvalContext,
  key: string,
  value: T,
  source: FeatureResultSource,
  ruleId?: string,
  experiment?: Experiment<T>,
  result?: Result<T>,
): FeatureResult<T> {
  const ret: FeatureResult = {
    value,
    on: !!value,
    off: !value,
    source,
    ruleId: ruleId || "",
  };
  if (experiment) ret.experiment = experiment;
  if (result) ret.experimentResult = result;

  // Track the usage of this feature in real-time
  if (source !== "override") {
    onFeatureUsage(ctx, key, ret);
  }

  return ret;
}

function getAttributes(ctx: EvalContext) {
  return {
    ...ctx.user.attributes,
    ...ctx.user.attributeOverrides,
  };
}

function conditionPasses(
  condition: ConditionInterface,
  ctx: EvalContext,
): boolean {
  return evalCondition(
    getAttributes(ctx),
    condition,
    ctx.global.savedGroups || {},
  );
}

function isFilteredOut(filters: Filter[], ctx: EvalContext): boolean {
  return filters.some((filter) => {
    const { hashValue } = getHashAttribute(ctx, filter.attribute);
    if (!hashValue) return true;
    const n = hash(filter.seed, hashValue, filter.hashVersion || 2);
    if (n === null) return true;
    return !filter.ranges.some((r) => inRange(n, r));
  });
}

function isIncludedInRollout(
  ctx: EvalContext,
  seed: string,
  hashAttribute: string | undefined,
  fallbackAttribute: string | undefined,
  range: VariationRange | undefined,
  coverage: number | undefined,
  hashVersion: number | undefined,
): boolean {
  if (!range && coverage === undefined) return true;

  if (!range && coverage === 0) return false;

  const { hashValue } = getHashAttribute(ctx, hashAttribute, fallbackAttribute);
  if (!hashValue) {
    return false;
  }

  const n = hash(seed, hashValue, hashVersion || 1);
  if (n === null) return false;

  return range
    ? inRange(n, range)
    : coverage !== undefined
      ? n <= coverage
      : true;
}

export function getExperimentResult<T>(
  ctx: EvalContext,
  experiment: Experiment<T>,
  variationIndex: number,
  hashUsed: boolean,
  featureId: string | null,
  bucket?: number,
  stickyBucketUsed?: boolean,
): Result<T> {
  let inExperiment = true;
  // If assigned variation is not valid, use the baseline and mark the user as not in the experiment
  if (variationIndex < 0 || variationIndex >= experiment.variations.length) {
    variationIndex = 0;
    inExperiment = false;
  }

  const { hashAttribute, hashValue } = getHashAttribute(
    ctx,
    experiment.hashAttribute,
    ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing
      ? experiment.fallbackAttribute
      : undefined,
  );

  const meta: Partial<VariationMeta> = experiment.meta
    ? experiment.meta[variationIndex]
    : {};

  const res: Result<T> = {
    key: meta.key || "" + variationIndex,
    featureId,
    inExperiment,
    hashUsed,
    variationId: variationIndex,
    value: experiment.variations[variationIndex],
    hashAttribute,
    hashValue,
    stickyBucketUsed: !!stickyBucketUsed,
  };

  if (meta.name) res.name = meta.name;
  if (bucket !== undefined) res.bucket = bucket;
  if (meta.passthrough) res.passthrough = meta.passthrough;

  return res;
}

function mergeOverrides<T>(
  experiment: Experiment<T>,
  ctx: EvalContext,
): Experiment<T> {
  const key = experiment.key;
  const o = ctx.global.overrides;
  if (o && o[key]) {
    experiment = Object.assign({}, experiment, o[key]);
    if (typeof experiment.url === "string") {
      experiment.url = getUrlRegExp(
        // eslint-disable-next-line
        experiment.url as any,
      );
    }
  }

  return experiment;
}

export function getHashAttribute(
  ctx: EvalContext,
  attr?: string,
  fallback?: string,
) {
  let hashAttribute = attr || "id";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hashValue: any = "";

  const attributes = getAttributes(ctx);

  if (attributes[hashAttribute]) {
    hashValue = attributes[hashAttribute];
  }

  // if no match, try fallback
  if (!hashValue && fallback) {
    if (attributes[fallback]) {
      hashValue = attributes[fallback];
    }
    if (hashValue) {
      hashAttribute = fallback;
    }
  }

  return { hashAttribute, hashValue };
}

function urlIsValid(urlRegex: RegExp, ctx: EvalContext): boolean {
  const url = ctx.user.url;
  if (!url) return false;

  const pathOnly = url.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");

  if (urlRegex.test(url)) return true;
  if (urlRegex.test(pathOnly)) return true;
  return false;
}

function hasGroupOverlap(expGroups: string[], ctx: EvalContext): boolean {
  const groups = ctx.global.groups || {};
  for (let i = 0; i < expGroups.length; i++) {
    if (groups[expGroups[i]]) return true;
  }
  return false;
}

function getStickyBucketVariation({
  ctx,
  expKey,
  expBucketVersion,
  expHashAttribute,
  expFallbackAttribute,
  expMinBucketVersion,
  expMeta,
}: {
  ctx: EvalContext;
  expKey: string;
  expBucketVersion?: number;
  expHashAttribute?: string;
  expFallbackAttribute?: string;
  expMinBucketVersion?: number;
  expMeta?: VariationMeta[];
}): {
  variation: number;
  versionIsBlocked?: boolean;
} {
  expBucketVersion = expBucketVersion || 0;
  expMinBucketVersion = expMinBucketVersion || 0;
  expHashAttribute = expHashAttribute || "id";
  expMeta = expMeta || [];
  const id = getStickyBucketExperimentKey(expKey, expBucketVersion);
  const assignments = getStickyBucketAssignments(
    ctx,
    expHashAttribute,
    expFallbackAttribute,
  );

  // users with any blocked bucket version (0 to minExperimentBucketVersion - 1) are excluded from the test
  if (expMinBucketVersion > 0) {
    for (let i = 0; i < expMinBucketVersion; i++) {
      const blockedKey = getStickyBucketExperimentKey(expKey, i);
      if (assignments[blockedKey] !== undefined) {
        return {
          variation: -1,
          versionIsBlocked: true,
        };
      }
    }
  }
  const variationKey = assignments[id];
  if (variationKey === undefined)
    // no assignment found
    return { variation: -1 };
  const variation = expMeta.findIndex((m) => m.key === variationKey);
  if (variation < 0)
    // invalid assignment, treat as "no assignment found"
    return { variation: -1 };

  return { variation };
}

function getStickyBucketExperimentKey(
  experimentKey: string,
  experimentBucketVersion?: number,
): StickyExperimentKey {
  experimentBucketVersion = experimentBucketVersion || 0;
  return `${experimentKey}__${experimentBucketVersion}`;
}

export function getStickyBucketAttributeKey(
  attributeName: string,
  attributeValue: string,
): StickyAttributeKey {
  return `${attributeName}||${attributeValue}`;
}

function getStickyBucketAssignments(
  ctx: EvalContext,
  expHashAttribute: string,
  expFallbackAttribute?: string,
): StickyAssignments {
  if (!ctx.user.stickyBucketAssignmentDocs) return {};
  const { hashAttribute, hashValue } = getHashAttribute(ctx, expHashAttribute);
  const hashKey = getStickyBucketAttributeKey(
    hashAttribute,
    toString(hashValue),
  );

  const { hashAttribute: fallbackAttribute, hashValue: fallbackValue } =
    getHashAttribute(ctx, expFallbackAttribute);
  const fallbackKey = fallbackValue
    ? getStickyBucketAttributeKey(fallbackAttribute, toString(fallbackValue))
    : null;

  const assignments: StickyAssignments = {};
  if (fallbackKey && ctx.user.stickyBucketAssignmentDocs[fallbackKey]) {
    Object.assign(
      assignments,
      ctx.user.stickyBucketAssignmentDocs[fallbackKey].assignments || {},
    );
  }
  if (ctx.user.stickyBucketAssignmentDocs[hashKey]) {
    Object.assign(
      assignments,
      ctx.user.stickyBucketAssignmentDocs[hashKey].assignments || {},
    );
  }
  return assignments;
}

function generateStickyBucketAssignmentDoc(
  ctx: EvalContext,
  attributeName: string,
  attributeValue: string,
  assignments: StickyAssignments,
): {
  key: StickyAttributeKey;
  doc: StickyAssignmentsDocument;
  changed: boolean;
} {
  const key = getStickyBucketAttributeKey(attributeName, attributeValue);
  const existingAssignments =
    ctx.user.stickyBucketAssignmentDocs &&
    ctx.user.stickyBucketAssignmentDocs[key]
      ? ctx.user.stickyBucketAssignmentDocs[key].assignments || {}
      : {};
  const newAssignments = { ...existingAssignments, ...assignments };
  const changed =
    JSON.stringify(existingAssignments) !== JSON.stringify(newAssignments);

  return {
    key,
    doc: {
      attributeName,
      attributeValue,
      assignments: newAssignments,
    },
    changed,
  };
}

function deriveStickyBucketIdentifierAttributes(
  ctx: EvalContext,
  data?: FeatureApiResponse,
) {
  const attributes = new Set<string>();
  const features =
    data && data.features ? data.features : ctx.global.features || {};
  const experiments =
    data && data.experiments ? data.experiments : ctx.global.experiments || [];
  Object.keys(features).forEach((id) => {
    const feature = features[id];
    if (feature.rules) {
      for (const rule of feature.rules) {
        if (rule.variations) {
          attributes.add(rule.hashAttribute || "id");
          if (rule.fallbackAttribute) {
            attributes.add(rule.fallbackAttribute);
          }
        }
      }
    }
  });
  experiments.map((experiment) => {
    attributes.add(experiment.hashAttribute || "id");
    if (experiment.fallbackAttribute) {
      attributes.add(experiment.fallbackAttribute);
    }
  });
  return Array.from(attributes);
}

export async function getAllStickyBucketAssignmentDocs(
  ctx: EvalContext,
  stickyBucketService: StickyBucketService,
  data?: FeatureApiResponse,
) {
  const attributes = getStickyBucketAttributes(ctx, data);
  return stickyBucketService.getAllAssignments(attributes);
}

export function getStickyBucketAttributes(
  ctx: EvalContext,
  data?: FeatureApiResponse,
): Record<string, string> {
  const attributes: Record<string, string> = {};
  const stickyBucketIdentifierAttributes =
    deriveStickyBucketIdentifierAttributes(ctx, data);
  stickyBucketIdentifierAttributes.forEach((attr) => {
    const { hashValue } = getHashAttribute(ctx, attr);
    attributes[attr] = toString(hashValue);
  });
  return attributes;
}

export async function decryptPayload(
  data: FeatureApiResponse,
  decryptionKey: string | undefined,
  subtle?: SubtleCrypto,
): Promise<FeatureApiResponse> {
  data = { ...data };
  if (data.encryptedFeatures) {
    try {
      data.features = JSON.parse(
        await decrypt(data.encryptedFeatures, decryptionKey, subtle),
      );
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedFeatures;
  }
  if (data.encryptedExperiments) {
    try {
      data.experiments = JSON.parse(
        await decrypt(data.encryptedExperiments, decryptionKey, subtle),
      );
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedExperiments;
  }
  if (data.encryptedSavedGroups) {
    try {
      data.savedGroups = JSON.parse(
        await decrypt(data.encryptedSavedGroups, decryptionKey, subtle),
      );
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedSavedGroups;
  }
  return data;
}

export function getApiHosts(options: Options | ClientOptions): {
  apiHost: string;
  streamingHost: string;
  apiRequestHeaders?: Record<string, string>;
  streamingHostRequestHeaders?: Record<string, string>;
} {
  const defaultHost = options.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: defaultHost.replace(/\/*$/, ""),
    streamingHost: (options.streamingHost || defaultHost).replace(/\/*$/, ""),
    apiRequestHeaders: options.apiHostRequestHeaders,
    streamingHostRequestHeaders: options.streamingHostRequestHeaders,
  };
}

export function getExperimentDedupeKey(
  experiment: Experiment<unknown>,
  result: Result<unknown>,
) {
  return (
    result.hashAttribute +
    result.hashValue +
    experiment.key +
    result.variationId
  );
}
