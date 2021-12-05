# docsify-glossary

Docsify plugin for auto replacing terms with link to one or more glossaries.

Fork of [TheGreenToaster/docsify-glossary](https://github.com/TheGreenToaster/docsify-glossary), this package aims to improve the previous plugin, adding a configuration section and more flexibility.

## Quick Start

### Install

1. Insert script into docsify document

```html
<script src="//unpkg.com/@mantlebee/docsify-glossary/dist/docsify-glossary.min.js"></script>
```

1. Create a `_glossary.md` file in the root directory
1. Populate the `_glossary.md` file with terms.

### Usage

- Terms must be predicated with `##` to get recognized by the glossary
- Terms are replaced with links in the order that they appear in the glossary file.

#### Example: with default options

File `_glossary.md`

```markdown
## Main User

Primary user of the platform
```

File `user-example.md`

```markdown
The Main user is responsible for ...
```

## Advanced Usage

The configuration object allows to change the default behaviour.

```javascript
window.$docsify.glossary = {
  filePaths: { "/": "_glossary.md" },
  caseSensitive: false,
  glossaryTermPrefix: "## ",
  matchDocumentationTerm: ((term, slug) = term),
};
```

### Change how the plugin find and replace terms

The default behaviour is to find the glossary term as is, but is possible to use a different pattern, changing the `matchDocumentationTerm` option.

#### Example: different term match

Configuration

```javascript
window.$docsify = {
   ...
    glossary: {
        matchDocumentationTerm: term = `{${term}}`
    }
}
```

File `_glossary.md`

```markdown
## Main User

Primary user of the platform
```

File `user-example.md`

```markdown
The {Main User} is responsible for ...
```

It is possible to use the slug too.

#### Example: slug as term match

Configuration

```javascript
window.$docsify = {
   ...
    glossary: {
        matchDocumentationTerm: (term, slug) = slug
    }
}
```

File `_glossary.md`

```markdown
## Main User

Primary user of the platform
```

File `user-example.md`

```markdown
The main-user is responsible for ...
```

### Use different glossary files

If your documentation involves different areas that has to be separated, multiple glossary files can be adopted.

Use the following folder structure as reference:

```
doc/
    users/
        groups/
            ...
        permissions/
            ...
        ...
        _glossary.md
    licensing/
        ...
        _glossary.md
```

Configure the plugin to assign a specific glossary file using the route to match the correct one.

#### Example: multiple glossaries

Configuration

```javascript
window.$docsify = {
   ...
    glossary: {
        filePaths: {
            "/users": "/users/_glossary.md",
            "/licensing": "/licensing/_glossary.md"
        }
    }
}
```

When the page `/users/permissions/index.md` is loaded (and all other routes starting with `/users`) links to the glossary will redirect to the `/users/_glossary.md` page. Same behaviour for routes starting with `/licensing` and the `/licensing/_glossary.md` page.
