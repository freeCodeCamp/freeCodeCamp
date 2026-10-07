/**
 * @import {HtmlOptions as Options} from 'micromark-extension-gfm-footnote'
 * @import {HtmlExtension} from 'micromark-util-types'
 */

import { normalizeIdentifier } from 'micromark-util-normalize-identifier';
import { sanitizeUri } from 'micromark-util-sanitize-uri';
const own = {}.hasOwnProperty;

/** @type {Options} */
const emptyOptions = {};

/**
 * Generate the default label that GitHub uses on backreferences.
 *
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Default label.
 */
export function defaultBackLabel(referenceIndex, rereferenceIndex) {
  return 'Back to reference ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '');
}

/**
 * Create an extension for `micromark` to support GFM footnotes when
 * serializing to HTML.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (optional).
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions` to
 *   support GFM footnotes when serializing to HTML.
 */
export function gfmFootnoteHtml(options) {
  const config = options || emptyOptions;
  const label = config.label || 'Footnotes';
  const labelTagName = config.labelTagName || 'h2';
  const labelAttributes = config.labelAttributes === null || config.labelAttributes === undefined ? 'class="sr-only"' : config.labelAttributes;
  const backLabel = config.backLabel || defaultBackLabel;
  const clobberPrefix = config.clobberPrefix === null || config.clobberPrefix === undefined ? 'user-content-' : config.clobberPrefix;
  return {
    enter: {
      gfmFootnoteDefinition() {
        const stack = this.getData('tightStack');
        stack.push(false);
      },
      gfmFootnoteDefinitionLabelString() {
        this.buffer();
      },
      gfmFootnoteCallString() {
        this.buffer();
      }
    },
    exit: {
      gfmFootnoteDefinition() {
        let definitions = this.getData('gfmFootnoteDefinitions');
        const footnoteStack = this.getData('gfmFootnoteDefinitionStack');
        const tightStack = this.getData('tightStack');
        const current = footnoteStack.pop();
        const value = this.resume();
        if (!definitions) {
          this.setData('gfmFootnoteDefinitions', definitions = {});
        }
        if (!own.call(definitions, current)) definitions[current] = value;
        tightStack.pop();
        this.setData('slurpOneLineEnding', true);
        // “Hack” to prevent a line ending from showing up if we’re in a definition in
        // an empty list item.
        this.setData('lastWasTag');
      },
      gfmFootnoteDefinitionLabelString(token) {
        let footnoteStack = this.getData('gfmFootnoteDefinitionStack');
        if (!footnoteStack) {
          this.setData('gfmFootnoteDefinitionStack', footnoteStack = []);
        }
        footnoteStack.push(normalizeIdentifier(this.sliceSerialize(token)));
        this.resume(); // Drop the label.
        this.buffer(); // Get ready for a value.
      },
      gfmFootnoteCallString(token) {
        let calls = this.getData('gfmFootnoteCallOrder');
        let counts = this.getData('gfmFootnoteCallCounts');
        const id = normalizeIdentifier(this.sliceSerialize(token));
        /** @type {number} */
        let counter;
        this.resume();
        if (!calls) this.setData('gfmFootnoteCallOrder', calls = []);
        if (!counts) this.setData('gfmFootnoteCallCounts', counts = {});
        const index = calls.indexOf(id);
        const safeId = sanitizeUri(id.toLowerCase());
        if (index === -1) {
          calls.push(id);
          counts[id] = 1;
          counter = calls.length;
        } else {
          counts[id]++;
          counter = index + 1;
        }
        const reuseCounter = counts[id];
        this.tag('<sup><a href="#' + clobberPrefix + 'fn-' + safeId + '" id="' + clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : '') + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(counter) + '</a></sup>');
      },
      null() {
        const calls = this.getData('gfmFootnoteCallOrder') || [];
        const counts = this.getData('gfmFootnoteCallCounts') || {};
        const definitions = this.getData('gfmFootnoteDefinitions') || {};
        let index = -1;
        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag('<section data-footnotes="" class="footnotes"><' + labelTagName + ' id="footnote-label"' + (labelAttributes ? ' ' + labelAttributes : '') + '>');
          this.raw(this.encode(label));
          this.tag('</' + labelTagName + '>');
          this.lineEndingIfNeeded();
          this.tag('<ol>');
        }
        while (++index < calls.length) {
          // Called definitions are always defined.
          const id = calls[index];
          const safeId = sanitizeUri(id.toLowerCase());
          let referenceIndex = 0;
          /** @type {Array<string>} */
          const references = [];
          while (++referenceIndex <= counts[id]) {
            references.push('<a href="#' + clobberPrefix + 'fnref-' + safeId + (referenceIndex > 1 ? '-' + referenceIndex : '') + '" data-footnote-backref="" aria-label="' + this.encode(typeof backLabel === 'string' ? backLabel : backLabel(index, referenceIndex)) + '" class="data-footnote-backref">↩' + (referenceIndex > 1 ? '<sup>' + referenceIndex + '</sup>' : '') + '</a>');
          }
          const reference = references.join(' ');
          let injected = false;
          this.lineEndingIfNeeded();
          this.tag('<li id="' + clobberPrefix + 'fn-' + safeId + '">');
          this.lineEndingIfNeeded();
          this.tag(definitions[id].replace(/<\/p>(?:\r?\n|\r)?$/, function ($0) {
            injected = true;
            return ' ' + reference + $0;
          }));
          if (!injected) {
            this.lineEndingIfNeeded();
            this.tag(reference);
          }
          this.lineEndingIfNeeded();
          this.tag('</li>');
        }
        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag('</ol>');
          this.lineEndingIfNeeded();
          this.tag('</section>');
        }
      }
    }
  };
}