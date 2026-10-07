# Changelog

### Unreleased (`canary` & `dev` dist-tags)

 * feat: add options.filter ([#716](https://github.com/node-formidable/formidable/pull/716))
 * feat: add code and httpCode to most errors ([#686](https://github.com/node-formidable/formidable/pull/686))
 * rename: option.hash into option.hashAlgorithm ([#689](https://github.com/node-formidable/formidable/pull/689))
 * rename: file.path into file.filepath ([#689](https://github.com/node-formidable/formidable/pull/689))
 * rename: file.type into file.mimetype ([#689](https://github.com/node-formidable/formidable/pull/689))
 * refactor: split file.name into file.newFilename and file.originalFilename ([#689](https://github.com/node-formidable/formidable/pull/689))
 * feat: prevent directory traversal attacks by default ([#689](https://github.com/node-formidable/formidable/pull/689))
 * meta: stop including test files in npm ([7003c](https://github.com/node-formidable/formidable/commit/7003cd6133f90c384081accb51743688d5e1f4be))
 * fix: handle invalid filenames ([d0a34](https://github.com/node-formidable/formidable/commit/d0a3484b048b8c177e62d66aecb03f5928f7a857))
 * feat: add fileWriteStreamHandler option
 * feat: add allowEmptyFiles and minFileSize options
 * feat: Array support for fields and files ([#380](https://github.com/node-formidable/node-formidable/pull/380), [#340](https://github.com/node-formidable/node-formidable/pull/340), [#367](https://github.com/node-formidable/node-formidable/pull/367), [#33](https://github.com/node-formidable/node-formidable/issues/33), [#498](https://github.com/node-formidable/node-formidable/issues/498), [#280](https://github.com/node-formidable/node-formidable/issues/280), [#483](https://github.com/node-formidable/node-formidable/issues/483))
 * possible partial fix of [#386](https://github.com/node-formidable/node-formidable/pull/386) with #380 (need tests and better implementation)
 * refactor: use hasOwnProperty in check against files/fields ([#522](https://github.com/node-formidable/node-formidable/pull/522))
 * meta: do not promote `IncomingForm` and add `exports.default` ([#529](https://github.com/node-formidable/node-formidable/pull/529))
 * meta: Improve examples and tests ([#523](https://github.com/node-formidable/node-formidable/pull/523))
 * refactor: First step of Code quality improvements ([#525](https://github.com/node-formidable/node-formidable/pull/525))
 * chore(funding): remove patreon & add npm funding field ([#525](https://github.com/node-formidable/node-formidable/pull/532)
 * feat: use Modern Streams API ([#531](https://github.com/node-formidable/node-formidable/pull/531))
 * fix: urlencoded parsing to emit end [#543](https://github.com/node-formidable/node-formidable/pull/543), introduced in [#531](https://github.com/node-formidable/node-formidable/pull/531)
 * fix(tests): include multipart and qs parser unit tests, part of [#415](https://github.com/node-formidable/node-formidable/issues/415)
 * fix: reorganize exports + move parsers to `src/parsers/`
 * fix: update docs and examples [#544](https://github.com/node-formidable/node-formidable/pull/544) ([#248](https://github.com/node-formidable/node-formidable/issues/248), [#335](https://github.com/node-formidable/node-formidable/issues/335), [#371](https://github.com/node-formidable/node-formidable/issues/371), [#372](https://github.com/node-formidable/node-formidable/issues/372), [#387](https://github.com/node-formidable/node-formidable/issues/387), partly [#471](https://github.com/node-formidable/node-formidable/issues/471), [#535](https://github.com/node-formidable/node-formidable/issues/535))
 * feat: introduce Plugins API, fix silent failing tests ([#545](https://github.com/node-formidable/node-formidable/pull/545), [#391](https://github.com/node-formidable/node-formidable/pull/391), [#407](https://github.com/node-formidable/node-formidable/pull/407), [#386](https://github.com/node-formidable/node-formidable/pull/386), [#374](https://github.com/node-formidable/node-formidable/pull/374), [#521](https://github.com/node-formidable/node-formidable/pull/521), [#267](https://github.com/node-formidable/node-formidable/pull/267))
 * fix: exposing file writable stream errors ([#520](https://github.com/node-formidable/node-formidable/pull/520), [#316](https://github.com/node-formidable/node-formidable/pull/316), [#469](https://github.com/node-formidable/node-formidable/pull/469), [#470](https://github.com/node-formidable/node-formidable/pull/470))
 * feat: custom file (re)naming, thru options.filename ([#591](https://github.com/node-formidable/node-formidable/pull/591), [#84](https://github.com/node-formidable/node-formidable/issues/84), [#86](https://github.com/node-formidable/node-formidable/issues/86), [#94](https://github.com/node-formidable/node-formidable/issues/94), [#154](https://github.com/node-formidable/node-formidable/issues/154), [#158](https://github.com/node-formidable/node-formidable/issues/158), [#488](https://github.com/node-formidable/node-formidable/issues/488), [#595](https://github.com/node-formidable/node-formidable/issues/595))


 
### v1.2.1 (2018-03-20)

 * `maxFileSize` option with default of 200MB (Charlike Mike Reagent, Nima Shahri)
 * Simplified buffering in JSON parser to avoid denial of service attack (Kornel)
 * Fixed upload file cleanup on aborted requests (liaoweiqiang)
 * Fixed error handling of closed _writeStream (Vitalii)

### v1.1.1 (2017-01-15)

 * Fix DeprecationWarning about os.tmpDir() (Christian)
 * Update `buffer.write` order of arguments for Node 7 (Kornel Lesiński)
 * JSON Parser emits error events to the IncomingForm (alessio.montagnani)
 * Improved Content-Disposition parsing (Sebastien)
 * Access WriteStream of fs during runtime instead of include time (Jonas Amundsen)
 * Use built-in toString to convert buffer to hex (Charmander)
 * Add hash to json if present (Nick Stamas)
 * Add license to package.json (Simen Bekkhus)

### v1.0.14 (2013-05-03)

* Add failing hash tests. (Ben Trask)
* Enable hash calculation again (Eugene Girshov)
* Test for immediate data events (Tim Smart)
* Re-arrange IncomingForm#parse (Tim Smart)

### v1.0.13

* Only update hash if update method exists (Sven Lito)
* According to travis v0.10 needs to go quoted (Sven Lito)
* Bumping build node versions (Sven Lito)
* Additional fix for empty requests (Eugene Girshov)
* Change the default to 1000, to match the new Node behaviour. (OrangeDog)
* Add ability to control maxKeys in the querystring parser. (OrangeDog)
* Adjust test case to work with node 0.9.x (Eugene Girshov)
* Update package.json (Sven Lito)
* Path adjustment according to eb4468b (Markus Ast)

### v1.0.12

* Emit error on aborted connections (Eugene Girshov)
* Add support for empty requests (Eugene Girshov)
* Fix name/filename handling in Content-Disposition (jesperp)
* Tolerate malformed closing boundary in multipart (Eugene Girshov)
* Ignore preamble in multipart messages (Eugene Girshov)
* Add support for application/json (Mike Frey, Carlos Rodriguez)
* Add support for Base64 encoding (Elmer Bulthuis)
* Add File#toJSON (TJ Holowaychuk)
* Remove support for Node.js 0.4 & 0.6 (Andrew Kelley)
* Documentation improvements (Sven Lito, Andre Azevedo)
* Add support for application/octet-stream (Ion Lupascu, Chris Scribner)
* Use os.tmpdir() to get tmp directory (Andrew Kelley)
* Improve package.json (Andrew Kelley, Sven Lito)
* Fix benchmark script (Andrew Kelley)
* Fix scope issue in incoming_forms (Sven Lito)
* Fix file handle leak on error (OrangeDog)

---

[First commit, #3270eb4b1f8b (May 4th, 2010)](https://github.com/node-formidable/formidable/commit/3270eb4b1f8bb667b8c12f64c36a4e7b854216d8)
