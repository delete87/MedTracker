// sw.js — minimal service worker
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
});

self.addEventListener('fetch', event => {
  // simple pass-through fetch
  event.respondWith(fetch(event.request));
});
