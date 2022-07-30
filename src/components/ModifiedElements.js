import { styled } from "@mui/material/styles";
import { Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export const FormHeading = styled(Typography)(({ theme }) => ({
    margin: 10,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: theme.palette.text.secondary,
}));

export const InputTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(3),
    textAlign: 'center',
    width: "80%",
    color: theme.palette.text.primary,
}));



export const PasswordField = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
    };
    return (
        <TextField 
            label="Password"
            variant="outlined"
            type={visible ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={toggleVisibility}>
                            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}

