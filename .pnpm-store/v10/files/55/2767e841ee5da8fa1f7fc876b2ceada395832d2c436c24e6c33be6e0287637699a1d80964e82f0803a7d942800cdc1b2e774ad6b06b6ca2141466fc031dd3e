const { spawn, execSync } = require('child_process');

let release = process.argv.includes('--release');
build().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function build() {
  if (process.platform === 'darwin') {
    setupMacBuild();
  }

  await new Promise((resolve, reject) => {
    let args = ['build', '--platform', '-c', '../package.json', './artifacts'];
    if (release) {
      args.push('--release');
    }

    if (process.env.RUST_TARGET) {
      args.push('--target', process.env.RUST_TARGET);
    }

    let yarn = spawn('napi', args, {
      stdio: 'inherit',
      cwd: __dirname,
      shell: true,
    });

    yarn.on('error', reject);
    yarn.on('close', resolve);
  });
}

// This forces Clang/LLVM to be used as a C compiler instead of GCC.
// This is necessary for cross-compilation for Apple Silicon in GitHub Actions.
function setupMacBuild() {
  process.env.CC = execSync('xcrun -f clang', { encoding: 'utf8' }).trim();
  process.env.CXX = execSync('xcrun -f clang++', { encoding: 'utf8' }).trim();

  let sysRoot = execSync('xcrun --sdk macosx --show-sdk-path', {
    encoding: 'utf8',
  }).trim();
  process.env.CFLAGS = `-isysroot ${sysRoot} -isystem ${sysRoot}`;
  process.env.MACOSX_DEPLOYMENT_TARGET = '10.9';
}
