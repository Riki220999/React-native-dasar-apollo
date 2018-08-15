import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://eu1.prisma.sh/muhammad-iqbal-73bbd6/bootcamp-example/dev' }),
  cache: new InMemoryCache().restore({}),
});

export {

	client
}