import { Chip, Stack } from "@mui/material";

const ButtonsTab = ({ term, getPhotos }) => {
    const catListOnclick = (e) => {
        let term = e.target.innerText;
        getPhotos(term);
    };

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{ marginTop: "20px", p: "6px", justifyContent: "center" }}
        >
            {galleryOptions.map((item) => {
                if (item.text === term) {
                    return <Chip key={item.id} label={item.text} color="primary" />;
                } else {
                    return <Chip key={item.id} label={item.text} variant="outlined" onClick={catListOnclick} />
                }
            })}
        </Stack>
    );
};

const galleryOptions = [
    { id: 0, text: "Random" },
    { id: 1, text: "Tech" },
    { id: 2, text: "Fashion" },
    { id: 3, text: "Art" },
];

export default ButtonsTab;
