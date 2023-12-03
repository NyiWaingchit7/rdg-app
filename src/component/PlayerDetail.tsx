import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const PlayerDetail = () => {
  const id = useParams().id;
  return (
    <Box>
      <Typography>THis is detail page {id} </Typography>
    </Box>
  );
};
export default PlayerDetail;
