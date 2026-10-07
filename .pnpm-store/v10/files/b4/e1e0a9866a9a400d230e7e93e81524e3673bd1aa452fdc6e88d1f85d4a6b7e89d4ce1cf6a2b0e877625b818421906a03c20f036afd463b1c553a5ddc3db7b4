require './_prepare'

object = mod 'object'

test 'isBareObject', ->

	object.isBareObject('a').should.equal false

	object.isBareObject({'a': 'a'}).should.equal true

test 'typeOf', ->

	object.typeOf('s').should.equal 'string'
	object.typeOf(0).should.equal 'number'
	object.typeOf(false).should.equal 'boolean'
	object.typeOf({}).should.equal 'object'
	object.typeOf(arguments).should.equal 'arguments'
	object.typeOf([]).should.equal 'array'

test 'empty', ->

	o =

		a: 1
		b: 2


	object.empty o

	o.should.not.have.property 'a'
	o.should.not.have.property 'b'

test 'fastEmpty', ->

	o =
		a: 1
		b: 2


	object.fastEmpty o

	o.should.not.have.property 'a'
	o.should.not.have.property 'b'

test 'clone', ->

	object.clone([1])[0].should.equal 1
	object.clone({a:1}).a.should.equal 1

	o = {a: 1}

	object.clone(o).should.not.equal o

test 'clone [include prototype]', ->

	class C

		constructor: (@a) ->

		sayA: -> @a + 'a'

	a = new C 'a'

	a.sayA().should.equal 'aa'

	b = object.clone a, yes

	b.should.not.equal a

	b.constructor.should.equal C

	b.a.should.equal 'a'

	b.a = 'a2'

	b.sayA().should.equal 'a2a'

test 'clone [without prototype]', ->

	class C

		constructor: (@a) ->

		sayA: -> @a + 'a'

	a = new C 'a'

	a.sayA().should.equal 'aa'

	b = object.clone a, no

	b.should.equal a

test 'overrideOnto [basic]', ->

	onto =
		a: 'a'
		b:
			c: 'c'
			d:
				e: 'e'

	what =
		a: 'a2'
		b:
			c: 'c2'
			d:
				f: 'f2'

	object.overrideOnto onto, what

	onto.a.should.equal 'a2'
	onto.b.should.have.property 'c'
	onto.b.c.should.equal 'c2'
	onto.b.d.should.not.have.property 'f'
	onto.b.d.e.should.equal 'e'

test 'override', ->

	onto =

		a: 'a'

		b:

			c: 'c'

			d:

				e: 'e'

	what =

		a: 'a2'

		b:

			c: 'c2'

			d:

				f: 'f2'


	onto2 = object.override onto, what

	onto2.a.should.equal 'a2'
	onto2.b.should.have.property 'c'
	onto2.b.c.should.equal 'c2'
	onto2.b.d.should.not.have.property 'f'
	onto2.b.d.e.should.equal 'e'

	onto.should.not.equal onto2

do ->

	what =

		a: 'a2'

		c: ->

		z: 'z'

		y:

			a: 'a'

	onto =

		a: 'a'

		b: 'b'

	test 'appendOnto [basic]', ->

		object.appendOnto onto, what

		onto.a.should.equal 'a2'
		onto.b.should.equal 'b'
		onto.z.should.equal 'z'

	test "appendOnto [shallow copies instances]", ->

		onto.c.should.be.instanceof Function
		onto.c.should.equal what.c


	test "appendOnto [clones objects]", ->

		onto.should.have.property 'y'
		onto.y.a.should.equal 'a'
		onto.y.should.not.equal what.y

test 'groupProps', ->

	obj =

		a1: '1'
		a2: '2'

		b1: '1'
		b2: '2'

		c1: '1'
		c2: '2'

		rest1: '1'
		rest2: '2'

	groups = object.groupProps obj,

		a: ['a1', 'a2']

		b: [/^b[0-9]+$/]

		c: (key) -> key[0] is 'c'

	groups.a.should.have.property 'a1'
	groups.a.a1.should.equal '1'

	groups.a.should.have.property 'a2'

	groups.b.should.have.property 'b1'
	groups.b.should.have.property 'b2'

	groups.c.should.have.property 'c1'
	groups.c.should.have.property 'c2'

	groups.rest.should.have.property 'rest1'
	groups.rest.should.have.property 'rest1'

	groups.rest.should.not.have.property 'c1'