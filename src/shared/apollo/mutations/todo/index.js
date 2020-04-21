import gql from 'graphql-tag';

export const ADD = gql`
  mutation addTodo( $title: String! , $description: String!, $done: Boolean!) {
    addTodo( title: $title, description: $description, done: $done ){
      title,
      description,
      done,
    }
  }
`
