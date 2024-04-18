import { createContext, useContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const useRecipeContext = ()=>{
    return useContext(RecipeContext)
}

const RecipeContextProvider = ({children})=>{
    const app_key = '650151f1ab68be181fbc7391a49c691f'
    const app_id = '62dd3dde'
    const [search, setSearch] = useState('all')
    const [recipes, setRecipes] = useState([])
    const [mealType, setMealType] = useState("breakfast")
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const api_url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${search}&mealType=${mealType}`

    const selectRecipe = (recipe)=>{
        setSelectedRecipe(recipe);
    }

    const updateSearch = (search)=>{
        setSearch(search);
    }

    const selectMealType = (mealType)=>{
        setMealType(mealType)
    }

    const fetchRecipes = async ()=>{
        const response = await fetch(api_url);
        const data= await response.json();
        setRecipes(data.hits)
    }

    useEffect(()=>{
        fetchRecipes()
    }, [])

    const values = {
        recipes,
        search,
        mealType,
        selectedRecipe,
        selectRecipe,
        selectMealType,
        updateSearch,
        fetchRecipes
    }

    return <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
}

export default RecipeContextProvider;