import { FilesMatch } from './FilesMatch';
import { Issue } from '../issue';
interface Report {
    getDependencies(): Promise<FilesMatch>;
    getIssues(): Promise<Issue[]>;
    close(): Promise<void>;
}
export { Report };
