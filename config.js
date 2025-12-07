const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // --- BOT CORE SETTINGS ---
    SESSION_ID: process.env.SESSION_ID || "POPKID~H4sIAAAAAAAAA5VU246jOBD9F78mGkIg3KSWlgBJgFxgcu2s9sEBQxwIENvcMsq/r0h3T49W2tlenkzZVef41Cn/AFmOKXJRC7QfoCC4ggx1S9YWCGhgXEYRIqAPQsgg0MDWaO8SbPiDt3aG21lOhaU6DYRAEFofbvxgpMbcRefHTuK/gEcfFOUpxcFvCprCKh5VUhbgcHiku0qSi7Vgi5m5h1Y0LZeTaXgo1OxipPELeHQVISY4i63ijK6IwNRFrQcx+Rr9ntPrtdWkpE1o76VBIfCsGTfOKh+1dmnpmChOT52PuNuh/hr9CKsr3my8LM8ulVcHiyovPI8TD/bl9V4NN7N0PBdGC4I2wRt9iuMMhXaIMoZZ+2XdewbnONNzq2M8PniS6S4C/35E0k1aW3FcnwY1J/tqCaPdF3UX/XEjWmezIcr4dbZoI30V4iVtRqLjTAS1HkbGMtpUQbn2fyXukQ+vJP9H93Z2Q6N2PYvxjY9Sbl7PzXaw203cO2GnmxvV29v+lBiyt8u/Rn8guZwekmZz81VLD++8qy/0gZgvcT5ppuIqWNY9w1b57F5/0oesJL9j+b1Udgvd5xVaF5cgYXb0Olgv2clYiRtR9u/cOV/fm8Vxf95YDvZTK9n7uTEk+Tia6bPFfki+37hjnrS9LVRvRWqcsrkZvzxvlKDWDoHGP/qAoBhTRiDDedbFVL4PYFitUUAQe6oLQq6aVULD6rLxw5O1lCwSSvbFZMm5TI43PDs5xbF0j9YgeAF9UJA8QJSicIYpy0m7QJTCGFGg/flXH2SoYW9969AEvg8iTCjbZmWR5jD8aOrHJgyCvMzYus0Co1sgArTBZxgxhrOYdjKWGSTBGVfIOENGgRbBlKKfF0QEhe+xn9ldVogYxCkFGjDsConcq2m5WVQqyXSqW7FuxDr4RPvo2pssguE0QpUY20OajFMxd5vicj0mhescymHICd6ltv1Fko3GT1n+WQRooCLhnkuvNE7OfIJyi7+03Eol6iTZ1dBy+aiCyOQOLpeJd7zomfuh4jsonV1cwh/Wob89ON5WVpTeoLVWwcVr5EVv3LW4D0JU4QD9CsbRWQLJK1/pRd2bXnS58s4obo05p19vOpVoawbmyjJdVZkWAbulipufBf5kT3fXfDTIyqt3ndkJ3JGlER/Ng13OkeG/+en6NDIOgQZUXhVVWVEEURY0Qf2Dfqu7fsCi+JYhBvogg91pEOfhHYE+SJ9ZvKwMRV5SJVGWhwO5S+w2PkYlfX+i8NNFHVL3G2H0nPj3iv+J/KZJ56zBo/9Ljfc35F/mcBzWOAjlkZ5ORkf9iFyDwtfR9eiu8U5mWaTeRcWwTMfp+QfwePzVB0UKWZSTK9AAvZ4g6AOSl51P7SzKf4Nk6LavN7reXTuFlOmf3t/gK6IMXgug8bIkSoogD8S3Ux7JixmkZ6CB4WLiej7og2urF8WaQfYxSkDvvkmZgcffESbrumUHAAA=",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "GODZEXMD",
    DESCRIPTION: process.env.DESCRIPTION || "© godzexmd bot",
    MODE: process.env.MODE || "private", // Options: public, private, inbox, group
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    
    // --- OWNER/DEV SETTINGS ---
    OWNER_NUMBER: process.env.OWNER_NUMBER || "919539722974",
    OWNER_NAME: process.env.OWNER_NAME || "ATHUL",
    DEV: process.env.DEV || "918304063560", // Developer number

    // --- MESSAGING & VISIBILITY ---
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Auto read private messages
    READ_CMD: process.env.READ_CMD || "false", // Mark commands as read
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true", // Always show online status
    AUTO_TYPING: process.env.AUTO_TYPING || "false", // Auto show typing status
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false", // Auto show recording status
    
    // --- REPLIES & MEDIA ---
    AUTO_REPLY: process.env.AUTO_REPLY || "false", // Automatic text reply
    MENTION_REPLY: process.env.MENTION_REPLY || "false", // Auto voice reply on mention
    AUTO_VOICE: process.env.AUTO_VOICE || "false", // Automatic voices
    AUTO_STICKER: process.env.AUTO_STICKER || "false", // Automatic stickers
    STICKER_NAME: process.env.STICKER_NAME || "GODZEXMD", // Sticker pack name
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/c6tn25.jpg", // Menu image
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hy5l5r.jpg", // Alive image
    LIVE_MSG: process.env.LIVE_MSG || "> GODZE XMD IS ALIVE 😍", // Alive message

    // --- REACTION SETTINGS ---
    AUTO_REACT: process.env.AUTO_REACT || "false", // Auto react on all messages
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false", // Enable custom emoji react
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍", // Custom react emojis
    
    // --- STATUS SETTINGS ---
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false", // Auto view statuses
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false", // Auto react on statuses
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "❎", // Custom status reaction emoji (New)
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", // Auto reply on status (Enabled)
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || ".𝗦𝗘𝗘𝗡 𝗬𝗢𝗨𝗥 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗬 𝗚𝗢𝗗𝗭𝗘𝗫𝗠𝗗🔄", // Status reply message
    
    // --- GROUP & SECURITY ---
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "true", // Automatic delete links without kick
    ANTI_BAD: process.env.ANTI_BAD || "true",
    ANTI_VV: process.env.ANTI_VV || "false", // Anti view once
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // Anti delete path
    AUTO_BIO: process.env.AUTO_BIO || "false", // Auto update bio
};
