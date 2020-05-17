const pkg = require('./package');

module.exports = {
  repositoryUrl: pkg.repository,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/github',
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator'
  ]
};
