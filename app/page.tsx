'use client'

import { useState } from 'react'
import CollegeCard from '@/lib/components/CollegeCard'
import SearchBar from '@/lib/components/SearchBar'
import Filters from '@/lib/components/Filters'
import Pagination from '@/lib/components/Pagination'
import { useColleges } from '@/lib/hooks/useColleges'
import type { FilterState } from '@/lib/types'

export default function Listing() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<FilterState>({ location: '', minRating: 0 })
  const [page, setPage] = useState(1)
  const pageSize = 6
  const { data, isLoading } = useColleges({ search, location: filters.location, minRating: filters.minRating, page, pageSize })

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={v => { setSearch(v); setPage(1) }} />
        <Filters filters={filters} onChange={f => { setFilters(f); setPage(1) }} />
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading colleges...</div>
      ) : data?.items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No colleges found. Try adjusting your filters.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.items.map((college) => <CollegeCard key={college.id} college={college} />)}
          </div>
          <div className="mt-6 flex justify-center">
            <Pagination page={page} total={data?.total || 0} pageSize={pageSize} onPage={setPage} />
          </div>
        </>
      )}
    </div>
  )
}