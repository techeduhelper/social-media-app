import React from "react";
import Layout from "../compnents/layout/Layout";
import { useAuth } from "../context/auth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
      </Layout>
    </>
  );
};

export default Home;
