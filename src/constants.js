export const GlossaryOptionsDefault = {
  filePaths: { "/": "/_glossary.md" },
  caseSensitive: false,
  glossaryTermRegex: /^## .{1,}/,
  convertGlossaryTermRegexMatch: (match) => match.replace("## ", ""),
  matchDocumentationTerm: (term, slug) => term,
};
