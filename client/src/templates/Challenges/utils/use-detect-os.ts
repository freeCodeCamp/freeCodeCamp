import { useEffect, useState } from 'react';

type UserOS = 'MAC' | 'WIN' | 'LINUX' | 'AIX' | 'OTHER' | 'LOADING';

type UserOSState = {
  os: UserOS;
  architecture: string;
};

interface NavigatorUAData {
  getHighEntropyValues(hints: string[]): Promise<Record<string, string>>;
}

interface Navigator {
  userAgentData?: NavigatorUAData;
}

const getArchitecture = async (): Promise<string> => {
  if ((navigator as Navigator).userAgentData?.getHighEntropyValues) {
    try {
      const { architecture } =
        (await (navigator as Navigator).userAgentData?.getHighEntropyValues([
          'architecture'
        ])) ?? {};
      if (architecture) {
        return architecture;
      }
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
    return /aarch64/.test(userAgent) ? 'ARM64' : 'ARM';
  }

  return 'Unknown';
};

export const detectOsInUserAgent = (userAgent: string | undefined): UserOS => {
  const osMatch = userAgent?.match(/(Win|Mac|Linux)/);
  return osMatch ? (osMatch[1].toUpperCase() as UserOS) : 'OTHER';
};

export const detectOS = (): UserOS => detectOsInUserAgent(navigator?.userAgent);

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
