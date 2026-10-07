import { Tap } from 'tapable';
import { FilesMatch, Report } from './reporter';
import { Issue } from './issue';
interface ForkTsCheckerWebpackPluginState {
    issuesReportPromise: Promise<Report | undefined>;
    dependenciesReportPromise: Promise<Report | undefined>;
    issuesPromise: Promise<Issue[] | undefined>;
    dependenciesPromise: Promise<FilesMatch | undefined>;
    lastDependencies: FilesMatch | undefined;
    watching: boolean;
    initialized: boolean;
    webpackDevServerDoneTap: Tap | undefined;
}
declare function createForkTsCheckerWebpackPluginState(): ForkTsCheckerWebpackPluginState;
export { ForkTsCheckerWebpackPluginState, createForkTsCheckerWebpackPluginState };
