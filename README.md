
# Development

window 1:
python -m SimpleHTTPServer

window 2:
jspm bundle daily-web-sketch -wd

window 3:
chokidar-socket-emitter

# Production

mv jspm.browser.prod.js jspm.browser.js
jspm bundle daily-web-sketch --minify
