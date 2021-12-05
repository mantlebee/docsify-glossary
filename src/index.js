import { GlossaryPlugin } from "./plugin";

if (!window.$docsify) window.$docsify = {};
if (!window.$docsify.glossary) window.$docsify.glossary = {};
if (!window.$docsify.plugins) window.$docsify.plugins = [];
window.$docsify.plugins.push(GlossaryPlugin);
