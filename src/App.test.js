import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Assignment2 on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Assignment2/i);
  expect(nameElement).toBeInTheDocument();
});