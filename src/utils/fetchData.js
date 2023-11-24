// Exercise API
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': 'cb5219d988msh2dcd40a3647dbd9p1156d9jsn48cd46172a1f',
        'X-RapidAPI-Host':  'exercisedb.p.rapidapi.com',
    }
       
}
// Youtube Search API 
export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': 'cb5219d988msh2dcd40a3647dbd9p1156d9jsn48cd46172a1f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

// Function for fetching / converting target into readable data
export const fetchData = async (url, options) => {
    const response = fetch(url,options)
    const data = (await response).json()
    return data
}