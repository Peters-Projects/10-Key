const CACHE_NAME = 'keypad-cache-v1';
// Add the exact names of your files here
const ASSETS = [
  './',
  './index.html',
  './paynoatt.png',
  './VT323-Regular.ttf'
];

// Install and cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
