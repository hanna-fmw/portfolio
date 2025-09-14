import { motion } from 'framer-motion'
import styles from '../page.module.css'

export default function Hero() {
	return (
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
					<span className={styles.hero_hover}>w</span>
					<span className={styles.hero_hover}>e</span>
					<span className={styles.hero_hover}>b</span> <br />
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
					&nbsp;Hi, I&apos;m Hanna, a junior Web Developer motivated by a love for learning and
					creative problem-solving. My foundation is in JavaScript/TypeScript and Next.js/React, and
					over the past year I’ve been working on API integrations, automations, and AI-powered
					workflows and solutions, using tools such as n8n. I’ve also built accessibility and AEO
					solutions with integrated AI, and gained experience with Webflow (particularly the CMS)
					and Shopify. I stay up to date with AI productivity tools and methods, mainly working with
					Cursor and Claude Code alongside context engineering. I also work and experiment with AI
					agents, RAG, and MCPs, while continuously exploring new technologies and workflows.
					<br />
					<br />
					Note! I will soon update the sample projects and skills sections below with more recent
					projects, including: an accessibility/WCAG solution with Next.js, Supabase, AI summary
					generation, PDF generation with audit results; Trello board automation collecting all
					active tasks in Google Sheets; automated alt text field generation using Gemini Vision AI
					(via n8n from and to Webflow built-in alt text fields); and more.
				</p>
			</div>

			<div className={styles.mouse}>
				<div className={styles.wheel}></div>
			</div>

			<style jsx>{`
				.portfolio-link {
					--link-color: #777;
					display: inline-flex;
					align-items: center;
					text-decoration: none;
					color: var(--link-color);
					transition: --link-color 0.3s ease;
					gap: 0.5rem;
				}
				.portfolio-link:hover {
					--link-color: #fff;
				}
			`}</style>

			<div style={{ marginTop: '1rem' }}>
				<a
					href='https://github.com/hanna-fmw/portfolio'
					target='_blank'
					rel='noopener noreferrer'
					className='portfolio-link'>
					<span style={{ fontSize: '1rem', textTransform: 'uppercase' }}>GO TO</span>
					<span style={{ fontSize: '2.5rem', color: 'var(--link-color)' }}>PORTFOLIO</span>
					<span style={{ fontSize: '1rem', textTransform: 'uppercase' }}>REPO</span>
				</a>
			</div>

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
		</motion.section>
	)
}
