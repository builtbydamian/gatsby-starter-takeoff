import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ArticlePreview from 'components/ArticlePreview';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || 'Title';
  const posts = data.allMdx.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        const excerpt = post.frontmatter.description || post.excerpt

        return (
          <ArticlePreview title={title} url={post.fields.slug} date={post.frontmatter.date} excerpt={excerpt} />
        )
      })}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
