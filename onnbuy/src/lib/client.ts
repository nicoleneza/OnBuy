import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn,token } from '../sanity/env'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})
// import createImageUrlBuilder from '@sanity/image-url'
// import type { Image } from 'sanity'

// import { dataset, projectId } from '../sanity/env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

