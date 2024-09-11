import Link from "next/link";

export default function Page() {
  return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>

        <Link legacyBehavior href='http://localhost:3000/week-2' passHref>
            <a target="_blank" style={{color:'blue', textDecoration:'underline'}}>Week-2 Assignment</a>
        </Link>
      </main>
  );
}