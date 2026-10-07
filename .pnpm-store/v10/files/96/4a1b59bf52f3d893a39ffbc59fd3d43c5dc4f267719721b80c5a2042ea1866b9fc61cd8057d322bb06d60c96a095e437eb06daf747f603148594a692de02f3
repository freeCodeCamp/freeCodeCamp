import copy from "rollup-plugin-copy"

export default {
  input: "index.js",
  output: {
    file: "dist/index.cjs",
    format: "cjs",
    exports: "default"
  },
  plugins: [
    copy({targets: [{src: "index.d.ts", dest: "dist", rename: () => "index.d.cts"}]})
  ]
}
