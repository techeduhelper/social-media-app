import React from "react";
import Layout from "../compnents/layout/Layout";

const PageNotFound = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center items-center h-[83vh] text-4xl font-semibold drop-shadow-xl font-serif">
          404 😥 Not Found
        </div>
      </Layout>
    </>
  );
};

export default PageNotFound;
