import { useState } from "react";
import { Typography, ImageList, ImageListItem, Modal, useMediaQuery } from '@mui/material';

const Gallery = ({ photoList }) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  const [showModal, setShowModal] = useState({ id: null, show: false })
  const handleOpenModal = (photoId) => setShowModal({ id: photoId, show: true });
  const handleCloseModal = () => setShowModal({ show: false });

  return (
    <div className="gallery">

      {photoList.length ? (
        <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
          {photoList.map((item, index) => (
            <ImageListItem key={item.id} onClick={() => handleOpenModal(index)}>
              <img src={item.urls.small} alt={item.description} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Typography variant="h6" sx={{ color: 'red', m: '98px 0' }}>No Photo found!</Typography>
      )}

      <Modal open={showModal.show} onClose={handleCloseModal} aria-labelledby="lightbox">
        <div className="modalContent" >
          <img src={Number.isInteger(showModal.id) ? photoList[showModal.id].urls.regular : ''} alt='' />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
