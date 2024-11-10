import Link from "next/link";
import "../style/contact.css";
export default function Contact(){
     return(<main className="contact-main">

<div className="contact-container">
    <h1 className="contact-heading"> Contact us </h1>
<form action="" className="form">
    <input type="text" placeholder="Enter Your Name"/>
    <input type="email" placeholder="abc@gamil.com"/>
    <input className="msg" type="text" placeholder="your message"/>    
</form>
<Link href=""><button className="button"> Submit </button></Link>
</div>

</main>)
    
     }