import { Inter, Bebas_Neue, Roboto } from 'next/font/google'
import './globals.css'

// Font configurations
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebasNeue' })

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-roboto',
})

export const metadata = {
	title: 'Portfolio',
	description:
		'Web/Frontend Developer focusing on API-integration, AI-powered solutions and automations using n8n, taking advantage of new technologies and tools such as MCPs, AI Agents, RAG,Cursor, Claude Code and context engineering. Foundational knowledge in React, Next.js, and Tailwind CSS',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${bebasNeue.variable} ${roboto.variable}`}>{children}</body>
		</html>
	)
}
