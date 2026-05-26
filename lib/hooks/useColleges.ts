'use client'

import { useQuery } from '@tanstack/react-query'
import mockColleges from '../api/mockColleges'
import type { College } from '../types'

type ListParams = {
  search?: string
  location?: string
  minRating?: number
  page?: number
  pageSize?: number
}

type ListResponse = {
  items: College[]
  total: number
}

export function useColleges({ search = '', location = '', minRating = 0, page = 1, pageSize = 10 }: ListParams) {
  return useQuery<ListResponse>(['colleges', { search, location, minRating, page }], async () => {
    let data = mockColleges.slice()
    if (search) data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    if (location) data = data.filter(c => c.location.toLowerCase().includes(location.toLowerCase()))
    if (minRating) data = data.filter(c => c.rating >= minRating)
    const total = data.length
    const start = (page - 1) * pageSize
    const items = data.slice(start, start + pageSize)
    return { items, total }
  })
}

export function useCollegeById(id: string | undefined) {
  return useQuery<College | null>(
    ['college', id],
    async () => {
      if (!id) return null
      return mockColleges.find(c => c.id === id) || null
    },
    { enabled: !!id }
  )
}

export function useCompareColleges(ids: string[]) {
  return useQuery<College[]>(
    ['compareColleges', ids],
    async () => {
      return mockColleges.filter(c => ids.includes(c.id))
    },
    { enabled: ids.length > 0 }
  )
}