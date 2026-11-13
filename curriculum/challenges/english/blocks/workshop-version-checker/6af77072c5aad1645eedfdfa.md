---
id: 6af77072c5aad1645eedfdfa
title: Step 22
challengeType: 20
dashedName: step-22
---

# --description--

Now you can publish a new release. Since `release_version` returns a new tuple, you need to reassign the result to `releases`.

At the end of your code, call `release_version` with `releases` and the string `minor` as the arguments, and assign the result to `releases`.

Then, unpack the result of calling `check_for_update` with `(2, 2, 1)` and `releases` into `status` and `latest_version`, and print them in the same way as before. Version `2.2.1` is not the latest one anymore.

# --hints--

You should call `release_version` with `releases` and the string `minor` as the arguments, and assign the result to `releases`.

```js
({ test: () => runPython(`
assert _Node(_code).has_stmt("releases = release_version(releases, 'minor')")
`) });
```

You should unpack the result of calling `check_for_update` with `(2, 2, 1)` and `releases` into `status` and `latest_version` after releasing the new version.

```js
({ test: () => runPython(`
assert _Node(_code).is_ordered(
  "releases = release_version(releases, 'minor')",
  "status, latest_version = check_for_update((2, 2, 1), releases)"
)
`) });
```

You should print the string `Status:` followed by a space and the value of `status`, and the string `Latest version:` followed by a space and the value of `latest_version`, after the new `check_for_update` call.

```js
({ test: () => runPython(`
code = _Node(_code)
call = "status, latest_version = check_for_update((2, 2, 1), releases)"
assert any(
  code.is_ordered(call, status_print)
  for status_print in ["print(f'Status: {status}')", "print('Status:', status)"]
)
assert any(
  code.is_ordered(call, latest_print)
  for latest_print in ["print(f'Latest version: {latest_version}')", "print('Latest version:', latest_version)"]
)
`) });
```

# --seed--

## --seed-contents--

```py
releases = (
    (1, 9, 0), (2, 0, 0), (1, 9, 1), (2, 1, 0),
    (2, 1, 1), (2, 2, 0), (1, 9, 2), (2, 2, 1)
)


def check_for_update(installed, releases):
    sorted_releases = tuple(sorted(releases, reverse=True))
    latest = sorted_releases[0]

    if installed not in releases:
        return 'not a known release', latest

    if installed == latest:
        return 'up to date', latest

    if installed[0] < latest[0]:
        update_type = 'major update'
    elif installed[:2] < latest[:2]:
        update_type = 'minor update'
    else:
        update_type = 'patch update'

    releases_behind = sorted_releases.index(installed)
    return f'{update_type} available, releases behind: {releases_behind}', latest


def release_version(releases, release_type, base_version=None):
    if base_version is None:
        base_version = sorted(releases, reverse=True)[0]
    elif base_version not in releases:
        print(f'{base_version} is not a known release')
        return releases

    major, minor, patch = base_version

    if release_type == 'major':
        new_version = (major + 1, 0, 0)
    elif release_type == 'minor':
        new_version = (major, minor + 1, 0)
    elif release_type == 'patch':
        new_version = (major, minor, patch + 1)
    else:
        print(f'{release_type} is not a valid release type')
        return releases

    if new_version in releases:
        print(f'{new_version} has already been released')
        return releases

    return releases + (new_version,)


status, latest_version = check_for_update((2, 1, 0), releases)
print(f'Status: {status}')
print(f'Latest version: {latest_version}')

--fcc-editable-region--

--fcc-editable-region--
```
