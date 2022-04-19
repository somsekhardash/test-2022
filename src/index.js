import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: process.env.REACT_GRAPH || "http://localhost:4000/",
    cache: new InMemoryCache()
  });
    
ReactDOM.render( <ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById("root"));
