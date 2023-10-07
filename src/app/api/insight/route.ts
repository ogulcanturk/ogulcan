// Next
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Supabase
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

// Types
type Insight = {
  type: string,
  description: string,
  value: string,
  metadata: any
}

// Function
export async function GET() {
  // Supabase Client
  const supabase = createRouteHandlerClient({ cookies })
  // Return
  return NextResponse.json({ message: 'ok' })
}

// Config
export const dynamic = 'force-dynamic'