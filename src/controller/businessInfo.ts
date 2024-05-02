import { Response, Request} from "express";
import businessService from "../service/businessService";
import { IBusinessInfo, IGetBusinessesParams } from "../types/businesses.type";

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
            if(!lat || !long){
                return res.status(400).send({
                    msg:"latitude and longitude is required"
                })
            }else if(isNaN(Number(lat)) || isNaN(Number(long))){
                return res.status(400).send({
                    msg:"latitude and longitude should be number"
                })
            }  
            const obj : IGetBusinessesParams = {
                lat:Number(lat),
                long:Number(long),
                limit:Number(limit),
                // type: type ? String(type): null
            }
            if (type && typeof type != undefined){
                obj.type = String(type)
            }
            const result : IBusinessInfo[] | unknown = await businessService.getBusinesses(obj);
            // console.log(result)
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