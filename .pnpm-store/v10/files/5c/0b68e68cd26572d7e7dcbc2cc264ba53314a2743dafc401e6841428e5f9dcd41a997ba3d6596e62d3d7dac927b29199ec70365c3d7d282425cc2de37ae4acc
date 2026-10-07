'use strict';

const { collectStylesheet, computeStyle } = require('../lib/style.js');
const { pathElems } = require('./_collections.js');
const { path2js, js2path } = require('./_path.js');
const { applyTransforms } = require('./_applyTransforms.js');
const { cleanupOutData } = require('../lib/svgo/tools');

exports.name = 'convertPathData';
exports.type = 'visitor';
exports.active = true;
exports.description =
  'optimizes path data: writes in shorter form, applies transformations';

exports.params = {
  applyTransforms: true,
  applyTransformsStroked: true,
  makeArcs: {
    threshold: 2.5, // coefficient of rounding error
    tolerance: 0.5, // percentage of radius
  },
  straightCurves: true,
  lineShorthands: true,
  curveSmoothShorthands: true,
  floatPrecision: 3,
  transformPrecision: 5,
  removeUseless: true,
  collapseRepeated: true,
  utilizeAbsolute: true,
  leadingZero: true,
  negativeExtraSpace: true,
  noSpaceAfterFlags: false, // a20 60 45 0 1 30 20 → a20 60 45 0130 20
  forceAbsolutePath: false,
};

let roundData;
let precision;
let error;
let arcThreshold;
let arcTolerance;

/**
 * Convert absolute Path to relative,
 * collapse repeated instructions,
 * detect and convert Lineto shorthands,
 * remove useless instructions like "l0,0",
 * trim useless delimiters and leading zeros,
 * decrease accuracy of floating-point numbers.
 *
 * @see https://www.w3.org/TR/SVG11/paths.html#PathData
 *
 * @param {Object} item current iteration item
 * @param {Object} params plugin params
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.fn = (root, params) => {
  const stylesheet = collectStylesheet(root);
  return {
    element: {
      enter: (node) => {
        if (pathElems.includes(node.name) && node.attributes.d != null) {
          const computedStyle = computeStyle(stylesheet, node);
          precision = params.floatPrecision;
          error =
            precision !== false
              ? +Math.pow(0.1, precision).toFixed(precision)
              : 1e-2;
          roundData = precision > 0 && precision < 20 ? strongRound : round;
          if (params.makeArcs) {
            arcThreshold = params.makeArcs.threshold;
            arcTolerance = params.makeArcs.tolerance;
          }
          const hasMarkerMid = computedStyle['marker-mid'] != null;

          const maybeHasStroke =
            computedStyle.stroke &&
            (computedStyle.stroke.type === 'dynamic' ||
              computedStyle.stroke.value !== 'none');
          const maybeHasLinecap =
            computedStyle['stroke-linecap'] &&
            (computedStyle['stroke-linecap'].type === 'dynamic' ||
              computedStyle['stroke-linecap'].value !== 'butt');
          const maybeHasStrokeAndLinecap = maybeHasStroke && maybeHasLinecap;

          var data = path2js(node);

          // TODO: get rid of functions returns
          if (data.length) {
            if (params.applyTransforms) {
              applyTransforms(node, data, params);
            }

            convertToRelative(data);

            data = filters(data, params, {
              maybeHasStrokeAndLinecap,
              hasMarkerMid,
            });

            if (params.utilizeAbsolute) {
              data = convertToMixed(data, params);
            }

            js2path(node, data, params);
          }
        }
      },
    },
  };
};

/**
 * Convert absolute path data coordinates to relative.
 *
 * @param {Array} path input path data
 * @param {Object} params plugin params
 * @return {Array} output path data
 */
