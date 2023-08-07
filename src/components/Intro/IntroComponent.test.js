/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import IntroComponent from './IntroComponent';

const mockInformation = {
	elementsData: {
		elementHeading: 'Top article title',
		elementAuthor: 'John Doe',
		elementLeadImageRenditions: {
			lead: 'https://example.com/image.jpg',
		},
	},
};

test('renders IntroComponent with mock data', () => {
	const formattedDate = '2023-08-04T12:34:56Z';
	const { getByText, getByAltText } = render(
		<IntroComponent
			information={mockInformation}
			formattedDate={formattedDate}
		/>
	);

	const titleElement = getByText('Top article title');
	expect(titleElement).toBeInTheDocument();

	const authorElement = getByText('By John Doe at 2023-08-04T12:34:56Z');
	expect(authorElement).toBeInTheDocument();

	const imageElement = getByAltText('main pictures');
	expect(imageElement).toBeInTheDocument();
	expect(imageElement.src).toBe('https://example.com/image.jpg');
});
