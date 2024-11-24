<p align="center" style="font-size: 8rem;text-decoration: underline lightblue;color: lightblue">FSOTM</p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# FSOTM (Free Secure One-Time Messages)

FSOTM is a secure platform for creating encrypted messages that self-destruct after a configurable time or usage. Designed for privacy-conscious communication, FSOTM offers various encryption methods and customizable settings, ensuring messages are accessible only under your specified conditions.

## Features

- **Flexible Message Types:**
    - Send messages as plain text or upload files.
    - Files are encrypted just like text messages, ensuring full security.
- **Multiple Encryption Methods:** Choose from a variety of encryption algorithms to secure your messages.
- **Configurable Message Settings:**
    - Limit the number of readings.
    - Restrict access by IP address.
    - Set expiration times for messages.
- **Generate Links or QR Codes:** Instantly create a shareable link or QR code for your encrypted message or file.
- **Built-in Email Integration:** Send encrypted messages or files directly via email from the application.
- **Self-Destructing Messages:** Messages are stored in the database only until their expiration or usage limits are reached. After that, they are permanently deleted.

## How It Works

1. **Create a Message:** Write your message as text or upload a file. Select an encryption method for added security.
2. **Customize Settings:** Configure the message's conditions:
    - Specify the number of times it can be accessed.
    - Define allowed IP addresses for access.
    - Set the message's expiration time.
3. **Generate Secure Link:** The platform generates a unique link or QR code for your encrypted message or file.
4. **Share Securely:** Share the link or QR code via email using the built-in email functionality or through your preferred communication channel.
5. **Message Self-Destructs:** Once the specified conditions are met, the message or file is automatically deleted from the database.

## Benefits

- **Privacy-First Communication:** Messages and files are encrypted and can only be accessed under your defined rules.
- **One-Time Use:** Ideal for securely sharing sensitive text or files, as they self-destruct after use.
- **Ease of Use:** Generate secure messages or file links quickly without needing advanced technical skills.

## Use Cases

- Sharing passwords, documents, or sensitive information securely.
- Communicating confidential information with limited access.
- Ensuring time-bound access to critical data or files.
