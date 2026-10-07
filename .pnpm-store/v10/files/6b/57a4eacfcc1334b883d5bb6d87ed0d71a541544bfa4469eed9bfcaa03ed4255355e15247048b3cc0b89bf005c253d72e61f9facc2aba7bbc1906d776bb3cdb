'use strict';

/**
 * @typedef {import('../lib/types').Specificity} Specificity
 * @typedef {import('../lib/types').XastElement} XastElement
 * @typedef {import('../lib/types').XastParent} XastParent
 */

const csstree = require('css-tree');
// @ts-ignore not defined in @types/csso
const specificity = require('csso/lib/restructure/prepare/specificity');
const stable = require('stable');
const {
  visitSkip,
  querySelectorAll,
  detachNodeFromParent,
} = require('../lib/xast.js');

exports.type = 'visitor';
exports.name = 'inlineStyles';
exports.active = true;
exports.description = 'inline styles (additional options)';

/**
 * Compares two selector specificities.
 * extracted from https://github.com/keeganstreet/specificity/blob/master/specificity.js#L211
 *
 * @type {(a: Specificity, b: Specificity) => number}
 */
const compareSpecificity = (a, b) => {
  for (var i = 0; i < 4; i += 1) {
    if (a[i] < b[i]) {
      return -1;
    } else if (a[i] > b[i]) {
      return 1;
    }
  }
  return 0;
};

/**
 * Moves + merges styles from style elements to element styles
 *
 * Options
 *   onlyMatchedOnce (default: true)
 *     inline only selectors that match once
 *
 *   removeMatchedSelectors (default: true)
 *     clean up matched selectors,
 *     leave selectors that hadn't matched
 *
 *   useMqs (default: ['', 'screen'])
 *     what media queries to be used
 *     empty string element for styles outside media queries
 *
 *   usePseudos (default: [''])
 *     what pseudo-classes/-elements to be used
 *     empty string element for all non-pseudo-classes and/or -elements
 *
 * @author strarsis <strarsis@gmail.com>
 *
 * @type {import('../lib/types').Plugin<{
 *   onlyMatchedOnce?: boolean,
 *   removeMatchedSelectors?: boolean,
 *   useMqs?: Array<string>,
 *   usePseudos?: Array<string>
 * }>}
 */
