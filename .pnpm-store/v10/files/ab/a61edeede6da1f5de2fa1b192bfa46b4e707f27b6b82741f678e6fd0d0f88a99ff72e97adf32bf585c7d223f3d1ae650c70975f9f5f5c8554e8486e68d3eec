# Tone.js

[![codecov](https://codecov.io/gh/Tonejs/Tone.js/branch/dev/graph/badge.svg)](https://codecov.io/gh/Tonejs/Tone.js)

Tone.js is a Web Audio framework for creating interactive music in the browser. The architecture of Tone.js aims to be familiar to both musicians and audio programmers creating web-based audio applications. On the high-level, Tone offers common DAW (digital audio workstation) features like a global transport for synchronizing and scheduling events as well as prebuilt synths and effects. Additionally, Tone provides high-performance building blocks to create your own synthesizers, effects, and complex control signals.

-   [API](https://tonejs.github.io/docs/)
-   [Examples](https://tonejs.github.io/examples/)

# Installation

There are two ways to incorporate Tone.js into a project. First, it can be installed locally into a project using `npm`:

```bash
npm install tone      // Install the latest stable version
npm install tone@next // Or, alternatively, use the 'next' version
```

Add Tone.js to a project using the JavaScript `import` syntax:

```js
import * as Tone from "tone";
```

Tone.js is also hosted at unpkg.com. It can be added directly within an HTML document, as long as it precedes any project scripts. [See the example here](https://github.com/Tonejs/Tone.js/blob/master/examples/simpleHtml.html) for more details.

```html
<script src="http://unpkg.com/tone"></script>
```

# Hello Tone

```javascript
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
```

## Tone.Synth

`Tone.Synth` is a basic synthesizer with a single oscillator and an ADSR envelope.

### triggerAttack / triggerRelease

`triggerAttack` starts the note (the amplitude is rising), and `triggerRelease` is when the amplitude is going back to 0 (i.e. **note off**).

```javascript
const synth = new Tone.Synth().toDestination();
const now = Tone.now();
// trigger the attack immediately
synth.triggerAttack("C4", now);
// wait one second before triggering the release
synth.triggerRelease(now + 1);
```

### triggerAttackRelease

`triggerAttackRelease` is a combination of `triggerAttack` and `triggerRelease`

The first argument to the note which can either be a frequency in hertz (like `440`) or as "pitch-octave" notation (like `"D#2"`).

The second argument is the duration that the note is held. This value can either be in seconds, or as a [tempo-relative value](https://github.com/Tonejs/Tone.js/wiki/Time).

The third (optional) argument of `triggerAttackRelease` is _when_ along the AudioContext time the note should play. It can be used to schedule events in the future.

```javascript
const synth = new Tone.Synth().toDestination();
const now = Tone.now();
synth.triggerAttackRelease("C4", "8n", now);
synth.triggerAttackRelease("E4", "8n", now + 0.5);
synth.triggerAttackRelease("G4", "8n", now + 1);
```

## Time

Web Audio has advanced, sample accurate scheduling capabilities. The AudioContext time is what the Web Audio API uses to schedule events, starts at 0 when the page loads and counts up in **seconds**.

`Tone.now()` gets the current time of the AudioContext.

```javascript
setInterval(() => console.log(Tone.now()), 100);
```

Tone.js abstracts away the AudioContext time. Instead of defining all values in seconds, any method which takes time as an argument can accept a number or a string. For example `"4n"` is a quarter-note, `"8t"` is an eighth-note triplet, and `"1m"` is one measure.

[Read about Time encodings](https://github.com/Tonejs/Tone.js/wiki/Time).

# Starting Audio

**IMPORTANT**: Browsers will not play _any_ audio until a user clicks something (like a play button). Run your Tone.js code only after calling `Tone.start()` from a event listener which is triggered by a user action such as "click" or "keydown".

`Tone.start()` returns a promise, the audio will be ready only after that promise is resolved. Scheduling or playing audio before the AudioContext is running will result in silence or incorrect scheduling.

```javascript
//attach a click listener to a play button
document.querySelector("button")?.addEventListener("click", async () => {
	await Tone.start();
	console.log("audio is ready");
});
```

# Scheduling

## Transport

`Tone.getTransport()` returns the main timekeeper. Unlike the AudioContext clock, it can be started, stopped, looped and adjusted on the fly. You can think of it like the arrangement view in a Digital Audio Workstation.

Multiple events and parts can be arranged and synchronized along the Transport. `Tone.Loop` is a simple way to create a looped callback that can be scheduled to start and stop.

```javascript
// create two monophonic synths
const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop((time) => {
	synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop((time) => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");
// all loops start when the Transport is started
Tone.getTransport().start();
// ramp up to 800 bpm over 10 seconds
Tone.getTransport().bpm.rampTo(800, 10);
```

Since Javascript callbacks are **not precisely timed**, the sample-accurate time of the event is passed into the callback function. **Use this time value to schedule the events**.

# Instruments

There are numerous synths to choose from including `Tone.FMSynth`, `Tone.AMSynth` and `Tone.NoiseSynth`.

All of these instruments are **monophonic** (single voice) which means that they can only play one note at a time.

To create a **polyphonic** synthesizer, use `Tone.PolySynth`, which accepts a monophonic synth as its first parameter and automatically handles the note allocation so you can pass in multiple notes. The API is similar to the monophonic synths, except `triggerRelease` must be given a note or array of notes.

```javascript
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();
synth.triggerAttack("D4", now);
synth.triggerAttack("F4", now + 0.5);
synth.triggerAttack("A4", now + 1);
synth.triggerAttack("C5", now + 1.5);
synth.triggerAttack("E5", now + 2);
synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
```

# Samples

Sound generation is not limited to synthesized sounds. You can also load a sample and play that back in a number of ways. `Tone.Player` is one way to load and play back an audio file.

```javascript
const player = new Tone.Player(
	"https://tonejs.github.io/audio/berklee/gong_1.mp3"
).toDestination();
Tone.loaded().then(() => {
	player.start();
});
```

`Tone.loaded()` returns a promise which resolves when _all_ audio files are loaded. It's a helpful shorthand instead of waiting on each individual audio buffer's `onload` event to resolve.

## Tone.Sampler

Multiple samples can also be combined into an instrument. If you have audio files organized by note, `Tone.Sampler` will pitch shift the samples to fill in gaps between notes. So for example, if you only have every 3rd note on a piano sampled, you could turn that into a full piano sample.

Unlike the other synths, Tone.Sampler is polyphonic so doesn't need to be passed into Tone.PolySynth

```javascript
const sampler = new Tone.Sampler({
	urls: {
		C4: "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

Tone.loaded().then(() => {
	sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
});
```

# Effects

In the above examples, the sources were always connected directly to the `Destination`, but the output of the synth could also be routed through one (or more) effects before going to the speakers.

```javascript
const player = new Tone.Player({
	url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
	loop: true,
	autostart: true,
});
//create a distortion effect
const distortion = new Tone.Distortion(0.4).toDestination();
//connect a player to the distortion
player.connect(distortion);
```

The connection routing is flexible, connections can run serially or in parallel.

```javascript
const player = new Tone.Player({
	url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
	autostart: true,
});
const filter = new Tone.Filter(400, "lowpass").toDestination();
const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

// connect the player to the feedback delay and filter in parallel
player.connect(filter);
player.connect(feedbackDelay);
```

Multiple nodes can be connected to the same input enabling sources to share effects. `Tone.Gain` is useful utility node for creating complex routing.

# Signals

Like the underlying Web Audio API, Tone.js is built with audio-rate signal control over nearly everything. This is a powerful feature which allows for sample-accurate synchronization and scheduling of parameters.

`Signal` properties have a few built in methods for creating automation curves.

For example, the `frequency` parameter on `Oscillator` is a Signal so you can create a smooth ramp from one frequency to another.

```javascript
const osc = new Tone.Oscillator().toDestination();
// start at "C4"
osc.frequency.value = "C4";
// ramp to "C2" over 2 seconds
osc.frequency.rampTo("C2", 2);
// start the oscillator for 2 seconds
osc.start().stop("+3");
```

# AudioContext

Tone.js creates an AudioContext when it loads and shims it for maximum browser compatibility using [standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context). The AudioContext can be accessed at `Tone.getContext`. Or set your own AudioContext using `Tone.setContext(audioContext)`.

# MIDI

To use MIDI files, you'll first need to convert them into a JSON format which Tone.js can understand using [Midi](https://tonejs.github.io/Midi/).

# Performance

Tone.js makes extensive use of the native Web Audio Nodes such as the GainNode and WaveShaperNode for all signal processing, which enables Tone.js to work well on both desktop and mobile browsers.

[This wiki](https://github.com/Tonejs/Tone.js/wiki/Performance) article has some suggestions related to performance for best practices.

# Testing

Tone.js runs an extensive test suite using [mocha](https://mochajs.org/) and [chai](http://chaijs.com/) with nearly 100% coverage. Passing builds on the 'dev' branch are published on npm as `tone@next`.

# Contributing

There are many ways to contribute to Tone.js. Check out [this wiki](https://github.com/Tonejs/Tone.js/wiki/Contributing) if you're interested.

# References and Inspiration

-   [Many of Chris Wilson's Repositories](https://github.com/cwilso)
-   [Many of Mohayonao's Repositories](https://github.com/mohayonao)
-   [The Spec](http://webaudio.github.io/web-audio-api/)
-   [Sound on Sound - Synth Secrets](http://www.soundonsound.com/sos/may99/articles/synthsec.htm)
-   [Miller Puckette - Theory and Techniques of Electronic Music](http://msp.ucsd.edu/techniques.htm)
-   [standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context)
