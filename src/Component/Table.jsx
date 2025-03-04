import React from "react";

const Table = ({ i }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <table className="w-full text-sm text-gray-700">
        <thead className="text-xs uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-5 text-left">#Jobs</th>
            <th className="px-6 py-5 text-left">Customer</th>
            <th className="px-6 py-5 text-left">Amount</th>
            <th className="px-6 py-5 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="gap-6 divide-y-2 divide-transparent ">
          {i.map((item) => (
            <tr key={item.id} className="rounded-lg ">
              <td className="px-6 py-4 font-semibold">{item.jobs}</td>
              <td>
                <div className="md:flex items-center">
                  <img
                    src={item.customerImg}
                    className="h-24 w-24 rounded-full object-contain relative top-1 left-2 "
                    alt=""
                  />
                  <div className="space-y-1 text-center md:text-start md:items-start">
                    <p className="font-medium text-[16px]">
                      {item.customerName}
                    </p>
                    <p className="text-sm font-semibold">{item.customerRate}</p>
                    <div className="flex items-center md:gap-1 mt-1">
                      <img
                        src={item.locationicon}
                        className="h-3 w-3 transition-all 1s ease-in-out hover:scale-95"
                        alt=""
                      />
                      <span className="text-[8px] text-gray-600">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h1 className="text-[#00BA9D] font-semibold ml-6">
                  {item.amountstate}
                </h1>
              </td>
              <td>
                <div className="md:flex gap-2 space-y-4 md:space-y-0 items-center justify-around relative right-2">
                  <button className="bg-[#FDE210] px-2 md:px-4 py-2 font-semibold text-black rounded-lg transition-all 1s ease-in-out hover:scale-95">
                    Shipped
                  </button>
                  <button className="bg-black text-white px-2 md:px-4 py-2 font-semibold rounded-lg transition-all 1s ease-in-out hover:scale-95">
                    Decline
                  </button>
                  <div className="text-center flex items-center justify-center transition-all 1s ease-in-out hover:scale-95">
                    <img
                      src={item.editicon}
                      alt=""
                      className="h-4 w-4 cursor-pointer object-contain"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
