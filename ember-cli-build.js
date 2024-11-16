'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: path.join(__dirname, 'tailwind.config.js'),
            },
          },
          {
            module: require('autoprefixer'),
          },
        ],
      },
    },
  });

  return app.toTree();
};
