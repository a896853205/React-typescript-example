import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';

import './style.css';
import 'antd/dist/antd.css';
import AntdRouterMenu, {
  MenuItem,
  MenuItemGroup,
} from '../../components/Antd-router-menu';
import PageLoading from '../../components/page-loading';

const { Content, Footer, Sider } = Layout;
/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItemGroup('user-list', [
    {
      url: '/userList',
      name: '用户列表',
    },
  ]),
  new MenuItemGroup('create-user', [
    {
      url: '/createUser',
      name: '创建用户',
    },
  ]),
  new MenuItem('/other', '其他'),
];

export default ({ route }: RouteConfigComponentProps) => {
  return (
    <Layout>
      <Sider
        theme='light'
        className='home-sider'
        breakpoint='lg'
        collapsedWidth='0'>
        <AntdRouterMenu menuData={MENU_DATA} />
      </Sider>
      <div className='home-content-box'>
        <Suspense fallback={<PageLoading />}>
          <Content className='home-content'>
            {renderRoutes(route?.routes)}
          </Content>
        </Suspense>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
