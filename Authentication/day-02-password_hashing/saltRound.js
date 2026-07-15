const bcrypt = require('bcrypt');
const password = "SuperSecretPassword";

async function checkSpeed() {
    // 1. Kam Salt Rounds (Fatafat hoga)
    console.time("Round 8 Took");
    await bcrypt.hash(password, 8);
    console.timeEnd("Round 8 Took");

    // 2. Standard Salt Rounds (Perfect Balance)
    console.time("Round 10 Took");
    await bcrypt.hash(password, 10);
    console.timeEnd("Round 10 Took");

    // 3. High Salt Rounds (Server par bojh!)
    console.time("Round 15 Took");
    await bcrypt.hash(password, 12);
    console.timeEnd("Round 15 Took");
}

checkSpeed();