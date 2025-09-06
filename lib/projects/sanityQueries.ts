import {defineQuery} from 'groq'

export const EVENTS_QUERY = defineQuery(`*[_type == "project"]{
  _id,
  name,
  profile,
  objective,
  solution,
  client,
  services,
  date,
  slug,
  image,
  gallery,
  "productType": category[]-> {
    _id,
    title,
  },
  "service": service[]-> {
    _id,
    title,
  }
}`)
