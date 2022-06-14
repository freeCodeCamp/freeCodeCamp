export const iframeMessage = (eventName: string, data: any) => {
  parent.postMessage(JSON.stringify({
    event: eventName,
    data,
  }), '*');
}
