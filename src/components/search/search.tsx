import React, { useState, useEffect } from "react";
import search from "./search.module.scss";

import axios from "axios";
const Search: React.FC = () => {
  
  const [value, setValue]: any = useState({ text: "", response: null });
  const searchSubmit = () => {
    return axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5abdb59bf977f2149b712eb54ce5c3cd&tags=${value.text}&format=json&nojsoncallback=1`
      )
      .then((res) => {
        
        setValue({ ...value, response: res.data.photos.photo,text:"" });
      });
  };
 
  return (
    <section>
      <div className={search.search}>
        <input
          value={value.text}
          type="text"
          onChange={(e) => setValue({ ...value, text: e.target.value })}
          placeholder="Search"
        />
        <button className={search.button} onClick={() => searchSubmit()}>Search</button>
      </div>
      <div className={search.gallery}>
        {value.response &&
          value.response.map((e: any, index: any) => (
            <div key={index}>
              <img
                src={`http://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`}
                alt=""
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Search;
