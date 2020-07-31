const graphql = require("graphql");
const getAlbum = require("../functions/getAlbumData");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const AlbumType = new GraphQLObjectType({
  name: "Album",
  fields: () => ({
    album: { type: GraphQLString },
    artist: { type: GraphQLString },
    release_date: { type: GraphQLString },
    url: { type: GraphQLString },
    img_large: { type: GraphQLString },
    total_tracks: { type: GraphQLString },
  }),
});

const PlaylistType = new GraphQLObjectType({
  name: "Playlist",
  fields: () => ({
    playlist_total: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    album: {
      type: AlbumType,
      args: { display_date: { type: GraphQLID } },
      resolve(parent, args) {
        return getAlbum.getAlbum(args.display_date);
      },
    },
    playlist: {
      type: PlaylistType,
      resolve() {
        return getAlbum.getAlbum();
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
