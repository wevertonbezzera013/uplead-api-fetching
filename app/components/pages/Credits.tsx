'use client'

import { Endpoint } from '@/app/api/Endpoint'
import useCredits from '@/app/api/hooks/useCredits'

import React from 'react'

const CreditsComponent = () => {
  const { credits, error } = useCredits(Endpoint.credits)

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!credits) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Credits Remaining</h1>
      <p className="text-lg">{credits.credits}</p>
      <p>{credits.email}</p>
    </div>
  )
}

export default CreditsComponent
