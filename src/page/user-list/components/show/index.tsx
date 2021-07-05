import React from 'react';

import { Table } from 'antd';
import { PaginatedResult } from 'ahooks/lib/useAntdTable';
import Column from 'antd/lib/table/Column';

interface Props {
  tableProps: PaginatedResult<UserList.Item>['tableProps'];
}

export default ({ tableProps }: Props) => (
  <Table
    rowKey={record => record.uuid}
    {...tableProps}
    dataSource={[
      {
        uuid: '123456987',
        name: 'Eric',
        email: '896853205@qq.com',
        phone: '15998133472',
      },
      {
        uuid: '123456987',
        name: 'Eric',
        email: '896853205@qq.com',
        phone: '15998133472',
      },
      {
        uuid: '123456987',
        name: 'Eric',
        email: '896853205@qq.com',
        phone: '15998133472',
      },
      {
        uuid: '123456987',
        name: 'Eric',
        email: '896853205@qq.com',
        phone: '15998133472',
      },
    ]}>
    <Column title='Name' dataIndex='name' />
    <Column title='Email' dataIndex='email' responsive={['md']} />
    <Column title='Phone' dataIndex='phone' />
  </Table>
);
