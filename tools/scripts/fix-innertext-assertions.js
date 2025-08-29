#!/usr/bin/env node

/**
 * Script to fix innerText assertion issues in curriculum files
 * This addresses issue #60690: "new lines cause failures in tests checking element content"
 *
 * The fix normalizes whitespace before assertions to prevent failures due to newlines
 */

const fs = require('fs');
const path = require('path');

// Patterns to find and replace
const patterns = [
  // Pattern 1: assert.match(element?.innerText, regex)
  {
    find: /assert\.match\s*\(\s*([^)]+)\?\.\s*innerText\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}?.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  },

  // Pattern 2: assert.match(element.innerText, regex) - no optional chaining
  {
    find: /assert\.match\s*\(\s*([^)]+)\.\s*innerText\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  },

  // Pattern 3: assert.match(element?.innerText.trim(), regex)
  {
    find: /assert\.match\s*\(\s*([^)]+)\?\.\s*innerText\s*\.\s*trim\s*\(\s*\)\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}?.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  },

  // Pattern 4: assert.match(element.innerText.trim(), regex) - no optional chaining
  {
    find: /assert\.match\s*\(\s*([^)]+)\.\s*innerText\s*\.\s*trim\s*\(\s*\)\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  },

  // Pattern 5: assert.match(element?.innerText, regex) with spaces
  {
    find: /assert\.match\s*\(\s*([^)]+)\s*\?\.\s*innerText\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}?.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  },

  // Pattern 6: assert.match(element.innerText, regex) with spaces
  {
    find: /assert\.match\s*\(\s*([^)]+)\s*\.\s*innerText\s*,\s*([^)]+)\s*\)\s*;/g,
    replace: (match, element, regex) => {
      return `const actual = ${element}.innerText.replace(/\\s+/g, ' ').trim();\nassert.match(actual, ${regex});`;
    }
  }
];

function findFiles(dir, pattern = /\.md$/) {
  const files = [];

  function scan(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          scan(fullPath);
        } else if (stat.isFile() && pattern.test(item)) {
          files.push(fullPath);
        }
      }
    } catch {
      // Skip directories we can't read
    }
  }

  scan(dir);
  return files;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let newContent = content;

    patterns.forEach(pattern => {
      if (pattern.find.test(newContent)) {
        newContent = newContent.replace(pattern.find, pattern.replace);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔍 Searching for curriculum files with innerText assertions...');

  // Find all curriculum markdown files
  const curriculumDir = path.join(
    __dirname,
    '../../curriculum/challenges/english'
  );
  const files = findFiles(curriculumDir);
  console.log(`📁 Found ${files.length} curriculum files`);

  let fixedCount = 0;

  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\n🎉 Fix complete! Fixed ${fixedCount} files.`);
  console.log('\n📝 Summary of changes:');
  console.log('- Normalized whitespace in innerText assertions');
  console.log('- Added explicit whitespace normalization before assertions');
  console.log(
    '- This prevents test failures due to newlines and whitespace variations'
  );
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, patterns };
