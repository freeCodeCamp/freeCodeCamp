"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseReadableStream = void 0;
localStorage.debug = 'readable-web-to-node-stream';
const assert = require("assert");
const mmb = require("music-metadata-browser");
const index_1 = require("./index");
async function httpGetByUrl(url) {
    const response = await fetch(url);
    const headers = [];
    response.headers.forEach(header => {
        headers.push(header);
    });
    assert.ok(response.ok, `HTTP error status=${response.status}: ${response.statusText}`);
    assert.ok(response.body, 'HTTP-stream');
    return response;
}
async function parseReadableStream(stream, fileInfo, options) {
    const ns = new index_1.ReadableWebToNodeStream(stream);
    const res = await mmb.parseNodeStream(ns, fileInfo, options);
    await ns.close();
    return res;
}
exports.parseReadableStream = parseReadableStream;
const tiuqottigeloot_vol24_Tracks = [
    {
        url: '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/01%20-%20Diablo%20Swing%20Orchestra%20-%20Heroines.mp3',
        duration: 322.612245,
        metaData: {
            title: 'Heroines',
            artist: 'Diablo Swing Orchestra'
        }
    },
    {
        url: '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/02%20-%20Eclectek%20-%20We%20Are%20Going%20To%20Eclecfunk%20Your%20Ass.mp3',
        duration: 190.093061,
        metaData: {
            title: 'We Are Going to Eclecfunk Your Ass',
            artist: 'Eclectek'
        }
    } /* ,
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/03%20-%20Auto-Pilot%20-%20Seventeen.mp3',
      duration: 214.622041,
      metaData: {
        title: 'Seventeen',
        artist: 'Auto-Pilot'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/04%20-%20Muha%20-%20Microphone.mp3',
      duration: 181.838367,
      metaData: {
        title: 'Microphone',
        artist: 'Muha'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/05%20-%20Just%20Plain%20Ant%20-%20Stumble.mp3',
      duration: 86.047347,
      metaData: {
        title: 'Stumble',
        artist: 'Just Plain Ant'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/06%20-%20Sleaze%20-%20God%20Damn.mp3',
      duration: 226.795102,
      metaData: {
        title: 'God Damn',
        artist: 'Sleaze'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/07%20-%20Juanitos%20-%20Hola%20Hola%20Bossa%20Nova.mp3',
      duration: 207.072653,
      metaData: {
        title: 'Hola Hola Bossa Nova',
        artist: 'Juanitos'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/08%20-%20Entertainment%20For%20The%20Braindead%20-%20Resolutions%20(Chris%20Summer%20Remix).mp3',
      duration: 314.331429,
      metaData: {
        title: 'Resolutions (Chris Summer remix)',
        artist: 'Entertainment for the Braindead'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/09%20-%20Nobara%20Hayakawa%20-%20Trail.mp3',
      duration: 204.042449,
      metaData: {
        title: 'Trail',
        artist: 'Nobara Hayakawa'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/10%20-%20Paper%20Navy%20-%20Tongue%20Tied.mp3',
      duration: 201.116735,
      metaData: {
        title: 'Tongue Tied',
        artist: 'Paper Navy'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/11%20-%2060%20Tigres%20-%20Garage.mp3',
      duration: 245.394286,
      metaData: {
        title: 'Garage',
        artist: '60 Tigres'
      }
    },
    {
      url:
        '/Various%20Artists%20-%202009%20-%20netBloc%20Vol%2024_%20tiuqottigeloot%20%5BMP3-V2%5D/12%20-%20CM%20aka%20Creative%20-%20The%20Cycle%20(Featuring%20Mista%20Mista).mp3',
      duration: 221.44,
      metaData: {
        title: 'The Cycle (feat. Mista Mista)',
        artist: 'CM aka Creative'
      }
    } */
];
describe('Parse WebAmp tracks', () => {
    tiuqottigeloot_vol24_Tracks.forEach(track => {
        it(`track ${track.metaData.artist} - ${track.metaData.title}`, async () => {
            const url = 'https://raw.githubusercontent.com/Borewit/test-audio/958e057' + track.url;
            const response = await httpGetByUrl(url);
            const metadata = await parseReadableStream(response.body, {
                size: parseInt(response.headers.get('Content-Length'), 10),
                mimeType: response.headers.get('Content-Type')
            });
            expect(metadata.common.artist).toEqual(track.metaData.artist);
            expect(metadata.common.title).toEqual(track.metaData.title);
        }, 20000);
    });
});
//# sourceMappingURL=index.spec.js.map