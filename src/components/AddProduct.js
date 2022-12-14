import React, { useState } from 'react'



const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const [error, setError] = useState(false)


    const addProduct = async (e) => {
        if (!name || !price || !category || !company) {
            e.preventDefault()
            setError(true)
            return false
        }


        e.preventDefault()
        const userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/addProduct', {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: { "Content-Type": "application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        })

        result = await result.json()
        console.log(result)
    }


    return (
        <>
            <h1 className='text-center my-3'>Add Your Product Now !</h1>
            <div className="container col-md-4 my-3">
                <form>

                    <div className="form-group my-2">
                        <label htmlFor="ProductName">Product Name</label>
                        <input type="ProductName" className="form-control" placeholder="Enter Product Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    {error && !name && <span style={{color:"red"}}> Enter valid Product Name</span>}
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="Price">Price</label>
                        <input type="Price" className="form-control" placeholder="Enter Product Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                    {error && !price && <span style={{color:"red"}}> Enter valid Price</span>}
                    </div>

                    
                    <div className="form-group my-2">
                        <label htmlFor="ProductCategory">Product Category</label>
                        <input type="ProductCategory" className="form-control" placeholder="Enter Product Category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    {error && !category && <span style={{color:"red"}}> Enter valid Category</span>}
                    </div>


                    <div className="form-group my-2">
                        <label htmlFor="CompanyName">Company Name</label>
                        <input type="CompanyName" className="form-control" placeholder="Enter Company Name" value={company} onChange={(e) => { setCompany(e.target.value) }} />
                    {error && !company && <span style={{color:"red"}}> Enter valid Company Name</span>}
                    </div>



                    <div className="text-center">
                        <button type="AddProduct" className="btn btn-primary my-2" onClick={addProduct} >Add Product</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct
