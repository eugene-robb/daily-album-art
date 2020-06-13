const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  spotify_id: process.env.SPOTIFY_ID,
  spotify_secret: process.env.SPOTIFY_SECRECT,
};
