// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierConfig from 'eslint-config-prettier';
// import antfu from '@antfu/eslint-config';

export default withNuxt(
  // Your custom configs here
  //   antfu({
  //     typescript: true,
  //     vue: true
  //   }),
  prettierConfig
);
