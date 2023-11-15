import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Compose from './Compose';

describe('Compose Component', () => {
  test('renders Compose component', () => {
    render(<Compose />);
    // You can add more specific tests based on your component's structure
    expect(screen.getByText('New Message')).toBeInTheDocument();
  });

  test('sends email on form submission', () => {
    render(<Compose />);
    const toInput = screen.getByPlaceholderText('Recipients');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageTextarea = screen.getByLabelText('Message');

    fireEvent.change(toInput, { target: { value: 'example@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test Message' } });

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    // You can add assertions based on the expected behavior after sending
    // For example, check that the input fields are cleared, or dispatch function is called
  });

  // Add more tests as needed
});
