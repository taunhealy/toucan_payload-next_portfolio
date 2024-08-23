import type { Block } from 'payload'

export const PostGridBlock: Block = {
  slug: 'post-grid',
  fields: [
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      required: true,
    },
  ],
}
