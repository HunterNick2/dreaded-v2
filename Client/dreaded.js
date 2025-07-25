const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const speed = require("performance-now");
const { smsg, formatp, tanggal, formatDate, getTime, sleep, clockString, fetchJson, getBuffer, jsonformat, generateProfilePicture, parseMention, getRandom, fetchBuffer } = require('../lib/botFunctions.js');
const { exec, spawn, execSync } = require("child_process");
const { TelegraPh, UploadFileUgu } = require("../lib/toUrl");
const uploadtoimgur = require('../lib/Imgur');
const { readFileSync } = require('fs');

const { commands, aliases, totalCommands } = require('../Handler/commandHandler');

const status_saver = require('../Functions/status_saver');
const gcPresence = require('../Functions/gcPresence');

const antitaggc = require('../Functions/antitag');


const { getSettings, getSudoUsers, getBannedUsers } = require("../Database/adapter");

const {
botname, mycode } = require('../Env/settings');

module.exports = dreaded = async (client, m, chatUpdate, store) => {

try {

const botNumber = await client.decodeJid(client.user.id);  


const {
  groupMetadata,
  groupName,
  participants,
  groupAdmin,
  isBotAdmin,
  groupSender,
  isAdmin
} = await client.getGroupContext(m, botNumber);

const sudoUsers = await getSudoUsers();
const bannedUsers = await getBannedUsers();

let settings = await getSettings();
if (!settings) return;

const { prefix, mode, gcpresence, antitag, antidelete, antilink, packname } = settings;  


    var body =  
        m.mtype === "conversation"  
            ? m.message.conversation  
            : m.mtype === "imageMessage"  
                ? m.message.imageMessage.caption  
                : m.mtype === "extendedTextMessage"  
                    ? m.message.extendedTextMessage.text  
                    : "";  

    const Tag =  
        m.mtype == "extendedTextMessage" &&  
        m.message.extendedTextMessage.contextInfo != null  
            ? m.message.extendedTextMessage.contextInfo.mentionedJid  
            : [];  

  //  var msgDreaded = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
    var budy = typeof m.text == "string" ? m.text : "";  

    const timestamp = speed();  
    const dreadedspeed = speed() - timestamp;

const path = require('path');

const filePath = path.resolve(__dirname, '../dreaded.jpg');
const pict = fs.readFileSync(filePath);

const commandName = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/\s+/)[0].toLowerCase() : null;  
    const resolvedCommandName = aliases[commandName] || commandName;

const cmd = body.startsWith(prefix) && commands[resolvedCommandName] || commands[resolvedCommandName];
 
    const args = body.trim().split(/ +/).slice(1);  
    const pushname = m.pushName || "No Name";  
    
    const itsMe = m.sender == botNumber ? true : false;  
    let text = (q = args.join(" "));  
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);  
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);  

    const getGroupAdmins = (participants) => {  
        let admins = [];  
        for (let i of participants) {  
            i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : "";  
        }  
        return admins || [];  
    };  
    const fortu = (m.quoted || m);  
    const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m;  

    const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
    };  
    const mime = (quoted.msg || quoted).mimetype || "";  
    const qmsg = (quoted.msg || quoted);  




    
 

const sender = m.sender;

    
    const IsGroup = m.chat?.endsWith("@g.us");  

const DevDreaded = Array.isArray(sudoUsers) ? sudoUsers : [];
const Owner = DevDreaded.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(groupSender);

    const context = {  
        client, m, text, Owner, chatUpdate, store, isBotAdmin, isAdmin, IsGroup, participants,  
        pushname, body, budy, totalCommands, args, mime, qmsg, botNumber, itsMe,  
        packname, generateProfilePicture, groupMetadata, dreadedspeed, mycode,  
        fetchJson, exec, getRandom, UploadFileUgu, TelegraPh, prefix, cmd, botname, mode, gcpresence, antitag, antidelete, fetchBuffer, store, uploadtoimgur, groupSender, chatUpdate, getGroupAdmins, pict, Tag  
    };  



if (cmd) {
    const senderNumber = groupSender.replace(/@s\.whatsapp\.net$/, '');

    if (bannedUsers.includes(senderNumber)) {
        await client.sendMessage(m.chat, {
            text: "❗You are banned from using bot commands."
        }, { quoted: m });
        return;
    }
}


    if (cmd && mode === 'private' && !itsMe && !Owner && m.sender !== sudoUsers) {  
        return;  
    }  


 
    await status_saver(client, m, Owner, prefix);  

    

    await gcPresence(client, m);  
    await antitaggc(client, m, isBotAdmin, itsMe, isAdmin, Owner, body);  



      

    if (cmd) {
    await cmd(context);
}

} catch (err) {  
    console.log(util.format(err));  
}  

process.on('uncaughtException', function (err) {  
    let e = String(err);  
    if (e.includes("conflict")) return;  
    if (e.includes("not-authorized")) return;  
    if (e.includes("Socket connection timeout")) return;  
    if (e.includes("rate-overlimit")) return;  
    if (e.includes("Connection Closed")) return;  
    if (e.includes("Timed Out")) return;  
    if (e.includes("Value not found")) return;  
    console.log('Caught exception: ', err);  
});

};
