---
title: not (Other stuff)
layout: layout.html
---

There are several types of stuff, and I'll categorize them as follows: [XLI] denotes learning materials, [TUL] denotes tools, etc.

- [Xextbook](https://docs.google.com/document/d/1n3SRJ6IXQWt7ym5XV9m-puv3ZZaJ1cEo-RGW_QyK5gQ) (old lessons) [XLI]
- [Wiki](https://xextan.miraheze.org)
- [Parser](https://xextan.github.io/parser) [XLI] [TUL] ([repo](https://github.com/Xextan/parser))
- [Xextbook](https://docs.google.com/document/d/1n3SRJ6IXQWt7ym5XV9m-puv3ZZaJ1cEo-RGW_QyK5gQ) (old lessons) [XLI]

## Marking Xextan text

When making a website containing Xextan text, enclose it in a separate element and set its [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang) to `art-x-xextan`. This is also what is done here, per <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Success Criteria 3.1.1 and 3.1.2. Apparently, it also helps with <abbr title="search engine optimization">SEO</abbr>.

Example:

```html
<p>This paragraph is in English, so it does not have to be marked, as it inherits the "lang" attribute from the parent.</p>

<p>This paragraph contains a fragment in Xextan, so it has to be marked: <i lang="art-x-xextan">jo got fel!</i></p>

<p>The following paragraph is fully in Xextan, so it also has to be marked.</p>
<p lang="art-x-xextan">vet ni põ bel qe nit o ban Xextan.</p>
```
