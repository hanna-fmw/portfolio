'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

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
							<div style={{ paddingTop: '2rem' }}>
								Portfolio / 2023-2024 <br />
								(A Work in progress)
							</div>
						</div>

						<button className={styles.contact_btn}>
							<a href='mailto:hanna.hosk@gmail.com'>Contact</a>
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

					<aside className={styles.svg_scroll}>
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
					</aside>
				</motion.section>
				<section>
					<section className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								FEATURED <br />
								PROJECTS (4)
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
							<p className={styles.project_subheading}>
								Next.js, TypeScript, Zod, React Hook Form, Storybook, useContext, Downshift.js, Framer Motion, localStorage
							</p>
							<p className={styles.project_text}>
								Frontend for a web shop including features such as routing, filtering, sorting, API-based currency conversion, form validation,
								animations and visuals, etc. Pure CSS using grid/flexbox for responsiveness and layout purposes.
							</p>

							<div className={styles.btn_wrapper}>
								<div className={styles.btn_container}>
									<a href='https://github.com/hanna-fmw/webshop-snowboards' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to repo
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>
								<div className={styles.btn_container}>
									<a href='https://webshop-snowboards-nvd24imcr-hannafmws-projects.vercel.app/' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to site
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>
							</div>
						</motion.div>
					</section>
					<aside className={styles.svg_scroll}>
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
					</aside>
					<section className={styles.projects}>
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
							<p className={styles.project_subheading}>Next.js, TypeScript, API Calls, localStorage</p>
							<p className={styles.project_text}>
								Next.js and TypeScript app with responsive layouts. Conditionally displayed background images based on temperature, city filtering in
								accessible drop-down, automatic sorting, local storage of previous serches, etc.{' '}
							</p>

							<div className={styles.btn_wrapper}>
								<div className={styles.btn_container}>
									<a href='https://github.com/hanna-fmw/weather-app/' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to Repo
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>

								<div className={styles.btn_container}>
									<a href='https://weather-app-alpha-nine-33.vercel.app/' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to site
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>
							</div>
						</motion.div>
					</section>

					<aside className={styles.svg_scroll}>
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
					</aside>
					<section className={styles.projects}>
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
							<h1 className={styles.project_heading}>Photo App</h1>
							<p className={`${styles.project_subheading}`}>Next.js, TypeScript, Firebase, Leaflet.js, Swiper.js, useContext</p>

							<p className={`${styles.project_text}`}>
								Responsive photo app with Admin page to uppload photos to Firebase Storage and display these on the main landing page. Also includes
								Leaflet mapping with zoom and marker popup, image carousel built with Swiper.js, etc.{' '}
							</p>

							<div className={styles.btn_wrapper}>
								<div className={styles.btn_container}>
									<a href='https://github.com/hanna-fmw/photo-site' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to Repo
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>

								<div className={styles.btn_container}>
									<a href='https://photo-site-phi.vercel.app/' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to site
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>
							</div>
						</motion.div>
					</section>

					<aside className={styles.svg_scroll}>
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
					</aside>

					<section className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								{/* FEATURED <br />
								PROJECTS */}
							</p>
							<p>
								T3 / <br />
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
							<h1 className={styles.project_heading}>Web Shop - Fashion Store</h1>

							<p className={` ${styles.project_subheading}`}>T3 Stack</p>
							<p className={` ${styles.project_text}`}>
								Collaborative school project involving a team of UX, frontend and backend students. Built on the T3 Stack.
							</p>
							<div className={styles.btn_wrapper}>
								<div className={styles.btn_container}>
									<a href='https://github.com/ChasAcademy-Linnea-Svensson/RebelRunway' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to Repo
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>

								<div className={styles.btn_container}>
									<a href='https://rebel-runway-webshop-oouc4s4mi-chasacademy-linnea-svensson.vercel.app/' target='_blank' rel='noopener noreferrer'>
										<button className={styles.visit_btn}>
											Go to site
											<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z' fill='#777' />
											</svg>
										</button>
									</a>
								</div>
							</div>
						</motion.div>
					</section>
					<aside className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<motion.path
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 3,
									ease: 'linear',
								}}
								d='M 0, 5 L 100, 5' // Start line from right (x = 100) to left side (x = 0)
							/>
						</svg>
					</aside>
				</section>
				<section className={styles.content_section}>
					<h2 className={styles.content_title}>Interests</h2>
					<div className={styles.content_description}>
						Scrolling through and watching YT videos about Web development... and family, friends, food and wine of course!
					</div>
				</section>
				<aside className={styles.svg_scroll}>
					<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
						<motion.path
							initial={{ pathLength: 0 }}
							whileInView={{ pathLength: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 3,
								ease: 'linear',
							}}
							d='M 100, 5 L 0, 5'
						/>
					</svg>
				</aside>
				<section className={styles.section_wrapper}>
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
					<section className={styles.content_wrapper}>
						<div className={styles.content_container}>
							<h2 className={styles.content_title}>What I want...</h2>
							<p className={styles.content_description}>
								Learn, collaborate and contribute. <br />
								<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
									See my <span className={styles.social_link}>Github</span>
								</a>
							</p>
						</div>

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
				</section>
				<section>
					<aside className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<path d='M 0, 5 L 100, 5' />
						</svg>
					</aside>

					<Marquee autoFill pauseOnHover speed={100}>
						<span className={styles.marquee}>&nbsp;— REACH OUT — SAY HELLO</span>
					</Marquee>
					<aside className={styles.svg_scroll}>
						<svg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'>
							<path d='M 0, 5 L 100, 5' />
						</svg>
					</aside>
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
						<a href='https://www.linkedin.com/in/hanna-jacobsson-hosk-29a64138/' target='_blank' rel='noopener noreferrer'>
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
