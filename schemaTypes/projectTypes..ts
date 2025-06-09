import {categoryType} from './categoryTypes'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
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
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'profile',
      type: 'text',
      title: 'Profile',
    }),
    defineField({
      name: 'problem',
      type: 'text',
      title: 'Problem',
    }),
    defineField({
      name: 'approach',
      type: 'array',
      title: 'Approach',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Featured', value: 'featured'},
              {title: 'Case Study', value: 'case-study'},
              // {title: 'Open Source', value: 'open-source'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least on item is required'),
      ],
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
