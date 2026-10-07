require './_prepare'

array = mod 'array'

test 'from', ->

	array.from([1]).should.be.an.instanceOf Array
	array.from([1])[0].should.equal 1

# test 'clone', ->

# 	a = [0, 1, 2]

# 	b = array.clone a

# 	b[0].should.equal 0
# 	b[1].should.equal 1

# 	b[0] = 3

# 	a[0].should.equal 0

test 'pluck', ->

	a = [0, 1, 2, 3]

	after = array.pluck a, 1

	after.length.should.equal 3

	after[0].should.equal 0
	after[1].should.equal 2
	after[2].should.equal 3
	after.should.equal a

test 'pluckMultiple', ->

	a = [0, 1, 2, 3, 4, 5, 6]

	array.pluckMultiple a, [0, 4, 2, 6]

	a.length.should.equal 3
	a[0].should.equal 1
	a[1].should.equal 3
	a[2].should.equal 5

test 'pluckItem', ->

	a = [0, 1, 2, 3, 2, 4, 2]

	array.pluckItem a, 2

	a[0].should.equal 0
	a[1].should.equal 1
	a[2].should.equal 3
	a[3].should.equal 4

	array.pluckItem([1], 2).length.should.equal 1


test 'pluckOneItem', ->

	a = [0, 1, 2, 3, 2, 4, 2]

	array.pluckOneItem a, 2

	a[0].should.equal 0
	a[1].should.equal 1
	a[2].should.equal 3
	a[3].should.equal 2
	a[4].should.equal 4
	a[5].should.equal 2

	a = [1, 2]

	array.pluckOneItem a, 1

	a.length.should.equal 1
	a[0].should.equal 2

	array.pluckOneItem([], 1).length.should.equal 0

	array.pluckOneItem([1], 2).length.should.equal 1

test 'plcukByCallback', ->

	a = [0, 1, 2, 3]

	array.pluckByCallback a, (val, i) ->

		return yes if val is 2

		return no

	a[0].should.equal 0
	a[1].should.equal 1
	a[2].should.equal 3

test 'injectByCallback', ->

	shouldInject = (valA, valB, toInject) ->

		unless valA?

			return yes if toInject <= valB

			return no

		unless valB?

			return yes if valA <= toInject

			return no

		return yes if valA <= toInject <= valB

		return no

	a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3]

	array.injectByCallback a, 0, shouldInject

	a[0].should.equal 0
	a[1].should.equal 0.5
	a[7].should.equal 3

	a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3]

	array.injectByCallback a, 2.7, shouldInject

	a[0].should.equal 0.5
	a[4].should.equal 2.7
	a[5].should.equal 2.75
	a[7].should.equal 3

	a = [0.5, 1, 2.5, 2.5, 2.75, 2.75, 3]

	array.injectByCallback a, 3.2, shouldInject

	a[0].should.equal 0.5
	a[4].should.equal 2.75
	a[6].should.equal 3
	a[7].should.equal 3.2