// eslint-disable-next-line no-unused-vars
import React from "react";
import Nvabr from "../Nvabr";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Social Media App</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nvabr />
      <main className="min-h-[87vh] mt-12 sm:px-2 md:px-4 lg:px-8">
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
