import { useState } from 'react'
import styles from '../page.module.css'

export default function Footer() {
	const [open, setOpen] = useState(false)

	const copyToClipboard = () => {
		navigator.clipboard.writeText('hanna.hosk@gmail.com')
		setOpen(true)
		setTimeout(() => setOpen(false), 2000) // Reset after 2 seconds
	}

	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.email}>
					<button onClick={copyToClipboard} className={styles.email_btn}>
						<span className={styles.email_address}>hanna.hosk@gmail.com</span>
						<span className={styles.to_copy}>{open ? 'Copied!' : 'Click To Copy'}</span>
					</button>
				</div>
				<div>
					<a href='/HannaJacobssonHosk_CV.pdf' download className={styles.social_link}>
						DOWNLOAD CV
					</a>
				</div>
				<div>
					<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
						<span className={styles.social_link}>GITHUB </span>
					</a>
				</div>
				<div>
					<a
						href='https://www.linkedin.com/in/hanna-jacobsson-hosk-29a64138/'
						target='_blank'
						rel='noopener noreferrer'>
						<span className={styles.social_link}>LINKEDIN</span>
					</a>
				</div>
				<div>
					<span className={styles.place}>STOCKHOLM, SWEDEN</span>
				</div>
			</footer>
		</>
	)
}
