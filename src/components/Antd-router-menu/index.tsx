import React from 'react';

import { Menu } from 'antd';
import { v1 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

/**
 * @class 单独的导航栏
 */
export class MenuItem {
  url = '';
  name = '';
  icon? = '';

  constructor(url: string, name: string, icon: string = '') {
    this.url = url;
    this.name = name;
    this.icon = icon;
  }
}

/**
 * @class 组导航栏带有标题
 */
export class MenuItemGroup {
  title: string = '';
  children: MenuItem[] = [];

  constructor(title: string, children: MenuItem[]) {
    this.title = title;
    this.children = children.map(
      child => new MenuItem(child.url, child.name, child.icon)
    );
  }
}
export interface Props {
  menuData: (MenuItem | MenuItemGroup)[];
}

export default (props: Props) => {
  const { menuData } = props;

  return (
    <Menu theme='light' mode='inline'>
      {menuData.map(menuDataItem => {
        if (menuDataItem instanceof MenuItem) {
          return (
            <Menu.Item key={uuid()}>
              <Link to={menuDataItem.url}>
                <span>{menuDataItem.name}</span>
              </Link>
            </Menu.Item>
          );
        } else if (menuDataItem instanceof MenuItemGroup) {
          return (
            <Menu.ItemGroup key={uuid()} title={menuDataItem.title}>
              {menuDataItem.children.map(menuSubItem => {
                return (
                  <Menu.Item key={uuid()}>
                    <Link to={menuSubItem.url}>
                      <span>{menuSubItem.name}</span>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.ItemGroup>
          );
        } else {
          return null;
        }
      })}
    </Menu>
  );
};
