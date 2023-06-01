import {
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

export default function CreditList(props) {
  const { credit } = props;
  return (
    <>
      <ImageList
        spacing={8}
        sx={{
          gridAutoFlow: "column",

          columnGap: "8px",
        }}
      >
        {credit.map((cast) => (
          <ImageListItem key={cast.id} sx={{ maxWidth: 200 }}>
            {cast.profile_path ? (
              <Image
                alt=""
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                width={200}
                height={300}
              />
            ) : (
              <PersonIcon sx={{ width: 200, height: 300 }} />
            )}

            <Typography
              paragraph
              variant="h5"
              textAlign="center"
              sx={{ m: 1, color: "yellowgreen" }}
            ></Typography>
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
                    {cast.name}
                  </Typography>
                </>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
