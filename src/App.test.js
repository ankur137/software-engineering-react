import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import React from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home Screen/i);
  expect(linkElement).toBeInTheDocument();
});
