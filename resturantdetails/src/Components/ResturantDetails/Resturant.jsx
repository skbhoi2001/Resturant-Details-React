import react from "react";
import data from "../assets/data.json";
import ResturantDetails from "./ResturantDetails";
import { useState } from 'react';
function Resturant(){
    const [state, setState]=useState({
        filterRating: 0,
    })
    const [payment,setPayment]=useState({
        paymentMethod:"All"
    })
    const [cost, setCost]=useState({
        sortMethod: null
    })
    const handleRating=(rating)=>{
        setState({filterRating: rating});
      }
    const handlePayment=(method)=>{
        setPayment({paymentMethod:method})
    }  
    const handleSort=(order)=>{
        setCost({sortMethod: order})
      }
      const {filterRating} = state
      //const {paymentMethod}=payment
    return(
        <div>
            <h1>RESTAURANT WEBSITE</h1>
            <div>
                Rating:{
                    [4,3,2,1,0].map((rating)=>{
                        return <button onClick={()=>handleRating(rating)}>{rating===0?"All":rating}</button>
                    })
                }
                
            </div>
            <div style={{color: "gray",fontSize: "20px", fontWeight: "500"}}>
        Cost:
        {
           ["Low To High","High To Low","unsorted"].map(order=> {
             return <button key={order} onClick={() =>handleSort(order)}>
                {order}
              </button>
            })
        }
            <div>
                Payment Metords 
               { 
                ["All","Card","Cash"].map((method)=>{
                    return <button key={method} onClick={()=>handlePayment(method)}>{method}</button>
                })
                }
            </div>
            <div>
                Details:{
                data
                .filter(item =>item.rating>filterRating)
                .filter(({payment_methods})=>{
                    const {card,cash}=payment_methods
                    let payCond = true
                    if(payment.paymentMethod==="Cash"){
                        payCond=cash?true:false
                    }
                    else{
                        payCond=card?true:false
                    }
                    return payCond
                })
                .sort((a, b) =>{
                    if (cost.sortMethod === "Low To High") {
                      return a.costForTwo - b.costForTwo;
                    }
                    if (cost.sortMethod === "High To Low") {
                      return b.costForTwo - a.costForTwo;
                    }
                    return 0;
                  })
                .map((item)=>{
                    return <ResturantDetails data={item} key={item.id}/>
                })
            }
            </div>
            </div>
        </div>
    )
}
export default Resturant;