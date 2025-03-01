const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

const db = admin.firestore();

module.exports = {
  getPlayerData: async (userId) => {
    const playerRef = db.collection('players').doc(userId);
    const doc = await playerRef.get();
    return doc.exists ? doc.data() : null;
  },

  updatePlayerData: async (userId, data) => {
    const playerRef = db.collection('players').doc(userId);
    await playerRef.set(data, { merge: true });
  }
};