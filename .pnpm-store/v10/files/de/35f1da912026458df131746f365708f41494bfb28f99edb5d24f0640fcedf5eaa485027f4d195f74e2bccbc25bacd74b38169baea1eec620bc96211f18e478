import { expectType } from "tsd";

import pretty from "../../";
import PinoPretty, {
  PinoPretty as PinoPrettyNamed,
  PrettyOptions,
  colorizerFactory,
  prettyFactory
} from "../../";
import PinoPrettyDefault from "../../";
import * as PinoPrettyStar from "../../";
import PinoPrettyCjsImport = require("../../");
import PrettyStream = PinoPretty.PrettyStream;
const PinoPrettyCjs = require("../../");

const options: PinoPretty.PrettyOptions = {
  colorize: true,
  crlf: false,
  errorLikeObjectKeys: ["err", "error"],
  errorProps: "",
  hideObject: true,
  levelKey: "level",
  levelLabel: "foo",
  messageFormat: false,
  ignore: "",
  levelFirst: false,
  messageKey: "msg",
  timestampKey: "timestamp",
  minimumLevel: "trace",
  translateTime: "UTC:h:MM:ss TT Z",
  singleLine: false,
  customPrettifiers: {
    key: (value) => {
      return value.toString().toUpperCase();
    }
  },
  customLevels: 'verbose:5',
  customColors: 'default:white,verbose:gray',
  sync: false,
  destination: 2,
  append: true,
  mkdir: true,
};

expectType<PrettyStream>(pretty()); // #326
expectType<PrettyStream>(pretty(options));
expectType<PrettyStream>(PinoPrettyNamed(options));
expectType<PrettyStream>(PinoPrettyDefault(options));
expectType<PrettyStream>(PinoPrettyStar.PinoPretty(options));
expectType<PrettyStream>(PinoPrettyStar.default(options));
expectType<PrettyStream>(PinoPrettyCjsImport.PinoPretty(options));
expectType<PrettyStream>(PinoPrettyCjsImport.default(options));
expectType<any>(PinoPrettyCjs(options));
expectType<PinoPretty.ColorizerFactory>(colorizerFactory);
expectType<PinoPretty.PrettyFactory>(prettyFactory);
