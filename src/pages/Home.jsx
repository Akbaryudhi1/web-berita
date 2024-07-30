import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Card from "../components/Card";
const api = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e9b42b817f034ce8930a83883566d9db&pageSize=12";
const Home = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(api);
      const hasil = await data.json();
      setData(hasil);
    };
    getData();
  }, []);
  console.log(data, "test====");
  const submit = async (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    const data = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=e9b42b817f034ce8930a83883566d9db&pageSize=12`);
    const hasil = await data.json();
    setData(hasil);
  };
  return (
    <div>
      <Navbar />
      <div className="bg-black justify-center items-center">
        <Input onSubmit={submit} />
      </div>
      <div className="flex grid grid-cols-3 gap-4 p-5">
        {data &&
          data.articles.map((item, index) => {
            return (
              <div key={index}>
                <Card img={item.urlToImage} title={item.title} description={item.description} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
