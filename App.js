import React, {Component} from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';
// import GetUser from "GetUser.js"
// import { clinet } from 'src/client.js';

// Main App export
export default class ApolloApp extends Component {
  render() {
    return(
      <ApolloProvider client={client}>
        <SafeAreaView>
          <UserDetails />
        </SafeAreaView>
      </ApolloProvider>
      );
  }
}

// Apollo client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.0.23:4000/' }),
  cache: new InMemoryCache().restore({}),
});


const USER_GET = gql`
{
  users{
    name
    phone
  }
}
`;


const UserDetails = graphql(USER_GET)(({ data }) => {
  const { loading, users } = data;

  if (loading) return <View><Text>loading...</Text></View>;

  return (
    <View style={{ padding: 10 }}>
    {users.map(({ name, phone }) => (
      <Text key={name}>
      {name}: {phone}
      {'\n'}
      </Text>
      ))}
      </View>
      );
  });

     // {users.map(({ email }) => email).join(', ')}
