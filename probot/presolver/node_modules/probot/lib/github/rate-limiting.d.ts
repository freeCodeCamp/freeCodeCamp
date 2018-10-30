import Bottleneck from 'bottleneck';
import { GitHubAPI } from './';
export declare function addRateLimiting(octokit: GitHubAPI, limiter: Bottleneck): void;
