import { cache } from 'react'
import { api } from '../api'
import { BASE_URL } from '../constants'
import { convertValuesToURLSearchParams } from '@/lib/utils'

export interface SessionsProps {
  pagination: Pagination
  data: DataSessionProps[]
}

export interface DataSessionProps {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  chapters?: number
  synopsis: string
  background: any
  season: string
  year: number
  broadcast: Broadcast
  producers: Producer[]
  licensors: any[]
  studios: Studio[]
  genres: Genre[]
  explicit_genres: any[]
  themes: Theme[]
  demographics: any[]
}
export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: Items
}

export interface Items {
  count: number
  total: number
  per_page: number
}

export interface Images {
  jpg: Jpg
  webp: Webp
}

export interface Jpg {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Webp {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images2
}

export interface Images2 {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export interface Title {
  type: string
  title: string
}

export interface Aired {
  from: string
  to: string
  prop: Prop
  string: string
}

export interface Prop {
  from: From
  to: To
}

export interface From {
  day: number
  month: number
  year: number
}

export interface To {
  day: number
  month: number
  year: number
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Producer {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Studio {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Theme {
  mal_id: number
  type: string
  name: string
  url: string
}

interface Params {
  sfw?: boolean
  limit?: string
}

export const getSessionNow = cache(async ({
  limit,
  sfw = true, ...props
}: Params):
  Promise<SessionsProps> => {
  const params = {
    limit,
    sfw,
    ...props
  }

  const url = new URL(`${BASE_URL}/seasons/now`);

  url.search = convertValuesToURLSearchParams(params)

  const response = await fetch(url);

  return response.json();
})

export const getSessionUpcoming = cache(async ({
  limit,
  sfw = true, ...props
}: Params): Promise<SessionsProps> => {
  const params = {
    limit,
    sfw,
    ...props
  }

  const url = new URL(`${BASE_URL}/seasons/upcoming`);

  url.search = convertValuesToURLSearchParams(params)

  const response = await fetch(url)

  return response.json();
})


