const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6jOBT9lZZfi+qwhhCppCEb2UkgZBv1gwEDDmtsk0BK+fcRqSpVPUz31PBkGXPu8Tn3XF5BlmOKZqgG3VdQEHyBDDVLVhcIdEGvDAJEAAd8yCDogo5JFmR3Do4akttir58LR56qXmFm8dDxK9EdmZLQvrZuovMC7hwoSjfB3h8Ae8nuOtj6pDpttTSzigE9rLJpZ2qb5WZ4UWu+hf1RzFJLDF/AvUGEmOAsHBYRShGByQzVK4jJ9+ijgVXDme/KB1/e7PkJPK/DS60LumYd+5a9cK5SXVdh4Yr0e/Tb5eXs7SrNMc7b5RYLQ5dOZ+kiG418YfdUhNHRK5doFpxq540+xWGG/ImPMoZZ/W3d4/HtKcyN2J2X6TWeqfrtpAkJ2ezEihzxNsE59CRXNMfJ8HvED4PaGyjpqHe1F0qnZKdie/aKU+hv+fa2CqqpGBxFIb85uPOV+Ip89Er8f3Tnp53qiZW+ZKw3cusQebLq2zmaGJfDeGhZQRV3+AVM6pX0Td1NSbuRWzpuB+JYNOyruxlZuTxdClZvCKMVv4nUznQ5mg74/JM+ZCX5E0trUqpmyxlLeFNVU3Tooyfbr2NZkXqr5Woftnk96FcjNWdIw9FcPBp9B83U3VKwpo5TxtoaGZeVWNjD2YUd5n5HX9H+9eVxoxjVEx90hTsHCAoxZQQynGfNnigLHID+xUYeQewhLxAmtXR72l9OF2cEvUvrsh/s3cTx51ZVeUk9Haume7LturVwXgAHCpJ7iFLkjzFlOakXiFIYIgq6f//iQIYq9mZcU04SOBBgQpmTlUWSQ//D1Y+X0PPyMmN2nXn9ZoEI6PKf24gxnIW00bHMIPEifEH9CDIKugFMKLpzwEcX7KEGDyyZXIhqTtcT016eOqO9fMD8uqEc5dnbEUmRJCGQ+eeOqPrPsqoEz1DhvecACm5HksVAVhDgAH7PTPPN7y08B/10wIpFOIGyIxrL02GRaKmMyeRhw5v2iCAfdBkpEQdc6MVlscljlP0B93jeUJGZ46tcaKYpXE5slDtPM8cQ+S+4b56C7uvnnOrnfoMnSKuRbugDwIH00YK4ubkmqzKvKR1ekbta+y/689roCIviZ4YY4EAGm8NgE0FS0uhHL2fwhxkE2MMwaaq+W9Lg+YhBnFDQBf1FiRTiGUNzTNqEGobuhHo/1MGnhR9ZeOu1IhyR2BeqOQz5k7Evlb4lKGdDsochE4i0cGdXRrwotgfXl38BAV0QbvnZWvNmGuqdzH27VHbOUWpnR7cVTmeJvhSt8SzeHVXD0xMPaQszV25CnsP+Oc5WqrYPjtEa6um03W5l+yvMJWgoA/2lqfbWSl+L9ZJNdvZOPNkTf3lAW0OkUrm9rsdjd00j59CqSOzeArEnnyXksGGQ2iPLyKgaaDY+ZWUclSFBpZWr7daGyid/RzuD95Q+pkTyPp3xIz+v740XYPQYdu+e/Jd1nxHg79wXiPfp+bu/ITz0oDL2PVvMl5MqUct17CMYMT6azH2o3YyazqE0OQ7DDrjff3GgSCALcpKCLqCpCwEHEkiZ/hnhDU4RZTAtQFdQpTavKaKgcSCt9aKwGWQfyQd688xVA9z/AXg0sbIVCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

