import React, {Component} from 'react';

import Header from './HeaderComponent'
import Blog from './BlogComponent';
import Footer from './FooterComponent';
import {Data} from './Data';
import SideMenu from './SideMenuComponent';
// import { Switch, Route, withRouter} from 'react-router-dom'; 


    
class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            blogdata : Data
        }
    }
    render(){
        return(
            // Import everything here
            // Considering this was to be made a static web page 
            // Not using React router to switch pages
            // Font color and size can be changed in the App.css
            // Made By Harsh Verma, for Whitepanda
            <div className="big-container" >
                <SideMenu/>
                <div className = 'container ml-0'>
                    <Header/>
                    <div className = 'container '>
                        <div className = 'row'>
                            {
                                Data.map( blogData => {
                                    return(
                                    <div className = 'col-md-4 sm-1'>
                                        <Blog name={blogData.name} desc={blogData.desc}
                                         price={blogData.price} img_path = {blogData.img_path}  />
                                    </div>
                                    )
                                } )
                            }
                        </div>                    
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }

}

export default Main;