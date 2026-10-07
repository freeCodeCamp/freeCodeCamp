'use strict';

/**
 * @typedef {import('../lib/types').XastElement} XastElement
 * @typedef {import('../lib/types').PathDataItem} PathDataItem
 */

const { parsePathData, stringifyPathData } = require('../lib/path.js');

/**
 * @type {[number, number]}
 */
var prevCtrlPoint;

/**
 * Convert path string to JS representation.
 *
 * @type {(path: XastElement) => Array<PathDataItem>}
 */
const path2js = (path) => {
  // @ts-ignore legacy
  if (path.pathJS) return path.pathJS;
  /**
   * @type {Array<PathDataItem>}
   */
  const pathData = []; // JS representation of the path data
  const newPathData = parsePathData(path.attributes.d);
  for (const { command, args } of newPathData) {
    pathData.push({ command, args });
  }
  // First moveto is actually absolute. Subsequent coordinates were separated above.
  if (pathData.length && pathData[0].command == 'm') {
    pathData[0].command = 'M';
  }
  // @ts-ignore legacy
  path.pathJS = pathData;
  return pathData;
};
exports.path2js = path2js;

/**
 * Convert relative Path data to absolute.
 *
 * @type {(data: Array<PathDataItem>) => Array<PathDataItem>}
 *
 */
const convertRelativeToAbsolute = (data) => {
  /**
   * @type {Array<PathDataItem>}
   */
  const newData = [];
  let start = [0, 0];
  let cursor = [0, 0];

  for (let { command, args } of data) {
    args = args.slice();

    // moveto (x y)
    if (command === 'm') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = 'M';
    }
    if (command === 'M') {
      cursor[0] = args[0];
      cursor[1] = args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }

    // horizontal lineto (x)
    if (command === 'h') {
      args[0] += cursor[0];
      command = 'H';
    }
    if (command === 'H') {
      cursor[0] = args[0];
    }

    // vertical lineto (y)
    if (command === 'v') {
      args[0] += cursor[1];
      command = 'V';
    }
    if (command === 'V') {
      cursor[1] = args[0];
    }

    // lineto (x y)
    if (command === 'l') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = 'L';
    }
    if (command === 'L') {
      cursor[0] = args[0];
      cursor[1] = args[1];
    }

    // curveto (x1 y1 x2 y2 x y)
    if (command === 'c') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      args[4] += cursor[0];
      args[5] += cursor[1];
      command = 'C';
    }
    if (command === 'C') {
      cursor[0] = args[4];
      cursor[1] = args[5];
    }

    // smooth curveto (x2 y2 x y)
    if (command === 's') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      command = 'S';
    }
    if (command === 'S') {
      cursor[0] = args[2];
      cursor[1] = args[3];
    }

    // quadratic Bézier curveto (x1 y1 x y)
    if (command === 'q') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      command = 'Q';
    }
    if (command === 'Q') {
      cursor[0] = args[2];
      cursor[1] = args[3];
    }

    // smooth quadratic Bézier curveto (x y)
    if (command === 't') {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = 'T';
    }
    if (command === 'T') {
      cursor[0] = args[0];
      cursor[1] = args[1];
    }

    // elliptical arc (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
    if (command === 'a') {
      args[5] += cursor[0];
      args[6] += cursor[1];
      command = 'A';
    }
    if (command === 'A') {
      cursor[0] = args[5];
      cursor[1] = args[6];
    }

    // closepath
    if (command === 'z' || command === 'Z') {
      cursor[0] = start[0];
      cursor[1] = start[1];
      command = 'z';
    }

    newData.push({ command, args });
  }
  return newData;
};

/**
 * @typedef {{ floatPrecision?: number, noSpaceAfterFlags?: boolean }} Js2PathParams
 */

/**
 * Convert path array to string.
 *
 * @type {(path: XastElement, data: Array<PathDataItem>, params: Js2PathParams) => void}
 */
exports.js2path = function (path, data, params) {
  // @ts-ignore legacy
  path.pathJS = data;

  const pathData = [];
  for (const item of data) {
    // remove moveto commands which are followed by moveto commands
    if (
      pathData.length !== 0 &&
      (item.command === 'M' || item.command === 'm')
    ) {
      const last = pathData[pathData.length - 1];
      if (last.command === 'M' || last.command === 'm') {
        pathData.pop();
      }
    }
    pathData.push({
      command: item.command,
      args: item.args,
    });
  }

  path.attributes.d = stringifyPathData({
    pathData,
    precision: params.floatPrecision,
    disableSpaceAfterFlags: params.noSpaceAfterFlags,
  });
};

