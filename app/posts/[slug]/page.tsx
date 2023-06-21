import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div className='mt-20 max-w-screen-sm sm:max-w-screen-sm mx-auto'>
    <h2 className=' text-5xl font-black text-indigo-800'> {post.title}</h2>
    <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
    </time>
    <p className=' font-light text-gray-500'>{post.subtitle}</p>
    <article className="prose md:prose-lg lg:prose-xl">
    <div dangerouslySetInnerHTML={{__html: post.body.html}} />
    </article>
  </div>
  )
}

export default PostLayout