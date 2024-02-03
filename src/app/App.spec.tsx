import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { afterAll, beforeEach, expect, it, vi } from 'vitest';

it('renders app component', async () => {
  const screen = render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Home')).toBeTruthy();
  });
});
