'use client'

import Link from 'next/link'
import { useCollegeById } from '@/lib/hooks/useColleges'
import useAuth from '@/lib/state/auth'

export default function Detail({ params }: { params: { id: string } }) {
  const toggleSave = useAuth(s => s.toggleSave)
  const isSaved = useAuth(s => s.saved.includes(params.id))
  const { data: college, isLoading } = useCollegeById(params.id)

  if (isLoading) return <div className="text-center py-8">Loading...</div>
  if (!college) return <div className="text-center py-8 text-red-600">College not found</div>

  return (
    <div className="max-w-2xl">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to listing
      </Link>

      <h1 className="text-3xl font-bold">{college.name}</h1>
      <p className="text-sm text-gray-600 mt-1">{college.location}</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <span className="font-semibold">Fees:</span> {college.fees}
        </div>
        <div className="border p-4 rounded">
          <span className="font-semibold">Rating:</span> {college.rating}/5
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{college.overview}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Courses</h2>
        <ul className="list-disc pl-5 space-y-1">
          {college.courses.map((c) => (
            <li key={c} className="text-gray-700">{c}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Placements</h2>
        <p className="text-lg">Average package: <span className="font-bold text-blue-600">{college.placements.avgPackage}</span></p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => toggleSave(college.id)}
          className={`px-4 py-2 rounded transition-colors ${
            isSaved
              ? 'bg-green-200 text-green-800 font-medium'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {isSaved ? '✓ Saved' : 'Save college'}
        </button>
      </div>
    </div>
  )
}