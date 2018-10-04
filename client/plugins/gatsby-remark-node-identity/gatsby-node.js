exports.onCreateNode = ({ node, reporter }, { predicate, identity }) => {
  if (typeof predicate !== 'function') {
    reporter.panic(
      'Please supply a predicate function to `gatsby-plugin-identity`'
    );
  }
  if (typeof identity !== 'string' || identity.lenght === 0) {
    reporter.panic(
      '`gatsby-plugin-identity` requires an identify string to add to nodes ' +
        'that match the predicate'
    );
  }
  if (predicate(node)) {
    node.internal.identity = identity;
  }
};
