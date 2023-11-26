// Import necessary dependencies from React and React Router
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// Import utility functions for fetching data
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

// Import components used in the ExerciseDetail component
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// ExerciseDetail Component  
const ExerciseDetail = () => {
  // State variables to store fetched data
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Fetch data when mounted and whenever {id} changes
  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Function to fetch data from different endpoints
    const fetchExercisesData = async () => {
      // Define API endpoints
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // Fetch exercise details based on 'id'
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // Fetch exercise videos related to the fetched exercise detail
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      // Fetch exercises targeting the same muscle as the fetched exercise
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      // Fetch exercises using the same equipment as the fetched exercise
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };

    // Call the function to fetch data
    fetchExercisesData();
  }, [id]);

  // If exercise detail is not available, show 'No Data'
  if (!exerciseDetail) return <div>No Data</div>;

  // Render the ExerciseDetail component
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      {/* Render components with fetched data */}
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

// Export the ExerciseDetail component as the default export
export default ExerciseDetail;
