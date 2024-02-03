import './App.css';

import { DatePicker } from 'antd';
import React from 'react';

import { AppErrorBoundary } from './AppErrorBoundary';
import ClickCounter from './ClickCounter';

export function App() {
  return (
    <AppErrorBoundary>
      <h4>Hello from app</h4>
      <ClickCounter />
      <DatePicker />
    </AppErrorBoundary>
  );
}
