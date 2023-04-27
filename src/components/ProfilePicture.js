import profile from '../assets/profile.png'
import Image from 'next/image'

function ProfilePicture() {
	return (
		<div className='flex items-center'>
			<div className='w-12 h-12 mr-4'>
				<Image src={profile} className='rounded-full' alt='Profile picture' />
			</div>
			<div className='text-sm font-medium'>Me!</div>
		</div>
	)
}

export default ProfilePicture
