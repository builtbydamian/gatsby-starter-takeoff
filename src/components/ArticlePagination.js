import React from 'react';
import { Link } from 'gatsby';

const ArticlePagination = ({ next, previous }) => (
  <nav className="mb-8">
    <ul className="flex justify-between">
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </nav>
);

export default ArticlePagination;