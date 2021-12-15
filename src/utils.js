export function getBasePath() {
  if (window.$docsify && window.$docsify.basePath)
    return window.$docsify.basePath.replace(/\/$/, "");
  return "";
}

export function getGlossaryFilePathByUrl(filePaths, url) {
  var key = Object.keys(filePaths).find((a) => {
    const regex = new RegExp(`^${a}`, "i");
    return regex.test(url);
  });
  if (key) {
    const basePath = getBasePath();
    return `${basePath}${filePaths[key]}`;
  }
  return null;
}

export async function populateTermsMap(
  termsMap,
  filePath,
  glossaryTermRegex,
  convertGlossaryTermRegexMatch
) {
  const data = await fetch(filePath);
  const text = await data.text();
  const lines = text.split("\n");
  lines.forEach((line) => {
    const match = line.match(glossaryTermRegex);
    if (match) {
      const term = convertGlossaryTermRegexMatch(match[0]);
      termsMap.addTerm(term);
    }
  });
}
