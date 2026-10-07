#!/usr/bin/env node
import process from 'node:process';
import isInsideContainer from './index.js';

process.exitCode = isInsideContainer() ? 0 : 2;
