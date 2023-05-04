import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function MediaListWithButton(props) {
  const { medias, pageNum, onClickPageNum } = props;

  return (
    <ImageList
      spacing={8}
      sx={{
        gridAutoFlow: "column",

        columnGap: "8px",
      }}
    >
      {pageNum != 1 ? (
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={() => onClickPageNum("prev")}
        >
          <ArrowBackIosIcon sx={{ width: 60, height: 120, color: "#66fcf1" }} />
        </IconButton>
      ) : (
        <></>
      )}
      {medias.map((media) => (
        <Link key={media.id} href="/about" style={{ textDecoration: "none" }}>
          <ImageListItem sx={{ width: 200 }}>
            <Image
              alt=""
              src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
              width={200}
              height={300}
            />
            <Typography
              paragraph
              variant="h5"
              textAlign="center"
              sx={{ m: 1, color: "yellowgreen" }}
            >
              <span>
                <StarsIcon className="icon" />
                {media.vote_average.toFixed(1)}
              </span>
            </Typography>
            <ImageListItemBar
              style={{ color: "#c5c6c7" }}
              title={
                <>
                  <Typography
                    variant="h5"
                    style={{
                      display: "block",
                      whiteSpace: "pre-line",
                    }}
                    textAlign="center"
                  >
                    {media.title || media.name}
                  </Typography>
                  <Typography
                    variant="h7"
                    style={{
                      display: "block",
                      whiteSpace: "pre-line",
                      fontStyle: "italic",
                    }}
                    textAlign="center"
                  >
                    {media.release_date}
                  </Typography>
                </>
              }
              position="below"
            />
          </ImageListItem>
        </Link>
      ))}
      {pageNum <= 26 ? (
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={() => onClickPageNum("next")}
        >
          <ArrowForwardIosIcon
            sx={{ width: 60, height: 120, color: "#66fcf1" }}
          />
        </IconButton>
      ) : (
        <></>
      )}
    </ImageList>
  );
}
