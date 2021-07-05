import React, { lazy } from 'react';

const Fetch = lazy(() => import('./components/fetch'));

// 整体组件逻辑,lazy等等.
export default () =>  <Fetch />
