"use client"

import { Link } from 'next/link';
import { useState, useEffect } from 'react'

export default function ErrorComponent() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
            <p className="text-gray-500 mt-2">The page you are looking for does not exist or has been moved.</p>
          </div>
          <div className="mt-8">
            <div className="relative">
              <div className="h-2 bg-blue-100 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(countdown / 10) * 100}%` }}
                ></div>
              </div>
              <div className="absolute top-4 left-0 right-0 text-center">
                <p className="text-sm text-gray-500">
                  Redirecting to home in {countdown} seconds...
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold text-sm transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Go back to homepage
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 p-4">
          <p className="text-center text-sm text-gray-500">
            If you think this is a mistake, please <a href="/contact" className="text-blue-500 hover:underline">contact support</a>.
          </p>
        </div>
      </div>
    </div>
  )
}