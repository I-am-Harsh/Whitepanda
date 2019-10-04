import React from 'react';
import {Button} from 'reactstrap';
// import Image from 'reactstrap/Image';


const Blog = (props) =>{

    // var disp = this.props;
    var price = props.price;
    var description = props.desc;
    var name = props.name;
    var img_path = props.img_path;
    return( 
        <div className = 'container mt-50 ml-4' key = {props.img_path}>
            <div className = 'row'>
                <img src = {img_path} alt = 'icon' height = "50px" width = '50px' className='mr-3 mb-0' style = {{borderRadius:50}}></img>
                <p className = 'pr- 5'>
                { name }                
                <br></br>
                from { price }</p> 
            </div>
            <div className = 'row row-content mt-3 grey'>
                {description}
            </div>  
            <div className = 'row mt-3'>
                <Button  outline color = 'success' className = 'button'>
                    Order
                </Button>
            </div>
        </div>
    );
}

export default Blog;
