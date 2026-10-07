# @smithy/shared-ini-file-loader

[![NPM version](https://img.shields.io/npm/v/@smithy/shared-ini-file-loader/latest.svg)](https://www.npmjs.com/package/@smithy/shared-ini-file-loader)
[![NPM downloads](https://img.shields.io/npm/dm/@smithy/shared-ini-file-loader.svg)](https://www.npmjs.com/package/@smithy/shared-ini-file-loader)

## AWS Shared Configuration File Loader

This module provides a function that reads from AWS SDK configuration files and
returns a promise that will resolve with a hash of the parsed contents of the
AWS credentials file and of the AWS config file. Given the [sample
files](#sample-files) below, the promise returned by `loadSharedConfigFiles`
would resolve with:

```javascript
{
  configFile: {
    'default': {
      aws_access_key_id: 'foo',
      aws_secret_access_key: 'bar',
    },
    dev: {
      aws_access_key_id: 'foo1',
      aws_secret_access_key: 'bar1',
    },
    prod: {
      aws_access_key_id: 'foo2',
      aws_secret_access_key: 'bar2',
    },
    'testing host': {
      aws_access_key_id: 'foo4',
      aws_secret_access_key: 'bar4',
    }
  },
  credentialsFile: {
    'default': {
      aws_access_key_id: 'foo',
      aws_secret_access_key: 'bar',
    },
    dev: {
      aws_access_key_id: 'foo1',
      aws_secret_access_key: 'bar1',
    },
    prod: {
      aws_access_key_id: 'foo2',
      aws_secret_access_key: 'bar2',
    }
  },
}
```

If a file is not found, its key (`configFile` or `credentialsFile`) will instead
have a value of an empty object.

## Supported configuration

You may customize how the files are loaded by providing an options hash to the
`loadSharedConfigFiles` function. The following options are supported:

- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or a default of `~/.aws/credentials`.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or a
  default of `~/.aws/config`.
- `ignoreCache` - The provider will normally cache the contents of the files it
  loads. This option will force the provider to reload the files from disk.
  Defaults to `false`.

## Sample files

### `~/.aws/credentials`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2

[prod]
aws_access_key_id=foo3
aws_secret_access_key=bar3
```

### `~/.aws/config`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[profile dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2

[profile prod]
aws_access_key_id=foo3
aws_secret_access_key=bar3

[profile "testing host"]
aws_access_key_id=foo4
aws_secret_access_key=bar4
```
