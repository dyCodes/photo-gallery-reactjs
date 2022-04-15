import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const Gallery = ({ photos, term }) => {
  return (
    <>
      <Typography variant="h5" component="h2" mb={3} textTransform="capitalize" sx={{ opacity: .8 }}>
        {term}
      </Typography>

      <ImageList cols={4} gap={6}>
        {photos.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.urls.regular}
              alt={item.description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Gallery;
