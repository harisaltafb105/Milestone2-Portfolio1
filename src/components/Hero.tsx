import "../style/hero.css";
import Image from "next/image";

export default function Hero(){
    return(<div className="container">
        <div className="container-box">
        <div>
       <Image className="image" src="/Profile Pic.jpg" width={250} height={250} alt="Profile Pic"    />

        </div>
        <div className="text-div">
            <h1 className="heading">
                I'm Haris Altaf 
                Front-end Developer
            </h1>
            <p>
                I am a Frontend developer (React Js & Next Js) with a focus on creating exceptional, fast
                visually appealing and responsive websites.
            </p>
            
        <button className="button"> HIRE ME </button>
        </div>
</div>
    </div>)     
}