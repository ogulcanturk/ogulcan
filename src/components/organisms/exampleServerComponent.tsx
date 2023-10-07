// Next
import { cookies } from 'next/headers'

// Supabase
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ExampleServerComponent() {

  // Supabase Client
  const supabase = createServerComponentClient({ cookies })

  return (
    <div className="">
      <span className="">
        Example Server Component
      </span>
    </div>
  )
}
