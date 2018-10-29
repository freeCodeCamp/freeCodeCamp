"use strict"

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  // Let’s set up some string consts to use thoroughout the following.
  // MDN > JavaScript reference > Statements and declarations
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  // Maybe we usually redirect to page 2, with trailing slash.
  const page2Path = `/page-2/`
  // But sometimes to homepage.
  const homePath = `/`

  // One-off redirect, note trailing slash missing on fromPath and
  // toPath here.
  createRedirect({
    fromPath: `/page2`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/page-2`,
  })

  // Another one-off redirect, note trailing slash on toPath here.
  // This time we want trailing slash on toPath so we use
  // page2Path. Need to handle trailing-slashed and non-trailing-
  // slashed fromPaths separately, Gatsby serves page components
  // at either version by default, but we need to explicitly redirect
  // both versions independently, more on page components:
  // Docs > Building with Components
  // https://www.gatsbyjs.org/docs/building-with-components/
  // and handling trailing slashes:
  // Docs > Creating and modifying pages > Removing trailing slashes
  // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#removing-trailing-slashes
  createRedirect({
    fromPath: `/page2/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: page2Path,
  })

  // One approach to handle several redirects at once is to create an
  // array of from/to path pairs.
  let redirectBatch1 = [
    { f: `/orange`, t: `/` },
    // We could use homePath and page2Path directly here.
    { f: `/grape`, t: homePath },
    { f: `/blue`, t: page2Path },
    // or leave to empty and swap for page2Path later on.
    { f: `/randirect`, t: `` },
  ]

  // Then we can loop through the array of object literals to create
  // each redirect. A for loop would do the trick
  for (var { f: f, t: t } of redirectBatch1) {
    // Here we swap any empty toPath values for trusty page 2 via
    // page2Path.
    if (t === ``) {
      t = page2Path
    }
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see loop in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
    // or check .cache/redirects.json post-compile.
  }

  // A more modern approach might use forEach rather than for...of
  // Compare
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
  // and
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  let redirectBatch2 = [
    { f: `/juice`, t: `/` },
    { f: `/soda`, t: `/` },
    { f: `/donut`, t: page2Path },
    { f: `/randorect`, t: `` },
  ]

  redirectBatch2.forEach(({ f, t }) => {
    if (t === ``) {
      t = page2Path
    }
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
    // Uncomment next line to see forEach in action during build
    // console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
  })
}