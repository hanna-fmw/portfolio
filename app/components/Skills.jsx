import { motion } from 'framer-motion'
import styles from '../page.module.css'
import { skills } from '../data/skillsData'

export default function Skills() {
	return (
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
						)
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
						A passionate and super motivated junior developer with a strong work ethic, who&apos;s
						just as comfortable collaborating in teams as working independently.
						<br />
						<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
							See my <span className={styles.social_link}>Github</span>
						</a>
					</p>
				</div>
			</section>
		</section>
	)
}
