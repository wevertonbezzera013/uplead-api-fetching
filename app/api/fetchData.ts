import axios from 'axios'

const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`https://api.uplead.com/v2/${endpoint}`, {
      headers: {
        Authorization: 'eed223709c83a72fdc01b2ea923330b3',
        'Content-Type': 'application/json',
      },
    })

    return response.data.data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default fetchData
