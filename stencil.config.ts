import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'aw-component-exp',
  taskQueue: 'async',
  testing: {
    // browserHeadless: true,
    // browserDevtools: true,
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'aw-component-exp',
      proxiesFile: './dist/react/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
