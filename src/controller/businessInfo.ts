import { Response, Request} from "express";
import businessService from "../service/businessService";

class BusinessInfoController {
    public static instance: BusinessInfoController;
    private constructor() {}
    public static getInstance() {
        if (!BusinessInfoController.instance) {
        BusinessInfoController.instance = new BusinessInfoController();
        }

        return BusinessInfoController.instance;
    }

    async getBusinessInfo (req:Request,res:Response) {
        const {lat, long, limit,type} = req.query;
        try {          
            const result = await businessService.getBusinesses({lat, long, limit,type});
            console.log(result)
            res.status(200).send({
                result
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Error fetching businesses' });
        }
    }
}

export default BusinessInfoController.getInstance();