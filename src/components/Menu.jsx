import React,{useState} from 'react'
import Data from '../Data'

function Menu({cartarry,setcartarry}) {
    const [foods, setfoods] = useState(Data);

    const menuitems = [...new Set(Data.map((i)=>i.category))];

    const fitereditems = (cat)=>{ 
      const newitems =   [...new Set(Data.filter(item=>item.category==cat))]  
      setfoods(newitems)      
    }

    const addcart = (x)=>{
        setcartarry([...cartarry,x])
    }
    

    // const addcart = (cartitem)=>{
    //     setcartarry([...cartarry,cartitem])
    //     console.log(cartarry);
        
    // }
    const removecart = (cartitem)=>{
        setcartarry(cartarry.filter((c)=>c.id !== cartitem ))
    }
    
  return (
    <div className ='container-fluid main '>
        <div className="container d-flex justify-content-center mt-5">
            <div className="btn-group " role="group" aria-label="Basic outlined example">
                {menuitems.map((menuitem)=>(
                    <button type="button" className="btn btn-outline-primary" onClick={()=>(fitereditems(menuitem))}>{menuitem}
                    </button>
                ))}
                <button type="button" className="btn btn-outline-primary" onClick={()=>(setfoods(Data))}>All</button>
            </div>
        </div>
           
        <div className ="container pt-4">
            <div className="row g-3">
            {foods.map((item)=>(
                <div className="col-12 col-md-6 col-xl-4  ">
                   <div className="card" >
                    <img src={item.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-text">${item.price}</p>
                        {cartarry.includes(item)?(
                        <button className="btn btn-danger" onClick={()=>{removecart(item.id)}}>Remove Cart</button>
                        ):(
                        <button className="btn btn-primary"  onClick={()=>{addcart(item)}}>Add Cart</button>
                        )}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Menu