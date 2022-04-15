import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Gallery = ({ photos, term }) => {
  return (
    <>
      <Typography variant="h5" component="h2" mb={3} textTransform="capitalize" sx={{ opacity: .8 }}>
        {term}
      </Typography>

      <ImageList variant="quilted" cols={4} rowHeight={121}>
        {photos.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Gallery;
