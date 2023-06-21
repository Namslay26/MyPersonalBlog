import React from 'react'
import Link from 'next/link'

import { PostMetaData } from './PostMetaData'

export default function PostPreview(props: PostMetaData) {
  return (
    <div className='p-10 px-5 mt-3 mb-4 shadow-lg shadow-violet-200 rounded-md'>
      <Link href={`/posts/${props.nameofpost}`}>
      <h1 className='font-extrabold text-2xl'>{props.title}</h1>
      </Link>
      <p className=' font-mono text-gray-400'>{props.date}</p>
      <p className=' text-gray-600'>{props.subtitle}</p>
      </div>
  )
}
