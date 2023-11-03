import React, { useState } from 'react';
import axios from 'axios';
import Api from '../../Auth';

function PostProduct() {
    const [product, setProduct] = useState({
        name: 'Product',
        description: 'Product description',
        price: 0,
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('image', product.image);

        try {
            const response = await Api.post('/postproducts/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                console.log('Product created successfully.');
            } else {
                console.error('Error creating the product.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" name="description" value={product.description} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <input type="file" className="form-control" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostProduct;
