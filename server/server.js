const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const path = require("path");



const app = express();
const PORT = process.env.PORT || 3001;

//allow cors
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
