import PropTypes from 'prop-types';
import React from 'react';
import { YouTubePlayer, Options } from 'youtube-player/dist/types';
export { YouTubePlayer } from 'youtube-player/dist/types';

/** @jsxRuntime classic */

declare type YouTubeEvent<T = any> = {
    data: T;
    target: YouTubePlayer;
};
declare type YouTubeProps = {
    /**
     * The YouTube video ID.
     *
     * Examples
     * - https://www.youtube.com/watch?v=XxVg_s8xAms (`XxVg_s8xAms` is the ID)
     * - https://www.youtube.com/embed/-DX3vJiqxm4 (`-DX3vJiqxm4` is the ID)
     */
    videoId?: string;
    /**
     * Custom ID for the player element
     */
    id?: string;
    /**
     * Custom class name for the player element
     */
    className?: string;
    /**
     * Custom class name for the iframe element
     */
    iframeClassName?: string;
    /**
     * Custom style for the player container element
     */
    style?: React.CSSProperties;
    /**
     * Title of the video for the iframe's title tag.
     */
    title?: React.IframeHTMLAttributes<HTMLIFrameElement>['title'];
    /**
     * Indicates how the browser should load the iframe
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-loading}
     */
    loading?: React.IframeHTMLAttributes<HTMLIFrameElement>['loading'];
    /**
     * An object that specifies player options
     * {@link https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player}
     */
    opts?: Options;
    /**
     * This event fires whenever a player has finished loading and is ready to begin receiving API calls.
     * {@link https://developers.google.com/youtube/iframe_api_reference#onReady}
     */
    onReady?: (event: YouTubeEvent) => void;
    /**
     * This event fires if an error occurs in the player.
     * {@link https://developers.google.com/youtube/iframe_api_reference#onError}
     */
    onError?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires when the layer's state changes to PlayerState.PLAYING.
     */
    onPlay?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires when the layer's state changes to PlayerState.PAUSED.
     */
    onPause?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires when the layer's state changes to PlayerState.ENDED.
     */
    onEnd?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires whenever the player's state changes.
     * {@link https://developers.google.com/youtube/iframe_api_reference#onStateChange}
     */
    onStateChange?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires whenever the video playback quality changes.
     * {@link https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange}
     */
    onPlaybackRateChange?: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires whenever the video playback rate changes.
     * {@link https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange}
     */
    onPlaybackQualityChange?: (event: YouTubeEvent<string>) => void;
};
declare class YouTube extends React.Component<YouTubeProps> {
    static propTypes: {
        videoId: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        iframeClassName: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<string>;
        opts: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        onReady: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        onPlay: PropTypes.Requireable<(...args: any[]) => any>;
        onPause: PropTypes.Requireable<(...args: any[]) => any>;
        onEnd: PropTypes.Requireable<(...args: any[]) => any>;
        onStateChange: PropTypes.Requireable<(...args: any[]) => any>;
        onPlaybackRateChange: PropTypes.Requireable<(...args: any[]) => any>;
        onPlaybackQualityChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: YouTubeProps;
    /**
     * Expose PlayerState constants for convenience. These constants can also be
     * accessed through the global YT object after the YouTube IFrame API is instantiated.
     * https://developers.google.com/youtube/iframe_api_reference#onStateChange
     */
    static PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
    };
    container: HTMLDivElement | null;
    internalPlayer: YouTubePlayer | null;
    constructor(props: any);
    /**
     * Note: The `youtube-player` package that is used promisifies all YouTube
     * Player API calls, which introduces a delay of a tick before it actually
     * gets destroyed.
     *
     * The promise to destroy the player is stored here so we can make sure to
     * only re-create the Player after it's been destroyed.
     *
     * See: https://github.com/tjallingt/react-youtube/issues/355
     */
    destroyPlayerPromise: Promise<void> | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: YouTubeProps): Promise<void>;
    componentWillUnmount(): void;
    /**
     * This event fires whenever a player has finished loading and is ready to begin receiving API calls.
     * https://developers.google.com/youtube/iframe_api_reference#onReady
     */
    onPlayerReady: (event: YouTubeEvent) => void | undefined;
    /**
     * This event fires if an error occurs in the player.
     * https://developers.google.com/youtube/iframe_api_reference#onError
     */
    onPlayerError: (event: YouTubeEvent<number>) => void | undefined;
    /**
     * This event fires whenever the video playback quality changes.
     * https://developers.google.com/youtube/iframe_api_reference#onStateChange
     */
    onPlayerStateChange: (event: YouTubeEvent<number>) => void;
    /**
     * This event fires whenever the video playback quality changes.
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
     */
    onPlayerPlaybackRateChange: (event: YouTubeEvent<number>) => void | undefined;
    /**
     * This event fires whenever the video playback rate changes.
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
     */
    onPlayerPlaybackQualityChange: (event: YouTubeEvent<string>) => void | undefined;
    /**
     * Destroy the YouTube Player using its async API and store the promise so we
     * can await before re-creating it.
     */
    destroyPlayer: () => Promise<void>;
    /**
     * Initialize the YouTube Player API on the container and attach event handlers
     */
    createPlayer: () => void;
    /**
     * Shorthand for destroying and then re-creating the YouTube Player
     */
    resetPlayer: () => Promise<void>;
    /**
     * Method to update the id and class of the YouTube Player iframe.
     * React should update this automatically but since the YouTube Player API
     * replaced the DIV that is mounted by React we need to do this manually.
     */
    updatePlayer: () => void;
    /**
     *  Method to return the internalPlayer object.
     */
    getInternalPlayer: () => YouTubePlayer | null;
    /**
     * Call YouTube Player API methods to update the currently playing video.
     * Depending on the `opts.playerVars.autoplay` this function uses one of two
     * YouTube Player API methods to update the video.
     */
    updateVideo: () => void;
    refContainer: (container: HTMLDivElement) => void;
    render(): JSX.Element;
}

export { YouTubeEvent, YouTubeProps, YouTube as default };
