import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const USER_GET = gql`
{
  users{
    name
    email
  }
}
`;

export {
	USER_GET,
}