import { createSlice } from "@reduxjs/toolkit";

const KEY_LOCAL = "restaurent_redux"

const initState = localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL]) : { 
    restaurant_Ar : [
        {
            city: "rehovot",
            cuisine: "italy",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601861,
            main_image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "pizza reuven",
            price: "33"
        },
        {
            city: "rehovot",
            cuisine: "italy",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601862,
            main_image: "https://images.pexels.com/photos/5593192/pexels-photo-5593192.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "pizza toti",
            price: "47"
        },
        {
            city: "rehovot",
            cuisine: "italy",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601863,
            main_image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "pizza moshe",
            price: "70"
        },
        {
            city: "ashkelon",
            cuisine: "franch",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601864,
            main_image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "sushi ashkelon",
            price: "67"
        },
        {
            city: "ashkelon",
            cuisine: "arabic",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601865,
            main_image: "https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "gril swit",
            price: "55"
        },
        {
            city: "ashkelon",
            cuisine: "arabic",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601866,
            main_image: "https://images.pexels.com/photos/9720292/pexels-photo-9720292.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "shawarma & gril",
            price: "88"
        },
        {
            city: "rehovot",
            cuisine: "japan",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601867,
            main_image: "https://images.pexels.com/photos/9980764/pexels-photo-9980764.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "sushi oshi",
            price: "88"
        },
        {
            city: "rehovot",
            cuisine: "japany"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601868,
            main_image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "sushi japanika",
            price: "90"
        },
        {
            city: "rehovot"
            ,cuisine: "span"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 1681674601869
            ,main_image: "https://images.pexels.com/photos/4427655/pexels-photo-4427655.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "shawarma yony",
            price: "40"
        },
        {
            city: "tel aviv"
            ,cuisine: "USA"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 16816746018610
            ,main_image: "https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=",
            name: "hamburger wow",
            price: "55"
        },
        {
            city: "tel aviv"
            ,cuisine: "italky"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 16816746018611
            ,main_image: "https://images.pexels.com/photos/2260555/pexels-photo-2260555.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "pizza hat",
            price: "65"
        },
        {
            city: "tel aviv"
            ,cuisine: "italky"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 16816746018612
            ,main_image: "https://images.pexels.com/photos/2909821/pexels-photo-2909821.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "pizza bob",
            price: "25"
        },
        {
            city: "tel aviv"
            ,cuisine: "japan"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 16816746018613
            ,main_image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "sushi asya",
            price: "100"
        },
        {
            city: "tel aviv"
            ,cuisine: "japan"
            ,description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis adipisci rem, porro quidem cum veniam aspernatur quo provident expedita quam, nisi ipsam quod hic!",
            id: 16816746018614
            ,main_image: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "sushi somthing",
            price: "99"
        },
    ],
    filter_Ar : []

}

const restaurantSlice = createSlice({
    name : "restaurant",
    initialState : initState,
    reducers : {
        addItem : (state,acions) =>{
            state.restaurant_Ar.push(acions.payload.newItem)
            // state.filter_Ar = state.restaurant_Ar ;
            saveToLocal(state)
        },
        delItem : (state,actions) =>{
            state.restaurant_Ar = state.restaurant_Ar.filter((item) => item.id !== actions.payload.delId)
            saveToLocal(state)
        },
        seractItem : (state,actions) =>{
            state.filter_Ar = state.restaurant_Ar.filter((item) => item.city === actions.payload.searchName)
            saveToLocal(state)
        },
    }
})

const saveToLocal = (state) =>{
    localStorage.setItem(KEY_LOCAL,JSON.stringify(state))
}

export const {addItem,delItem,seractItem} = restaurantSlice.actions
export default restaurantSlice.reducer