import React from 'react';
import seaImage from '../../assets/images/sea.webp';
import cl from './IntroductionComponent.module.css';

const IntroductionComponent = ({ information }) => {
	return (
		<div className={cl.contentWrapper}>
			<div id="introduction" className={cl.content}>
				{information?.elementsData?.elementBody}
			</div>
			<div>
				<img
					className={cl.seaImage}
					src={seaImage}
					alt="sea"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default IntroductionComponent;
