import React from "react";

const Input = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} className="mt-5 p-4 py-4 items-center justify-center ">
        <label className="p-4">
          <input className=" border-4 border-gray-500 p-2 w-1/2" type="text" />
        </label>
        <button type="submit" className="border-4 border-gray-500 p-2 ">
          Cari Berita
        </button>
      </form>
    </div>
  );
};

export default Input;
