'use client'

import { create } from 'zustand'

type AuthState = {
  user: string | null
  saved: string[]
  comparisons: string[]
  login: (user: string) => void
  logout: () => void
  toggleSave: (id: string) => void
  toggleCompare: (id: string) => void
}

const useAuth = create<AuthState>((set) => ({
  user: null,
  saved: [],
  comparisons: [],
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  toggleSave: (id) => set(state => ({
    saved: state.saved.includes(id) ? state.saved.filter(x=>x!==id) : [...state.saved, id]
  })),
  toggleCompare: (id) => set(state => ({
    comparisons: state.comparisons.includes(id) ? state.comparisons.filter(x=>x!==id) : (state.comparisons.length < 3 ? [...state.comparisons, id] : state.comparisons)
  }))
}))

export default useAuth