// Exercise API configuration
export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'cb5219d988msh2dcd40a3647dbd9p1156d9jsn48cd46172a1f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};

// Youtube Search API configuration
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'cb5219d988msh2dcd40a3647dbd9p1156d9jsn48cd46172a1f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// Function to fetch data from an API using provided URL and options
export const fetchData = async (url, options) => {
  // Fetch data from the provided URL using the specified options
  const response = fetch(url, options); // Sending a GET request

  // Extract JSON data from the response
  const data = (await response).json(); // Parsing the JSON data

  return data; // Return the retrieved data
};
