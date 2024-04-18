import { useNavigate } from 'react-router-dom';
import Recipes from '../../components/recipe/Recipes'
import Search from '../../components/search/Search'
import { useUserContext } from '../../context/UserContextProvider'

const Home = () => {
  const {user} = useUserContext();
  const navigate= useNavigate();

  if(!user){
    navigate('/login');
  }
  return (
    <>
      <Search />
      <Recipes/>
    </>
  )
}

export default Home
