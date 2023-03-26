import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Button, Link as MuiLink, Grid, TextField, Typography} from "@mui/material";

import {Page} from "../components/Page";
import {ModalLayout} from "../components/ModalLayout";
import {useAuth} from "../store/auth";
import {ROUTES} from "../routes";

const loginMeta = 'Login';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {error, user, loginUser} = useAuth();
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = e.currentTarget.form.reportValidity();
        if (isValid) {
            loginUser({email, password});
        }
    }


    return (
        <Page description={loginMeta} keywords={loginMeta} title={loginMeta}>
            <ModalLayout
                minWidth="24.375rem"
                minHeight="29.4375rem"
                title="Welcome back!"
                subtitle="Log in to continue."
            >
                <form onSubmit={onSubmit} autoComplete="off">
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                    >
                        {error && (
                            <Typography color="red" sx={{marginBottom: "1rem"}}>{error}</Typography>
                        )}
                        <TextField
                            autoFocus
                            name="email"
                            placeholder="Email"
                            type="email"
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                            sx={{marginBottom: "1.875rem"}}
                        />
                        <TextField
                            name="password"
                            placeholder="Password"
                            type="password"
                            variant="standard"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            required
                            sx={{marginBottom: "1.375rem"}}
                        />
                        <MuiLink
                            component={Link}
                            to={ROUTES.SIGNUP}
                            color="inherit"
                            underline="always"
                            sx={{marginBottom: "3.25rem"}}
                        >
                            Don’t have an account? Sign up.
                        </MuiLink>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{padding: "0.5rem"}}
                            onClick={onSubmit}
                        >
                            Login
                        </Button>
                    </Grid>
                </form>
            </ModalLayout>
        </Page>
    )
};
export default Login;