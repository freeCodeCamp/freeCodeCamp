import * as core from "../core/index.js";
import * as schemas from "./schemas.js";

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////                          //////////
//////////      ZodISODateTime      //////////
//////////                          //////////
//////////////////////////////////////////////
//////////////////////////////////////////////

export interface ZodISODateTime extends schemas.ZodStringFormat {
  _zod: core.$ZodISODateTimeInternals;
}
export const ZodISODateTime: core.$constructor<ZodISODateTime> = /*@__PURE__*/ core.$constructor(
  "ZodISODateTime",
  (inst, def) => {
    core.$ZodISODateTime.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
  }
);

export function datetime(params?: string | core.$ZodISODateTimeParams): ZodISODateTime {
  return core._isoDateTime(ZodISODateTime, params);
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodISODate      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////

export interface ZodISODate extends schemas.ZodStringFormat {
  _zod: core.$ZodISODateInternals;
}
export const ZodISODate: core.$constructor<ZodISODate> = /*@__PURE__*/ core.$constructor("ZodISODate", (inst, def) => {
  core.$ZodISODate.init(inst, def);
  schemas.ZodStringFormat.init(inst, def);
});

export function date(params?: string | core.$ZodISODateParams): ZodISODate {
  return core._isoDate(ZodISODate, params);
}

// ZodISOTime

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodISOTime      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////

export interface ZodISOTime extends schemas.ZodStringFormat {
  _zod: core.$ZodISOTimeInternals;
}
export const ZodISOTime: core.$constructor<ZodISOTime> = /*@__PURE__*/ core.$constructor("ZodISOTime", (inst, def) => {
  core.$ZodISOTime.init(inst, def);
  schemas.ZodStringFormat.init(inst, def);
});

export function time(params?: string | core.$ZodISOTimeParams): ZodISOTime {
  return core._isoTime(ZodISOTime, params);
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////                          //////////
//////////      ZodISODuration      //////////
//////////                          //////////
//////////////////////////////////////////////
//////////////////////////////////////////////

export interface ZodISODuration extends schemas.ZodStringFormat {
  _zod: core.$ZodISODurationInternals;
}
export const ZodISODuration: core.$constructor<ZodISODuration> = /*@__PURE__*/ core.$constructor(
  "ZodISODuration",
  (inst, def) => {
    core.$ZodISODuration.init(inst, def);
    schemas.ZodStringFormat.init(inst, def);
  }
);

export function duration(params?: string | core.$ZodISODurationParams): ZodISODuration {
  return core._isoDuration(ZodISODuration, params);
}
