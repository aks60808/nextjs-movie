import {
  Box,
  Grid,
  Switch,
  Typography,
  Pagination,
  Button,
} from "@mui/material";
import MediaListWithButton from "../utils/media-list-button";

export default function PopularMovieBar(props) {
  const { data } = props;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={10}>
            <Typography variant="h2" sx={{ padding: "1rem" }}>
              {data.sectionTitle}
            </Typography>{" "}
          </Grid>
        </Grid>
      </Box>
      <Button>fasf</Button>
      <MediaListWithButton
        medias={data.results}
        onClickPageNum={data.onClickPageNum}
        pageNum={data.pageNum}
      />
      <p>hahh</p>
      <Pagination
        count={10}
        sx={{
          "& .MuiPagination-text": { color: "white" },
        }}
      />
    </>
  );
}
