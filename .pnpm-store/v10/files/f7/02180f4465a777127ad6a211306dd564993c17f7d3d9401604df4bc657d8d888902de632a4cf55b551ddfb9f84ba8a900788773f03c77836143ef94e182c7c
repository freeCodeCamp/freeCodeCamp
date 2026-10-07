'use strict'

const { test } = require('tap')
const randomstring = require('randomstring')
const fastDecode = require('./index')

const charset = 'abcdef_ghilmn%opqrstu-vzxywjk%ABCDEF_HGILMN%OPQRSTU-VZXYWJK%0123456789.-_~%'

test('Basic', t => {
  // base test
  const uri = [
    'test', 'a+b+c+d', '=a', '%25', '%%25%%', 'st%C3%A5le', 'st%C3%A5le%', '%st%C3%A5le%', '%%7Bst%C3%A5le%7D%',
    '%ab%C3%A5le%', '%C3%A5%able%', '%7B%ab%7C%de%7D', '%7B%ab%%7C%de%%7D', '%7 B%ab%%7C%de%%7 D', '%61+%4d%4D',
    '\uFEFFtest', '\uFEFF', '%EF%BB%BFtest', '%EF%BB%BF', '†', '%C2%B5', '%C2%B5%', '%%C2%B5%', '%ab', '%ab%ab%ab',
    '%', '%2', '%E0%A4%A', '/test/hel%"Flo', '/test/hel%2Flo'
  ]

  // random generated uri
  for (var i = 0; i < 20000; i++) {
    uri.push(randomstring.generate({ charset }))
  }

  for (i = 0; i < uri.length; i++) {
    try {
      t.strictEqual(decodeURIComponent(uri[i]), fastDecode(uri[i]))
    } catch (e) {
      t.strictEqual(fastDecode(uri[i]), null)
    }
  }

  t.end()
})
