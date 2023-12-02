import { Box, Typography } from "@mui/material";
import { players } from "../utils/playerCard";

const Player = () => {
  return (
    <Box>
      {players.map((p) => (
        <Typography>{p.name}</Typography>
      ))}
    </Box>
  );
};
export default Player;
