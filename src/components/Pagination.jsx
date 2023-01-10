import { Container, Pagination as PaginationMUI } from "@mui/material";

const Pagination = ({ currentPage, totalPages, loadMore }) => {
  const handleChange = (e, page) => {
    loadMore(page);
  };

  return (
    <Container sx={{ mt: "35px", mb: "15px" }}>
      <PaginationMUI
        count={totalPages}
        color="primary"
        page={currentPage}
        onChange={handleChange}
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default Pagination;
