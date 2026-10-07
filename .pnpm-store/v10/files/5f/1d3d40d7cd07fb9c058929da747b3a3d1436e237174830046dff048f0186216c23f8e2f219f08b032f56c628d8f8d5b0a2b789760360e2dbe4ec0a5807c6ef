// @flow

export type EmitterType = {
  trigger: (eventName: string, event: Object) => void
};

export type IframeApiType = {
  Player: Function
};

/**
 * @see https://developers.google.com/youtube/iframe_api_reference
 */
export type YouTubePlayerType = {
  addEventListener: (event: string, listener: Function) => void,
  destroy: () => void,
  getAvailablePlaybackRates: () => $ReadOnlyArray<number>,
  getAvailableQualityLevels: () => $ReadOnlyArray<string>,
  getCurrentTime: () => number,
  getDuration: () => number,
  getIframe: () => Object,
  getOption: () => any,
  getOptions: () => any,
  setOption: () => void,
  setOptions: () => void,
  cuePlaylist: (playlist: string | $ReadOnlyArray<string>, index?: number, startSeconds?: number, suggestedQuality?: string) => void | ({
    listType: string,
    list?: string,
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string
  }) => void,
  loadPlaylist: (playlist: string | $ReadOnlyArray<string>, index?: number, startSeconds?: number, suggestedQuality?: string) => void | ({
    listType: string,
    list?: string,
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string
  }) => void,
  getPlaylist: () => $ReadOnlyArray<string>,
  getPlaylistIndex: () => number,
  getPlaybackQuality: () => string,
  getPlaybackRate: () => number,
  getPlayerState: () => number,
  getVideoEmbedCode: () => string,
  getVideoLoadedFraction: () => number,
  getVideoUrl: () => string,
  getVolume: () => number,
  cueVideoById: (videoId: string, startSeconds?: number, suggestedQuality?: string) => void | ({
    videoId: string,
    startSeconds?: number,
    endSeconds?: number,
    suggestedQuality?: string
  }) => void,
  cueVideoByUrl: (mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string) => void | ({
    mediaContentUrl: string,
    startSeconds?: number,
    endSeconds?: number,
    suggestedQuality?: string
  }) => void,
  loadVideoByUrl: (mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string) => void | ({
    mediaContentUrl: string,
    startSeconds?: number,
    endSeconds?: number,
    suggestedQuality?: string
  }) => void,
  loadVideoById: (videoId: string, startSeconds?: number, suggestedQuality?: string) => void | ({
    videoId: string,
    startSeconds?: number,
    endSeconds?: number,
    suggestedQuality?: string
  }) => void,
  isMuted: () => boolean,
  mute: () => void,
  nextVideo: () => void,
  pauseVideo: () => void,
  playVideo: () => void,
  playVideoAt: (index: number) => void,
  previousVideo: () => void,
  removeEventListener: (event: string, listener: Function) => void,
  seekTo: (seconds: number, allowSeekAhead: boolean) => void,
  setLoop: (loopPlaylists: boolean) => void,
  setPlaybackQuality: (suggestedQuality: string) => void,
  setPlaybackRate: (suggestedRate: number) => void,
  setShuffle: (shufflePlaylist: boolean) => void,
  setSize: (width: number, height: number) => Object,
  setVolume: (volume: number) => void,
  stopVideo: () => void,
  unMute: () => void
};
