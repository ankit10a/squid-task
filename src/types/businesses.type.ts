
export interface IGetBusinessesParams {
    lat: number;
    long: number;
    limit?: number;
    type?: string;
  }

export interface IBusinessInfo{
        name: string,
        latitude: number,
        longitude: number,
        distance: number
}