import { Issue } from './index';
import { IssuePredicate } from './IssuePredicate';
declare type IssueMatch = Partial<Pick<Issue, 'origin' | 'severity' | 'code' | 'file'>>;
declare function createIssuePredicateFromIssueMatch(context: string, match: IssueMatch): IssuePredicate;
export { IssueMatch, createIssuePredicateFromIssueMatch };
