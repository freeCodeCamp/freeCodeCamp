When you introduce new superblocks to the challenge test framework, you can introduce the new superblock by calling 
cy.updatePaths(superblock, lang).

After you called this function to introduce the new superblock you can call cy.createSpecfiles() to create the new spec files.
The plugin will automatically provide the basic information to write your new test. There is an example in updateTest.js.

You can write the specific test for this block.

If you are writing a new test that needs to be tested against all challenges you can do this by adding your new code to the testChallenges command. We do this to keep the test to a minimum.