const convertToRelative = (pathData) => {
  let start = [0, 0];
  let cursor = [0, 0];
  let prevCoords = [0, 0];

  for (let i = 0; i < pathData.length; i += 1) {
    const pathItem = pathData[i];
    let { command, args } = pathItem;

    // moveto (x y)
    if (command === 'm') {
      // update start and cursor
      cursor[0] += args[0];
      cursor[1] += args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }
    if (command === 'M') {
      // M → m
      // skip first moveto
      if (i !== 0) {
        command = 'm';
      }
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      // update start and cursor
      cursor[0] += args[0];
      cursor[1] += args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }

    // lineto (x y)
    if (command === 'l') {
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === 'L') {
      // L → l
      command = 'l';
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      cursor[0] += args[0];
      cursor[1] += args[1];
    }

    // horizontal lineto (x)
    if (command === 'h') {
      cursor[0] += args[0];
    }
    if (command === 'H') {
      // H → h
      command = 'h';
      args[0] -= cursor[0];
      cursor[0] += args[0];
    }

    // vertical lineto (y)
    if (command === 'v') {
      cursor[1] += args[0];
    }
    if (command === 'V') {
      // V → v
      command = 'v';
      args[0] -= cursor[1];
      cursor[1] += args[0];
    }

    // curveto (x1 y1 x2 y2 x y)
    if (command === 'c') {
      cursor[0] += args[4];
      cursor[1] += args[5];
    }
    if (command === 'C') {
      // C → c
      command = 'c';
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      args[4] -= cursor[0];
      args[5] -= cursor[1];
      cursor[0] += args[4];
      cursor[1] += args[5];
    }

    // smooth curveto (x2 y2 x y)
    if (command === 's') {
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === 'S') {
      // S → s
      command = 's';
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      cursor[0] += args[2];
      cursor[1] += args[3];
    }

    // quadratic Bézier curveto (x1 y1 x y)
    if (command === 'q') {
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === 'Q') {
      // Q → q
      command = 'q';
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      cursor[0] += args[2];
      cursor[1] += args[3];
    }

    // smooth quadratic Bézier curveto (x y)
    if (command === 't') {
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === 'T') {
      // T → t
      command = 't';
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      cursor[0] += args[0];
      cursor[1] += args[1];
    }

    // elliptical arc (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
    if (command === 'a') {
      cursor[0] += args[5];
      cursor[1] += args[6];
    }
    if (command === 'A') {
      // A → a
      command = 'a';
      args[5] -= cursor[0];
      args[6] -= cursor[1];
      cursor[0] += args[5];
      cursor[1] += args[6];
    }

    // closepath
    if (command === 'Z' || command === 'z') {
      // reset cursor
      cursor[0] = start[0];
      cursor[1] = start[1];
    }

    pathItem.command = command;
    pathItem.args = args;
    // store absolute coordinates for later use
    // base should preserve reference from other element
    pathItem.base = prevCoords;
    pathItem.coords = [cursor[0], cursor[1]];
    prevCoords = pathItem.coords;
  }

  return pathData;
};

/**
 * Main filters loop.
 *
 * @param {Array} path input path data
 * @param {Object} params plugin params
 * @return {Array} output path data
 */
