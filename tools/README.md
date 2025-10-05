# freeCodeCamp Developer Tools

This directory contains various developer tools and scripts that help maintain, build, and manage the freeCodeCamp curriculum and codebase. These tools are essential for contributors working on challenges, curriculum development, and platform maintenance.

## Overview

The tools are organized into several categories:

- **Challenge Management**: Tools for creating, editing, and auditing curriculum challenges
- **Database Operations**: Scripts for seeding and managing development databases
- **Development Utilities**: Helper scripts for building, linting, and maintaining the codebase
- **Internationalization**: Tools for managing translations and multi-language content

## Quick Start

Most tools can be run from the project root using pnpm scripts. Make sure you have:

1. Node.js >= 22 installed
2. pnpm >= 10 installed
3. Dependencies installed (`pnpm install`)
4. Environment configured (copy `sample.env` to `.env`)

## Tools Directory Structure

### 📋 challenge-auditor
**Purpose**: Validates curriculum challenges across different languages for consistency and completeness.

**Usage**: 
```bash
pnpm run audit-challenges
```

**What it does**:
- Checks that all translated challenge files exist
- Validates challenge metadata and structure
- Ensures no duplicate challenge slugs exist
- Verifies challenge IDs are unique across languages

**When to use**: Before releasing curriculum updates or when working on internationalization.

### ✏️ challenge-editor
**Purpose**: Provides a web-based interface for editing and previewing curriculum challenges.

**Usage**:
```bash
pnpm run challenge-editor
```

**What it does**:
- Starts a local development server for challenge editing
- Provides real-time preview of challenge content
- Allows editing challenge metadata, instructions, and tests
- Runs both client (React app) and API server

**Access**: Visit `http://localhost:3000` after starting

**When to use**: When creating or modifying curriculum challenges with a visual interface.

### 🛠️ challenge-helper-scripts
**Purpose**: Collection of utility scripts for common challenge management tasks.

**Available commands**:
```bash
# Create a new project-based challenge
pnpm run create-new-project

# Create a new language-specific block of challenges  
pnpm run create-new-language-block

# Create a new quiz challenge
pnpm run create-new-quiz

# Rename challenge files in bulk
pnpm run rename-challenges
```

**What it does**:
- Generates boilerplate code for new challenges
- Handles file naming conventions and directory structure
- Creates appropriate metadata and configuration files
- Maintains consistency across challenge types

**When to use**: When adding new challenges or restructuring existing ones.

### 🔍 challenge-parser
**Purpose**: Parses and validates challenge markdown files, converting them into the format used by the platform.

**What it does**:
- Parses challenge markdown files
- Validates challenge structure and syntax
- Converts challenges to JSON format for the platform
- Handles code snippets, tests, and metadata extraction

**When to use**: Automatically used during build process, but useful for debugging challenge format issues.

### ⚙️ client-plugins
**Purpose**: Build-time plugins and configurations for the client application.

**What it does**:
- Provides webpack plugins and configurations
- Handles code transformations during build
- Optimizes client bundle size and performance

**When to use**: Automatically used during client build process.

### 📅 daily-challenges
**Purpose**: Seeds daily coding challenges into the database.

**Usage**:
```bash
pnpm run seed:daily-challenges
```

**What it does**:
- Seeds challenges from the "Dev Playground" superblock
- Creates a `DailyCodingChallenges` collection in the database
- Configured for both local development and production

**Prerequisites**:
- Database connection configured in `.env`
- Main client running to provide GraphQL endpoint

**When to use**: When setting up daily challenges feature in development.

### 📜 scripts
**Purpose**: Contains various utility scripts for database operations, building, and maintenance.

#### Database Scripts
```bash
# Seed development database with demo user and data
pnpm run seed

# Seed with a certified user (for testing certification features)
pnpm run seed:certified-user

# Seed exam questions and data
pnpm run seed:exams

# Seed survey data
pnpm run seed:surveys
```

#### Build and Lint Scripts
Located in `scripts/build/` and `scripts/lint/` respectively.

#### Internationalization Scripts
```bash
# Sync translation files
pnpm run i18n-sync
```

## Common Workflows

### Setting Up Local Development
1. Clone the repository
2. Run `pnpm install`
3. Copy `sample.env` to `.env`
4. Run `pnpm run seed` to populate the database
5. Start development servers with `pnpm run develop`

### Creating a New Challenge
1. Use `pnpm run create-new-project` for project-based challenges
2. Edit the generated files in your preferred editor or use `pnpm run challenge-editor`
3. Test your changes locally
4. Run `pnpm run audit-challenges` to validate
5. Submit your changes as a pull request

### Working on Translations
1. Make changes to English challenges first
2. Run `pnpm run audit-challenges` to ensure consistency
3. Use `pnpm run i18n-sync` to update translation files
4. Work with the translation team for localized content

### Testing Database Changes
1. Make your schema or data changes
2. Run appropriate seed scripts to test with fresh data
3. Verify functionality in development environment
4. Document any new environment variables or setup steps

## Environment Variables

Many tools require environment variables to be set. Key variables include:

- Database connection strings
- API keys for external services
- Feature flags for development
- Debugging options

Refer to `sample.env` for a complete list and copy it to `.env` for local development.

## Troubleshooting

### Common Issues

**Database Connection Errors**:
- Ensure MongoDB is running and accessible
- Check connection string in `.env`
- For local MongoDB, ensure it's configured as a replica set

**Build Failures**:
- Clear node_modules and reinstall: `pnpm run clean-and-develop`
- Check Node.js and pnpm versions match requirements
- Ensure all environment variables are set

**Challenge Audit Failures**:
- Check that all required challenge files exist
- Verify challenge IDs and slugs are unique
- Ensure challenge metadata follows the correct format

**Tool-Specific Issues**:
- Check the individual README files in subdirectories for tool-specific troubleshooting
- Ensure you're running commands from the correct directory
- Verify all prerequisites are installed

## Contributing

When contributing to these tools:

1. Follow the established patterns and conventions
2. Add appropriate tests for new functionality
3. Update documentation when adding new tools or features
4. Test your changes against various challenge types and languages
5. Follow the project's code style and formatting guidelines

## Additional Resources

- [Main Contributing Guide](https://contribute.freecodecamp.org)
- [Challenge Creation Guide](https://contribute.freecodecamp.org/how-to-work-on-coding-challenges/)
- [Local Development Setup](https://contribute.freecodecamp.org/how-to-setup-freecodecamp-locally/)
- [Translation Guide](https://contribute.freecodecamp.org/how-to-translate-files/)

## Support

If you encounter issues with these tools:

1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Ask for help in the [freeCodeCamp Contributors Chat](https://discord.gg/PRyKn3Vbay)
4. Create a new GitHub issue with detailed information about your problem