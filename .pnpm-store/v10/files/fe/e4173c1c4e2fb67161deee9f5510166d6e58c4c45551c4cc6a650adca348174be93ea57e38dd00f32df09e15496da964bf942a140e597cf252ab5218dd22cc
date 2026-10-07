"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _utils = require("./utils");
/**
 * Tracks and knows how to get a parent span for a particular
 *  point in query resolver for a particular query and path
 */
class GraphQLSpanTracer {
  constructor(name, activityArgs) {
    this.parentActivity = _reporter.default.phantomActivity(name, activityArgs);
    this.activities = new Map();
  }
  getParentActivity() {
    return this.parentActivity;
  }
  start() {
    this.parentActivity.start();
  }
  end() {
    this.activities.forEach(activity => {
      activity.end();
    });
    this.parentActivity.end();
  }
  createResolverActivity(path, name) {
    let prev = path.prev;
    while (typeof ((_prev = prev) === null || _prev === void 0 ? void 0 : _prev.key) === `number`) {
      var _prev;
      prev = prev.prev;
    }
    const parentSpan = this.getActivity(prev).span;
    const activity = _reporter.default.phantomActivity(`GraphQL Resolver`, {
      parentSpan,
      tags: {
        field: name,
        path: (0, _utils.pathToArray)(path).join(`.`)
      }
    });
    this.setActivity(path, activity);
    return activity;
  }
  getActivity(gqlPath) {
    const path = (0, _utils.pathToArray)(gqlPath);
    let activity;
    if (path.length > 0) {
      activity = this.activities.get(path.join(`.`));
      if (activity) {
        return activity;
      }
    }
    return this.parentActivity;
  }
  setActivity(gqlPath, activity) {
    const path = (0, _utils.pathToArray)(gqlPath);
    this.activities.set(path.join(`.`), activity);
  }
}
exports.default = GraphQLSpanTracer;
//# sourceMappingURL=graphql-span-tracer.js.map