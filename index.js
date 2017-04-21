 require('dotenv').config();

 const server = require('thought_well');

server.listen(8180, () => {
  console.log(`listening somewhere.`);
});
