import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
	return (
		<div className={cl.loaderWrapper}>
			<div className={cl.loader}>
				<span className={cl.icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0"
						y="0"
						viewBox="0 0 100 100"
					>
						<ellipse
							transform="rotate(-21.283 49.994 75.642)"
							cx="50"
							cy="75.651"
							rx="19.347"
							ry="16.432"
							fill="currentColor"
						></ellipse>
						<path
							fill="currentColor"
							d="M58.474 7.5h10.258v63.568H58.474z"
						></path>
					</svg>
				</span>
				<span className={cl.icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0"
						y="0"
						viewBox="0 0 100 100"
					>
						<ellipse
							transform="rotate(-21.283 49.994 75.642)"
							cx="50"
							cy="75.651"
							rx="19.347"
							ry="16.432"
							fill="currentColor"
						></ellipse>
						<path
							fill="currentColor"
							d="M58.474 7.5h10.258v63.568H58.474z"
						></path>
					</svg>
				</span>
				<span className={cl.icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0"
						y="0"
						viewBox="0 0 100 100"
					>
						<ellipse
							transform="rotate(-21.283 49.994 75.642)"
							cx="50"
							cy="75.651"
							rx="19.347"
							ry="16.432"
							fill="currentColor"
						></ellipse>
						<path
							fill="currentColor"
							d="M58.474 7.5h10.258v63.568H58.474z"
						></path>
					</svg>
				</span>
			</div>
		</div>
	);
};

export default Loader;
