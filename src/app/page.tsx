"use client";
import { jobService } from "@/services/job-service";
import { useState, useEffect } from "react";

export default function Home() {
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    jobService
      .listAllJobs()
      .then(response => {
        console.log("LIST ALL JOBS RESPONSE: ", response);
      })
      .finally(() => setIsPostsLoading(false));
  }, []);

  if (isPostsLoading) {
    return <div>Loading...</div>;
  }

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
