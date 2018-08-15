import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';


// Apollo client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://eu1.prisma.sh/muhammad-iqbal-73bbd6/bootcamp-example/dev' }),
  cache: new InMemoryCache().restore({}),
});


const USER_GET = gql`
{
  users{
    name
    email
  }
}
`;


const UserDetails = graphql(USER_GET)(({ data }) => {
  const { loading, users } = data;

  if (loading) return <View><Text>loading...</Text></View>;

  return (
    <View style={{ padding: 10 }}>
    {users.map(({ name, email }) => (
      <Text key={name}>
      {name}: {email} 
      {'\n'}
      </Text>
      ))}
      </View>
      );
  });

     // {users.map(({ email }) => email).join(', ')}
export default GetUser;