/**
 * @type {(dest: Array<number>, source: Array<number>) => Array<number>}
 */
function set(dest, source) {
  dest[0] = source[source.length - 2];
  dest[1] = source[source.length - 1];
  return dest;
}

/**
 * Checks if two paths have an intersection by checking convex hulls
 * collision using Gilbert-Johnson-Keerthi distance algorithm
 * https://web.archive.org/web/20180822200027/http://entropyinteractive.com/2011/04/gjk-algorithm/
 *
 * @type {(path1: Array<PathDataItem>, path2: Array<PathDataItem>) => boolean}
 */
exports.intersects = function (path1, path2) {
  // Collect points of every subpath.
  const points1 = gatherPoints(convertRelativeToAbsolute(path1));
  const points2 = gatherPoints(convertRelativeToAbsolute(path2));

  // Axis-aligned bounding box check.
  if (
    points1.maxX <= points2.minX ||
    points2.maxX <= points1.minX ||
    points1.maxY <= points2.minY ||
    points2.maxY <= points1.minY ||
    points1.list.every((set1) => {
      return points2.list.every((set2) => {
        return (
          set1.list[set1.maxX][0] <= set2.list[set2.minX][0] ||
          set2.list[set2.maxX][0] <= set1.list[set1.minX][0] ||
          set1.list[set1.maxY][1] <= set2.list[set2.minY][1] ||
          set2.list[set2.maxY][1] <= set1.list[set1.minY][1]
        );
      });
    })
  )
    return false;

  // Get a convex hull from points of each subpath. Has the most complexity O(n·log n).
  const hullNest1 = points1.list.map(convexHull);
  const hullNest2 = points2.list.map(convexHull);

  // Check intersection of every subpath of the first path with every subpath of the second.
  return hullNest1.some(function (hull1) {
    if (hull1.list.length < 3) return false;

    return hullNest2.some(function (hull2) {
      if (hull2.list.length < 3) return false;

      var simplex = [getSupport(hull1, hull2, [1, 0])], // create the initial simplex
        direction = minus(simplex[0]); // set the direction to point towards the origin

      var iterations = 1e4; // infinite loop protection, 10 000 iterations is more than enough
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-constant-condition
        if (iterations-- == 0) {
          console.error(
            'Error: infinite loop while processing mergePaths plugin.'
          );
          return true; // true is the safe value that means “do nothing with paths”
        }
        // add a new point
        simplex.push(getSupport(hull1, hull2, direction));
        // see if the new point was on the correct side of the origin
        if (dot(direction, simplex[simplex.length - 1]) <= 0) return false;
        // process the simplex
        if (processSimplex(simplex, direction)) return true;
      }
    });
  });

  /**
   * @type {(a: Point, b: Point, direction: Array<number>) => Array<number>}
   */
  function getSupport(a, b, direction) {
    return sub(supportPoint(a, direction), supportPoint(b, minus(direction)));
  }

  // Computes farthest polygon point in particular direction.
  // Thanks to knowledge of min/max x and y coordinates we can choose a quadrant to search in.
  // Since we're working on convex hull, the dot product is increasing until we find the farthest point.
  /**
   * @type {(polygon: Point, direction: Array<number>) => Array<number>}
   */
  function supportPoint(polygon, direction) {
    var index =
        direction[1] >= 0
          ? direction[0] < 0
            ? polygon.maxY
            : polygon.maxX
          : direction[0] < 0
          ? polygon.minX
          : polygon.minY,
      max = -Infinity,
      value;
    while ((value = dot(polygon.list[index], direction)) > max) {
      max = value;
      index = ++index % polygon.list.length;
    }
    return polygon.list[(index || polygon.list.length) - 1];
  }
};

/**
 * @type {(simplex: Array<Array<number>>, direction: Array<number>) => boolean}
 */
