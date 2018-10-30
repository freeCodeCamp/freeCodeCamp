# Change Log

## [Unreleased](https://github.com/shelljs/shelljs/tree/HEAD)

[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.7...HEAD)

**Closed issues:**

- Add node v8 to CI [\#729](https://github.com/shelljs/shelljs/issues/729)
- Exec not working in Electron ! [\#726](https://github.com/shelljs/shelljs/issues/726)
- is rechoir used anywhere? [\#723](https://github.com/shelljs/shelljs/issues/723)
- ShellJS: internal error on shelljs.mkdir\('myFile/myDir'\) [\#720](https://github.com/shelljs/shelljs/issues/720)
- Can't make sed perform global replace [\#719](https://github.com/shelljs/shelljs/issues/719)
- grep: option not recognized: l [\#717](https://github.com/shelljs/shelljs/issues/717)
- Problems getting code, stdout, stderr [\#715](https://github.com/shelljs/shelljs/issues/715)
- Copying hidden files fails on Windows 10 [\#711](https://github.com/shelljs/shelljs/issues/711)
- How am I suppose to handle errors with ShellJS? [\#707](https://github.com/shelljs/shelljs/issues/707)
- use cp\('-r', './src', './dist'\) bug [\#705](https://github.com/shelljs/shelljs/issues/705)
- Way to ignore files in globs. [\#699](https://github.com/shelljs/shelljs/issues/699)
- Buffer constructor is deprecated [\#694](https://github.com/shelljs/shelljs/issues/694)
- source command not working via exec method. [\#693](https://github.com/shelljs/shelljs/issues/693)
- Would you be interested in a PR for `open`? [\#692](https://github.com/shelljs/shelljs/issues/692)
- Get rid of common.platform in favor of process.platform [\#670](https://github.com/shelljs/shelljs/issues/670)
- Passing empty string to cp throws internal error [\#664](https://github.com/shelljs/shelljs/issues/664)
- Why does sed split files into an array, call replace on each line and rejoin? [\#645](https://github.com/shelljs/shelljs/issues/645)
- feat: cp & mv should not overwrite recently created files [\#631](https://github.com/shelljs/shelljs/issues/631)
- Echo tests unnecessarily run tests in own process [\#622](https://github.com/shelljs/shelljs/issues/622)
- rm -rf on a symbolic link to a dir deletes its contents [\#587](https://github.com/shelljs/shelljs/issues/587)
- "Cannot extract package" with node-webkit [\#181](https://github.com/shelljs/shelljs/issues/181)
- EBADF, bad file descriptor [\#180](https://github.com/shelljs/shelljs/issues/180)

**Merged pull requests:**

- Add node 8 to CI [\#730](https://github.com/shelljs/shelljs/pull/730) ([freitagbr](https://github.com/freitagbr))
- Deprecate common.getUserHome, advise using os.homedir instead [\#725](https://github.com/shelljs/shelljs/pull/725) ([freitagbr](https://github.com/freitagbr))
- fix\(mkdir\): improve error handling around files [\#721](https://github.com/shelljs/shelljs/pull/721) ([nfischer](https://github.com/nfischer))
- Properly handle directories as arguments [\#713](https://github.com/shelljs/shelljs/pull/713) ([nfischer](https://github.com/nfischer))
- Add common.buffer [\#710](https://github.com/shelljs/shelljs/pull/710) ([freitagbr](https://github.com/freitagbr))
- Fix common.expand error [\#709](https://github.com/shelljs/shelljs/pull/709) ([freitagbr](https://github.com/freitagbr))
- Echo test mocks [\#708](https://github.com/shelljs/shelljs/pull/708) ([freitagbr](https://github.com/freitagbr))
- refactor: remove unnecessary common.js imports [\#703](https://github.com/shelljs/shelljs/pull/703) ([nfischer](https://github.com/nfischer))
- Fix \#631 throw error when overwriting recently created file [\#702](https://github.com/shelljs/shelljs/pull/702) ([uttpal](https://github.com/uttpal))
- Small clarification of verbose flag [\#691](https://github.com/shelljs/shelljs/pull/691) ([zommerfelds](https://github.com/zommerfelds))
- fix\(grep, sed, sort, uniq\): Split only on newline characters [\#690](https://github.com/shelljs/shelljs/pull/690) ([freitagbr](https://github.com/freitagbr))
- Refactor: Use process.platform across codebase [\#689](https://github.com/shelljs/shelljs/pull/689) ([freitagbr](https://github.com/freitagbr))
- Remove contents of symlink to dir with rm -rf [\#688](https://github.com/shelljs/shelljs/pull/688) ([freitagbr](https://github.com/freitagbr))
- Echo stdout [\#677](https://github.com/shelljs/shelljs/pull/677) ([nfischer](https://github.com/nfischer))

## [v0.7.7](https://github.com/shelljs/shelljs/tree/v0.7.7) (2017-03-09)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.6...v0.7.7)

**Closed issues:**

- Error output should be consistent across all platforms. [\#681](https://github.com/shelljs/shelljs/issues/681)
- \*CRITICAL data loss\* shell.cp\(\) Content of file is erased when trying to copy it to the folder it already belongs to [\#678](https://github.com/shelljs/shelljs/issues/678)
- Use with webpack broken in 0.7.6 [\#667](https://github.com/shelljs/shelljs/issues/667)
- Difference between bash ls -R and ShellJS ls -R with symlinks [\#666](https://github.com/shelljs/shelljs/issues/666)
- Refactor which\(\) \(too many repeated code blocks\) [\#656](https://github.com/shelljs/shelljs/issues/656)
- find\(\) raises error when unable to find any files matching, expected to return empty array. [\#653](https://github.com/shelljs/shelljs/issues/653)
- Drop support for v0.12 [\#647](https://github.com/shelljs/shelljs/issues/647)
- Reformat the markdown in RELEASE.md [\#642](https://github.com/shelljs/shelljs/issues/642)
- rm -rf doesn't work if the directory contains an asar archive in Electron [\#618](https://github.com/shelljs/shelljs/issues/618)
- Add support for other file types in rm [\#617](https://github.com/shelljs/shelljs/issues/617)
- Feature request: ls -L option [\#563](https://github.com/shelljs/shelljs/issues/563)
- How to send SIGINT signal to child process launched with exec [\#518](https://github.com/shelljs/shelljs/issues/518)
- exec doesnt seem to be working [\#480](https://github.com/shelljs/shelljs/issues/480)
- feature request: option to add node\_modules to the path for shelljs scripts [\#469](https://github.com/shelljs/shelljs/issues/469)
- high cpu usage during synchronous exec [\#167](https://github.com/shelljs/shelljs/issues/167)

**Merged pull requests:**

- Add support for removing fifos [\#687](https://github.com/shelljs/shelljs/pull/687) ([freitagbr](https://github.com/freitagbr))
- chore: add codecov script to appveyor CI [\#686](https://github.com/shelljs/shelljs/pull/686) ([nfischer](https://github.com/nfischer))
- Refactor tests to improve readability [\#685](https://github.com/shelljs/shelljs/pull/685) ([nfischer](https://github.com/nfischer))
- fix: convert error output to be consistent cross-platform [\#684](https://github.com/shelljs/shelljs/pull/684) ([nfischer](https://github.com/nfischer))
- chore: add codecov [\#682](https://github.com/shelljs/shelljs/pull/682) ([nfischer](https://github.com/nfischer))
- Fix cp overwriting identical files [\#679](https://github.com/shelljs/shelljs/pull/679) ([freitagbr](https://github.com/freitagbr))
- Modified glob pattern. Fixes \#666 [\#676](https://github.com/shelljs/shelljs/pull/676) ([frandiox](https://github.com/frandiox))
- refactor\(parseOptions\): better handle errors [\#674](https://github.com/shelljs/shelljs/pull/674) ([nfischer](https://github.com/nfischer))
- test: add misc. tests to improve coverage [\#673](https://github.com/shelljs/shelljs/pull/673) ([nfischer](https://github.com/nfischer))
- test: don't count hard-to-test lines for coverage [\#672](https://github.com/shelljs/shelljs/pull/672) ([nfischer](https://github.com/nfischer))
- fix: switch commands.json -\> commands.js [\#668](https://github.com/shelljs/shelljs/pull/668) ([nfischer](https://github.com/nfischer))
- ls -L \(follow symlinks\) [\#665](https://github.com/shelljs/shelljs/pull/665) ([frandiox](https://github.com/frandiox))
- docs\(chmod\): document `options` argument [\#663](https://github.com/shelljs/shelljs/pull/663) ([gkalpak](https://github.com/gkalpak))
- docs: clean up RELEASE.md [\#662](https://github.com/shelljs/shelljs/pull/662) ([nfischer](https://github.com/nfischer))
- docs: miscellaneous README changes [\#661](https://github.com/shelljs/shelljs/pull/661) ([nfischer](https://github.com/nfischer))
- Fix typo in README [\#660](https://github.com/shelljs/shelljs/pull/660) ([faheel](https://github.com/faheel))
- refactor: reduce repeated code in which\(\) [\#659](https://github.com/shelljs/shelljs/pull/659) ([nfischer](https://github.com/nfischer))
- feature: add -a option for which command [\#655](https://github.com/shelljs/shelljs/pull/655) ([termosa](https://github.com/termosa))
- Fix find ENOENT [\#654](https://github.com/shelljs/shelljs/pull/654) ([freitagbr](https://github.com/freitagbr))
- Safely exit by throwing an error [\#649](https://github.com/shelljs/shelljs/pull/649) ([freitagbr](https://github.com/freitagbr))
- Chore drop 0.12 [\#648](https://github.com/shelljs/shelljs/pull/648) ([nfischer](https://github.com/nfischer))
- chore\(lint\): Enforce a trailing comma for multi-line [\#646](https://github.com/shelljs/shelljs/pull/646) ([nfischer](https://github.com/nfischer))
- docs\(release\): use bulleted list [\#643](https://github.com/shelljs/shelljs/pull/643) ([freitagbr](https://github.com/freitagbr))

## [v0.7.6](https://github.com/shelljs/shelljs/tree/v0.7.6) (2017-01-08)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.5...v0.7.6)

**Closed issues:**

- unable to execute ionic command with shell js  [\#640](https://github.com/shelljs/shelljs/issues/640)
- How to increase ShellJS buffer size? [\#639](https://github.com/shelljs/shelljs/issues/639)
- mkdir fails with non-normalized path [\#634](https://github.com/shelljs/shelljs/issues/634)
- Move execPath into common [\#633](https://github.com/shelljs/shelljs/issues/633)
- QUESTION: Feedback while an operation is running? [\#629](https://github.com/shelljs/shelljs/issues/629)
- Test setup/cleanup is broken [\#621](https://github.com/shelljs/shelljs/issues/621)
- Ignore temp directories when running lint [\#620](https://github.com/shelljs/shelljs/issues/620)
- parseOptions should throw an error if the option string doesn't start with '-' [\#614](https://github.com/shelljs/shelljs/issues/614)
- chore: LGTM.co is gone [\#595](https://github.com/shelljs/shelljs/issues/595)
- refactor: objectAssign should refer to Object.assign if it exists, or the internal polyfill otherwise [\#592](https://github.com/shelljs/shelljs/issues/592)
- parseOptions: allow a way to keep errors silent \(exception only\) [\#591](https://github.com/shelljs/shelljs/issues/591)
- \[Question\] commands with multiple options / arguments? [\#589](https://github.com/shelljs/shelljs/issues/589)
- feature: GNU Parallel  [\#585](https://github.com/shelljs/shelljs/issues/585)
- write to file [\#568](https://github.com/shelljs/shelljs/issues/568)
- Cannot figure out how to disable globbing for rm [\#567](https://github.com/shelljs/shelljs/issues/567)
- Switch to the ava test framework [\#560](https://github.com/shelljs/shelljs/issues/560)
- feature: echo -n [\#559](https://github.com/shelljs/shelljs/issues/559)
- Option not recognized [\#556](https://github.com/shelljs/shelljs/issues/556)
- chore: add @freitagbr to LGTM maintainers [\#552](https://github.com/shelljs/shelljs/issues/552)
- chore: set up dev branch [\#548](https://github.com/shelljs/shelljs/issues/548)
- bug: cp\(\) doesn't always copy everything [\#547](https://github.com/shelljs/shelljs/issues/547)
- User-friendly lint command [\#544](https://github.com/shelljs/shelljs/issues/544)
- Lint warning [\#542](https://github.com/shelljs/shelljs/issues/542)
- Possible Regression: cp from 0.6.0 to 0.7.x version [\#538](https://github.com/shelljs/shelljs/issues/538)
- chore: add nodejs v7 to CI [\#537](https://github.com/shelljs/shelljs/issues/537)
- error.code is not always available [\#536](https://github.com/shelljs/shelljs/issues/536)
- Add shx as a dependency for testing [\#525](https://github.com/shelljs/shelljs/issues/525)
- Feature request: allow `common.error\(\)` to optionally not insert a prefix and optionally not print to console [\#523](https://github.com/shelljs/shelljs/issues/523)
- Feature request: Add "shelljs.unlink" [\#519](https://github.com/shelljs/shelljs/issues/519)
- Sed should allow a replacement string to contain `\1` for match groups [\#507](https://github.com/shelljs/shelljs/issues/507)
- Don't kill the node process upon unexpected error [\#483](https://github.com/shelljs/shelljs/issues/483)
- Usage with neodoc [\#445](https://github.com/shelljs/shelljs/issues/445)
- \[ Feature idea \] synchronous sleep command [\#441](https://github.com/shelljs/shelljs/issues/441)
- Improve test coverage [\#347](https://github.com/shelljs/shelljs/issues/347)
- Add a way to prevent shell-expansion on commands \(this issue is not for exec\) [\#345](https://github.com/shelljs/shelljs/issues/345)
- Chown [\#183](https://github.com/shelljs/shelljs/issues/183)
- spawn EMFILE [\#81](https://github.com/shelljs/shelljs/issues/81)
- Rewrite exec using execsync-ng \(which uses node-ffi\) [\#66](https://github.com/shelljs/shelljs/issues/66)
- `exec` gets stuck on my Debian box [\#51](https://github.com/shelljs/shelljs/issues/51)
- 100% cpu usage when a nodejs script goes side ways executing a command. [\#5](https://github.com/shelljs/shelljs/issues/5)

**Merged pull requests:**

- refactor: add config.reset\(\) and .resetForTesting\(\) [\#641](https://github.com/shelljs/shelljs/pull/641) ([nfischer](https://github.com/nfischer))
- chore: set up test coverage [\#638](https://github.com/shelljs/shelljs/pull/638) ([nfischer](https://github.com/nfischer))
- refactor: create common.execPath [\#636](https://github.com/shelljs/shelljs/pull/636) ([nfischer](https://github.com/nfischer))
- fix: allow non-normalized paths as input to mkdir [\#635](https://github.com/shelljs/shelljs/pull/635) ([nfischer](https://github.com/nfischer))
- Finalize moving to ava [\#630](https://github.com/shelljs/shelljs/pull/630) ([freitagbr](https://github.com/freitagbr))
- test: refactor pushd tests to AVA [\#627](https://github.com/shelljs/shelljs/pull/627) ([nfischer](https://github.com/nfischer))
- test: refactor popd tests to AVA [\#626](https://github.com/shelljs/shelljs/pull/626) ([nfischer](https://github.com/nfischer))
- test: refactor shjs tests to AVA [\#625](https://github.com/shelljs/shelljs/pull/625) ([nfischer](https://github.com/nfischer))
- test: remove tests for make \(deprecated\) [\#624](https://github.com/shelljs/shelljs/pull/624) ([nfischer](https://github.com/nfischer))
- Ignore test temp directories during linting [\#623](https://github.com/shelljs/shelljs/pull/623) ([freitagbr](https://github.com/freitagbr))
- refactor: list all commands in commands.json [\#616](https://github.com/shelljs/shelljs/pull/616) ([nfischer](https://github.com/nfischer))
- Throw an error if the options string does not start with '-' [\#615](https://github.com/shelljs/shelljs/pull/615) ([freitagbr](https://github.com/freitagbr))
- chore: switch to files attribute from npmignore [\#613](https://github.com/shelljs/shelljs/pull/613) ([nfischer](https://github.com/nfischer))
- test: refactor 'test' command tests to AVA [\#612](https://github.com/shelljs/shelljs/pull/612) ([nfischer](https://github.com/nfischer))
- test: refactor find tests to AVA [\#611](https://github.com/shelljs/shelljs/pull/611) ([nfischer](https://github.com/nfischer))
- test: refactor ln tests to AVA [\#610](https://github.com/shelljs/shelljs/pull/610) ([nfischer](https://github.com/nfischer))
- test: refactor ls to use AVA [\#609](https://github.com/shelljs/shelljs/pull/609) ([nfischer](https://github.com/nfischer))
- test: refactor pipe tests to AVA [\#608](https://github.com/shelljs/shelljs/pull/608) ([nfischer](https://github.com/nfischer))
- test: refactor sed tests to AVA [\#607](https://github.com/shelljs/shelljs/pull/607) ([nfischer](https://github.com/nfischer))
- test: refactor grep tests to AVA [\#606](https://github.com/shelljs/shelljs/pull/606) ([nfischer](https://github.com/nfischer))
- test: refactor global tests to AVA [\#605](https://github.com/shelljs/shelljs/pull/605) ([nfischer](https://github.com/nfischer))
- test: refactor touch tests to AVA [\#604](https://github.com/shelljs/shelljs/pull/604) ([nfischer](https://github.com/nfischer))
- test: refactor uniq tests to AVA [\#603](https://github.com/shelljs/shelljs/pull/603) ([nfischer](https://github.com/nfischer))
- test: refactor sort tests to AVA [\#602](https://github.com/shelljs/shelljs/pull/602) ([nfischer](https://github.com/nfischer))
- test: refactor tail tests to AVA [\#601](https://github.com/shelljs/shelljs/pull/601) ([nfischer](https://github.com/nfischer))
- test: refactor head tests to AVA [\#600](https://github.com/shelljs/shelljs/pull/600) ([nfischer](https://github.com/nfischer))
- test: refactor mkdir tests to AVA [\#599](https://github.com/shelljs/shelljs/pull/599) ([nfischer](https://github.com/nfischer))
- Fix: rm behavior regarding symlinks [\#598](https://github.com/shelljs/shelljs/pull/598) ([freitagbr](https://github.com/freitagbr))
- test: refactor mv tests to AVA [\#597](https://github.com/shelljs/shelljs/pull/597) ([nfischer](https://github.com/nfischer))
- Remove files related to lgtm.co [\#596](https://github.com/shelljs/shelljs/pull/596) ([freitagbr](https://github.com/freitagbr))
- Add ability to configure error from parseOptions [\#594](https://github.com/shelljs/shelljs/pull/594) ([freitagbr](https://github.com/freitagbr))
- Use Object.assign if possible [\#593](https://github.com/shelljs/shelljs/pull/593) ([freitagbr](https://github.com/freitagbr))
- Add "-n" option to echo [\#590](https://github.com/shelljs/shelljs/pull/590) ([freitagbr](https://github.com/freitagbr))
- test: refactor rm tests to AVA [\#586](https://github.com/shelljs/shelljs/pull/586) ([nfischer](https://github.com/nfischer))
- test: refactor pwd tests to AVA [\#582](https://github.com/shelljs/shelljs/pull/582) ([nfischer](https://github.com/nfischer))
- test: refactor tempdir tests to AVA [\#581](https://github.com/shelljs/shelljs/pull/581) ([nfischer](https://github.com/nfischer))
- test: refactor 'which' tests to AVA [\#580](https://github.com/shelljs/shelljs/pull/580) ([nfischer](https://github.com/nfischer))
- test: refactor plugin tests to AVA [\#579](https://github.com/shelljs/shelljs/pull/579) ([nfischer](https://github.com/nfischer))
- test: refactor toEnd tests to AVA [\#578](https://github.com/shelljs/shelljs/pull/578) ([nfischer](https://github.com/nfischer))
- test: refactor to tests to AVA [\#577](https://github.com/shelljs/shelljs/pull/577) ([nfischer](https://github.com/nfischer))
- test: refactor 'set' tests to AVA [\#576](https://github.com/shelljs/shelljs/pull/576) ([nfischer](https://github.com/nfischer))
- test: refactor echo tests to AVA [\#575](https://github.com/shelljs/shelljs/pull/575) ([nfischer](https://github.com/nfischer))
- test: refactor exec tests to AVA [\#574](https://github.com/shelljs/shelljs/pull/574) ([nfischer](https://github.com/nfischer))
- test: refactor env tests to AVA [\#573](https://github.com/shelljs/shelljs/pull/573) ([nfischer](https://github.com/nfischer))
- test: refactor dirs tests to AVA [\#572](https://github.com/shelljs/shelljs/pull/572) ([nfischer](https://github.com/nfischer))
- test: refactor config tests to AVA [\#571](https://github.com/shelljs/shelljs/pull/571) ([nfischer](https://github.com/nfischer))
- test: refactor common tests to AVA [\#570](https://github.com/shelljs/shelljs/pull/570) ([nfischer](https://github.com/nfischer))
- test: refactor chmod tests to AVA [\#569](https://github.com/shelljs/shelljs/pull/569) ([nfischer](https://github.com/nfischer))
- test: refactor cp tests to ava [\#565](https://github.com/shelljs/shelljs/pull/565) ([nfischer](https://github.com/nfischer))
- test: refactor cat tests to ava [\#564](https://github.com/shelljs/shelljs/pull/564) ([nfischer](https://github.com/nfischer))
- test: set up ava and move cd.js [\#561](https://github.com/shelljs/shelljs/pull/561) ([nfischer](https://github.com/nfischer))
- Update sed documentation regarding capture groups [\#558](https://github.com/shelljs/shelljs/pull/558) ([freitagbr](https://github.com/freitagbr))
- Add newline to output of echo [\#557](https://github.com/shelljs/shelljs/pull/557) ([freitagbr](https://github.com/freitagbr))
- fix: handle code-less errors more carefully in exec [\#554](https://github.com/shelljs/shelljs/pull/554) ([nfischer](https://github.com/nfischer))
- Add Brandon Freitag to maintainers/contributors [\#553](https://github.com/shelljs/shelljs/pull/553) ([freitagbr](https://github.com/freitagbr))
- Get pipe tests running on Windows. [\#550](https://github.com/shelljs/shelljs/pull/550) ([binki](https://github.com/binki))
- fix: maxdepth doesn't limit total number of copies [\#549](https://github.com/shelljs/shelljs/pull/549) ([nfischer](https://github.com/nfischer))
- Safely exit by throwing an error [\#546](https://github.com/shelljs/shelljs/pull/546) ([freitagbr](https://github.com/freitagbr))
- Fix lint warning [\#543](https://github.com/shelljs/shelljs/pull/543) ([freitagbr](https://github.com/freitagbr))
- chore: remove v0.10 from Travis CI [\#540](https://github.com/shelljs/shelljs/pull/540) ([nfischer](https://github.com/nfischer))
- chore: add Node v7 for CI [\#539](https://github.com/shelljs/shelljs/pull/539) ([nfischer](https://github.com/nfischer))

## [v0.7.5](https://github.com/shelljs/shelljs/tree/v0.7.5) (2016-10-27)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.4...v0.7.5)

**Closed issues:**

- Project objectives: there is some higher goal to achieve? [\#533](https://github.com/shelljs/shelljs/issues/533)
- fs.existsSync is un-deprecated [\#531](https://github.com/shelljs/shelljs/issues/531)
- Inadvertent breaking change to shell.test\(\) [\#529](https://github.com/shelljs/shelljs/issues/529)
- Add -u flag support for cp [\#526](https://github.com/shelljs/shelljs/issues/526)
- API request: allow `plugin.error\(\)` to take an options parameter [\#522](https://github.com/shelljs/shelljs/issues/522)
- FS Real Path error thrown when requiring shelljs [\#521](https://github.com/shelljs/shelljs/issues/521)
- Question: passing code via pipe? [\#520](https://github.com/shelljs/shelljs/issues/520)
- The performance in `cp` is different between `0.6.0` and `0.7.4` [\#517](https://github.com/shelljs/shelljs/issues/517)
- ShellJS in Electron package don't find ffmpeg anymore [\#516](https://github.com/shelljs/shelljs/issues/516)
- Exec issues with string option introduced in 0.7.4 [\#515](https://github.com/shelljs/shelljs/issues/515)
- \[ Feature \] SSH command [\#435](https://github.com/shelljs/shelljs/issues/435)
- Synchronous exec stalls permenantly when there is an error/w the shell [\#7](https://github.com/shelljs/shelljs/issues/7)

**Merged pull requests:**

- feat: plugin.error\(\) takes an options parameter [\#535](https://github.com/shelljs/shelljs/pull/535) ([nfischer](https://github.com/nfischer))
- Revert "refactor: replace fs.existsSync" fixes\(\#531\) [\#532](https://github.com/shelljs/shelljs/pull/532) ([gyandeeps](https://github.com/gyandeeps))
- Fix: Remove default glob from shell.test \(fixes \#529\) [\#530](https://github.com/shelljs/shelljs/pull/530) ([gyandeeps](https://github.com/gyandeeps))
- feat: cp -u option [\#527](https://github.com/shelljs/shelljs/pull/527) ([nfischer](https://github.com/nfischer))
- chore: add downloads per month on README [\#513](https://github.com/shelljs/shelljs/pull/513) ([nfischer](https://github.com/nfischer))

## [v0.7.4](https://github.com/shelljs/shelljs/tree/v0.7.4) (2016-08-26)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.3...v0.7.4)

**Closed issues:**

- fix: echo -e should not print "-e" [\#510](https://github.com/shelljs/shelljs/issues/510)
- Wrong method signature in doc [\#498](https://github.com/shelljs/shelljs/issues/498)
- readFromPipe should be a function with no arguments [\#485](https://github.com/shelljs/shelljs/issues/485)
- TypeError: Cannot read property 'toString' of undefined [\#471](https://github.com/shelljs/shelljs/issues/471)

**Merged pull requests:**

- fix: echo supports -e option properly [\#511](https://github.com/shelljs/shelljs/pull/511) ([nfischer](https://github.com/nfischer))
- refactor: replace fs.existsSync [\#509](https://github.com/shelljs/shelljs/pull/509) ([nfischer](https://github.com/nfischer))
- refactor: readFromPipe\(\) requires no arguments [\#506](https://github.com/shelljs/shelljs/pull/506) ([nfischer](https://github.com/nfischer))
- chore: switch to eslint [\#504](https://github.com/shelljs/shelljs/pull/504) ([nfischer](https://github.com/nfischer))
- feat: add overWrite option for commands [\#503](https://github.com/shelljs/shelljs/pull/503) ([nfischer](https://github.com/nfischer))
- chore: update issue template [\#502](https://github.com/shelljs/shelljs/pull/502) ([nfischer](https://github.com/nfischer))
- fixed head/tail readme [\#499](https://github.com/shelljs/shelljs/pull/499) ([charlesread](https://github.com/charlesread))

## [v0.7.3](https://github.com/shelljs/shelljs/tree/v0.7.3) (2016-07-27)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.2...v0.7.3)

**Closed issues:**

- expose execSync [\#494](https://github.com/shelljs/shelljs/issues/494)
- Add a way to create commands that can receive from a pipe without being standalone commands [\#487](https://github.com/shelljs/shelljs/issues/487)
- cp -r breaks when the directory contains a softlink [\#193](https://github.com/shelljs/shelljs/issues/193)
- Redirect output to file fails [\#60](https://github.com/shelljs/shelljs/issues/60)
- We need sed -n ? [\#38](https://github.com/shelljs/shelljs/issues/38)

**Merged pull requests:**

- refactor: allow pipeOnly commands \(methods on ShellStrings\) [\#493](https://github.com/shelljs/shelljs/pull/493) ([nfischer](https://github.com/nfischer))
- refactor: glob by default for commands [\#492](https://github.com/shelljs/shelljs/pull/492) ([nfischer](https://github.com/nfischer))
- refactor: switch from notUnix to unix in wrap\(\) [\#491](https://github.com/shelljs/shelljs/pull/491) ([nfischer](https://github.com/nfischer))
- refactor: switch common.extend\(\) to Object.assign ponyfill [\#490](https://github.com/shelljs/shelljs/pull/490) ([nfischer](https://github.com/nfischer))
- fix: conflicting options now properly override each other [\#489](https://github.com/shelljs/shelljs/pull/489) ([nfischer](https://github.com/nfischer))
- refactor: expose plugin utils & add initial tests [\#484](https://github.com/shelljs/shelljs/pull/484) ([nfischer](https://github.com/nfischer))

## [v0.7.2](https://github.com/shelljs/shelljs/tree/v0.7.2) (2016-07-25)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.1...v0.7.2)

**Closed issues:**

- shelljs should not kill process if node call throws exception [\#473](https://github.com/shelljs/shelljs/issues/473)
- `cp` work incorrectly when folder name contains '@' [\#463](https://github.com/shelljs/shelljs/issues/463)
- Something went wrong [\#158](https://github.com/shelljs/shelljs/issues/158)

**Merged pull requests:**

- fix: resolve a cylcic-dependency problem [\#482](https://github.com/shelljs/shelljs/pull/482) ([nfischer](https://github.com/nfischer))
- refactor: add wrapOutput option to auto-ShellString-ify command output [\#481](https://github.com/shelljs/shelljs/pull/481) ([nfischer](https://github.com/nfischer))
- refactor: move option parsing into common.wrap\(\) [\#479](https://github.com/shelljs/shelljs/pull/479) ([nfischer](https://github.com/nfischer))
- refactor: hook new uniq\(\) command using new format [\#478](https://github.com/shelljs/shelljs/pull/478) ([nfischer](https://github.com/nfischer))
- Fix mkdir malformed path [\#477](https://github.com/shelljs/shelljs/pull/477) ([nfischer](https://github.com/nfischer))
- fix: mkdir for invalid perms does not kill process [\#474](https://github.com/shelljs/shelljs/pull/474) ([nfischer](https://github.com/nfischer))
- feat\(command\): new command: uniq\(\) [\#453](https://github.com/shelljs/shelljs/pull/453) ([joshi-sh](https://github.com/joshi-sh))

## [v0.7.1](https://github.com/shelljs/shelljs/tree/v0.7.1) (2016-07-22)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.7.0...v0.7.1)

**Closed issues:**

- cp -n doesn't work correctly [\#465](https://github.com/shelljs/shelljs/issues/465)
- how can i run sudo apt-get install xtodotool by your plugin? [\#448](https://github.com/shelljs/shelljs/issues/448)
- shell.js grep: internal error,  Invalid regular expression [\#447](https://github.com/shelljs/shelljs/issues/447)
- Stdout is empty on Git log command [\#439](https://github.com/shelljs/shelljs/issues/439)
- Cannot read toString of null when using execSync [\#415](https://github.com/shelljs/shelljs/issues/415)
- cp -R dir/ target fails to copy hidden files in dir [\#140](https://github.com/shelljs/shelljs/issues/140)
- Adding callback to basic commands [\#102](https://github.com/shelljs/shelljs/issues/102)
- \#mv Won't Work Across Disks [\#1](https://github.com/shelljs/shelljs/issues/1)

**Merged pull requests:**

- refactor: commands now register themselves [\#475](https://github.com/shelljs/shelljs/pull/475) ([nfischer](https://github.com/nfischer))
- chore: switch to shields.io, and add npm badge [\#470](https://github.com/shelljs/shelljs/pull/470) ([nfischer](https://github.com/nfischer))
- fix\(cp\): -n option no longer raises error [\#466](https://github.com/shelljs/shelljs/pull/466) ([nfischer](https://github.com/nfischer))
- refactor: expose pipe-ability to command configuration [\#464](https://github.com/shelljs/shelljs/pull/464) ([nfischer](https://github.com/nfischer))
- fix\(mv\): works across partitions [\#461](https://github.com/shelljs/shelljs/pull/461) ([nfischer](https://github.com/nfischer))
- chore: switch to shelljs-changelog [\#460](https://github.com/shelljs/shelljs/pull/460) ([nfischer](https://github.com/nfischer))
- chore: update release process [\#459](https://github.com/shelljs/shelljs/pull/459) ([nfischer](https://github.com/nfischer))
- chore: revert depreciate shelljs/make \(\#431\) [\#458](https://github.com/shelljs/shelljs/pull/458) ([zephraph](https://github.com/zephraph))
- chore: clarify message for when docs are not generated [\#457](https://github.com/shelljs/shelljs/pull/457) ([nfischer](https://github.com/nfischer))
- chore\(gendocs\): add `npm run gendocs` command [\#455](https://github.com/shelljs/shelljs/pull/455) ([nfischer](https://github.com/nfischer))
- chore: update jshint and move it to an npm script [\#454](https://github.com/shelljs/shelljs/pull/454) ([nfischer](https://github.com/nfischer))
- test\(ls\): add case for trailing slash on dir name [\#450](https://github.com/shelljs/shelljs/pull/450) ([nfischer](https://github.com/nfischer))
- docs\(exec\): explicitly mention the `shell` option [\#449](https://github.com/shelljs/shelljs/pull/449) ([nfischer](https://github.com/nfischer))
- chore: setup changelog [\#443](https://github.com/shelljs/shelljs/pull/443) ([levithomason](https://github.com/levithomason))
- docs: comment code better to help contributors [\#437](https://github.com/shelljs/shelljs/pull/437) ([nfischer](https://github.com/nfischer))
- chore\(CI\): update appveyor [\#436](https://github.com/shelljs/shelljs/pull/436) ([nfischer](https://github.com/nfischer))
- chore: test against node v6 [\#433](https://github.com/shelljs/shelljs/pull/433) ([nfischer](https://github.com/nfischer))
- chore\(make\): depreciate shelljs/make [\#431](https://github.com/shelljs/shelljs/pull/431) ([ariporad](https://github.com/ariporad))
- docs: warn that README contains newest features [\#410](https://github.com/shelljs/shelljs/pull/410) ([nfischer](https://github.com/nfischer))

## [v0.7.0](https://github.com/shelljs/shelljs/tree/v0.7.0) (2016-04-25)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.6.0...v0.7.0)

**Closed issues:**

- exec\('nohup node some.js &'\) [\#426](https://github.com/shelljs/shelljs/issues/426)
- cp copy to symlinked folder [\#414](https://github.com/shelljs/shelljs/issues/414)
- Invalid version number \(0.0.1alpha1\) [\#399](https://github.com/shelljs/shelljs/issues/399)
- shelljs Breaks SemVer for Alpha and Pre-Release Versions [\#390](https://github.com/shelljs/shelljs/issues/390)
- Copy not accepting source end with wildcards \* when using -r on v0.6.0 [\#389](https://github.com/shelljs/shelljs/issues/389)
- Support globbing in `shjs` [\#388](https://github.com/shelljs/shelljs/issues/388)
- Refactor more commands to return ShellString [\#373](https://github.com/shelljs/shelljs/issues/373)
- ln\('-sf', './', '\<destination\>'\) is not linking the right folder [\#363](https://github.com/shelljs/shelljs/issues/363)
- v0.6.0 - shell.cp\('r', '/foo/\*, '/bar'\) fails with /foo/\* no such file or directory [\#342](https://github.com/shelljs/shelljs/issues/342)
- Add documentup as a webhook [\#327](https://github.com/shelljs/shelljs/issues/327)
- Dir glob breaks when in the middle of path [\#245](https://github.com/shelljs/shelljs/issues/245)
- could you switch off wiki page? [\#233](https://github.com/shelljs/shelljs/issues/233)
- ls globbing does not behave like shell, consider using glob.sync [\#225](https://github.com/shelljs/shelljs/issues/225)
- Cannot run shell.exec\('heroku config:push'\) -- just hangs  [\#218](https://github.com/shelljs/shelljs/issues/218)
- `cp` does not overwrite files by default [\#210](https://github.com/shelljs/shelljs/issues/210)
- exec failed to return [\#208](https://github.com/shelljs/shelljs/issues/208)
- CLI Version [\#202](https://github.com/shelljs/shelljs/issues/202)
- Bracket expansion not working [\#176](https://github.com/shelljs/shelljs/issues/176)
- "exec" causes LiveScript interpreter \(lsc\) to hang [\#160](https://github.com/shelljs/shelljs/issues/160)
- Don't modify string prototype [\#159](https://github.com/shelljs/shelljs/issues/159)
- `exec\(...\).to\(file\)` should work [\#154](https://github.com/shelljs/shelljs/issues/154)
- Would like to see more async variants for cp/rm etc [\#144](https://github.com/shelljs/shelljs/issues/144)
- Can't install shelljs locally instead of globally [\#136](https://github.com/shelljs/shelljs/issues/136)
- shelljs and node 0.10.28 [\#125](https://github.com/shelljs/shelljs/issues/125)
- Use case for global installed shelljs [\#123](https://github.com/shelljs/shelljs/issues/123)
- Only get stdout from `exec` [\#92](https://github.com/shelljs/shelljs/issues/92)
- What about other commands? [\#90](https://github.com/shelljs/shelljs/issues/90)
- Flesh out example of exit\(\) [\#73](https://github.com/shelljs/shelljs/issues/73)
- exec doesn't work with qualified paths on windows [\#41](https://github.com/shelljs/shelljs/issues/41)
- exec does not working in mingw bash in windows [\#17](https://github.com/shelljs/shelljs/issues/17)
- Add support for cp -P option [\#413](https://github.com/shelljs/shelljs/issues/413)
- cp -L: Incorrect behavior for symlinks to regular files [\#407](https://github.com/shelljs/shelljs/issues/407)
- Edit the docs to emphasize ShellStrings and Pipes [\#398](https://github.com/shelljs/shelljs/issues/398)
- Error message isn't always printed [\#372](https://github.com/shelljs/shelljs/issues/372)
- Standardize command output [\#356](https://github.com/shelljs/shelljs/issues/356)
- exec\(\) doesn't clean up all temp files [\#353](https://github.com/shelljs/shelljs/issues/353)
- Document that exec\(\) options don't work on early versions of node [\#350](https://github.com/shelljs/shelljs/issues/350)
- Add -f option to set\(\) [\#344](https://github.com/shelljs/shelljs/issues/344)
- Glob commands by default [\#343](https://github.com/shelljs/shelljs/issues/343)
- rm -rf incorrect behaviour [\#332](https://github.com/shelljs/shelljs/issues/332)
- Switch `exec\(\)` to use bash by default [\#281](https://github.com/shelljs/shelljs/issues/281)
- pipe to proc [\#148](https://github.com/shelljs/shelljs/issues/148)
- shell builtin [\#138](https://github.com/shelljs/shelljs/issues/138)
- add timeout option for exec [\#132](https://github.com/shelljs/shelljs/issues/132)
- shelljs cp handling symlinks badly [\#69](https://github.com/shelljs/shelljs/issues/69)

**Merged pull requests:**

- chore: add "Team" section to README [\#423](https://github.com/shelljs/shelljs/pull/423) ([nfischer](https://github.com/nfischer))
- Contributing guidelines [\#422](https://github.com/shelljs/shelljs/pull/422) ([nfischer](https://github.com/nfischer))
- feat\(glob\): expose config.globOptions. [\#400](https://github.com/shelljs/shelljs/pull/400) ([nfischer](https://github.com/nfischer))
- Add shelljs as a keyword in package.json [\#393](https://github.com/shelljs/shelljs/pull/393) ([nfischer](https://github.com/nfischer))
- docs: add link to wiki page [\#392](https://github.com/shelljs/shelljs/pull/392) ([nfischer](https://github.com/nfischer))
- refactor\(cd\): use process.env.OLDPWD to store previous dir [\#383](https://github.com/shelljs/shelljs/pull/383) ([nfischer](https://github.com/nfischer))
- chore\(appveyor\): add in node 4 for appveyor [\#381](https://github.com/shelljs/shelljs/pull/381) ([nfischer](https://github.com/nfischer))
- Add Cash cross-reference [\#375](https://github.com/shelljs/shelljs/pull/375) ([dthree](https://github.com/dthree))
- Ignore gitattributes from npm package [\#361](https://github.com/shelljs/shelljs/pull/361) ([nfischer](https://github.com/nfischer))
- Consistently use LF line endings [\#355](https://github.com/shelljs/shelljs/pull/355) ([TimothyGu](https://github.com/TimothyGu))
- Release v0.7.0 [\#429](https://github.com/shelljs/shelljs/pull/429) ([nfischer](https://github.com/nfischer))
- fix: null is no longer confused for an object [\#428](https://github.com/shelljs/shelljs/pull/428) ([nfischer](https://github.com/nfischer))
- fix\(ls\): no trailing newline for empty directories [\#425](https://github.com/shelljs/shelljs/pull/425) ([nfischer](https://github.com/nfischer))
- feat\(cp\): -P option, plus better handling of symlinks [\#421](https://github.com/shelljs/shelljs/pull/421) ([nfischer](https://github.com/nfischer))
- docs\(exec\): fix docs about exec return type [\#419](https://github.com/shelljs/shelljs/pull/419) ([nfischer](https://github.com/nfischer))
- docs\(error\): deprecate relying on string value [\#418](https://github.com/shelljs/shelljs/pull/418) ([nfischer](https://github.com/nfischer))
- fix: error message now printed for fatal failures [\#417](https://github.com/shelljs/shelljs/pull/417) ([nfischer](https://github.com/nfischer))
- issue-407: Add regular files unit tests and fix symlink copy behavior [\#409](https://github.com/shelljs/shelljs/pull/409) ([charlesverge](https://github.com/charlesverge))
- refactor\(rm\): Remove duplicate code [\#408](https://github.com/shelljs/shelljs/pull/408) ([nfischer](https://github.com/nfischer))
- docs: wildcards for all commands, other docs cleanups [\#404](https://github.com/shelljs/shelljs/pull/404) ([nfischer](https://github.com/nfischer))
- test\(rm\): add tests to prevent a future regression [\#403](https://github.com/shelljs/shelljs/pull/403) ([nfischer](https://github.com/nfischer))
- refactor\(string\): modify string protoype, but only for shelljs/global [\#401](https://github.com/shelljs/shelljs/pull/401) ([nfischer](https://github.com/nfischer))
- feat: adding error codes to ShellJS [\#394](https://github.com/shelljs/shelljs/pull/394) ([nfischer](https://github.com/nfischer))
- feature: use rechoir [\#384](https://github.com/shelljs/shelljs/pull/384) ([nfischer](https://github.com/nfischer))
- refactor\(cp\): clean up code and fix \#376 [\#380](https://github.com/shelljs/shelljs/pull/380) ([nfischer](https://github.com/nfischer))
- New commands: sort\(\), head\(\), and tail\(\) [\#379](https://github.com/shelljs/shelljs/pull/379) ([nfischer](https://github.com/nfischer))
- Add unit tests to prevent regression \(see \#376\) [\#378](https://github.com/shelljs/shelljs/pull/378) ([nfischer](https://github.com/nfischer))
- feat\(pipe\): add support for pipes between commands [\#370](https://github.com/shelljs/shelljs/pull/370) ([nfischer](https://github.com/nfischer))
- refactor\(ls\): greatly simplify ls implimentation [\#369](https://github.com/shelljs/shelljs/pull/369) ([ariporad](https://github.com/ariporad))
- chore: drop node v0.10 support [\#368](https://github.com/shelljs/shelljs/pull/368) ([ariporad](https://github.com/ariporad))
- perf\(cd\): only run `stat` once [\#367](https://github.com/shelljs/shelljs/pull/367) ([ariporad](https://github.com/ariporad))
- fix\(exec\): properly handles paths with spaces and quotes [\#365](https://github.com/shelljs/shelljs/pull/365) ([nfischer](https://github.com/nfischer))
- test\(ln\): add tests for linking to cwd [\#364](https://github.com/shelljs/shelljs/pull/364) ([nfischer](https://github.com/nfischer))
- fix\(verbose\): verbose-style logging is consistent [\#362](https://github.com/shelljs/shelljs/pull/362) ([nfischer](https://github.com/nfischer))
- Refactor shellstring [\#360](https://github.com/shelljs/shelljs/pull/360) ([nfischer](https://github.com/nfischer))
- feat\(glob\): use glob module for globbing [\#359](https://github.com/shelljs/shelljs/pull/359) ([nfischer](https://github.com/nfischer))
- feat\(set\): add -f option to disable globbing [\#358](https://github.com/shelljs/shelljs/pull/358) ([nfischer](https://github.com/nfischer))
- config.fatal now throws an exception [\#357](https://github.com/shelljs/shelljs/pull/357) ([jrmclaurin](https://github.com/jrmclaurin))
- fix\(exec\): temp files are now cleaned up [\#354](https://github.com/shelljs/shelljs/pull/354) ([nfischer](https://github.com/nfischer))
- feat\(glob\): glob support for \(almost\) all commands [\#352](https://github.com/shelljs/shelljs/pull/352) ([nfischer](https://github.com/nfischer))
- feat\(grep\): add -l option [\#349](https://github.com/shelljs/shelljs/pull/349) ([nfischer](https://github.com/nfischer))
- fix\(exec\): now actually supports shell option [\#348](https://github.com/shelljs/shelljs/pull/348) ([nfischer](https://github.com/nfischer))
- feat\(touch\): supports multiple files [\#346](https://github.com/shelljs/shelljs/pull/346) ([nfischer](https://github.com/nfischer))

## [v0.6.0](https://github.com/shelljs/shelljs/tree/v0.6.0) (2016-02-05)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.5.3...v0.6.0)

**Closed issues:**

- option not recognized [\#334](https://github.com/shelljs/shelljs/issues/334)
- Feature request: Metadata with `ls` [\#323](https://github.com/shelljs/shelljs/issues/323)
- Gen-docs is broken [\#309](https://github.com/shelljs/shelljs/issues/309)
- `link -s` is broken for files on Windows [\#301](https://github.com/shelljs/shelljs/issues/301)
- Shelljs quits unexpectedly: [\#300](https://github.com/shelljs/shelljs/issues/300)
- Failing tests on Windows [\#296](https://github.com/shelljs/shelljs/issues/296)
- run-tests.js is broken for cmd.exe [\#294](https://github.com/shelljs/shelljs/issues/294)
- Support echo-ing environment variables [\#291](https://github.com/shelljs/shelljs/issues/291)
- Add Windows CI [\#287](https://github.com/shelljs/shelljs/issues/287)
- Add tests for the shjs utility [\#280](https://github.com/shelljs/shelljs/issues/280)
- Allow shjs utility to infer the extension for "filename." [\#278](https://github.com/shelljs/shelljs/issues/278)
- Ability to read the stdout buffer line-by-line [\#277](https://github.com/shelljs/shelljs/issues/277)
- Poor output for commands with multiple errors [\#267](https://github.com/shelljs/shelljs/issues/267)
- Travis ci build status says "unknown" [\#266](https://github.com/shelljs/shelljs/issues/266)
- wild card characters in filename not working as expected [\#262](https://github.com/shelljs/shelljs/issues/262)
- shell.exec - read internal variable [\#260](https://github.com/shelljs/shelljs/issues/260)
- cp and rename directory with -r doesn't match unix behavior [\#256](https://github.com/shelljs/shelljs/issues/256)
- console.log.apply throwing TypeError: Illegal Invocation [\#255](https://github.com/shelljs/shelljs/issues/255)
- How to exit on first error [\#253](https://github.com/shelljs/shelljs/issues/253)
- why not support set 'cwd'  when invoke execAsync ? [\#250](https://github.com/shelljs/shelljs/issues/250)
- Not possible to check the failure of cd? [\#247](https://github.com/shelljs/shelljs/issues/247)
- By default shelljs runs command in root  [\#246](https://github.com/shelljs/shelljs/issues/246)
- /usr/bin/env: node: No such file or directory [\#243](https://github.com/shelljs/shelljs/issues/243)
- "Which" command not working properly on Windows Platform. [\#238](https://github.com/shelljs/shelljs/issues/238)
- Arguments [\#237](https://github.com/shelljs/shelljs/issues/237)
- sed\(\) should accept multiple file arguments [\#231](https://github.com/shelljs/shelljs/issues/231)
- shelljs.exec\('aaa && bbb'\) blocks [\#229](https://github.com/shelljs/shelljs/issues/229)
- Consider creating a GitHub Organization with more maintainers [\#223](https://github.com/shelljs/shelljs/issues/223)
- Doesn't work inside Electron [\#220](https://github.com/shelljs/shelljs/issues/220)
- \[idea\] Add chmodr function. [\#219](https://github.com/shelljs/shelljs/issues/219)
- Execute a file [\#211](https://github.com/shelljs/shelljs/issues/211)
- Where is standard error going to? [\#209](https://github.com/shelljs/shelljs/issues/209)
- boolean return value for string.to\(\) [\#205](https://github.com/shelljs/shelljs/issues/205)
- `common.error` doesn't throw [\#199](https://github.com/shelljs/shelljs/issues/199)
- Problems with exec \(sync\) on 0.12/io.js [\#197](https://github.com/shelljs/shelljs/issues/197)
- cp --update flag [\#172](https://github.com/shelljs/shelljs/issues/172)
- Is there a way to suppress pushd/popd output? [\#171](https://github.com/shelljs/shelljs/issues/171)
- Cannot recursively list all \*.js files [\#162](https://github.com/shelljs/shelljs/issues/162)
- exec\(\) breaks if executed in a deleted directory [\#157](https://github.com/shelljs/shelljs/issues/157)
- shjs command always exits with zero code [\#133](https://github.com/shelljs/shelljs/issues/133)
- Windows failing tests [\#127](https://github.com/shelljs/shelljs/issues/127)
- touch command [\#122](https://github.com/shelljs/shelljs/issues/122)
- Symbolic links are broken! [\#100](https://github.com/shelljs/shelljs/issues/100)
- interpret `--` as stdin [\#55](https://github.com/shelljs/shelljs/issues/55)
- Error ENOTEMPTY when deleting a directory recursively. [\#49](https://github.com/shelljs/shelljs/issues/49)
- Cross-platform way to add to PATH [\#32](https://github.com/shelljs/shelljs/issues/32)
- `mv` fails on block, character, fifo [\#25](https://github.com/shelljs/shelljs/issues/25)
- ls -l [\#22](https://github.com/shelljs/shelljs/issues/22)

**Merged pull requests:**

- feat\(set\): add new set\(\) command [\#329](https://github.com/shelljs/shelljs/pull/329) ([nfischer](https://github.com/nfischer))
- Fix symlinking on Windows [\#322](https://github.com/shelljs/shelljs/pull/322) ([BYK](https://github.com/BYK))
- Rewrite .gitignore to be more comprehensive [\#321](https://github.com/shelljs/shelljs/pull/321) ([BYK](https://github.com/BYK))
- chore\(gitter/travis\): add gitter webhook to travis [\#313](https://github.com/shelljs/shelljs/pull/313) ([ariporad](https://github.com/ariporad))
- chore\(LGTM\): add LGTM config files [\#312](https://github.com/shelljs/shelljs/pull/312) ([ariporad](https://github.com/ariporad))
- feat\(ls\): add -d flag to ls\(\) [\#311](https://github.com/shelljs/shelljs/pull/311) ([nfischer](https://github.com/nfischer))
- fix\(gen-docs\): fix issue where docs are generated wrong [\#310](https://github.com/shelljs/shelljs/pull/310) ([nfischer](https://github.com/nfischer))
- chore\(package\): remove v0.8 from engines list [\#308](https://github.com/shelljs/shelljs/pull/308) ([nfischer](https://github.com/nfischer))
- travis: Mark as not using `sudo` and do not test 0.11 [\#307](https://github.com/shelljs/shelljs/pull/307) ([TimothyGu](https://github.com/TimothyGu))
- fix: jshint works on Windows [\#295](https://github.com/shelljs/shelljs/pull/295) ([nfischer](https://github.com/nfischer))
- feat: add tilde expansion to expand\(\) [\#293](https://github.com/shelljs/shelljs/pull/293) ([nfischer](https://github.com/nfischer))
- style: make docs more consistent [\#292](https://github.com/shelljs/shelljs/pull/292) ([nfischer](https://github.com/nfischer))
- update `exec` docs to match implemented behaviour [\#289](https://github.com/shelljs/shelljs/pull/289) ([vise890](https://github.com/vise890))
- chore: update github URL in package.json [\#288](https://github.com/shelljs/shelljs/pull/288) ([nfischer](https://github.com/nfischer))
- docs\(spelling\): fix typo in source comment [\#285](https://github.com/shelljs/shelljs/pull/285) ([nfischer](https://github.com/nfischer))
- chore\(travis\): add OS X to Travis CI [\#283](https://github.com/shelljs/shelljs/pull/283) ([nfischer](https://github.com/nfischer))
- Don't do `console.log.apply\(this, ...\)`. [\#274](https://github.com/shelljs/shelljs/pull/274) ([ariporad](https://github.com/ariporad))
- Implementing cd\('-'\) to behave like Bash's "cd -" [\#273](https://github.com/shelljs/shelljs/pull/273) ([nfischer](https://github.com/nfischer))
- Fix cp to match unix behavior [\#271](https://github.com/shelljs/shelljs/pull/271) ([freitagbr](https://github.com/freitagbr))
- Commands that have multiple errors now produce cleaner log output [\#268](https://github.com/shelljs/shelljs/pull/268) ([nfischer](https://github.com/nfischer))
- Support exit code in shjs. [\#252](https://github.com/shelljs/shelljs/pull/252) ([bryce-gibson](https://github.com/bryce-gibson))
- add touch\(1\) [\#249](https://github.com/shelljs/shelljs/pull/249) ([blockloop](https://github.com/blockloop))
- Fix `os.tmpdir` bug [\#240](https://github.com/shelljs/shelljs/pull/240) ([BYK](https://github.com/BYK))
- Make sure Which\(\) on Windows platform always return the command with … [\#239](https://github.com/shelljs/shelljs/pull/239) ([TingluoHuang](https://github.com/TingluoHuang))
- Add target node.js \(iojs v1, v2, v3\) [\#230](https://github.com/shelljs/shelljs/pull/230) ([sanemat](https://github.com/sanemat))
- feat-multisymbolic + Support for directory entry \(capital X in chmod terms\) [\#228](https://github.com/shelljs/shelljs/pull/228) ([rezonant](https://github.com/rezonant))
- Fixes an issue with multi-symbolic mode specification \(ie a-rwx,u+rw\) [\#227](https://github.com/shelljs/shelljs/pull/227) ([rezonant](https://github.com/rezonant))
- Memoized the result of target invocation [\#216](https://github.com/shelljs/shelljs/pull/216) ([rizowski](https://github.com/rizowski))
- remove empty for loop and leaked i var [\#166](https://github.com/shelljs/shelljs/pull/166) ([ratbeard](https://github.com/ratbeard))
- Wrap script name in double quotes [\#135](https://github.com/shelljs/shelljs/pull/135) ([ndelitski](https://github.com/ndelitski))
- Fixed coffeescript syntax in top example [\#99](https://github.com/shelljs/shelljs/pull/99) ([maxnordlund](https://github.com/maxnordlund))
- fix\(touch\): enhance parseOptions and fix touch's -r flag [\#341](https://github.com/shelljs/shelljs/pull/341) ([nfischer](https://github.com/nfischer))
- chore\(.npmignore\): update npmignore [\#339](https://github.com/shelljs/shelljs/pull/339) ([ariporad](https://github.com/ariporad))
- Release v0.6.0 [\#338](https://github.com/shelljs/shelljs/pull/338) ([ariporad](https://github.com/ariporad))
- docs\(README\): remove coffeescript from README [\#337](https://github.com/shelljs/shelljs/pull/337) ([ariporad](https://github.com/ariporad))
- fix\(cp\): add -n option, make -f default behavior [\#336](https://github.com/shelljs/shelljs/pull/336) ([nfischer](https://github.com/nfischer))
- feat\(exec\): allow all exec options to pass through [\#335](https://github.com/shelljs/shelljs/pull/335) ([nfischer](https://github.com/nfischer))
- fix\(mv\): add -n option, make -f default behavior [\#328](https://github.com/shelljs/shelljs/pull/328) ([nfischer](https://github.com/nfischer))
- fix\(cat\): make behavior more like unix [\#326](https://github.com/shelljs/shelljs/pull/326) ([nfischer](https://github.com/nfischer))
- feat\(ls\): add -l  option [\#324](https://github.com/shelljs/shelljs/pull/324) ([nfischer](https://github.com/nfischer))
- style\(test/which\): make test/which.js conform to the style guidelines [\#320](https://github.com/shelljs/shelljs/pull/320) ([ariporad](https://github.com/ariporad))
- chore\(appveyor\): add badge [\#316](https://github.com/shelljs/shelljs/pull/316) ([nfischer](https://github.com/nfischer))
- fix\(windows\): fix shjs commands for windows [\#315](https://github.com/shelljs/shelljs/pull/315) ([nfischer](https://github.com/nfischer))
- feat\(sed\): support multiple file names [\#314](https://github.com/shelljs/shelljs/pull/314) ([nfischer](https://github.com/nfischer))
- feat\(cd\): cd\(\) \(no args\) changes to home directory [\#306](https://github.com/shelljs/shelljs/pull/306) ([nfischer](https://github.com/nfischer))
- test\(shjs\): add tests for shjs [\#304](https://github.com/shelljs/shelljs/pull/304) ([ariporad](https://github.com/ariporad))
- fix: regexes are more consistent with sed and grep [\#303](https://github.com/shelljs/shelljs/pull/303) ([nfischer](https://github.com/nfischer))
- Add appveyor.yml config file [\#299](https://github.com/shelljs/shelljs/pull/299) ([nfischer](https://github.com/nfischer))
- Fix tests on Windows [\#297](https://github.com/shelljs/shelljs/pull/297) ([BYK](https://github.com/BYK))
- Search PATHEXT instead of 3 hardcoded values [\#290](https://github.com/shelljs/shelljs/pull/290) ([isiahmeadows](https://github.com/isiahmeadows))
- Fix relative symlinks [\#282](https://github.com/shelljs/shelljs/pull/282) ([freitagbr](https://github.com/freitagbr))
- Make to and toEnd chainable [\#276](https://github.com/shelljs/shelljs/pull/276) ([TimothyGu](https://github.com/TimothyGu))

## [v0.5.3](https://github.com/shelljs/shelljs/tree/v0.5.3) (2015-08-11)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.5.2...v0.5.3)

**Merged pull requests:**

- Manually closing streams [\#222](https://github.com/shelljs/shelljs/pull/222) ([JulianLaval](https://github.com/JulianLaval))

## [v0.5.2](https://github.com/shelljs/shelljs/tree/v0.5.2) (2015-08-10)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.5.1...v0.5.2)

**Closed issues:**

- Cannot run shell.exec [\#217](https://github.com/shelljs/shelljs/issues/217)
- write after end: internal error [\#206](https://github.com/shelljs/shelljs/issues/206)

**Merged pull requests:**

- Update README.md [\#221](https://github.com/shelljs/shelljs/pull/221) ([giosh94mhz](https://github.com/giosh94mhz))
- prevent internal error: write after end [\#214](https://github.com/shelljs/shelljs/pull/214) ([charlierudolph](https://github.com/charlierudolph))

## [v0.5.1](https://github.com/shelljs/shelljs/tree/v0.5.1) (2015-06-05)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.5.0...v0.5.1)

**Closed issues:**

- cd into home directory [\#9](https://github.com/shelljs/shelljs/issues/9)

**Merged pull requests:**

- Fix issue \#49: Retry rmdirSync on Windows for up to 1 second if files still exist. [\#179](https://github.com/shelljs/shelljs/pull/179) ([andreialecu](https://github.com/andreialecu))

## [v0.5.0](https://github.com/shelljs/shelljs/tree/v0.5.0) (2015-05-19)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.3.0...v0.5.0)

**Closed issues:**

- Enter text to prompt [\#203](https://github.com/shelljs/shelljs/issues/203)
- Find which shell is being used [\#195](https://github.com/shelljs/shelljs/issues/195)
- Pass command line params to the make tool [\#188](https://github.com/shelljs/shelljs/issues/188)
- Is it possible to call exec with a command containing new lines ? [\#177](https://github.com/shelljs/shelljs/issues/177)
- The installation would break on Windows 7 [\#161](https://github.com/shelljs/shelljs/issues/161)
- Q.ninvoke\(\) returns undefined [\#153](https://github.com/shelljs/shelljs/issues/153)
- installed shelljs on osx but reported error: npm ERR! 404 '%5B-g%5D' is not in the npm registry. [\#124](https://github.com/shelljs/shelljs/issues/124)
- "ln" not found \(OS X\) [\#106](https://github.com/shelljs/shelljs/issues/106)
- Using shelljs in a CLI app. [\#91](https://github.com/shelljs/shelljs/issues/91)

**Merged pull requests:**

- Breaking: Allow -- as args separators \(fixes \#188\) [\#207](https://github.com/shelljs/shelljs/pull/207) ([nzakas](https://github.com/nzakas))
- Update .travis.yml [\#190](https://github.com/shelljs/shelljs/pull/190) ([arturadib](https://github.com/arturadib))
- Use new child\_process.execSync instead of busywaiting [\#189](https://github.com/shelljs/shelljs/pull/189) ([devTristan](https://github.com/devTristan))
- Update README.md: explains how to access "config" [\#145](https://github.com/shelljs/shelljs/pull/145) ([kerphi](https://github.com/kerphi))
- Fix to set state.error before throw the exception [\#120](https://github.com/shelljs/shelljs/pull/120) ([abdul-martinez](https://github.com/abdul-martinez))
- Add -l and -s support to grep. [\#116](https://github.com/shelljs/shelljs/pull/116) ([idearat](https://github.com/idearat))

## [v0.3.0](https://github.com/shelljs/shelljs/tree/v0.3.0) (2014-05-08)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.2.6...v0.3.0)

**Closed issues:**

- grep\(\) should fully support globing [\#118](https://github.com/shelljs/shelljs/issues/118)
- sed\(\) could support replacement function [\#115](https://github.com/shelljs/shelljs/issues/115)
- How would you close an exec process that runs indefinitely? [\#113](https://github.com/shelljs/shelljs/issues/113)
- listen for intermittent output of a long-running child process [\#111](https://github.com/shelljs/shelljs/issues/111)
-  Cannot find module 'shelljs' after installing shelljs with npm [\#109](https://github.com/shelljs/shelljs/issues/109)
- Massive CPU usage on exec\(\) windows [\#108](https://github.com/shelljs/shelljs/issues/108)
- cp skipping dot files? [\#79](https://github.com/shelljs/shelljs/issues/79)
- $variables in exec\(\) aren't handled correctly [\#11](https://github.com/shelljs/shelljs/issues/11)
- debug flag that prints commands instead of executing [\#8](https://github.com/shelljs/shelljs/issues/8)

**Merged pull requests:**

- grep\(\) support for globing, fixes \#118 [\#119](https://github.com/shelljs/shelljs/pull/119) ([utensil](https://github.com/utensil))
- make sed\(\) support replacement function, fixes \#115 [\#117](https://github.com/shelljs/shelljs/pull/117) ([utensil](https://github.com/utensil))
- which\(\) should only find files, not directories [\#110](https://github.com/shelljs/shelljs/pull/110) ([panrafal](https://github.com/panrafal))
- Added the New BSD license to the package.json. [\#105](https://github.com/shelljs/shelljs/pull/105) ([keskival](https://github.com/keskival))
- Added win32 support to ln [\#104](https://github.com/shelljs/shelljs/pull/104) ([jamon](https://github.com/jamon))
- Fix ln using bad paths when given abspaths. [\#89](https://github.com/shelljs/shelljs/pull/89) ([Schoonology](https://github.com/Schoonology))
- Add ln support, including both -s and -f options. [\#88](https://github.com/shelljs/shelljs/pull/88) ([Schoonology](https://github.com/Schoonology))
- add support for symlinking \(junctions\) on win32 [\#87](https://github.com/shelljs/shelljs/pull/87) ([jamon](https://github.com/jamon))

## [v0.2.6](https://github.com/shelljs/shelljs/tree/v0.2.6) (2013-09-22)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.2.5...v0.2.6)

**Closed issues:**

- Versions 0.2.4 and 0.2.3 keep throwing strange errors [\#82](https://github.com/shelljs/shelljs/issues/82)
- Add global pollution tests [\#33](https://github.com/shelljs/shelljs/issues/33)

## [v0.2.5](https://github.com/shelljs/shelljs/tree/v0.2.5) (2013-09-11)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.2.4...v0.2.5)

**Closed issues:**

- shelljs.exec stalls on Red Hat when script is invoked with 'sudo -u username' [\#72](https://github.com/shelljs/shelljs/issues/72)

## [v0.2.4](https://github.com/shelljs/shelljs/tree/v0.2.4) (2013-09-11)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.2.3...v0.2.4)

## [v0.2.3](https://github.com/shelljs/shelljs/tree/v0.2.3) (2013-09-09)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.2.2...v0.2.3)

**Merged pull requests:**

- Make shell.exec\(\) treat process error return codes as shelljs errors [\#80](https://github.com/shelljs/shelljs/pull/80) ([nilsbunger](https://github.com/nilsbunger))

## [v0.2.2](https://github.com/shelljs/shelljs/tree/v0.2.2) (2013-09-02)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.1.4...v0.2.2)

**Closed issues:**

- which and node\_modules [\#63](https://github.com/shelljs/shelljs/issues/63)
- cannot install with nodejs 0.10.2 [\#57](https://github.com/shelljs/shelljs/issues/57)

**Merged pull requests:**

- Addition of a toEnd\(\) function modeled after the Unix \>\> pipe. [\#78](https://github.com/shelljs/shelljs/pull/78) ([a10y](https://github.com/a10y))
- Added appendTo\(\) function to imitate '\>\>' redirect-and-append pipe. [\#75](https://github.com/shelljs/shelljs/pull/75) ([a10y](https://github.com/a10y))
- Fix a small typo in README.md [\#71](https://github.com/shelljs/shelljs/pull/71) ([asmblah](https://github.com/asmblah))
- adding an `.npmignore` file [\#70](https://github.com/shelljs/shelljs/pull/70) ([stephenmathieson](https://github.com/stephenmathieson))
- tempdir: use `os.tmpDir` when possible [\#67](https://github.com/shelljs/shelljs/pull/67) ([stephenmathieson](https://github.com/stephenmathieson))

## [v0.1.4](https://github.com/shelljs/shelljs/tree/v0.1.4) (2013-05-10)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.1.3...v0.1.4)

**Merged pull requests:**

- removing extra fs calls [\#62](https://github.com/shelljs/shelljs/pull/62) ([stephenmathieson](https://github.com/stephenmathieson))
- moving \_jshint\_ to a development dependency [\#61](https://github.com/shelljs/shelljs/pull/61) ([stephenmathieson](https://github.com/stephenmathieson))
- Make the maximum buffersize 20 MB. [\#59](https://github.com/shelljs/shelljs/pull/59) ([waddlesplash](https://github.com/waddlesplash))

## [v0.1.3](https://github.com/shelljs/shelljs/tree/v0.1.3) (2013-04-21)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.1.2...v0.1.3)

**Merged pull requests:**

- test\('-L', badlink\) should return true [\#56](https://github.com/shelljs/shelljs/pull/56) ([lge88](https://github.com/lge88))
- exec options now allows `silent:true` with callback. [\#54](https://github.com/shelljs/shelljs/pull/54) ([iapain](https://github.com/iapain))
- Add Zepto to README [\#53](https://github.com/shelljs/shelljs/pull/53) ([madrobby](https://github.com/madrobby))

## [v0.1.2](https://github.com/shelljs/shelljs/tree/v0.1.2) (2013-01-08)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.1.1...v0.1.2)

**Closed issues:**

- pushd/popd [\#24](https://github.com/shelljs/shelljs/issues/24)

**Merged pull requests:**

- Implemented chmod command.  Github issue 35 [\#48](https://github.com/shelljs/shelljs/pull/48) ([brandonramirez](https://github.com/brandonramirez))

## [v0.1.1](https://github.com/shelljs/shelljs/tree/v0.1.1) (2013-01-01)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.1.0...v0.1.1)

**Merged pull requests:**

- Work in progress: pushd/popd/dirs [\#47](https://github.com/shelljs/shelljs/pull/47) ([mstade](https://github.com/mstade))

## [v0.1.0](https://github.com/shelljs/shelljs/tree/v0.1.0) (2012-12-26)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.9...v0.1.0)

**Closed issues:**

- test\(\) for binary file? [\#45](https://github.com/shelljs/shelljs/issues/45)
- Inconsistent behaviour of cp command with directories. [\#44](https://github.com/shelljs/shelljs/issues/44)
- Executing SSH with ShellJs [\#43](https://github.com/shelljs/shelljs/issues/43)

**Merged pull requests:**

- Fix for \#44 [\#46](https://github.com/shelljs/shelljs/pull/46) ([mstade](https://github.com/mstade))
- Fix single/double quotes in exec [\#42](https://github.com/shelljs/shelljs/pull/42) ([danielepolencic](https://github.com/danielepolencic))

## [v0.0.9](https://github.com/shelljs/shelljs/tree/v0.0.9) (2012-12-01)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.8...v0.0.9)

**Closed issues:**

- silent output [\#40](https://github.com/shelljs/shelljs/issues/40)
- asynchronous exec [\#34](https://github.com/shelljs/shelljs/issues/34)

**Merged pull requests:**

- Passed process arguments to executable script [\#36](https://github.com/shelljs/shelljs/pull/36) ([Zanisimo](https://github.com/Zanisimo))

## [v0.0.8](https://github.com/shelljs/shelljs/tree/v0.0.8) (2012-10-11)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.7...v0.0.8)

**Closed issues:**

- exec with callback should automatically be async [\#31](https://github.com/shelljs/shelljs/issues/31)
- Exporting variables. [\#30](https://github.com/shelljs/shelljs/issues/30)
- Detecting shelljs/node [\#27](https://github.com/shelljs/shelljs/issues/27)

**Merged pull requests:**

- fix: global leak 'stats' [\#29](https://github.com/shelljs/shelljs/pull/29) ([ando-takahiro](https://github.com/ando-takahiro))
- -a includes . and ..; -A does not [\#28](https://github.com/shelljs/shelljs/pull/28) ([aeosynth](https://github.com/aeosynth))

## [v0.0.7](https://github.com/shelljs/shelljs/tree/v0.0.7) (2012-09-23)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.6...v0.0.7)

**Closed issues:**

- gh-pages: clicking 'fork me' just reloads the page [\#26](https://github.com/shelljs/shelljs/issues/26)
- Not declared local var implies possible memory leak [\#21](https://github.com/shelljs/shelljs/issues/21)
- Cannot echo a string that starts with - [\#20](https://github.com/shelljs/shelljs/issues/20)
- Unexpected cp behaviour with directories [\#15](https://github.com/shelljs/shelljs/issues/15)

**Merged pull requests:**

- add primaries to \_test [\#23](https://github.com/shelljs/shelljs/pull/23) ([aeosynth](https://github.com/aeosynth))

## [v0.0.6](https://github.com/shelljs/shelljs/tree/v0.0.6) (2012-08-07)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.6pre2...v0.0.6)

**Merged pull requests:**

- Fixed a global variable leak [\#16](https://github.com/shelljs/shelljs/pull/16) ([dallonf](https://github.com/dallonf))

## [v0.0.6pre2](https://github.com/shelljs/shelljs/tree/v0.0.6pre2) (2012-05-25)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.6pre1...v0.0.6pre2)

## [v0.0.6pre1](https://github.com/shelljs/shelljs/tree/v0.0.6pre1) (2012-05-25)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.5...v0.0.6pre1)

## [v0.0.5](https://github.com/shelljs/shelljs/tree/v0.0.5) (2012-05-24)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.5pre4...v0.0.5)

**Closed issues:**

- global.key assigned value 'async' as a result of shell.exec\(...\) [\#12](https://github.com/shelljs/shelljs/issues/12)

**Merged pull requests:**

- Add support for grep option -v. [\#13](https://github.com/shelljs/shelljs/pull/13) ([kkujala](https://github.com/kkujala))

## [v0.0.5pre4](https://github.com/shelljs/shelljs/tree/v0.0.5pre4) (2012-03-27)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.5pre3...v0.0.5pre4)

## [v0.0.5pre3](https://github.com/shelljs/shelljs/tree/v0.0.5pre3) (2012-03-27)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.5pre2...v0.0.5pre3)

## [v0.0.5pre2](https://github.com/shelljs/shelljs/tree/v0.0.5pre2) (2012-03-26)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.5pre1...v0.0.5pre2)

## [v0.0.5pre1](https://github.com/shelljs/shelljs/tree/v0.0.5pre1) (2012-03-26)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.4...v0.0.5pre1)

**Closed issues:**

- rm\(\) does not respect read/write modes [\#6](https://github.com/shelljs/shelljs/issues/6)

## [v0.0.4](https://github.com/shelljs/shelljs/tree/v0.0.4) (2012-03-22)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.3...v0.0.4)

**Closed issues:**

- "For convenient iteration via `for in`, ..."? [\#4](https://github.com/shelljs/shelljs/issues/4)

## [v0.0.3](https://github.com/shelljs/shelljs/tree/v0.0.3) (2012-03-21)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.2...v0.0.3)

## [v0.0.2](https://github.com/shelljs/shelljs/tree/v0.0.2) (2012-03-15)
[Full Changelog](https://github.com/shelljs/shelljs/compare/v0.0.2pre1...v0.0.2)

## [v0.0.2pre1](https://github.com/shelljs/shelljs/tree/v0.0.2pre1) (2012-03-03)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*