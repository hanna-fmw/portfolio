'use client';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<div className='circle'></div>
			<main className={styles.main}>
				<nav className={styles.nav}>
					<div className={styles.nav_left}>
						<div className={styles.nav_name}>
							<span>
								{' '}
								Hanna <br />
								Jacobsson <br />
								Hosk{' '}
							</span>
						</div>
					</div>
					<div className={styles.nav_right}>
						<div className={styles.nav_folio}>
							Frontend Developer <br />
							Folio / 2021 — 2023
						</div>
						<div className={styles.nav_availability}>
							Available for freelance <br />
							work from March 2023
						</div>

						<button className={styles.contact_btn} data-text='Contact'>
							<span className={styles.contact_span}>Contact</span>
						</button>
					</div>
				</nav>
				<section className={styles.hero_section}>
					<div className={styles.hero_title}>
						<h1 className={styles.hero_heading}>
							<span className={`${styles.hero_hover} ${styles.junior}`}>j</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>u</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>n</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>i</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>o</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>r</span>
							<br />
							<span className={styles.hero_hover}>f</span>
							<span className={styles.hero_hover}>r</span>
							<span className={styles.hero_hover}>o</span>
							<span className={styles.hero_hover}>n</span>
							<span className={styles.hero_hover}>t</span> <br />
							<span className={styles.hero_hover}>e</span>
							<span className={styles.hero_hover}>n</span>
							<span className={styles.hero_hover}>d</span> <br />
							<span className={styles.hero_hover}>d</span>
							<span className={styles.hero_hover}>e</span>
							<span className={styles.hero_hover}>v</span>
							<span className={styles.hero_hover}>e</span>
							<span className={styles.hero_hover}>l</span>
							<span className={styles.hero_hover}>o</span>
							<span className={styles.hero_hover}>p</span>
							<span className={styles.hero_hover}>e</span>
							<span className={styles.hero_hover}>r</span>
						</h1>
					</div>

					<div className={styles.about}>
						<p class='hero__paragraph'>
							<span class='first-word'>About</span>
							&nbsp;I am a developer based in Lagos, Nigeria focused on creating interactive digital experiences on the web, working with brands and
							industry leaders such as <span>Disney,</span>
							<span>Paystack,</span>
							<span>Jelly,</span>
							and <span>Null</span>
							amongst others to achieve this.
						</p>
						<div class='hero__scroll'>
							<p>Scroll down</p>
							<div class='c-infinite'>
								<span class='c-link'>
									<span class='c-link__inner'>
										<span>
											<svg width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
											</svg>
										</span>
										<span class='c-link__animated'>
											<svg width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
											</svg>
										</span>
									</span>
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
