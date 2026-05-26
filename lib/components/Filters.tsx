'use client'

import React from 'react'
import type { FilterState } from '../types'

interface FiltersProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
}

export default function Filters({ filters, onChange }: FiltersProps) {
  return (
    <div className="flex gap-2">
      <input
        value={filters.location}
        onChange={e => onChange({ ...filters, location: e.target.value })}
        placeholder="Location"
        className="border p-2 rounded"
      />
      <select
        value={filters.minRating}
        onChange={e => onChange({ ...filters, minRating: Number(e.target.value) })}
        className="border p-2 rounded"
      >
        <option value={0}>All ratings</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
      </select>
    </div>
  )
}