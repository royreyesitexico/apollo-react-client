import { gql } from 'apollo-boost';

export const GET_ALL = gql`
  {
    todos{
      title,
      description,
      done
    }
  }
`
