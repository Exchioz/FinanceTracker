export function getPasswordStrength(password: string): {
    score: number
    label: 'Very Weak' | 'Weak' | 'Fair' | 'Medium' | 'Strong' | 'Very Strong' | ''
    color: string
    percent: number
} {
    if (!password) return { score: 0, label: '', color: '', percent: 0 }
  
    let score = 0
  
    if (password.length >= 8) score++
    if (/[a-z]/.test(password)) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
  
    const percent = (score / 5) * 100
  
    switch (score) {
      case 0:
        return { score, label: 'Very Weak', color: 'bg-red-500', percent }
      case 1:
        return { score, label: 'Weak', color: 'bg-orange-500', percent }
      case 2:
        return { score, label: 'Fair', color: 'bg-yellow-400', percent }
      case 3:
        return { score, label: 'Medium', color: 'bg-lime-400', percent }
      case 4:
        return { score, label: 'Strong', color: 'bg-green-500', percent }
      default:
        return { score, label: 'Very Strong', color: 'bg-emerald-500', percent }
    }
}
  