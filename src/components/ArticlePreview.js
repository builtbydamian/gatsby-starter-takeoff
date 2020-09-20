import React from 'react';
import { Link } from 'gatsby';

const ArticlePreview = ({ title, url, date, excerpt }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-black">
      <Link to={url} className="">{title}</Link>
    </h2>

    <small>{date}</small>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </div>
);

export default ArticlePreview;