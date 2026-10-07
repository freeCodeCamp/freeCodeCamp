import { getAllAcceptedMimeTypes } from './getAllAcceptedMimeTypes'

it('returns an empty array for null accept header', () => {
  expect(getAllAcceptedMimeTypes(null)).toEqual([])
})

it('returns a single mime type as-is', () => {
  expect(getAllAcceptedMimeTypes('application/json')).toEqual([
    'application/json',
  ])
})

it('returns multiple mime types in order', () => {
  expect(getAllAcceptedMimeTypes('text/html, application/json')).toEqual([
    'text/html',
    'application/json',
  ])
})

it('sorts by quality value (q parameter)', () => {
  expect(
    getAllAcceptedMimeTypes('text/plain;q=0.5, application/json;q=0.9'),
  ).toEqual(['application/json', 'text/plain'])
})

it('excludes types with q=0', () => {
  expect(getAllAcceptedMimeTypes('text/html, text/plain;q=0')).toEqual([
    'text/html',
  ])
})

it('returns an empty array when all types have q=0', () => {
  expect(getAllAcceptedMimeTypes('text/html;q=0, text/plain;q=0')).toEqual([])
})

it('treats missing q as q=1 (default)', () => {
  expect(getAllAcceptedMimeTypes('text/plain;q=0.5, application/json')).toEqual(
    ['application/json', 'text/plain'],
  )
})

it('sorts by specificity when quality is equal (type/subtype > type/* > */*)', () => {
  expect(getAllAcceptedMimeTypes('*/*, text/*, text/html')).toEqual([
    'text/html',
    'text/*',
    '*/*',
  ])
})

it('sorts by parameter count when quality and specificity are equal', () => {
  expect(
    getAllAcceptedMimeTypes(
      'text/plain;format=fixed;charset=utf-8, text/plain;charset=utf-8',
    ),
  ).toEqual(['text/plain', 'text/plain'])
})

it('applies full precedence: quality > specificity > parameter count', () => {
  expect(
    getAllAcceptedMimeTypes(
      'text/*;q=0.8, application/json, text/html;q=0.8, */*;q=0.1',
    ),
  ).toEqual(['application/json', 'text/html', 'text/*', '*/*'])
})

it('handles whitespace around values', () => {
  expect(
    getAllAcceptedMimeTypes('  text/html  ,  application/json ; q=0.9  '),
  ).toEqual(['text/html', 'application/json'])
})

it('handles a realistic browser accept header', () => {
  expect(
    getAllAcceptedMimeTypes(
      'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    ),
  ).toEqual(['text/html', 'application/xhtml+xml', 'application/xml', '*/*'])
})

it('handles the graphql-over-http accept header', () => {
  expect(
    getAllAcceptedMimeTypes(
      'application/graphql-response+json, application/json',
    ),
  ).toEqual(['application/graphql-response+json', 'application/json'])
})
