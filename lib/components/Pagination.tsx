'use client'

import React from 'react'

export default function Pagination({ page, total, pageSize, onPage }: { page: number; total: number; pageSize: number; onPage: (p: number) => void }) {
  const pages = Math.max(1, Math.ceil(total / pageSize))
  return (
    <div className="flex gap-2 items-center justify-center">
      <button onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1} className="px-2 py-1 border rounded disabled:opacity-50">Prev</button>
      <div>Page {page} / {pages}</div>
      <button onClick={() => onPage(Math.min(pages, page + 1))} disabled={page === pages} className="px-2 py-1 border rounded disabled:opacity-50">Next</button>
    </div>
  )
}