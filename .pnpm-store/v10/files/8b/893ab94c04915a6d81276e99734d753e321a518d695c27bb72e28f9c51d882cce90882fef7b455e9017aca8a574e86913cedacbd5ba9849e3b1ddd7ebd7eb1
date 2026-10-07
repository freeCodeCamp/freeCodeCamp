var Node = {
  child: require('child_process'),
  crypto: require('crypto'),
  fs: require('fs'),
  os: require('os'),
  path: require('path'),
  process: process,
};

class SudoPromptError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SudoPromptError';
  }
}

function Attempt(instance, end) {
  var platform = Node.process.platform;
  if (platform === 'darwin') return Mac(instance, end);
  if (platform === 'linux') return Linux(instance, end);
  if (platform === 'win32') return Windows(instance, end);
  end(new SudoPromptError('Platform not yet supported.'));
}

function EscapeDoubleQuotes(string) {
  if (typeof string !== 'string') throw new SudoPromptError('Expected a string.');
  return string.replace(/"/g, '\\"');
}

function Exec() {
  if (arguments.length < 1 || arguments.length > 3) {
    throw new SudoPromptError('Wrong number of arguments.');
  }
  var command = arguments[0];
  var options = {};
  var end = function() {};
  if (typeof command !== 'string') {
    throw new SudoPromptError('Command should be a string.');
  }
  if (arguments.length === 2) {
    if (arguments[1] && typeof arguments[1] === 'object') {
      options = arguments[1];
    } else if (typeof arguments[1] === 'function') {
      end = arguments[1];
    } else {
      throw new SudoPromptError('Expected options or callback.');
    }
  } else if (arguments.length === 3) {
    if (arguments[1] && typeof arguments[1] === 'object') {
      options = arguments[1];
    } else {
      throw new SudoPromptError('Expected options to be an object.');
    }
    if (typeof arguments[2] === 'function') {
      end = arguments[2];
    } else {
      throw new SudoPromptError('Expected callback to be a function.');
    }
  }
  if (/^sudo/i.test(command)) {
    return end(new SudoPromptError('Command should not be prefixed with "sudo".'));
  }
  if (typeof options.name === 'undefined') {
    var title = Node.process.title;
    if (ValidName(title)) {
      options.name = title;
    } else {
      return end(new SudoPromptError('process.title cannot be used as a valid name.'));
    }
  } else if (!ValidName(options.name)) {
    var error = '';
    error += 'options.name must be alphanumeric only ';
    error += '(spaces are allowed) and <= 70 characters.';
    return end(new SudoPromptError(error));
  }
  if (typeof options.icns !== 'undefined') {
    if (typeof options.icns !== 'string') {
      return end(new SudoPromptError('options.icns must be a string if provided.'));
    } else if (options.icns.trim().length === 0) {
      return end(new SudoPromptError('options.icns must not be empty if provided.'));
    }
  }
  if (typeof options.env !== 'undefined') {
    if (typeof options.env !== 'object') {
      return end(new SudoPromptError('options.env must be an object if provided.'));
    } else if (Object.keys(options.env).length === 0) {
      return end(new SudoPromptError('options.env must not be empty if provided.'));
    } else {
      for (var key in options.env) {
        var value = options.env[key];
        if (typeof key !== 'string' || typeof value !== 'string') {
          return end(
            new SudoPromptError('options.env environment variables must be strings.')
          );
        }
        // "Environment variable names used by the utilities in the Shell and
        // Utilities volume of IEEE Std 1003.1-2001 consist solely of uppercase
        // letters, digits, and the '_' (underscore) from the characters defined
        // in Portable Character Set and do not begin with a digit. Other
        // characters may be permitted by an implementation; applications shall
        // tolerate the presence of such names."
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key)) {
          return end(
            new SudoPromptError(
              'options.env has an invalid environment variable name: ' +
              JSON.stringify(key)
            )
          );
        }
        if (/[\r\n]/.test(value)) {
          return end(
            new SudoPromptError(
              'options.env has an invalid environment variable value: ' +
              JSON.stringify(value)
            )
          );
        }
      }
    }
  }
  var platform = Node.process.platform;
  if (platform !== 'darwin' && platform !== 'linux' && platform !== 'win32') {
    return end(new SudoPromptError('Platform not yet supported.'));
  }
  var instance = {
    command: command,
    options: options,
    uuid: undefined,
    path: undefined
  };
  Attempt(instance, end);
}

function Linux(instance, end) {
  LinuxBinary(instance,
    function(error, binary) {
      if (error) return end(error);
      var command = [];
      // Preserve current working directory:
      command.push('cd "' + EscapeDoubleQuotes(Node.process.cwd()) + '";');
      // Export environment variables:
      for (var key in instance.options.env) {
        var value = instance.options.env[key];
        command.push('export ' + key + '="' + EscapeDoubleQuotes(value) + '";');
      }
      command.push('"' + EscapeDoubleQuotes(binary) + '"');
      if (/kdesudo/i.test(binary)) {
        command.push(
          '--comment',
          '"' + instance.options.name + ' wants to make changes. ' +
          'Enter your password to allow this."'
        );
        command.push('-d'); // Do not show the command to be run in the dialog.
        command.push('--');
      } else if (/pkexec/i.test(binary)) {
        command.push('--disable-internal-agent');
      }
      var magic = 'SUDOPROMPT\n';
      command.push(
        '/bin/bash -c "echo ' + EscapeDoubleQuotes(magic.trim()) + '; ' +
        EscapeDoubleQuotes(instance.command) +
        '"'
      );
      command = command.join(' ');
      Node.child.exec(command, { encoding: 'utf-8', maxBuffer: MAX_BUFFER },
        function(error, stdout, stderr) {
          // ISSUE 88:
          // We must distinguish between elevation errors and command errors.
          //
          // KDESUDO:
          // kdesudo provides no way to do this. We add a magic marker to know
          // if elevation succeeded. Any error thereafter is a command error.
          //
          // PKEXEC:
          // "Upon successful completion, the return value is the return value of
          // PROGRAM. If the calling process is not authorized or an
          // authorization could not be obtained through authentication or an
          // error occured, pkexec exits with a return value of 127. If the
          // authorization could not be obtained because the user dismissed the
          // authentication dialog, pkexec exits with a return value of 126."
          //
          // However, we do not rely on pkexec's return of 127 since our magic
          // marker is more reliable, and we already use it for kdesudo.
          var elevated = stdout && stdout.slice(0, magic.length) === magic;
          if (elevated) stdout = stdout.slice(magic.length);
          // Only normalize the error if it is definitely not a command error:
          // In other words, if we know that the command was never elevated.
          // We do not inspect error messages beyond NO_POLKIT_AGENT.
          // We cannot rely on English errors because of internationalization.
          if (error && !elevated) {
            if (/No authentication agent found/.test(stderr)) {
              error = new SudoPromptError(NO_POLKIT_AGENT);
            } else {
              error = new SudoPromptError(PERMISSION_DENIED);
            }
          }
          end(error, stdout, stderr);
        }
      );
    }
  );
}

