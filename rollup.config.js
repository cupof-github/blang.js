import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";

const file = {
  from: "src/index.js",
  to: "index.js",
  toBrowser: "dist/blang.min.js"
};

// export default {
//   input: file.from,
//   output: {
//     file: file.to,
//     name: "blang",
//     format: "cjs",
//     sourceMap: true
//   },
//   plugins: [babel(), uglify(), resolve()]
// };

export default {
  input: file.from,
  output: {
    file: file.toBrowser,
    name: "blang",
    format: "iife",
    sourceMap: true
  },
  plugins: [babel(), uglify(), resolve()]
}
