// umi-test default set
// https://github.com/umijs/umi/blob/master/packages/umi-test/src/index.js
module.exports = {
  verbose: true,
  setupFiles: ['./setupTests.js'],
  modulePathIgnorePatterns: ['/docs/', '/__snapshots__/'],
  // coveragePathIgnorePatterns: ['/src/JackBox/'],
  // testPathIgnorePatterns: ['/packages/yform'],
  collectCoverage: true,
};
