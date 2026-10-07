// src/getDotPath/getDotPath.ts
function getDotPath(issue) {
  if (issue.path?.length) {
    let dotPath = "";
    for (const item of issue.path) {
      const key = typeof item === "object" ? item.key : item;
      if (typeof key === "string" || typeof key === "number") {
        if (dotPath) {
          dotPath += `.${key}`;
        } else {
          dotPath += key;
        }
      } else {
        return null;
      }
    }
    return dotPath;
  }
  return null;
}

// src/SchemaError/SchemaError.ts
var SchemaError = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "SchemaError";
    this.issues = issues;
  }
};
export {
  SchemaError,
  getDotPath
};
