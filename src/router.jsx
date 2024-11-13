import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/jobs",
                element: <JobsPage />
            },
            {
                path: "/jobs/:id",
                element: <JobPage />
            },
            {
                path: "/add-job",
                element: <AddJobPage />
            },
            {
                path: "/jobs/edit/:id",
                element: <EditJobPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
])

export default router;