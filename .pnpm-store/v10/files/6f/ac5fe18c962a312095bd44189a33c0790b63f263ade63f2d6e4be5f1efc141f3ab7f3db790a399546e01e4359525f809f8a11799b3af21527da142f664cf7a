"use strict";

/* eslint-disable max-len */
const path = require('path');

const fs = require('fs');

const {
  escape
} = require('html-escaper');

const projectRoot = path.resolve(__dirname, '..');
const assetsRoot = path.join(projectRoot, 'public');
exports.renderViewer = renderViewer;
/**
 * Escapes `<` characters in JSON to safely use it in `<script>` tag.
 */

function escapeJson(json) {
  return JSON.stringify(json).replace(/</gu, '\\u003c');
}

function getAssetContent(filename) {
  const assetPath = path.join(assetsRoot, filename);

  if (!assetPath.startsWith(assetsRoot)) {
    throw new Error(`"${filename}" is outside of the assets root`);
  }

  return fs.readFileSync(assetPath, 'utf8');
}

function html(strings, ...values) {
  return strings.map((string, index) => `${string}${values[index] || ''}`).join('');
}

function getScript(filename, mode) {
  if (mode === 'static') {
    return `<!-- ${escape(filename)} -->
<script>${getAssetContent(filename)}</script>`;
  } else {
    return `<script src="${escape(filename)}"></script>`;
  }
}

function renderViewer({
  title,
  enableWebSocket,
  chartData,
  entrypoints,
  defaultSizes,
  mode
} = {}) {
  return html`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${escape(title)}</title>
    <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABrVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+O1foceMD///+J0/qK1Pr7/v8Xdr/9///W8P4UdL7L7P0Scr2r4Pyj3vwad8D5/f/2/f+55f3E6f34+/2H0/ojfMKpzOd0rNgQcb3F3O/j9f7c8v6g3Pz0/P/w+v/q+P7n9v6T1/uQ1vuE0vqLut/y+v+Z2fvt+f+15Pzv9fuc2/vR7v2V2Pvd6/bg9P7I6/285/2y4/yp3/zp8vk8i8kqgMT7/P31+fyv4vxGkcz6/P6/6P3j7vfS5PNnpNUxhcbO7f7F6v3O4vHK3/DA2u631Ouy0eqXweKJud5wqthfoNMMbLvY8f73+v2dxeR8sNtTmdDx9/zX6PSjyeaCtd1YnNGX2PuQveCGt95Nls42h8dLlM3F4vBtAAAAM3RSTlMAAyOx0/sKBvik8opWGBMOAe3l1snDm2E9LSb06eHcu5JpHbarfHZCN9CBb08zzkdNS0kYaptYAAAFV0lEQVRYw92X51/aYBDHHS2O2qqttVbrqNq9m+TJIAYIShBkWwqIiCgoWvfeq7Z2/s29hyQNyUcR7LveGwVyXy6XH8/9rqxglLfUPLxVduUor3h0rfp2TYvpivk37929TkG037hffoX0+peVtZQc1589rigVUdXS/ABSAyEmGIO/1XfvldSK8vs3OqB6u3m0nxmIrvgB0dj7rr7Y9IbuF68hnfFaiHA/sxqm0wciIG43P60qKv9WXWc1RXGh/mFESFABTSBi0sNAKzqet17eCtOb3kZIDwxEEU0oAIJGYxNBDhBND29e0rtXXbcpuPmED9IhEAAQ/AXEaF8EPmnrrKsv0LvWR3fg5sWDNAFZOgAgaKvZDogHNU9MFwnnYROkc56RD5CjAbQX9Ow4g7upCsvYu55aSI/Nj0H1akgKQEUM94dwK65hYRmFU9MIcH/fqJYOZYcnuJSU/waKDgTOEVaVKhwrTRP5XzgSpAITYzom7UvkhFX5VutmxeNnWDjjswTKTyfgluNDGbUpWissXhF3s7mlSml+czWkg3D0l1nNjGNjz3myOQOa1KM/jOS6ebdbAVTCi4gljHSFrviza7tOgRWcS0MOUX9zdNgag5w7rRqA44Lzw0hr1WqES36dFliSJFlh2rXIae3FFcDDgKdxrUIDePr8jGcSClV1u7A9xeN0ModY/pHMxmR1EzRh8TJiwqsHmKW0l4FCEZI+jHio+JdPPE9qwQtTRxku2D8sIeRL2LnxWSllANCQGOIiqVHAz2ye2JR0DcH+HoxDkaADLjgxjKQ+AwCX/g0+DNgdG0ukYCONAe+dbc2IAc6fwt1ARoDSezNHxV2Cmzwv3O6lDMV55edBGwGK9n1+x2F8EDfAGCxug8MhpsMEcTEAWf3rx2vZhe/LAmtIn/6apE6PN0ULKgywD9mmdxbmFl3OvD5AS5fW5zLbv/YHmcsBTjf/afDz3MaZTVCfAP9z6/Bw6ycv8EUBWJIn9zYcoAWWlW9+OzO3vkTy8H+RANLmdrpOuYWdZYEXpo+TlCJrW5EARb7fF+bWdqf3hhyZI1nWJQHgznErZhbjoEsWqi8dQNoE294aldzFurwSABL2XXMf9+H1VQGke9exw5P/AnA5Pv5ngMul7LOvO922iwACu8WkCwLCafvM4CeWPxfA8lNHcWZSoi8EwMAIciKX2Z4SWCMAa3snCZ/G4EA8D6CMLNFsGQhkkz/gQNEBbPCbWsxGUpYVu3z8IyNAknwJkfPMEhLyrdi5RTyUVACkw4GSFRNWJNEW+fgPGwHD8/JxnRuLabN4CGNRkAE23na2+VmEAUmrYymSGjMAYqH84YUIyzgzs3XC7gNgH36Vcc4zKY9o9fgPBXUAiHHwVboBHGLiX6Zcjp1f2wu4tvzZKo0ecPnDtQYDQvJXaBeNzce45Fp28ZQLrEZVuFqgBwOalArKXnW1UzlnSusQKJqKYNuz4tOnI6sZG4zanpemv+7ySU2jbA9h6uhcgpfy6G2PahirDZ6zvq6zDduMVFTKvzw8wgyEdelwY9in3XkEPs3osJuwRQ4qTkfzifndg9Gfc4pdsu82+tTnHZTBa2EAMrqr2t43pguc8tNm7JQVQ2S0ukj2d22dhXYP0/veWtwKrCkNoNimAN5+Xr/oLrxswKbVJjteWrX7eR63o4j9q0GxnaBdWgGA5VStpanIjQmEhV0/nVt5VOFUvix6awJhPcAaTEShgrG+iGyvb5a0Ndb1YGHFPEwoqAinoaykaID1o1pdPNu7XsnCKQ3R+hwWIIhGvORcJUBYXe3Xa3vq/mF/N9V13ugufMkfXn+KHsRD0B8AAAAASUVORK5CYII=" type="image/x-icon" />

    <script>
      window.enableWebSocket = ${escapeJson(enableWebSocket)};
    </script>
    ${getScript('viewer.js', mode)}
  </head>

  <body>
    <div id="app"></div>
    <script>
      window.chartData = ${escapeJson(chartData)};
      window.entrypoints = ${escapeJson(entrypoints)};
      window.defaultSizes = ${escapeJson(defaultSizes)};
    </script>
  </body>
</html>`;
}