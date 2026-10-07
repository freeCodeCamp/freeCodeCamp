#!/usr/bin/env node
import { relative } from 'node:path';
import { defineCommand, runMain } from 'citty';
import { consola } from 'consola';
import { d as downloadTemplate, s as startShell } from './shared/giget.OCaTp9b-.mjs';
import 'node:fs/promises';
import 'node:fs';
import 'assert';
import 'path';
import 'events';
import 'stream';
import 'string_decoder';
import 'buffer';
import 'zlib';
import 'process';
import 'fs';
import 'util';
import 'crypto';
import 'pathe';
import 'defu';
import 'nypm';
import 'node:stream';
import 'node:child_process';
import 'node:os';
import 'node:util';
import 'node-fetch-native/proxy';

const name = "giget";
const version = "2.0.0";
const description = "Download templates and git repositories with pleasure!";
const pkg = {
	name: name,
	version: version,
	description: description};

const mainCommand = defineCommand({
  meta: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description
  },
  args: {
    // TODO: Make it `-t` in the next major version
    template: {
      type: "positional",
      description: "Template name or a a URI describing provider, repository, subdir, and branch/ref"
    },
    dir: {
      type: "positional",
      description: "A relative or absolute path where to extract the template",
      required: false
    },
    auth: {
      type: "string",
      description: "Custom Authorization token to use for downloading template. (Can be overriden with `GIGET_AUTH` environment variable)"
    },
    cwd: {
      type: "string",
      description: "Set current working directory to resolve dirs relative to it"
    },
    force: {
      type: "boolean",
      description: "Clone to existing directory even if exists"
    },
    forceClean: {
      type: "boolean",
      description: "Remove any existing directory or file recusively before cloning"
    },
    offline: {
      type: "boolean",
      description: "o not attempt to download and use cached version"
    },
    preferOffline: {
      type: "boolean",
      description: "Use cache if exists otherwise try to download"
    },
    shell: {
      type: "boolean",
      description: "Open a new shell with current working "
    },
    install: {
      type: "boolean",
      description: "Install dependencies after cloning"
    },
    verbose: {
      type: "boolean",
      description: "Show verbose debugging info"
    }
  },
  run: async ({ args }) => {
    if (args.verbose) {
      process.env.DEBUG = process.env.DEBUG || "true";
    }
    const r = await downloadTemplate(args.template, {
      dir: args.dir,
      force: args.force,
      forceClean: args.forceClean,
      offline: args.offline,
      preferOffline: args.preferOffline,
      auth: args.auth,
      install: args.install
    });
    const _from = r.name || r.url;
    const _to = relative(process.cwd(), r.dir) || "./";
    consola.log(`\u2728 Successfully cloned \`${_from}\` to \`${_to}\`
`);
    if (args.shell) {
      startShell(r.dir);
    }
  }
});
runMain(mainCommand);
