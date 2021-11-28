import React from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


const Home = () => {

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
            <Content style={{ padding: '0 0' }}>

                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Home;



