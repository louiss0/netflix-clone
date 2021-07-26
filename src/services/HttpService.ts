import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig,  } from "axios";

export default class HttpService {


    private axiosInstance:AxiosInstance

    constructor(private url:string, config:AxiosRequestConfig | null = null) {


        this.axiosInstance = axios.create({
            baseURL: this.url,
            ...config
        })
        
    }

    

    private async executeRequest<T>(axiosPromise: AxiosPromise<T>) :  Promise<Error | T> {
        
        let result 
        try {
            result = await axiosPromise
            
            return result.data
        } catch (error:unknown) {
            

            const axiosError = error as AxiosError<T>
            
            
            console.table(axiosError.toJSON())
            
            
            return new Error(`${axiosError.message}`)


        }



    }


    
 
    public getAll<T, U = Record<string, unknown>>(params: U| null | null = null ) {
        
        return this.executeRequest(this.axiosInstance.get<T>(this.url,{ params }))

    } 
    
    
    public getById<T, U extends Record<string, unknown>>(
        id: string | number,
        params: U | null | null = null) {
        
        return this.executeRequest(this.axiosInstance.get<T>(`${this.url}${id}`, {params}))

    } 
    
    
    public create<T, U, H extends Record<string, unknown>>(data:U, headers: H | null = null) {
        
        return this.executeRequest(this.axiosInstance.post<T>(this.url, data, { headers }))

    } 
    
    public delete<T, H extends Record<string, unknown>>(headers:H | null) {
        
        return this.executeRequest(this.axiosInstance.delete<T>(this.url, {headers}))

    }
    
    public deleteById<T, H extends Record<string, unknown>>(id:string|number, headers:H | null= null) {
        
        return this.executeRequest(this.axiosInstance.delete<T>(`${this.url}${id}`, {headers}))

    }   
    
    
    public update<T, U extends Record<string, unknown>, H extends Record<string, unknown>>(
        params: U,
        headers: H | null
    ) {
        
        return this.executeRequest(this.axiosInstance.patch<T>(this.url, {params, headers}))

    } 
    
    public updateById<T, U extends Record<string, unknown>, H extends Record<string, unknown>>(
        id: string | number,
        params: U | null,
        headers: H | null = null
    ) {
        
        return this.executeRequest(this.axiosInstance.patch<T>(`${this.url}${id}`, {params, headers}))

    } 

    
    public updateOrCreate<T, U extends Record<string, unknown>, H extends Record<string, unknown>>(
        params: U | null,
        headers: H | null = null
    ) {
        
        return this.executeRequest(this.axiosInstance.put<T>(this.url, {params, headers}))

    }

}