import React from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from "../tourData"

export default class TourList extends React.Component {
  state = {
    tours: tourData
  }
  render() {
    const { tours } = this.state;
    console.log(tours);

    return (
      <section className="tourList">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} />
          )
        })}
      </section>
    )
  }
}