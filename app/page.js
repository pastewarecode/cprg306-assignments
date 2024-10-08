import Link from "next/link";

export default function Page() {
  return (
      <main>


        <h1 className="font-bold text-2xl p-4">CPRG 306: Web Development 2 - Assignments</h1>

        <div className="p-2 px-8 border-4 max-w-[300px] rounded-xl text-lg">
        <Link legacyBehavior href='http://localhost:3000/week-2' passHref>
            <a target="_blank" style={{color:'blue', textDecoration:'underline'}}>Week-2 Assignment</a>
        </Link>

        <br></br> 
        <br></br> 
        
        <Link legacyBehavior href='http://localhost:3000/week-3' passHref>
            <a target="_blank" style={{color:'blue', textDecoration:'underline'}}>Week-3 Assignment</a>
        </Link>

        <br></br>
        <br></br> 

        <Link legacyBehavior href='http://localhost:3000/week-4' passHref>
            <a target="_blank" style={{color:'blue', textDecoration:'underline'}}>Week-4 Assignment</a>
        </Link>
        </div>


      </main>
  );
}