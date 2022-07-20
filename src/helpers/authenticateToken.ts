import {Request, Response, NextFunction} from 'express';
import {Secret, verify} from 'jsonwebtoken';

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({message: 'Missing token'});
  }

  verify(token as string, process.env.SECRET_TOKEN as Secret, error => {
    console.log(error);
    if (error) return res.status(403).json({message: 'Invalid token'});

    next();
  });
}
