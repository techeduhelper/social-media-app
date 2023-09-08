import React from "react";
import Layout from "../compnents/layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <div className="bg-green-500 ">Home</div>
        <p>{JSON.stringify(auth)}</p>
      </Layout>
    </>
  );
};

export default Home;
