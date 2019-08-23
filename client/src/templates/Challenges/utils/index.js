import { forumLocation } from '../../../../../config/env.json';

export function getGuideUrl({ forumTopicId, title = '' }) {
  title = encodeURIComponent(title);
  return forumTopicId
    ? `${forumLocation}/t/${forumTopicId}`
    : `${forumLocation}/search?q=${title}%20in%3Atitle%20order%3Aviews`;
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}
