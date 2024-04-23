'use client';
import { images } from '@/app/projects/snowboardDemo/snowboardImages';
import React from 'react';
import styles from './snowboardDemo.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SnowboardDemo = () => {
	return (
		<main className={styles.main}>
			<nav className={styles.links}>
				<Link href='/' className={styles.link}>
					Back
				</Link>
				<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer' className={styles.link}>
					GitHub
				</a>
				<a href='https://github.com/hanna-fmw/webshop-snowboards' target='_blank' rel='noopener noreferrer' className={styles.link}>
					Repo
				</a>
			</nav>
			<header className={styles.header}>
				<h1>Snowboard Webshop Screenshots</h1>
				<p className={styles.project_description}>
					Frontend for a web shop. Built using Next.js, CSS and Typescript and tools/libraries such as useContext, Zod, React Hook Form, Downshift.js,
					Storybook, Framer Motion, localStorage, etc. Includes features such as routing, API calls, filtering, sorting, currency conversion, form
					validation, etc.
				</p>
			</header>
			<div className={styles.container}>
				{images.map((image, i) => {
					return (
						<article key={i} className={styles.img_container}>
							<Image src={image.src} alt={image.title} width={350} height={350} className={styles.image} />
							<p className={styles.image_title}>{image.title}</p>
						</article>
					);
				})}
			</div>
		</main>
	);
};

export default SnowboardDemo;
