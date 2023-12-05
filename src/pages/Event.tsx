import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <Box>
      <Link
        to="https://web.facebook.com/permalink.php?story_fbid=pfbid0255AA9RHpdUnUrL259SRnKREAQeCtVVZ6jqUBXwt5SWodjLUESxWgHvn98uE5piNKl&id=100072030145878"
        style={{ textDecoration: "none" }}
        target="_blink"
      >
        <Box
          sx={{
            my: 5,
            mx: 2,
            borderRadius: 5,
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", lg: "30%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 2,
              bgcolor: "info.main",
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                my: 1,
                bgcolor: "info.main",
              }}
            >
              <Box
                sx={{ width: "100%", borderRadius: 5 }}
                component="img"
                src="../tournament.jpg"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}>
                Dragon Cup Season 4 is comming.To know exactly about the event.
                <Typography
                  sx={{
                    color: "success.main",
                    display: "inline",
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    fontWeight: "800",
                  }}
                >
                  Click here.
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
      <Box
        sx={{
          my: 5,
          mx: 2,
          borderRadius: 5,
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {winner.map((d) => (
            <Box
              key={d.id}
              sx={{ width: { sx: "100%", md: "50%", lg: "30%" } }}
            >
              <Link
                to={d.postLink}
                style={{
                  textDecoration: "none",
                }}
                target={d.postLink ? "_blink" : ""}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    p: 2,
                    bgcolor: "info.main",
                    borderRadius: 5,
                    m: 2,
                    color: "primary.main",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      my: 1,
                      bgcolor: "info.main",
                    }}
                  >
                    <Box
                      sx={{ width: "100%", borderRadius: 5 }}
                      component="img"
                      src={d.img}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      p: 1,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
                    >
                      Here are the Season {d.season} Winners.
                      <Typography
                        sx={{
                          color: "success.main",
                          display: "inline",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                          fontWeight: "800",
                        }}
                      >
                        Click here.
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Event;
export const winner = [
  {
    id: 1,
    season: 1,
    img: "../ss1.jpg",
    postLink:
      "https://web.facebook.com/permalink.php?story_fbid=pfbid02Ex5KmrGchPmrnhhSgTmVP7YQaYpuUKDpwxjbf5SWiBPj2pCmowSDMknCrfksowdzl&id=100072030145878",
  },
  {
    id: 2,
    season: 2,
    img: "../ss2.jpg",
    postLink:
      "https://web.facebook.com/permalink.php?story_fbid=pfbid0iDDjVJDq4epqsYXSmsL6eVNiCvPpJ7DChtL8QT3as8KiN3Xnz1ZVJfr7GxQ1W9tsl&id=100072030145878",
  },
  {
    id: 3,
    season: 3,
    img: "../ss3.jpg",
    postLink: "",
  },
];
