import React from 'react'
import Image from 'next/image'
import ben from '../public/Ben.jpg'
import Link from 'next/link'

export default function Header() {
  return (
    <div className=''>
      <section className='mb-4 py-6 px-4 flex justify-between space-x-40 shadow-lg '>
        <div className=''>
              <Link href={'https://www.linkedin.com/in/sneha-michelle-vimal-1b73b0213/'}>
              <Image src={ben} alt='profile' width={46} height={46} className=' rounded-full drop-shadow-lg'/>
              </Link>
          </div>
          <div className='mt-3 flex space-x-10'>
              <p className=' font-bold  text-slate-400 hover:text-gray-950'><Link href={'/'}>Home</Link></p>
              <p className=' font-bold  text-slate-400 hover:text-gray-950'><Link href={'https://snehamichellesite.vercel.app/'}>About</Link></p>
              <p className=' font-bold  text-slate-400 hover:text-gray-950'>Articles</p>
          </div>
          <div className='px-4 mt-3'>
              <p>LinkedIn</p>
          </div>
      </section>
    </div>
  )
}
