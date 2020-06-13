const fetch = require("node-fetch");
const { spotify_id, spotify_secret } = require("../config");

const authEndpoint = "https://accounts.spotify.com/api/token";
const apiEndpoint = "https://api.spotify.com/v1";
const authString = `${spotify_id}:${spotify_secret}`;

async function getAlbumDetailsFromSpotify(offset) {
  let queryParams = "";

  if (offset) {
    queryParams = `?fields=total,items.track.album(!available_markets,album_type,id,type,release_date_precision,href,uri)&limit=1&offset=${offset}`;
  } else {
    queryParams = `?fields=total`;
  }

  const searchUrl = `${apiEndpoint}/playlists/7hadX5GoSdBg8DnofcZPVo/tracks${queryParams}`;
  const authorization = Buffer.from(authString).toString("base64");

  const response = await fetch(authEndpoint, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "Basic " + authorization,
    },
  });

  const auth = await response.json();

  const albumData = await fetch(searchUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${auth.access_token}`,
    },
  });

  const data = await albumData.json();

  return data;
}

exports.getAlbumDetailsFromSpotify = getAlbumDetailsFromSpotify;
