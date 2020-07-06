const spotify = require("./spotify");

const retrieveRelevantData = (response) => {
  if (response.items) {
    const album = response.items[0].track.album;
    return {
      artist: album.artists[0].name,
      album: album.name,
      total_tracks: album.total_tracks,
      release_date: album.release_date,
      url: album.external_urls.spotify,
      img_large: album.images[0].url,
    };
  } else {
    return { playlist_total: response.total };
  }
};

async function getAlbum(offset) {
  const spotifyDetails = await spotify.getAlbumDetailsFromSpotify(offset);

  const album = retrieveRelevantData(spotifyDetails);

  return album;
}

exports.getAlbum = getAlbum;
