import { exec } from 'child_process';
import { join } from 'path';
import { promisify } from 'util';

import { Request, Response } from 'express';
import { ToolsSwitch } from '../interfaces/Tools';

const asyncExec = promisify(exec);

const toolsSwitch: ToolsSwitch = {
  'create-next': async directory => {
    const { stdout, stderr } = await asyncExec(
      `cd ${directory} && npm run create-next-step`
    );
    return { stdout, stderr };
  },
  'create-empty': async (directory, start, end) => {
    const { stdout, stderr } = await asyncExec(
      `cd ${directory} && npm run create-empty-steps start=${start} num=${end}`
    );
    return { stdout, stderr };
  },
  'create-between': async (directory, start) => {
    const { stdout, stderr } = await asyncExec(
      `cd ${directory} && npm run create-step-between start=${start}`
    );
    return { stdout, stderr };
  },
  'delete-step': async (directory, start) => {
    const { stdout, stderr } = await asyncExec(
      `cd ${directory} && npm run delete-step num=${start}`
    );
    return { stdout, stderr };
  },
  reorder: async directory => {
    const { stdout, stderr } = await asyncExec(
      `cd ${directory} && npm run reorder-steps`
    );
    return { stdout, stderr };
  }
};

export const toolsRoute = async (req: Request, res: Response) => {
  const { superblock, block, command } = req.params;
  const { start, end } = req.body as Record<string, number>;
  console.table({ superblock, block, command, start, end });
  const directory = join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'curriculum',
    'challenges',
    'english',
    superblock,
    block
  );
  console.log(directory);

  if (!(command in toolsSwitch)) {
    res.json({ stdout: '', stderr: 'Command not found' });
    return;
  }

  const parsed = command as keyof ToolsSwitch;

  const { stdout, stderr } = await toolsSwitch[parsed](directory, start, end);
  res.json({ stdout, stderr });
};
