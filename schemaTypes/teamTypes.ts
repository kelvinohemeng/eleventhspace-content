import {defineField, defineType} from 'sanity'

export const teamTypes = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      type: 'text',
      title: 'Role',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'profile',
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `${select.subtitle}`,
        media: select.media,
      }
    },
  },
})
