import {Secret, sign} from 'jsonwebtoken';

export function generateAccessToken(username: string): string {
  return sign({username}, process.env.SECRET_TOKEN as Secret, {
    expiresIn: 18000,
  });
}
