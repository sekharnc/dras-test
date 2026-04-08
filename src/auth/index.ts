/**
 * Auth utilities — password hashing and token generation.
 * All functions are synchronous and use Node.js built-in crypto.
 */
export { hashPassword, verifyPassword } from './hashPassword.js';
export { generateToken, generateOTP } from './generateToken.js';
