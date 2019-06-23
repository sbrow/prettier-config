module.exports = {
  printWidth: 80, // Default
  semi: true,
  singleQuote: false, // Default
  tabWidth: 4, // Deffult: 2
  trailingComma: "all",
  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 2
      }
    }
  ]
};
