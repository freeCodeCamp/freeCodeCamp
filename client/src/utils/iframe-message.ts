export enum POSTMSG_IFR_EVENTS {
  challengeCompleted = 'fcc:challenge:completed',
  challengeReady = 'fcc:challenge:ready',
  incomingUrlUpdate = 'fcc:url:update',
}

export const postChallengeCompletedEvent = (data: any) => (
  iframeMessage(POSTMSG_IFR_EVENTS.challengeCompleted, { ...data})
);

export const postChallengeReadyEvent = (data: any) => (
  iframeMessage(POSTMSG_IFR_EVENTS.challengeReady, { ...data})
);

export const iframeMessage = (eventName: string, data: any) => {
  parent.postMessage(JSON.stringify({
    event: eventName,
    data,
  }), '*');
}
