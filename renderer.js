const firebaseConfig = require('./apikeys-donotpush.js');

const artemisfb = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
