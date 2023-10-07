'use client'

// Supabase
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ExampleClientComponent() {

  // Supabase Client
  const supabase = createClientComponentClient()

  return (
    <div className="">
      <span className="">
        Example Client Component 
      </span>
    </div>
  )
}
