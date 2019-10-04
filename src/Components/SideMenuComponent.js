import React from 'react';


const SideMenu = () => {
    return(
        <React.Fragment>
            <div className="right-thingy" style = {{marginTop:70}} >
                <div className="selected">
                    <a href = '/Whitepanda' className ='a'><img src = {"./assets/grid.png"} alt = 'menu' height = "15px" width='15px'></img></a>
                </div>
                <div className='side'>
                    <a href = '/Whitepanda'  className ='a'><i className = 'fa fa-search lg'></i></a>
                </div>
                <div className='side'>
                    <a href = '/Whitepanda'  className ='a'><i className = 'fa fa-gift lg'></i></a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideMenu;