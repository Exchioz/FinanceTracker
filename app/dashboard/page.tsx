'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login') // Redirect manual setelah logout
    }

    return (
        <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <button onClick={handleLogout}>Logout</button>
        </div>
    )
}