function processSimplex(simplex, direction) {
  // we only need to handle to 1-simplex and 2-simplex
  if (simplex.length == 2) {
    // 1-simplex
    let a = simplex[1],
      b = simplex[0],
      AO = minus(simplex[1]),
      AB = sub(b, a);
    // AO is in the same direction as AB
    if (dot(AO, AB) > 0) {
      // get the vector perpendicular to AB facing O
      set(direction, orth(AB, a));
    } else {
      set(direction, AO);
      // only A remains in the simplex
      simplex.shift();
    }
  } else {
    // 2-simplex
    let a = simplex[2], // [a, b, c] = simplex
      b = simplex[1],
      c = simplex[0],
      AB = sub(b, a),
      AC = sub(c, a),
      AO = minus(a),
      ACB = orth(AB, AC), // the vector perpendicular to AB facing away from C
      ABC = orth(AC, AB); // the vector perpendicular to AC facing away from B

    if (dot(ACB, AO) > 0) {
      if (dot(AB, AO) > 0) {
        // region 4
        set(direction, ACB);
        simplex.shift(); // simplex = [b, a]
      } else {
        // region 5
        set(direction, AO);
        simplex.splice(0, 2); // simplex = [a]
      }
    } else if (dot(ABC, AO) > 0) {
      if (dot(AC, AO) > 0) {
        // region 6
        set(direction, ABC);
        simplex.splice(1, 1); // simplex = [c, a]
      } else {
        // region 5 (again)
        set(direction, AO);
        simplex.splice(0, 2); // simplex = [a]
      }
    } // region 7
    else return true;
  }
  return false;
}

/**
 * @type {(v: Array<number>) => Array<number>}
 */
function minus(v) {
  return [-v[0], -v[1]];
}

/**
 * @type {(v1: Array<number>, v2: Array<number>) => Array<number>}
 */
function sub(v1, v2) {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}

/**
 * @type {(v1: Array<number>, v2: Array<number>) => number}
 */
function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * @type {(v1: Array<number>, v2: Array<number>) => Array<number>}
 */
function orth(v, from) {
  var o = [-v[1], v[0]];
  return dot(o, minus(from)) < 0 ? minus(o) : o;
}

/**
 * @typedef {{
 *   list: Array<Array<number>>,
 *   minX: number,
 *   minY: number,
 *   maxX: number,
 *   maxY: number
 * }} Point
 */

/**
 * @typedef {{
 *   list: Array<Point>,
 *   minX: number,
 *   minY: number,
 *   maxX: number,
 *   maxY: number
 * }} Points
 */

/**
 * @type {(pathData: Array<PathDataItem>) => Points}
 */
