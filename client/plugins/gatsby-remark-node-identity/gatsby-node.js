exports.onCreateNode = function remarkNodeIdentityOnCreateNode(
  { node, reporter, actions },
  { predicate, identity }
) {
  if (typeof predicate !== 'function') {
    reporter.panic(
      'Please supply a predicate function to `gatsby-plugin-identity`'
    );
  }
  if (typeof identity !== 'string' || identity.length === 0) {
    reporter.panic(
      '`gatsby-plugin-identity` requires an identify string to add to nodes ' +
        'that match the predicate'
    );
  }
  const { createNodeField } = actions;
  if (predicate(node)) {
    createNodeField({ node, name: 'nodeIdentity', value: identity });
  }
  return node;
};
