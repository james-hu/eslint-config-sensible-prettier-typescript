const { prettierConfig } = require('../dist');

module.exports = {
  ...prettierConfig(),
  // Override or extend the default config
};
