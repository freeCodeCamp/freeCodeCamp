import React, { useEffect, useState } from 'react';
// Helper utility that retrieves the current version of the frontend code
import { getVersionObject } from '../../utils/version';
// Configuration file holding URLs, such as where our backend server is hosted
import envData from '../../../config/env.json';

// TypeScript blueprint outlining exactly how the final version data object must look
interface VersionData {
  client: {
    version: string;
  };
  api: {
    version: string;
    error?: string; // Optional field used only if the backend server fails to respond
  };
}

// Component that displays the version numbers of both the frontend (client) and backend (API)
const VersionEndpoint = () => {
  // Local state to store our version data. It starts as 'null' until we finish fetching.
  const [versionData, setVersionData] = useState<VersionData | null>(null);

  // This hook runs automatically just once right when the component loads on the screen
  useEffect(() => {
    const fetchVersions = async () => {
      // 1. Grab the client-side version straight from our local frontend utilities
      const clientVersion = getVersionObject();

      // 2. Set up fallback values for the API version in case the network request fails
      let apiVersion = { version: 'unknown', error: '' };
      
      try {
        // 3. Ping the backend server's version endpoint using the base URL from our config file
        const response = await fetch(`${envData.apiLocation}/status/version`);
        
        if (response.ok) {
          // If the network request works, unpack the JSON payload sent by the server
          apiVersion = (await response.json()) as {
            version: string;
            error: string;
          };
        } else {
          // If the server replies but returns an error status (like 404 or 500)
          apiVersion.error = `HTTP ${response.status}`;
        }
      } catch (error) {
        // If the server is down or there is a local internet issue, catch the crash here
        apiVersion.error =
          error instanceof Error ? error.message : 'Failed to fetch';
      }

      // 4. Update our state with both the frontend and backend versions we gathered
      setVersionData({
        client: clientVersion,
        api: apiVersion
      });
    };

    // Trigger the asynchronous function we defined above
    void fetchVersions();
  }, []); // Empty brackets mean this logic will not re-run on subsequent page updates

  // If we are still waiting for the network request to finish, render nothing on screen
  if (!versionData) {
    return null;
  }

  // Render the data as raw, neatly formatted JSON text inside standard HTML pre tags
  return <pre>{JSON.stringify(versionData, null, 2)}</pre>;
};

export default VersionEndpoint;
