import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import PlayerDetail from "./PlayerDetail";

const HeadDetail = () => {
  const id = useParams().id;
  return (
    <Box>
      <PlayerDetail headId={Number(id)} />
    </Box>
  );
};
export default HeadDetail;
