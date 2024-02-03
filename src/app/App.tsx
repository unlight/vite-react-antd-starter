import './App.css';
import { AppErrorBoundary } from './AppErrorBoundary';
import ClickCounter from './ClickCounter';
import { DatePicker } from 'antd';
import React from 'react';

export function App() {
  return (
    <AppErrorBoundary>
      <h4>Hello from app</h4>
      <ClickCounter />
      <DatePicker />
    </AppErrorBoundary>
  );
}
