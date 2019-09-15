import unified from 'unified';
import htmlParse from 'rehype-dom-parse';
import { select } from 'hast-util-select';
import visit from 'unist-util-visit';

import { CssValidator } from './css';
import { concatStyleTags } from './utils';

export class HtmlValidator {
  constructor(html) {
    this.domAst = unified()
      .use(htmlParse)
      .parse(html, (err, ast) => {
        if (err) {
          throw new Error(err);
        }
        return ast;
      });

    this.css = null;
    unified()
      .use(concatStyleTags)
      .run(this.domAst, {}, (err, _, file) => {
        if (err) {
          throw new Error(err);
        }
        this.css = new CssValidator(file.data.css);
      });
  }

  domNodeExists = selector => {
    const element = this.getDomElement(selector);
    return !!element;
  };

  elementHasText = (selector, testText = '') => {
    const element = this.getDomElement(selector);
    const elementText = this.extractTextForNodeType('text', element);
    return new RegExp(testText, 'i').test(elementText);
  };

  domHasComments = () => {
    const commentText = this.extractTextForNodeType('comment');
    return !!commentText;
  };

  domCommentsHasText = (testText = '') => {
    const comments = this.extractTextForNodeType('comment');
    return new RegExp(testText, 'i').test(comments);
  };

  extractTextForNodeType = (nodeType, tree = this.domAst) => {
    let nodeText = '';
    visit(
      tree,
      ({ type }) => type === nodeType,
      ({ value }) => (nodeText = nodeText.concat(value))
    );
    return nodeText;
  };

  getDomElement = selector => select(selector, this.domAst);

  getCssValidator = () => this.css;
}
