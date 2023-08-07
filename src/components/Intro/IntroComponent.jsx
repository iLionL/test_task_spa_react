import React from 'react';
import cl from './IntroComponent.module.css';

const IntroComponent = ({ information, formattedDate }) => {
	const author = information?.elementsData?.elementAuthor || '';
	const leadImageSrc =
		information?.elementsData?.elementLeadImageRenditions.lead || '';

	return (
		<div className={cl.mainImageWrapper}>
			<div className={cl.titleWrapper} data-testid="title-wrapper">
				<h1 className={cl.title}>
					{information?.elementsData?.elementHeading}
				</h1>
				<div className={cl.authorWrapper}>
					<span className={cl.authorText}>
						By {author} at {formattedDate}
					</span>
				</div>
			</div>
			<div className={cl.imageWrapper}>
				<img
					className={cl.mainImage}
					src={leadImageSrc}
					alt="main pictures"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default IntroComponent;
