import { Box, Typography } from "@mui/material";
import { players } from "../utils/playerCard";
import { Link } from "react-router-dom";
import { url } from "inspector";

const Player = () => {
  const bgimg = "../pic.jpg";
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
            sx={{
              width: { xs: "40%", sm: "26%", md: "28%", lg: "22%" },
              m: 2,
            }}
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <Box sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="2.png"
                  sx={{
                    width: "100%",
                    objectFit: "contain",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundImage: `url(${bgimg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
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
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {p.id}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {p.name}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Player;
