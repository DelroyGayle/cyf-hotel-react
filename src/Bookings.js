import React from "react";
import { useState } from "react";

import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
// Note: FakeBookings is a 'const' variable containing the relevant hotel data

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults theBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
