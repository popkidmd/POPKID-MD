const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "POPKID;;;HcURgQQT#el1w53_DkYDDW13cEvqw0q80vHfOfnyZO_cyAL0mAUU",
    
    // ====== Status Settings ======
    // These match the logic in the index.js I fixed for you
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝐏𝐎𝐏𝐊𝐈𝐃 𝐌𝐃 𝐕𝐈𝐄𝐖𝐄𝐃✅*",
    // This allows you to pick specific emojis for status reactions
    CUSTOM_STATUS_EMOJIS: process.env.CUSTOM_STATUS_EMOJIS || "❤️,✨,🔥,💯,👑,🥰,😇,🧡",

    // ====== Anti-Delete Config ======
    ANTI_DELETE: process.env.ANTI_DELETE || "false",
    ANTI_DELETE_DM: process.env.ANTI_DELETE_DM || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",

    // ====== Bot Basics ======
    PREFIX: process.env.PREFIX || ".",
    MODE: process.env.MODE || "public",
    BOT_NAME: process.env.BOT_NAME || "𝐏𝐎𝐏𝐊𝐈𝐃 𝐌𝐃",
    OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐎𝐏𝐊𝐈𝐃",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254732297194",
    DEV: process.env.DEV || "254732297194",
    
    // ====== Automation & UI ======
    AUTO_BIO: process.env.AUTO_BIO || "true",
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", 
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/aapw1p.png",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/aapw1p.png",
    DESCRIPTION: process.env.DESCRIPTION || "*𝙿𝙾𝙿𝙺𝙸𝙳 𝚇𝙼𝙳 𝙱𝙾𝚃😇*",
    LIVE_MSG: process.env.LIVE_MSG || "> 𝐏𝐎𝐏𝐊𝐈𝐃 𝐌𝐃 𝐁𝐎𝐓😇",
    
    // ====== Security & Privacy ======
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    ANTI_VV: process.env.ANTI_VV || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    READ_CMD: process.env.READ_CMD || "false",
    
    // ====== React & Interaction ======
    AUTO_REACT: process.env.AUTO_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    MENTION_REPLY: process.env.MENTION_REPLY || "false",

    // ====== Group Management ======
    WELCOME: process.env.WELCOME || "false",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    ANTI_LINK_MODE: process.env.ANTI_LINK_MODE || "warn",
    DELETE_LINKS: process.env.DELETE_LINKS || "true",
    LINK_WHITELIST: "youtube.com,github.com",
    LINK_ACTION: "mute",
    LINK_WARN_LIMIT: 3,
    ANTI_LINK_WARN_MSG: process.env.ANTI_LINK_WARN_MSG || "⚠️ Links are not allowed in this group.",
    ANTI_LINK_KICK_MSG: process.env.ANTI_LINK_KICK_MSG || "🚪 You have been removed for sending links.",
    ANTI_LINK_DELETE_MSG: process.env.ANTI_LINK_DELETE_MSG || "🗑️ Link message deleted."
};
