const ownerMiddleware = require('../../utility/botUtil/Ownermiddleware');

    
module.exports = async (context) => {

  const { 
    client, m, text, Owner, chatUpdate, store, isBotAdmin, isAdmin, IsGroup, 
    participants, pushname, body, budy, totalCommands, args, mime, qmsg, msgDreaded, 
    botNumber, itsMe, packname, author, generateProfilePicture, groupMetadata, 
    dreadedspeed, mycode, fetchJson, exec, getRandom, UploadFileUgu, TelegraPh, 
    prefix, cmd, botname, mode, gcpresence, antitag, antidelete, antionce, 
    fetchBuffer, uploadtoimgur, groupSender, ytmp3, getGroupAdmins, Tag
  } = context;

  
  

  try {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return m.reply("No command provided for eval!");
    }

   
    let evaled = await eval(trimmedText);

    
    if (typeof evaled !== 'string') {
      evaled = require('util').inspect(evaled);
    }

    await m.reply(evaled);

  } catch (err) {
    await m.reply("Error during eval execution:\n" + String(err));
  }
                
};