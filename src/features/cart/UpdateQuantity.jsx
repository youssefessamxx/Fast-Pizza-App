import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementPizzaQuantity,
  getItemQuantityById,
  incrementPizzaQuantity,
} from './cartSlice';

function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getItemQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decrementPizzaQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{itemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(incrementPizzaQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
