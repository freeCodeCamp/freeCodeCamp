const guideBase = 'https://www.freecodecamp.org/forum/search?q=';

export function createGuideUrl(title = '') {
  return guideBase + title + '%20in%3Atitle%20order%3Aviews';
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}
