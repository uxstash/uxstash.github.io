import React from 'react';
import Helmut from 'react-helmet';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import TableList from '../components/TableList';

export default ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: data.contentfulStash.category.slug }} />
    <SEO title={data.contentfulStash.name} />
    <PageHeader
      header={data.contentfulStash.category.name}
      subHeader={data.contentfulStash.name}
      description={data.contentfulStash.description.description}
      linkBack={data.contentfulStash.category.slug}
    />
    <TableList tableData={data.contentfulStash.article} />
  </Layout>
);

export const query = graphql`
  query StashQuery($slug: String!) {
    contentfulStash(slug: { eq: $slug }) {
      name
      id
      category {
        name
        slug
      }
      description {
        description
      }
      article {
        title
        id
        source {
          name
          url
        }
        url
        date(locale: "")
      }
    }
  }
`;
