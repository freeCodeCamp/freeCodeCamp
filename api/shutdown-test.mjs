#!/usr/bin/env node
/* eslint-disable no-undef, turbo/no-undeclared-env-vars -- standalone node
   script: the api eslint config doesn't declare node globals for .mjs, and
   the env vars are test-only knobs, not build inputs */
/**
 * Stress-tests dev-server shutdown/respawn behaviour under `tsx watch`.
 * Written to try to reproduce the EADDRINUSE-on-respawn race that PR
 * #66135 worked around in src/server.ts, and to measure whether that
 * workaround is still needed.
 *
 * How it works: spawns `tsx watch shutdown-test-server.ts` (a minimal
 * fastify server whose SIGTERM handler is selected by SHUTDOWN_MODE — see
 * that file), then repeatedly touches the file to simulate saves. For each
 * restart it polls `GET /` until the reported pid changes, and in parallel
 * reads /proc/net/tcp{,6} to record when the LISTEN socket on the test
 * port disappears. Everything runs in one terminal; the harness owns the
 * child process tree and kills it when done.
 *
 * Usage (from api/, requires api/node_modules):
 *   node shutdown-test.mjs [mode|all] [iterations] [flags]
 *
 *   node shutdown-test.mjs                      # all modes, 2 restarts each
 *   node shutdown-test.mjs naive-exit 20        # one mode, 20 restarts
 *   node shutdown-test.mjs no-exit 5 --poison   # stray-handle failure mode
 *   node shutdown-test.mjs all 10 --hold-request --slow-consumer --early-touch
 *
 * Modes (what the server's SIGTERM handler does):
 *   current     the post-#66135 handler: closeAllConnections + raw
 *               server.close + setImmediate yield + fastify.close + exit(0)
 *   naive-exit  the pre-#66135 handler: fastify.close() then process.exit(0)
 *   pre-pr      naive-exit AND forceCloseConnections:false — the app as it
 *               actually was before the PR
 *   no-exit     proposed simplification: fastify.close() only, no exit();
 *               the process exits naturally when the loop drains
 *
 * Flags (independent failure conditions; combine freely):
 *   --hold-request  keep an in-flight request (GET /hang, never answered)
 *                   open across each restart, like the dev client's polling.
 *                   With forceCloseConnections:false, close() must wait for
 *                   it — the keep-alive-drain theory of the original bug.
 *   --slow-consumer pause reads of the child's stdout/stderr during each
 *                   restart so the pipe fills and the pino-pretty worker
 *                   can't drain — the backpressure a slow terminal applies,
 *                   which is what makes pino's exit-hook flushSync
 *                   (Atomics.wait) actually block. Harsher than any real
 *                   terminal, so results are a worst-case bound.
 *   --early-touch   touch the file a second time 50-450ms after the first,
 *                   so SIGTERM lands while the replacement is still booting
 *                   (pino worker not ready, handlers maybe not installed) —
 *                   the mid-boot theory of the original bug.
 *   --poison        add a ref'd setInterval no onClose hook clears — a
 *                   stand-in for a misbehaving SDK that would keep the
 *                   process alive without process.exit(). Use with no-exit.
 *
 * Env: TEST_PORT (default 3999), LOG_BURST (log lines written during
 * shutdown to fill pino's ring buffer; default 20000).
 *
 * Reading the summary:
 *   EADDRINUSE       > 0 means the original bug reproduced outright.
 *   port freed avg   ms from "save" until the LISTEN socket left
 *                    /proc/net/tcp. This is the EADDRINUSE-producing state:
 *                    values far above ~200ms (or "never observed free")
 *                    mean the dying process held the port. THE key column.
 *   avg/max ms       save-to-new-pid latency. ~5.5s outliers are tsx's
 *                    force-kill escalation (SIGTERM ignored/blocked for
 *                    ~5s), not necessarily the port race.
 *   hangs            no new server within the timeout at all.
 *   procs alive      leftovers before cleanup; baseline is 2 (tsx + server).
 *
 * Findings so far (Linux, tsx 4.21 / pino 9.14 / fastify 5.8, 2026-07):
 * not reproducible. Zero EADDRINUSE and port freed in ~200-450ms across
 * every mode x flag combination, because Node releases the listen fd as
 * soon as close() is initiated, regardless of connections, flush blocks,
 * or exit ordering. If you can reproduce it (macOS especially), please
 * attach the summary to the PR discussion.
 */
