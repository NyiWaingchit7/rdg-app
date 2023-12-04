import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Main, players } from "../utils/playerCard";
import { bgimg } from "../utils/playerCard";
import { head } from "../utils/playerCard";
import { useEffect, useState } from "react";

interface prop {
  headId?: number;
}

const PlayerDetail = ({ headId }: prop) => {
  const [data, setData] = useState<Main>();
  const id = useParams().id;

  useEffect(() => {
    const maindata = headId
      ? head.find((d) => d.id === headId)
      : players.find((d) => d.id === Number(id));
    setData(maindata);
  }, []);
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
            Name
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
            Age
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
            {data.age}
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
          {headId ? (
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              Role
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, width: "100%" }}
            >
              Shirt Number
            </Typography>
          )}
          <Typography> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
              m: 2,
            }}
          >
            {headId ? data.role : data.shirtNumber}
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
            City
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
            Date of Birth
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