function filters(path, params, { maybeHasStrokeAndLinecap, hasMarkerMid }) {
  var stringify = data2Path.bind(null, params),
    relSubpoint = [0, 0],
    pathBase = [0, 0],
    prev = {};

  path = path.filter(function (item, index, path) {
    let command = item.command;
    let data = item.args;
    let next = path[index + 1];

    if (command !== 'Z' && command !== 'z') {
      var sdata = data,
        circle;

      if (command === 's') {
        sdata = [0, 0].concat(data);

        if (command === 'c' || command === 's') {
          var pdata = prev.args,
            n = pdata.length;

          // (-x, -y) of the prev tangent point relative to the current point
          sdata[0] = pdata[n - 2] - pdata[n - 4];
          sdata[1] = pdata[n - 1] - pdata[n - 3];
        }
      }

      // convert curves to arcs if possible
      if (
        params.makeArcs &&
        (command == 'c' || command == 's') &&
        isConvex(sdata) &&
        (circle = findCircle(sdata))
      ) {
        var r = roundData([circle.radius])[0],
          angle = findArcAngle(sdata, circle),
          sweep = sdata[5] * sdata[0] - sdata[4] * sdata[1] > 0 ? 1 : 0,
          arc = {
            command: 'a',
            args: [r, r, 0, 0, sweep, sdata[4], sdata[5]],
            coords: item.coords.slice(),
            base: item.base,
          },
          output = [arc],
          // relative coordinates to adjust the found circle
          relCenter = [
            circle.center[0] - sdata[4],
            circle.center[1] - sdata[5],
          ],
          relCircle = { center: relCenter, radius: circle.radius },
          arcCurves = [item],
          hasPrev = 0,
          suffix = '',
          nextLonghand;

        if (
          (prev.command == 'c' &&
            isConvex(prev.args) &&
            isArcPrev(prev.args, circle)) ||
          (prev.command == 'a' && prev.sdata && isArcPrev(prev.sdata, circle))
        ) {
          arcCurves.unshift(prev);
          arc.base = prev.base;
          arc.args[5] = arc.coords[0] - arc.base[0];
          arc.args[6] = arc.coords[1] - arc.base[1];
          var prevData = prev.command == 'a' ? prev.sdata : prev.args;
          var prevAngle = findArcAngle(prevData, {
            center: [
              prevData[4] + circle.center[0],
              prevData[5] + circle.center[1],
            ],
            radius: circle.radius,
          });
          angle += prevAngle;
          if (angle > Math.PI) arc.args[3] = 1;
          hasPrev = 1;
        }

        // check if next curves are fitting the arc
        for (
          var j = index;
          (next = path[++j]) && ~'cs'.indexOf(next.command);

        ) {
          var nextData = next.args;
          if (next.command == 's') {
            nextLonghand = makeLonghand(
              { command: 's', args: next.args.slice() },
              path[j - 1].args
            );
            nextData = nextLonghand.args;
            nextLonghand.args = nextData.slice(0, 2);
            suffix = stringify([nextLonghand]);
          }
          if (isConvex(nextData) && isArc(nextData, relCircle)) {
            angle += findArcAngle(nextData, relCircle);
            if (angle - 2 * Math.PI > 1e-3) break; // more than 360°
            if (angle > Math.PI) arc.args[3] = 1;
            arcCurves.push(next);
            if (2 * Math.PI - angle > 1e-3) {
              // less than 360°
              arc.coords = next.coords;
              arc.args[5] = arc.coords[0] - arc.base[0];
              arc.args[6] = arc.coords[1] - arc.base[1];
            } else {
              // full circle, make a half-circle arc and add a second one
              arc.args[5] = 2 * (relCircle.center[0] - nextData[4]);
              arc.args[6] = 2 * (relCircle.center[1] - nextData[5]);
              arc.coords = [
                arc.base[0] + arc.args[5],
                arc.base[1] + arc.args[6],
              ];
              arc = {
                command: 'a',
                args: [
                  r,
                  r,
                  0,
                  0,
                  sweep,
                  next.coords[0] - arc.coords[0],
                  next.coords[1] - arc.coords[1],
                ],
                coords: next.coords,
                base: arc.coords,
              };
              output.push(arc);
              j++;
              break;
            }
            relCenter[0] -= nextData[4];
            relCenter[1] -= nextData[5];
          } else break;
        }

        if ((stringify(output) + suffix).length < stringify(arcCurves).length) {
          if (path[j] && path[j].command == 's') {
            makeLonghand(path[j], path[j - 1].args);
          }
          if (hasPrev) {
            var prevArc = output.shift();
            roundData(prevArc.args);
            relSubpoint[0] += prevArc.args[5] - prev.args[prev.args.length - 2];
            relSubpoint[1] += prevArc.args[6] - prev.args[prev.args.length - 1];
            prev.command = 'a';
            prev.args = prevArc.args;
            item.base = prev.coords = prevArc.coords;
          }
          arc = output.shift();
          if (arcCurves.length == 1) {
            item.sdata = sdata.slice(); // preserve curve data for future checks
          } else if (arcCurves.length - 1 - hasPrev > 0) {
            // filter out consumed next items
            path.splice.apply(
              path,
              [index + 1, arcCurves.length - 1 - hasPrev].concat(output)
            );
          }
          if (!arc) return false;
          command = 'a';
          data = arc.args;
          item.coords = arc.coords;
        }
      }

      // Rounding relative coordinates, taking in account accummulating error
      // to get closer to absolute coordinates. Sum of rounded value remains same:
      // l .25 3 .25 2 .25 3 .25 2 -> l .3 3 .2 2 .3 3 .2 2
      if (precision !== false) {
        if (
          command === 'm' ||
          command === 'l' ||
          command === 't' ||
          command === 'q' ||
          command === 's' ||
          command === 'c'
        ) {
          for (var i = data.length; i--; ) {
            data[i] += item.base[i % 2] - relSubpoint[i % 2];
          }
        } else if (command == 'h') {
          data[0] += item.base[0] - relSubpoint[0];
        } else if (command == 'v') {
          data[0] += item.base[1] - relSubpoint[1];
        } else if (command == 'a') {
          data[5] += item.base[0] - relSubpoint[0];
          data[6] += item.base[1] - relSubpoint[1];
        }
        roundData(data);

        if (command == 'h') relSubpoint[0] += data[0];
        else if (command == 'v') relSubpoint[1] += data[0];
        else {
          relSubpoint[0] += data[data.length - 2];
          relSubpoint[1] += data[data.length - 1];
        }
        roundData(relSubpoint);

        if (command === 'M' || command === 'm') {
          pathBase[0] = relSubpoint[0];
          pathBase[1] = relSubpoint[1];
        }
      }

      // convert straight curves into lines segments
      if (params.straightCurves) {
        if (
          (command === 'c' && isCurveStraightLine(data)) ||
          (command === 's' && isCurveStraightLine(sdata))
        ) {
          if (next && next.command == 's') makeLonghand(next, data); // fix up next curve
          command = 'l';
          data = data.slice(-2);
        } else if (command === 'q' && isCurveStraightLine(data)) {
          if (next && next.command == 't') makeLonghand(next, data); // fix up next curve
          command = 'l';
          data = data.slice(-2);
        } else if (
          command === 't' &&
          prev.command !== 'q' &&
          prev.command !== 't'
        ) {
          command = 'l';
          data = data.slice(-2);
        } else if (command === 'a' && (data[0] === 0 || data[1] === 0)) {
          command = 'l';
          data = data.slice(-2);
        }
      }

      // horizontal and vertical line shorthands
      // l 50 0 → h 50
      // l 0 50 → v 50
      if (params.lineShorthands && command === 'l') {
        if (data[1] === 0) {
          command = 'h';
          data.pop();
        } else if (data[0] === 0) {
          command = 'v';
          data.shift();
        }
      }

      // collapse repeated commands
      // h 20 h 30 -> h 50
      if (
        params.collapseRepeated &&
        hasMarkerMid === false &&
        (command === 'm' || command === 'h' || command === 'v') &&
        prev.command &&
        command == prev.command.toLowerCase() &&
        ((command != 'h' && command != 'v') ||
          prev.args[0] >= 0 == data[0] >= 0)
      ) {
        prev.args[0] += data[0];
        if (command != 'h' && command != 'v') {
          prev.args[1] += data[1];
        }
        prev.coords = item.coords;
        path[index] = prev;
        return false;
      }

      // convert curves into smooth shorthands
      if (params.curveSmoothShorthands && prev.command) {
        // curveto
        if (command === 'c') {
          // c + c → c + s
          if (
            prev.command === 'c' &&
            data[0] === -(prev.args[2] - prev.args[4]) &&
            data[1] === -(prev.args[3] - prev.args[5])
          ) {
            command = 's';
            data = data.slice(2);
          }

          // s + c → s + s
          else if (
            prev.command === 's' &&
            data[0] === -(prev.args[0] - prev.args[2]) &&
            data[1] === -(prev.args[1] - prev.args[3])
          ) {
            command = 's';
            data = data.slice(2);
          }

          // [^cs] + c → [^cs] + s
          else if (
            prev.command !== 'c' &&
            prev.command !== 's' &&
            data[0] === 0 &&
            data[1] === 0
          ) {
            command = 's';
            data = data.slice(2);
          }
        }

        // quadratic Bézier curveto
        else if (command === 'q') {
          // q + q → q + t
          if (
            prev.command === 'q' &&
            data[0] === prev.args[2] - prev.args[0] &&
            data[1] === prev.args[3] - prev.args[1]
          ) {
            command = 't';
            data = data.slice(2);
          }

          // t + q → t + t
          else if (
            prev.command === 't' &&
            data[2] === prev.args[0] &&
            data[3] === prev.args[1]
          ) {
            command = 't';
            data = data.slice(2);
          }
        }
      }

      // remove useless non-first path segments
      if (params.removeUseless && !maybeHasStrokeAndLinecap) {
        // l 0,0 / h 0 / v 0 / q 0,0 0,0 / t 0,0 / c 0,0 0,0 0,0 / s 0,0 0,0
        if (
          (command === 'l' ||
            command === 'h' ||
            command === 'v' ||
            command === 'q' ||
            command === 't' ||
            command === 'c' ||
            command === 's') &&
          data.every(function (i) {
            return i === 0;
          })
        ) {
          path[index] = prev;
          return false;
        }

        // a 25,25 -30 0,1 0,0
        if (command === 'a' && data[5] === 0 && data[6] === 0) {
          path[index] = prev;
          return false;
        }
      }

      item.command = command;
      item.args = data;

      prev = item;
    } else {
      // z resets coordinates
      relSubpoint[0] = pathBase[0];
      relSubpoint[1] = pathBase[1];
      if (prev.command === 'Z' || prev.command === 'z') return false;
      prev = item;
    }

    return true;
  });

  return path;
}

