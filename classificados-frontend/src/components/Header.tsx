import React from "react";

import {AppBar, Badge, Container, Toolbar, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AddDialog from "./AddDialog";
import {useSelector} from "react-redux";
import {ApplicationState} from "../store";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
);

export default function Header() {
    const quantidadeAnuncios: number = useSelector(
        (state: ApplicationState) => state.anuncios.anuncios.length
    );
    const classes = useStyles();
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Classificados
                </Typography>
                   <div style={{ paddingRight: '20px'}}>
                       <Badge color="error" badgeContent={quantidadeAnuncios}>
                           <Typography>
                               Anuncios
                           </Typography>
                       </Badge>
                   </div>
                <AddDialog/>
            </Toolbar>
        </AppBar>
    );
}
