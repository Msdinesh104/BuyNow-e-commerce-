// FILE: backend/routes/orderRoutes.js

import express from "express";
import {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// User routes
router.post("/", authMiddleware, placeOrder);
router.get("/my", authMiddleware, getMyOrders);

// Admin routes
router.get("/", authMiddleware, adminMiddleware, getAllOrders);
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

export default router;
