import { gql } from "@apollo/client";

export const SINGLE_ARTICLE_QUERY = gql`
  query getPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      author {
        name
        uri
        avatar {
          url
        }
      }
      featuredImage {
        sourceUrl
        uri
      }
      content
      title
      date
    }
  }
`;

export const ALL_ARTICLES_QUERY = gql`
  query {
    posts {
      nodes {
        id
        slug
        content
        featuredImage {
          sourceUrl
          uri
        }
        title
        author {
          firstName
          name
        }
        date
      }
    }
  }
`;
