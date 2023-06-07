import { exec } from 'child_process';
import { join } from 'path';
import { promisify } from 'util';

import { Request, Response } from 'express';
import { ToolsSwitch } from '../interfaces/tools';

const asyncExec = promisify(exec);

const toolsSwitch: ToolsSwitch = {
  'create-next-step': directory => {
    return asyncExec(`cd ${directory} && pnpm run create-next-step`);
  },
  'create-empty-steps': (directory, num) => {
    return asyncExec(`cd ${directory} && pnpm run create-empty-steps ${num}`);
  },
  'insert-step': (directory, num) => {
    return asyncExec(`cd ${directory} && pnpm run insert-step ${num}`);
  },
  'delete-step': (directory, num) => {
    return asyncExec(`cd ${directory} && pnpm run delete-step ${num}`);
  },
  'update-step-titles': directory => {
    return asyncExec(`cd ${directory} && pnpm run update-step-titles`);
  }
};

export const toolsRoute = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { superblock, block, command } = req.params;
  const { num } = req.body as Record<string, number>;
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

  if (!(command in toolsSwitch)) {
    res.json({ stdout: '', stderr: 'Command not found' });
    return;
  }

  const parsed = command as keyof ToolsSwitch;

  const { stdout, stderr } = await toolsSwitch[parsed](directory, num);
  res.json({ stdout, stderr });
};
