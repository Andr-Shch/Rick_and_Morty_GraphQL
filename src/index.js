import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import getAllCharacters from './querys';

const client = new ApolloClient({ 
  uri: "https://rickandmortyapi.com/graphql", 
  cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
     <App/>
   </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

