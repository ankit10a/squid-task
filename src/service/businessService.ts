import { prismaClient } from "../app";


class Businesses_Service {
    public static instance: Businesses_Service;

    private constructor() {}
    public static getInstance() {
      if (!Businesses_Service.instance) {
        Businesses_Service.instance = new Businesses_Service();
      }
  
      return Businesses_Service.instance;
    }

/**
    * Returns actvity report based on query
    * @param lat
    * @param long
    * @param limit
 */
   

    public getBusinesses({lat, long, limit,type}:any){

        // console.log(lat, long, limit,type)

        let queryBuilder:string = `SELECT name, latitude, longitude, 
        (6371 * acos(cos(radians(${lat})) * 
         cos(radians(latitude)) * cos(radians(longitude) - radians(${long})) + 
         sin(radians(${lat})) * sin(radians(latitude)))) AS distance 
        FROM businesses
        ${type ? `WHERE type = '${type}'` : ''}
        ORDER BY distance
        ${limit ? `LIMIT ${limit}` : ''}
        `;

            // console.log(queryBuilder)

        return prismaClient.$queryRawUnsafe(queryBuilder)
       
    }

}

export default Businesses_Service.getInstance();