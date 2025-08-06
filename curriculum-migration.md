# TODO

- [x] extract order from superblock.json for both original and full-stack style
- [x] handle certifications as well as normal superblocks
- [x] create the i18n submodule and move the challenges around inside it
- [x] make sure the translation can work (i.e. get built when the curriculum locale is not english)
- [x] translate comments
- [x] respect the curriculum structure when building. i.e. `{ superblock: { blocks: { "<blockName>": { meta: <meta>, challenges: []}}} }`
- [x] define a curriculum schema
- [x] add meta validation confirming that the challenge ids in a block are unique
- [x] update the titles of the rest of curriculum/challenges/\_meta/learn-how-to-describe-places-and-events/meta.json
- [x] handle upcoming changes
- [x] use the meta schema
- [x] separate challenge parsing and "fixing" (i.e. challenge creation) from block creation - it should be possible to export the challenge creation function
- [ ] rename things to reflect the disappearance of meta in favour of blocks data.
- [x] figure out the terminology. Blocks vs meta.
- [x] don't fail if i18n titles are duplicated in a block OR add a build step to CI to ensure all language curricula can build
- [x] check if assertHasEnglishSource or hasEnglishSource should be recreated (they were used in buildChallenges and possibly elsewhere). The assertion is handled by validating that the meta and directory match up.
- [x] remove meta from curriculum output
- [x] make sure all the validation is done against curriculum output, not input ("meta" gets validated as a sanity check)
- [x] strip the certification postfix from the certification yml files.
- [ ] rename challenge files by their ids, otherwise it's a pain to look them up.

## Nice to have

- [ ] investigate moving away from using generateSuperBlockList from curriculum/utils.js can we, instead, use one or more curriculum.json files?
- [ ] consolidate tests/validation of meta. We don't need both.
- [ ] stop the client from building the curriculum.json, just load what's already there.
- [ ] consider separating and simplifying the "certifications" superblock since it's not really a superblock, it doesn't have blocks and the format is different.
- [ ] try to find out how to avoid using the slugs as keys/filenames. The worst one being "2022/responsive-web-design", since that can't be used as a filename.
- [ ] consider regularizing the curriculum structure. i.e. `[{ blocks: [ { name: "<blockName>", challenges: []}]  }]`. So, we'd not need the various order properties. First, check that we can sort the entire curriculum like we currently do.
- [ ] rename the files to \<challengeId\>.md