function LinuxBinary(instance, end) {
  var index = 0;
  // We used to prefer gksudo over pkexec since it enabled a better prompt.
  // However, gksudo cannot run multiple commands concurrently.
  var paths = ['/usr/bin/kdesudo', '/usr/bin/pkexec'];
  function test() {
    if (index === paths.length) {
      return end(new SudoPromptError('Unable to find pkexec or kdesudo.'));
    }
    var path = paths[index++];
    Node.fs.stat(path,
      function(error) {
        if (error) {
          if (error.code === 'ENOTDIR') return test();
          if (error.code === 'ENOENT') return test();
          end(error);
        } else {
          end(undefined, path);
        }
      }
    );
  }
  test();
}

function Mac(instance, callback) {
  var temp = Node.os.tmpdir();
  if (!temp) return callback(new SudoPromptError('os.tmpdir() not defined.'));
  var user = Node.process.env.USER; // Applet shell scripts require $USER.
  if (!user) return callback(new SudoPromptError('env[\'USER\'] not defined.'));
  UUID(instance,
    function(error, uuid) {
      if (error) return callback(error);
      instance.uuid = uuid;
      instance.path = Node.path.join(
        temp,
        instance.uuid,
        instance.options.name + '.app'
      );
      function end(error, stdout, stderr) {
        Remove(Node.path.dirname(instance.path),
          function(errorRemove) {
            if (error) return callback(error);
            if (errorRemove) return callback(errorRemove);
            callback(undefined, stdout, stderr);
          }
        );
      }
      MacApplet(instance,
        function(error, stdout, stderr) {
          if (error) return end(error, stdout, stderr);
          MacIcon(instance,
            function(error) {
              if (error) return end(error);
              MacPropertyList(instance,
                function(error, stdout, stderr) {
                  if (error) return end(error, stdout, stderr);
                  MacCommand(instance,
                    function(error) {
                      if (error) return end(error);
                      MacOpen(instance,
                        function(error, stdout, stderr) {
                          if (error) return end(error, stdout, stderr);
                          MacResult(instance, end);
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}

function MacApplet(instance, end) {
  var parent = Node.path.dirname(instance.path);
  Node.fs.mkdir(parent,
    function(error) {
      if (error) return end(error);
      var zip = Node.path.join(parent, 'sudo-prompt-applet.zip');
      Node.fs.writeFile(zip, APPLET, 'base64',
        function(error) {
          if (error) return end(error);
          var command = [];
          command.push('/usr/bin/unzip');
          command.push('-o'); // Overwrite any existing applet.
          command.push('"' + EscapeDoubleQuotes(zip) + '"');
          command.push('-d "' + EscapeDoubleQuotes(instance.path) + '"');
          command = command.join(' ');
          Node.child.exec(command, { encoding: 'utf-8' }, end);
        }
      );
    }
  );
}

function MacCommand(instance, end) {
  var path = Node.path.join(
    instance.path,
    'Contents',
    'MacOS',
    'sudo-prompt-command'
  );
  var script = [];
  // Preserve current working directory:
  // We do this for commands that rely on relative paths.
  // This runs in a subshell and will not change the cwd of sudo-prompt-script.
  script.push('cd "' + EscapeDoubleQuotes(Node.process.cwd()) + '"');
  // Export environment variables:
  for (var key in instance.options.env) {
    var value = instance.options.env[key];
    script.push('export ' + key + '="' + EscapeDoubleQuotes(value) + '"');
  }
  script.push(instance.command);
  script = script.join('\n');
  Node.fs.writeFile(path, script, 'utf-8', end);
}

function MacIcon(instance, end) {
  if (!instance.options.icns) return end();
  Node.fs.readFile(instance.options.icns,
    function(error, buffer) {
      if (error) return end(error);
      var icns = Node.path.join(
        instance.path,
        'Contents',
        'Resources',
        'applet.icns'
      );
      Node.fs.writeFile(icns, buffer, end);
    }
  );
}

function MacOpen(instance, end) {
  // We must run the binary directly so that the cwd will apply.
  var binary = Node.path.join(instance.path, 'Contents', 'MacOS', 'applet');
  // We must set the cwd so that the AppleScript can find the shell scripts.
  var options = {
    cwd: Node.path.dirname(binary),
    encoding: 'utf-8'
  };
  // We use the relative path rather than the absolute path. The instance.path
  // may contain spaces which the cwd can handle, but which exec() cannot.
  Node.child.exec('./' + Node.path.basename(binary), options, end);
}

function MacPropertyList(instance, end) {
  // Value must be in single quotes (not double quotes) according to man entry.
  // e.g. defaults write com.companyname.appname "Default Color" '(255, 0, 0)'
  // The defaults command will be changed in an upcoming major release to only
  // operate on preferences domains. General plist manipulation utilities will
  // be folded into a different command-line program.
  var plist = Node.path.join(instance.path, 'Contents', 'Info.plist');
  var path = EscapeDoubleQuotes(plist);
  var key = EscapeDoubleQuotes('CFBundleName');
  var value = instance.options.name + ' Password Prompt';
  if (/'/.test(value)) {
    return end(new SudoPromptError('Value should not contain single quotes.'));
  }
  var command = [];
  command.push('/usr/bin/defaults');
  command.push('write');
  command.push('"' + path + '"');
  command.push('"' + key + '"');
  command.push("'" + value + "'"); // We must use single quotes for value.
  command = command.join(' ');
  Node.child.exec(command, { encoding: 'utf-8' }, end);
}

function MacResult(instance, end) {
  var cwd = Node.path.join(instance.path, 'Contents', 'MacOS');
  Node.fs.readFile(Node.path.join(cwd, 'code'), 'utf-8',
    function(error, code) {
      if (error) {
        if (error.code === 'ENOENT') return end(new SudoPromptError(PERMISSION_DENIED));
        end(error);
      } else {
        Node.fs.readFile(Node.path.join(cwd, 'stdout'), 'utf-8',
          function(error, stdout) {
            if (error) return end(error);
            Node.fs.readFile(Node.path.join(cwd, 'stderr'), 'utf-8',
              function(error, stderr) {
                if (error) return end(error);
                code = parseInt(code.trim(), 10); // Includes trailing newline.
                if (code === 0) {
                  end(undefined, stdout, stderr);
                } else {
                  error = new SudoPromptError(
                    'Command failed: ' + instance.command + '\n' + stderr
                  );
                  error.code = code;
                  end(error, stdout, stderr);
                }
              }
            );
          }
        );
      }
    }
  );
}

function Remove(path, end) {
  if (typeof path !== 'string' || !path.trim()) {
    return end(new SudoPromptError('Argument path not defined.'));
  }
  var command = [];
  if (Node.process.platform === 'win32') {
    if (/"/.test(path)) {
      return end(new SudoPromptError('Argument path cannot contain double-quotes.'));
    }
    command.push('rmdir /s /q "' + path + '"');
  } else {
    command.push('/bin/rm');
    command.push('-rf');
    command.push('"' + EscapeDoubleQuotes(Node.path.normalize(path)) + '"');
  }
  command = command.join(' ');
  Node.child.exec(command, { encoding: 'utf-8' }, end);
}

function UUID(instance, end) {
  Node.crypto.randomBytes(256,
    function(error, random) {
      if (error) random = Date.now() + '' + Math.random();
      var hash = Node.crypto.createHash('SHA256');
      hash.update('sudo-prompt-3');
      hash.update(instance.options.name);
      hash.update(instance.command);
      hash.update(random);
      var uuid = hash.digest('hex').slice(-32);
      if (!uuid || typeof uuid !== 'string' || uuid.length !== 32) {
        // This is critical to ensure we don't remove the wrong temp directory.
        return end(new SudoPromptError('Expected a valid UUID.'));
      }
      end(undefined, uuid);
    }
  );
}

function ValidName(string) {
  // We use 70 characters as a limit to side-step any issues with Unicode
  // normalization form causing a 255 character string to exceed the fs limit.
  if (!/^[a-z0-9 ]+$/i.test(string)) return false;
  if (string.trim().length === 0) return false;
  if (string.length > 70) return false;
  return true;
}

function Windows(instance, callback) {
  var temp = Node.os.tmpdir();
  if (!temp) return callback(new SudoPromptError('os.tmpdir() not defined.'));
  UUID(instance,
    function(error, uuid) {
      if (error) return callback(error);
      instance.uuid = uuid;
      instance.path = Node.path.join(temp, instance.uuid);
      if (/"/.test(instance.path)) {
        // We expect double quotes to be reserved on Windows.
        // Even so, we test for this and abort if they are present.
        return callback(
          new SudoPromptError('instance.path cannot contain double-quotes.')
        );
      }
      instance.pathElevate = Node.path.join(instance.path, 'elevate.vbs');
      instance.pathExecute = Node.path.join(instance.path, 'execute.bat');
      instance.pathCommand = Node.path.join(instance.path, 'command.bat');
      instance.pathStdout = Node.path.join(instance.path, 'stdout');
      instance.pathStderr = Node.path.join(instance.path, 'stderr');
      instance.pathStatus = Node.path.join(instance.path, 'status');
      Node.fs.mkdir(instance.path,
        function(error) {
          if (error) return callback(error);
          function end(error, stdout, stderr) {
            Remove(instance.path,
              function(errorRemove) {
                if (error) return callback(error);
                if (errorRemove) return callback(errorRemove);
                callback(undefined, stdout, stderr);
              }
            );
          }
          WindowsWriteExecuteScript(instance,
            function(error) {
              if (error) return end(error);
              WindowsWriteCommandScript(instance,
                function(error) {
                  if (error) return end(error);
                  WindowsElevate(instance,
                    function(error, stdout, stderr) {
                      if (error) return end(error, stdout, stderr);
                      WindowsWaitForStatus(instance,
                        function(error) {
                          if (error) return end(error);
                          WindowsResult(instance, end);
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}

function WindowsElevate(instance, end) {
  // We used to use this for executing elevate.vbs:
  // var command = 'cscript.exe //NoLogo "' + instance.pathElevate + '"';
  var command = [];
  command.push('powershell.exe');
  command.push('Start-Process');
  command.push('-FilePath');
  // Escape characters for cmd using double quotes:
  // Escape characters for PowerShell using single quotes:
  // Escape single quotes for PowerShell using backtick:
  // See: https://ss64.com/ps/syntax-esc.html
  command.push('"\'' + instance.pathExecute.replace(/'/g, "`'") + '\'"');
  command.push('-WindowStyle hidden');
  command.push('-Verb runAs');
  command = command.join(' ');
  var child = Node.child.exec(command, { encoding: 'utf-8' },
    function(error, stdout, stderr) {
      // We used to return PERMISSION_DENIED only for error messages containing
      // the string 'canceled by the user'. However, Windows internationalizes
      // error messages (issue 96) so now we must assume all errors here are
      // permission errors. This seems reasonable, given that we already run the
      // user's command in a subshell.
      if (error) return end(new SudoPromptError(PERMISSION_DENIED), stdout, stderr);
      end();
    }
  );
  child.stdin.end(); // Otherwise PowerShell waits indefinitely on Windows 7.
}

function WindowsResult(instance, end) {
  Node.fs.readFile(instance.pathStatus, 'utf-8',
    function(error, code) {
      if (error) return end(error);
      Node.fs.readFile(instance.pathStdout, 'utf-8',
        function(error, stdout) {
          if (error) return end(error);
          Node.fs.readFile(instance.pathStderr, 'utf-8',
            function(error, stderr) {
              if (error) return end(error);
              code = parseInt(code.trim(), 10);
              if (code === 0) {
                end(undefined, stdout, stderr);
              } else {
                error = new SudoPromptError(
                  'Command failed: ' + instance.command + '\r\n' + stderr
                );
                error.code = code;
                end(error, stdout, stderr);
              }
            }
          );
        }
      );
    }
  );
}

function WindowsWaitForStatus(instance, end) {
  // VBScript cannot wait for the elevated process to finish so we have to poll.
  // VBScript cannot return error code if user does not grant permission.
  // PowerShell can be used to elevate and wait on Windows 10.
  // PowerShell can be used to elevate on Windows 7 but it cannot wait.
  // powershell.exe Start-Process cmd.exe -Verb runAs -Wait
  Node.fs.stat(instance.pathStatus,
    function(error, stats) {
      if ((error && error.code === 'ENOENT') || stats.size < 2) {
        // Retry if file does not exist or is not finished writing.
        // We expect a file size of 2. That should cover at least "0\r".
        // We use a 1 second timeout to keep a light footprint for long-lived
        // sudo-prompt processes.
        setTimeout(
          function() {
            // If administrator has no password and user clicks Yes, then
            // PowerShell returns no error and execute (and command) never runs.
            // We check that command output has been redirected to stdout file:
            Node.fs.stat(instance.pathStdout,
              function(error) {
                if (error) return end(new SudoPromptError(PERMISSION_DENIED));
                WindowsWaitForStatus(instance, end);
              }
            );
          },
          1000
        );
      } else if (error) {
        end(error);
      } else {
        end();
      }
    }
  );
}

function WindowsWriteCommandScript(instance, end) {
  var cwd = Node.process.cwd();
  if (/"/.test(cwd)) {
    // We expect double quotes to be reserved on Windows.
    // Even so, we test for this and abort if they are present.
    return end(new SudoPromptError('process.cwd() cannot contain double-quotes.'));
  }
  var script = [];
  script.push('@echo off');
  // Set code page to UTF-8:
  script.push('chcp 65001>nul');
  // Preserve current working directory:
  // We pass /d as an option in case the cwd is on another drive (issue 70).
  script.push('cd /d "' + cwd + '"');
  // Export environment variables:
  for (var key in instance.options.env) {
    // "The characters <, >, |, &, ^ are special command shell characters, and
    // they must be preceded by the escape character (^) or enclosed in
    // quotation marks. If you use quotation marks to enclose a string that
    // contains one of the special characters, the quotation marks are set as
    // part of the environment variable value."
    // In other words, Windows assigns everything that follows the equals sign
    // to the value of the variable, whereas Unix systems ignore double quotes.
    var value = instance.options.env[key];
    script.push('set ' + key + '=' + value.replace(/([<>\\|&^])/g, '^$1'));
  }
  script.push(instance.command);
  script = script.join('\r\n');
  Node.fs.writeFile(instance.pathCommand, script, 'utf-8', end);
}

function WindowsWriteElevateScript(instance, end) {
  // We do not use VBScript to elevate since it does not return an error if
  // the user does not grant permission. This is here for reference.
  // var script = [];
  // script.push('Set objShell = CreateObject("Shell.Application")');
  // script.push(
  // 'objShell.ShellExecute "' + instance.pathExecute + '", "", "", "runas", 0'
  // );
  // script = script.join('\r\n');
  // Node.fs.writeFile(instance.pathElevate, script, 'utf-8', end);
}

function WindowsWriteExecuteScript(instance, end) {
  var script = [];
  script.push('@echo off');
  script.push(
    'call "' + instance.pathCommand + '"' +
    ' > "' + instance.pathStdout + '" 2> "' + instance.pathStderr + '"'
  );
  script.push('(echo %ERRORLEVEL%) > "' + instance.pathStatus + '"');
  script = script.join('\r\n');
  Node.fs.writeFile(instance.pathExecute, script, 'utf-8', end);
}

module.exports.exec = Exec;

// We used to expect that applet.app would be included with this module.
// This could not be copied when sudo-prompt was packaged within an asar file.
// We now store applet.app as a zip file in base64 within index.js instead.
// To recreate: "zip -r ../applet.zip Contents" (with applet.app as CWD).
// The zip file must not include applet.app as the root directory so that we
// can extract it directly to the target app directory.
//
// To update the applet, follow these steps:
// * open main.scpt in macOS Script Editor and edit it as needed
// * select File | Export... (file format: Application)
// * replace the `applet` in `Contents/MacOS`
// * `zip -r ../applet.zip Contents`
// * base64 encode the zip file
// * replace the contents of the `APPLET` variable
var APPLET = 'UEsDBAoAAAAAABg+cVMAAAAAAAAAAAAAAAAJABwAQ29udGVudHMvVVQJAAPQpZRh0qWUYXV4CwABBPUBAAAEFAAAAFBLAwQKAAAAAAANPnFTAAAAAAAAAAAAAAAADwAcAENvbnRlbnRzL01hY09TL1VUCQADuaWUYbmllGF1eAsAAQT1AQAABBQAAABQSwMEFAAAAAgABUePSBrsViN9AQAAqgIAACEAHABDb250ZW50cy9NYWNPUy9zdWRvLXByb21wdC1zY3JpcHRVVAkAA4mQEFf+pJRhdXgLAAEE9QEAAAQUAAAAjVI7TxwxEO73VwwcgobFQHnFIYRSpOUUpYy89hxr4ReeMZfLr8941yDSpVrL4+85uzlTk4tq0jQPG9gjA1WbgF1AYh0yHFKRq4nwrWLsU6O9J3AHYD79YmdekQl0QbCO9OTRboeFNbxaV2DMoN51UXZSDa0ufuy/PcMOlMV3Fav3cL+7vBtUpbKgOFUz/xdkA485e9yb4jJfEZyLN5pRxrRcnUPQJ9CeUTKwTZXBu4gjRuviC90IwXfub0igLf36jFM7YSlLyhkl21FLRogpjn+wJCjItUQwySLoaGXQEY31J64gKQ8hy1cMcMNIH2gYRCLXJlZQB1rwRmchxH94g45Vqj71OtuSlgWMuaSQeTQphIa923Xb97vVw/oezZzg4kF6a2xi6ymVVf4YsdDsMqRDT3z9kXfx0sSlEJ41QyUxb3QEix55CRa267aoqYjIMcK6oW6jU3XVR3/UJ/oIdvtJ/GV3YBOSVChQYQMBy19nnfbpZTvgb8dwO/wFUEsDBBQAAAAIAMM9cVNCvifldAkAAHjDAQAVABwAQ29udGVudHMvTWFjT1MvYXBwbGV0VVQJAAMupZRhLqWUYXV4CwABBPUBAAAEFAAAAO3dfWwT5x3A8efsJLglpQax0go6IloqqFAcutDRlxWHxMUMREKSoqjqdtjxBRv8tvMFkgKrWcRW2tJRtZPaSZvQ/tjKxFCF0NZVW3HWbt0mTYVuo+1WVdXEqlRrN1RNHTCF7Hl85/jsOClTX6ZJ34/05LnfPc/9nufufPnvufvtpeeeF0J4NCFmydorRFBW+07JP3PkvkahaOrPC0NqnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+7ly++d2mWEJpXbntkuVqWJxuE2C+aiu3XyRKWRde72taF7g11d07NoV3GOCrPa5rK0xvq661xfLDqACeudxVRnIdlDFnlbtX5uu6y8z3uiuvceetE3h3qes4ajOamzXfWyTevKi7xOfkaKvLpcSOZNcwa+c47xze7Ys+M8xtM70qkY3oiPZCpkW/ZGjtflyuuyFdF1424PmBGUkbt8x1y8uVdsXeGfOX72tHW2+ZqCFbd16ra65Tyfc2amW1yXvrOiJmbPt8yVzzTvHQ9ndRzw6loJqlnLXNKvmVOPp8rdudrEJWxrm/LWBVxZb6WqnwtNfK5f4e6nozMNL/VTr5rXbE7n3pZR70r1vX+TCqVSU83vy4nX5PrGHe+6me4/NxvXL9pQ6hjfek3krf7ntLKsXDFWlWuJbJHi9NPXRtfvnxOSlPeHicu66ywf7uq/a28fc227rP3zxbl37jmKqp/xfNdJbivfE/c1ItMmoT9gpPAYM4MJBPRQGw4GXPaFzrzOPPyLxeO3NnS+dAD777ytWN3PHOj3OdXHRquFFrD7OI9eNaZw80zzOPT0nXX5f0/VucdF/Y5Fv9frIjWqSMDPcM5y0gFNiaiZsQcDtyt/lXsypg7coH2jGn0GObORL+Rax4o7Q9sMcxcIpPOBdoqerjGWe0aRxtqrC+OU7rmsthDNq9tltc/EbWPu0nY1/m1vH3/ljux+l0AAAAAAAAAAAAAAAAAAAAAAAAAAID/znYRPvDX8MjZc+GH9/rCBwf9By6O/EIb/Ys3rL0fPnD6b3XhkVFfeOQ2MfiB2hpT6wMPvDSmViP/85B0jzz8pJXMRp63sv25sXVyf3h/wfKFZSe1/m9l4UsvHHK5pzjcu/7wS6FzwqfJ0feeDx/ce25MLZANj7zol90nlm7ShJhY2lX8211cHrnx4PXL5UZbz8RSVR9SayHFO29PTEzEr1dbb6it29TWK3LLXlO5yDlHd63WNKo1l63CLmp9uHC21fraRtljvr3CUgvaTcXx5zs5tPu7hTbk1/yNs3yHZMuNTt7zlyaKbixd2LY5/q972q8qrTP/sOPHnONvmOZ4t+L68aBd9zn1VqeOB2uvJ/U568TnOfWiNZe37hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEw1d4m4Z22PEPOC6uPX9sfro4l0zDDFZrPlkDBXzw3q7ZFksj2TymbSRtrqSOSyEas/LmRjUDZ2Zo10hzEQGUxak31UW3heUDeGEmpb0XQ9FZc7jP5By9DjRkQNsWCmT9V/JKf2BIufHb9PljtlWRuKFD+Xrr7TfbXmt6ck7O9Sa65XFwSq4pAdT85zQ1WsNrxi8hvkwfqp+0StM5/mmta+mvZ1nHKDzEjMvD0QWHXrytZVrbd8rJcPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPApe/nie5canfXuat36PFny9ULsF03F9utkCQu1hr2rbV3o3lB359Qc2tRdU6g8D2oqT2+or7fG8cGqA5y43inltfSWMWSVu1Xnm7/GznefK654yUCdyLtDvbiiPjdtvuya8nsCSrE7n8/J11iRT48byaxh1sj3oJOvxRXPPL/B9K5EOqYn0gOZGvmedfKFXfFML1VQ9+HJYp6Ott42vb1zU4+dLVh1H6pqr1NUH3/x+G0Z122YNp9PlPN4Xf0bROU81bzGJvO4GvJV88rXnlcpl64nI3puOBXNJPWsZU6bz++K3fOaJSpjXY9FrEj1eZZjf77yPP1V+aqVn6eN6zdtCHWsL93LQtV5FuxqyEmmicrnbImceYvTT43tK5R/o0pTwU61VdZNwr4+qv3Bgv08nZN1XNazZekSlWNoovwOi+m85uSpNkfY46nnITCYMwPJRDSg3lzhtC905vGH+h0//nvv7WeP77njX+OLTm2/xTmueI4Ns4WmSmkODQ95bhaue/a8EMvk+as86vl2U+PGnTGKv4kV0TqVNdAznLOMVGBjImpGzOHA3WYkZezKmDtygfaMafQY5s5Ev5FrHijtD2wxzFwik84F2ip6uMZZ7RpHG2qsL45TOmdZ7CGb1zbL809E7eNucs4jX7Dv23InVvdFud6Jt47K3J/Y21EAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v4zvPnlk3Cseyz96sFs0HzX3zXm0O5I8Zs4X4omgECfqZC1Evnt89+jTBa9+ZmJEnB7frR0ZbxeP+cS+7mXisDnmFUfekjlU3/HdbUdkn8dU38VN3j9m6zx9wrO4uN3lbG+u8/hVfG7dySPF/V5R3N8lxLUXJiYWqHmp7Q/ktlojqtbGLnLm667VklG1JrZV2OUrzvpYta3W0jbKI/3llcSlZfUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/6LDz/fijayq/Lw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD49c28Q3aqeF4wNJ2N6zhqM6tFEOmaYYrMpDomcmBvU2yPJZHsmlc2kjbTVkchlI1Z/XDX6ZGNn1kh3GAORwaQ12Ue2lWi6norrxpDRP2gZetyIqNQLPKXmJ77aUqy3yHKnLGtDkXoV18lytea3U8hyrV1PvqIgUBWH7Hgyr9rwOnlK2yW1ZjTNOdY+uymXyozEzNsDgVW3rmxd1XqL+/pefLOxIGewQJTnOl/uk1PyeIWnTk1OTa9flj6n/SohRrc2eUTj5d3B4OSVbstmk4bVI+clvvyPY7m911xYekXY+5PXP/PO2A5r+P2ehZu/2X5kxdPvfvs3v/7RA0eP92V+9c5Aoe7V06d3eDr76if2nNhz//4//fzh8IEVP/iwdkPPnuk89pTm2/nET5u+uOfE8W984c2H+1fOHX6ma/SBn73a8lHzf+T21v7Nj6e/6zvz533PxT57WD+7eGTDlU993vedt393oeP1a2Kf9Pife2PdqSXff33Lrb//1lNX/NA8/ej3jm4fH33Rv/jfhUc6T770ovgPUEsDBAoAAAAAACA+cVMAAAAAAAAAAAAAAAATABwAQ29udGVudHMvUmVzb3VyY2VzL1VUCQAD3KWUYd+llGF1eAsAAQT1AQAABBQAAABQSwMEFAAAAAgA7VBwR/dYplZAAAAAagEAAB4AHABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LnJzcmNVVAkAA82cSVZTpQ9XdXgLAAEE9QEAAAQUAAAAY2BgZGBgYFQBEiDsxjDygJQDPlkmEIEaRpJAQg8kLAMML8bi5OIqIFuouKA4A0jLMTD8/w+S5AdrB7PlBIAEAFBLAwQKAAAAAADtUHBHAAAAAAAAAAAAAAAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9kZXNjcmlwdGlvbi5ydGZkL1VUCQADzZxJVi2REFd1eAsAAQT1AQAABBQAAABQSwMEFAAAAAgA7VBwRzPLNU9TAAAAZgAAACsAHABDb250ZW50cy9SZXNvdXJjZXMvZGVzY3JpcHRpb24ucnRmZC9UWFQucnRmVVQJAAPNnElWU6UPV3V4CwABBPUBAAAEFAAAACWJOw6AIBAFe08DCBVX2QbWhZgQ1vCpCHcXtHkzkzegtCDB5Xp/g0+UyihARnb70kL/UbvffYpjQODcmk9zKXListxCoUsZA7EQ5S0+dVq085gvUEsDBAoAAAAAAIeBjkgAAAAAAAAAAAAAAAAbABwAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvVVQJAAM9pQ9XLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACAAJgI5ICl5liTUBAADMAQAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9TY3JpcHRzL21haW4uc2NwdFVUCQADcaIPVxyllGF1eAsAAQT1AQAABBQAAAB9UMtOAkEQrNldd9dhH3Dz6NGYiPIJHjTxLCZeF9iDcXEJC0RvfoI/4sEfIvoHPEQEhbIHvOok01U16emu7vOkaF2dXu7XqrUTcyMATkxCwYKthCAUbmciAQ8O11yFcGBfbF/4jR24WmCvWjwUeXqfNutn13XyEeYYHkqKam+kghdJGfUCvwIfB6jiGAX6aCHHETroCrYFe6IKNEXfGOXChc0v7HKpBRzdSFrtELvbumKVC80F/FIjzwe9bj91uZRuXJuwAiLjNi7DlsxPaJSUAMrCFOeac3GfpINennQ6d/0sA4z7JxzKiVCCV+YHAs74LuuIONUi//4RIoC63czrIbYQS3PFicWJcTMTv1JHmocmROLJ45gjzfHvXJqjf7ZZ4RT+61uaBbDipGh2ZanBcjh8/gFQSwMEFAAAAAgAgHFwR3658rH2BgAAH9wAAB4AHABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LmljbnNVVAkAAx/WSVb+pJRhdXgLAAEE9QEAAAQUAAAA7d15PNR5HMfx72+claOWxrFZSm3KUUahZRmRkuSYpEQSHSNDmbbTGZaKomMK1Yw9VKiWlKJE0bmxu9m2VY6kdVWTY6dlxBqPR/vYLfvYf/bR8fB+zeP38OTB42Hmj8/j+/j+8f2y/YK4hDzQZvtNNSdEvmW7y/zZisM1hxNCFB3m2LkRQhHJIy/b/8Ur5NhKQqQV2ba2Lg62tjouIcEr2YErCDFPTHT3Xj3GXdWqkLtKd3w5K3Ba7Ppj1ooTFPcunJaeVxBRXW0axHMwrRrX5C96Vn7wRrm5SeHLdOdZLqHGLWmqpZfyI3X0fle+b5U3Zf/wCVWVOnpWeX9EuzTtzGhNsTBJYRfk1Kx4FtpxWHhk67Pzq4QyTeczF/GSVSl66klDNUY9N253/Of6STFxAjXZdA9XLX3v4/Nops4jNp5ZUmt7eavPrz9X9/JP5NtrjdZZp7389G/HRsTvpp4fdb+1gdrSnaxt3eL5iWh5U74xs3TKlnMP/X65wrUKT2SvbDCovxMv484KiD8wcvf3ZX/YK4iNv7vrI3AKaM1sevzV8rQvqgU5a4W+vXxOyerYDs6VoxUpfKsYoa+XWH/6hMaHrqWOmXv49j3y9Ws4YWfH1N3npSWPspZNelCTeipjlNDOK/u+XGYR/5sTZ3aMDW+MMe0wqDeMrzBrvMkquZeVubfsUMmG0vzpnu3tFtLF2wuWpLZdCxFzWEfaGx+3TE+9tXWzXU/3hc1zRGEh/BlPm0ObOmJ4hnI93x7YFz26NDo+It3eRtRY35vzYO5IKY0AzccOEUZ7vlZaMuWRNyejqcJRQc2sUtuR3tod5Sboszu9MyTy1GLZLNeEROcqw/MtrV2uZeVqofzQWNOsqIgixdPDZPQOTo27ONxpkdQofz2mbC393urj0UqyDNUTqho7fNJXqn3cWGzZ/lleyu2Sosv7eq9f94nuOleeN9k/zmobPVezZ1c2/c6KtqxYLz8V63ADM5r1pxo6H/0aXbGU4SBKXsegxm3eYekk2jsmV8Vf2H1vbuCspZZmd19eSDBxy0ibVT0jr1CwrM9k8jwv1i/ZBkpnv9S9NUks432x56pPjlezgZnr2XqNwwUe5V0+Xa09DJF+T8A3dRENHm35Idc8vy/MnXflSeAi7kZ3TY7sI/rzH1PKtpdpdaxra/BQtg/n3UhpPNXpbbk42EjJPvuATHdA10KN+Yl22Z3RnXF5Bhcnhum9vHrxdtjNsNth5WEl3rRki1uHHxU9NFqrzfW5Kgro0PSs3UrfrJ6/qpm3JnvuWN3A0Z/QQy6bPnT1ZbRPVJD3m+l6L4p3olVM50858rmWkp/2b0fFXkVGC6nt4hxap1Ovu/uC5rX7JmktDHYyL7JRSRhv65+wz3TBi3MeHenj9js/dmOPZFmwVI7nVNoox53O2CDg0MQ9Wj8fD8p1a/nJryaMtvjOZ0GtirdHb3T8ae9yzVOmk3mpLU3xx9S/vD5v12pWXBXH82MZYU3n7s40RqGyyhKj2YfECsVF1m1PxEb1u/IIb0xk1DXdIPWKm3I1MuYdMVW590u0kueEjqirfPFEdKmbsSn8ZWXzg1JudqNh5Bkzi8OXaoXr71ox+7LIqsQISsAPdXdZ1hvcPxiSHOxsFmyinv5gLBkalwW/Oz9dIx/P9C2OpKRkFdSnLgMAAHgreC4lRVkSSrOAyeqfRsRh1ny7kzOXbetf6cwghO7y5kqHRiTPwEqnc1NlN1Y6WOlgpYOVziArnVGiN1Y6HLlgrHQAAAAAAAAAAAAAAAA+aNRpq9OeE0qKlsT7536y8VRCHNvf3E+WJpJnYD85Qks/GvvJ2E/GfjL2kwfZT2aSV/vJUZLRckXQxdJuiHXBdjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvHXQ/BuaCZFLkJwF8J78SwAAAAAw5BBVEUXJFROqyL/k29dO/DImRHrbmyd+ER3JM3DiF3fLlk6c+IUTv3DiF078GuTEL6InWeUvGvYfJ35dUFYYqUOo8slnrr02gRj9w+X8IBOIKXkGJlAme10NJhAmECYQJtBgE8jn1ZmDlOLAHTYvnDlKZv/XHTb9g4vJJBTd5mDra4PLBNeMYnBhcGFw4ZpRAAA+cPzrNaPG03DNKFY6WOlgpYNrRgEAAAAAAAAAAAAAAIC/8G/XjAaaMPq/Ne8jf38JyX99z+YO/J1qHxGTVw97veRnUpId6Nd+f2i9ot75f4B3/+7efaA5Zw0h0vIEITRkC/LlrOj/osD2Cw7iDswEasjPhPUDnwNzyH8OCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYTQ+9CfUEsDBBQAAAAIAKBxcEeUdoaooQEAAL4DAAATABwAQ29udGVudHMvSW5mby5wbGlzdFVUCQADXNZJVv6klGF1eAsAAQT1AQAABBQAAAB9k1FvmzAUhZ+XX8F4D06lKaomSpUEIkWinVXIpD1Nrn1LrBrbs00J+/UzSdolZOwRc75zz72+ju/3tQjewFiu5F14E83CACRVjMvqLtyW6+lteJ9M4s/pt1X5A2eBFty6AG+X+WYVhFOEFloLQCgt0wDnm6IMvAdC2WMYhDvn9FeE2raNSK+KqKp7oUXYKA3Gdbk3m3ogYo6FvszR/SKOP2WcumTyKX6FLlmtl41kAhZCqPaB74HlihLBfxPnERujXuS1zjSAhlAKbyCUrkG6J6i8/kNunfEdJ5msfIJdjE7fAz7bA20ceRYwBA/9uTFuQ5Vc8zEq4rQPPoIyH5a/cDBD2A8zsg1TU21UrcdryxeV+gH6bonpvh9HO/SaR7Mx/pHUV7kxsbZVhgX4v6Uxoa+kgrLTVw4LjPMxrNgp405Bi4NiSN+Mxy14JYlrzD9mLa6C5sUDl7xu6qKzDupTzWW3MHTHHdALn9MWHsn97fzn/Mv7v7/BZtH8vAg6X928eIJfDTdgV8Q8n13Cxa7mxXaTCeh3dCh4t4vR4Z0kkz9QSwMECgAAAAAA7VBwR6ogBnsIAAAACAAAABAAHABDb250ZW50cy9Qa2dJbmZvVVQJAAPNnElW/qSUYXV4CwABBPUBAAAEFAAAAEFQUExhcGx0UEsBAh4DCgAAAAAAGD5xUwAAAAAAAAAAAAAAAAkAGAAAAAAAAAAQAO1BAAAAAENvbnRlbnRzL1VUBQAD0KWUYXV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAAA0+cVMAAAAAAAAAAAAAAAAPABgAAAAAAAAAEADtQUMAAABDb250ZW50cy9NYWNPUy9VVAUAA7mllGF1eAsAAQT1AQAABBQAAABQSwECHgMUAAAACAAFR49IGuxWI30BAACqAgAAIQAYAAAAAAABAAAA7YGMAAAAQ29udGVudHMvTWFjT1Mvc3Vkby1wcm9tcHQtc2NyaXB0VVQFAAOJkBBXdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAwz1xU0K+J+V0CQAAeMMBABUAGAAAAAAAAAAAAO2BZAIAAENvbnRlbnRzL01hY09TL2FwcGxldFVUBQADLqWUYXV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAACA+cVMAAAAAAAAAAAAAAAATABgAAAAAAAAAEADtQScMAABDb250ZW50cy9SZXNvdXJjZXMvVVQFAAPcpZRhdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgA7VBwR/dYplZAAAAAagEAAB4AGAAAAAAAAAAAAKSBdAwAAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQucnNyY1VUBQADzZxJVnV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAAO1QcEcAAAAAAAAAAAAAAAAkABgAAAAAAAAAEADtQQwNAABDb250ZW50cy9SZXNvdXJjZXMvZGVzY3JpcHRpb24ucnRmZC9VVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwECHgMUAAAACADtUHBHM8s1T1MAAABmAAAAKwAYAAAAAAABAAAApIFqDQAAQ29udGVudHMvUmVzb3VyY2VzL2Rlc2NyaXB0aW9uLnJ0ZmQvVFhULnJ0ZlVUBQADzZxJVnV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAAIeBjkgAAAAAAAAAAAAAAAAbABgAAAAAAAAAEADtQSIOAABDb250ZW50cy9SZXNvdXJjZXMvU2NyaXB0cy9VVAUAAz2lD1d1eAsAAQT1AQAABBQAAABQSwECHgMUAAAACAAJgI5ICl5liTUBAADMAQAAJAAYAAAAAAAAAAAApIF3DgAAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvbWFpbi5zY3B0VVQFAANxog9XdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAgHFwR3658rH2BgAAH9wAAB4AGAAAAAAAAAAAAKSBChAAAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQuaWNuc1VUBQADH9ZJVnV4CwABBPUBAAAEFAAAAFBLAQIeAxQAAAAIAKBxcEeUdoaooQEAAL4DAAATABgAAAAAAAEAAACkgVgXAABDb250ZW50cy9JbmZvLnBsaXN0VVQFAANc1klWdXgLAAEE9QEAAAQUAAAAUEsBAh4DCgAAAAAA7VBwR6ogBnsIAAAACAAAABAAGAAAAAAAAQAAAKSBRhkAAENvbnRlbnRzL1BrZ0luZm9VVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwUGAAAAAA0ADQDcBAAAmBkAAAAA';

var PERMISSION_DENIED = 'User did not grant permission.';
var NO_POLKIT_AGENT = 'No polkit authentication agent found.';

// See issue 66:
var MAX_BUFFER = 134217728;
