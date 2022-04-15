import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const Gallery = ({ photoList, term }) => {

  return (
    <div className="gallery">
      <Typography variant="h5" component="h2" mb={3} textTransform="capitalize" sx={{ opacity: .8 }}>
        {term}
      </Typography>

      {photoList.length ? (<ImageList cols={4} gap={6}>
        {photoList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.urls.small}
              alt={item.description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      ) : (
        <Typography variant="h6" sx={{ color: 'red', m: '85px 0' }}>No Photo found!</Typography>
      )}
    </div>
  );
};

export default Gallery;
