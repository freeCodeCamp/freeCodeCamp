'use strict';

const fs = require('fs');
const path = require('path');

const serveDir = fs.realpathSync('/opt/serve/node_modules/serve');
const serveHandlerDir = path.dirname(
  require.resolve('serve-handler/package.json', { paths: [serveDir] })
);
const minimatch = require(
  require.resolve('minimatch', { paths: [serveHandlerDir] })
);

const [configPath, treeDir, sampleArg] = process.argv.slice(2);
const sampleSize = Number(sampleArg || 200);
if (!Number.isInteger(sampleSize) || sampleSize < 1) {
  process.stderr.write(`sample must be a positive integer: ${sampleArg}\n`);
  process.exit(64);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const slasher = value => (value.startsWith('/') ? value : `/${value}`);
const encodePath = relative =>
  `/${relative.split('/').map(encodeURIComponent).join('/')}`;

const walk = (dir, prefix = '') =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .flatMap(entry => {
      const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
      return entry.isDirectory()
        ? walk(path.join(dir, entry.name), relative)
        : [relative];
    });

const files = walk(treeDir);
process.stderr.write(`files=${files.length}\n`);

const cleanUrl = relative => {
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) {
    return encodePath(relative.slice(0, -'/index.html'.length));
  }
  return encodePath(relative.slice(0, -'.html'.length));
};

const forFile = relative =>
  relative.endsWith('.html')
    ? [encodePath(relative), cleanUrl(relative)]
    : [encodePath(relative)];

const paramValues = ['x', 'y', 'z', 'w'];

const expandSource = source => {
  const segments = source.split('/');
  let used = 0;
  const filled = segments.map(segment => {
    const match = /^:(\w+)(\?)?$/.exec(segment);
    if (!match) return { text: segment, optional: false };
    const value = paramValues[used % paramValues.length];
    used += 1;
    return { text: value, optional: Boolean(match[2]) };
  });
  const firstOptional = filled.findIndex(segment => segment.optional);
  if (firstOptional === -1) return [filled.map(s => s.text).join('/')];
  const variants = [];
  for (let end = firstOptional; end <= filled.length; end += 1) {
    variants.push(
      filled
        .slice(0, end)
        .map(s => s.text)
        .join('/') || '/'
    );
  }
  return variants;
};

const fixed = [
  '/',
  '/serve.json',
  '/stats.json',
  '/camperbot',
  '/user/camperbot',
  '/settings/x',
  '/certification/x/y',
  '/no-such-path-parity',
  `/${'a'.repeat(255)}`,
  '//example.com/',
  '/%2F%2Fexample.com/'
];

const redirects = (config.redirects || []).flatMap(r => expandSource(r.source));

const rewrites = (config.rewrites || []).map(r =>
  r.source.replace(/\*\*$/, 'x/y').replace(/\*$/, 'x')
);

const headerClasses = (config.headers || []).flatMap(rule => {
  const pattern = slasher(rule.source);
  const hit = files.find(relative =>
    minimatch(path.posix.resolve(slasher(relative)), pattern)
  );
  if (!hit) {
    process.stderr.write(`no file matches header source ${rule.source}\n`);
    process.exitCode = 1;
    return [];
  }
  return forFile(hit);
});

const indexDir = files.find(
  relative => relative.includes('/') && relative.endsWith('/index.html')
);
const directory = indexDir
  ? (() => {
      const dir = encodePath(indexDir.slice(0, -'/index.html'.length));
      return [dir, `${dir}/`, `${dir}/index`, `${dir}/index.html`];
    })()
  : [];

const stride = Math.max(1, Math.ceil(files.length / sampleSize));
const sample = files
  .filter((_, index) => index % stride === 0)
  .flatMap(forFile);

const seen = new Set();
for (const url of [
  ...fixed,
  ...redirects,
  ...rewrites,
  ...headerClasses,
  ...directory,
  ...sample
]) {
  if (!seen.has(url)) {
    seen.add(url);
    process.stdout.write(`${url}\n`);
  }
}
