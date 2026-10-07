import { defineIntegration } from '../integration.js';
import { isError } from '../utils/is.js';
import { truncate } from '../utils/string.js';

const DEFAULT_LIMIT = 10;
const INTEGRATION_NAME = "ZodErrors";
function originalExceptionIsZodError(originalException) {
  return isError(originalException) && originalException.name === "ZodError" && Array.isArray(originalException.issues);
}
function flattenIssue(issue) {
  return {
    ...issue,
    path: "path" in issue && Array.isArray(issue.path) ? issue.path.join(".") : void 0,
    keys: "keys" in issue ? JSON.stringify(issue.keys) : void 0,
    unionErrors: "unionErrors" in issue ? JSON.stringify(issue.unionErrors) : void 0
  };
}
function flattenIssuePath(path) {
  return path.map((p) => {
    if (typeof p === "number") {
      return "<array>";
    } else {
      return p;
    }
  }).join(".");
}
function formatIssueMessage(zodError) {
  const errorKeyMap = /* @__PURE__ */ new Set();
  for (const iss of zodError.issues) {
    const issuePath = flattenIssuePath(iss.path);
    if (issuePath.length > 0) {
      errorKeyMap.add(issuePath);
    }
  }
  const errorKeys = Array.from(errorKeyMap);
  if (errorKeys.length === 0) {
    let rootExpectedType = "variable";
    if (zodError.issues.length > 0) {
      const iss = zodError.issues[0];
      if (iss !== void 0 && "expected" in iss && typeof iss.expected === "string") {
        rootExpectedType = iss.expected;
      }
    }
    return `Failed to validate ${rootExpectedType}`;
  }
  return `Failed to validate keys: ${truncate(errorKeys.join(", "), 100)}`;
}
function applyZodErrorsToEvent(limit, saveZodIssuesAsAttachment = false, event, hint) {
  if (!event.exception?.values || !hint.originalException || !originalExceptionIsZodError(hint.originalException) || hint.originalException.issues.length === 0) {
    return event;
  }
  try {
    const issuesToFlatten = saveZodIssuesAsAttachment ? hint.originalException.issues : hint.originalException.issues.slice(0, limit);
    const flattenedIssues = issuesToFlatten.map(flattenIssue);
    if (saveZodIssuesAsAttachment) {
      if (!Array.isArray(hint.attachments)) {
        hint.attachments = [];
      }
      hint.attachments.push({
        filename: "zod_issues.json",
        data: JSON.stringify({
          issues: flattenedIssues
        })
      });
    }
    return {
      ...event,
      exception: {
        ...event.exception,
        values: [
          {
            ...event.exception.values[0],
            value: formatIssueMessage(hint.originalException)
          },
          ...event.exception.values.slice(1)
        ]
      },
      extra: {
        ...event.extra,
        "zoderror.issues": flattenedIssues.slice(0, limit)
      }
    };
  } catch (e) {
    return {
      ...event,
      extra: {
        ...event.extra,
        "zoderrors sentry integration parse error": {
          message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
          error: e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : "unknown"
        }
      }
    };
  }
}
const _zodErrorsIntegration = ((options = {}) => {
  const limit = options.limit ?? DEFAULT_LIMIT;
  return {
    name: INTEGRATION_NAME,
    processEvent(originalEvent, hint) {
      const processedEvent = applyZodErrorsToEvent(limit, options.saveZodIssuesAsAttachment, originalEvent, hint);
      return processedEvent;
    }
  };
});
const zodErrorsIntegration = defineIntegration(_zodErrorsIntegration);

export { applyZodErrorsToEvent, flattenIssue, flattenIssuePath, formatIssueMessage, zodErrorsIntegration };
//# sourceMappingURL=zoderrors.js.map
