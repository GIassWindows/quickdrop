package com.example.quickdrop;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class QuickdropApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickdropApplication.class, args);
	}

	@GetMapping("/api/testing")
	public String test() {
		return "Hello World!";
	}
}
