const CACHE_NAME = 'pwa-cache-v1';
const filesToCache = [
  '/',
  'index.html',
  'index.css',
  'assets/daycare.png',  // Ensure this path is correct
  'assets/logo.png'      // Ensure this path is correct
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(filesToCache); // Use filesToCache here
    })
  );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Fetch event to serve cached assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


