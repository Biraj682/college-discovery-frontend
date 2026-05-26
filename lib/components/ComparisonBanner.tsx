'use client'

import Link from 'next/link'
import useAuth from '../state/auth'
import { useCompareColleges } from '../hooks/useColleges'

export default function ComparisonBanner() {
  const comparisons = useAuth(s => s.comparisons)
  const { data: colleges = [] } = useCompareColleges(comparisons)

  if (colleges.length === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-lg border-t border-blue-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Selected for comparison ({colleges.length}/3):</span>
          <div className="flex gap-2">
            {colleges.map(c => (
              <span key={c.id} className="bg-blue-700 px-3 py-1 rounded text-sm">
                {c.name}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/compare"
          className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Compare Now
        </Link>
      </div>
    </div>
  )
}
