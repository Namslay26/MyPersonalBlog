// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Hero from '@/components/Hero'

function PostCard(post: Post) {
  return (
    <div className='p-10 px-5 mt-3 mb-4 shadow-lg shadow-violet-200 rounded-md'>
    <Link href={post.url}>
    <h1 className='font-extrabold text-2xl'>{post.title}</h1>
    </Link>
    <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    <p className=' text-gray-600'>{post.subtitle}</p>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div>
      <Hero></Hero>
      <h1 className='px-10 py-5 font-bold text-5xl'>Blogs</h1>
      <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 px-10 py-10'>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </div>
    </div>
  )
}