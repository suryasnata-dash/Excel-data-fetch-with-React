import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import getDummyData from "./data.service";
import {storeData} from './data.actionCreator'

export const showDetails = () => 
async (dispatch: Dispatch): Promise<void> => {
    const data = await getDummyData() as AxiosResponse;
    if(data.status === 200){
        dispatch(storeData(data.data))
    }
    else{
        console.log(data.statusText)
    }
}