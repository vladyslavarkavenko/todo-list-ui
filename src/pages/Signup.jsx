import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Button, Link as MuiLink, Grid, TextField, Typography} from "@mui/material";

import {Page} from "../components/Page";
import {ModalLayout} from "../components/ModalLayout";
import {useAuth} from "../store/auth";
import {ROUTES} from "../routes";

const signupMeta = 'Signup';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {error, user, signupUser} = useAuth();
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = e.currentTarget.form.reportValidity();
        if (isValid) {
            signupUser({name, email, password});
        }
    }


    return (
        <Page description={signupMeta} keywords={signupMeta} title={signupMeta}>
            <ModalLayout
                minWidth="24.375rem"
                minHeight="33.125rem"
                title="Welcome!"
                subtitle="Sign up to start using Simpledo today."
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
                            name="name"
                            placeholder="Full Name"
                            type="text"
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            required
                            sx={{marginBottom: "1.875rem"}}
                        />
                        <TextField
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
                            to={ROUTES.LOGIN}
                            color="inherit"
                            underline="always"
                            sx={{marginBottom: "3.25rem"}}
                        >
                            Do have an account? Sign in.
                        </MuiLink>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{padding: "0.5rem"}}
                            onClick={onSubmit}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </form>
            </ModalLayout>
        </Page>
    )
};
export default Signup;