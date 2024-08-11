"use client"
import { useState } from "react";
import DatePicker from "./components/DatePicker";

export default function Home() {

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  
  console.log(date);

  return (
     <div className="w-full min-h-screen h-full flex justify-center items-center">
        <DatePicker 
          selectedDate={date}
          onDateChange={handleDateChange}
        />
      </div>
  );
}
