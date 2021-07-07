import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_FAVORITES } from "../../utils/actions";
import './style.css';

import FavFont from '../../public/images/favoritesFont.png'

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state);
  
  function toggleFavorites() {
    dispatch({ type: TOGGLE_FAVORITES });
  };

  if (!state.favoritesOpen) {
    return(
      <div className="cart-closed" onClick={toggleFavorites}>
        <span role="img" aria-label="trash">⭐️</span>
      </div>
    );
  }

  return (
    <div className="cart has-background-white">
      <div className="close" onClick={toggleFavorites}>[close]</div>
      <img className="favFont" src={FavFont}></img>
      {state.favorites.length ? (
      <div>
        {state.favorites.map(favorite => (
          <CartItem key={favorite._id} item={favorite} />
        ))}
          <div className="flex-row space-between">
            {/* {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to save your breweries)</span>
            } */}
          </div>
        </div>
        ) : (
          <h3>
          <span role="img" aria-label="shocked">
          👀 
          </span> 
          You don't have any favorites yet!
        </h3>
        )}
    </div>
  );
};

export default Cart;