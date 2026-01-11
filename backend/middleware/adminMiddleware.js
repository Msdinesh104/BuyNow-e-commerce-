// FILE: backend/middleware/adminMiddleware.js

const adminMiddleware = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Admin access denied" });
  }

  next();
};

export default adminMiddleware;
