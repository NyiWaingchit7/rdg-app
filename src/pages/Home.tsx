import { Box, Typography } from "@mui/material";
import { head } from "../utils/playerCard";
import PlayerCard from "../component/PlayerCard";

const Home = () => {
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box sx={{ display: { xs: "none", lg: "block" }, mt: 5 }}>
        <Typography
          sx={{
            fontSize: "1.7rem",
            color: "secondary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          RED DRAGON E.F.C
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", sm: "35%", md: "20%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }} component="img" src="../img/bgpic.webp" />
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            bgcolor: "info.light",
            p: 2,
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              color: "primary.light",
              fontWeight: "light",
              fontSize: { xs: "0.7rem", sm: "1.2rem" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            consequuntur cum ex repudiandae voluptates nulla officia explicabo
            ab tenetur adipisci laudantium, doloribus illo illum aliquam
            ratione, harum rerum dicta maiores. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sint, beatae excepturi! Magni, optio
            laborum! Et dolorem fugit, similique voluptatum explicabo quis nam
            sapiente praesentium facere veniam laborum odio, voluptate minus.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mx: "auto", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {head.map((p) => (
            <Box
              key={p.id}
              sx={{
                width: { xs: "40%", sm: "26%", md: "28%", lg: "20%" },

                m: 2,
              }}
            >
              <PlayerCard id={p.id} name={p.name} img={p.img} role={p.role} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
