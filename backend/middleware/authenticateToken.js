// middleware/authenticateToken.js
import jwt from "jsonwebtoken";


export const authenticateToken = (req, res, next) => {
  const token = req.cookies.Bearer;
  
  console.log(token)
   // The token is typically included in the "Authorization" header

  if (!token) return res.status(401).send('Access denied.');
  

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = verified;
    
    next(); 
  } catch (err) {
    res.status(401).json({ authenticated: false });
  }
};


