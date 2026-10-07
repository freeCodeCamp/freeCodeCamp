/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import { dirname } from 'node:path';
import { PassThrough } from 'node:stream';
import { bufferCount, concatMap, filter, from, fromEvent, lastValueFrom, map, takeUntil, tap, } from '../../third_party/rxjs/rxjs.js';
import { CDPSessionEvent } from '../api/CDPSession.js';
import { debug } from '../common/Debug.js';
import { debugError, fromEmitterEvent } from '../common/util.js';
import { guarded } from '../util/decorators.js';
import { asyncDisposeSymbol } from '../util/disposable.js';
const CRF_VALUE = 30;
const DEFAULT_FPS = 30;
const debugFfmpeg = debug('puppeteer:ffmpeg');
/**
 * @public
 */
let ScreenRecorder = (() => {
    let _classSuper = PassThrough;
    let _instanceExtraInitializers = [];
    let _private_writeFrame_decorators;
    let _private_writeFrame_descriptor;
    let _stop_decorators;
    return class ScreenRecorder extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, _private_writeFrame_descriptor = { value: __setFunctionName(async function (buffer) {
                    const error = await new Promise(resolve => {
                        this.#process.stdin.write(buffer, resolve);
                    });
                    if (error) {
                        console.log(`ffmpeg failed to write: ${error.message}.`);
                    }
                }, "#writeFrame") }, _private_writeFrame_decorators, { kind: "method", name: "#writeFrame", static: false, private: true, access: { has: obj => #writeFrame in obj, get: obj => obj.#writeFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _stop_decorators, { kind: "method", name: "stop", static: false, private: false, access: { has: obj => "stop" in obj, get: obj => obj.stop }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #page = __runInitializers(this, _instanceExtraInitializers);
        #process;
        #controller = new AbortController();
        #lastFrame;
        #fps;
        /**
         * @internal
         */
        constructor(page, width, height, { ffmpegPath, speed, scale, crop, format, fps, loop, delay, quality, colors, path, overwrite, } = {}) {
            super({ allowHalfOpen: false });
            ffmpegPath ??= 'ffmpeg';
            format ??= 'webm';
            fps ??= DEFAULT_FPS;
            // Maps 0 to -1 as ffmpeg maps 0 to infinity.
            loop ||= -1;
            delay ??= -1;
            quality ??= CRF_VALUE;
            colors ??= 256;
            overwrite ??= true;
            this.#fps = fps;
            // Tests if `ffmpeg` exists.
            const { error } = spawnSync(ffmpegPath);
            if (error) {
                throw error;
            }
            const filters = [
                `crop='min(${width},iw):min(${height},ih):0:0'`,
                `pad=${width}:${height}:0:0`,
            ];
            if (speed) {
                filters.push(`setpts=${1 / speed}*PTS`);
            }
            if (crop) {
                filters.push(`crop=${crop.width}:${crop.height}:${crop.x}:${crop.y}`);
            }
            if (scale) {
                filters.push(`scale=iw*${scale}:-1:flags=lanczos`);
            }
            const formatArgs = this.#getFormatArgs(format, fps, loop, delay, quality, colors);
            const vf = formatArgs.indexOf('-vf');
            if (vf !== -1) {
                filters.push(formatArgs.splice(vf, 2).at(-1) ?? '');
            }
            // Ensure provided output directory path exists.
            if (path) {
                fs.mkdirSync(dirname(path), { recursive: overwrite });
            }
            this.#process = spawn(ffmpegPath, 
            // See https://trac.ffmpeg.org/wiki/Encode/VP9 for more information on flags.
            [
                ['-loglevel', 'error'],
                // Reduces general buffering.
                ['-avioflags', 'direct'],
                // Reduces initial buffering while analyzing input fps and other stats.
                [
                    '-fpsprobesize',
                    '0',
                    '-probesize',
                    '32',
                    '-analyzeduration',
                    '0',
                    '-fflags',
                    'nobuffer',
                ],
                // Forces input to be read from standard input, and forces png input
                // image format.
                ['-f', 'image2pipe', '-vcodec', 'png', '-i', 'pipe:0'],
                // No audio
                ['-an'],
                // This drastically reduces stalling when cpu is overbooked. By default
                // VP9 tries to use all available threads?
                ['-threads', '1'],
                // Specifies the frame rate we are giving ffmpeg.
                ['-framerate', `${fps}`],
                // Disable bitrate.
                ['-b:v', '0'],
                // Specifies the encoding and format we are using.
                formatArgs,
                // Filters to ensure the images are piped correctly,
                // combined with any format-specific filters.
                ['-vf', filters.join()],
                // Overwrite output, or exit immediately if file already exists.
                [overwrite ? '-y' : '-n'],
                'pipe:1',
            ].flat(), { stdio: ['pipe', 'pipe', 'pipe'] });
            this.#process.stdout.pipe(this);
            this.#process.stderr.on('data', (data) => {
                debugFfmpeg(data.toString('utf8'));
            });
            this.#page = page;
            const { client } = this.#page.mainFrame();
            client.once(CDPSessionEvent.Disconnected, () => {
                void this.stop().catch(debugError);
            });
            this.#lastFrame = lastValueFrom(fromEmitterEvent(client, 'Page.screencastFrame').pipe(tap(event => {
                void client.send('Page.screencastFrameAck', {
                    sessionId: event.sessionId,
                });
            }), filter(event => {
                return event.metadata.timestamp !== undefined;
            }), map(event => {
                return {
                    buffer: Buffer.from(event.data, 'base64'),
                    timestamp: event.metadata.timestamp,
                };
            }), bufferCount(2, 1), concatMap(([{ timestamp: previousTimestamp, buffer }, { timestamp }]) => {
                return from(Array(Math.round(fps * Math.max(timestamp - previousTimestamp, 0))).fill(buffer));
            }), map(buffer => {
                void this.#writeFrame(buffer);
                return [buffer, performance.now()];
            }), takeUntil(fromEvent(this.#controller.signal, 'abort'))), { defaultValue: [Buffer.from([]), performance.now()] });
        }
        #getFormatArgs(format, fps, loop, delay, quality, colors) {
            const libvpx = [
                ['-vcodec', 'vp9'],
                // Sets the quality. Lower the better.
                ['-crf', `${quality}`],
                // Sets the quality and how efficient the compression will be.
                [
                    '-deadline',
                    'realtime',
                    '-cpu-used',
                    `${Math.min(os.cpus().length / 2, 8)}`,
                ],
            ];
            switch (format) {
                case 'webm':
                    return [
                        ...libvpx,
                        // Sets the format
                        ['-f', 'webm'],
                    ].flat();
                case 'gif':
                    fps = DEFAULT_FPS === fps ? 20 : 'source_fps';
                    if (loop === Infinity) {
                        loop = 0;
                    }
                    if (delay !== -1) {
                        // ms to cs
                        delay /= 10;
                    }
                    return [
                        // Sets the frame rate and uses a custom palette generated from the
                        // input.
                        [
                            '-vf',
                            `fps=${fps},split[s0][s1];[s0]palettegen=stats_mode=diff:max_colors=${colors}[p];[s1][p]paletteuse=dither=bayer`,
                        ],
                        // Sets the number of times to loop playback.
                        ['-loop', `${loop}`],
                        // Sets the delay between iterations of a loop.
                        ['-final_delay', `${delay}`],
                        // Sets the format
                        ['-f', 'gif'],
                    ].flat();
                case 'mp4':
                    return [
                        ...libvpx,
                        // Fragment file during stream to avoid errors.
                        ['-movflags', 'hybrid_fragmented'],
                        // Sets the format
                        ['-f', 'mp4'],
                    ].flat();
            }
        }
        get #writeFrame() { return _private_writeFrame_descriptor.value; }
        /**
         * Stops the recorder.
         *
         * @public
         */
        async stop() {
            if (this.#controller.signal.aborted) {
                return;
            }
            // Stopping the screencast will flush the frames.
            await this.#page._stopScreencast().catch(debugError);
            this.#controller.abort();
            // Repeat the last frame for the remaining frames.
            const [buffer, timestamp] = await this.#lastFrame;
            await Promise.all(Array(Math.max(1, Math.round((this.#fps * (performance.now() - timestamp)) / 1000)))
                .fill(buffer)
                .map(this.#writeFrame.bind(this)));
            // Close stdin to notify FFmpeg we are done.
            this.#process.stdin.end();
            await new Promise(resolve => {
                this.#process.once('close', resolve);
            });
        }
        /**
         * @internal
         */
        async [(_private_writeFrame_decorators = [guarded()], _stop_decorators = [guarded()], asyncDisposeSymbol)]() {
            await this.stop();
            await super[asyncDisposeSymbol]();
        }
    };
})();
export { ScreenRecorder };
//# sourceMappingURL=ScreenRecorder.js.map