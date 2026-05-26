'use client'

import { useCompareColleges } from '@/lib/hooks/useColleges'
import useAuth from '@/lib/state/auth'

export default function Compare() {
  const { comparisons, toggleCompare } = useAuth()
  const { data: colleges = [] } = useCompareColleges(comparisons)

  if (colleges.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No colleges selected for comparison.</p>
        <p className="text-gray-600 text-sm mt-2">Click "Compare" on a college card to add (up to 3).</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">College Comparison</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="border p-3 text-left font-semibold">Attribute</th>
              {colleges.map(c => (
                <th key={c.id} className="border p-3 text-left font-semibold">{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="border p-3 font-semibold">Location</td>
              {colleges.map(c => <td key={c.id} className="border p-3">{c.location}</td>)}
            </tr>
            <tr className="border-b">
              <td className="border p-3 font-semibold">Fees</td>
              {colleges.map(c => <td key={c.id} className="border p-3">{c.fees}</td>)}
            </tr>
            <tr className="border-b">
              <td className="border p-3 font-semibold">Rating</td>
              {colleges.map(c => <td key={c.id} className="border p-3 font-bold text-blue-600">{c.rating}/5</td>)}
            </tr>
            <tr className="border-b">
              <td className="border p-3 font-semibold">Avg. Package</td>
              {colleges.map(c => <td key={c.id} className="border p-3 font-bold text-green-600">{c.placements.avgPackage}</td>)}
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Courses</td>
              {colleges.map(c => (
                <td key={c.id} className="border p-3">
                  <ul className="list-disc pl-4">
                    {c.courses.slice(0, 2).map(course => <li key={course} className="text-sm">{course}</li>)}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex gap-2">
        {colleges.map(c => (
          <button
            key={c.id}
            onClick={() => toggleCompare(c.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}