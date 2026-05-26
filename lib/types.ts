export interface Placements {
  avgPackage: string
}

export interface College {
  id: string
  name: string
  location: string
  fees: string
  rating: number
  overview: string
  courses: string[]
  placements: Placements
}

export interface FilterState {
  location: string
  minRating: number
}