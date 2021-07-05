import React from 'react';

import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import axios from 'axios';
import { Input, Button, Row, Col } from 'antd';

import Show from '../show';
import * as APIS from 'src/constants/api-constants';

/**
 * useAntdTable回调函数
 * @param param0 当前组件page选项
 */
const getTableData = ({
  current,
  pageSize,
}: PaginatedParams[0]): Promise<UserList.Result> => {
  return axios
    .get(APIS.GET_LIST, {
      params: {
        page: current,
        pageSize,
      },
    })
    .then(res => ({
      total: res.data.count,
      list: res.data.rows,
    }));
};

// fetch请求组件,专门用户请求后台数据,注意要与view组件拆分
export default () => {
  const { tableProps } = useAntdTable(getTableData, {
    defaultPageSize: 5,
  });

  return (
    <>
      <Row
        justify='space-between'
        align='top'
        gutter={[0, { xs: 8, sm: 12, md: 16, lg: 16 }]}>
        <Col lg={5} sm={11} xs={24}>
          <Input placeholder='输入名称' />
        </Col>
        <Col lg={5} sm={11} xs={24}>
          <Input placeholder='输入专利所属公司' />
        </Col>
        <Col lg={5} sm={11} xs={24}>
          <Input placeholder='输入应用领域' />
        </Col>
        <Col lg={5} sm={11} xs={24}>
          <Input placeholder='输入录入日期' />
        </Col>
        <Col lg={3} sm={11} xs={24}>
          <Button
            type='primary'
            style={{
              width: '100%',
            }}>
            查询
          </Button>
        </Col>
      </Row>

      <Show tableProps={tableProps} />
    </>
  );
};
