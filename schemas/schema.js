// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import geoBounds from './types/geoBounds'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import country from './locations/country'
import county from './locations/county'
import municipality from './locations/municipality'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    category,
    blockContent,
    country,
    county,
    municipality,
    geoBounds,
  ])
})
