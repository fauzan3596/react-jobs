import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinners from "../components/Spinners";
import axios from "axios";
import { FaMapMarker, FaArrowCircleLeft } from "react-icons/fa";

function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getJobs = async () => {
    try {
      const job = await axios({
        method: "GET",
        url: `/api/jobs/${id}`,
      });
      console.log(job)
      setJob(job.data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `/api/jobs/${id}`,
      });
    } catch (error) {
      console.log("Error deleting job", error);
    }
  }

  const deleteButtonHandler = (id) => {
    deleteJob(id);
    return navigate('/jobs')
  }

  useEffect(() => {
    getJobs();
  }, [id]);

  return loading ? <Spinners /> : (
    <>
    <section>
      <div class="container m-auto py-6 px-6">
        <a
          href="/jobs.html"
          class="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
           <FaArrowCircleLeft className="mr-2" size={20} /> Back to Job Listings
        </a>
      </div>
    </section>

    <section class="bg-indigo-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{job.type}</div>
              <h1 class="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className="text-lg text-orange-700 mr-2" />
                <p class="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
               {job.description}
              </p>

              <h3 class="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{job.salary} / Year</p>
            </div>
          </main>

         
          <aside>
      
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{job.company.name}</h2>

              <p class="my-2">
                {job.company.description}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

        
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/jobs/edit/${job.id}`}
                class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button onClick={() => deleteButtonHandler(job.id)}
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  ) ;
}

export default JobPage;
