'use client';
import { images } from './photoScreenshots';
import styles from './photoApp.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PhotoApp = () => {
	return (
		<main className={styles.main}>
			<nav className={styles.links}>
				<Link href='/' className={styles.link}>
					Back
				</Link>
				<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer' className={styles.link}>
					GitHub
				</a>
				<a href='https://github.com/hanna-fmw/photo-site' target='_blank' rel='noopener noreferrer' className={styles.link}>
					Repo
				</a>
			</nav>
			<header className={styles.header}>
				<h1>Photo App Webshop Screenshots</h1>
				<p className={styles.project_description}>
					Landing page using html, pure css, Next.js and the Swiper.js library. Admin page for accessing and uploading images on the local system to
					Firebase´s Storage service. Once uploaded, the images are immediately retrieved and displayed to the user on the landing page. useContext
					was used to make the image list accessible to the whole app. (To do: make /admin a protected route and add delete functionality, improve
					design/responsiveness)
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

export default PhotoApp;
