import React from 'react';
import cl from './ProductComponent.module.css';
import Button from '../Button/Button';

const ProductComponent = ({ information }) => {
	return (
		<div className={cl.productSection}>
			<div className={cl.productImageWrapper}>
				<img
					className={cl.productImage}
					src={
						information?.elementsData?.elementLeadImageRenditions
							.card
					}
					alt="main pictures"
					loading="lazy"
				/>
			</div>
			<div className={cl.productDescription}>
				<p className={cl.productTitle}>
					{information?.elementsData?.elementLeadImageCaption}
				</p>
				<p className="">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged.
				</p>
				<br />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. "
				</p>
				<br />

				<p>
					It was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>

				<Button
					customStyle={{
						background: 'white',
						marginTop: '1rem',
						fontSize: '18px',
						color: '#243043',
						fontWeight: 'bolder',
					}}
					text="Listen more on Spotify"
				/>
			</div>
		</div>
	);
};

export default ProductComponent;
