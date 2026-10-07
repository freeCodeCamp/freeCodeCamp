import * as prettyFormat from 'pretty-format'

export interface PrettyDOMOptions extends prettyFormat.OptionsReceived {
  /**
   * Given a `Node` return `false` if you wish to ignore that node in the output.
   * By default, ignores `<style />`, `<script />` and comment nodes.
   */
  filterNode?: (node: Node) => boolean
}

export function prettyDOM(
  dom?: Element | HTMLDocument,
  maxLength?: number,
  options?: PrettyDOMOptions,
): string | false
export function logDOM(
  dom?: Element | HTMLDocument,
  maxLength?: number,
  options?: PrettyDOMOptions,
): void
export {prettyFormat}
