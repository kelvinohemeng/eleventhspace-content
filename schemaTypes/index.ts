import {type SchemaTypeDefinition} from 'sanity'

import {teamTypes} from './teamTypes'
import {projectType} from './projectTypes.'
import {categoryType} from './categoryTypes'
import {blockContentType} from './blockContentType'
import {tagTypes} from './tagTypes'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [projectType, categoryType, blockContentType, teamTypes, tagTypes],
}
