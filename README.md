# Introduction
Angular (7) + Material(7) + Seed
[![Build Status](https://travis-ci.org/kunalkamble/angular-material-seed.svg?branch=master)](https://travis-ci.org/kunalkamble/angular-material-seed)

# How to start

```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

```bash
npm test
```

# License

MIT
