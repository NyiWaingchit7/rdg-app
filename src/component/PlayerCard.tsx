import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { bgimg } from "../utils/playerCard";
interface prop {
  id: number;
  name: string;
  img: string;
  shirtNumber: number;
}

const PlayerCard = ({ id, name, img, shirtNumber }: prop) => {
  return (
    <Link to={`${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "125px",
            sm: "150px",
            md: "200px",
            lg: "250px",
          },
          bgcolor: "primary.main",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Box
          component="img"
          src={`../${img}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundImage: `url(${bgimg})`,
            backgroundPosition: "center",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.main",
          width: "100%",
          bgcolor: "info.main",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", sm: "1rem" },
            fontWeight: 800,
            my: 1,
          }}
        >
          {shirtNumber}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", sm: "1rem" },
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};
export default PlayerCard;
