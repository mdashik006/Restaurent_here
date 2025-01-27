import React, { useEffect, useState } from 'react'
function Cart({cartarry}) {
  const [total, settotal] = useState(0)

  useEffect(()=>{
    settotal(cartarry.reduce((acc,item)=> acc + parseInt(item.price) , 0 ));
  },[cartarry])

  return (
    <div className='container main '>
      <div className="row justify-content-center mt-5 g-3">
       {
        cartarry.map((item)=>(
          <div className="col-4">
                   <div className="card" >
                    <img src={item.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-text">${item.price}</p>
                    </div>
                    </div>
          </div>
        ))
       }
      </div>
      <h1 className="display3 text-center">Total Amount : ${total}</h1>
    </div>
  )
}

export default Cart