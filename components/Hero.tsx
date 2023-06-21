import Link from "next/link"
import Image from "next/image"
import heartemoji from '../public/heartemoji.png'

export default function Hero() {
  return (
    <div>
        <section className="py-40 flex justify-center gap-40">
            <div className="p-3">
                <h1 className=" mb-4 font-semibold text-7xl">
                    Hello there!
                </h1>
                <p className="mb-4 font-medium text-2xl">
                    Here is a space where I talk about things that I embrace about myself, <br />
                    and a reminder that I can and will love myself. 
                </p>
                <div className=" flex space-x-3">
                <button className=" px-4 py-3 rounded-lg bg-gray-800 text-white hover:text-yellow-300">
                    Read More
                </button>
                <button>
                    Check blogs
                </button>
                </div>
                
            </div>
            <div>
                <div className=" bg-white rounded-full shadow-2xl shadow-red-400 w-500 h-500">
                <Image src={heartemoji} alt="heartemoji" width={300} height={300} className="p-10"/>
                </div>
                
            </div>
        </section>
        <hr className="mb-4" />
        <br />
    </div>
  )
}
