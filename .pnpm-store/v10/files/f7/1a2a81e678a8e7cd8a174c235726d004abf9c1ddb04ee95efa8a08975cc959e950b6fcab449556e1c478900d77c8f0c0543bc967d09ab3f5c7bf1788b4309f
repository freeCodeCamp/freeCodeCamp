#!/usr/bin/env node

'use strict'
/**
 * Script to validate GitHub links in the Ecosystem.md file
 * Checks if repositories are accessible or return 404
 *
 * Usage:
 *   node validate-ecosystem-links.js
 *
 * Environment variables:
 *   GITHUB_TOKEN - Optional GitHub token for higher rate limits
 */

const fs = require('node:fs')
const path = require('node:path')

const ECOSYSTEM_FILE = path.join(__dirname, '../docs/Guides/Ecosystem.md')
const GITHUB_OWNER_REGEX = /^[a-z\d](?:[a-z\d-]{0,38})$/i
const GITHUB_REPO_REGEX = /^[a-z\d._-]+$/i

function getGitHubToken () {
  return process.env.GITHUB_TOKEN
}

function isValidGitHubReference (owner, repo) {
  return GITHUB_OWNER_REGEX.test(owner) && GITHUB_REPO_REGEX.test(repo)
}

function extractGitHubLinks (content) {
  const regex = /\[([^\]]+)\]\((https:\/\/github\.com\/([^/]+)\/([^/)]+)[^)]*)\)/g
  const links = []
  let match

  while ((match = regex.exec(content)) !== null) {
    links.push({
      name: match[1],
      url: match[2],
      owner: match[3],
      repo: match[4].replace(/[#?].*$/, '')
    })
  }

  return links
}

async function checkGitHubRepo (owner, repo, retries = 3) {
  if (!isValidGitHubReference(owner, repo)) {
    return {
      owner,
      repo,
      status: 'invalid',
      exists: false,
      error: 'Invalid GitHub repository identifier'
    }
  }

  const headers = {
    'User-Agent': 'fastify-ecosystem-validator'
  }

  const githubToken = getGitHubToken()
  if (githubToken) {
    headers.Authorization = `token ${githubToken}`
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`, {
      method: 'HEAD',
      headers
    })

    // Retry on rate limit (403) with exponential backoff
    if (response.status === 403 && retries > 0) {
      const delay = (4 - retries) * 2000 // 2s, 4s, 6s
      await new Promise(resolve => setTimeout(resolve, delay))
      return checkGitHubRepo(owner, repo, retries - 1)
    }

    return {
      owner,
      repo,
      status: response.status,
      exists: response.status === 200
    }
  } catch (err) {
    return {
      owner,
      repo,
      status: 'error',
      exists: false,
      error: err.message
    }
  }
}

async function validateAllLinks () {
  console.log('Reading Ecosystem.md...\n')
  const content = fs.readFileSync(ECOSYSTEM_FILE, 'utf8')
  const links = extractGitHubLinks(content)

  // Deduplicate by owner/repo
  const seen = new Set()
  const uniqueLinks = links.filter(link => {
    const key = `${link.owner}/${link.repo}`.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  console.log(`Found ${uniqueLinks.length} unique GitHub links to check:\n`)

  const results = []
  let checked = 0

  for (const link of uniqueLinks) {
    checked++
    process.stdout.write(`\r[${checked}/${uniqueLinks.length}] Checking: ${link.owner}/${link.repo}...`.padEnd(80))
    const result = await checkGitHubRepo(link.owner, link.repo)
    results.push({ ...link, ...result })

    // Rate limiting - wait a bit between requests
    await new Promise(resolve => setTimeout(resolve, 200))
  }

  console.log('\n\n========== VALIDATION RESULTS ==========\n')

  const notFound = results.filter(r => !r.exists)
  const found = results.filter(r => r.exists)

  if (notFound.length > 0) {
    console.log('INACCESSIBLE (should be removed):')
    console.log('-'.repeat(50))
    notFound.forEach(r => {
      console.log(`  [${r.status}] ${r.owner}/${r.repo}`)
      console.log(`       ${r.url}`)
    })
    console.log()
  }

  if (found.length > 0) {
    console.log('ACCESSIBLE (kept):')
    console.log('-'.repeat(50))
    found.forEach(r => {
      console.log(`  [${r.status}] ${r.owner}/${r.repo}`)
    })
    console.log()
  }

  console.log('========== SUMMARY ==========')
  console.log(`Total links checked: ${results.length}`)
  console.log(`Inaccessible: ${notFound.length}`)
  console.log(`Accessible: ${found.length}`)

  return { notFound, found }
}

// Export functions for testing
module.exports = {
  extractGitHubLinks,
  checkGitHubRepo,
  validateAllLinks
}

// Run if executed directly
/* c8 ignore start */
if (require.main === module) {
  validateAllLinks()
    .then(({ notFound }) => {
      if (notFound.length > 0) {
        process.exit(1)
      }
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
/* c8 ignore stop */
