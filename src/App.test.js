import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the counter with initial value of 0', () => {
  render(<App />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments the counter value when the increment button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrements the counter value when the decrement button is clicked', () => {
  render(<App />);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});
