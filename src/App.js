import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { Footer } from "./components/Footer";
import { Main } from "./components/Main.js";
import { GlobalStyles } from "./components/styles/GlobalStyles";

//apollo client setup
const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Main />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
