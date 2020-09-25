import React from 'react';

import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header title={title} />

      <Container className="flex-1">
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
};

export default Layout;
