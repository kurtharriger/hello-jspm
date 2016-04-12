
# Development

window 1:
python -m SimpleHTTPServer

window 2:
jspm bundle -wid daily-web-sketch

window 3:
chokidar-socket-emitter

# Production

jspm bundle daily-web-sketch --minify
mv jspm.browser.prod.js jspm.browser.js
mv index.prod.html index.html