/**
 * Writes data in shortest form using absolute or relative coordinates.
 *
 * @param {Array} data input path data
 * @return {Boolean} output
 */
function convertToMixed(path, params) {
  var prev = path[0];

  path = path.filter(function (item, index) {
    if (index == 0) return true;
    if (item.command === 'Z' || item.command === 'z') {
      prev = item;
      return true;
    }

    var command = item.command,
      data = item.args,
      adata = data.slice();

    if (
      command === 'm' ||
      command === 'l' ||
      command === 't' ||
      command === 'q' ||
      command === 's' ||
      command === 'c'
    ) {
      for (var i = adata.length; i--; ) {
        adata[i] += item.base[i % 2];
      }
    } else if (command == 'h') {
      adata[0] += item.base[0];
    } else if (command == 'v') {
      adata[0] += item.base[1];
    } else if (command == 'a') {
      adata[5] += item.base[0];
      adata[6] += item.base[1];
    }

    roundData(adata);

    var absoluteDataStr = cleanupOutData(adata, params),
      relativeDataStr = cleanupOutData(data, params);

    // Convert to absolute coordinates if it's shorter or forceAbsolutePath is true.
    // v-20 -> V0
    // Don't convert if it fits following previous command.
    // l20 30-10-50 instead of l20 30L20 30
    if (
      params.forceAbsolutePath ||
      (absoluteDataStr.length < relativeDataStr.length &&
        !(
          params.negativeExtraSpace &&
          command == prev.command &&
          prev.command.charCodeAt(0) > 96 &&
          absoluteDataStr.length == relativeDataStr.length - 1 &&
          (data[0] < 0 ||
            (/^0\./.test(data[0]) && prev.args[prev.args.length - 1] % 1))
        ))
    ) {
      item.command = command.toUpperCase();
      item.args = adata;
    }

    prev = item;

    return true;
  });

  return path;
}

