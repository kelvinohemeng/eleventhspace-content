import {defineQuery} from 'groq'

export const EVENTS_QUERY = defineQuery(`*[_type == "project"]{
  _id,
  name,
  profile,
  problem,
  approach,
  slug,
  image,
  "category": category[]-> {
    _id,
    title,
  }
}`)
