import React, { useState } from 'react';
import Button from '../Button/Button';
import stonesImage from '../../assets/images/stones.webp';
import waveImage from '../../assets/images/wave.webp';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

import cl from './ProductGalleryComponent.module.css';

const ProductGalleryComponent = ({ information }) => {
	const [isOpen, setIsOpen] = useState(false);

	const images = [
		{
			src: 'https://content-eu-4.content-cms.com/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg',
			alt: 'Swimming pool and headphones',
		},

		{
			src: waveImage,
			alt: 'Texture treble clef on a dark background',
		},

		{
			src: 'https://img.freepik.com/free-photo/texture-treble-clef-on-a-dark-background-isolated-generative-ai_169016-29582.jpg?w=2000&t=st=1691341123~exp=1691341723~hmac=c3ac0c7d6dcee4606d88d0b94e2826c2387d9cf9fbc7d783d07d80177de9d508',
			alt: 'Texture treble clef on a dark background',
		},
		{
			src: 'https://img.freepik.com/free-photo/young-caucasian-musician-keyboardist-playing-on-gradient-space-in-neon-light-concept-of-music-hobby-festival_155003-12478.jpg?w=2000&t=st=1691341189~exp=1691341789~hmac=ff1e87795af197d9ded1147dc939c967e1d644f93e8e1b783fb484ccc4cda8e2',
			alt: 'Young caucasian nusician',
		},
	];

	return (
		<div className={cl.otherProductWrapper}>
			<h4 id="works" className={cl.workTitle}>
				More works
			</h4>
			<div className={cl.listProductsWrapper}>
				<div className={cl.otherProduct}>
					<img
						className={cl.otherProductImage}
						src={
							information?.elementsData
								?.elementLeadImageRenditions.card
						}
						alt="Other Product"
					/>
				</div>
				<div className={cl.otherProduct}>
					<img
						className={cl.otherProductImage}
						src={stonesImage}
						alt="Other Product"
					/>
				</div>
				<div className={cl.otherProduct}>
					<img
						className={cl.otherProductImage}
						src={
							information?.elementsData
								?.elementLeadImageRenditions.lead
						}
						alt="Other Product"
					/>
				</div>
			</div>

			<div className={cl.otherProductGallery}>
				<Button
					customStyle={{
						width: '250px',
						height: '50px',
					}}
					text="See more"
					onClick={() => {
						setIsOpen(true);
					}}
				/>
				<SlideshowLightbox
					theme="lightbox"
					images={images}
					showThumbnails={true}
					open={isOpen}
					lightboxIdentifier="lbox1"
					onClose={() => {
						setIsOpen(false);
					}}
				></SlideshowLightbox>
			</div>
		</div>
	);
};

export default ProductGalleryComponent;
