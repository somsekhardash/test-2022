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
    uri: process.env.REACT_GRAPH || "http://server2022play-env.eba-ugmivb3f.ap-south-1.elasticbeanstalk.com",
    cache: new InMemoryCache()
  });
    
ReactDOM.render( <ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById("root"));
