import type { College } from '../types'

const mockColleges: College[] = [
  {
    id: 'c1',
    name: 'Greenfield Institute of Technology',
    location: 'Delhi, India',
    fees: '₹2,00,000',
    rating: 4.2,
    overview: 'A leading tech institute with strong CS programs.',
    courses: ['B.Tech CS', 'B.Tech EE'],
    placements: { avgPackage: '8 LPA' }
  },
  {
    id: 'c2',
    name: 'Riverside College of Arts',
    location: 'Mumbai, India',
    fees: '₹1,50,000',
    rating: 3.9,
    overview: 'Well-rounded arts programs.',
    courses: ['BA English', 'BA Economics'],
    placements: { avgPackage: '4 LPA' }
  },
  {
    id: 'c3',
    name: 'Hillside Engineering',
    location: 'Bengaluru, India',
    fees: '₹2,50,000',
    rating: 4.5,
    overview: 'Strong placements & industry ties.',
    courses: ['B.Tech CS', 'B.Tech ME'],
    placements: { avgPackage: '10 LPA' }
  },
  {
    id: 'c4',
    name: 'Lakeshore Institute',
    location: 'Pune, India',
    fees: '₹1,80,000',
    rating: 4.0,
    overview: 'Balanced academics and placements.',
    courses: ['BBA', 'B.Com'],
    placements: { avgPackage: '5 LPA' }
  }
]

export default mockColleges