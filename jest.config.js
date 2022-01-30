module.exports = {
  testMatch: ['**/?(*.)+(jest).ts?(x)'],
  transform: {
    "^.+\\.ts[x]?$": "<rootDir>/node_modules/babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
