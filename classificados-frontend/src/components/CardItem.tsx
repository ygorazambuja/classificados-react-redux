import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IAnuncio } from "../domain/entities/IAnuncio";
import React from "react";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  anuncio?: IAnuncio;
};

const CardItem: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;
  const classes = useStyles();

  const setupDataString = (): string => {
    const data = moment(restProps.anuncio?.dataInclusao);

    return `${data.daysInMonth()}/${
      data.month() + 1
    }/${data.year()} às  ${data.hour()}:${data.minute()}`;
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2">
          {restProps.anuncio?.titulo}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {setupDataString()}
        </Typography>
        <Typography variant="body2" component="p">
          {restProps.anuncio?.descricao}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
