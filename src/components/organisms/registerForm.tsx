'use client'

// Supabase
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function RegisterForm() {

  // Supabase Client
  const supabase = createClientComponentClient()

  async function handleRegister() {
    await supabase.auth.signUp({ email: "hi@ogulcan.dev", password: "test123" })
  }

  return (
    <div className="">
      <button onClick={handleRegister}>Register test</button>
    </div>
  )
}
