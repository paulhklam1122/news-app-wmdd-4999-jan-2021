import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/apiConfig'

export const getArticles = async source => {
  const url = BASE_URL
  try {
    const response = await axios.get(url, {
      params: {
        sources: source,
        apiKey: API_KEY
      }
    })
    const articles = response.data.articles
    return articles
  } catch (error) {
    throw error
  }
}
