import React, { useCallback, useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import DOMPurify from 'dompurify';
import MainPage from './components/MainPage';
import './App.css';
import Layout from './components/Layout/Layout';
import { getAllInformation } from './api/api';
import Loader from './components/Loader/Loader';

const App = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const getData = useCallback(async () => {
		try {
			const response = await getAllInformation();

			// sanitization and filtering of incoming HTML content to prevent XSS attacks
			const sanitizedElementBody = response.data.elements.body.values.map(
				(numbers) => DOMPurify.sanitize(numbers)
			);

			const typeInfo = response.data.type;

			const linksData = {
				linkDraft: response.data.links.draft.href,
				linkRetire: response.data.links.retire.href,
				linkSelf: response.data.links.self.href,
				linkThumbnail: response.data.links.thumbnail.href,
				linkType: response.data.links.type.href,
			};

			const elementsData = {
				elementHeading: response.data.elements.heading.value,
				elementDate: response.data.elements.date.value,
				elementAuthor: response.data.elements.author.value,
				elementLeadImageCaption:
					response.data.elements.mainImage.value.leadImageCaption
						.value,
				elementLeadImageRenditions: {
					lead:
						'https://content-eu-4.content-cms.com' +
						response.data.elements.mainImage.value.leadImage
							.renditions.lead.url,
					card:
						'https://content-eu-4.content-cms.com' +
						response.data.elements.mainImage.value.leadImage
							.renditions.card.url,
					default:
						'https://content-eu-4.content-cms.com' +
						response.data.elements.mainImage.value.leadImage
							.renditions.default.url,
				},
				elementLeadImage:
					'https://content-eu-4.content-cms.com' +
					response.data.elements.mainImage.value.leadImage.url,
				elementBody: sanitizedElementBody.map(
					(sanitizedContent, index) => (
						<div className="content-text" key={index}>
							{HTMLReactParser(sanitizedContent)}
						</div>
					)
				),
			};

			// creating an object with processed data
			setData({ typeInfo, linksData, elementsData });
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className="App">
			{isLoading ? (
				<Loader />
			) : (
				<Layout data={data}>
					<MainPage information={data} />
				</Layout>
			)}
		</div>
	);
};

export default App;