/**
 * Checks if curve is convex. Control points of such a curve must form
 * a convex quadrilateral with diagonals crosspoint inside of it.
 *
 * @param {Array} data input path data
 * @return {Boolean} output
 */
function isConvex(data) {
  var center = getIntersection([
    0,
    0,
    data[2],
    data[3],
    data[0],
    data[1],
    data[4],
    data[5],
  ]);

  return (
    center &&
    data[2] < center[0] == center[0] < 0 &&
    data[3] < center[1] == center[1] < 0 &&
    data[4] < center[0] == center[0] < data[0] &&
    data[5] < center[1] == center[1] < data[1]
  );
}

/**
 * Computes lines equations by two points and returns their intersection point.
 *
 * @param {Array} coords 8 numbers for 4 pairs of coordinates (x,y)
 * @return {Array|undefined} output coordinate of lines' crosspoint
 */
function getIntersection(coords) {
  // Prev line equation parameters.
  var a1 = coords[1] - coords[3], // y1 - y2
    b1 = coords[2] - coords[0], // x2 - x1
    c1 = coords[0] * coords[3] - coords[2] * coords[1], // x1 * y2 - x2 * y1
    // Next line equation parameters
    a2 = coords[5] - coords[7], // y1 - y2
    b2 = coords[6] - coords[4], // x2 - x1
    c2 = coords[4] * coords[7] - coords[5] * coords[6], // x1 * y2 - x2 * y1
    denom = a1 * b2 - a2 * b1;

  if (!denom) return; // parallel lines havn't an intersection

  var cross = [(b1 * c2 - b2 * c1) / denom, (a1 * c2 - a2 * c1) / -denom];
  if (
    !isNaN(cross[0]) &&
    !isNaN(cross[1]) &&
    isFinite(cross[0]) &&
    isFinite(cross[1])
  ) {
    return cross;
  }
}

