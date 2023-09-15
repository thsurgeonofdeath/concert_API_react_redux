import React from "react";
import Eventitem from "./Eventitem";
import { events } from "../../data";

export default function Eventlist() {
  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <Eventitem event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
