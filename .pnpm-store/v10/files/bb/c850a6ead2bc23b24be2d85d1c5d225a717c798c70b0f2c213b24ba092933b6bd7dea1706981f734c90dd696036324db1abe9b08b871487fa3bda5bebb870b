6.1.0 / 2020-10-31
------------------

- Add `finalEOL` option to disable writing final EOL ([#115](https://github.com/jprichardson/node-jsonfile/issues/115), [#137](https://github.com/jprichardson/node-jsonfile/pull/137))
- Update dependency ([#138](https://github.com/jprichardson/node-jsonfile/pull/138))

6.0.1 / 2020-03-07
------------------

- Update dependency ([#130](https://github.com/jprichardson/node-jsonfile/pull/130))
- Fix code style ([#129](https://github.com/jprichardson/node-jsonfile/pull/129))

6.0.0 / 2020-02-24
------------------

- **BREAKING:** Drop support for Node 6 & 8 ([#128](https://github.com/jprichardson/node-jsonfile/pull/128))
- **BREAKING:** Do not allow passing `null` as options to `readFile()` or `writeFile()` ([#128](https://github.com/jprichardson/node-jsonfile/pull/128))
- Refactor internals ([#128](https://github.com/jprichardson/node-jsonfile/pull/128))

5.0.0 / 2018-09-08
------------------

- **BREAKING:** Drop Node 4 support
- **BREAKING:** If no callback is passed to an asynchronous method, a promise is now returned ([#109](https://github.com/jprichardson/node-jsonfile/pull/109))
- Cleanup docs

4.0.0 / 2017-07-12
------------------

- **BREAKING:** Remove global `spaces` option.
- **BREAKING:** Drop support for Node 0.10, 0.12, and io.js.
- Remove undocumented `passParsingErrors` option.
- Added `EOL` override option to `writeFile` when using `spaces`. [#89]

3.0.1 / 2017-07-05
------------------

- Fixed bug in `writeFile` when there was a serialization error & no callback was passed. In previous versions, an empty file would be written; now no file is written.

3.0.0 / 2017-04-25
------------------

- Changed behavior of `throws` option for `readFileSync`; now does not throw filesystem errors when `throws` is `false`

2.4.0 / 2016-09-15
------------------
### Changed
- added optional support for `graceful-fs` [#62]

2.3.1 / 2016-05-13
------------------
- fix to support BOM. [#45][#45]

2.3.0 / 2016-04-16
------------------
- add `throws` to `readFile()`. See [#39][#39]
- add support for any arbitrary `fs` module. Useful with [mock-fs](https://www.npmjs.com/package/mock-fs)

2.2.3 / 2015-10-14
------------------
- include file name in parse error. See: https://github.com/jprichardson/node-jsonfile/pull/34

2.2.2 / 2015-09-16
------------------
- split out tests into separate files
- fixed `throws` when set to `true` in `readFileSync()`. See: https://github.com/jprichardson/node-jsonfile/pull/33

2.2.1 / 2015-06-25
------------------
- fixed regression when passing in string as encoding for options in `writeFile()` and `writeFileSync()`. See: https://github.com/jprichardson/node-jsonfile/issues/28

2.2.0 / 2015-06-25
------------------
- added `options.spaces` to `writeFile()` and `writeFileSync()`

2.1.2 / 2015-06-22
------------------
- fixed if passed `readFileSync(file, 'utf8')`. See: https://github.com/jprichardson/node-jsonfile/issues/25

2.1.1 / 2015-06-19
------------------
- fixed regressions if `null` is passed for options. See: https://github.com/jprichardson/node-jsonfile/issues/24

2.1.0 / 2015-06-19
------------------
- cleanup: JavaScript Standard Style, rename files, dropped terst for assert
- methods now support JSON revivers/replacers

2.0.1 / 2015-05-24
------------------
- update license attribute https://github.com/jprichardson/node-jsonfile/pull/21

2.0.0 / 2014-07-28
------------------
* added `\n` to end of file on write. [#14](https://github.com/jprichardson/node-jsonfile/pull/14)
* added `options.throws` to `readFileSync()`
* dropped support for Node v0.8

1.2.0 / 2014-06-29
------------------
* removed semicolons
* bugfix: passed `options` to `fs.readFile` and `fs.readFileSync`. This technically changes behavior, but
changes it according to docs. [#12][#12]

1.1.1 / 2013-11-11
------------------
* fixed catching of callback bug (ffissore / #5)

1.1.0 / 2013-10-11
------------------
* added `options` param to methods, (seanodell / #4)

1.0.1 / 2013-09-05
------------------
* removed `homepage` field from package.json to remove NPM warning

1.0.0 / 2013-06-28
------------------
* added `.npmignore`, #1
* changed spacing default from `4` to `2` to follow Node conventions

0.0.1 / 2012-09-10
------------------
* Initial release.

[#89]: https://github.com/jprichardson/node-jsonfile/pull/89
[#45]: https://github.com/jprichardson/node-jsonfile/issues/45    "Reading of UTF8-encoded (w/ BOM) files fails"
[#44]: https://github.com/jprichardson/node-jsonfile/issues/44    "Extra characters in written file"
[#43]: https://github.com/jprichardson/node-jsonfile/issues/43    "Prettyfy json when written to file"
[#42]: https://github.com/jprichardson/node-jsonfile/pull/42      "Moved fs.readFileSync within the try/catch"
[#41]: https://github.com/jprichardson/node-jsonfile/issues/41    "Linux: Hidden file not working"
[#40]: https://github.com/jprichardson/node-jsonfile/issues/40    "autocreate folder doesn't work from Path-value"
[#39]: https://github.com/jprichardson/node-jsonfile/pull/39      "Add `throws` option for readFile (async)"
[#38]: https://github.com/jprichardson/node-jsonfile/pull/38      "Update README.md writeFile[Sync] signature"
[#37]: https://github.com/jprichardson/node-jsonfile/pull/37      "support append file"
[#36]: https://github.com/jprichardson/node-jsonfile/pull/36      "Add typescript definition file."
[#35]: https://github.com/jprichardson/node-jsonfile/pull/35      "Add typescript definition file."
[#34]: https://github.com/jprichardson/node-jsonfile/pull/34      "readFile JSON parse error includes filename"
[#33]: https://github.com/jprichardson/node-jsonfile/pull/33      "fix throw->throws typo in readFileSync()"
[#32]: https://github.com/jprichardson/node-jsonfile/issues/32    "readFile & readFileSync can possible have strip-comments as an option?"
[#31]: https://github.com/jprichardson/node-jsonfile/pull/31      "[Modify] Support string include is unicode escape string"
[#30]: https://github.com/jprichardson/node-jsonfile/issues/30    "How to use Jsonfile package in Meteor.js App?"
[#29]: https://github.com/jprichardson/node-jsonfile/issues/29    "writefile callback if no error?"
[#28]: https://github.com/jprichardson/node-jsonfile/issues/28    "writeFile options argument broken "
[#27]: https://github.com/jprichardson/node-jsonfile/pull/27      "Use svg instead of png to get better image quality"
[#26]: https://github.com/jprichardson/node-jsonfile/issues/26    "Breaking change to fs-extra"
[#25]: https://github.com/jprichardson/node-jsonfile/issues/25    "support string encoding param for read methods"
[#24]: https://github.com/jprichardson/node-jsonfile/issues/24    "readFile: Passing in null options with a callback throws an error"
[#23]: https://github.com/jprichardson/node-jsonfile/pull/23      "Add appendFile and appendFileSync"
[#22]: https://github.com/jprichardson/node-jsonfile/issues/22    "Default value for spaces in readme.md is outdated"
[#21]: https://github.com/jprichardson/node-jsonfile/pull/21      "Update license attribute"
[#20]: https://github.com/jprichardson/node-jsonfile/issues/20    "Add simple caching functionallity"
[#19]: https://github.com/jprichardson/node-jsonfile/pull/19      "Add appendFileSync method"
[#18]: https://github.com/jprichardson/node-jsonfile/issues/18    "Add updateFile and updateFileSync methods"
[#17]: https://github.com/jprichardson/node-jsonfile/issues/17    "seem read & write sync has sequentially problem"
[#16]: https://github.com/jprichardson/node-jsonfile/pull/16      "export spaces defaulted to null"
[#15]: https://github.com/jprichardson/node-jsonfile/issues/15    "`jsonfile.spaces` should default to `null`"
[#14]: https://github.com/jprichardson/node-jsonfile/pull/14      "Add EOL at EOF"
[#13]: https://github.com/jprichardson/node-jsonfile/issues/13    "Add a final newline"
[#12]: https://github.com/jprichardson/node-jsonfile/issues/12    "readFile doesn't accept options"
[#11]: https://github.com/jprichardson/node-jsonfile/pull/11      "Added try,catch to readFileSync"
[#10]: https://github.com/jprichardson/node-jsonfile/issues/10    "No output or error from writeFile"
[#9]: https://github.com/jprichardson/node-jsonfile/pull/9        "Change 'js' to 'jf' in example."
[#8]: https://github.com/jprichardson/node-jsonfile/pull/8        "Updated forgotten module.exports to me."
[#7]: https://github.com/jprichardson/node-jsonfile/pull/7        "Add file name in error message"
[#6]: https://github.com/jprichardson/node-jsonfile/pull/6        "Use graceful-fs when possible"
[#5]: https://github.com/jprichardson/node-jsonfile/pull/5        "Jsonfile doesn't behave nicely when used inside a test suite."
[#4]: https://github.com/jprichardson/node-jsonfile/pull/4        "Added options parameter to writeFile and writeFileSync"
[#3]: https://github.com/jprichardson/node-jsonfile/issues/3      "test2"
[#2]: https://github.com/jprichardson/node-jsonfile/issues/2      "homepage field must be a string url. Deleted."
[#1]: https://github.com/jprichardson/node-jsonfile/pull/1        "adding an `.npmignore` file"
