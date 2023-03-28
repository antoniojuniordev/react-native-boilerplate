
interface session {
  token: string
}

export default function handleAuthHeader() {
  const session: session = { token: '' }
  if (session?.token) return { Authorization: `Bearer ${session?.token}` }
}
