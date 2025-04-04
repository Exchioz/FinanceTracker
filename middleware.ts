import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const res = NextResponse.next()

    const supabase = createMiddlewareClient({ req: request, res })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    const isAuthRoute =
        request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup'
    const isProtectedRoute = request.nextUrl.pathname === '/dashboard'
    const isHomeRoute = request.nextUrl.pathname === '/'

    if (isHomeRoute) {
        if (session) return NextResponse.redirect(new URL('/dashboard', request.url))
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (session && isAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!session && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return res
}

export const config = {
    matcher: ['/', '/login', '/signup', '/dashboard'],
}
