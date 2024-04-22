import React from 'react';
import Image from 'next/image';
import styles from './screenshots.module.css';

const Screenshots = ({ src, alt, width, height, title }) => {
	return (
		<div>
			<Image src={src} alt={alt} width={width} height={height} className={styles.image} />
			<p className={styles.image_title}>{title}</p>
		</div>
	);
};

export default Screenshots;
