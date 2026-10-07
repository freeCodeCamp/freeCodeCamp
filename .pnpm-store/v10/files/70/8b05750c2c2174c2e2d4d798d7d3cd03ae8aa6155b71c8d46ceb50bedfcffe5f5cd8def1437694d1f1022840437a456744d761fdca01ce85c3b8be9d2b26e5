import { it, expect } from 'vitest'
import { cloneObject } from './cloneObject'

it('clones a shallow object', () => {
  const original = { a: 1, b: 2, c: [1, 2, 3] }
  const clone = cloneObject(original)

  expect(clone).toEqual(original)

  clone.a = 5
  clone.b = 6
  clone.c = [5, 6, 7]

  expect(clone).toHaveProperty('a', 5)
  expect(clone).toHaveProperty('b', 6)
  expect(clone).toHaveProperty('c', [5, 6, 7])
  expect(original).toHaveProperty('a', 1)
  expect(original).toHaveProperty('b', 2)
  expect(original).toHaveProperty('c', [1, 2, 3])
})

it('clones a nested object', () => {
  const original = { a: { b: 1 }, c: { d: { e: 2 } } }
  const clone = cloneObject(original)

  expect(clone).toEqual(original)

  clone.a.b = 10
  clone.c.d.e = 20

  expect(clone).toHaveProperty(['a', 'b'], 10)
  expect(clone).toHaveProperty(['c', 'd', 'e'], 20)
  expect(original).toHaveProperty(['a', 'b'], 1)
  expect(original).toHaveProperty(['c', 'd', 'e'], 2)
})

it('clones a class instance', () => {
  class Car {
    public manufacturer: string
    constructor() {
      this.manufacturer = 'Audi'
    }
    getManufacturer() {
      return this.manufacturer
    }
  }

  const car = new Car()
  const clone = cloneObject(car)

  expect(clone).toHaveProperty('manufacturer', 'Audi')
  expect(clone).toHaveProperty('getManufacturer')
  expect(clone.getManufacturer).toBeInstanceOf(Function)
  expect(clone.getManufacturer()).toEqual('Audi')
})

it('ignores nested class instances', () => {
  class Car {
    name: string
    constructor(name: string) {
      this.name = name
    }
    getName() {
      return this.name
    }
  }
  const original = {
    a: 1,
    car: new Car('Audi'),
  }
  const clone = cloneObject(original)

  expect(clone).toEqual(original)
  expect(clone.car).toBeInstanceOf(Car)
  expect(clone.car.getName()).toEqual('Audi')

  clone.car = new Car('BMW')

  expect(clone.car).toBeInstanceOf(Car)
  expect(clone.car.getName()).toEqual('BMW')
  expect(original.car).toBeInstanceOf(Car)
  expect(original.car.getName()).toEqual('Audi')
})

it('clones an object with null prototype', () => {
  const original = {
    key: Object.create(null),
  }
  const clone = cloneObject(original)

  expect(clone).toEqual({
    key: {},
  })
})
