import React, { useState } from "react";
import atown from "../images/atcc2.png";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from "../features/products/productSlice";


const ProductAdd = () => {
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")

    const dispatch = useDispatch()

    const handleAdd = () => {

        const newProduct = {
            category: category,
            title: title,
            description: description,
            price: price,
            img: img
        }

        dispatch(createProduct(newProduct))
        console.log(newProduct)
        setCategory('')
        setTitle('')
        setDescription('')
        setPrice(0)

    }

    return (
        <>

            <div className="addProduct">


                <br />
                <label htmlFor="catName">Category</label>
                <input value={category} type="text" id="catName" className="billInput" placeholder="category name here"
                    onChange={(e) => setCategory(e.target.value)} required />

                <label htmlFor="title">Title</label>
                <input value={title} type="text" id="title" className="billInput" placeholder="title here"
                    onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="description">Description</label>
                <input value={description} type="text" id="description" className="billInput" placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)} required />

                <label htmlFor="price">Price $</label>
                <input value={price} type="number" id="price" className="billInput" placeholder="10.00"
                    onChange={(e) => setPrice(e.target.value)} required />

                <label htmlFor="image">Image</label>
                <input value={img} type="file" id="image" className="billInput"
                    onChange={(e) => setImg(e.target.value)} required />

                <button onClick={(e) => handleAdd(e)}>Add Product</button>

            </div>

        </>
    )
}

export default ProductAdd