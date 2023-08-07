/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('renders Input component with input field', () => {
	const handleChange = jest.fn();
	const placeholder = 'Test Placeholder';
	const label = 'Test Label';
	const name = 'testName';
	const id = 'testId';
	const value = 'Test Value';

	const { getByLabelText } = render(
		<Input
			type="text"
			label={label}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			name={name}
			id={id}
		/>
	);

	const inputElement = getByLabelText(label);
	expect(inputElement).toBeInTheDocument();

	const newValue = 'New Test Value';
	fireEvent.change(inputElement, { target: { value: newValue } });

	setTimeout(() => {
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(inputElement.value).toBe(newValue);
	}, 0);
});
