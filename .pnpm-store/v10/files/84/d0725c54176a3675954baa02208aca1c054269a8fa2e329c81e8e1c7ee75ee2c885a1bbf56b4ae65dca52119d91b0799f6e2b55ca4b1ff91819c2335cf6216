import { Path } from "graphql/jsutils/Path";
import { IActivityArgs } from "gatsby-cli/src/reporter/reporter";
import { IPhantomReporter } from "gatsby-cli/src/reporter/reporter-phantom";
import { IGraphQLSpanTracer } from "../schema/type-definitions";
/**
 * Tracks and knows how to get a parent span for a particular
 *  point in query resolver for a particular query and path
 */
export default class GraphQLSpanTracer implements IGraphQLSpanTracer {
    parentActivity: IPhantomReporter;
    activities: Map<string, IPhantomReporter>;
    constructor(name: string, activityArgs: IActivityArgs);
    getParentActivity(): IPhantomReporter;
    start(): void;
    end(): void;
    createResolverActivity(path: Path, name: string): IPhantomReporter;
    getActivity(gqlPath: Path | undefined): IPhantomReporter;
    setActivity(gqlPath: Path, activity: IPhantomReporter): void;
}
