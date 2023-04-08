export interface ShareProps {
  superBlock: string;
  block: string;
}

export interface ShareRedirectProps {
  handleRedirectToTwitter: () => void;
  redirectURL: string;
}
