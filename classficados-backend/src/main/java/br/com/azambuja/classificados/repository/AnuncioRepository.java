package br.com.azambuja.classificados.repository;

import br.com.azambuja.classificados.domain.entities.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
}
