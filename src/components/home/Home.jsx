import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Video } from "../video/Video";
import "./home.css";

export const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("hello");

  if (search == 0) {
    setSearch("hello");
  }

  const getData = async () => {
    await fetch(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=12`,

      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.results);
      });
  };
  let timerId;
  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      getData();
    }, 1000);
  }, [search]);

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="HomeWrapper  max-w-9xl ml-auto mt-8 ">
        <div className="homePageWrapperAllVid">
          {data.map((ele, id) => {
            return (
              <div key={id} className="homeSingleVid  shadow-2xl">
                <div className="videodiv">
                  <Video ele={ele} />
                </div>
                <div className="text-2xl font-bold text-black ">
                  {ele.heading}
                </div>
                <div className="homepageEleTags text-xl text-black ">
                  {ele.tags.map((e, id) => {
                    return <div key={id}>{e}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
