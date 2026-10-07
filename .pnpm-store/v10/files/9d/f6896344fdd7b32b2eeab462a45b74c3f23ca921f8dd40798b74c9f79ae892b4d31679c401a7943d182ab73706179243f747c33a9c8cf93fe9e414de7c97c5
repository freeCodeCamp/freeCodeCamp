"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var memfs_1 = require("memfs");
describe('rewrite(fs, rewrites)', function () {
    it('Simple rewrite', function () {
        var vol = memfs_1.Volume.fromJSON({ '/foo': 'bar' });
        var lfs = index_1.link(vol, ['/lol', '/foo']);
        expect(lfs.readFileSync('/lol', 'utf8')).toBe('bar');
    });
    it('Each path step should be rewritten completely', function () {
        var vol = memfs_1.Volume.fromJSON({ '/foo/bar': 'hello' });
        var lfs = index_1.link(vol, ['/lol', '/fo']);
        var hello;
        try {
            hello = lfs.readFileSync('/lolo/bar', 'utf8');
            throw Error('This should not throw');
        }
        catch (err) {
            expect(err.code).toBe('ENOENT');
        }
    });
    it('Invalid rewrite routes argument throws', function () {
        var vol = memfs_1.Volume.fromJSON({ '/foo/bar': 'hello' });
        try {
            var lfs = index_1.link(vol, 123);
            throw Error('not_this');
        }
        catch (err) {
            expect(err.message === 'not_this').toBe(false);
        }
    });
    it('Invalid path argument gets proxied', function () {
        var vol = memfs_1.Volume.fromJSON({ '/foo/bar': 'hello' });
        try {
            var lfs = index_1.link(vol, ['/lol', '/foo']);
            lfs.readFileSync(123, 'utf8');
            throw Error('This should not throw');
        }
        catch (err) {
            expect(err.code).toBe('EBADF');
        }
    });
    it('rewrites multi-step paths', function () {
        var vol = memfs_1.Volume.fromJSON({
            '/1/2/3/4': 'foo'
        });
        var lfs = index_1.link(vol, ['/lol', '/1/2/3']);
        expect(lfs.readFileSync('/lol/4', 'utf8')).toBe('foo');
    });
    it('rewrites root path', function () {
        var vol = memfs_1.Volume.fromJSON({
            '/1/2/3/4': 'foo'
        });
        var lfs = index_1.link(vol, ['/', '/1/2/3']);
        expect(lfs.readFileSync('/4', 'utf8')).toBe('foo');
    });
});
