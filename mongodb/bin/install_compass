#!/usr/bin/env python

"""This script downloads the latest version of Compass and installs it on
non-windows platforms."""


import itertools
import logging
import os
import os.path as path
import platform
import re
import shutil
import subprocess
import sys
import tempfile

try:
    from urllib2 import urlopen
except ImportError:
    from urllib.request import urlopen

try:
    from shlex import quote as cmd_quote
except ImportError:
    from pipes import quote as cmd_quote


DOWNLOAD_BASE_URL = 'https://compass.mongodb.com/api/v2/download/latest/compass/stable'

# Some systems may have multiple package managers installed - Debian systems may
# have yum installed, and newer RHEL/Fedora systems may have both dnf and yum.
# These must be checked in the given order for consistent results.
SUPPORTED_LINUX_PKG_MANAGERS = ['apt', 'dnf', 'yum']

LINUX_PKG_MANAGER_ARGS = {
    'apt': ['install', '--yes'],
    'yum': ['install', '--assumeyes'],
    'dnf': ['install', '--assumeyes'],
}

PKG_MANAGER_SUFFIXES = {
    'apt': '.deb',
    'dnf': '.rpm',
    'yum': '.rpm',
    'dmg': '.dmg',
}

SUPPORTED_OSX_VERSION = 10.10
SUPPORTED_RHEL_VERSION = 7
SUPPORTED_DEBIAN_VERSION = 9
SUPPORTED_DEBIAN_RELEASES = [
    'stretch',
    'buster',
    'bullseye',
    'bookworm',
]


class LogLevelFilter(logging.Filter):
    """Filters log messages by level"""

    def __init__(self, levelno, *args, **kwargs):
        self._levelno = levelno
        # In Python 2.6, logging.Filter is not a new-style class, so super()
        # will not work with it. We need to call the base class __init__()
        # directly here so it works with all versions of Python.
        logging.Filter.__init__(self, *args, **kwargs)

    def filter(self, record):
        return record.levelno <= self._levelno


class FileDownloadError(Exception):
    """Exception raised on file download errors"""


class InstallationError(Exception):
    """Exception raised on installation errors"""


def run_command(*args, **kwargs):
    """Runs a command, with optional stdout and stderr."""

    with open(os.devnull, 'w') as fnull:
        stdout = kwargs.pop('stdout', fnull)
        stderr = kwargs.pop('stderr', fnull)

        process = subprocess.Popen([cmd_quote(arg) for arg in args],
                                   stdout=stdout, stderr=stderr, **kwargs)
        stdout, stderr = process.communicate()

        if stdout is not None:
            stdout = stdout.decode('utf-8')
            process.stdout.close()
        if stderr is not None:
            stderr = stderr.decode('utf-8')
            process.stderr.close()

    return (process.wait(), stdout, stderr)


def get_package_manager():
    """Determine the package manager for this Linux distro."""

    if sys.platform == 'darwin':
        return 'dmg'
    else:
        for package_manager in SUPPORTED_LINUX_PKG_MANAGERS:
            try:
                retcode, _, _ = run_command(package_manager, '--help')
                if retcode == 0:
                    return package_manager
            except OSError:
                pass

    return None


def download_progress(count, block_size, total_size):
    """Log the download progress."""

    percent = min(int(count * block_size * 100 / total_size), 100)

    if sys.stdout.isatty():
        sys.stdout.write("\x1b[KDownloading ... " + str(percent) + "%\r")
        sys.stdout.flush()
    else:
        # If we're not writing to a terminal, don't bother being too fancy. This
        # prevents us from filling up logs with many progress lines.
        if count == 1:
            LOG.info('Downloading ...')
        if count % 10 == 0:
            LOG.info("    %dK (%d%%)", block_size / 1024, percent)

    if (count * block_size) >= total_size:
        LOG.info("Complete!")


def download_file(url, filename, block_size=16 * 1024):
    """Download the package from link, logging progress. Returns the filename."""

    try:
        response = urlopen(url)
        total_size = int(response.info()["Content-Length"])
        with open(filename, 'wb') as out_file:
            for count in itertools.count(1):
                chunk = response.read(block_size)
                if not chunk:
                    LOG.info('\nDownload complete!')
                    break
                download_progress(count, block_size, total_size)
                out_file.write(chunk)
        response.close()
    except IOError:
        raise FileDownloadError('Unable to download MongoDB Compass, please check your internet' \
                                ' connection. If the issue persists go to' \
                                ' https://www.mongodb.com/download-center?jmp=hero#compass' \
                                ' to download the compass installer for your platform.')
    else:
        retcode, stdout, stderr = run_command('file', filename,
                                              shell=False, stdout=subprocess.PIPE,
                                              stderr=subprocess.PIPE)
        if retcode != 0:
            raise Exception(stderr)
        if 'ASCII Text' in stdout:
            raise FileDownloadError('Downloaded file is text, but binary was expected.')


