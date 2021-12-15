import { GlossaryOptionsDefault } from "./constants";
import { TermsMap } from "./models";
import {
  getBasePath,
  getGlossaryFilePathByUrl,
  populateTermsMap,
} from "./utils";

export function GlossaryPlugin(hook, vm) {
  hook.beforeEach((content, next) => {
    const {
      caseSensitive,
      convertGlossaryTermRegexMatch,
      filePaths,
      glossaryTermRegex,
      matchDocumentationTerm,
    } = {
      ...GlossaryOptionsDefault,
      ...window.$docsify.glossary,
    };
    const url = arguments[1].route.path;
    const termsMap = new TermsMap();
    const filePath = getGlossaryFilePathByUrl(filePaths, url);
    if (!filePath) next(content);
    const replaceTermsWithLinks = () => {
      termsMap.forEach((term, slug) => {
        let glossaryPath = filePath;
        const basePath = getBasePath();
        if (basePath) glossaryPath = glossaryPath.replace(basePath, "");
        const link = `[${term}](${glossaryPath}?id=${slug})`;
        const regexQuery = matchDocumentationTerm(term, slug);
        const regexOptions = caseSensitive ? "g" : "gi";
        const regex = new RegExp(regexQuery, regexOptions);
        content = content.replace(regex, link);
      });
      next(content);
    };
    if (termsMap.isEmpty)
      populateTermsMap(
        termsMap,
        filePath,
        glossaryTermRegex,
        convertGlossaryTermRegexMatch
      ).then(replaceTermsWithLinks);
    else replaceTermsWithLinks();
  });
}
