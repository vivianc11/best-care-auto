import React from "react";
import { Dropdown } from "react-bootstrap";

const storeHours = [
  { day: "Monday", hours: "9AM-6PM" },
  { day: "Tuesday", hours: "9AM-6PM" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "9AM-6PM" },
  { day: "Friday", hours: "9AM-6PM" },
  { day: "Saturday", hours: "9AM-6PM" },
  { day: "Sunday", hours: "Closed" },
];

const getCurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  return days[currentDate.getDay()];
};

const hours = () => {
  const currentDay = getCurrentDay();
  const today = storeHours.find((storeDay) => storeDay.day === currentDay);
  return today.hours;
};

const StoreHoursDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="" variant="" id="store-hours-dropdown">
        {getCurrentDay()}{' '}{hours()}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {storeHours.map((storeDay) => (
          <Dropdown.Item key={storeDay.day}>
            {storeDay.day}: {storeDay.hours}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default StoreHoursDropdown;