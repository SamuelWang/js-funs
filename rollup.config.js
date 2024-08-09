import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import license from 'rollup-plugin-license';

const licensePlugin = license({
  banner: {
    commentStyle: 'ignored', // The default
    content: {
      file: path.join(path.dirname(fileURLToPath(import.meta.url)), 'LICENSE'),
    },
  },
});

export default defineConfig([
  {
    input: 'src/sorting/index.ts',
    output: {
      file: 'dist/sorting/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [esbuild({ minify: true }), licensePlugin],
  },
  {
    input: 'src/sorting/index.ts',
    output: {
      file: 'dist/sorting/index.d.ts',
      format: 'es',
    },
    plugins: [dts(), licensePlugin],
  },
]);
