import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'



const UpdateProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const params = useParams()
    const navigate=useNavigate()

    useEffect(() => {
        getProductDetails()
        //eslint-disable-next-line
    }, [])


    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const UpdateProduct = async (e) => {
        e.preventDefault()
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {

            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'content-Type': 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        })
       // eslint-disable-next-line
        result = await result.json()
        if(result){
            navigate('/')
        }
    }
 


    return (
        <div>
            <h1 className='text-center my-3'>Update Product ? </h1>
            <div className="container col-md-4 my-3">
                <form>

                    <div className="form-group my-2">
                        <label htmlFor="ProductName">Product Name</label>
                        <input type="ProductName" className="form-control" placeholder="Enter Product Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="Price">Price</label>
                        <input type="Price" className="form-control" placeholder="Enter Product Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                    </div>


                    <div className="form-group my-2">
                        <label htmlFor="ProductCategory">Product Category</label>
                        <input type="ProductCategory" className="form-control" placeholder="Enter Product Category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    </div>


                    <div className="form-group my-2">
                        <label htmlFor="CompanyName">Company Name</label>
                        <input type="CompanyName" className="form-control" placeholder="Enter Company Name" value={company} onChange={(e) => { setCompany(e.target.value) }} />
                    </div>



                    <div className="text-center">
                        <button type="UpdateProduct" className="btn btn-primary my-2" onClick={UpdateProduct} >Add Product</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default UpdateProduct
