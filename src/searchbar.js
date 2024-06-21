import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useCallback } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  const [error, setError] = useState(null);

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=4d7616f0&app_key=9367ccec786955eb17f979f6ea990d4a`
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