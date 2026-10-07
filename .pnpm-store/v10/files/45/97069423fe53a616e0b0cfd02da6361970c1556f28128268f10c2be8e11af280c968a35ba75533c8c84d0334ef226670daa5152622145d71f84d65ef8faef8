import uri, { URIComponents, URIComponent, Options, options } from "..";
import { expectDeprecated, expectType } from "tsd";

const parsed = uri.parse("foo");
expectType<URIComponents>(parsed);
const parsed2 = uri.parse("foo", {
    domainHost: true,
    scheme: 'https',
    unicodeSupport: false
})
expectType<URIComponents>(parsed2);

expectType<URIComponent>({} as URIComponents)
expectDeprecated({} as URIComponents)

expectType<Options>({} as options)
expectDeprecated({} as options)
