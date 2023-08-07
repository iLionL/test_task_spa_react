import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FormComponent from '../Form/Form';

import cl from './ContactComponent.module.css';

const ContactComponent = () => {
	return (
		<div style={{ marginBottom: '11rem' }} className={cl.connectWrapper}>
			<div className={cl.contactWrapper}>
				<div className={cl.textWrapper}>
					<h3>Let's talk</h3>
					<span>Ask us anything or just say hi</span>
				</div>
				<div className={cl.connect}>
					<div className={cl.phoneWrapper}>
						<FontAwesomeIcon icon={faPhone} />
						<p>
							<a href="tel:+1 234 567 89">+1 234 567 89</a>
						</p>
					</div>
					<div className={cl.mailWrapper}>
						<FontAwesomeIcon icon={faEnvelope} />
						<p>
							<a href="mailto:hey@mymail.com?subject=Hi">
								hey@mymail.com
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className={cl.formWrapper}>
				<FormComponent />
			</div>
		</div>
	);
};

export default ContactComponent;
