package br.com.azambuja.classificados.domain.dto;


import br.com.azambuja.classificados.domain.entities.Anuncio;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnuncioDTO {
  public String titulo;
  public String descricao;

  public Anuncio geraAnuncio() {
    return Anuncio.builder().id(null)
            .titulo(this.titulo)
            .descricao(this.descricao)
            .dataInclusao(new Date()).build();
  }
}
