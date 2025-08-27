const { buildPrettierConfig } = require('../dist');

module.exports = {
  ...buildPrettierConfig(),
  // Override or extend the default config
};
