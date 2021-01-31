import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";

import CardItem from "../components/CardItem";
import { connect, useDispatch, useSelector } from "react-redux";
import { IAnuncio } from "../domain/entities/IAnuncio";
import { ApplicationState } from "../store";
import { getAnunciosActionCreator } from "../store/anuncio/action";

interface GridListProps {}

const GridList: React.FC<GridListProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnunciosActionCreator());
  }, [0]);

  const anuncios: IAnuncio[] = useSelector(
    (state: ApplicationState) => state.anuncios.anuncios
  );

  const loading: boolean = useSelector(
    (state: ApplicationState) => state.anuncios.loading
  );

  return (
    <Container style={{ paddingTop: "20px" }}>
      <Grid container spacing={1}>
        {anuncios &&
          anuncios.map((item) => (
            <Grid item key={item.id} xs sm={4}>
              <CardItem anuncio={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default connect(null, null)(GridList);