def install_mac(dmg):
    """Use CLI tools to mount the dmg and extract all .apps into Applications."""

    tmp = tempfile.mkdtemp()

    retcode, _, stderr = run_command(
        'hdiutil', 'attach', '-nobrowse', '-noautoopen', '-mountpoint', tmp, dmg,
        stderr=subprocess.PIPE)
    if retcode != 0:
        raise InstallationError('Problem running hdiutil: ' + stderr)

    try:
        apps = [f for f in os.listdir(tmp) if f.endswith('.app')]
        for app in apps:
            if path.isdir('/Applications/' + app):
                LOG.info('Old version found removing...')
                shutil.rmtree('/Applications/' + app)
            LOG.info('Copying %s to /Applications', app)
            shutil.copytree(path.join(tmp, app), '/Applications/' + app)
    # We don't really care about what errors come up here. Just log the failure
    # and use the finally to make sure we always unmount the dmg.
    except IOError as error:
        raise InstallationError('Error copying MongoDB Compass to /Applications: ' + error.message)
    finally:
        run_command('hdiutil', 'detach', tmp)

    if path.isdir('/Applications/MongoDB Compass.app'):
        retcode, _, stderr = run_command('open', '/Applications/MongoDB Compass.app',
                                         stderr=subprocess.PIPE)
        if retcode == 0:
            return

    if path.isdir('/Applications/MongoDB Compass Community.app'):
        retcode, _, stderr = run_command('open', '/Applications/MongoDB Compass Community.app',
                                         stderr=subprocess.PIPE)
        if retcode == 0:
            return

    raise InstallationError('Problem opening application: ' + stderr)


def install_linux(package_manager, pkg_file):
    """Use the package manager indicated by pkg_format to install pkg_file."""

    install = tuple([package_manager] + LINUX_PKG_MANAGER_ARGS[package_manager] + [pkg_file])

    retcode, _, stderr = run_command(*install, stderr=subprocess.PIPE)
    if retcode != 0:
        raise InstallationError('Problem running package manager: ' + stderr)


def get_osx_version():
    """Gets the OSX version."""

    mac_version, _, _ = platform.mac_ver()
    # Get Mac OSX Major.Minor verson as a float
    return float('.'.join(mac_version.split('.')[:2]))


def get_rhel_version():
    """Gets the RHEL compatibility version."""

    rhel_version_re = re.compile(r' release (\d+\.\d+)', re.MULTILINE)

    with open('/etc/redhat-release', 'r') as release_file:
        match = rhel_version_re.search(release_file.read())

        if not match:
            return None

        return float('.'.join(match.group(1).split('.')))


def get_debian_release():
    """Gets the Debian release."""

    # Matches from the beginning of the line to a slash or the end of the line
    debian_version_re = re.compile(r'^([^/]+)(?:/|$)', re.MULTILINE)

    with open('/etc/debian_version', 'r') as version_file:
        match = debian_version_re.search(version_file.read())

        if not match:
            return None

        return match.group(1)


def is_supported_linux():  # pylint: disable=too-many-branches,too-many-return-statements
    """Checks whether the Linux version is supported by the Compass package."""

    # This isn't intended to be an exhaustive check of all compatible
    # distributions. We're only checking the ones that are likely to be
    # used when installing either a .deb or a .rpm package.
    if os.path.exists('/etc/redhat-release'):
        rhel_version = get_rhel_version()
        if rhel_version is not None and rhel_version > SUPPORTED_RHEL_VERSION:
            return True

    if os.path.exists('/etc/debian_version'):
        debian_release = get_debian_release()
        try:
            # The debian version string is sometimes just a float. This appears
            # to be only for older releases, but we'll try to be safe here.
            if float(debian_release) >= SUPPORTED_DEBIAN_VERSION:
                return True
            return False
        except ValueError:
            if debian_release is not None and debian_release in SUPPORTED_DEBIAN_RELEASES:
                return True
            return False

    # Matches the key and value separated by an =, with the value optionally
    # being enclosed in quotes.
    os_release_re = re.compile(r'^([A-Z_]+)="?([^"]+)(?:"|$)')
    if os.path.exists('/etc/os-release'):
        os_id = None
        version_id = None
        with open('/etc/os-release', 'r') as os_release:
            for line in os_release.readlines():
                match = os_release_re.search(line)
                if match:
                    if match.group(1) == "ID":
                        os_id = match.group(2)
                    if match.group(1) == "VERSION_ID":
                        version_id = match.group(2)
        # The only two known incompatible distributions that have a
        # /etc/os-release provided by systemd are these two. It's best here to
        # assume the rest will succeed and take the ones that fail individually.
        if os_id == "amzn":
            if version_id.startswith("2018") or version_id.startswith("2016"):
                return False
        if os_id == "opensuse":
            return False
        return True

    return False


