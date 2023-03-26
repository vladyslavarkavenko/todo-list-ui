import React from "react";

import {Box, Grid, Paper, Typography} from "@mui/material";
import {ReactComponent as LogoSVG} from "../assets/icons/logo.svg";

export const ModalLayout = ({
                         minWidth = "27.5rem",
                         minHeight = "27.5rem",
                         title,
                         subtitle = "",
                         children
                     }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                background: "#f6f7f8"
            }}
        >
            <Paper
                sx={{
                    padding: "2.1875rem 1.875rem",
                    boxShadow: "0 2px 16px 0 rgba(0, 0, 0, 0.1)",
                    minWidth,
                    minHeight,
                    display: "flex",
                    flexDirection: "column"
                }}>
                <Box mb={3}>
                    <LogoSVG/>
                </Box>
                <Box mb={3}>
                    <Typography variant="h1" component="h1">
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="h2" component="h2" mt={1}>
                            {subtitle}
                        </Typography>
                    )}
                </Box>
                <Box sx={{
                    height: "100%",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                    flex: "auto"
                }}>
                    {children}
                </Box>
            </Paper>
        </Grid>
    )
};