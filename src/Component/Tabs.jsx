import { useState } from "react";
import Table from "./Table";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const tabs = ["Today", "Weekly", "Monthly", "Yearly"];

  // Define table data for each tab
  const tableData = {
    Today: [
      {
        id: 1,
        jobs: "#68182",
        customerName: "Augustina Mdgett",
        customerRate: "$500",
        customerImg: "/imgone.png",
        locationicon: "/locationicon.png",
        location: "35 Block C, Johar Town 208001 Near Gazi Chowk",
        amountstate: "Pending",
        editicon: "/editicon.png",
      },
      {
        id: 1,
        jobs: "#68182",
        customerName: "Augustina Mdgett",
        customerRate: "$500",
        customerImg: "/imgone.png",
        locationicon: "/locationicon.png",
        location: "35 Block C, Johar Town 208001 Near Gazi Chowk",
        amountstate: "Pending",
        editicon: "/editicon.png",
      },
      {
        id: 1,
        jobs: "#68182",
        customerName: "Augustina Mdgett",
        customerRate: "$500",
        customerImg: "/imgone.png",
        locationicon: "/locationicon.png",
        location: "35 Block C, Johar Town 208001 Near Gazi Chowk",
        amountstate: "Pending",
        editicon: "/editicon.png",
      },
     
    ],
    Weekly: [
      {
        id: 2,
        jobs: "#34187777",
        customerName: "Haseeb Qamar",
        customerRate: "$12700",
        customerImg: "/imgtwo.png",
        locationicon: "/locationicon.png",
        location: "XYZ Street, Near City Center",
        amountstate: "Completed",
        editicon: "/editicon.png",
      },
    ],
    Monthly: [
      {
        id: 2,
        jobs: "#34182",
        customerName: "John Doe",
        customerRate: "$700",
        customerImg: "/imgtwo.png",
        locationicon: "/locationicon.png",
        location: "XYZ Street, Near City Center",
        amountstate: "Completed",
        editicon: "/editicon.png",
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow">
      <div className="flex gap-10">
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
        {activeTab === "Today" && <Table i={tableData.Today} />}
        {activeTab === "Weekly" && <Table i={tableData.Weekly} />}
        {activeTab === "Monthly" && <Table i={tableData.Monthly} />}
        {activeTab === "Yearly" && <div>Yearly</div>}
      </div>
    </div>
  );
};

export default Tabs;
