import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';

const Header = ({ title }) => (
  <div className="bg-gradient-to-tr from-blue-500 to-teal-500 py-8 text-white mb-16">
    <Container>
      <div className="flex flex-row justify-between items-center -mx-8 mb-8">
        <h1 className="text-4xl font-bold px-8">
          <Link to="/" className="">{title}</Link>
        </h1>

        <div className="px-8">
          <div className="flex">
            <a href="/" className="px-6 py-2">About</a>
            <a href="/" className="px-6 py-2">Blog</a>
            <a href="/" className="px-6 py-2 bg-white text-blue-500 font-bold rounded-lg">Contact</a>
          </div>
        </div>
      </div>

      <div className="text-2xl max-w-2xl">
        <p className="mb-4">Gatsby Takeoff is a starter theme to help you get your next project off the ground! Based on the official blog starter, it also supports Tailwind CSS and has MDX support baked in.</p>
      </div>
    </Container>
  </div>
);

export default Header;