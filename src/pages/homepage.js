import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Homepage = () => {
    const [view, setView] = useState("list");

    const tasks = [
        {
            id: 1,
            name: "Task 1",
            description: "Description 1",
            status: "pending",
            priorty: "high"
        },
        {
            id: 2,
            name: "Task 2",
            description: "Description 2",
            status: "pending"
        },
        {
            id: 3,
            name: "Task 3",
            description: "Description 3",
            status: "pending"
        },
        {
            id: 4,
            name: "Task 4",
            description: "Description 4",
            status: "pending"
        },
        {
            id: 5,
            name: "Task 5",
            description: "Description 5",
            status: "pending"
        },
        {
            id: 6,
            name: "Task 6",
            description: "Description 6",
            status: "pending"
        },
        {
            id: 7,
            name: "Task 7",
            description: "Description 7",
            status: "pending"
        },
        {
            id: 8,
            name: "Task 8",
            description: "Description 8",
            status: "pending"
        },
        {
            id: 9,
            name: "Task 9",
            description: "Description 9",
            status: "pending"
        },
        {
            id: 10,
            name: "Task 10",
            description: "Description 10",
            status: "pending"
        },
        {
            id: 11,
            name: "Task 11",
            description: "Description 11",
        }
    ]

    return(
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <button className="btn btn-primary" onClick={() => {setView("list")}}>List View</button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <button className="btn btn-primary" onClick={() => {setView("grid")}}>Grid View</button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <button className="btn btn-primary" onClick={() => (setView("calendar"))}>Calender view</button>
                    </div>
                </div>
            </div>
            {view==="grid" && 
            <div className="container-fluid">
                <div className="row">
                    {tasks.map((task) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.name}</h5>
                                    <p className="card-text">{task.description}</p>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
            {view==="list" &&
            <div className="container-fluid">
                <div className="row d-flex flex-column align-items-center">
                    {tasks.map((task) => (
                        <div className="col-8 m-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.name}</h5>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
            {view==="calendar" &&
            <div className="container-fluid">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                Calendar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <Footer />
        </div>
    )
}

export default Homepage;