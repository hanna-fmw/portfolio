import { motion } from 'framer-motion'
import styles from '../page.module.css'

export default function Header() {
	return (
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
						Portfolio / 2023-2025 <br />
						(A Work in progress)
					</div>
				</div>

				<button className={styles.contact_btn}>
					<a href='mailto:hanna.hosk@gmail.com'>Contact</a>
				</button>
			</div>
		</motion.nav>
	)
}
