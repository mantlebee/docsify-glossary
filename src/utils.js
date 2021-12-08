export function createSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();
  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  return str;
}

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
