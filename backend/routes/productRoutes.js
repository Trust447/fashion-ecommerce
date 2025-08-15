import express from 'express';
import {getProucts, getProductById} from '../controllers/productController.js';


const router = express.Router();

router.get("/", getProucts);

router.get("/:id", getProductById)

export default router;