import React from 'react';
import {Link} from 'react-router-dom';

import {Page} from '../components/Page';
import {ROUTES} from "../routes";
import {Button, Grid, Typography} from "@mui/material";

const notFoundMeta = 'Not Found';

const NotFound = () => {
    return (
        <Page description={notFoundMeta} keywords={notFoundMeta} title={notFoundMeta}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    background: "#f6f7f8"
                }}
            >
                <Typography variant="h3" mb={3}>
                    Page not found
                </Typography>
                <Typography variant="body" mb={3}>
                    The page you are looking for might have been removed had its name changed or is temporary
                    unavailable.
                </Typography>
                <Button
                    component={Link}
                    to={ROUTES.HOME}
                    variant="contained"
                    sx={{padding: "0.5rem 4rem"}}
                >
                    Go Back Home
                </Button>
            </Grid>
        </Page>
    );
};

export default NotFound;
