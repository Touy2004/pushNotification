console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
        body: "I love U by Touy",
        icon: "https://img.lovepik.com/element/40132/3240.png_300.png"
    });
});