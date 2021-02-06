import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette:{
        primary: {
            main: "#3fa110"
        },
        secondary:{
            main: "#f012e9"
        }
    },
    overrides:{
        MuiButton:{
            root:{
                borderRadius: 0,
            },
            contained:{
                boxShadow: 'none'
            }
        }
    }
});