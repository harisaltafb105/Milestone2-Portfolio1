import Link from "next/link";
import "../style/header.css";
export default function Header(){
    return(<div className="navbar">
        <div>
        <h1 className="logo">
            HA.
        </h1>
        </div>
<div className="right-div">
<ul className="links">
<li> <Link className="link" href="/"> Home</Link></li>
<li> <Link className="link" href="/about"> About</Link></li>
<li> <Link className="link" href="/projects"> Project </Link></li>
<li> <Link className="link" href="/contact"> Contact </Link></li>


</ul>

</div>

    </div>)
}
