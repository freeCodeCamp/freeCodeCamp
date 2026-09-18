import { useEffect, useState } from 'react';
import { zipSync, strToU8 } from 'fflate';

interface DownloadableChallengeFile {
  name: string;
  ext: string;
  contents: string;
}

export function useSolutionDownloadUrl(
  challengeFiles: DownloadableChallengeFile[] | null | undefined
): string | undefined {
  const [downloadUrl, setDownloadUrl] = useState<string>();

  useEffect(() => {
    if (!challengeFiles?.length) {
      setDownloadUrl(undefined);
      return;
    }

    const downloadUrl = URL.createObjectURL(
      createSolutionZipBlob(challengeFiles)
    );
    setDownloadUrl(downloadUrl);

    return () => URL.revokeObjectURL(downloadUrl);
  }, [challengeFiles]);

  return downloadUrl;
}

export function createSolutionZipBlob(
  challengeFiles: DownloadableChallengeFile[]
): Blob {
  const zipped = zipSync(buildZipEntries(challengeFiles));
  const buffer = new ArrayBuffer(zipped.byteLength);
  new Uint8Array(buffer).set(zipped);
  return new Blob([buffer], { type: 'application/zip' });
}

export function buildZipEntries(
  challengeFiles: DownloadableChallengeFile[]
): Record<string, Uint8Array> {
  const entries: Record<string, Uint8Array> = {};
  for (const file of challengeFiles) {
    entries[`${file.name}.${file.ext}`] = strToU8(file.contents);
  }
  return entries;
}
