import { Router } from "express";
import BusinessInfoController from "../../controller/businessInfo";


const V1_router = Router();

V1_router.get("/discovery",BusinessInfoController.getBusinessInfo)


export default V1_router;
