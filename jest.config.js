module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>", "<rootDir>/src/**/**/**.+(ts)"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  verbose: true,
};
