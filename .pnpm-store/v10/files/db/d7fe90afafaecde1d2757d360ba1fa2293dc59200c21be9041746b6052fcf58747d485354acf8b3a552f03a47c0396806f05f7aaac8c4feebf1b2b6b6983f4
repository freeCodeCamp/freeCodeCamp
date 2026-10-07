import { IssueSeverity } from './IssueSeverity';
import { IssueLocation } from './IssueLocation';
interface Issue {
    origin: string;
    severity: IssueSeverity;
    code: string;
    message: string;
    file?: string;
    location?: IssueLocation;
}
declare function isIssue(value: unknown): value is Issue;
declare function deduplicateAndSortIssues(issues: Issue[]): Issue[];
export { Issue, isIssue, deduplicateAndSortIssues };
