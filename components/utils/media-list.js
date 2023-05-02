import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function MediaList(props) {
  const { medias, flowDirection } = props;
  return (
    <ImageList
      spacing={8}
      sx={{
        gridAutoFlow: flowDirection || "column",

        columnGap: "8px",
      }}
    >
      {medias.results.map((media) => (
        <Link key={media.id} href="/about" style={{ textDecoration: "none" }}>
          <ImageListItem sx={{ maxWidth: 200 }}>
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
                  {" "}
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
    </ImageList>
  );
}
