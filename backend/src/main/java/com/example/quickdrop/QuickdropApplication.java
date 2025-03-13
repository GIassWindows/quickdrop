package com.example.quickdrop;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class QuickdropApplication {

	private final S3Client s3Client;
	private final String bucketName;

	public QuickdropApplication(S3Client s3Client,
								@Value("${aws.s3.bucket.name}") String bucketName) {
		this.s3Client = s3Client;
		this.bucketName = bucketName;
	}

	@PostMapping("/api/upload")
	public ResponseEntity<String> uploadFiles(@RequestParam("files") MultipartFile[] files) {
		try {
			for (MultipartFile file : files) {
				String fileName = file.getOriginalFilename();
				uploadToS3(fileName, file.getBytes());
			}

			String message = files.length > 1 ?
					"Uploaded " + files.length + " files successfully!" :
					"Uploaded 1 file successfully!";

			return ResponseEntity.ok(message);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Upload failed: " + e.getMessage());
		}
	}

	private void uploadToS3(String fileName, byte[] fileContent) {
		s3Client.putObject(
				PutObjectRequest.builder()
						.bucket(bucketName)
						.key(fileName)
						.build(),
				RequestBody.fromBytes(fileContent)
		);
	}

	public static void main(String[] args) {
		SpringApplication.run(QuickdropApplication.class, args);
	}
}