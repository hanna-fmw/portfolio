import styles from '../page.module.css'
import Marquee from 'react-fast-marquee'

export default function MarqueeSection() {
	return (
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
	)
}
