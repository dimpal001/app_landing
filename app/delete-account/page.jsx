'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle } from 'lucide-react'

export default function DeleteAccount() {
  const [email, setEmail] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [success, setSuccess] = useState(false)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleDelete = async () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!confirmed) {
      setError('Please confirm that you want to delete your account.')
      return
    }

    setIsDeleting(true)
    setError(null)

    try {
      await fetch('/api/account/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch (err) {
      console.error('Deletion failed:', err)
    } finally {
      setSuccess(true)
      setIsDeleting(false)
    }
  }

  return (
    <div className='min-h-screen bg-[#0A0A0F] text-white font-sans'>
      <Navbar />

      <main className='container mx-auto max-w-lg px-4 py-20'>
        <div className='text-center mb-12'>
          <Badge className='bg-red-700 text-white px-3 py-1 mb-4 flex items-center justify-center mx-auto w-fit'>
            <AlertTriangle className='h-5 w-5 mr-2' /> Delete Account
          </Badge>
          <h1 className='text-3xl font-bold mb-2'>Delete Your Account</h1>
          <p className='text-white/70'>
            This action is <strong>irreversible</strong>. Please enter your
            registered email to confirm.
          </p>
        </div>

        <div className='bg-white/10 p-6 rounded-lg border border-red-600'>
          {success ? (
            <div className='text-center'>
              <p className='text-green-400 font-semibold mb-4'>
                Your account deletion request has been submitted successfully.
              </p>
              <p className='text-white/70'>
                We will process your request shortly. If this was a mistake,
                please contact our support.
              </p>
            </div>
          ) : (
            <>
              <label className='block mb-4'>
                <span className='text-white mb-1 block'>
                  Registered Email Address
                </span>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='you@example.com'
                  className='w-full px-4 py-2 rounded-md bg-[#121217] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600'
                  disabled={isDeleting}
                  autoComplete='email'
                />
              </label>

              <label className='flex items-center gap-3 mb-6 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={confirmed}
                  onChange={() => setConfirmed(!confirmed)}
                  disabled={isDeleting}
                  className='w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-red-600 checked:bg-red-600 checked:border-transparent'
                />
                <span className='text-white'>
                  I understand the consequences and want to delete my account.
                </span>
              </label>

              {error && (
                <p className='mb-4 text-red-400 font-semibold'>{error}</p>
              )}

              <button
                onClick={handleDelete}
                disabled={isDeleting || !confirmed || !isValidEmail(email)}
                className={`w-full py-3 rounded-md text-white font-semibold transition ${
                  confirmed && !isDeleting && isValidEmail(email)
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-red-600/50 cursor-not-allowed'
                }`}
              >
                {isDeleting ? 'Submitting...' : 'Submit'}
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