import { spawn, execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { utimes } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const API_DIR = dirname(fileURLToPath(import.meta.url));
const SERVER_FILE = join(API_DIR, 'shutdown-test-server.ts');
const TSX = join(API_DIR, 'node_modules', '.bin', 'tsx');
const PORT = Number(process.env.TEST_PORT ?? 3999);

const FLAGS = [
  '--poison',
  '--slow-consumer',
  '--hold-request',
  '--early-touch'
];
const poison = process.argv.includes('--poison');
const slowConsumer = process.argv.includes('--slow-consumer');
const holdRequest = process.argv.includes('--hold-request');
const earlyTouch = process.argv.includes('--early-touch');
// flushSync can block up to 10s under backpressure; leave headroom for it
const RESPAWN_TIMEOUT_MS = slowConsumer ? 25_000 : 15_000;
const argv = process.argv.slice(2).filter(a => !FLAGS.includes(a));
const modeArg = argv[0] ?? 'all';
const iterations = Number(argv[1] ?? 2);
const modes =
  modeArg === 'all'
    ? ['current', 'naive-exit', 'pre-pr', 'no-exit']
    : [modeArg];

let activeChild = null;
const killGroup = child => {
  try {
    process.kill(-child.pid, 'SIGKILL');
  } catch {
    // group already gone
  }
};
process.on('SIGINT', () => {
  if (activeChild) killGroup(activeChild);
  process.exit(130);
});

async function currentPid() {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/`, {
      signal: AbortSignal.timeout(1000)
    });
    if (!res.ok) return null;
    return (await res.json()).pid;
  } catch {
    return null;
  }
}

// Poll until a server with a pid different from oldPid answers.
async function waitForPidChange(oldPid, deadline) {
  while (Date.now() < deadline) {
    const pid = await currentPid();
    if (pid !== null && pid !== oldPid) return pid;
    await sleep(100);
  }
  return null;
}

// Check /proc/net/tcp{,6} for a LISTEN (state 0A) socket on our port. This
// is the OS-level truth about whether a bind() would hit EADDRINUSE, and it
// needs no external tools and has no side effects on the port.
const PORT_HEX = PORT.toString(16).toUpperCase().padStart(4, '0');
function portBound() {
  for (const file of ['/proc/net/tcp', '/proc/net/tcp6']) {
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    for (const line of text.split('\n').slice(1)) {
      const cols = line.trim().split(/\s+/);
      // cols: sl, local_address, rem_address, st, ...
      if (cols[3] === '0A' && cols[1]?.endsWith(`:${PORT_HEX}`)) return true;
    }
  }
  return false;
}

function aliveServerProcesses() {
  try {
    // [t] bracket keeps the pgrep shell's own cmdline from matching itself
    return execSync(`pgrep -f 'shutdown-test-server\\.[t]s' | wc -l`, {
      shell: '/bin/bash'
    })
      .toString()
      .trim();
  } catch {
    return '?';
  }
}

async function runMode(mode) {
  const result = {
    mode,
    respawns: 0,
    hangs: 0,
    eaddrinuse: 0,
    times: [],
    portFreed: [],
    leftover: '?'
  };
  const tail = [];

  const child = spawn(TSX, ['watch', '--clear-screen=false', SERVER_FILE], {
    cwd: API_DIR,
    env: {
      ...process.env,
      SHUTDOWN_MODE: mode,
      POISON_HANDLE: poison ? '1' : '0',
      TEST_PORT: String(PORT)
    },
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });
  activeChild = child;

  const onData = buf => {
    for (const line of buf.toString().split('\n')) {
      if (!line.trim() || line.includes('flush ')) continue; // burst noise
      if (line.includes('EADDRINUSE')) result.eaddrinuse++;
      tail.push(line);
      if (tail.length > 30) tail.shift();
    }
  };
  child.stdout.on('data', onData);
  child.stderr.on('data', onData);

  try {
    let pid = await waitForPidChange(null, Date.now() + RESPAWN_TIMEOUT_MS);
    if (pid === null) {
      console.error(`[${mode}] server never came up; last output:`);
      console.error(tail.join('\n'));
      return result;
    }
    console.log(
      `\n[${mode}]${poison ? ' (poisoned)' : ''} up with pid ${pid}; running ${iterations} restarts`
    );

    for (let i = 1; i <= iterations; i++) {
      let hangAc = null;
      if (holdRequest) {
        // In-flight request the dying server must deal with; established
        // before the "file save" so it's active when SIGTERM arrives.
        hangAc = new AbortController();
        fetch(`http://127.0.0.1:${PORT}/hang`, { signal: hangAc.signal }).catch(
          () => {}
        );
        await sleep(150);
      }
      const t0 = Date.now();
      if (slowConsumer) {
        child.stdout.pause();
        child.stderr.pause();
      }
      const now = new Date();
      await utimes(SERVER_FILE, now, now); // simulate a file save
      if (earlyTouch) {
        // Second save while the replacement is still booting, so its
        // SIGTERM arrives before the pino worker is ready.
        await sleep(50 + Math.random() * 400);
        const again = new Date();
        await utimes(SERVER_FILE, again, again);
      }

      // Watch for the listen socket disappearing so we can tell whether the
      // dying process holds the port while it flushes (the actual bug) or
      // releases it early and merely lingers.
      let portFreedMs = null;
      let settled = false;
      const probe = (async () => {
        while (!settled) {
          if (!portBound()) {
            portFreedMs = Date.now() - t0;
            return;
          }
          await sleep(50);
        }
      })();

      const newPid = await waitForPidChange(pid, t0 + RESPAWN_TIMEOUT_MS);
      settled = true;
      await probe;
      if (slowConsumer) {
        child.stdout.resume();
        child.stderr.resume();
      }
      hangAc?.abort();
      const freedNote =
        portFreedMs !== null
          ? `port freed after ${portFreedMs}ms`
          : 'port never observed free (held until rebind)';
      if (newPid === null) {
        result.hangs++;
        console.log(
          `  #${i}: no new server within ${RESPAWN_TIMEOUT_MS / 1000}s ` +
            `(old process hung, or bind failed — see EADDRINUSE count); ${freedNote}`
        );
        pid = (await currentPid()) ?? pid;
      } else {
        const dt = Date.now() - t0;
        result.respawns++;
        result.times.push(dt);
        if (portFreedMs !== null) result.portFreed.push(portFreedMs);
        pid = newPid;
        console.log(
          `  #${i}: respawned in ${dt}ms (pid ${newPid}); ${freedNote}`
        );
      }
      await sleep(300);
    }
  } finally {
    result.leftover = aliveServerProcesses();
    killGroup(child);
    activeChild = null;
    await sleep(500);
  }
  return result;
}

const results = [];
for (const mode of modes) {
  results.push(await runMode(mode));
}

console.log('\n=== Summary ===');
console.log(
  'mode        respawns  hangs  EADDRINUSE  avg ms  max ms  port freed avg ms  procs alive at end'
);
for (const r of results) {
  const avgOf = xs =>
    xs.length ? Math.round(xs.reduce((a, b) => a + b) / xs.length) : '-';
  const max = r.times.length ? Math.max(...r.times) : '-';
  console.log(
    `${r.mode.padEnd(12)}${String(r.respawns).padEnd(10)}${String(r.hangs).padEnd(7)}` +
      `${String(r.eaddrinuse).padEnd(12)}${String(avgOf(r.times)).padEnd(8)}${String(max).padEnd(8)}` +
      `${String(avgOf(r.portFreed)).padEnd(19)}${r.leftover}`
  );
}
