import React from 'react';


const SideMenu = () => {
    return(
        <React.Fragment>
            <div className="right-thingy" style = {{marginTop:70}} >
                <div className="selected"><img src = {"./assets/grid.png"} alt = 'menu' height = "15px" width='15px'></img></div>
                <div className='side'><i className = 'fa fa-search lg'></i></div>
                <div className='side'><i className = 'fa fa-gift lg'></i></div>
            </div>
        </React.Fragment>
    );
}

export default SideMenu;