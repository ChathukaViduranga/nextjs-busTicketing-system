"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Fetch data when the component is mounted
    axios
      .get("http://localhost:3093/api/schedule/")
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data", error);
      });
  }, []);
  return (
    <div className="w-8/12 border-[1px] mx-52 my-12">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th className="px-6 py-4">Scheduled ID</th>
            <th className="px-6 py-4">Day</th>
            <th className="px-6 py-4">Start Time</th>
            <th className="px-6 py-4">End Time</th>
            <th className="px-6 py-4"> </th>
          </tr>
        </thead>
        <tbody className="border-b dark:border-neutral-500">
          {schedules.map((schedule) => (
            <tr className="border-b dark:border-neutral-500" key={schedule._id}>
              <td className="whitespace-nowrap px-6 py-4">
                {schedule.scheduleId.slice(0, 3)}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{schedule.day}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {new Date(schedule.startTime).toLocaleTimeString()}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {new Date(schedule.endTime).toLocaleTimeString()}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-green-400 rounded-md px-4 py-1">
                  <a href="https://buy.stripe.com/test_fZe9BQ4ey5Ig6hqcMM">
                    buy ticket
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
