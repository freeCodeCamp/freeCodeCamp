import { helpers, Observable } from 'rx';

const throwForJsHtml = {
  extname: /js|html/,
  throwers: [
    {
      name: 'multiline-comment',
      description: 'Detect if a JS multi-line comment is left open',
      thrower: function checkForComments({ content }) {
        const openingComments = content.match(/\/\*/gi);
        const closingComments = content.match(/\*\//gi);
        if (
          openingComments &&
          (!closingComments || openingComments.length > closingComments.length)
        ) {
          throw new Error('SyntaxError: Unfinished multi-line comment');
        }
      }
    }, {
      name: 'nested-jQuery',
      description: 'Nested dollar sign calls breaks browsers',
      detectUnsafeJQ: /\$\s*?\(\s*?\$\s*?\)/gi,
      thrower: function checkForNestedJquery({ content }) {
        if (content.match(this.detectUnsafeJQ)) {
          throw new Error('Unsafe $($)');
        }
      }
    }, {
      name: 'unfinished-function',
      description: 'lonely function keywords breaks browsers',
      detectFunctionCall: /function\s*?\(|function\s+\w+\s*?\(/gi,
      thower: function checkForUnfinishedFunction({ content: code }) {
        if (
          code.match(/function/g) &&
          !code.match(this.detectFunctionCall)
        ) {
          throw new Error(
            'SyntaxError: Unsafe or unfinished function declaration'
          );
        }
      }
    }, {
      name: 'unsafe console call',
      description: 'console call stops tests scripts from running',
      detectUnsafeConsoleCall: /if\s\(null\)\sconsole\.log\(1\);/gi,
      thrower: function checkForUnsafeConsole({ content }) {
        if (content.match(this.detectUnsafeConsoleCall)) {
          throw new Error('Invalid if (null) console.log(1); detected');
        }
      }
    }
  ]
};

export default function pretester() {
  const source = this;
  return source.map(file$ => file$.flatMap(file => {
    if (!throwForJsHtml.extname.test(file.extname)) {
      return Observable.just(file);
    }
    return Observable.from(throwForJsHtml.throwers)
      .flatMap(({ thrower }) => {
        try {
          let finalObs;
          const maybeObservableOrPromise = thrower(file);
          if (helpers.isPromise(maybeObservableOrPromise)) {
            finalObs = Observable.fromPromise(maybeObservableOrPromise);
          } else if (Observable.isObservable(maybeObservableOrPromise)) {
            finalObs = maybeObservableOrPromise;
          } else {
            finalObs = Observable.just(maybeObservableOrPromise);
          }
          return finalObs;
        } catch (err) {
          return Observable.throw(err);
        }
      })
      // if none of the throwers throw, wait for last one
      .last({ defaultValue: null })
      // then map to the original file
      .map(file)
      // if err add it to the file
      // and return file
      .catch(err => {
        file.error = err;
        return Observable.just(file);
      });
  }));
}
