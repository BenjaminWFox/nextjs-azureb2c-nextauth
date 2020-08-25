import '../styles/globals.css'
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  const { session } = pageProps
  
  return (
    <AuthProvider options={{ site: process.env.NEXTAUTH_URL }} session={session}>
      <Component {...pageProps} />)
    </AuthProvider>
  )
}

export default MyApp
