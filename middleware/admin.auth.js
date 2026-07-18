export const adminProtect = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only",
      });
    }

    next();
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Authorization failed",
    });
  }
};