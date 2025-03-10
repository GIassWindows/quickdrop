package com.example.quickdrop;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class QuickdropApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickdropApplication.class, args);
	}

	@RequestMapping(value="/api/testing/{id}", method=GET)
	public ResponseEntity<String> test(@PathVariable String id) {
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
}
