import { motion } from 'framer-motion'
import styles from '../page.module.css'

export default function Project({
	title,
	subheading,
	description,
	repoUrl,
	siteUrl,
	lineDirection = 'ltr',
}) {
	return (
		<>
			<motion.div
				className={styles.project}
				initial={{ translateY: 50 }}
				whileInView={{ translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, ease: 'easeIn' }}>
				<h1 className={styles.project_heading}>{title}</h1>
				<p className={styles.project_subheading}>{subheading}</p>
				<p className={styles.project_text}>{description}</p>
				<div className={styles.btn_wrapper}>
					<ProjectButton href={repoUrl} text='Go to Repo' />
					<ProjectButton href={siteUrl} text='Go to site' />
				</div>
			</motion.div>
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
						d={lineDirection === 'ltr' ? 'M 0, 5 L 100, 5' : 'M 100, 5 L 0, 5'}
					/>
				</svg>
			</aside>
		</>
	)
}

function ProjectButton({ href, text }) {
	return (
		<div className={styles.btn_container}>
			<a href={href} target='_blank' rel='noopener noreferrer'>
				<button className={styles.visit_btn}>
					{text}
					<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z'
							fill='#777'
						/>
					</svg>
				</button>
			</a>
		</div>
	)
}
