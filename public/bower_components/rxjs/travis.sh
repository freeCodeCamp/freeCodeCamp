repo="https://${GH_TOKEN}@github.com/$TRAVIS_REPO_SLUG.git"

# If this is a pull request, we dont want to continue
if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
  echo "Nothing to do on a pull request"
  exit 0
fi

# All Pull requests are to the branch called incoming-pr
# If this is not that branch, the rest of the script is irrelevant
if [ "$TRAVIS_BRANCH" != "incoming-pr" ] ; then
  echo "Nothing to do on the master branch"
  exit 0
fi

git fetch
git branch --all
# This part of the script is run before installing deps or tests
if [ "$1" = "before" ] ; then
	# So this is incoming-pr branch. Need to check if this is exactly same as the master
	# If it is, this branch does not have anything new, so no need to try and build it
	incoming_commit=$(git rev-parse HEAD)
	git checkout --orphan master
	git pull origin master --depth=1
	master_commit=$(git rev-parse HEAD)
	if [ "$incoming_commit" = "$master_commit" ] ; then
		echo "Not required to build this as this is same as the master branch"
		exit 1
	else
		git checkout incoming-pr
		echo "Current branch is - $(git rev-parse HEAD)"
		exit 0
	fi
fi

git checkout incoming-pr
if [ "$1" = "merge" ] ; then
	# If the build was successful, travis after-success will send merge
	echo "Merging incoming-pr to master"
	git checkout master
	git merge incoming-pr --log
	git push $repo master -q 2> /dev/null
else
	# If build failed, travis after-failure will send ./travis.sh revert
	echo "Reverting dev branch to what master was"
	# Save the current changes to a new branch
	echo "Creating a new branch for failed build - incoming-pr-fail-$TRAVIS_BUILD_ID"
	git checkout -b incoming-pr-fail-$TRAVIS_BUILD_ID
	git push $repo incoming-pr-fail-$TRAVIS_BUILD_ID -q 2> /dev/null
	git checkout master
fi

echo "Making incoming-pr same as master"
# Merge or revert is done, so make incoming-pr branch at par with master
# This is done to make it ready for accepting the next pull request
git push $repo --delete incoming-pr -q 2> /dev/null
git branch -D incoming-pr
git branch incoming-pr
git push $repo incoming-pr -q 2> /dev/null
