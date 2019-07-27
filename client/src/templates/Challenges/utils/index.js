const guideBase = 'https://www.freecodecamp.org/forum/search?q=';

export function createGuideUrl(slug = '') {
  return (
    guideBase +
    slug.substring(slug.lastIndexOf('/') + 1) +
    '%20%40camperbot%20%23guide'
  );
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}
