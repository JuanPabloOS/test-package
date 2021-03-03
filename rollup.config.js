import commonjs from "@rollup/plugin-commonjs"
import { babel } from '@rollup/plugin-babel';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'esm',
    }
  ],
  plugins: [commonjs(), babel({ babelHelpers: 'bundled', extensions: ['.js', '.jsx', '.ts', '.tsx'] })],
  external: ['react', 'react-dom']
}