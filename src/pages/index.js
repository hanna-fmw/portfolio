import Image from 'next/image'
import coverImage from '../assets/lines.jpg'
import gitHub from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import ProfilePicture from '../components/ProfilePicture'
import quiz from '../assets/quiz.png'
import todo from '../assets/reduxTodo.png'
import jwt from '../assets/JWTbanking.png'
import cv from '../assets/cv.png'
import movies from '../assets/movies.png'
import LogoSpheres from '@/components/LogoSpheres'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade'
import Scene from '@/components/Scene'

export default function Home() {
	const [isOpen1, setIsOpen1] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [isOpen3, setIsOpen3] = useState(false)
	const [isOpen4, setIsOpen4] = useState(false)
	const [isOpen5, setIsOpen5] = useState(false)

	return (
		<>
			<section className='pl-5 pr-5 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24'>
				<div>
					<div className='flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-4 md:mb-10 lg:mb-12'>
						<h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight'>Portfolio.</h1>
						<p className='text-xs text-bold'>Hanna Jacobsson Hosk</p>
					</div>
					<div className='md:mb-16'>
						<Image className='hidden md:block w-full md:h-[450px] lg:h-[600px] shadow-lg' alt='Cover Image' src={coverImage} />
					</div>
				</div>

				<div className='mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-10 md:mb-44 md:mt-16'>
					<h3 className='mb-4 text-4xl md:text-5xl lg:text-5xl leading-tight'>Freelance Translator and Aspiring Frontend Developer</h3>

					<div>
						<p className='mb-4 md:text-sm leading-relaxed'>
							Hi, I'm Hanna, a Frontend Developer Web & Mobile student at Chas Academy. Passionate about learning and improving my creative and
							problem-solving skills, I have found my niche in frontend development. While currently focusing on technologies such as Tailwind,
							JavaScript, React, React Native, Next.js and Node.js, as well as some basic MySQL, I'm also looking forward to exploring AI, machine
							learning and other emerging tools. UX/UI and interaction design is another area that I´m excited to explore further, where I get the
							opportunity to put into practice my knowledge in neuroscience and psychology, including cognitive psychology. Find my LinkedIn link
							below and check back soon for my GitHub link once I've added more projects.
						</p>
						<ProfilePicture />
					</div>
				</div>
			</section>

			<Fade top distance='20%' duration={1000}>
				<section className='mt-20 md:mt-20 lg:mt-40'>
					<h2 className='mb-2 md:mb-12 text-4xl md:text-6xl font-bold tracking-tighter leading-tight pl-5 pr-5 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24'>
						A Couple of Projects
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 md:text-sm md:bg-[#f5f5f6] pl-5 pr-5 md:pl-24 md:pr-24 lg:pr-20 lg:pl-20 py-10'>
						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>Bank App</h4>
								<div>
									Responsive Banking App built using React, React Router, Node.js, Express, JWT, BCrypt, MySQL and Tailwind as well as libraries such
									as react-tilt. Includes features such as Login/Logout, Show current balance, as well as Password encryption and JWT authorization.
									(app not live yet)
									<div>
										<a
											href='https://github.com/hanna-fmw/bank-site-jwt'
											className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium mt-2'
											target='_blank'
											rel='noopener noreferrer'>
											Link to GitHub
										</a>
									</div>
								</div>
							</div>

							<div className='mt-4 mb-4 text-sm'>
								<div>April 2023</div>
								<button
									onClick={() => setIsOpen1(!isOpen1)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpen1 ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpen1 && <Image className='h-[350px] w-auto shadow-lg' alt='Project1' src={jwt} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>Quiz App</h4>
								<div>
									Quiz App built using React, Redux Toolkit and Tailwind. Includes Settings screen, Quiz screens and Final screen, and features such
									as adding questions and answers, reset, counter and final score.
									<div>
										<a
											href='https://quiz-react-redux.vercel.app/'
											className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'
											target='_blank'
											rel='noopener noreferrer'>
											Link to live app
										</a>
									</div>
								</div>
							</div>

							<div className='mt-4 text-sm'>
								<div>March 2023</div>
								<button
									onClick={() => setIsOpen2(!isOpen2)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpen2 ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpen2 && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={quiz} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>Todo List</h4>
								<p>
									Basic CRUD app with add, update, delete and undo actions. Built using React, Tailwind and Redux Toolkit.
									<br />
									<a
										href='https://todo-react-redux-nu.vercel.app/'
										className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'
										target='_blank'
										rel='noopener noreferrer'>
										Link to live app
									</a>
								</p>
							</div>
							<div className='mt-4 mb-4 text-sm'>
								<div>February 2023</div>
								<button
									onClick={() => setIsOpen3(!isOpen3)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpen3 ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpen3 && <Image className='w-auto h-[350px]  shadow-lg' alt='Project1' src={todo} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>Movie App</h4>
								<p>
									Movie search app built using Tailwind, React and omdb API. Includes Search based on movie title.
									<br />
									<a
										href='https://movie-app-zeta-fawn.vercel.app/'
										className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'
										target='_blank'
										rel='noopener noreferrer'>
										Link to live app
									</a>
								</p>
							</div>

							<div className='mt-4 mb-4 text-sm'>
								<div>February 2023</div>
								<button
									onClick={() => setIsOpen4(!isOpen4)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'>
									{!isOpen4 ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpen4 && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={movies} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>CV Page</h4>
								<p>
									CV Page in HTML, CSS and Vanilla JS. Desktop-only version.
									<br />
									<a
										href='https://hanna-fmw.github.io/updated-CV-JS/#'
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'>
										Link to live app
									</a>
								</p>
							</div>

							<div className='mt-4 mb-4 text-sm'>
								<div>November 2022</div>
								<button
									onClick={() => setIsOpen5(!isOpen5)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'>
									{!isOpen5 ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpen5 && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={cv} />}
							</div>
						</div>
					</div>
				</section>
			</Fade>

			<section className='pl-5 pr-5 md:pl-24 md:pr-24 lg:pr-24 mt-12 md:mt-20 lg:mt-40'>
				<h2 className='text-4xl md:text-6xl font-bold tracking-tighter leading-tight'>Currently Learning...</h2>
				<h3 className='mb-8 mt-4 md:mt-4 md:mb-12 text-xs font-semibold'>(Interactive 3D Spheres - spin them!)</h3>
				{/* <LogoSpheres /> */}
				<div className='grid grid-cols-2 md:grid-cols-3 md:pl-24 md:pr-24 md:gap-20 lg:grid-cols-3 '>
					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/html.png' />
						</div>
						<h3 className='text-[#DE7C41]'>HTML</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/css.png' />
						</div>
						<h3 className='text-[#4393D8]'>CSS</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/javascript.png' />
						</div>
						<h3 className='text-[#F8D849]'>JavaScript</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/reactjs.png' />
						</div>
						<h3 className='text-[#73BFDC]'>React</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/tailwind.png' />
						</div>
						<h3 className='text-[#50B0CD]'>Tailwind</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/redux.png' />
						</div>
						<h3 className='text-[#754FF6]'>Redux</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/figma.png' />
						</div>
						<h3 className='text-black'>Figma</h3>
					</div>

					{/* <div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/nodejs.png' />
						</div>
						<h3 className='text-[#4FA16B]'>Node.js</h3>
					</div> */}

					{/* <div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/mySQL.png' />
						</div>
						<h3 className='text-[#D9923A]'>MySQL</h3>
					</div> */}

					{/* <div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/threejs.png' />
						</div>
						<h3 className='text-gray-800'>Three.js</h3>
					</div> */}

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/git.png' />
						</div>
						<h3 className='text-[#E25D33]'>Git</h3>
					</div>

					<div className='flex flex-col justify-center items-center text-[10px] font-semibold'>
						<div>
							<Scene logo='logo/typescript.png' />
						</div>
						<h3 className='text-[#4773C5]'>TypeScript</h3>
					</div>
				</div>
			</section>

			<footer>
				<section className='mt-40 md:mt-52 lg:mt-52 bg-[#FAFAFA] border-t flex justify-between w-full h-[40wh]'>
					<div className='flex flex-col py-14 px-14 md:py-20 text-center md:text-left lg:text-left md:w-[70vw]'>
						<h3 className='text-2xl md:text-3xl font-bold tracking-tighter leading-tight mb-2'>
							Built using CSS/Tailwind, React/Next.js, React Three Fiber and libraries such as react-reveal
						</h3>
						<p className='text-xs font-medium md:text-md lg:text-md text-center md:text-left lg:text-left md:min-h-[200px]'>
							Layout inspired by various online resources and designs.
						</p>
					</div>

					<div className='bg-black flex justify-around items-center pl-10 pr-10 pt-14 pb-14 space-x-20'>
						<ul className='flex flex-col gap-10 w-10'>
							<li>
								<a href='https://github.com/hanna-fmw' target='_blank' rel='noopener noreferrer'>
									<Image src={gitHub} className='md:w-[60px] h-auto bg-white rounded-md' alt='GitHub logo' />
								</a>
							</li>
							<li>
								<a href='http://www.linkedin.com/in/hanna-jacobsson-hosk-29a64138' target='_blank' rel='noopener noreferrer'>
									<Image src={linkedIn} className='md:w-[60px] h-auto bg-black rounded-md' alt='LinkedIn logo' />
								</a>
							</li>
						</ul>
						<div className='relative'>
							<h3 className='transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-normal leading-tight tracking-widest'>
								hanna.hosk@gmail.com
							</h3>
						</div>
					</div>
				</section>
			</footer>
		</>
	)
}
