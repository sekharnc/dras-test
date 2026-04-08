# Auth Utilities

Lightweight auth helpers built on Node.js crypto — no dependencies.

## hashPassword / verifyPassword

Hashes passwords with a random 16-byte salt using SHA-256.
Format: `<hex-salt>:<hex-hash>`

## generateToken

Returns a cryptographically secure hex token. Default 32 bytes (64 hex chars).

## generateOTP

Returns a zero-padded numeric OTP of configurable digit length.
