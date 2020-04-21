import ApolloClient from 'apollo-boost';
import { CLIENT_URI } from '../constants/apollo';

export const client = new ApolloClient({
  uri: CLIENT_URI
})
