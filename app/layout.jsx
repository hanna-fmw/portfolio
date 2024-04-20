import { Inter, Bebas_Neue, Roboto } from 'next/font/google';
import './globals.css';


const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebasNeue' });

// const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

export const metadata = {
	title: 'Portfolio',
	description: 'Junior Frontend Developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/* <body className={bebasNeue.className}>{children}</body> */}
			{/* Attach both CSS variables (som vi definierat för respektive font ovan)
			 to our HTML document by doing {${bebasNeue.variable} ${roboto.variable}} rather 
			 than {roboto.className} like we do when we are only using a 
			 single font. */}
			<body className={`${bebasNeue.variable} ${roboto.variable}`}>{children}</body>
		</html>
	);
}
