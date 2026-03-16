import { describe, test, expect } from 'vitest';
import { handleDownloadLink } from './show';
import type { UserOSState } from '../utils/use-detect-os';

describe('handleDownloadLink', () => {
  // handleDownloadLink only cares about the architecture and extension, so we
  // can use simplified sample links for testing.
  const sampleDownloadLinks = [
    'url_x64.exe',
    'url_x86.exe',
    'url_aarch64.dmg',
    'url_x64.dmg',
    'url_x86_64.AppImage',
    'url_aarch64.AppImage',
    'url_x64.app.tar.gz',
    'url_aarch64.tar.gz',
    'url.sig',
    'url.json'
  ];

  test('ignores irrelevant extensions', () => {
    const links = ['url.deb', 'url.rpm', 'url.zip', 'url.sig', 'url.json'];
    const osState: UserOSState = { os: 'WIN', architecture: '' };
    const result = handleDownloadLink(osState, links);
    expect(result).toBe('');
  });

  describe('Windows OS', () => {
    test('returns x64 exe for Windows with x86_64 architecture', () => {
      const osState: UserOSState = { os: 'WIN', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_x64.exe');
    });

    test('returns x86 exe for Windows with x86 architecture', () => {
      const osState: UserOSState = { os: 'WIN', architecture: 'x86' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_x86.exe');
    });

    test('returns any exe when architecture is not specified', () => {
      const osState: UserOSState = { os: 'WIN', architecture: '' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toMatch(/\.exe$/);
    });
  });

  describe('Mac OS', () => {
    test('returns x64 dmg for Mac with x86_64 architecture', () => {
      const osState: UserOSState = { os: 'MAC', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_x64.dmg');
    });

    test('returns aarch64 dmg for Mac with arm64 architecture', () => {
      const osState: UserOSState = { os: 'MAC', architecture: 'arm64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_aarch64.dmg');
    });

    test('returns any dmg when architecture is not specified', () => {
      const osState: UserOSState = { os: 'MAC', architecture: '' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toMatch(/\.dmg$/);
    });
  });

  describe('Linux OS', () => {
    test('returns x86_64 AppImage for Linux with x86_64 architecture', () => {
      const osState: UserOSState = { os: 'LINUX', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_x86_64.AppImage');
    });

    test('returns aarch64 AppImage for Linux with arm64 architecture', () => {
      const osState: UserOSState = { os: 'LINUX', architecture: 'arm64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('url_aarch64.AppImage');
    });

    test('prefers AppImage over tar.gz', () => {
      const links = ['url_x64.tar.gz', 'url_x64.AppImage'];
      const osState: UserOSState = { os: 'LINUX', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x64.AppImage');
    });

    test('prefers app.tar.gz over tar.gz', () => {
      const links = ['url_x64.tar.gz', 'url_x64.app.tar.gz'];
      const osState: UserOSState = { os: 'LINUX', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x64.app.tar.gz');
    });
  });

  describe('Unknown OSes', () => {
    test('returns empty string for unknown OS', () => {
      const osState: UserOSState = { os: 'OTHER', architecture: 'x86_64' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('');
    });

    test('returns empty string for LOADING OS state', () => {
      const osState: UserOSState = { os: 'LOADING', architecture: '' };
      const result = handleDownloadLink(osState, sampleDownloadLinks);
      expect(result).toBe('');
    });
  });

  describe('Architecture normalization', () => {
    test('picks the first link if two normalize to the same arch', () => {
      const links = ['url_x64.exe', 'url_amd64.exe'];
      const osState: UserOSState = { os: 'WIN', architecture: 'amd64' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x64.exe');
    });

    test('normalizes amd64 to x64', () => {
      const links = ['url_fake.exe', 'url_x64.exe'];
      const osState: UserOSState = { os: 'WIN', architecture: 'amd64' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x64.exe');
    });

    test('normalizes arm64 to arm', () => {
      const links = ['url_fake.dmg', 'url_arm.dmg'];
      const osState: UserOSState = { os: 'MAC', architecture: 'arm64' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_arm.dmg');
    });

    test('normalizes i386 to x86', () => {
      const links = ['url_fake.exe', 'url_x86.exe'];
      const osState: UserOSState = { os: 'WIN', architecture: 'i386' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x86.exe');
    });

    test('normalizes i686 to x86', () => {
      const links = ['url_fake.exe', 'url_x86.exe'];
      const osState: UserOSState = { os: 'WIN', architecture: 'i686' };
      const result = handleDownloadLink(osState, links);
      expect(result).toBe('url_x86.exe');
    });
  });
});
