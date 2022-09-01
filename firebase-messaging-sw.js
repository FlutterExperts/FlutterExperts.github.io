importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCwOl2kOOn4bxPs_y2nPNGIqQWMxFcH7ws",
  authDomain: "famstore.firebaseapp.com",
  projectId: "famstore",
  storageBucket: "famstore.appspot.com",
  messagingSenderId: "1078987750942",
  appId: "1:1078987750942:web:eff09f0435f4195698380f",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});