/**
 * Decrease accuracy of floating-point numbers
 * in path data keeping a specified number of decimals.
 * Smart rounds values like 2.3491 to 2.35 instead of 2.349.
 * Doesn't apply "smartness" if the number precision fits already.
 *
 * @param {Array} data input data array
 * @return {Array} output data array
 */
function strongRound(data) {
  for (var i = data.length; i-- > 0; ) {
    if (data[i].toFixed(precision) != data[i]) {
      var rounded = +data[i].toFixed(precision - 1);
      data[i] =
        +Math.abs(rounded - data[i]).toFixed(precision + 1) >= error
          ? +data[i].toFixed(precision)
          : rounded;
    }
  }
  return data;
}

/**
 * Simple rounding function if precision is 0.
 *
 * @param {Array} data input data array
 * @return {Array} output data array
 */
function round(data) {
  for (var i = data.length; i-- > 0; ) {
    data[i] = Math.round(data[i]);
  }
  return data;
}

/**
 * Checks if a curve is a straight line by measuring distance
 * from middle points to the line formed by end points.
 *
 * @param {Array} xs array of curve points x-coordinates
 * @param {Array} ys array of curve points y-coordinates
 * @return {Boolean}
 */

function isCurveStraightLine(data) {
  // Get line equation a·x + b·y + c = 0 coefficients a, b (c = 0) by start and end points.
  var i = data.length - 2,
    a = -data[i + 1], // y1 − y2 (y1 = 0)
    b = data[i], // x2 − x1 (x1 = 0)
    d = 1 / (a * a + b * b); // same part for all points

  if (i <= 1 || !isFinite(d)) return false; // curve that ends at start point isn't the case

  // Distance from point (x0, y0) to the line is sqrt((c − a·x0 − b·y0)² / (a² + b²))
  while ((i -= 2) >= 0) {
    if (Math.sqrt(Math.pow(a * data[i] + b * data[i + 1], 2) * d) > error)
      return false;
  }

  return true;
}

/**
 * Converts next curve from shorthand to full form using the current curve data.
 *
 * @param {Object} item curve to convert
 * @param {Array} data current curve data
 */

function makeLonghand(item, data) {
  switch (item.command) {
    case 's':
      item.command = 'c';
      break;
    case 't':
      item.command = 'q';
      break;
  }
  item.args.unshift(
    data[data.length - 2] - data[data.length - 4],
    data[data.length - 1] - data[data.length - 3]
  );
  return item;
}

