exports.noPrebuilts = function (opts) {
  return new Error([
    'No prebuilt binaries found',
    '(target=' + opts.target,
    'runtime=' + opts.runtime,
    'arch=' + opts.arch,
    'libc=' + opts.libc,
    'platform=' + opts.platform + ')'
  ].join(' '))
}

exports.invalidArchive = function () {
  return new Error('Missing .node file in archive')
}
