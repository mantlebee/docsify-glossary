import { GlossaryOptionsDefault } from "./constants";
import { TermsMap } from "./models";
import {
  createSlug,
  getGlossaryFilePathByUrl,
  populateTermsMap,
} from "./utils";

export function GlossaryPlugin(hook, vm) {
  hook.beforeEach((content, next) => {
    const {
      caseSensitive,
      filePaths,
      glossaryTermPrefix,
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
        const link = `[${term}](${filePath}?id=${slug})`;
        const regexQuery = matchDocumentationTerm(term, slug);
        const regexOptions = caseSensitive ? "g" : "gi";
        const regex = new RegExp(regexQuery, regexOptions);
        content = content.replace(regex, link);
      });
      next(content);
    };
    if (termsMap.isEmpty)
      populateTermsMap(termsMap, filePath, glossaryTermPrefix).then(
        replaceTermsWithLinks
      );
    else replaceTermsWithLinks();
  });
}
