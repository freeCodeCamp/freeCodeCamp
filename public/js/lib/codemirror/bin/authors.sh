# Combine existing list of authors with everyone known in git, sort, add header.
tail --lines=+3 AUTHORS > AUTHORS.tmp
git log --format='%aN' >> AUTHORS.tmp
echo -e "List of CodeMirror contributors. Updated before every release.\n" > AUTHORS
sort -u AUTHORS.tmp >> AUTHORS
rm -f AUTHORS.tmp
