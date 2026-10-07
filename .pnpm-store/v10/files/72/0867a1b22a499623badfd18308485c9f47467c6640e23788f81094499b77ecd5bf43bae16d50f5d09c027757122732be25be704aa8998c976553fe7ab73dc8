/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal, ITerminalAddon } from '@xterm/xterm';

declare module '@xterm/addon-fit' {
  /**
   * An xterm.js addon that enables resizing the terminal to the dimensions of
   * its containing element.
   */
  export class FitAddon implements ITerminalAddon {
    /**
     * Creates a new fit addon.
     */
    constructor();

    /**
     * Activates the addon
     * @param terminal The terminal the addon is being loaded in.
     */
    public activate(terminal: Terminal): void;

    /**
     * Disposes the addon.
     */
    public dispose(): void;

    /**
     * Resizes the terminal to the dimensions of its containing element.
     */
    public fit(): void;

    /**
     * Gets the proposed dimensions that will be used for a fit.
     */
    public proposeDimensions(): ITerminalDimensions | undefined;
  }

  /**
   * Represents the dimensions of a terminal.
   */
  export interface ITerminalDimensions {
    /**
     * The number of rows in the terminal.
     */
    rows: number;

    /**
     * The number of columns in the terminal.
     */
    cols: number;
  }
}
