import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useCallback } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  const [error, setError] = useState(null);

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=29571d4a&app_key=63d060efa6a9df1a240486514bdeb7b2`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching recipes:', error);
    }
  }, [query, setRecipes]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <TextField
      label="Wyszukaj"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};