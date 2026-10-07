var test = require('tape')
var rimraf = require('rimraf')
var tar = require('../index')
var tarStream = require('tar-stream')
var path = require('path')
var fs = require('fs')
var os = require('os')

var win32 = os.platform() === 'win32'

var mtime = function (st) {
  return Math.floor(st.mtime.getTime() / 1000)
}

test('copy a -> copy/a', function (t) {
  t.plan(5)

  var a = path.join(__dirname, 'fixtures', 'a')
  var b = path.join(__dirname, 'fixtures', 'copy', 'a')

  rimraf.sync(b)
  tar.pack(a)
    .pipe(tar.extract(b))
    .on('finish', function () {
      var files = fs.readdirSync(b)
      t.same(files.length, 1)
      t.same(files[0], 'hello.txt')
      var fileB = path.join(b, files[0])
      var fileA = path.join(a, files[0])
      t.same(fs.readFileSync(fileB, 'utf-8'), fs.readFileSync(fileA, 'utf-8'))
      t.same(fs.statSync(fileB).mode, fs.statSync(fileA).mode)
      t.same(mtime(fs.statSync(fileB)), mtime(fs.statSync(fileA)))
    })
})

test('copy b -> copy/b', function (t) {
  t.plan(8)

  var a = path.join(__dirname, 'fixtures', 'b')
  var b = path.join(__dirname, 'fixtures', 'copy', 'b')

  rimraf.sync(b)
  tar.pack(a)
    .pipe(tar.extract(b))
    .on('finish', function () {
      var files = fs.readdirSync(b)
      t.same(files.length, 1)
      t.same(files[0], 'a')
      var dirB = path.join(b, files[0])
      var dirA = path.join(a, files[0])
      t.same(fs.statSync(dirB).mode, fs.statSync(dirA).mode)
      t.same(mtime(fs.statSync(dirB)), mtime(fs.statSync(dirA)))
      t.ok(fs.statSync(dirB).isDirectory())
      var fileB = path.join(dirB, 'test.txt')
      var fileA = path.join(dirA, 'test.txt')
      t.same(fs.readFileSync(fileB, 'utf-8'), fs.readFileSync(fileA, 'utf-8'))
      t.same(fs.statSync(fileB).mode, fs.statSync(fileA).mode)
      t.same(mtime(fs.statSync(fileB)), mtime(fs.statSync(fileA)))
    })
})

test('symlink', function (t) {
  if (win32) { // no symlink support on win32 currently. TODO: test if this can be enabled somehow
    t.plan(1)
    t.ok(true)
    return
  }

  t.plan(5)

  var a = path.join(__dirname, 'fixtures', 'c')

  rimraf.sync(path.join(a, 'link'))
  fs.symlinkSync('.gitignore', path.join(a, 'link'))

  var b = path.join(__dirname, 'fixtures', 'copy', 'c')

  rimraf.sync(b)
  tar.pack(a)
    .pipe(tar.extract(b))
    .on('finish', function () {
      var files = fs.readdirSync(b).sort()
      t.same(files.length, 2)
      t.same(files[0], '.gitignore')
      t.same(files[1], 'link')

      var linkA = path.join(a, 'link')
      var linkB = path.join(b, 'link')

      t.same(mtime(fs.lstatSync(linkB)), mtime(fs.lstatSync(linkA)))
      t.same(fs.readlinkSync(linkB), fs.readlinkSync(linkA))
    })
})

test('follow symlinks', function (t) {
  if (win32) { // no symlink support on win32 currently. TODO: test if this can be enabled somehow
    t.plan(1)
    t.ok(true)
    return
  }

  t.plan(5)

  var a = path.join(__dirname, 'fixtures', 'c')

  rimraf.sync(path.join(a, 'link'))
  fs.symlinkSync('.gitignore', path.join(a, 'link'))

  var b = path.join(__dirname, 'fixtures', 'copy', 'c-dereference')

  rimraf.sync(b)
  tar.pack(a, { dereference: true })
    .pipe(tar.extract(b))
    .on('finish', function () {
      var files = fs.readdirSync(b).sort()
      t.same(files.length, 2)
      t.same(files[0], '.gitignore')
      t.same(files[1], 'link')

      var file1 = path.join(b, '.gitignore')
      var file2 = path.join(b, 'link')

      t.same(mtime(fs.lstatSync(file1)), mtime(fs.lstatSync(file2)))
      t.same(fs.readFileSync(file1), fs.readFileSync(file2))
    })
})

test('strip', function (t) {
  t.plan(2)

  var a = path.join(__dirname, 'fixtures', 'b')
  var b = path.join(__dirname, 'fixtures', 'copy', 'b-strip')

  rimraf.sync(b)

  tar.pack(a)
    .pipe(tar.extract(b, { strip: 1 }))
    .on('finish', function () {
      var files = fs.readdirSync(b).sort()
      t.same(files.length, 1)
      t.same(files[0], 'test.txt')
    })
})

test('strip + map', function (t) {
  t.plan(2)

  var a = path.join(__dirname, 'fixtures', 'b')
  var b = path.join(__dirname, 'fixtures', 'copy', 'b-strip')

  rimraf.sync(b)

  var uppercase = function (header) {
    header.name = header.name.toUpperCase()
    return header
  }

  tar.pack(a)
    .pipe(tar.extract(b, { strip: 1, map: uppercase }))
    .on('finish', function () {
      var files = fs.readdirSync(b).sort()
      t.same(files.length, 1)
      t.same(files[0], 'TEST.TXT')
    })
})

