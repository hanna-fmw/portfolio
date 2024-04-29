'use client';
import React from 'react';
import { images } from './weatherImages';
import styles from './weatherAppDemo.module.css';
import Image from 'next/image';
import Link from 'next/link';

const WeatherAppDemo = () => {
	return (
		<main className={styles.main}>
			<nav className={styles.links}>
				<Link href='/' className={styles.link}>
					Back
				</Link>
				<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer' className={styles.link}>
					GitHub
				</a>
				<a href='https://github.com/hanna-fmw/weather-app' target='_blank' rel='noopener noreferrer' className={styles.link}>
					Repo
				</a>
			</nav>
			<header className={styles.header}>
				<h1>Weather App Screenshots</h1>
				<p className={styles.project_description}>
					Weather App. Built using Next.js, CSS and TypeScript and tools/libraries such as Downshift.js, Framer Motion, localStorage, etc. Includes
					features such as routing, API calls, sorting, etc.
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

export default WeatherAppDemo;