def prerequisites_satisfied(package_manager):
    """Check that prerequisites are satisfied before downloading and installing."""

    if package_manager is None:
        LOG.error('You are using an unsupported platform.\n' \
              'Please visit: https://compass.mongodb.com/community-supported-platforms' \
              ' to view available community supported packages.')
        return False

    if platform.machine() != 'x86_64':
        LOG.error('Sorry, MongoDB Compass is only supported on 64-bit Intel platforms.' \
              ' If you believe you\'re seeing this message in error please open a' \
              ' ticket on the SERVER project at https://jira.mongodb.org/')
        return False

    if sys.platform == 'osx' and get_osx_version() < SUPPORTED_OSX_VERSION:
        LOG.error('You are using an unsupported Mac OSX version. Please upgrade\n' \
              'to at least version 10.10 (Yosemite) to install Compass.')
        return False

    if sys.platform.startswith('linux'):
        if os.getuid() != 0:
            LOG.error('You must run this script as root.')
            return False

        if not is_supported_linux():
            LOG.error('You are using an unsupported Linux distribution.\n' \
                      'Please visit: https://compass.mongodb.com/community-supported-platforms' \
                      ' to view available community supported packages.')
            return False

    return True


def get_package_type(package_manager):
    """Gets the package type from the detected package manager."""

    if sys.platform.startswith('linux'):
        package_type = 'linux'
        if package_manager == 'apt':
            package_type += '_deb'
        elif package_manager in ('yum', 'dnf'):
            package_type += '_rpm'
    elif sys.platform == 'darwin':
        package_type = 'osx'

    return package_type


def download_and_install_compass():
    """Download and install compass for this platform."""

    package_manager = get_package_manager()

    if not prerequisites_satisfied(package_manager):
        return sys.exit(1)

    _, filename = tempfile.mkstemp(suffix=PKG_MANAGER_SUFFIXES[package_manager])
    is_successful = True

    url = DOWNLOAD_BASE_URL + "/" + get_package_type(package_manager)
    LOG.info('Retrieving the Compass package from %s', url)

    try:
        download_file(url=url, filename=filename)
    except FileDownloadError as error:
        LOG.exception(error)
        is_successful = False
    except Exception as error:  # pylint: disable=broad-except
        LOG.error('Unexpected error when downloading: %s', error.message)
        is_successful = False

    else:
        LOG.info('Installing the package...')
        try:
            if package_manager == 'dmg':
                install_mac(filename)
            else:
                install_linux(package_manager, filename)
        except InstallationError  as error:
            LOG.exception(error)
            is_successful = False
        except Exception as error:  # pylint: disable=broad-except
            LOG.error('Unexpected error when installing: %s', error.message)
            is_successful = False

    LOG.info('Cleaning up...')
    os.remove(filename)
    LOG.info('Done!')

    return is_successful


# Set up logging to stdout and stderr for the console only
LOG = logging.getLogger()
LOG.setLevel(logging.DEBUG)

LOG_STDOUT_HANDLER = logging.StreamHandler(sys.stdout)
LOG_STDOUT_HANDLER.setLevel(logging.INFO)
LOG_STDOUT_HANDLER.addFilter(LogLevelFilter(logging.INFO))
LOG.addHandler(LOG_STDOUT_HANDLER)

LOG_STDERR_HANDLER = logging.StreamHandler(sys.stderr)
LOG_STDERR_HANDLER.setLevel(logging.ERROR)
LOG_STDERR_HANDLER.addFilter(LogLevelFilter(logging.ERROR))
LOG.addHandler(LOG_STDERR_HANDLER)


if __name__ == '__main__':
    # Set up a log file for both stdout and stderr, but only when this is being
    # executed as a script. This facilitates testing without polluting the test
    # environment.
    LOG_FILE_NAME = '/tmp/install_compass.log'
    LOG_FILE_HANDLER = logging.FileHandler(LOG_FILE_NAME)
    LOG_FILE_HANDLER.setLevel(logging.DEBUG)
    LOG_FILE_FORMATTER = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    LOG_FILE_HANDLER.setFormatter(LOG_FILE_FORMATTER)
    LOG.addHandler(LOG_FILE_HANDLER)

    SUCCESS = download_and_install_compass()
    LOG.info('A log file for this installation can be found at %s', LOG_FILE_NAME)

    if not SUCCESS:
        LOG.error('Please see our documentation for how to download and install ' \
                  'Compass manually: https://docs.mongodb.com/compass/current/install/#download-and-install-compass')
        sys.exit(1)
