import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { Credit } from '../schemas/schemas'
import fetchData from '../fetchData'

const useCredits = (endpoint: string) => {
  const [credits, setCredits] = useState<Credit | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataFromEndpoint = async () => {
      try {
        const data = await fetchData(endpoint)
        setCredits(data)
      } catch (error: any) {
        setError(error.message)
        toast.error(`Error: ${error.message}`)
      }
    }

    fetchDataFromEndpoint()
  }, [endpoint])

  return { credits, error }
}

export default useCredits
