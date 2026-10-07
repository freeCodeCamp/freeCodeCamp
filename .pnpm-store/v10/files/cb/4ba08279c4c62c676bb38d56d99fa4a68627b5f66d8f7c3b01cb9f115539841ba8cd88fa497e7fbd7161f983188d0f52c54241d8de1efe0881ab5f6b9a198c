import safeRegex, { safeRegex as safeRegexNamed } from '..'
import { expectType } from 'tsd'

expectType<boolean>(safeRegex('regex'))
expectType<boolean>(safeRegex(/regex/))
expectType<boolean>(safeRegex('^([a-zA-Z0-9]+\\s?)+$'))
expectType<boolean>(safeRegex(/^([a-zA-Z0-9]+\s?)+$/g))

expectType<boolean>(safeRegexNamed('regex'))
expectType<boolean>(safeRegexNamed(/regex/))
expectType<boolean>(safeRegexNamed('^([a-zA-Z0-9]+\\s?)+$'))
expectType<boolean>(safeRegexNamed(/^([a-zA-Z0-9]+\s?)+$/g))
