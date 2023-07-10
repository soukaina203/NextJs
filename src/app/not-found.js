import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2> hi how are u tho Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}