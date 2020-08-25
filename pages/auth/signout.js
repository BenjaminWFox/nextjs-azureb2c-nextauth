import { signOut } from 'next-auth/client'

export default function Signout() {
  if (typeof window !== 'undefined') {
    signOut({ callbackUrl: process.env.NEXTAUTH_URL })
  }

  return null
}