function gatherPoints(pathData) {
  /**
   * @type {Points}
   */
  const points = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 };

  // Writes data about the extreme points on each axle
  /**
   * @type {(path: Point, point: Array<number>) => void}
   */
  const addPoint = (path, point) => {
    if (!path.list.length || point[1] > path.list[path.maxY][1]) {
      path.maxY = path.list.length;
      points.maxY = points.list.length
        ? Math.max(point[1], points.maxY)
        : point[1];
    }
    if (!path.list.length || point[0] > path.list[path.maxX][0]) {
      path.maxX = path.list.length;
      points.maxX = points.list.length
        ? Math.max(point[0], points.maxX)
        : point[0];
    }
    if (!path.list.length || point[1] < path.list[path.minY][1]) {
      path.minY = path.list.length;
      points.minY = points.list.length
        ? Math.min(point[1], points.minY)
        : point[1];
    }
    if (!path.list.length || point[0] < path.list[path.minX][0]) {
      path.minX = path.list.length;
      points.minX = points.list.length
        ? Math.min(point[0], points.minX)
        : point[0];
    }
    path.list.push(point);
  };

  for (let i = 0; i < pathData.length; i += 1) {
    const pathDataItem = pathData[i];
    let subPath =
      points.list.length === 0
        ? { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 }
        : points.list[points.list.length - 1];
    let prev = i === 0 ? null : pathData[i - 1];
    let basePoint =
      subPath.list.length === 0 ? null : subPath.list[subPath.list.length - 1];
    let data = pathDataItem.args;
    let ctrlPoint = basePoint;

    /**
     * @type {(n: number, i: number) => number}
     * TODO fix null hack
     */
    const toAbsolute = (n, i) => n + (basePoint == null ? 0 : basePoint[i % 2]);

    switch (pathDataItem.command) {
      case 'M':
        subPath = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 };
        points.list.push(subPath);
        break;

      case 'H':
        if (basePoint != null) {
          addPoint(subPath, [data[0], basePoint[1]]);
        }
        break;

      case 'V':
        if (basePoint != null) {
          addPoint(subPath, [basePoint[0], data[0]]);
        }
        break;

      case 'Q':
        addPoint(subPath, data.slice(0, 2));
        prevCtrlPoint = [data[2] - data[0], data[3] - data[1]]; // Save control point for shorthand
        break;

      case 'T':
        if (
          basePoint != null &&
          prev != null &&
          (prev.command == 'Q' || prev.command == 'T')
        ) {
          ctrlPoint = [
            basePoint[0] + prevCtrlPoint[0],
            basePoint[1] + prevCtrlPoint[1],
          ];
          addPoint(subPath, ctrlPoint);
          prevCtrlPoint = [data[0] - ctrlPoint[0], data[1] - ctrlPoint[1]];
        }
        break;

      case 'C':
        if (basePoint != null) {
          // Approximate quibic Bezier curve with middle points between control points
          addPoint(subPath, [
            0.5 * (basePoint[0] + data[0]),
            0.5 * (basePoint[1] + data[1]),
          ]);
        }
        addPoint(subPath, [
          0.5 * (data[0] + data[2]),
          0.5 * (data[1] + data[3]),
        ]);
        addPoint(subPath, [
          0.5 * (data[2] + data[4]),
          0.5 * (data[3] + data[5]),
        ]);
        prevCtrlPoint = [data[4] - data[2], data[5] - data[3]]; // Save control point for shorthand
        break;

      case 'S':
        if (
          basePoint != null &&
          prev != null &&
          (prev.command == 'C' || prev.command == 'S')
        ) {
          addPoint(subPath, [
            basePoint[0] + 0.5 * prevCtrlPoint[0],
            basePoint[1] + 0.5 * prevCtrlPoint[1],
          ]);
          ctrlPoint = [
            basePoint[0] + prevCtrlPoint[0],
            basePoint[1] + prevCtrlPoint[1],
          ];
        }
        if (ctrlPoint != null) {
          addPoint(subPath, [
            0.5 * (ctrlPoint[0] + data[0]),
            0.5 * (ctrlPoint[1] + data[1]),
          ]);
        }
        addPoint(subPath, [
          0.5 * (data[0] + data[2]),
          0.5 * (data[1] + data[3]),
        ]);
        prevCtrlPoint = [data[2] - data[0], data[3] - data[1]];
        break;

      case 'A':
        if (basePoint != null) {
          // Convert the arc to bezier curves and use the same approximation
          // @ts-ignore no idea what's going on here
          var curves = a2c.apply(0, basePoint.concat(data));
          for (
            var cData;
            (cData = curves.splice(0, 6).map(toAbsolute)).length;

          ) {
            if (basePoint != null) {
              addPoint(subPath, [
                0.5 * (basePoint[0] + cData[0]),
                0.5 * (basePoint[1] + cData[1]),
              ]);
            }
            addPoint(subPath, [
              0.5 * (cData[0] + cData[2]),
              0.5 * (cData[1] + cData[3]),
            ]);
            addPoint(subPath, [
              0.5 * (cData[2] + cData[4]),
              0.5 * (cData[3] + cData[5]),
            ]);
            if (curves.length) addPoint(subPath, (basePoint = cData.slice(-2)));
          }
        }
        break;
    }

    // Save final command coordinates
    if (data.length >= 2) addPoint(subPath, data.slice(-2));
  }

  return points;
}

/**
 * Forms a convex hull from set of points of every subpath using monotone chain convex hull algorithm.
 * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain
 *
 * @type {(points: Point) => Point}
 */
