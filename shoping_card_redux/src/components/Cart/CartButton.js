import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice';



const CartButton = (props) => {
const dispatch = useDispatch()
const cartCuantity = useSelector(state => state.cart.totalQuantity)

const toggleCartHandle = ()=> {
  dispatch(uiActions.toggle())
}

  return (
    <button className={classes.button} onClick={toggleCartHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCuantity}</span>
    </button>
  );
};

export default CartButton;