exports.fn = (root, params) => {
  const {
    onlyMatchedOnce = true,
    removeMatchedSelectors = true,
    useMqs = ['', 'screen'],
    usePseudos = [''],
  } = params;

  /**
   * @type {Array<{ node: XastElement, parentNode: XastParent, cssAst: csstree.StyleSheet }>}
   */
  const styles = [];
  /**
   * @type {Array<{
   *   node: csstree.Selector,
   *   item: csstree.ListItem<csstree.CssNode>,
   *   rule: csstree.Rule,
   *   matchedElements?: Array<XastElement>
   * }>}
   */
  let selectors = [];

  return {
    element: {
      enter: (node, parentNode) => {
        // skip <foreignObject /> content
        if (node.name === 'foreignObject') {
          return visitSkip;
        }
        // collect only non-empty <style /> elements
        if (node.name !== 'style' || node.children.length === 0) {
          return;
        }
        // values other than the empty string or text/css are not used
        if (
          node.attributes.type != null &&
          node.attributes.type !== '' &&
          node.attributes.type !== 'text/css'
        ) {
          return;
        }
        // parse css in style element
        let cssText = '';
        for (const child of node.children) {
          if (child.type === 'text' || child.type === 'cdata') {
            cssText += child.value;
          }
        }
        /**
         * @type {null | csstree.CssNode}
         */
        let cssAst = null;
        try {
          cssAst = csstree.parse(cssText, {
            parseValue: false,
            parseCustomProperty: false,
          });
        } catch {
          return;
        }
        if (cssAst.type === 'StyleSheet') {
          styles.push({ node, parentNode, cssAst });
        }

        // collect selectors
        csstree.walk(cssAst, {
          visit: 'Selector',
          enter(node, item) {
            const atrule = this.atrule;
            const rule = this.rule;
            if (rule == null) {
              return;
            }

            // skip media queries not included into useMqs param
            let mq = '';
            if (atrule != null) {
              mq = atrule.name;
              if (atrule.prelude != null) {
                mq += ` ${csstree.generate(atrule.prelude)}`;
              }
            }
            if (useMqs.includes(mq) === false) {
              return;
            }

            /**
             * @type {Array<{
             *   item: csstree.ListItem<csstree.CssNode>,
             *   list: csstree.List<csstree.CssNode>
             * }>}
             */
            const pseudos = [];
            if (node.type === 'Selector') {
              node.children.each((childNode, childItem, childList) => {
                if (
                  childNode.type === 'PseudoClassSelector' ||
                  childNode.type === 'PseudoElementSelector'
                ) {
                  pseudos.push({ item: childItem, list: childList });
                }
              });
            }

            // skip pseudo classes and pseudo elements not includes into usePseudos param
            const pseudoSelectors = csstree.generate({
              type: 'Selector',
              children: new csstree.List().fromArray(
                pseudos.map((pseudo) => pseudo.item.data)
              ),
            });
            if (usePseudos.includes(pseudoSelectors) === false) {
              return;
            }

            // remove pseudo classes and elements to allow querySelector match elements
            // TODO this is not very accurate since some pseudo classes like first-child
            // are used for selection
            for (const pseudo of pseudos) {
              pseudo.list.remove(pseudo.item);
            }

            selectors.push({ node, item, rule });
          },
        });
      },
    },

    root: {
      exit: () => {
        if (styles.length === 0) {
          return;
        }
        // stable sort selectors
        const sortedSelectors = stable(selectors, (a, b) => {
          const aSpecificity = specificity(a.item.data);
          const bSpecificity = specificity(b.item.data);
          return compareSpecificity(aSpecificity, bSpecificity);
        }).reverse();

        for (const selector of sortedSelectors) {
          // match selectors
          const selectorText = csstree.generate(selector.item.data);
          /**
           * @type {Array<XastElement>}
           */
          const matchedElements = [];
          try {
            for (const node of querySelectorAll(root, selectorText)) {
              if (node.type === 'element') {
                matchedElements.push(node);
              }
            }
          } catch (selectError) {
            continue;
          }
          // nothing selected
          if (matchedElements.length === 0) {
            continue;
          }

          // apply styles to matched elements
          // skip selectors that match more than once if option onlyMatchedOnce is enabled
          if (onlyMatchedOnce && matchedElements.length > 1) {
            continue;
          }

          // apply <style/> to matched elements
          for (const selectedEl of matchedElements) {
            const styleDeclarationList = csstree.parse(
              selectedEl.attributes.style == null
                ? ''
                : selectedEl.attributes.style,
              {
                context: 'declarationList',
                parseValue: false,
              }
            );
            if (styleDeclarationList.type !== 'DeclarationList') {
              continue;
            }
            const styleDeclarationItems = new Map();
            csstree.walk(styleDeclarationList, {
              visit: 'Declaration',
              enter(node, item) {
                styleDeclarationItems.set(node.property, item);
              },
            });
            // merge declarations
            csstree.walk(selector.rule, {
              visit: 'Declaration',
              enter(ruleDeclaration) {
                // existing inline styles have higher priority
                // no inline styles, external styles,                                    external styles used
                // inline styles,    external styles same   priority as inline styles,   inline   styles used
                // inline styles,    external styles higher priority than inline styles, external styles used
                const matchedItem = styleDeclarationItems.get(
                  ruleDeclaration.property
                );
                const ruleDeclarationItem =
                  styleDeclarationList.children.createItem(ruleDeclaration);
                if (matchedItem == null) {
                  styleDeclarationList.children.append(ruleDeclarationItem);
                } else if (
                  matchedItem.data.important !== true &&
                  ruleDeclaration.important === true
                ) {
                  styleDeclarationList.children.replace(
                    matchedItem,
                    ruleDeclarationItem
                  );
                  styleDeclarationItems.set(
                    ruleDeclaration.property,
                    ruleDeclarationItem
                  );
                }
              },
            });
            selectedEl.attributes.style =
              csstree.generate(styleDeclarationList);
          }

          if (
            removeMatchedSelectors &&
            matchedElements.length !== 0 &&
            selector.rule.prelude.type === 'SelectorList'
          ) {
            // clean up matching simple selectors if option removeMatchedSelectors is enabled
            selector.rule.prelude.children.remove(selector.item);
          }
          selector.matchedElements = matchedElements;
        }

        // no further processing required
        if (removeMatchedSelectors === false) {
          return;
        }

        // clean up matched class + ID attribute values
        for (const selector of sortedSelectors) {
          if (selector.matchedElements == null) {
            continue;
          }

          if (onlyMatchedOnce && selector.matchedElements.length > 1) {
            // skip selectors that match more than once if option onlyMatchedOnce is enabled
            continue;
          }

          for (const selectedEl of selector.matchedElements) {
            // class
            const classList = new Set(
              selectedEl.attributes.class == null
                ? null
                : selectedEl.attributes.class.split(' ')
            );
            const firstSubSelector = selector.node.children.first();
            if (
              firstSubSelector != null &&
              firstSubSelector.type === 'ClassSelector'
            ) {
              classList.delete(firstSubSelector.name);
            }
            if (classList.size === 0) {
              delete selectedEl.attributes.class;
            } else {
              selectedEl.attributes.class = Array.from(classList).join(' ');
            }

            // ID
            if (
              firstSubSelector != null &&
              firstSubSelector.type === 'IdSelector'
            ) {
              if (selectedEl.attributes.id === firstSubSelector.name) {
                delete selectedEl.attributes.id;
              }
            }
          }
        }

        for (const style of styles) {
          csstree.walk(style.cssAst, {
            visit: 'Rule',
            enter: function (node, item, list) {
              // clean up <style/> rulesets without any css selectors left
              if (
                node.type === 'Rule' &&
                node.prelude.type === 'SelectorList' &&
                node.prelude.children.isEmpty()
              ) {
                list.remove(item);
              }
            },
          });

          if (style.cssAst.children.isEmpty()) {
            // remove emtpy style element
            detachNodeFromParent(style.node, style.parentNode);
          } else {
            // update style element if any styles left
            const firstChild = style.node.children[0];
            if (firstChild.type === 'text' || firstChild.type === 'cdata') {
              firstChild.value = csstree.generate(style.cssAst);
            }
          }
        }
      },
    },
  };
};
