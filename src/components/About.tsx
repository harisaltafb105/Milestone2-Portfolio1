import "../style/about.css";
import "../style/hero.css";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; 

export default function About(){
    return(<div className="container">
        <div className="container-box">
        <div>
       <Image className="image" src="/Profile Pic.jpg" width={250} height={250} alt="Profile Pic"    />
        
        
        <div className="social-icons">
        <Link href=""><FaYoutube className="s-icon1"/></Link>
        <Link href=""><FaFacebookF className="s-icon2" /></Link>
       <Link href=""> <FaInstagram className="s-icon3"/></Link>
        </div>
        </div>
        
        <div className="text-div">
            <h1 className="heading">
               A bit about Me:
            </h1>
            <p className="para"> I'm a Frontend developer passionate about bringing digital experiences to life through clean, efficient code and pixel-perfect design. Expertise in HTML,CSS, Javascript, Typescript React js & Next js.  </p>
        
        </div>
</div>
    </div>)     
}