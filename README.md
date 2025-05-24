# Weather App Challenge Fix for Issue #60507

## Purpose
This fix addresses FreeCodeCamp issue #60507, a bug in the Weather App challenge where the helper function in the mock API (`window.fetch`) failed to handle `encodeURIComponent` encoded URLs. This caused city name mismatches in the `cityMap` (e.g., `new%20york` instead of `new york`), breaking the weather fetch functionality for encoded URLs, which are valid in web development. The goal was to ensure the helper function properly decodes city names to match the `cityMap` entries, fixing the weather data retrieval.

## Steps Taken
1. **Forked the Repository**: Forked `freeCodeCamp/freeCodeCamp` to `aaadil777/freeCodeCamp` to create a personal copy for contribution.
2. **Cloned the Fork Locally**: Cloned the fork to `C:\fcc` to work around Windows long filename issues:
   ```
   git clone https://github.com/aaadil777/freeCodeCamp.git C:\fcc
   ```
3. **Created a Branch**: Created a new branch named `fix-weather-app-url-encoding` to isolate my changes:
   ```
   git checkout -b fix-weather-app-url-encoding
   ```
4. **Modified the Helper Function**: Edited `curriculum/challenges/english/25-front-end-development/lab-weather-app/66f12a88741aeb16b9246c59.md` in the `# --before-all--` section. Changed the line:
   ```
   const city = url.split('/').pop();
   ```
   to:
   ```
   const city = decodeURIComponent(url.split('/').pop());
   ```
   This ensures encoded city names are decoded before matching in `cityMap`.
5. **Committed the Change**: Staged and committed the change with a descriptive message:
   ```
   git add curriculum/challenges/english/25-front-end-development/lab-weather-app/66f12a88741aeb16b9246c59.md
   git commit -m "Fix helper function to handle encodeURIComponent URLs in Weather App (#60507)"
   ```
6. **Synced the Fork**: Updated my fork’s `main` branch with the upstream repository to resolve the "5000 files changed" issue in the PR:
   - Added the upstream remote:
     ```
     git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
     ```
   - Fetched upstream changes:
     ```
     git fetch upstream
     ```
   - Updated `main`:
     ```
     git checkout main
     git merge upstream/main
     git push origin main
     ```
   - Rebased my branch:
     ```
     git checkout fix-weather-app-url-encoding
     git rebase main
     ```
7. **Force Pushed the Branch**: Pushed the rebased branch to my fork:
   ```
   git push --force origin fix-weather-app-url-encoding
   ```
8. **Created a Pull Request**: Created a PR from `aaadil777/freeCodeCamp:fix-weather-app-url-encoding` to `freeCodeCamp/freeCodeCamp:main`, with the title `"Fix helper function to handle encodeURIComponent URLs in Weather App (#60507)"` and a detailed description including the code change.

## End Result
- The Weather App challenge now correctly handles `encodeURIComponent` encoded URLs. For example, a URL ending with `new%20york` is decoded to `new york`, ensuring the `cityMap` lookup works and the weather data is fetched successfully.
- The PR shows only the intended change (1 file: `66f12a88741aeb16b9246c59.md`) after syncing the fork.
- This fix improves the reliability of the Weather App challenge for learners, ensuring encoded URLs don’t break the functionality.
