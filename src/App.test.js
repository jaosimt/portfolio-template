import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Portfolio', () => {
  render(<App />);
  const linkElement = screen.getByText(/sim jao/i);
  expect(linkElement).toBeInTheDocument();
});
