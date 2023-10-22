package br.edu.umfg.exerciciosAPI.controllers;

import br.edu.umfg.entitties.Client;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@RestController
@RequestMapping("/clients")
public class ClientController {
    private ArrayList<Client> list = new ArrayList<Client>();

    @PostMapping
    public ResponseEntity<Client> postClient (
            @RequestBody Client client){
        this.list.add(client);

        return ResponseEntity.ok(client);
    }

    @GetMapping
    public ResponseEntity<ArrayList<Client>> getClient(){
        return ResponseEntity.ok(this.list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(
            @PathVariable(value = "id") UUID id){
        for (Client client:
             this.list) {
            if (client.getId().equals(id)){
                return ResponseEntity.ok(client);
            }
        }
        return ResponseEntity.badRequest().body(null);
    }

}

