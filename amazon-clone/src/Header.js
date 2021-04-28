import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header(){
    return(
        <div className="header">
            <img className ='header_logo'src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />

            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
                {/* Logo */}
            </div>
            <div className= 'header_nav'>
                <div className='header_option'>
                    <span className='header_option_lineOne'>Hello Guest</span>
                    <span className='header_option_lineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_option_lineOne'>Returns</span>
                    <span className='header_option_lineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_option_lineOne'>Your</span>
                    <span className='header_option_lineTwo'>Prime</span>
                </div>
                <div className= 'header_optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header_option_lineTwo header_basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}