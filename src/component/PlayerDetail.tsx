import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { players } from "../utils/playerCard";
import { bgimg } from "../utils/playerCard";

const PlayerDetail = () => {
  const id = useParams().id;
  const data = players.find((d) => d.id === Number(id));
  if (!data) return null;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        my: 10,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "70%", sm: "30%", md: "25%", lg: "20%" },
          height: { sm: 320, lg: 500 },
          bgcolor: "primary.main",
          borderRadius: 5,
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={`../${data.img}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundImage: `url(../${bgimg})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "50%" },
          height: { sm: 320, lg: 500 },
          bgcolor: "success.main",
          mx: 2,
          color: "info.light",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
          >
            Name{" "}
          </Typography>
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {data.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
          >
            Shirt Number{" "}
          </Typography>
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {data.shirtNumber}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
          >
            City{" "}
          </Typography>
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {data.city}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
          >
            Birthday{" "}
          </Typography>
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {data.birthDate}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
          >
            Join Date{" "}
          </Typography>
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {data.joinDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default PlayerDetail;
