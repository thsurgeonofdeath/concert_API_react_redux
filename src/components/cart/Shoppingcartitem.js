import React from "react";
import * as cartHelper from "../../redux/CartHelper";
import { useDispatch } from "react-redux";

export default function Shoppingcartitem({ event }) {
  const dispatch = useDispatch();
  return (
    <tr className="align-middle">
      <td>
        {new Date(event.date).toLocaleString()}
        <br />
        {event.name}
        <br />
        {event.artist}
      </td>
      <td className="max-50">${event.price}</td>
      <td className="max-50">
        <div className="btn-group">
          <input
            type="number"
            className="w-auto"
            value={event.quantity}
            onChange={(e) => dispatch(cartHelper.updateCart(event.event_id))}
          />
        </div>
      </td>
      <td>${event.quantity * event.price}</td>
      <td>
        <button
          className="btn btn-link"
          onClick={() => dispatch(cartHelper.deleteCart(event.id))}
        >
          <span className="bi bi-trash-fill font-large text-dark"></span>
        </button>
      </td>
    </tr>
  );
}
