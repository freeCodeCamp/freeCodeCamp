#!/usr/bin/env node
import f, { writeFileSync as w } from 'fs'
import i from './index.js'

let p, a, n, s, o, d

p = process
a = p.argv[2]

if (a == 'init') {
	n = 'package.json'
	s = f.readFileSync(n)
	o = JSON.parse(s)
	;(o.scripts ||= {}).prepare = 'husky'
	w(n, JSON.stringify(o, 0, /\t/.test(s) ? '\t' : 2) + '\n')
	p.stdout.write(i())
	try { f.mkdirSync('.husky') } catch {}
	w('.husky/pre-commit', (p.env.npm_config_user_agent?.split('/')[0] ?? 'npm') + ' test\n')
	p.exit()
}

d = c => console.error(`husky - ${c} command is DEPRECATED`)
if (['add', 'set', 'uninstall'].includes(a)) { d(a); p.exit(1) }
if (a == 'install') d(a)

p.stdout.write(i(a == 'install' ? undefined : a))
