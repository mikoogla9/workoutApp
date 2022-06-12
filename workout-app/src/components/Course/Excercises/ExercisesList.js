import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter";
import "./course.css";

function ExercisesList() {
  const buttonContent = "Change";
  const exercises = [
    {
      exName: "Pullups",
      exDate: new Date(2022, 6, 6),
      exData: "5 | 5 | 4 | 2",
      exInfo: buttonContent,
    },
    {
      exName: "Bench press",
      exDate: new Date(2022, 4, 23),
      exData: "40x10 | 40x8 | 40x6 | 40x5",
      exInfo: buttonContent,
    },
    {
      exName: "Barebells",
      exDate: new Date(2022, 5, 11),
      exData: "10x10 | 10x10 | 10x10 | 10x10",
      exInfo: buttonContent,
    },
    {
      exName: "Plank",
      exDate: new Date(2022, 5, 12),
      exData: "1min | 1min | 1min",
      exInfo: buttonContent,
    },
    {
      exName: "Pushups",
      exDate: new Date(2022, 6, 6),
      exData: "15 | 12 | 9 | 8",
      exInfo: buttonContent,
    },
  ];

  let exNames = exercises.map((a) => a.exName);

  let exList = [];
  for (let index = 0; index < exercises.length; index++) {
    exList.push(<Exercise data={exercises[index]}></Exercise>);
  }

  let userFilter = "";
  const filterChoice = (filter) => {
    console.log("Tutaj są przekazane dane: " + filter);
    userFilter = filter;
  };

  return (
    <div>
      <Filter Names={exNames} onFilterChoice={filterChoice} />
      {exList}
      <button
        onClick={() => {
          console.log("User filter: " + userFilter.toString());
        }}
      >
        Sprawdz
      </button>
    </div>
  );
}

export default ExercisesList;