test('map + dir + permissions', function (t) {
  t.plan(win32 ? 1 : 2) // skip chmod test, it's not working like unix

  var a = path.join(__dirname, 'fixtures', 'b')
  var b = path.join(__dirname, 'fixtures', 'copy', 'a-perms')

  rimraf.sync(b)

  var aWithMode = function (header) {
    if (header.name === 'a') {
      header.mode = parseInt(700, 8)
    }
    return header
  }

  tar.pack(a)
    .pipe(tar.extract(b, { map: aWithMode }))
    .on('finish', function () {
      var files = fs.readdirSync(b).sort()
      var stat = fs.statSync(path.join(b, 'a'))
      t.same(files.length, 1)
      if (!win32) {
        t.same(stat.mode & parseInt(777, 8), parseInt(700, 8))
      }
    })
})

test('specific entries', function (t) {
  t.plan(6)

  var a = path.join(__dirname, 'fixtures', 'd')
  var b = path.join(__dirname, 'fixtures', 'copy', 'd-entries')

  var entries = ['file1', 'sub-files/file3', 'sub-dir']

  rimraf.sync(b)
  tar.pack(a, { entries: entries })
    .pipe(tar.extract(b))
    .on('finish', function () {
      var files = fs.readdirSync(b)
      t.same(files.length, 3)
      t.notSame(files.indexOf('file1'), -1)
      t.notSame(files.indexOf('sub-files'), -1)
      t.notSame(files.indexOf('sub-dir'), -1)
      var subFiles = fs.readdirSync(path.join(b, 'sub-files'))
      t.same(subFiles, ['file3'])
      var subDir = fs.readdirSync(path.join(b, 'sub-dir'))
      t.same(subDir, ['file5'])
    })
})

test('check type while mapping header on packing', function (t) {
  t.plan(3)

  var e = path.join(__dirname, 'fixtures', 'e')

  var checkHeaderType = function (header) {
    if (header.name.indexOf('.') === -1) t.same(header.type, header.name)
  }

  tar.pack(e, { map: checkHeaderType })
})

test('finish callbacks', function (t) {
  t.plan(3)

  var a = path.join(__dirname, 'fixtures', 'a')
  var b = path.join(__dirname, 'fixtures', 'copy', 'a')

  rimraf.sync(b)

  var packEntries = 0
  var extractEntries = 0

  var countPackEntry = function (header) { packEntries++ }
  var countExtractEntry = function (header) { extractEntries++ }

  var pack
  var onPackFinish = function (passedPack) {
    t.equal(packEntries, 2, 'All entries have been packed') // 2 entries - the file and base directory
    t.equal(passedPack, pack, 'The finish hook passes the pack')
  }

  var onExtractFinish = function () { t.equal(extractEntries, 2) }

  pack = tar.pack(a, { map: countPackEntry, finish: onPackFinish })

  pack.pipe(tar.extract(b, { map: countExtractEntry, finish: onExtractFinish }))
    .on('finish', function () {
      t.end()
    })
})

test('not finalizing the pack', function (t) {
  t.plan(2)

  var a = path.join(__dirname, 'fixtures', 'a')
  var b = path.join(__dirname, 'fixtures', 'b')

  var out = path.join(__dirname, 'fixtures', 'copy', 'merged-packs')

  rimraf.sync(out)

  var prefixer = function (prefix) {
    return function (header) {
      header.name = path.join(prefix, header.name)
      return header
    }
  }

  tar.pack(a, {
    map: prefixer('a-files'),
    finalize: false,
    finish: packB
  })

  function packB (pack) {
    tar.pack(b, { pack: pack, map: prefixer('b-files') })
      .pipe(tar.extract(out))
      .on('finish', assertResults)
  }

  function assertResults () {
    var containers = fs.readdirSync(out)
    t.deepEqual(containers, ['a-files', 'b-files'])
    var aFiles = fs.readdirSync(path.join(out, 'a-files'))
    t.deepEqual(aFiles, ['hello.txt'])
  }
})

test('do not extract invalid tar', function (t) {
  var a = path.join(__dirname, 'fixtures', 'invalid.tar')

  var out = path.join(__dirname, 'fixtures', 'invalid')

  rimraf.sync(out)

  fs.createReadStream(a)
    .pipe(tar.extract(out))
    .on('error', function (err) {
      t.ok(/is not a valid symlink/i.test(err.message))
      fs.stat(path.join(out, '../bar'), function (err) {
        t.ok(err)
        t.end()
      })
    })
})

test('no abs hardlink targets', function (t) {
  var out = path.join(__dirname, 'fixtures', 'invalid')
  var outside = path.join(__dirname, 'fixtures', 'outside')

  rimraf.sync(out)

  var s = tarStream.pack()

  fs.writeFileSync(outside, 'something')

  s.entry({
    type: 'link',
    name: 'link',
    linkname: outside
  })

  s.entry({
    name: 'link'
  }, 'overwrite')

  s.finalize()

  s.pipe(tar.extract(out))
    .on('error', function (err) {
      t.ok(err, 'had error')
      fs.readFile(outside, 'utf-8', function (err, str) {
        t.error(err, 'no error')
        t.same(str, 'something')
        t.end()
      })
    })
})
