import { useState } from "react";
import Today from "./Today";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const tabs = ["Today", "Weekly", "Monthly", "Yearly"];

  return (
    <div className="p-4 bg-white shadow-md 
    ">
      <div className=" flex gap-10">
        <h2 className="text-xl font-bold mb-2">Invoice</h2>
        <div className="flex space-x-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-lg font-medium transition-colors ${
                activeTab === tab ? "text-black" : "text-gray-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Render only the selected tab component */}
      <div className="mt-4">
        {activeTab === "Today" && <Today />}
        {activeTab === "Weekly" && <Weekly />}
        {activeTab === "Monthly" && <Monthly />}
        {activeTab === "Yearly" && <Yearly />}
      </div>
    </div>
  );
};

export default Tabs;
