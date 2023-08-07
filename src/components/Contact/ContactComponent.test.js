/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import ContactComponent from './ContactComponent';

test('renders ContactComponent with contact information', () => {
	const { getByText, getByRole } = render(<ContactComponent />);

	const titleElement = getByText("Let's talk");
	expect(titleElement).toBeInTheDocument();

	const descriptionElement = getByText('Ask us anything or just say hi');
	expect(descriptionElement).toBeInTheDocument();

	const phoneLinkElement = getByRole('link', { name: '+1 234 567 89' });
	expect(phoneLinkElement).toBeInTheDocument();
	expect(phoneLinkElement.href).toBe('tel:+1 234 567 89');

	const emailLinkElement = getByRole('link', { name: 'hey@mymail.com' });
	expect(emailLinkElement).toBeInTheDocument();
	expect(emailLinkElement.href).toBe('mailto:hey@mymail.com?subject=Hi');
});
