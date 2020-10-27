import React from 'react';

import { useRequest, useUnmount } from 'ahooks';
import { Form, Input, InputNumber, Button, message } from 'antd';

import * as APIS from 'src/constants/api-constants';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label} is not validate email!',
    // eslint-disable-next-line no-template-curly-in-string
    number: '${label} is not a validate number!',
  },
  string: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}',
  },
  email: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}',
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}',
  },
};

export default () => {
  let { loading, run, cancel } = useRequest(
    data => {
      let { user } = data;
      return {
        url: APIS.CREATE_USER,
        method: 'POST',
        data: { ...user },
      };
    },
    {
      manual: true,
      onSuccess: _result => {
        message.success('用户创建成功');
      },
      onError: _error => {
        message.error('用户创建失败, 请稍后再试');
      },
    }
  );

  useUnmount(() => {
    cancel();
  });

  return (
    <Form
      {...layout}
      onFinish={values => run(values)}
      validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label='Name'
        rules={[{ type: 'string', required: true, min: 1, max: 50 }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Email'
        rules={[{ type: 'email', min: 1, max: 50, required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label='Age'
        rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button loading={loading} type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
