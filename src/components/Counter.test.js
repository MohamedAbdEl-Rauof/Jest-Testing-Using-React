import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {

    test('renders the counter with initial value of 0', () => {

        render(<Counter />);

        const counterElement = screen.getByText(/counter: 0/i);
        expect(counterElement).toBeInTheDocument();
    });


    test('increments the counter value when the increment button is clicked', () => {

        render(<Counter />);

        const incrementButton = screen.getByText(/increment/i);
        fireEvent.click(incrementButton);

        const counterElement = screen.getByText(/counter: 1/i);

        expect(counterElement).toBeInTheDocument();
    });

    test('decrements the counter value when the decrement button is clicked', () => {

        render(<Counter />);

        const decrementButton = screen.getByText(/decrement/i);
        fireEvent.click(decrementButton);

        const counterElement = screen.getByText(/counter: -1/i);

        expect(counterElement).toBeInTheDocument();

    });
});
