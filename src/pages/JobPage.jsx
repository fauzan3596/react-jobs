import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinners from "../components/Spinners";
import axios from "axios";

function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getJobs();
  }, [id]);

  return loading ? <Spinners /> : <h1>{job.title}</h1> ;
}

export default JobPage;
