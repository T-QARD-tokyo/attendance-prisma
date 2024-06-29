import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className={styles.layout}>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
