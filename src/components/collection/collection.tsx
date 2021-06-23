import React, { useEffect, useState } from "react";
import axios from "axios";
import collection from "./collection.module.scss";
const Collection: React.FC = () => {
  const [collections, setCollections]: any = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=5abdb59bf977f2149b712eb54ce5c3cd&user_id=193264431%40N02&format=json&nojsoncallback=1`
      )
      .then((res) => {
        return setCollections(res.data.photosets.photoset);
      });
  }, []);

  if (collections == null) {
    return <div></div>;
  }
  return (
    <section>
      <div className={collection.cards}>
        {collections &&
          collections.map((e: any, index: any) => (
            <div key={index} className={collection.carditem}>
              <div className={collection.card}>
              <div className={collection.img}>
                <img
                  // src={`https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`}
                  src={`https://farm${e.farm}.staticflickr.com/${e.server}/${e.id}_${e.secret}.jpg`}
                  alt=""
                />
              </div>
              <div className={collection.cardcontent}>
              <div className={collection.header}>
                {e.title._content}
              </div>
              
                <p className={collection.main}>{e.description._content}</p>
              
              
                <button className={collection.btn}>
                  Explore <span> &#8594; </span>
                </button>
              
              </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default Collection;
