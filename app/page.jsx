'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const skills = [
	{ id: 1, name: 'HTML' },
	{ id: 2, name: 'CSS, Tailwind' },
	{ id: 3, name: 'JavaScript' },
	{ id: 4, name: 'TypeScript' },
	{ id: 5, name: 'React & Next.js' },
	{ id: 6, name: 'React Native' },
	{ id: 7, name: 'Node.js & Express' },
	{ id: 8, name: 'Prisma, Supabase & Firebase basics' },
	{ id: 9, name: 'Git & GitHub' },
	{ id: 10, name: 'Squarespace' },
	{ id: 11, name: 'UX/UI & Animation (Figma, Framer Motion)' },
];

export default function Home() {
	const [open, setOpen] = useState(false);

	const copyToClipboard = () => {
		setOpen(true);
		navigator.clipboard.writeText('hanna.hosk@gmail.com');
	};

	// const skillVariant = {
	// 	initial: { y: '50%' },
	// 	whileInView: { y: '0%' },
	// 	transition: {
	// 		duration: 0.8,
	// 		delay: 0.4,
	// 		ease: [0, 0.71, 0.2, 1.01],
	// 	},
	// };

	return (
		<>
			<main className={styles.main}>
				<motion.nav
					className={styles.nav}
					initial={{ y: '-200%' }}
					animate={{ y: '0%' }}
					transition={{
						duration: 0.4,
						delay: 0.2,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
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
							Portfolio / 2023-2024 <br />
						</div>
						<div className={styles.nav_github}>
							See my <span className={styles.github_navlink}>GitHub</span> <br />
							(A Work in progress)
						</div>

						<button className={styles.contact_btn}>
							<span>Contact</span>
						</button>
					</div>
				</motion.nav>
				<motion.section
					className={styles.hero_section}
					initial={{ y: '200%' }}
					animate={{ y: '0%' }}
					transition={{
						duration: 0.4,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
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
							<span className={styles.first_word}>About </span>
							&nbsp;Hi, I&apos;m Hanna, a junior frontend developer with the ambition to eventually become fullstack. I&apos;m very driven and
							passionate about learning, creative thinking and problem-solving. While currently focusing on frontend technologies, Node.js/Express and
							basic Database Management, I&apos;m also very excited to learn more about AI and other emerging tools.
						</p>
					</div>

					<div className={styles.mouse}>
						<div className={styles.wheel}></div>
					</div>

					<div className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<motion.path
								initial={{ pathLength: 0 }}
								// animate={{ pathLength: 1 }}
								whileInView={{ pathLength: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 3,
									ease: 'linear',
									// repeat: Infinity,
									// repeatType: 'loop',
									// repeatDelay: 2,
								}}
								// strokeWidth={0.4}
								d='M 0, 5 L 100, 5'
							/>
						</svg>
					</div>
				</motion.section>
				<section>
					<div className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								FEATURED <br />
								PROJECTS (2)
							</p>
							<p>
								NEXT.JS / <br />
								WEB DEVELOPMENT
							</p>
						</div>
						<motion.div
							className={styles.project}
							initial={{ translateY: 50 }}
							whileInView={{ translateY: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.4,
								ease: 'easeIn',
							}}>
							<h1 className={styles.project_heading}>
								SNOWBOARD RETAILER — <br />
								FRONTEND FOR WEB SHOP
							</h1>
						</motion.div>
						<div className={styles.btn_container}>
							<a href='https://github.com/hanna-fmw/webshop-snowboards' target='_blank' rel='noopener noreferrer' class='c-button'>
								<button className={styles.visit_btn}>
									Go to repo
									<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
									</svg>
								</button>
							</a>
						</div>
					</div>
					<div className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<motion.path
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 3,
									ease: 'linear',
								}}
								d='M 100, 5 L 0, 5' // Start line from right (x = 100) to left side (x = 0)
							/>
						</svg>
					</div>
					<div className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								{/* FEATURED <br />
								PROJECTS */}
							</p>
							<p>
								NEXT.JS / <br />
								WEB DEVELOPMENT
							</p>
						</div>
						<motion.div
							className={styles.project}
							initial={{ translateY: 50 }}
							whileInView={{ translateY: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.4,
								ease: 'easeIn',
							}}>
							<h1 className={styles.project_heading}>Weather App</h1>
						</motion.div>
						<div className={styles.btn_container}>
							<a href='https://weather-app-rust-gamma-39.vercel.app/' target='_blank' rel='noopener noreferrer' class='c-button'>
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
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<motion.path
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 3,
									ease: 'linear',
								}}
								d='M 0, 5 L 100, 5'
							/>
						</svg>
					</div>
				</section>
				<section className={styles.content_section}>
					<h2 className={styles.content_title}>Interests</h2>
					<div className={styles.content_description}>
						Scrolling through and watching YT videos about Web development... and family, friends, food and wine of course!
					</div>
				</section>
				<div className={styles.svg_scroll}>
					<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
						<motion.path
							initial={{ pathLength: 0 }}
							whileInView={{ pathLength: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 3,
								ease: 'linear',
							}}
							d='M 100, 5 L 0, 5' // Start line from right (x = 100) to left side (x = 0)
						/>
					</svg>
				</div>
				<section className={styles.coding_skills}>
					<div className={styles.skills_header}>
						<h2 className={styles.content_title}>SKILLS &</h2>
						<h2 className={styles.skills_title}>CURRENTLY LEARNING</h2>
					</div>
					<div className={styles.skills_table}>
						{skills.map((skill, i) => {
							return (
								<motion.div
									key={skill.id}
									className={styles.skill}
									initial={{ translateY: 50 }}
									whileInView={{ translateY: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: i * 0.1,
										ease: [0, 0.71, 0.2, 1.01],
									}}>
									{skill.name}
								</motion.div>
							);
						})}
					</div>
				</section>
				<section>
					<div className={styles.content_container}>
						<h2 className={styles.content_title}>What I want...</h2>
						<p className={styles.content_description}>
							Learn, collaborate and contribute. <br />
							<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
								See my <span className={styles.social_link}>Github</span>
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
								See my <span className={styles.social_link}>Github</span>
							</a>
						</p>
					</div>
				</section>
				<section>
					<div className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<path d='M 0, 5 L 100, 5' />
						</svg>
					</div>

					<div className={styles.marquee}>
						<span>FEEL FREE TO REACH OUT — SAY HELLO</span>
					</div>
					<div className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<path d='M 0, 5 L 100, 5' />
						</svg>
					</div>
				</section>
				<footer className={styles.footer}>
					<div className={styles.email}>
						<button onClick={copyToClipboard} className={styles.email_btn}>
							<span className={styles.email_address}>hanna.hosk@gmail.com</span>
							<span className={styles.to_copy}>Click To Copy</span>
						</button>
					</div>
					<div>
						<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
							<span className={styles.social_link}>GITHUB </span>
						</a>
					</div>
					<div>
						<a href='https://www.linkedin.com/in/hanna-jacobsson-hosk-29a64138/' class='c-button' target='_blank' rel='noopener noreferrer'>
							<span className={styles.social_link}>LINKEDIN</span>
						</a>
					</div>

					<div>
						<span className={styles.place}>STOCKHOLM, SWEDEN</span>
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
