import Button from "@/components/button/Button";
import NewJob from "@/modules/job/new-job/NewJob";
import Link from "next/link";

function ListJobsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full h-full p-16">
        <Link href="/jobs?id=0">
          <Button type="primary" title="Create a Job" />
        </Link>

        <div
          className="my-6"
          style={{ maxHeight: "calc(100% - 40px)", overflowY: "auto" }}
        >
          {children}
        </div>
      </main>
      <NewJob />
    </>
  );
}

export default ListJobsLayout;
