import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Main, players } from "../utils/playerCard";
import { Link } from "react-router-dom";
import { url } from "inspector";
import PlayerCard from "../component/PlayerCard";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Player = () => {
  const [filterPlayer, setFilterPlayer] = useState<Main[]>([]);
  const [name, setName] = useState("");
  const handleFilterPlayer = (e: any) => {
    const name = e.target.value;
    setName(name);
    const data = players.filter((p) =>
      p.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    setFilterPlayer(data);
    console.log(filterPlayer, name);
  };
  useEffect(() => {
    setFilterPlayer(players);
  }, []);
  return (
    <Box sx={{ mx: "auto", minHeight: "70vh" }}>
      <Box
        sx={{
          mx: "auto",
          my: 2,
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            mx: "auto",
          }}
        >
          <TextField
            sx={{
              width: { xs: "45%", sm: "30%", md: "20%", lg: "15%" },
              p: 1,
            }}
            size="small"
            placeholder={`Search Players.... `}
            onChange={handleFilterPlayer}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "success.main" }} />
                </InputAdornment>
              ),
            }}
          />
          {/* <Box
            sx={{
              bgcolor: "success.main",
              width: { xs: "5%", lg: "3%" },
              p: 1.2,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
            }}
            onClick={handleFilterPlayer}
          >
            <SearchIcon sx={{ fontSize: "1.5rem", color: "info.main" }} />
          </Box> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filterPlayer.length > 0 ? (
          filterPlayer.map((p) => (
            <Box
              key={p.id}
              sx={{
                width: { xs: "40%", sm: "26%", md: "28%", lg: "20%" },

                m: 2,
              }}
            >
              <PlayerCard
                id={p.id}
                name={p.name}
                img={p.img}
                shirtNumber={p.shirtNumber}
              />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              minHeight: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
              color="success.main"
            >
              There is no player with this name {`' ${name} '`}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Player;
