import { useState } from "react";
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header toggleMenu={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <main className="p-6">
        <h1>Dashboard</h1>
      </main>
    </>
  )
}

export default Dashboard