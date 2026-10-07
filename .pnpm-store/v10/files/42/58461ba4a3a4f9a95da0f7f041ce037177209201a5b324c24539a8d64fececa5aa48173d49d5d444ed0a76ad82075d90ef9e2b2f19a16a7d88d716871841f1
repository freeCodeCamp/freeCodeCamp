/// <reference types="node" />

import { Destroyable } from '@algolia/requester-common';
import * as http from 'http';
import * as https from 'https';
import { Requester } from '@algolia/requester-common';

export declare function createNodeHttpRequester({ agent: userGlobalAgent, httpAgent: userHttpAgent, httpsAgent: userHttpsAgent, requesterOptions, }?: NodeHttpRequesterOptions): Requester & Destroyable;

export declare type NodeHttpRequesterOptions = {
    agent?: https.Agent | http.Agent;
    httpAgent?: http.Agent;
    httpsAgent?: https.Agent;
    requesterOptions?: https.RequestOptions;
};

export { }
