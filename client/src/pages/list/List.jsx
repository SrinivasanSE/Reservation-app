import "./list.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination || ""
  );
  const [date, setDate] = useState(location.state.date || "");
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [options, setOptions] = useState(location.state.options || {});
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="search">
          <h1 className="searchTitle">Search</h1>
          <div className="listItem">
            <label>Destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="listItem">
            <label>Check-in date</label>
            <span onClick={() => setIsDateOpen((prev) => !prev)}>
              {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
              {format(date[0].endDate, "MM/dd/yyyy")}
            </span>
            {isDateOpen && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />
            )}
          </div>
          <div className="listItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.rooms}
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>

        <div className="result">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  );
};

export default List;
