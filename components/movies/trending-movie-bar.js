import { Box, Grid, Switch, Typography } from "@mui/material";
import MediaList from "../utils/media-list";
import { GreenSwitch } from "../utils/green-switch";
import { useState } from "react";
import useSWR from "swr";

export default function TrendingMovieBar(props) {
  const [isWeekly, setweekly] = useState(false);
  const { data } = props;

  function timeSwitchHandler() {
    setweekly(!isWeekly);
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={10}>
            <Typography variant="h2" sx={{ padding: "1rem" }}>
              Trending Movies
            </Typography>{" "}
          </Grid>
          <Grid component="label">
            <Grid item sx={{ mt: 2 }}>
              <Typography variant="h5">
                Day
                <GreenSwitch
                  checked={isWeekly}
                  onChange={timeSwitchHandler}
                  sx={{ m: 1 }}
                  color="primary"
                  name="trendingMovieTimeSwitch"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                Week
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <MediaList
        medias={
          isWeekly ? data.prefetchedWeekMovieData : data.prefetchedDayMovieData
        }
      />
    </>
  );
}
