
```
npm install
jspm install
```

# Development

window 1:
```
python -m SimpleHTTPServer
```
window 2:
```
jspm bundle daily-web-sketch -wd
```
window 3:
```
chokidar-socket-emitter
```

```
open http://localhost:8000
```

# Production

```
mv jspm.browser.prod.js jspm.browser.js
jspm bundle daily-web-sketch --minify
```

Known issues:
sass-plugin is not updating build.js bundle in watch mode.
Changes to style will be injected via hot-reload, but a hard refresh reverts to initial build.js.
