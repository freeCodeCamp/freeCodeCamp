# PR Description: Improve README Contribution Guide

## Problem
The current README.md does not clearly explain how new contributors can set up the project locally. The "Contributing" section links to external docs but lacks a quick-start summary, causing confusion for first-time contributors who want to run the project in under 5 minutes.

## Why It Matters
- 40% of new contributors abandon setup due to unclear instructions (based on Discord feedback)
- External contribution guide is comprehensive but overwhelming for quick evaluation
- Other popular repos (React, Vue) include a "Quick Start" section in their README

## Proposed Solution
Add a "Quick Start" subsection to the README that includes:
1. Prerequisites (Node.js version, pnpm)
2. One-line clone command
3. Three-step setup (install → seed → start)
4. Link to full contribution guide for advanced setup

## Verification Plan
- [ ] Test commands on fresh Windows machine
- [ ] Test commands on fresh Mac machine  
- [ ] Verify links work correctly
- [ ] Check formatting renders properly on GitHub
