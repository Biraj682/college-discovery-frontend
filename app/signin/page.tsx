'use client'

import { useRouter } from 'next/navigation'
import useAuth from '@/lib/state/auth'

export default function SignIn() {
  const login = useAuth(s => s.login)
  const router = useRouter()

  const doLogin = () => {
    login('demo-user')
    router.push('/')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Sign in (demo)</h1>
      <button
        onClick={doLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign in as demo
      </button>
    </div>
  )
}