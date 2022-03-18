import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ErrorMessage = ({ variant = "info", children }) => {
    return (
        <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
                <strong>{children}</strong>
            </Alert>
        </Stack>
    );
};

export default ErrorMessage;
