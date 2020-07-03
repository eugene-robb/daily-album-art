import gql from "graphql-tag";

export const GET_ALBUM_QUERY = gql`
  query Album($display: ID!) {
    album(display_date: $display) {
      album
      artist
      total_tracks
      url
      release_date
      img_large
    }
  }
`;

export const GET_PLAYLIST_TOTAL = gql`
  {
    playlist {
      playlist_total
    }
  }
`;
