import path from 'path';
import type { GatsbyConfig } from 'gatsby';

import envData from './config/env.json';
import {
  buildChallenges,
  replaceChallengeNodes,
  localeChallengesRootDir
} from './utils/build-challenges';
import { pathPrefix } from './utils/gatsby/path-prefix';

const { homeLocation } = envData;

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false
  },
  trailingSlash: 'ignore',
  siteMetadata: {
    title: 'freeCodeCamp',
    siteUrl: homeLocation
  },
  pathPrefix: pathPrefix,
  plugins: [
    'gatsby-plugin-pnpm-gatsby-5',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'disabled',
        // It doesn't matter if the file is generated or not as far as caching
        // is concerned. It doesn't affect any tasks in any way, so we can
        // ignore it.

        // eslint-disable-next-line turbo/no-undeclared-env-vars
        generateStatsFile: process.env.CI
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js')
        }
      }
    },
    {
      resolve: path.resolve(
        __dirname,
        '../tools/client-plugins/gatsby-source-challenges'
      ),
      options: {
        name: 'challenges',
        source: buildChallenges,
        onSourceChange: replaceChallengeNodes(),
        curriculumPath: localeChallengesRootDir
      }
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: 'schema.gql',
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT === 'true'
      }
    }
  ]
};

export default config;
