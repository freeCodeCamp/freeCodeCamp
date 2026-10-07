import Benchmark from "benchmark";

const suite = new Benchmark.Suite("ipv4");

const DATA = "127.0.0.1";
const ipv4RegexA =
  /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv4RegexB =
  /^(?:(?:(?=(25[0-5]))\1|(?=(2[0-4][0-9]))\2|(?=(1[0-9]{2}))\3|(?=([0-9]{1,2}))\4)\.){3}(?:(?=(25[0-5]))\5|(?=(2[0-4][0-9]))\6|(?=(1[0-9]{2}))\7|(?=([0-9]{1,2}))\8)$/;
const ipv4RegexC = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
const ipv4RegexD = /^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
const ipv4RegexE = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)$/;
const ipv4RegexF = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
const ipv4RegexG = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
const ipv4RegexH = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;
const ipv4RegexI =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;

suite
  .add("A", () => {
    return ipv4RegexA.test(DATA);
  })
  .add("B", () => {
    return ipv4RegexB.test(DATA);
  })
  .add("C", () => {
    return ipv4RegexC.test(DATA);
  })
  .add("D", () => {
    return ipv4RegexD.test(DATA);
  })
  .add("E", () => {
    return ipv4RegexE.test(DATA);
  })
  .add("F", () => {
    return ipv4RegexF.test(DATA);
  })
  .add("G", () => {
    return ipv4RegexG.test(DATA);
  })
  .add("H", () => {
    return ipv4RegexH.test(DATA);
  })
  .add("I", () => {
    return ipv4RegexI.test(DATA);
  })
  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${suite.name!}: ${e.target}`);
  });

export default {
  suites: [suite],
};

if (require.main === module) {
  suite.run();
}
