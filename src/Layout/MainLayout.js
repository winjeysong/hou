import React from 'react';
import { Layout } from 'antd';
import logo from '../assets/logo.svg';
import styles from './MainLayout.css';

const { Header, Content, Footer } = Layout;

export default ({ children }) => (
  <Layout className={styles.wrapper}>
    <Header className={styles.header}><img src={logo} alt="logo" width={50} />MapECU精度评估报告</Header>
    <Layout className={styles['content-wrapper']}>
      <Content>
        <p className={styles.desc}>
          MapECU精度评估报告统计范围以出公司门口全程到进地库前。
          所有位置精度以1σ的方式进行描述。
          误差的计算方式为在东北天坐标系下，
          以宇达的状态与MapECU的状态（结果补偿至宇达中心）做差，
          再旋转至车体坐标系下，计算位置误差(m,1σ)，姿态误差(°,1σ)。
        </p>
        {children}
      </Content>
      <Footer className={styles.footer}>️MOMENTA | 打造自动驾驶大脑</Footer>
    </Layout>
  </Layout>
);
