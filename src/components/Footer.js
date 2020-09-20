import React from 'react';
import Container from 'components/Container';

const Footer = ({ title }) => (
  <div className="bg-white py-8">
    <Container className="text-sm">
      {`© ${new Date().getFullYear()} - `}
      Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Container>
  </div>
);

export default Footer;