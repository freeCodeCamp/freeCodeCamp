"use strict";

var fs = require('fs');
var rm = require('rimraf');

module.exports = exports;

var versionArray = process.version
	.substr(1)
	.replace(/-.*$/, '')
	.split('.')
	.map(function(item) {
		return +item;
	});

var napi_multiple_commands = [
	'build',
	'clean',
	'configure',
	'package',
	'publish',
	'reveal',
	'testbinary',
	'testpackage',
	'unpublish'
];

var napi_build_version_tag = 'napi_build_version=';

module.exports.get_napi_version = function() {
	// returns the non-zero numeric napi version or undefined if napi is not supported.
	var version = process.versions.napi; // can be undefined
	if (!version) { // this code should never need to be updated
		if (versionArray[0] === 9 && versionArray[1] >= 3) version = 2; // 9.3.0+
		else if (versionArray[0] === 8) version = 1; // 8.0.0+
	}
	return version;
};

module.exports.get_napi_version_as_string = function() {
	// returns the napi version as a string or an empty string if napi is not supported.
	var version = module.exports.get_napi_version();
	return version ? ''+version : '';
};

module.exports.validate_package_json = function(package_json) { // return err
	var binary = package_json.binary;
	var module_path_ok = binary.module_path && binary.module_path.indexOf('{napi_build_version}') !== -1;
	var remote_path_ok = binary.remote_path && binary.remote_path.indexOf('{napi_build_version}') !== -1;
	var package_name_ok = binary.package_name && binary.package_name.indexOf('{napi_build_version}') !== -1;
	var napi_build_versions = module.exports.get_napi_build_versions(package_json);

	if (napi_build_versions) {
		napi_build_versions.forEach(function(napi_build_version){
			if (!(parseInt(napi_build_version,10) === napi_build_version && napi_build_version > 0)) {
				throw new Error("All values specified in napi_versions must be positive integers.");
			}
		});
	}

	if (napi_build_versions && (!module_path_ok || (!remote_path_ok && !package_name_ok))) {
		throw new Error("When napi_versions is specified; module_path and either remote_path or " +
			"package_name must contain the substitution string '{napi_build_version}`.");
	}

	if ((module_path_ok || remote_path_ok || package_name_ok) && !napi_build_versions) {
		throw new Error("When the substitution string '{napi_build_version}` is specified in " +
			"module_path, remote_path, or package_name; napi_versions must also be specified.");
	}

	if (napi_build_versions && !module.exports.get_best_napi_build_version(package_json)) {
		throw new Error(
			'The N-API version of this Node instance is ' + module.exports.get_napi_version() + '. ' +
			'This module supports N-API version(s) ' + module.exports.get_napi_build_versions(package_json) + '. ' +
			'This Node instance cannot run this module.');
	}

};

module.exports.expand_commands = function(package_json, commands) {
	var expanded_commands = [];
	var napi_build_versions = module.exports.get_napi_build_versions(package_json);
	commands.forEach(function(command){
		if (napi_build_versions && command.name === 'install') {
			var napi_build_version = module.exports.get_best_napi_build_version(package_json);
			var args = napi_build_version ? [ napi_build_version_tag+napi_build_version ] : [ ];
			expanded_commands.push ({ name: command.name, args: args });
		} else if (napi_build_versions && napi_multiple_commands.includes(command.name)) {
			napi_build_versions.forEach(function(napi_build_version){
				var args = command.args.slice();
				args.push (napi_build_version_tag+napi_build_version);
				expanded_commands.push ({ name: command.name, args: args });
			});
		} else {
			expanded_commands.push (command);
		}
	});
	return expanded_commands;
};

module.exports.get_napi_build_versions = function(package_json) {
	var napi_build_versions = [];
	if (package_json.binary && package_json.binary.napi_versions) { // remove duplicates
		package_json.binary.napi_versions.forEach(function(napi_version) {
			if (!napi_build_versions.includes(napi_version)) napi_build_versions.push(napi_version);
		});
	}
	return napi_build_versions.length ? napi_build_versions : undefined;
};

module.exports.get_command_arg = function(napi_build_version) {
	return napi_build_version_tag + napi_build_version;
};

module.exports.get_napi_build_version_from_command_args = function(command_args) {
	for (var i = 0; i < command_args.length; i++) {
		var arg = command_args[i];
		if (arg.indexOf(napi_build_version_tag) === 0) {
			return parseInt(arg.substr(napi_build_version_tag.length),10);
		}
	}
	return undefined;
};

module.exports.swap_build_dir_out = function(napi_build_version) {
	if (napi_build_version) {
		rm.sync(module.exports.get_build_dir(napi_build_version));
		fs.renameSync('build', module.exports.get_build_dir(napi_build_version));
	}
};

module.exports.swap_build_dir_in = function(napi_build_version) {
	if (napi_build_version) {
		rm.sync('build');
		fs.renameSync(module.exports.get_build_dir(napi_build_version), 'build');
	}
};

module.exports.get_build_dir = function(napi_build_version) {
	return 'build-tmp-napi-v'+napi_build_version;
};

module.exports.get_best_napi_build_version = function(package_json) {
	var best_napi_build_version = 0;
	var napi_build_versions = module.exports.get_napi_build_versions (package_json);
	if (napi_build_versions) {
		var our_napi_version = module.exports.get_napi_version();
		napi_build_versions.forEach(function(napi_build_version){
			if (napi_build_version > best_napi_build_version &&
				napi_build_version <= our_napi_version) {
				best_napi_build_version = napi_build_version;
			}
		});
	}
	return best_napi_build_version === 0 ? undefined : best_napi_build_version;
};
