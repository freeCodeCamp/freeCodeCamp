'use strict';

const hueToRgb = (t1, t2, hue) => {
  if (hue < 0) hue += 6;
  if (hue >= 6) hue -= 6;

  if (hue < 1) return (t2 - t1) * hue + t1;
  else if (hue < 3) return t2;
  else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
  else return t1;
};

// https://www.w3.org/TR/css-color-4/#hsl-to-rgb
exports.hslToRgb = (hue, sat, light) => {
  const t2 = light <= 0.5 ? light * (sat + 1) : light + sat - light * sat;
  const t1 = light * 2 - t2;
  const r = hueToRgb(t1, t2, hue + 2);
  const g = hueToRgb(t1, t2, hue);
  const b = hueToRgb(t1, t2, hue - 2);
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
