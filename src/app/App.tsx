import './App.css';

import React from 'react';

import { AppErrorBoundary } from './AppErrorBoundary';

export function App() {
  return (
    <AppErrorBoundary>
      <h4>Hello from app</h4>
    </AppErrorBoundary>
  );
}
