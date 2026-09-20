import React, { useEffect, useState } from 'react';
import { getVersionObject } from '../../utils/version';
import envData from '../../../config/env.json';

interface VersionData {
  client: {
    version: string;
  };
  api: {
    version: string;
    error?: string;
  };
}

const VersionEndpoint = () => {
  const [versionData, setVersionData] = useState<VersionData | null>(null);

  useEffect(() => {
    const fetchVersions = async () => {
      const clientVersion = getVersionObject();

      let apiVersion = { version: 'unknown', error: '' };
      try {
        const response = await fetch(`${envData.apiLocation}/status/version`);
        if (response.ok) {
          apiVersion = (await response.json()) as {
            version: string;
            error: string;
          };
        } else {
          apiVersion.error = `HTTP ${response.status}`;
        }
      } catch (error) {
        apiVersion.error =
          error instanceof Error ? error.message : 'Failed to fetch';
      }

      setVersionData({
        client: clientVersion,
        api: apiVersion
      });
    };

    void fetchVersions();
  }, []);

  // Return plain JSON
  if (!versionData) {
    return null;
  }

  return <pre>{JSON.stringify(versionData, null, 2)}</pre>;
};

export default VersionEndpoint;
