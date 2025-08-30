self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => console.log("SW active"));

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(clients.openWindow("./index.html"));
});
