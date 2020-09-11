const Instagram = require('instagram-web-api')
const { username, password } = {
    username: 'gyan_.r',
    password: 'pass@gram',
}
 
const client = new Instagram({ username, password })
 
client
  .login()
  .then(() => {
    // client
    //   .getProfile()
    //   .then((profile) => {
    //       console.log(profile)
    //   });

      client.search({
          query: 'prabhu_india',
          context: 'user'
      }).then((data) => {
        console.log(data.users[0]);
      })
  })