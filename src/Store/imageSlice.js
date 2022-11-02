import { createSlice } from "@reduxjs/toolkit"



const initial = {
    galleryImages:[]
};


export const imageSlice = createSlice ({
    name: 'images',
    initialState: initial,
    reducers: {
        append: (state, action) => {
            console.log(action.payload)
            return{
                ...state, galleryImages:[
                    ...state.galleryImages, action.payload
                ]
        
            }            
        },
        initializeGallery: (state, action) => {
            state.galleryImages= action.payload
        }
    }
})

export const {append,initializeGallery} = imageSlice.actions

export default imageSlice.reducer;
