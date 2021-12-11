import slug from "slug";

export class TermsMap {
  constructor() {
    if (!window.$docsify.glossary.__termsMap) {
      window.$docsify.glossary.__termsMap = {};
    }
    this._map = window.$docsify.glossary.__termsMap;
  }
  get isEmpty() {
    return !Boolean(this.keys.length);
  }
  get keys() {
    return Object.keys(this._map);
  }
  addTerm(term) {
    this._map[term] = slug(term);
  }
  forEach(delegate) {
    this.keys.forEach((a) => delegate(a, this._map[a]));
  }
}
