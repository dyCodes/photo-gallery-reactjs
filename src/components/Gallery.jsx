import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const Gallery = ({ photoList }) => {

  return (
    <div className="gallery">
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
        <Typography variant="h6" sx={{ color: 'red', m: '98px 0' }}>No Photo found!</Typography>
      )}
    </div>
  );
};

export default Gallery;
