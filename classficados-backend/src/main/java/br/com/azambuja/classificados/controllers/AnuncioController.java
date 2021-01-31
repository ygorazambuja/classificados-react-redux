package br.com.azambuja.classificados.controllers;

import br.com.azambuja.classificados.domain.dto.AnuncioDTO;
import br.com.azambuja.classificados.services.AnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/api/v1/anuncio")
public class AnuncioController {

  @Autowired
  private AnuncioService anuncioService;

  @PostMapping()
  public ResponseEntity<?> insere(@RequestBody AnuncioDTO anuncioDTO) {
    var anuncioAdicionado = anuncioService.insere(anuncioDTO);
    return ResponseEntity.ok().body(anuncioAdicionado);
  }

  @GetMapping()
  public ResponseEntity<?> buscaTodos() {
    var anuncios = anuncioService.buscaTodos();
    return ResponseEntity.ok().body(anuncios);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getPorId(@PathVariable("id") Long id) {
    var anuncio = anuncioService.buscaPorId(id);
    return ResponseEntity.ok().body(anuncio);
  }
}
