import React from 'react';
import { Layout } from 'antd';
import logo from '../assets/logo.svg';
import styles from './MainLayout.css';

const { Header, Content, Footer } = Layout;

export default ({ children }) => (
  <Layout className={styles.wrapper}>
    <Header className={styles.header}><img src={logo} alt="logo" width={50} /></Header>
    <Layout className={styles['content-wrapper']}>
      <Content>{children}</Content>
      <Footer className={styles.footer}>️MOMENTA | 打造自动驾驶大脑</Footer>
    </Layout>
  </Layout>
)
