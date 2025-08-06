# to review

## Crowdin action

### plugins

- [x] check-paths
- [x] commit-changes
- [x] convert-chinese. What does it get passed? Does it need updating? CONCLUSION: nope, it's nice and generic and should work as is.
- [x] generate-config
- [x] hide-curriculum-strings.
- [x] hide-renpy-strings
- [x] hide-specific-strings
- [x] lowercase-directories
- [x] pull-request
- [x] remove-deleted-files. Probably want to run this after uploading the new lot.
- [x] unhide-specific-string

### configs

The only one that could matter is curriculum.yml

- [x] the first source should be `/curriculum/challenges/english/blocks/**/*.md`
- [x] the second source should be `/curriculum/challenges/english/certifications/*.yml`

### utils

All seem fine

## i18n repo

### scripts

- [x] execute-brain
- [x] move-bf.sh update destination

### curriculum

- [x] confirm that challenges will automatically get replaced by the action. UPDATE: both are deleted via .github/workflows/crowdin-upload.curriculum.yml
- [x] confirm that dictionary will automatically get replaced by the action

### actions

- [x] merge-and-update.yml
- [x] download-curriculum.yml doesn't seem concerned about the structure of the folders beyond the fact they're all based off curriculum/challenges

## main repo

### actions

- [x] crowdin-upload.curriculum.yml
- [x] curriculum-i18n-submodule.yml
- [x] github-no-i18n-via-prs.yml
- [x] i18n-validate-builds.yml
- [x] i18n-validate-prs.yml

### scripts

- [x] audit-challenges - update to handle the new structure
- [x] audit-challenges - test against espanol. Create script for moving certifications, move them and try again. Then revert the changes to build-superblock
