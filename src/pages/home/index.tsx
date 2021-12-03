import React from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter as Router, Routes , Route, Link} from "react-router-dom";
import CardDraw from "../card-draw";
import Statistic from "../statistic";
const { Header, Content, Footer } = Layout;


const Home = () => {

    return (
        <Router>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key={1}><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key={2}><Link to="/statistic">Statistic</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 0' }}>
                <div className="site-layout-content">
                    <Routes>
                        <Route path="/cardDraw" element={<CardDraw />} />
                        <Route path="/statistic" element={<Statistic />} />
                        <Route path="/" element={<Statistic />} />
                    </Routes>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Router>
    )
}

export default Home;



