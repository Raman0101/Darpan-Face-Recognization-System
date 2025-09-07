import { useState } from "react";
import pencilsImg from "../assets/pencils.png";

export default function Attendance() {
  const [logs, setLogs] = useState([
    { name: "Rahul Sharma", status: "Known" },
    { name: "Unknown #1", status: "Unknown" },
  ]);

  const handleDownload = () => {
    const csvContent = [
      ["Name", "Status"],
      ...logs.map((l) => [l.name, l.status]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "attendance.csv");
    link.click();
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${pencilsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
          Mark Attendance
        </h2>

        {/* Camera preview placeholder */}
        <div className="w-[600px] h-[400px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md mb-6">
          <p className="text-gray-600">[Camera Input Placeholder]</p>
        </div>

        {/* Attendance logs */}
        <div className="w-[600px] bg-white shadow-md rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">Recognition Logs</h3>
          <ul className="space-y-2">
            {logs.map((log, i) => (
              <li key={i} className="flex justify-between border-b pb-1">
                <span>{log.name}</span>
                <span
                  className={
                    log.status === "Known" ? "text-green-600" : "text-red-600"
                  }
                >
                  {log.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Download CSV
        </button>
      </div>
    </div>
  );
}
