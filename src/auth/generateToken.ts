import { randomBytes } from 'crypto';

/**
 * Generates a cryptographically secure random session token.
 * @param byteLength - number of random bytes (default 32)
 * @returns hex-encoded token string (64 chars for default 32 bytes)
 */
export function generateToken(byteLength = 32): string {
  return randomBytes(byteLength).toString('hex');
}

/**
 * Generates a short numeric OTP of the given digit length.
 * Uses rejection sampling to avoid modulo bias.
 * @param digits - number of digits (default 6)
 */
export function generateOTP(digits = 6): string {
  const max = Math.pow(10, digits);
  const raw = randomBytes(4).readUInt32BE(0) % max;
  return String(raw).padStart(digits, '0');
}
