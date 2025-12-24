import path from 'node:path';
import fs from 'node:fs/promises';

function introTemplate(
  superBlock: string,
  block: string,
  title: string
): string {
  return `---
title: Introduction to the ${title}
block: ${block}
superBlock: ${superBlock}
---

## Introduction to the ${title}

This page is for the ${title}
`;
}

export async function createIntroMD(
  superBlock: string,
  block: string,
  title: string
) {
  const dirPath = path.resolve(
    __dirname,
    `../../../client/src/pages/learn/${superBlock}/${block}/`
  );
  await fs.mkdir(dirPath, { recursive: true });

  const filePath = path.resolve(dirPath, 'index.md');
  await fs.writeFile(filePath, introTemplate(superBlock, block, title), {
    encoding: 'utf8'
  });
}
