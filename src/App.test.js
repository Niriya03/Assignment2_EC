import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Niriya/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders course name on the page', () => {
  render(<App />);
  const courseElement = screen.getByText(/TECH2102:Enterprise Computing/i);
  expect(courseElement).toBeInTheDocument();
});