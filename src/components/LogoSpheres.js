import React from 'react'
import logoArray from '../../public/logo/logoArray'
import Image from 'next/image'

function LogoSpheres() {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{logoArray.map((filename, i) => (
				<div key={i}>
					<div className='shadow-2xl'>
						<Image src={`/logo/${filename}`} alt={`${filename} logo`} width={76} height={76} />
					</div>
				</div>
			))}
		</div>
	)
}

export default LogoSpheres
