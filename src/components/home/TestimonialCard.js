import { Avatar, Box, Paper, Stack, styled, Typography } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const CardContainer = styled(Paper)(({ theme }) => ({
    padding: "16px",
    boxShadow: "none",
    borderRadius: 2,
    border: "1.5px solid rgba(0,0,0,0.8)",
    position: "relative",
    fontWeight: 600,
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    content: "''",
    top: "5%",
    left: "-5%",
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    opacity: "0.4",
    zIndex: 0,
}));

const CommentBox = styled(Typography)(({ theme }) => ({
    textOverflow: "ellipsis",
    marginBottom: "16px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": "7",
    "-webkit-box-orient": "vertical",
}));

const AvatarCustom = styled(Avatar)(({ theme }) => ({
    width: 72,
    height: 72,
    boxShadow: theme.shadows[6],
}));

export const TestimonialCard = ({ name, text, image, index }) => {
    return (
        <CardContainer>
            <Overlay />
            <FormatQuoteRoundedIcon
                sx={{ transform: "rotate(180deg)", fontSize: "6em", color: "#5e5e5e" }}
            />
            <CommentBox variant='body1' sx={{ fontSize: "0.9em" }}>
                {text}
            </CommentBox>
            <Stack direction={"row"} justifyContent='flex-end' alignItems={"flex-end"} spacing={2}>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    {name}
                </Typography>
                <AvatarCustom src={image} alt={name} />
            </Stack>
        </CardContainer>
    );
};
