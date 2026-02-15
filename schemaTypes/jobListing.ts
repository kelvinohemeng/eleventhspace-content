import {defineField, defineType} from 'sanity'

export const jobListingType = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Remote',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'Full-time'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Contract', value: 'Contract'},
          {title: 'Internship', value: 'Internship'},
        ],
      },
      initialValue: 'Full-time',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'blockContent',
    }),
    defineField({
      name: 'applicationEmail',
      title: 'Application Email',
      type: 'string',
      description: 'The email address where applications should be sent.',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
    },
  },
})
