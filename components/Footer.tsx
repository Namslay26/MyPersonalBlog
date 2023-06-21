import Link from "next/link"
export default function Footer() {
  return (
    <section className=' bg-slate-800 text-white py-10 mt-3 px-4 flex justify-between space-x-40  '>
        <div className=''>
              <h3>&#169; Michelle 2023</h3>
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
  )
}
