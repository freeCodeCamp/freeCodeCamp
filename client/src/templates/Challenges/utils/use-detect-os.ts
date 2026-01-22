import { useEffect, useState } from 'react';

type UserOS = 'MAC' | 'WIN' | 'LINUX' | 'OTHER' | 'LOADING';
type Architecture = 'x86' | 'x86_64' | 'arm' | 'arm64' | 'Unknown' | 'LOADING';

export type UserOSState = {
  os: UserOS;
  architecture: string;
};

// There are other hints, such as "model", that we're not using, so it's not
// exhaustive. This covers our use cases.
type HighEntropyValues = {
  architecture: 'x86' | 'arm' | '';
  bitness: '32' | '64' | '';
};

interface NavigatorUAData {
  getHighEntropyValues(hints: string[]): Promise<HighEntropyValues>;
}

export const userAgentDataToArchitecture = ({
  architecture,
  bitness
}: HighEntropyValues) => {
  if (architecture === 'arm') {
    return bitness === '64' ? 'arm64' : 'arm';
  } else {
    return bitness === '64' ? 'x86_64' : 'x86';
  }
};

const hasUserAgentData = (
  nav: globalThis.Navigator
): nav is globalThis.Navigator & { userAgentData: NavigatorUAData } => {
  return 'userAgentData' in nav && nav.userAgentData !== undefined;
};

const getArchitecture = async (): Promise<Architecture> => {
  if (hasUserAgentData(navigator)) {
    try {
      const uAData = await navigator.userAgentData.getHighEntropyValues([
        'architecture',
        'bitness'
      ]);

      return userAgentDataToArchitecture(uAData);
    } catch (error) {
      console.error(
        'Error fetching architecture via User-Agent Client Hints:',
        error
      );
    }
  }

  const userAgent = navigator.userAgent;

  if (/x86_64|Win64|WOW64|amd64/.test(userAgent)) {
    return 'x86_64';
  } else if (/i686|x86|Win32/.test(userAgent)) {
    return 'x86';
  } else if (/arm|aarch64/.test(userAgent)) {
    return /aarch64/.test(userAgent) ? 'arm64' : 'arm';
  }

  return 'Unknown';
};

const detectOsInUserAgent = (userAgent: string | undefined): UserOS => {
  const osMatch = userAgent?.match(/(Win|Mac|Linux)/);
  return osMatch ? (osMatch[1].toUpperCase() as UserOS) : 'OTHER';
};

const detectOS = (): UserOS => detectOsInUserAgent(navigator?.userAgent);

const useDetectOS = () => {
  const [userOS, setUserOS] = useState<UserOSState>({
    os: 'LOADING',
    architecture: 'LOADING'
  });

  useEffect(() => {
    Promise.all([getArchitecture()])
      .then(([arch]) => {
        setUserOS({
          os: detectOS(),
          architecture: arch ? arch : ''
        });
      })
      .catch(console.error);
  }, []);

  return userOS;
};

export default useDetectOS;
