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
        // Stats are diagnostic output and do not affect downstream tasks, so
        // CI does not need to participate in the Turbo input hash.

        // eslint-disable-next-line turbo/no-undeclared-env-vars
        generateStatsFile: process.env.CI,
        // Only include the data consumed by webpack-bundle-analyzer. The
        // default stats contain hundreds of MB of duplicate module metadata.
        statsOptions: {
          all: false,
          assets: true,
          children: true,
          chunkModules: false,
          chunks: true,
          entrypoints: true,
          ids: true,
          modules: true,
          nestedModules: true
        }
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
