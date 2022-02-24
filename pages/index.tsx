import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as react from "react";
import Layout from "./layout";
import TabNavigation from "./tabNavigation";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./nav";

const Home: NextPage = () => {
  react.useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <div className={styles.container}>
      <Layout>
        <Nav/>
      </Layout>
    </div>
  );
};

export default Home;
