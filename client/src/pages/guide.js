import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layouts/GuideLayout';

function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Guide | freeCodeCamp.org</title>
        <meta
          content='Short, concise guides and how-tos for the busy developer.'
          name='description'
        />
      </Helmet>
      <h2>freeCodeCamp Guide</h2>
      <p>
        {'This website is full of articles about all things related to ' +
          'programming. You can use the search bar above to find something ' +
          'you would like to learn about, or use the navigation to explore ' +
          'the content.'}
      </p>
      <p>There are articles on:</p>
      <ul>
        <li>SQL</li>
        <li>Mathematics</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Git</li>
        <li>and a whole lot more</li>
      </ul>
      <h3>Not sure where to start?</h3>
      <p>
        {"If you want to learn programming but you're not sure where to " +
          'start, check out '}
        <a
          href='https://freecodecamp.org'
          rel='noopener noreferrer'
          target='_blank'
          >
          freeCodeCamp.org
        </a>
        {'. It has a curriculum that starts from zero and helps you learn' +
          ' to code.'}
      </p>
      <h3>Contribute to the Guide</h3>
      <p>
        {'This site and the articles on it are '}
        <a
          href='https://github.com/freeCodeCamp/freeCodeCamp'
          rel='noopener noreferrer'
          target='_blank'
          >
          open source
        </a>
        {'. Your help in making it better is greatly appreciated!'}
      </p>
      <hr />
      <p>Happy coding!</p>
    </Layout>
  );
}

Index.displayName = 'IndexPage';

export default Index;
