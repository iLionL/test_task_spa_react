/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormComponent from './Form';

test('renders FormComponent with input fields and submit button', () => {
	const { getByLabelText, getByText } = render(<FormComponent />);

	const nameInput = getByLabelText('Name');
	expect(nameInput).toBeInTheDocument();

	const emailInput = getByLabelText('Email');
	expect(emailInput).toBeInTheDocument();

	const messageInput = getByLabelText('Message');
	expect(messageInput).toBeInTheDocument();

	fireEvent.change(nameInput, { target: { value: 'John Doe' } });
	fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
	fireEvent.change(messageInput, { target: { value: 'Hello, World!' } });

	expect(nameInput.value).toBe('John Doe');
	expect(emailInput.value).toBe('john@example.com');
	expect(messageInput.value).toBe('Hello, World!');

	const sendButton = getByText('SEND');
	expect(sendButton).toBeInTheDocument();
});
