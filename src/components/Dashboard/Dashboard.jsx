import { useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import CardMovie from "../../common/CardMovie";
import endpoints from "../../services/api";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import SearchIcon from "@mui/icons-material/Search";

const Dashboard = () => {
  const searchInput = useRef(null);
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
      e.preventDefault();
    setSearch(searchInput.current.value);
  };


  const movies = useFetch(endpoints.movies.getMovies(search ? search?.trim() : "inception"));

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginBottom: 4  }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <Input
          id="input-with-sx"
          label="With sx"
          variant="standard"
          placeholder="Search movie..."
          color="secondary"
          defaultValue="Inception"
          inputRef={searchInput}
          sx={{mr: 2}}
        />
        <Button onClick={handleSearch} type="submit" variant="contained" color="secondary">
          Search
        </Button>
      </Box>

        {movies?.data.Response === "False" ?
        <Alert severity="error">{movies?.data.Error}</Alert>  :
        <CardMovie movies={movies} />
    }
     
    </>
  );
};

export default Dashboard;
