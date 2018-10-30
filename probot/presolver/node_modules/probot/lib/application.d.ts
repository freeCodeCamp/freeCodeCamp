import { WebhookEvent } from '@octokit/webhooks';
import express from 'express';
import { EventEmitter } from 'promise-events';
import { ApplicationFunction } from '.';
import { Cache } from './cache';
import { Context } from './context';
import { GitHubAPI } from './github';
import { LoggerWithTarget } from './wrap-logger';
export interface Options {
    app: () => string;
    cache: Cache;
    router?: express.Router;
    catchErrors?: boolean;
    githubToken?: string;
}
/**
 * The `app` parameter available to `ApplicationFunction`s
 *
 * @property {logger} log - A logger
 */
export declare class Application {
    events: EventEmitter;
    app: () => string;
    cache: Cache;
    router: express.Router;
    log: LoggerWithTarget;
    private githubToken?;
    constructor(options?: Options);
    /**
     * Loads an ApplicationFunction into the current Application
     * @param appFn - Probot application function to load
     */
    load(appFn: ApplicationFunction | ApplicationFunction[]): Application;
    receive(event: WebhookEvent): Promise<[void, void, void]>;
    /**
     * Get an {@link http://expressjs.com|express} router that can be used to
     * expose HTTP endpoints
     *
     * ```
     * module.exports = app => {
     *   // Get an express router to expose new HTTP endpoints
     *   const route = app.route('/my-app');
     *
     *   // Use any middleware
     *   route.use(require('express').static(__dirname + '/public'));
     *
     *   // Add a new route
     *   route.get('/hello-world', (req, res) => {
     *     res.end('Hello World');
     *   });
     * };
     * ```
     *
     * @param path - the prefix for the routes
     * @returns an [express.Router](http://expressjs.com/en/4x/api.html#router)
     */
    route(path?: string): express.Router;
    /**
     * Listen for [GitHub webhooks](https://developer.github.com/webhooks/),
     * which are fired for almost every significant action that users take on
     * GitHub.
     *
     * @param event - the name of the [GitHub webhook
     * event](https://developer.github.com/webhooks/#events). Most events also
     * include an "action". For example, the * [`issues`](
     * https://developer.github.com/v3/activity/events/types/#issuesevent)
     * event has actions of `assigned`, `unassigned`, `labeled`, `unlabeled`,
     * `opened`, `edited`, `milestoned`, `demilestoned`, `closed`, and `reopened`.
     * Often, your bot will only care about one type of action, so you can append
     * it to the event name with a `.`, like `issues.closed`.
     *
     * ```js
     * app.on('push', context => {
     *   // Code was just pushed.
     * });
     *
     * app.on('issues.opened', context => {
     *   // An issue was just opened.
     * });
     * ```
     *
     * @param callback - a function to call when the
     * webhook is received.
     */
    on(eventName: string | string[], callback: (context: Context) => Promise<void>): void;
    /**
     * Authenticate and get a GitHub client that can be used to make API calls.
     *
     * You'll probably want to use `context.github` instead.
     *
     * **Note**: `app.auth` is asynchronous, so it needs to be prefixed with a
     * [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
     * to wait for the magic to happen.
     *
     * ```js
     *  module.exports = (app) => {
     *    app.on('issues.opened', async context => {
     *      const github = await app.auth();
     *    });
     *  };
     * ```
     *
     * @param id - ID of the installation, which can be extracted from
     * `context.payload.installation.id`. If called without this parameter, the
     * client wil authenticate [as the app](https://developer.github.com/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/#authenticating-as-a-github-app)
     * instead of as a specific installation, which means it can only be used for
     * [app APIs](https://developer.github.com/v3/apps/).
     *
     * @returns An authenticated GitHub API client
     * @private
     */
    auth(id?: number, log?: LoggerWithTarget): Promise<GitHubAPI>;
    private authenticateEvent;
}
