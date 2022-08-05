import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eric Ahmann - Software Developer</title>
        <meta
          name="description"
          content="I'm currently working on personal projects to push my skills to the next level. Check out my portfolio to see what I'm working on."
        />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
