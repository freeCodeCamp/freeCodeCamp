/**
 * Removes everything after the last "/", but leaves the slash.
 */
export default function stripFilename(path: string | undefined | null): string {
  if (!path) return '';
  const index = path.lastIndexOf('/');
  return path.slice(0, index + 1);
}
