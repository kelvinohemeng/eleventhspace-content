import {categoryType} from './serviceTypes'
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
      title: 'Project Profile',
    }),
    defineField({
      name: 'objective',
      type: 'text',
      title: 'Objective',
      initialValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    }),
    defineField({
      name: 'objectiveImage',
      title: 'Objective Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'solution',
      type: 'text',
      title: 'Solution',
    }),
    defineField({
      name: 'solutionImage',
      title: 'Solution Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'client',
      type: 'string',
      title: 'Client',
    }),
    defineField({
      name: 'services',
      type: 'string',
      title: 'Services',
    }),
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
    }),
    defineField({
      name: 'tags',
      title: 'Project Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tagTypes'}}],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least on item is required'),
      ],
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'array',
      of: [{type: 'reference', to: {type: 'service'}}],
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
      subtitle: 'objective',
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
