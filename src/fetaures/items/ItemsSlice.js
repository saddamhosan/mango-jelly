import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialMobile = {
  mobiles: [
    {
      id: uuidv4(),
      brandName: "nokia",
      description: "this is a very good mobile",
      RAM: "8GB",
      internalStorage: "128GB",
      screenSize: "5.6",
    },
    {
      id: uuidv4(),
      brandName: "samsung",
      description: "this is a very good mobile",
      RAM: "18GB",
      internalStorage: "256GB",
      screenSize: "6.6",
    },
  ],
};

 export const mobileSlice=createSlice({
    name:"mobile",
    initialState: initialMobile,
    reducers:{
        showMobiles:(state)=> state,
        addMobiles:(state, action)=> {
            state.mobiles.push(action.payload)
        },
        updateMobiles:(state, action)=> {
            console.log(action.payload);
            const {
              id,
              brandName,
              description,
              RAM,
              internalStorage,
              screenSize,
            } = action.payload;

           const isMobileExist= state.mobiles.filter(mobile=>mobile.id===id)
           
           if(isMobileExist){
            isMobileExist[0].brandName=brandName
            isMobileExist[0].description=description
            isMobileExist[0].RAM=RAM
            isMobileExist[0].internalStorage=internalStorage
            isMobileExist[0].screenSize=screenSize
           }
        },
        deleteMobiles:(state, action)=> {
            const id=action.payload
           state.mobiles= state.mobiles.filter(mobile=>mobile.id !== id)
        }
    },
})

export const { showMobiles, addMobiles, deleteMobiles, updateMobiles } =
  mobileSlice.actions;
export default mobileSlice.reducer