import { Response, Request} from "express";

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
        console.log("request")
        return res.status(200).json({
            "msg":'fo'
        })
    }
}

export default BusinessInfoController.getInstance();