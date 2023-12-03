import { Box, Typography } from "@mui/material";
import { players } from "../utils/playerCard";
import { Link } from "react-router-dom";
import { url } from "inspector";
import PlayerCard from "../component/PlayerCard";

const Player = () => {
  return (
    <Box sx={{ display: "flex", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {players.map((p) => (
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
        ))}
      </Box>
    </Box>
  );
};
export default Player;
