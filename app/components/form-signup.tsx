'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { cn } from '@/lib/utils'
import { getPasswordStrength } from '@/lib/password-strength'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { AlertCircle } from 'lucide-react'

export function SignupForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient()

    const passwordStrength = getPasswordStrength(password)
    const isPasswordMatch = password === confirmPassword
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isFormFilled = name && email && password && confirmPassword
    const isFormValid = isFormFilled && isEmailValid && isPasswordMatch


    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('')

        const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { name },
        },
        })

        if (error) {
        setErrorMessage(error.message)
        } else {
        router.push('/dashboard')
        }

        setLoading(false)
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
        <Card>
            <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
                Enter your details below to create your account
            </CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSignup}>
                <div className="flex flex-col gap-6">
                {errorMessage && (
                    <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Signup failed</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                )}

                <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <Progress
                        value={passwordStrength.percent}
                        className="h-1"
                        color={passwordStrength.color}
                    />

                </div>
                <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {!isPasswordMatch && confirmPassword && (
                        <p className="text-sm text-red-500">Passwords do not match</p>
                    )}
                </div>
                 <Button type="submit" className="w-full" disabled={loading || !isFormValid}>
                    {loading ? 'Signing up...' : 'Sign up'}
                </Button>
                <div className="flex items-center gap-4">
                    <div className="flex-grow border-t border-muted" />
                    <span className="text-muted-foreground text-sm">or</span>
                    <div className="flex-grow border-t border-muted" />
                </div>
                <Button variant="outline" className="w-full" type="button">
                    Sign up with Google
                </Button>
                </div>

                <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <a href="/login" className="underline underline-offset-4">
                    Login here
                </a>
                </div>
            </form>
            </CardContent>
        </Card>
        </div>
    )
}
