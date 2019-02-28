module.exports = {
    "preset": "react-native",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.(ts|tsx?)$",
    "moduleFileExtensions": [
      "js",
      "ts",
      "tsx",
    ],
    "modulePaths": [
      "<rootDir>"
    ],
    "collectCoverage": true
  }
