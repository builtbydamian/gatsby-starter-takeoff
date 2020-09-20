import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "components/Layout"
import SEO from "components/SEO"
import ArticlePagination from "components/ArticlePagination"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article className="mb-8">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800">{post.frontmatter.title}</h1>
          <p className="text-sm">{post.frontmatter.date}</p>
        </header>

        <div className="wysiwyg">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>

      <ArticlePagination next={next} previous={previous} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
