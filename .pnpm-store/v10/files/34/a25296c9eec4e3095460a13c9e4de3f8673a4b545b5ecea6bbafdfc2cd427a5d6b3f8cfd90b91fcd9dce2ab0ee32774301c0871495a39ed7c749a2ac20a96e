![Release](https://github.com/tjallingt/react-youtube/workflows/Release/badge.svg) ![Tests](https://github.com/tjallingt/react-youtube/workflows/Tests/badge.svg) ![Example](https://github.com/tjallingt/react-youtube/workflows/Example/badge.svg)

# react-youtube

Simple [React](http://facebook.github.io/react/) component acting as a thin layer over the [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)

## Features

- url playback
- [playback event bindings](https://developers.google.com/youtube/iframe_api_reference#Events)
- [customizable player options](https://developers.google.com/youtube/player_parameters)

## Installation

### NPM

```bash
npm install react-youtube
```

### Yarn

```bash
yarn add react-youtube
```

### PNPM

```bash
pnpm add react-youtube
```

## Usage

```js
<YouTube
  videoId={string}                  // defaults -> ''
  id={string}                       // defaults -> ''
  className={string}                // defaults -> ''
  iframeClassName={string}          // defaults -> ''
  style={object}                    // defaults -> {}
  title={string}                    // defaults -> ''
  loading={string}                  // defaults -> undefined
  opts={obj}                        // defaults -> {}
  onReady={func}                    // defaults -> noop
  onPlay={func}                     // defaults -> noop
  onPause={func}                    // defaults -> noop
  onEnd={func}                      // defaults -> noop
  onError={func}                    // defaults -> noop
  onStateChange={func}              // defaults -> noop
  onPlaybackRateChange={func}       // defaults -> noop
  onPlaybackQualityChange={func}    // defaults -> noop
/>
```

For convenience it is also possible to access the PlayerState constants through react-youtube:
`YouTube.PlayerState` contains the values that are used by the [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference#onStateChange).

## Example

```jsx
// js
import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
```

```tsx
// ts
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function Example() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
}
```

## Controlling the player

You can access & control the player in a way similar to the [official api](https://developers.google.com/youtube/iframe_api_reference#Events):

> The ~~API~~ _component_ will pass an event object as the sole argument to each of ~~those functions~~ _the event handler props_. The event object has the following properties:
>
> - The event's `target` identifies the video player that corresponds to the event.
> - The event's `data` specifies a value relevant to the event. Note that the `onReady` event does not specify a `data` property.

# License

MIT
