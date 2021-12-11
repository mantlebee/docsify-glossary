export function getGlossaryFilePathByUrl(filePaths, url) {
  var key = Object.keys(filePaths).find((a) => {
    const regex = new RegExp(`^${a}`, "i");
    return regex.test(url);
  });
  return key && filePaths[key];
}

export async function populateTermsMap(termsMap, filePath, glossaryTermPrefix) {
  const data = await fetch(filePath);
  const text = await data.text();
  const lines = text.split("\n");
  lines.forEach((line) => {
    const linePrefixRegex = new RegExp(`^${glossaryTermPrefix}`);
    if (line.match(linePrefixRegex)) {
      const term = line.replace(glossaryTermPrefix, "").trim();
      termsMap.addTerm(term);
    }
  });
}
