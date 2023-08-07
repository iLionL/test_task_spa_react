import React from 'react';
import IntroductionComponent from './Introduction/IntroductionComponent';
import IntroComponent from './Intro/IntroComponent';
import ProductComponent from './Product/ProductComponent';
import ProductGalleryComponent from './ProductGallery/ProductGalleryComponent';
import ContactComponent from './Contact/ContactComponent';

import cl from './MainPage.module.css';

const MainPage = ({ information }) => {
	console.log(information, 'information');
	const dateObject = new Date(information?.elementsData?.elementDate);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};

	const formattedDate = dateObject.toLocaleString('en-US', options);

	return (
		<>
			{information ? (
				<>
					<section className={cl.informationWrapper}>
						<div className={cl.container} />
						<IntroComponent
							formattedDate={formattedDate}
							information={information}
						/>
						<IntroductionComponent information={information} />
					</section>

					<section className={cl.productWrapper}>
						<ProductComponent information={information} />
					</section>
					<section>
						<ProductGalleryComponent information={information} />
					</section>
					<section id="connect">
						<ContactComponent />
					</section>
				</>
			) : (
				<div className={cl.container + ' ' + cl.emptyData}>
					Something get wrong, please reload the page or try again
					later{' '}
				</div>
			)}
		</>
	);
};

export default MainPage;
