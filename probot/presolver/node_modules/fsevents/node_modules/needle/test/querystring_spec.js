var should    = require('should'),
	  stringify = require('../lib/querystring').build;

describe('stringify', function() {

	describe('with null', function() {

		it('throws', function() {
			(function() {
				var res = stringify(null);
			}).should.throw();
		})

	})

	describe('with a number', function() {

		it('throws', function() {
			(function() {
				var res = stringify(100);
			}).should.throw();
		})

	})

	describe('with a string', function() {

		describe('that is empty', function() {

			it('throws', function() {
				(function() {
					var res = stringify('');
				}).should.throw();
			})

		})

		describe('that doesnt contain an equal sign', function() {

			it('throws', function() {
				(function() {
					var res = stringify('boomshagalaga');
				}).should.throw();
			})

		})

		describe('that contains an equal sign', function() {

			it('works', function() {
				var res = stringify('hello=123');
				res.should.eql('hello=123');
			})

		})

	})

	describe('with an array', function() {

		describe('with key val objects', function() {

			it('works', function() {
				var res = stringify([ {foo: 'bar'} ]);
				res.should.eql('foo=bar');
			})

		})

		describe('where all elements are strings with an equal sign', function() {

			it('works', function() {
				var res = stringify([ 'bar=123', 'quux=' ]);
				res.should.eql('bar=123&quux=');
			})

		})

		describe('with random words', function() {

			it('throws', function() {
				(function() {
					var res = stringify(['hello', 'there']);
				}).should.throw();
			})

		})

		describe('with integers', function() {

			it('throws', function() {
				(function() {
					var res = stringify([123, 432]);
				}).should.throw();
			})

		})

	})

	describe('with an object', function() {

			it('works', function() {
				var res = stringify({ test: 100 });
				res.should.eql('test=100');
			})

			describe('with object where val is an array', function() {

				it('works', function() {
					var res = stringify({ foo: ['bar', 'baz'] });
					res.should.eql('foo[]=bar&foo[]=baz');
				})

			})

			describe('with object where val is an array of key val objects', function() {

				it('works', function() {
					var res = stringify({ foo: [{'1': 'bar'}, {'2': 'baz'}] });
					res.should.eql('foo[][1]=bar&foo[][2]=baz');
				})

			})

	})

})
