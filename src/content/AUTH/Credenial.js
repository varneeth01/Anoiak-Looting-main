import { Formik, Form, ErrorMessage } from "formik";
import { Box, Button, TextField, Divider } from "@mui/material";
import * as Yup from "yup";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function CredntialLogin() {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
          recaptha: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("The email provided should be a valid email address")
            .max(255)
            .required("The email field is required"),
          password: Yup.string()
            .max(255)
            .required("The password field is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur,handleSubmit }) => {
          return (
            <Box textAlign={"center"}>
              <Form>
                <Box mt={"20px"}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                </Box>
                <Box mt={"20px"}>
                  <TextField
                    type="password"
                    label="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                    autoComplete="false"
                  />
                </Box>
                
                <Box mt={"20px"}>
                  <Button
                    endIcon={<ArrowRightAltIcon sx={{ color: "#000" }} />}
                    sx={{
                      background:
                        "linear-gradient(90deg, #A9A5FD 0%, #EBD75D 101.62%)",
                      color: "#fff",
                    }}
                  onClick={handleSubmit}
                  >
                    Login to Your Account
                  </Button>
                </Box>
                <Divider
                  sx={{
                    my: 4,
                    justifyContent: "center",
                    "&.MuiDivider-root::before": {
                      width: "71px",
                    },
                    "&.MuiDivider-root::after": {
                      width: "71px",
                    },
                  }}
                >
                  OR
                </Divider>
                <Box mt={"20px"}>
                  <Button
                    startIcon={<GoogleIcon />}
                    sx={{
                      background: "#FFF",
                      fontFamily: "Inter",
                      color: "#0C0B0B",
                      padding: "10px",
                    }}
                  >
                    Sign in with Google
                  </Button>
                </Box>
                <Box mt={"20px"}>
                  <Button
                    startIcon={<FacebookIcon />}
                    sx={{
                      background: "#FFF",
                      fontFamily: "Inter",
                      color: "#0C0B0B",
                      padding: "10px",
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    Sign in with Facebook
                  </Button>
                </Box>
              </Form>
            </Box>
          );
        }}
      </Formik>
    </>
  );
}
