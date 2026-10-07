import { expectType } from "tsd";

import pino from '../../pino';
import P, { pino as pinoNamed } from "../../pino";
import * as pinoStar from "../../pino";
import pinoCjsImport = require ("../../pino");
const pinoCjs = require("../../pino");
const { P: pinoCjsNamed } = require('pino')

const log = pino();
expectType<P.LogFn>(log.info);
expectType<P.LogFn>(log.error);

expectType<pino.Logger>(pinoNamed());
expectType<P.Logger>(pinoNamed());
expectType<pino.Logger>(pinoStar.default());
expectType<pino.Logger>(pinoStar.pino());
// expectType<pino.Logger>(pinoCjsImport.default());
expectType<pino.Logger>(pinoCjsImport.pino());
expectType<any>(pinoCjsNamed());
expectType<any>(pinoCjs());

const levelChangeEventListener: P.LevelChangeEventListener = (
    lvl: P.LevelWithSilent | string,
    val: number,
    prevLvl: P.LevelWithSilent | string,
    prevVal: number,
) => {}
expectType<P.LevelChangeEventListener>(levelChangeEventListener)
