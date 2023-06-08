import Image from 'next/image'
import coverImage from '../assets/lines.jpg'
import gitHub from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import ProfilePicture from '../components/ProfilePicture'
import front from '../assets/todoReactNative/front.png'
import details from '../assets/todoReactNative/details.png'
import addTodo from '../assets/todoReactNative/addtodo.png'
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
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
	const [isOpenTodoReactNative, setIsOpenTodoReactNative] = useState(false)
	const [isOpenBank, setIsOpenBank] = useState(false)
	const [isOpenQuizRedux, setIsOpenQuizRedux] = useState(false)
	const [isOpenTodoRedux, setIsOpenTodoRedux] = useState(false)
	const [isOpenMovieAppReact, setIsOpenMovieAppReact] = useState(false)
	const [isOpenCVPage, setIsOpenCVPage] = useState(false)

	return (
		<>
			<section className='pl-5 pr-5 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16'>
				<div>
					<div className='flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-4 md:mb-10 lg:mb-12'>
						<h1 className='text-6xl text-[#16151A] md:text-8xl font-bold tracking-tighter leading-tight'>Portfolio.</h1>
						<p className='text-xs text-bold'>Hanna Jacobsson Hosk</p>
					</div>
					<div className='md:mb-16'>
						<Image className='hidden md:block w-full md:h-[450px] lg:h-[600px] shadow-lg' alt='Cover Image' src={coverImage} />
					</div>
				</div>

				<div className='mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-10 md:mb-44 md:mt-16'>
					<h3 className='mb-4 text-[#16151A] text-4xl md:text-5xl lg:text-5xl leading-tight'>Freelance Translator and Aspiring Frontend Developer</h3>

					<div>
						<p className='mb-4 md:text-sm leading-relaxed'>
							Hi, I'm Hanna, a Frontend Developer Web & Mobile student at Chas Academy. Passionate about learning and improving my creative and
							problem-solving skills, I have found my niche in frontend development. While currently focusing on technologies such as Tailwind,
							JavaScript, React, React Native, Next.js and Node.js, as well as some basic MySQL, I'm also looking forward to exploring AI, machine
							learning and other emerging tools. UX/UI and interaction design is another area that I´m excited to explore further, where I get the
							opportunity to put into practice my knowledge in neuroscience and psychology, including cognitive psychology.
						</p>
						<ProfilePicture />
					</div>
				</div>
			</section>

			<Fade top distance='20%' duration={1000}>
				<section className='mt-20 md:mt-20 lg:mt-40'>
					<h2 className='mb-2 md:mb-12 text-[#16151A] text-4xl md:text-6xl font-bold tracking-tighter leading-tight pl-5 pr-5 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24'>
						A Couple of Projects
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 md:text-sm md:bg-[#f3f5f8] pl-5 pr-5 md:pl-24 md:pr-24 lg:pr-20 lg:pl-20 py-10'>
						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>Todo App</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>React Native</span>
								<div>
									Todo list built using React Native. Includes features such as navigation with expo-router, scroll view, completed checkbox, detail
									page, and delete.
									<div>
										<a
											href='https://github.com/hanna-fmw/todo-react-native'
											className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium mt-2'
											target='_blank'
											rel='noopener noreferrer'>
											Link to GitHub
										</a>
									</div>
								</div>
							</div>

							<div className='mt-4 mb-4 text-sm'>
								<div>June 2023</div>
								<button
									onClick={() => setIsOpenTodoReactNative(!isOpenTodoReactNative)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpenTodoReactNative ? 'Click for screenshot (carousel)' : 'Close'}
								</button>
								{isOpenTodoReactNative ? (
									<div className='flex flex-row justify-center items-center w-64 gap-5 z-20'>
										<Carousel
											autoPlay
											infiniteLoop={true}
											interval={1400}
											transitionTime={1000}
											className='w-64'
											showIndicators={false}
											showArrows={false}
											showStatus={false}>
											<div className='w-52'>
												<Image alt='Front page' src={front} />
											</div>
											<div className='w-52'>
												<Image alt='Add Todo page' src={addTodo} />
											</div>
											<div className='w-52'>
												<Image alt='Details page' src={details} />
											</div>
										</Carousel>
									</div>
								) : null}
							</div>
						</div>
						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>Bank App</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>Express, MySQL, JWT</span>
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
									onClick={() => setIsOpenBank(!isOpenBank)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpenBank ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpenBank && <Image className='h-[350px] w-auto shadow-lg' alt='Project1' src={jwt} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>Quiz App</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>React, Redux Toolkit</span>
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
									onClick={() => setIsOpenQuizRedux(!isOpenQuizRedux)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpenQuizRedux ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpenQuizRedux && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={quiz} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>Todo List</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>React, Redux Toolkit</span>
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
									onClick={() => setIsOpenTodoRedux(!isOpenTodoRedux)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-medium'>
									{!isOpenTodoRedux ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpenTodoRedux && <Image className='w-auto h-[350px]  shadow-lg' alt='Project1' src={todo} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>Movie App</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>React</span>
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
									onClick={() => setIsOpenMovieAppReact(!isOpenMovieAppReact)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'>
									{!isOpenMovieAppReact ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpenMovieAppReact && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={movies} />}
							</div>
						</div>

						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-white`}>
								<h4 className='self-start text-3xl leading-tight'>CV Page</h4>
								<span className='mb-4 self-start text-xs text-orange-500'>HTML, CSS, Vanilla JS</span>
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
									onClick={() => setIsOpenCVPage(!isOpenCVPage)}
									className='inline-block mb-1 hover:border-b-2 text-gray-800 hover:border-blue-500 text-sm font-semibold'>
									{!isOpenCVPage ? 'Click for screenshot' : 'Close'}
								</button>
								{isOpenCVPage && <Image className='w-auto h-[350px] shadow-lg' alt='Project1' src={cv} />}
							</div>
						</div>
						<div>
							<div className={`${styles.card} p-6 flex flex-col items-center justify-center bg-[#16151A] text-white`}>
								<h4 className='mb-4 self-start text-3xl leading-tight'>In Progress...</h4>
								<p>
									Team Project (scrum): Building a Student Portal for Chas Academy in a team consisting of frontend developer, DevOps and UX designer
									students, using tools such as Next.js (with protected routing, Context API, etc.), Firebase (Firestore and Firebase Authentication),
									SendGrid, CSS/Tailwind, Figma, GitLab, Taiga, Trello, etc.
								</p>
							</div>
						</div>
					</div>
				</section>
			</Fade>

			<section className='mt-12 md:mt-20 lg:mt-40'>
				<h2 className='mb-2 md:mb-12 text-[#16151A] text-4xl md:text-6xl font-bold tracking-tighter leading-tight pl-5 pr-5 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24'>
					Currently Learning...
				</h2>
				<h3 className='mb-8 mt-4 md:mt-4 md:mb-12 text-xs font-semibold pl-5 pr-5 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24'>
					(Interactive 3D Spheres - spin them!)
				</h3>
				{/* <LogoSpheres /> */}
				<div className={`${styles.one} grid grid-cols-2 md:grid-cols-3 md:pl-24 md:pr-24 md:gap-20 lg:grid-cols-3 pb-32 pt-16`}>
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
			{/* mt-40 md:mt-52 lg:mt-52 */}
			<footer>
				<section className=' bg-[#f3f5f8] border-t flex justify-between w-full h-[40wh]'>
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
