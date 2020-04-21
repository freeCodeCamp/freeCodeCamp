import React from 'react';
import NchanSubscriber from 'nchan';

var SUB = new NchanSubscriber(
  'wss://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio'
);

export class CodeRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /** *
       * General configuration options
       */
      config: {
        metadataTimer: 1000
      },
      fastConnection: navigator.connection
        ? navigator.connection.downlink > 1.5
        : null,

      /** *
       * The equalizer data is held as a separate data set
       * to allow for easy implementation of visualizers.
       * With the ultimate goal of this allowing plug and
       * play visualizers.
       */
      eq: {},

      /** *
       * Potentially removing the visualizer from this class
       * to build it as a stand alone element that can be
       * replaced by community submissions
       */
      visualizer: {},

      // Some basic configuration for nicer audio transitions
      // (Used in earlier projects and just maintained)
      audioConfig: {
        targetVolume: 0,
        maxVolume: 0.5,
        volumeSteps: 0.1,
        currentVolume: 0.5,
        volumeTransitionSpeed: 100
      },

      /** *
       * This is where all the audio is pumped through. Due
       * to it being a single audio element, there should be
       * no memory leaks of extra floating audio elements.
       */
      url: '',
      mounts: [],
      remotes: [],
      playing: null,

      // Note: the crossOrigin is needed to fix a CORS JavaScript requirement

      /** *
       * There are a few *private* variables used
       */
      currentSong: {},
      songStartedAt: 0,
      songDuration: 0,
      listeners: 0
    };
    this.keyboardControl = this.keyboardControl.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.setTargetVolume = this.setTargetVolume.bind(this);
    this.getNowPlaying = this.getNowPlaying.bind(this);
  }

  // set the players initial vol and crossOrigin
  setPlayerInitial() {
    this._player.volume = this.state.audioConfig.maxVolume;
  }

  componentDidMount() {
    this.setPlayerInitial();
    this.getNowPlaying();
  }

  /** *
   * If we ever change the URL, we need to update the player
   * and begin playing it again. This can happen if the server
   * resets the URL.
   */
  setUrl(url = false) {
    if (url) {
      if (this.state.playing) this.pause();
      this._player.src = url;
      this.setState({
        url
      });
      this.play();
    }
  }

  play() {
    if (this._player.paused) {
      if (!SUB.running) {
        SUB.start();
      }
      this._player.volume = 0;
      this._player.play();
      let audioConfig = this.state.audioConfig;
      audioConfig.currentVolume = 0;
      this.setState({
        audioConfig,
        playing: true
      });
      this.fadeUp();
    }
  }

  pause() {
    this._player.pause();
    this.setState({
      playing: false
    });
    SUB.stop();
  }

  /** *
   * Very basic method that acts like the play/pause button
   * of a standard player. It loads in a new song if there
   * isn’t already one loaded.
   */
  togglePlay() {
    // If there already is a source, confirm it’s playing or not
    if (this._player.src) {
      // If the player is paused, set the volume to 0 and fade up
      if (this._player.paused) {
        this.play();
      }
      // if it is already playing, fade the music out (resulting in a pause)
      else {
        this.fade();
      }
    }
  }

  setTargetVolume(v) {
    let audioConfig = { ...this.state.audioConfig };
    let maxVolume = parseFloat(Math.max(0, Math.min(1, v).toFixed(1)));
    audioConfig.maxVolume = maxVolume;
    audioConfig.currentVolume = maxVolume;
    this._player.volume = audioConfig.maxVolume;
    this.setState({
      audioConfig
    });
  }

  /**
   *
   * Simple fade command to initiate the playing and pausing
   *  in a more fluid method  */

  fade(direction = 'down') {
    let audioConfig = { ...this.state.audioConfig };
    audioConfig.targetVolume =
      direction.toLowerCase() === 'up' ? this.state.audioConfig.maxVolume : 0;
    this.setState(
      {
        audioConfig
      },
      function() {
        this.updateVolume();
      }
    );

    return this;
  }

  fadeUp() {
    this.fade('up');
  }

  fadeDown() {
    this.fade('down');
  }

  // In order to have nice fading,
  // this method adjusts the volume dynamically over time.
  updateVolume() {
    /*
     *  In order to fix floating math issues,
     *  we set the toFixed in order to avoid 0.999999999999 increments
     */
    let currentVolume = parseFloat(this._player.volume.toFixed(1));
    // If the volume is correctly set to the target, no need to change it
    if (currentVolume === this.state.audioConfig.targetVolume) {
      // If the audio is set to 0 and it’s been met, pause the audio
      if (this.state.audioConfig.targetVolume === 0) this.pause();

      // Unmet audio volume settings require it to be changed
    } else {
      /*
       *  We capture the value of the next increment by either the configuration
       *  or the difference between the current and target
       *  if it's smaller than the increment
       *
       */

      let volumeNextIncrement = Math.min(
        this.state.audioConfig.volumeSteps,
        Math.abs(this.state.audioConfig.targetVolume - this._player.volume)
      );

      // Adjust the audio based on if the target is
      // higher or lower than the current
      let volumeAdjust =
        this.state.audioConfig.targetVolume > this._player.volume
          ? volumeNextIncrement
          : -volumeNextIncrement;

      this._player.volume += volumeAdjust;

      let audioConfig = this.state.audioConfig;
      audioConfig.currentVolume += volumeAdjust;

      this.setState({
        audioConfig
      });
      // The speed at which the audio lowers is also controlled.
      setTimeout(
        () => this.updateVolume(),
        this.state.audioConfig.volumeTransitionSpeed
      );
    }
  }

  // choose either high or low bitrate
  bitrateFinder(streames, low = false) {
    let arr = streames.sort(
      (a, b) => parseFloat(a.bitrate) - parseFloat(b.bitrate)
    );
    if (low) return arr[0].url;
    return arr[arr.length - 1].url;
  }

  // choose the stream based on the connection and availablity of relay(remotes)
  setMountToConnection(mounts = [], remotes = []) {
    let url = null;
    if (this.state.fastConnection === false && remotes.length > 0) {
      url = this.bitrateFinder(remotes, true);
    } else if (this.state.fastConnection && remotes.length > 0) {
      url = this.bitrateFinder(remotes);
    } else if (this.state.fastConnection === false) {
      url = this.bitrateFinder(mounts, true);
    } else {
      url = this.bitrateFinder(mounts);
    }
    this._player.src = url;
    this.setState({
      url
    });
  }

  getNowPlaying() {
    SUB.on('message', message => {
      let np = JSON.parse(message);

      // We look through the available mounts to find the default mount
      if (this.state.url === '') {
        this.setState({
          mounts: np.station.mounts,
          remotes: np.station.remotes
        });
        this.setMountToConnection(np.station.mounts, np.station.remotes);
      }

      if (this.state.listeners !== np.listeners.current) {
        this.setState({
          listeners: np.listeners.current
        });
      }

      // We only need to update the metadata if the song has been changed
      if (np.now_playing.song.id !== this.state.currentSong.id) {
        this.setState({
          currentSong: np.now_playing.song,
          songStartedAt: np.now_playing.played_at * 1000,
          songDuration: np.now_playing.duration
        });
      }
    });
    SUB.reconnectTimeout = this.state.config.metadataTimer;
    SUB.start();
  }

  // keyboard shortcuts
  keyboardControl = evt => {
    switch (evt.key) {
      case ' ':
      case 'k':
        this.togglePlay();
        break;
      case 'ArrowUp':
        this.setTargetVolume(
          Math.min(
            this.state.audioConfig.maxVolume +
              this.state.audioConfig.volumeSteps,
            1
          )
        );

        break;
      case 'ArrowDown':
        this.setTargetVolume(
          Math.max(
            this.state.audioConfig.maxVolume -
              this.state.audioConfig.volumeSteps,
            0
          )
        );
        break;
      default:
    }
  };

  render() {
    return (
      <button
        className='codeRadio'
        onClick={this.togglePlay}
        onKeyDown={this.keyboardControl}
        tabIndex='0'
      >
        <audio crossOrigin='anonymous' ref={a => (this._player = a)}>
          <track kind='captions' />
        </audio>
        {this.state.playing ? 'silence' : 'radio'}
      </button>
    );
  }
}

CodeRadio.displayName = 'CodeRadio';
export default CodeRadio;
