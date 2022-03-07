const db = require('./firebase.js')

async function addXp(user) {
    const ref = await db.doc(`users/${user}`)
    const doc = await ref.get()

    const addXp = (doc.exists ? doc.data().xp : 0) + 15

    if(doc.exists) return ref.update({ xp: addXp })
    else return ref.set({ xp: addXp })
}

module.exports = addXp