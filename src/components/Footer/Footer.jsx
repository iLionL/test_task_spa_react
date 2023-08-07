import React from 'react';
import logoImg from '../../assets/icons/logo-white.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import linkedinIcon from '../../assets/icons/icon-linkedin.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';

import cl from './Footer.module.css';

const Footer = ({ information }) => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<footer className={cl.footer} id="footer">
			<div className={cl.infoWrapper}>
				<div className={cl.information}>
					<div>
						<ul className={cl.navigation}>
							<li>
								<a
									href="#introduction"
									onClick={() =>
										scrollToSection('introduction')
									}
								>
									Introduction
								</a>
							</li>
							<li>
								<a
									href="#works"
									onClick={() => scrollToSection('works')}
								>
									Works
								</a>
							</li>
							<li>
								<a
									className={cl.last}
									href="#connect"
									onClick={() => scrollToSection('connect')}
								>
									Connect
								</a>
							</li>
						</ul>
					</div>

					<p className={cl.author}>
						&copy; 2023 {information?.elementsData?.elementAuthor}.
						All rights reserved.
					</p>

					<ul className={cl.privacyLinks}>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
						<li>Whistleblowing</li>
					</ul>
				</div>

				<img className={cl.logo} src={logoImg} alt="Logo" />
				<ul className={cl.links}>
					<li>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
							className="facebook-share-button"
							data-lang="en"
						>
							<img
								className={cl.facebook}
								src={facebookIcon}
								alt="facebook"
							/>
						</a>
					</li>
					<li>
						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
							className="linkedin-share-button"
							data-lang="en"
						>
							<img
								className={cl.linkedin}
								src={linkedinIcon}
								alt="linkedin"
							/>
						</a>
					</li>
					<li>
						<a
							href={`http://www.twitter.com/share?url=${window.location.href}`}
							className="twitter-share-button"
							data-lang="en"
						>
							<img
								className={cl.twitter}
								src={twitterIcon}
								alt="twitter"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
