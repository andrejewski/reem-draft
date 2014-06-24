reem-draft
===

Drafting plugin for Reem.

## Installation

```bash
npm install reem-draft # --save for projects
```

## Usage

```javascript
var draft = require('reem-draft');
reem.Post.use(draft());
```

## About

`reem-draft` is a plugin for [Reem](https://github.com/andrejewski/reem) that allows you to remove a file from production builds if its `draft` property is true.

Note that this plugin is completely ignored if Reem is not in production mode. Production mode can be set at `reem.env.production Boolean` or via the CLI with the `-p` or `--production` flags.

This module takes no options, but by convention you must invoke the module to return the plugin function regardless. 

## Contributing

If you have an issue or find a bug open an issue and I will see what we can do. If you can fix the bug yourself, by all means send a pull request for consideration.

Until `reem` and `reem-draft` hit v1, I would like to keep backwards compatibility with the v0.0.1, treating it like v1. When the conditions are met for v1, we can cut away the cruft of v0.