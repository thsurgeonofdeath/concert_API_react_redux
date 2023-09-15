import React from "react";
import CartStore from "../../redux/CartStore";
import * as types from "../../redux/types";

export default function Shoppingcartitem({ event }) {
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
            onChange={(e) =>
              CartStore.dispatch({
                type: types.UPDATE,
                payload: { ...event, quantity: parseInt(e.target.value) },
              })
            }
          />
        </div>
      </td>
      <td>${event.quantity * event.price}</td>
      <td>
        <button
          className="btn btn-link"
          onClick={() =>
            CartStore.dispatch({ type: types.DELETE, payload: event })
          }
        >
          <span className="bi bi-trash-fill font-large text-dark"></span>
        </button>
      </td>
    </tr>
  );
}
