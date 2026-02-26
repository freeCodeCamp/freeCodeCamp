import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import VersionEndpoint from './version';

interface VersionData {
  client: {
    version: string;
  };
  api: {
    version: string;
    error?: string;
  };
}

// Mock the version utility
vi.mock('../../utils/version', () => ({
  getVersionObject: vi.fn(() => ({ version: 'client-1.0.0' }))
}));

// Mock the env config
vi.mock('../../../config/env.json', () => ({
  default: {
    apiLocation: 'http://localhost:3000',
    deploymentVersion: 'client-1.0.0'
  }
}));

// Mock fetch
global.fetch = vi.fn();

describe('VersionEndpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render plain JSON output without HTML wrapper', async () => {
    const mockApiResponse = { version: '1.2.3' };

    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: () => mockApiResponse
    });

    render(<VersionEndpoint />);

    // Wait for async data to load
    await vi.waitFor(() => {
      expect(screen.getByText(/"client"/)).toBeInTheDocument();
    });

    // Should only contain a pre element with JSON
    const preElement = screen.getByText(/"client"/);
    expect(preElement).toBeInTheDocument();

    // Should not contain any layout elements
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    // The pre element should contain valid JSON
    const jsonText = preElement?.textContent;
    expect(jsonText).toBeTruthy();

    const parsed = JSON.parse(jsonText) as VersionData;
    expect(parsed).toHaveProperty('client');
    expect(parsed).toHaveProperty('api');
    expect(parsed.client).toHaveProperty('version');
    expect(parsed.api).toHaveProperty('version');
  });

  it('should include API error in JSON when fetch fails', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error('Network error')
    );

    render(<VersionEndpoint />);

    await vi.waitFor(() => {
      expect(screen.getByText(/"client"/)).toBeInTheDocument();
    });

    const preElement = screen.getByText(/"client"/);
    const jsonText = preElement?.textContent;
    const parsed = JSON.parse(jsonText) as VersionData;

    expect(parsed.api.error).toBe('Network error');
  });

  it('should include HTTP status error when API returns non-OK status', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    render(<VersionEndpoint />);

    await vi.waitFor(() => {
      expect(screen.getByText(/"client"/)).toBeInTheDocument();
    });

    const preElement = screen.getByText(/"client"/);
    const jsonText = preElement?.textContent;
    const parsed = JSON.parse(jsonText) as VersionData;

    expect(parsed.api.error).toBe('HTTP 500');
  });
});
