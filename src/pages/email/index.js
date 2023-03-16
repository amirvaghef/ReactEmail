import { Button, Grid } from "@mui/material";
import React, { useRef } from "react";
import Input from "../../components/input";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("send mail");
          console.log(result);
        },
        (error) => {
          console.log("Mail problem", error);
        }
      );
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Grid container spacing={2} dir="ltr" justifyContent="flex-start">
        <Grid item xs={10}>
          <Input
            label="to"
            name="user_email"
            type="email"
            fullWidth
            required={true}
          />
        </Grid>
        <Grid item xs={10}>
          <Input label="subject" fullWidth name="user_name" />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="content"
            name="message"
            fullWidth
            required
            multiline
            rows={8}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Send Mail
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Email;
