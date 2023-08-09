import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";
import { useState } from "react";
import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaCalendarDay,
  FaPerson,
} from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleCounter = (key, type) => {
    console.log(key, type);
    if (type === "decrease") {
      if (options[key] === 0) {
        return;
      }
      setOptions({
        ...options,
        [key]: options[key] - 1,
      });
    } else {
      console.log({
        ...options,
        [key]: options[key] + 1,
      });
      setOptions({
        ...options,
        [key]: options[key] + 1,
      });
    }
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Bookmyhotel account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FaCalendarDay className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setIsDateOpen((prev) => !prev)}
                >
                  {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
                  {format(date[0].endDate, "MM/dd/yyyy")}
                </span>
                {isDateOpen && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="datepicker"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FaPerson className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setIsOptionsOpen((prev) => !prev)}
                >
                  {`${options.adult} adult${options.adult === 1 ? "" : "s"} -
              ${options.children} children - ${options.rooms} room${
                    options.rooms === 1 ? "" : "s"
                  }`}
                </span>
                {isOptionsOpen && (
                  <div className="options">
                    {Object.keys(options).map((key) => (
                      <div className="optionItem" key={key}>
                        <span className="optionText">
                          {key.slice(0, 1).toUpperCase() + key.slice(1)}
                        </span>
                        <div className="optionCounter">
                          <button
                            disabled={options[key] <= 1}
                            className="optionCounterButton"
                            onClick={() => handleCounter(key, "decrease")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options[key]}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleCounter(key, "increase")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
