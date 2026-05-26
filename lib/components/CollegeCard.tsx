'use client'

import React from 'react'
import Link from 'next/link'
import useAuth from '../state/auth'
import type { College } from '../types'

interface CollegeCardProps {
  college: College
}

export default function CollegeCard({ college }: CollegeCardProps) {
  const toggleSave = useAuth(s => s.toggleSave)
  const toggleCompare = useAuth(s => s.toggleCompare)
  const isSaved = useAuth(s => s.saved.includes(college.id))
  const isCompared = useAuth(s => s.comparisons.includes(college.id))

  return (
    <div className="border rounded p-4 bg-white hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">
        <Link href={`/college/${college.id}`} className="text-blue-600 hover:underline">
          {college.name}
        </Link>
      </h3>
      <p className="text-sm text-gray-600">{college.location}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-sm">Fees: {college.fees}</div>
        <div className="text-sm">Rating: {college.rating}/5</div>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => toggleSave(college.id)}
          className={`px-3 py-1 rounded transition-colors ${
            isSaved
              ? 'bg-green-200 text-green-800 font-medium'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {isSaved ? '✓ Saved' : 'Save'}
        </button>
        <button
          onClick={() => toggleCompare(college.id)}
          className={`px-3 py-1 rounded transition-colors ${
            isCompared
              ? 'bg-gray-800 text-white font-medium'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isCompared ? '✓ Added' : 'Compare'}
        </button>
      </div>
    </div>
  )
}