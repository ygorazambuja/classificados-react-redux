import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {IAnuncioDto} from "../domain/dto/IAnuncioDto";

import {Slide} from "@material-ui/core";
import {TransitionProps} from "@material-ui/core/transitions/transition";
import {useDispatch} from "react-redux";
import {addAnuncioCreator} from "../store/anuncio/action";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [anuncio, setAnuncio] = React.useState<IAnuncioDto>({
        descricao: "",
        titulo: "",
    });

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onAddClick = async () => {
        dispatch(addAnuncioCreator(anuncio));
        handleClose();
    };

    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Novo Anuncio
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                TransitionComponent={Transition}
            >
                <DialogTitle id="form-dialog-title">
                    Adicionando novo Anuncio
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para adicionar um anuncio, preencha os campos abaixo
                    </DialogContentText>
                    <TextField
                        onChange={({target}) => {
                            setAnuncio({...anuncio, titulo: target.value});
                        }}
                        margin="dense"
                        id="text"
                        label="Titulo"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={({target}) => {
                            setAnuncio({...anuncio, descricao: target.value});
                        }}
                        margin="dense"
                        id="name"
                        label="Descrição"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Sair
                    </Button>
                    <Button onClick={onAddClick} color="primary">
                        Adicionar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
