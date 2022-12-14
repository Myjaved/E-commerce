import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts()

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json()
        setProducts(result)
    }


    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            
        })
        result = await result.json()
        if (result) {
            getProducts()
        }

    }


    const search=async (e)=>{
        let key=e.target.value

        if(key)
        {

            let result=await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            })
            result=await result.json()
            if(result){
                setProducts(result)
            }
        }
        else{
            getProducts()
        }
    
    }

    return (
        <>
            <div className="product-list">
                <h1 className='text-center'> Product list</h1>
                <input type="text" placeholder=' Search' style={{margin:"20px",width:"400px",height:"35px",border:'2px solid grey'}} onChange={search} />
                <ul>
                    <li> S.No</li>
                    <li> Name</li>
                    <li>Price </li>
                    <li>Category</li>
                    <li>Operation</li>

                </ul>

                {
                    products.length>0 ? products.map((item, index) =>
                        <ul key={item._id}>
                            <li>{index + 1}</li>
                            <li> {item.name}</li>
                            <li>{item.price} </li>
                            <li>{item.category}</li>
                            <li>
                                <button className='mx-2' onClick={() => deleteProduct(item._id)}>delete</button>
                                <Link to={"/update/" + item._id}>Update</Link>
                            </li>

                        </ul>
                    )
                    :
                    <h3>No result Found</h3>

                }
            </div>
        </>

    )
}







export default ProductList