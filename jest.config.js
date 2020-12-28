const { defaults } = require('jest-config')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '<rootDir>/dist/', '<rootDir>/config/', '/mockData/']
}
