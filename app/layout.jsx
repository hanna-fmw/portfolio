import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Portfolio',
	description: 'Junior Frontend Developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={bebasNeue.className}>{children}</body>
		</html>
	);
}
