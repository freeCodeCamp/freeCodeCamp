#!/usr/bin/env node
import process from 'node:process';
import isDocker from './index.js';

process.exitCode = isDocker() ? 0 : 2;
