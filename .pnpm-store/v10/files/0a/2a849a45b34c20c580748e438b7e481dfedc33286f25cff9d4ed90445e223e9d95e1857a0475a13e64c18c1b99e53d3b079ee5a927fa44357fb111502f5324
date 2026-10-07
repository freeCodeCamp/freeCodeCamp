// Imported from DefinitelyTyped project.
// TypeScript definitions for ansi-colors
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Integrated by: Jordan Mele <https://github.com/Silic0nS0ldier>

interface SymbolsType {
  /**
   * `undefined` on windows, `✘` on other platforms.
   */
  ballotCross?: "✘";
  ballotDisabled: "☒";
  ballotOff: "☐";
  ballotOn: "☑";
  bullet: "•";
  bulletWhite: "◦";
  /**
   * `√` on windows, `✔` on other platforms.
   */
  check: "√" | "✔";
  /**
   * `×` on windows, `✖` on other platforms.
   */
  cross: "×" | "✖";
  /**
   * `...` on windows, `⋯` on other platforms.
   */
  ellipsisLarge: "..." | "⋯";
  /**
   * `...` on windows, `…` on other platforms.
   */
  ellipsis: "..." | "…";
  fullBlock: "█";
  heart: "❤";
  identicalTo: "≡";
  info: "i" | "ℹ";
  line: "─";
  mark: "※";
  middot: "·";
  minus: "－";
  multiplication: "×";
  obelus: "÷";
  pencilDownRight: "✎";
  pencilRight: "✏";
  pencilUpRight: "✐";
  percent: "%";
  pilcrow2: "❡";
  pilcrow: "¶";
  plusMinus: "±";
  /**
   * `>` on windows, `▸` on linux, and `❯` on other platforms.
   */
  pointer: ">" | "▸" | "❯";
  /**
   * `»` on windows, `‣` on linux, and `›` on other platforms.
   */
  pointerSmall: "»" | "‣" | "›";
  question: "?";
  /**
   * `undefined` on windows, `？` on other platforms.
   */
  questionFull?: "？";
  /**
   * `?` on windows, `﹖` on other platforms.
   */
  questionSmall: "?" | "﹖";
  /**
   * `( )` on windows, `◯` on other platforms.
   */
  radioOff: "( )" | "◯";
  /**
   * `(*)` on windows, `◉` on other platforms.
   */
  radioOn: "(*)" | "◉";
  section: "§";
  starsOff: "☆";
  starsOn: "★";
  upDownArrow: "↕";
  /**
   * `‼` on windows, `⚠` on other platforms.
   */
  warning: "‼" | "⚠";
}

type StyleArrayStructure = [number, number];
interface StyleArrayProperties {
  open: string;
  close: string;
  closeRe: string;
}

type StyleType = StyleArrayStructure & StyleArrayProperties;


interface StylesType<T> {
  // modifiers
  reset: T;
  bold: T;
  dim: T;
  italic: T;
  underline: T;
  inverse: T;
  hidden: T;
  strikethrough: T;

  // colors
  black: T;
  red: T;
  green: T;
  yellow: T;
  blue: T;
  magenta: T;
  cyan: T;
  white: T;
  gray: T;
  grey: T;

  // bright colors
  blackBright: T;
  redBright: T;
  greenBright: T;
  yellowBright: T;
  blueBright: T;
  magentaBright: T;
  cyanBright: T;
  whiteBright: T;

  // background colors
  bgBlack: T;
  bgRed: T;
  bgGreen: T;
  bgYellow: T;
  bgBlue: T;
  bgMagenta: T;
  bgCyan: T;
  bgWhite: T;

  // bright background colors
  bgBlackBright: T;
  bgRedBright: T;
  bgGreenBright: T;
  bgYellowBright: T;
  bgBlueBright: T;
  bgMagentaBright: T;
  bgCyanBright: T;
  bgWhiteBright: T;
}

declare namespace ansiColors {
  interface StyleFunction extends StylesType<StyleFunction> {
    (s: string): string;
  }

  // modifiers
  const reset: StyleFunction;
  const bold: StyleFunction;
  const dim: StyleFunction;
  const italic: StyleFunction;
  const underline: StyleFunction;
  const inverse: StyleFunction;
  const hidden: StyleFunction;
  const strikethrough: StyleFunction;

  // colors
  const black: StyleFunction;
  const red: StyleFunction;
  const green: StyleFunction;
  const yellow: StyleFunction;
  const blue: StyleFunction;
  const magenta: StyleFunction;
  const cyan: StyleFunction;
  const white: StyleFunction;
  const gray: StyleFunction;
  const grey: StyleFunction;

  // bright colors
  const blackBright: StyleFunction;
  const redBright: StyleFunction;
  const greenBright: StyleFunction;
  const yellowBright: StyleFunction;
  const blueBright: StyleFunction;
  const magentaBright: StyleFunction;
  const cyanBright: StyleFunction;
  const whiteBright: StyleFunction;

  // background colors
  const bgBlack: StyleFunction;
  const bgRed: StyleFunction;
  const bgGreen: StyleFunction;
  const bgYellow: StyleFunction;
  const bgBlue: StyleFunction;
  const bgMagenta: StyleFunction;
  const bgCyan: StyleFunction;
  const bgWhite: StyleFunction;

  // bright background colors
  const bgBlackBright: StyleFunction;
  const bgRedBright: StyleFunction;
  const bgGreenBright: StyleFunction;
  const bgYellowBright: StyleFunction;
  const bgBlueBright: StyleFunction;
  const bgMagentaBright: StyleFunction;
  const bgCyanBright: StyleFunction;
  const bgWhiteBright: StyleFunction;

  let enabled: boolean;
  let visible: boolean;
  const ansiRegex: RegExp;

  /**
   * Remove styles from string
   */
  function stripColor(s: string): string;

  /**
   * Remove styles from string
   */
  function strip(s: string): string;

  /**
   * Remove styles from string
   */
  function unstyle(s: string): string;

  const styles: StylesType<StyleType>;
  const symbols: SymbolsType;

  /**
   * Outputs a string with check-symbol as prefix
   */
  function ok(...args: string[]): string;

  function create(): typeof ansiColors;
}

export = ansiColors;
