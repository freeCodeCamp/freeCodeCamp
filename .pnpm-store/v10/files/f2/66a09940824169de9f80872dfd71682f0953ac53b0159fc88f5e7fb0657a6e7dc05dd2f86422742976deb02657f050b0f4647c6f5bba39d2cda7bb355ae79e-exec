#!/usr/bin/env node
/*
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint sloppy:true node:true */

var fs = require('fs'),
    path = require('path'),
    root = path.join(path.dirname(fs.realpathSync(__filename)), '..'),
    escodegen = require(root),
    optionator = require('optionator')({
        prepend: 'Usage: esgenerate [options] file.json ...',
        options: [
            {
                option: 'config',
                alias: 'c',
                type: 'String',
                description: 'configuration json for escodegen'
            }
        ]
    }),
    args = optionator.parse(process.argv),
    files = args._,
    options;

if (files.length === 0) {
    console.log(optionator.generateHelp());
    process.exit(1);
}

if (args.config) {
    try {
        options = JSON.parse(fs.readFileSync(args.config, 'utf-8'))
    } catch (err) {
        console.error('Error parsing config: ', err);
    }
}

files.forEach(function (filename) {
    var content = fs.readFileSync(filename, 'utf-8');
    console.log(escodegen.generate(JSON.parse(content), options));
});
/* vim: set sw=4 ts=4 et tw=80 : */