function convexHull(points) {
  points.list.sort(function (a, b) {
    return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  var lower = [],
    minY = 0,
    bottom = 0;
  for (let i = 0; i < points.list.length; i++) {
    while (
      lower.length >= 2 &&
      cross(lower[lower.length - 2], lower[lower.length - 1], points.list[i]) <=
        0
    ) {
      lower.pop();
    }
    if (points.list[i][1] < points.list[minY][1]) {
      minY = i;
      bottom = lower.length;
    }
    lower.push(points.list[i]);
  }

  var upper = [],
    maxY = points.list.length - 1,
    top = 0;
  for (let i = points.list.length; i--; ) {
    while (
      upper.length >= 2 &&
      cross(upper[upper.length - 2], upper[upper.length - 1], points.list[i]) <=
        0
    ) {
      upper.pop();
    }
    if (points.list[i][1] > points.list[maxY][1]) {
      maxY = i;
      top = upper.length;
    }
    upper.push(points.list[i]);
  }

  // last points are equal to starting points of the other part
  upper.pop();
  lower.pop();

  const hullList = lower.concat(upper);

  /**
   * @type {Point}
   */
  const hull = {
    list: hullList,
    minX: 0, // by sorting
    maxX: lower.length,
    minY: bottom,
    maxY: (lower.length + top) % hullList.length,
  };

  return hull;
}

/**
 * @type {(o: Array<number>, a: Array<number>, b: Array<number>) => number}
 */
function cross(o, a, b) {
  return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

/**
 * Based on code from Snap.svg (Apache 2 license). http://snapsvg.io/
 * Thanks to Dmitry Baranovskiy for his great work!
 *
 * @type {(
 *  x1: number,
 *  y1: number,
 *  rx: number,
 *  ry: number,
 *  angle: number,
 *  large_arc_flag: number,
 *  sweep_flag: number,
 *  x2: number,
 *  y2: number,
 *  recursive: Array<number>
 * ) => Array<number>}
 */
const a2c = (
  x1,
  y1,
  rx,
  ry,
  angle,
  large_arc_flag,
  sweep_flag,
  x2,
  y2,
  recursive
) => {
  // for more information of where this Math came from visit:
  // https://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
  const _120 = (Math.PI * 120) / 180;
  const rad = (Math.PI / 180) * (+angle || 0);
  /**
   * @type {Array<number>}
   */
  let res = [];
  /**
   * @type {(x: number, y: number, rad: number) => number}
   */
  const rotateX = (x, y, rad) => {
    return x * Math.cos(rad) - y * Math.sin(rad);
  };
  /**
   * @type {(x: number, y: number, rad: number) => number}
   */
  const rotateY = (x, y, rad) => {
    return x * Math.sin(rad) + y * Math.cos(rad);
  };
  if (!recursive) {
    x1 = rotateX(x1, y1, -rad);
    y1 = rotateY(x1, y1, -rad);
    x2 = rotateX(x2, y2, -rad);
    y2 = rotateY(x2, y2, -rad);
    var x = (x1 - x2) / 2,
      y = (y1 - y2) / 2;
    var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
    if (h > 1) {
      h = Math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }
    var rx2 = rx * rx;
    var ry2 = ry * ry;
    var k =
      (large_arc_flag == sweep_flag ? -1 : 1) *
      Math.sqrt(
        Math.abs(
          (rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)
        )
      );
    var cx = (k * rx * y) / ry + (x1 + x2) / 2;
    var cy = (k * -ry * x) / rx + (y1 + y2) / 2;
    var f1 = Math.asin(Number(((y1 - cy) / ry).toFixed(9)));
    var f2 = Math.asin(Number(((y2 - cy) / ry).toFixed(9)));

    f1 = x1 < cx ? Math.PI - f1 : f1;
    f2 = x2 < cx ? Math.PI - f2 : f2;
    f1 < 0 && (f1 = Math.PI * 2 + f1);
    f2 < 0 && (f2 = Math.PI * 2 + f2);
    if (sweep_flag && f1 > f2) {
      f1 = f1 - Math.PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - Math.PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }
  var df = f2 - f1;
  if (Math.abs(df) > _120) {
    var f2old = f2,
      x2old = x2,
      y2old = y2;
    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * Math.cos(f2);
    y2 = cy + ry * Math.sin(f2);
    res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [
      f2,
      f2old,
      cx,
      cy,
    ]);
  }
  df = f2 - f1;
  var c1 = Math.cos(f1),
    s1 = Math.sin(f1),
    c2 = Math.cos(f2),
    s2 = Math.sin(f2),
    t = Math.tan(df / 4),
    hx = (4 / 3) * rx * t,
    hy = (4 / 3) * ry * t,
    m = [
      -hx * s1,
      hy * c1,
      x2 + hx * s2 - x1,
      y2 - hy * c2 - y1,
      x2 - x1,
      y2 - y1,
    ];
  if (recursive) {
    return m.concat(res);
  } else {
    res = m.concat(res);
    var newres = [];
    for (var i = 0, n = res.length; i < n; i++) {
      newres[i] =
        i % 2
          ? rotateY(res[i - 1], res[i], rad)
          : rotateX(res[i], res[i + 1], rad);
    }
    return newres;
  }
};
