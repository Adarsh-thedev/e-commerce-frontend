import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const AddProduct = () => {

    const [values, setValues] = useState({
        name : '',
        description : '',
        price : '',
        stock : ''
    });

    const {name, description, price, stock} = values;

    const handleChange = name => event => {
        //
    }

    const onSubmit = () => {}

    const goBack = () => (
        <div className = 'mt3'>
            <Link 
                className = 'btn btn-sm mt3 br-pill dim bg-pink white b' 
                to = '/admin/dashboard'
            >
                Admin Home
            </Link>
        </div>
    );

    const createProductForm = () => (
        <form className = 'measure center ma3'>
          <span>Post photo</span>
          <div className="form-group">
            <label className="hover-bg-black hover-white btn btn-block bg2 b--black br2 dim">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100 br2"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100 br2"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100 br2"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100 br2"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100 br2"
              placeholder="Quantity"
              value={stock}
            />
          </div>
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn bg1 dim mb-3 br2 w-100"
          >
            Create Product
          </button>
        </form>
    );

    return(
        <Base 
            title = 'Add a Product Here' 
            description = 'Welcome to product creation section'
            className = 'container'
        >
            <div className = 'col col-md-8 offset-md-2 bg3 br2 shadow-3'>
                {goBack()}
                {createProductForm()}
            </div>
        </Base>
    );
}

export default AddProduct;