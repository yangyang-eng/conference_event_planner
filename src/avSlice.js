import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice(
    {
  name: "av",

  //Initialize the initialState array variable with objects to provide a data structure
  initialState: [    
    {
        img: "https://pixabay.com/images/download/business-20031_640.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

    
  ],


  reducers: {

    //This fucntion take 2 param state and action 
    incrementAvQuantity: (state, action) => {

        //Action.payload include index to identify the item to increment
          const item = state[action.payload];
          //If intem exist, it increment qty by 1
            if (item) {
                item.quantity++
            }
      },
      
    decrementAvQuantity: (state, action) => {
        //Action.payload include index to identify the item to decrement
        const item = state[action.payload];
        //If intem exist, it decrement qty by 1
          if (item & item.quantity>0) {
              item.quantity--
      }
    },
},
});

//Export all reducer functions and action in avslice.js
export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
