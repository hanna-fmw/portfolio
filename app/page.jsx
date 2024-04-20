'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
	const [open, setOpen] = useState(false);

	const copyToClipboard = () => {
		setOpen(true);
		navigator.clipboard.writeText('hanna.hosk@gmail.com');
	};

	return (
		<>
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
						<div className={styles.nav_portfolio}>
							Frontend Developer <br />
							Portfolio / 2024 <br />
						</div>
						<div className={styles.nav_github}>
							See my GitHub <br />
							(A Work in progress)
						</div>

						<button className={styles.contact_btn}>
							<span>Contact</span>
						</button>
					</div>
				</nav>
				<section className={styles.hero_section}>
					<div className={styles.hero_title}>
						<span className={styles.hero_heading}>
							<span className={`${styles.hero_hover} ${styles.junior}`}>j</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>u</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>n</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>i</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>o</span>
							<span className={`${styles.hero_hover} ${styles.junior}`}>r</span>
						</span>

						<h1 className={styles.hero_heading}>
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
						<p className={styles.about_paragraph}>
							<span className={styles.first_word}>About</span>
							&nbsp;Hi, I&apos;m Hanna, a junior frontend developer with the ambition to eventually become fullstack. I&apos;m very driven and
							passionate about learning, creative thinking and problem-solving. While currently focusing on frontend technologies, Node.js/Express and
							basic Database Management, I&apos;m also very excited to learn more about AI and other emerging tools.
						</p>
					</div>

					{/* <p>Scroll down</p> */}
					<div className={styles.svg_scroll}>
						<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
						</svg>
					</div>
				</section>
				<section>
					<div className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								FEATURED <br />
								PROJECTS (3)
							</p>
							<p>
								ART DIRECTION / <br />
								WEB3 DEVELOPMENT
							</p>
						</div>
						<div className={styles.project}>
							<h1 className={styles.project_heading}>Unveil - Photography Marketplace</h1>
						</div>
						<div className={styles.btn_container}>
							<a href='https://www.unveil.art/' target='_blank' rel='noopener noreferrer' class='c-button'>
								<button className={styles.visit_btn}>
									Visit Site
									<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
									</svg>
								</button>
							</a>
						</div>
					</div>
					<div className={styles.svg_scroll}>
						<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
						</svg>
					</div>
					<div className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								{/* FEATURED <br />
								PROJECTS (3) */}
							</p>
							<p>
								ART DIRECTION / <br />
								CREATIVE DEVELOPMENT
							</p>
						</div>
						<div className={styles.project}>
							<h1 className={styles.project_heading}>Studio Null - radio null rewind 2022</h1>
						</div>
						<div className={styles.btn_container}>
							<a href='https://www.unveil.art/' target='_blank' rel='noopener noreferrer' class='c-button'>
								<button className={styles.visit_btn}>
									Visit Site
									<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
									</svg>
								</button>
							</a>
						</div>
					</div>
					<div className={styles.svg_scroll}>
						<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
						</svg>
					</div>
				</section>
				<section className={styles.content_section}>
					<h2 className={styles.content_title}>Interests</h2>
					<div className={styles.content_description}>
						Scrolling through and watching videos and tutorials about Web development on YouTube... and family, friends, food and wine of course!
					</div>
				</section>
				<div className={styles.svg_scroll}>
					<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
					</svg>
				</div>
				<section className={styles.coding_skills}>
					<div className={styles.skills_header}>
						<h2 className={styles.content_title}>SKILLS &</h2>
						<h2 className={styles.skills_title}>CURRENTLY LEARNING</h2>
					</div>
					<div className={styles.skills_table}>
						<div className={styles.skill}>HTML</div>
						<div className={styles.skill}>CSS, Tailwind</div>
						<div className={styles.skill}>JavaScript</div>
						<div className={styles.skill}>TypeScript</div>
						<div className={styles.skill}>React & Next.js</div>
						<div className={styles.skill}>React Native</div>
						<div className={styles.skill}>Node.js & Express</div>
						<div className={styles.skill}>Git & GitHub</div>
						<div className={styles.skill}>Squarespace</div>
						<div className={styles.skill}>Storybook</div>
						<div className={styles.skill}>UX/UI & Animation (Figma, Framer Motion)</div>
					</div>
				</section>
				<section>
					<div className={styles.content_container}>
						<h2 className={styles.content_title}>What I want...</h2>
						<p className={styles.content_description}>
							Learn, collaborate and contribute. <br />
							<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
								See my <span className={styles.gitHub_link}>Github</span>
							</a>
						</p>
					</div>
				</section>
				<section>
					<div className={styles.content_container}>
						<h2 className={styles.content_title}>What you get...</h2>
						<p className={styles.content_description}>
							A passionate and super motivated junior developer with a strong work ethic, who&apos;s just as comfortable collaborating in teams as
							working independently.
							<br />
							<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
								See my <span className={styles.github_link}>Github</span>
							</a>
						</p>
					</div>
				</section>
				<section>
					<div className={styles.svg_scroll}>
						<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
						</svg>
					</div>

					<div className={styles.marquee}>
						<span>FEEL FREE TO REACH OUT — SAY HELLO</span>
					</div>
					<div className={styles.svg_scroll}>
						<svg className={styles.svg_line} width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z' fill='#777' />
						</svg>
					</div>
				</section>
				<footer className={styles.footer}>
					<div className={styles.email}>
						<button onClick={copyToClipboard} className={styles.email_btn}>
							hanna.hosk@gmail.com
						</button>
						<span className={styles.to_copy}>Click To Copy</span>
					</div>
					<div>
						<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
							<span className={styles.github_link}>GITHUB </span>
						</a>
					</div>
					<div>
						<a href='https://www.linkedin.com/in/hanna-jacobsson-hosk-29a64138/' class='c-button' target='_blank' rel='noopener noreferrer'>
							<span className={styles.github_link}>LINKEDIN</span>
						</a>
					</div>

					<div>
						<p class='place'>STOCKHOLM, SWEDEN</p>
						<div class='time'>
							<a
								class='clock24'
								id='tz24-1625668046-c1125-eyJob3VydHlwZSI6IjI0Iiwic2hvd2RhdGUiOiIwIiwic2hvd3NlY29uZHMiOiIwIiwic2hvd3RpbWV6b25lIjoiMCIsInR5cGUiOiJkIiwibGFuZyI6ImVuIn0='
								title='time now'
								target='_blank'
								rel='noopener noreferrer'></a>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