/**
 * Returns distance between two points
 *
 * @param {Array} point1 first point coordinates
 * @param {Array} point2 second point coordinates
 * @return {Number} distance
 */

function getDistance(point1, point2) {
  return Math.hypot(point1[0] - point2[0], point1[1] - point2[1]);
}

/**
 * Returns coordinates of the curve point corresponding to the certain t
 * a·(1 - t)³·p1 + b·(1 - t)²·t·p2 + c·(1 - t)·t²·p3 + d·t³·p4,
 * where pN are control points and p1 is zero due to relative coordinates.
 *
 * @param {Array} curve array of curve points coordinates
 * @param {Number} t parametric position from 0 to 1
 * @return {Array} Point coordinates
 */

function getCubicBezierPoint(curve, t) {
  var sqrT = t * t,
    cubT = sqrT * t,
    mt = 1 - t,
    sqrMt = mt * mt;

  return [
    3 * sqrMt * t * curve[0] + 3 * mt * sqrT * curve[2] + cubT * curve[4],
    3 * sqrMt * t * curve[1] + 3 * mt * sqrT * curve[3] + cubT * curve[5],
  ];
}

/**
 * Finds circle by 3 points of the curve and checks if the curve fits the found circle.
 *
 * @param {Array} curve
 * @return {Object|undefined} circle
 */

function findCircle(curve) {
  var midPoint = getCubicBezierPoint(curve, 1 / 2),
    m1 = [midPoint[0] / 2, midPoint[1] / 2],
    m2 = [(midPoint[0] + curve[4]) / 2, (midPoint[1] + curve[5]) / 2],
    center = getIntersection([
      m1[0],
      m1[1],
      m1[0] + m1[1],
      m1[1] - m1[0],
      m2[0],
      m2[1],
      m2[0] + (m2[1] - midPoint[1]),
      m2[1] - (m2[0] - midPoint[0]),
    ]),
    radius = center && getDistance([0, 0], center),
    tolerance = Math.min(arcThreshold * error, (arcTolerance * radius) / 100);

  if (
    center &&
    radius < 1e15 &&
    [1 / 4, 3 / 4].every(function (point) {
      return (
        Math.abs(
          getDistance(getCubicBezierPoint(curve, point), center) - radius
        ) <= tolerance
      );
    })
  )
    return { center: center, radius: radius };
}

/**
 * Checks if a curve fits the given circle.
 *
 * @param {Object} circle
 * @param {Array} curve
 * @return {Boolean}
 */

function isArc(curve, circle) {
  var tolerance = Math.min(
    arcThreshold * error,
    (arcTolerance * circle.radius) / 100
  );

  return [0, 1 / 4, 1 / 2, 3 / 4, 1].every(function (point) {
    return (
      Math.abs(
        getDistance(getCubicBezierPoint(curve, point), circle.center) -
          circle.radius
      ) <= tolerance
    );
  });
}

/**
 * Checks if a previous curve fits the given circle.
 *
 * @param {Object} circle
 * @param {Array} curve
 * @return {Boolean}
 */

function isArcPrev(curve, circle) {
  return isArc(curve, {
    center: [circle.center[0] + curve[4], circle.center[1] + curve[5]],
    radius: circle.radius,
  });
}

/**
 * Finds angle of a curve fitting the given arc.

 * @param {Array} curve
 * @param {Object} relCircle
 * @return {Number} angle
 */

function findArcAngle(curve, relCircle) {
  var x1 = -relCircle.center[0],
    y1 = -relCircle.center[1],
    x2 = curve[4] - relCircle.center[0],
    y2 = curve[5] - relCircle.center[1];

  return Math.acos(
    (x1 * x2 + y1 * y2) / Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
  );
}

/**
 * Converts given path data to string.
 *
 * @param {Object} params
 * @param {Array} pathData
 * @return {String}
 */

function data2Path(params, pathData) {
  return pathData.reduce(function (pathString, item) {
    var strData = '';
    if (item.args) {
      strData = cleanupOutData(roundData(item.args.slice()), params);
    }
    return pathString + item.command + strData;
  }, '');
}
