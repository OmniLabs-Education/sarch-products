import { Router } from 'express';
import { FindProductsController } from '../controllers/FindProducts';

const router = Router();

const searchProduct = new FindProductsController();

router.get('/search', searchProduct.handle)

export { router };