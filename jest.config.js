module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  transform: {
    ".(js|jsx|ts|tsx)": "@sucrase/jest-plugin"
  }
};
