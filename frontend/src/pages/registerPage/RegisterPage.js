import MainPage from "../../components/MainPage";
import "./RegisterPage.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate("/contacts");
        }
    }, [userInfo, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else {
            dispatch(register(firstName, lastName, email, password));
        }
    };

    return (
        <MainPage title="REGISTER">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && (
                    <ErrorMessage variant="danger">{message}</ErrorMessage>
                )}
                {loading && <Loading />}
                <form onSubmit={submitHandler}>
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="First Name"
                            placeholder="Enter your first name"
                            required
                            margin="normal"
                            variant="filled"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Last Name"
                            placeholder="Enter your last name"
                            required
                            margin="normal"
                            variant="filled"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Email Address"
                            placeholder="Enter your email address"
                            required
                            margin="normal"
                            variant="filled"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter your password"
                            required
                            margin="normal"
                            variant="filled"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            required
                            margin="normal"
                            variant="filled"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Box>
                    <br />
                    <Stack direction="row" spacing={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            style={{ marginLeft: "20px" }}
                        >
                            Register
                        </Button>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Button variant="outlined">Returning User?</Button>
                        </Link>
                    </Stack>
                </form>
            </div>
        </MainPage>
    );
};

export default RegisterPage;
