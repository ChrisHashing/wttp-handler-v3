import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

// Common configuration
const config = {
  input: 'src/index.ts',
  external: ['ethers'],
  plugins: [
    typescript({ 
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/wttp.config.ts', dest: 'dist' }
      ]
    })
  ]
};

export default [
  // ESM build
  {
    ...config,
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    }
  },
  // CJS build
  {
    ...config,
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    }
  }
];