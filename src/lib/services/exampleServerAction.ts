// Next
import { cookies } from 'next/headers'

// Supabase
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export function exampleServerAction() {
  // Supabase Client
  const supabase = createServerActionClient({ cookies })
  // Response
  return
}