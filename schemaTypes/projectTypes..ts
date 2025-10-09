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
      name: 'challenge',
      type: 'text',
      title: 'Challenge',
    }),
    defineField({
      name: 'objective',
      type: 'array',
      title: 'Objective',
      of: [{type: 'string'}],
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
      title: 'Solution / Approach',
    }),
    defineField({
      name: 'why',
      type: 'text',
      title: 'Why?',
    }),
    defineField({
      name: 'signature',
      type: 'text',
      title: 'Signature Note',
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
      name: 'date',
      type: 'date',
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
