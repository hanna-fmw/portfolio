'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { motion } from 'framer-motion'
import Project from './components/Project'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import MarqueeSection from './components/MarqueeSection'
import Footer from './components/Footer'

export default function Home() {
	const [open, setOpen] = useState(false)

	// Function to copy email to clipboard
	const copyToClipboard = () => {
		setOpen(true)
		navigator.clipboard.writeText('hanna.hosk@gmail.com')
	}

	return (
		<>
			<main className={styles.main}>
				<Header />
				<Hero />
				<section>
					{/* Project sections */}
					<section className={styles.projects}>
						{/* Project header */}
						<div className={styles.projects_header}>
							<p>
								FEATURED <br />
								PROJECTS (5)
							</p>
							<p>
								NEXT.JS / <br />
								WEB DEVELOPMENT
							</p>
						</div>
						{/* Individual project components */}
						<Project
							title='Blog App'
							subheading='Next.js 14, TypeScript, Prisma, Supabase'
							description='Next.js 14 (with App Router and Server Actions) and TypeScript based app using Prisma and Supabase for CRUD functionality with authentication. CSS, Tailwind and Shadcn for styling. Seeding for initial default blog posts, recommended reading based on tags, input form on protected route, drop-down for image selection, etc.'
							repoUrl='https://github.com/hanna-fmw/blog-next14-prisma'
							siteUrl='https://blog-next14-prisma.vercel.app/'
							lineDirection='ltr'
						/>
					</section>

					<section className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								{/* FEATURED
								PROJECTS */}
							</p>
							<p>
								NEXT.JS / <br />
								WEB DEVELOPMENT
							</p>
						</div>
						<Project
							title='SNOWBOARD RETAILER — FRONTEND FOR WEB SHOP'
							subheading='Next.js, TypeScript, Zod, React Hook Form, Storybook, useContext, Downshift.js, Framer Motion, localStorage'
							description='Frontend for a web shop including features such as routing, filtering, sorting, API-based currency conversion, form validation, animations and visuals, etc. Pure CSS using grid/flexbox for responsiveness and layout purposes.'
							repoUrl='https://github.com/hanna-fmw/webshop-snowboards'
							siteUrl='https://webshop-snowboards.vercel.app/'
							lineDirection='rtl'
						/>
					</section>

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
						<Project
							title='Weather App'
							subheading='Next.js, TypeScript, API Calls, localStorage'
							description='Next.js and TypeScript app with responsive layouts. Conditionally displayed background images based on temperature, city filtering in accessible drop-down, automatic sorting, local storage of previous searches, etc.'
							repoUrl='https://github.com/hanna-fmw/weather-app/'
							siteUrl='https://weather-app-alpha-nine-33.vercel.app/'
							lineDirection='ltr'
						/>
					</section>

					{/* <section className={styles.projects}>
						<div className={styles.projects_header}>
							<p>
								
							</p>
							<p>
								NEXT.JS / <br />
								WEB DEVELOPMENT
							</p>
						</div>
						<Project
							title='Photo App'
							subheading='Next.js, TypeScript, Firebase, Leaflet.js, Swiper.js, useContext'
							description='Responsive photo app with Admin page to upload photos to Firebase Storage and display these on the main landing page. Also includes Leaflet mapping with zoom and marker popup, image carousel built with Swiper.js, etc.'
							repoUrl='https://github.com/hanna-fmw/photo-site'
							siteUrl='https://photo-site-phi.vercel.app/'
							lineDirection='rtl'
						/>
					</section> */}
				</section>
				{/* Interests section */}
				<section className={styles.content_section}>
					<h2 className={styles.content_title}>Interests</h2>
					<div className={styles.content_description}>
						Scrolling through and watching YT videos about Web development... and family, friends,
						food and wine of course!
					</div>
				</section>
				{/* Animated SVG scroll line */}
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
							d='M 100, 5 L 0, 5' // M 0 and L 100 paints the line from left to right; M 100 and L 0 paints the line from right to left
						/>
					</svg>
				</aside>

				<Skills />

				<MarqueeSection />
				<Footer />
			</main>
		</>
	)
}
