'use strict'

const normalizeTestConfigs = require('../../../scripts/helpers/normalize_test_configs')

const defaults = {
  integration: '@elastic/elasticsearch',
  repo: 'https://github.com/elastic/elasticsearch-js',
  framework: 'tap',
  args: 'test/unit/*.test.js test/behavior/*.test.js test/integration/index.js -t 300 --no-coverage'
}

const testConfigs = [
  {
    integration: 'elasticsearch',
    repo: 'https://github.com/elastic/elasticsearch-js-legacy',
    branch: '16.x',
    framework: 'mocha',
    args: 'test/unit/index.js --exit'
  },
  {
    branch: '7.x'
  }
]

module.exports = normalizeTestConfigs(testConfigs, defaults)