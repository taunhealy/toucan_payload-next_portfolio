import React from 'react'
import { Card } from '../../components/Card'
import type { Post, Page } from '../../../payload-types'

interface PostGridBlockProps {
  posts: Post[]
}

type Props = Extract<Page['layout'][0], { blockType: 'PostGridBlock' }> & PostGridBlockProps

export const PostGridBlock: React.FC<Props> = ({ posts }: PostGridBlockProps) => {
  if (!posts || posts.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post: Post) => (
        <Card
          key={post.slug}
          className="my-custom-class"
          doc={post}
          relationTo="posts"
          showCategories={true}
        />
      ))}
    </div>
  )
}
