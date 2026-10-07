'use strict'

const split = require('./')
const bench = require('fastbench')
const binarySplit = require('binary-split')
const fs = require('fs')

function benchSplit (cb) {
  fs.createReadStream('package.json')
    .pipe(split())
    .on('end', cb)
    .resume()
}

function benchBinarySplit (cb) {
  fs.createReadStream('package.json')
    .pipe(binarySplit())
    .on('end', cb)
    .resume()
}

const run = bench([
  benchSplit,
  benchBinarySplit
], 10000)

run(run)
