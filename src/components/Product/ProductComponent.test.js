/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import ProductComponent from './ProductComponent';

test('renders ProductComponent with correct information', () => {
	const information = {
		elementsData: {
			elementLeadImageRenditions: {
				card: 'https://content-eu-4.content-cms.com/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg?resize=640px%3A470px&crop=640%3A360%3B0%2C55',
			},
			elementLeadImageCaption: 'Product Title',
		},
	};

	const { getByText, getByAltText } = render(
		<ProductComponent information={information} />
	);

	const productTitle = getByText('Product Title');
	expect(productTitle).toBeInTheDocument();

	const productDescription = getByText(
		/Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged./
	);
	expect(productDescription).toBeInTheDocument();

	const productImage = getByAltText('main pictures');
	expect(productImage).toBeInTheDocument();

	const listenButton = getByText('Listen more on Spotify');
	expect(listenButton).toBeInTheDocument();
});
