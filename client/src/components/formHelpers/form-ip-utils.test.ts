import { describe, test, expect } from 'vitest';
import { isPrivate } from './form-ip-utils';

describe('isPrivate', () => {
  test('recognizes private addresses with a port, path or trailing slash', () => {
    const privateAddresses = [
      'http://localhost',
      'http://localhost:3000',
      'https://localhost:3000',
      'http://localhost/',
      'http://127.0.0.1',
      'http://127.0.0.1:3000',
      'https://127.0.0.1:3000',
      'http://127.0.0.1:3000/',
      'http://[::1]:3000',
      'http://192.168.1.10',
      'http://192.168.1.10:3000',
      'http://10.0.0.1',
      'http://10.0.0.1/app',
      'http://172.16.0.1:8080',
      'http://169.254.1.1:8080/status'
    ];

    privateAddresses.forEach(address => {
      expect(isPrivate(address)).toBe(true);
    });
  });

  test('recognizes bare private IP addresses and IPv6 addresses', () => {
    const barePrivateAddresses = ['192.168.1.10', '10.0.0.1', '::1', 'fe80::1'];

    barePrivateAddresses.forEach(address => {
      expect(isPrivate(address)).toBe(true);
    });
  });

  test('does not recognize public addresses', () => {
    const publicAddresses = [
      'http://localhost.com',
      'http://localhost.com:3000',
      'http://example.com',
      'http://example.com:3000',
      'https://example.com/some/path',
      'http://8.8.8.8',
      'http://8.8.8.8:3000',
      'http://192.169.1.1',
      'http://172.32.0.1',
      'http://11.0.0.1',
      'http://169.255.1.1',
      'https://example.com'
    ];

    publicAddresses.forEach(address => {
      expect(isPrivate(address)).toBe(false);
    });
  });
});
