/*  Allow the bot to kick members using !kick @user
    * This feature won't work without giving the bot permission. To do so, go to the bot's
    * page on discord, add a role, and click the switch under permissions that says Kick
    * Members
*/

module.exports = message => {
  const member = message.mentions.members.first()

  if(!member) {
      return message.reply('Must mention a user to use this feature!')
  }

  if(!member.kickable) {
      return message.reply(`I don't have the authority to kick this member!`)
  }

  return member
  .kick()
  .then(() => message.reply(`${member.user.tag} was kicked!`))
  .catch(error => message.reply('Sorry, an error occurred.'))
}
