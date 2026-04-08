import { createHash, randomBytes } from 'crypto';

/**
 * Hashes a plaintext password using SHA-256 with a random salt.
 * Returns a string in the format 'salt:hash'.
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256').update(salt + password).digest('hex');
  return salt + ':' + hash;
}

/**
 * Verifies a plaintext password against a stored hash string.
 * Timing-safe comparison is not used here — see verifyPasswordSafe for production use.
 */
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const candidate = createHash('sha256').update(salt + password).digest('hex');
  return candidate === hash;
}
