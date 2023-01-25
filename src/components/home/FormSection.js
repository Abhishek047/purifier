import { Button, Grid, Paper, Stack, styled, TextField, Typography } from "@mui/material";
import sideImage from "../../assets/images/contact.svg";
import { useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

const FormContainer = styled(Paper)(({ theme }) => ({
    padding: 24,
}));
const ImageContainer = styled(Grid)(({ theme }) => ({
    marginLeft: 32,
}));
export const FormSection = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState("");

    return (
        <Grid container>
            <Grid item xs={12} sm={7}>
                <FormContainer>
                    <Stack spacing={2}>
                        <TextField
                            size='small'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            label='Name'
                            variant='outlined'
                        />
                        <TextField
                            size='small'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                            type='tel'
                            label='Number'
                            variant='outlined'
                        />
                        <TextField
                            size='small'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                            multiline
                            rows={5}
                            label='Full address'
                            variant='outlined'
                        />
                        <Button variant='contained' endIcon={<CallMadeIcon />}>
                            Send
                        </Button>
                    </Stack>
                </FormContainer>
            </Grid>
            <Grid item xs={12} sm={5}>
                <ImageContainer>
                    <Stack>
                        <Typography
                            variant='h3'
                            gutterBottom
                            sx={{
                                color: "#FFF",
                                fontWeight: 700,
                            }}>
                            Get in touch
                        </Typography>
                        <img src={sideImage} alt='contact' width={"100%"} height='auto' />
                    </Stack>
                </ImageContainer>
            </Grid>
        </Grid>
    );
};
