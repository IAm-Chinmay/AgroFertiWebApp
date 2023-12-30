import React, { useState } from "react";

import "../../../CSS/Service/ferti.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { IoCloseSharp } from "react-icons/io5";

const FertilizerCard = (props) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        style={{
          borderRadius: "10px",
          marginTop: "3rem",
          //   marginLeft: "8rem",
          marginBottom: "2rem",
        }}
        sx={{ maxWidth: 345 }}
        onClick={handleClickOpen}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={require(`../../../Images/Ferti/${props.img}.png`)}
            alt="green iguana"
          />
          <hr />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {props.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {props.desc.slice(0, 50)}....<b>tap for more</b>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IoCloseSharp />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{props.desc}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default FertilizerCard;
