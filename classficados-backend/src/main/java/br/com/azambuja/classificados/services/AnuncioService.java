package br.com.azambuja.classificados.services;

import br.com.azambuja.classificados.domain.dto.AnuncioDTO;
import br.com.azambuja.classificados.domain.entities.Anuncio;
import br.com.azambuja.classificados.repository.AnuncioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnuncioService {
  private final AnuncioRepository anuncioRepository;
  public AnuncioService(AnuncioRepository anuncioRepository) {
    this.anuncioRepository = anuncioRepository;
  }

  public Anuncio insere(AnuncioDTO anuncioDTO) {
    Anuncio anuncio = anuncioDTO.geraAnuncio();
    return anuncioRepository.save(anuncio);
  }

  public List<Anuncio> buscaTodos() {
    return anuncioRepository.findAll();
  }
  public Anuncio buscaPorId(Long id) {
    return anuncioRepository.findById(id).orElseThrow();
  }

}
