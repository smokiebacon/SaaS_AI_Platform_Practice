import React from "react"
import Sidebar from "@/components/shared/Sidebar"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <Sidebar />
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  )
}

export default Layout
