---
title: JS Concepts
created: '2019-04-13T18:33:47.659Z'
modified: '2019-04-13T20:28:05.527Z'
---

# JS Concepts

## Mixins

- Way to achieve multiple-inheritence: add functionality from another utility class that is not meant to be standalone.
- Different from an interface, because has implementation details
- Different from multiple inheritence (extending abstract/regular class) because superclasses should be standalone

## Polyfills

- Check if certain functionality exists, adds replacement if it does not
- ex: Modernizr

## Shims

- Brings future / extra functionality to an environment where that doesnt exist
- ex: `Object.assign` to ES5

