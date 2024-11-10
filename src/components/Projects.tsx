import "../style/projects.css";
import Image from "next/image";

export default function Projects(){
    return(<main className="main">
        <div className="proj-container">
            <div className="text-div-proj">
                <h2 className="heading-proj"> My Projects </h2>
                <p className="para-proj"> Here is my Portfolio of some of websites that I have made to show my work using HTML, CSS, Javascript and Framework like React JS and Next JS!</p>
            </div>

            <div className="boxes-container">
                <div className="boxes"><Image src="/static resume builder .jpg" alt="My Projects" width={500} height={400}/> <h3> Static Interactive Resume</h3> 
                <button className="button1"> HTML</button>
                <button className="button2">CSS</button>
                <button className="button3">Typescript</button>
                </div>
                <div className="boxes"><Image src="/simple calc.png" alt="My Projects" width={500} height={400} />
                <h3> A Simple Calculator</h3> 
                <button className="button-1"> HTML</button>
                <button className="button2">CSS</button>
                <button className="button3">Typescript</button>
                </div>
                <div className="boxes"><Image src="/Food Delivery Website.JPG" alt="My Projects" width={500} height={400} />
                <h3> A Food Delivery Website</h3> 
                <button className="button01"> HTML</button>
                <button className="button2">CSS</button>

                </div>
                <div className="boxes"><Image src="/car website home page 1.JPG" alt="My Projects" width={500} height={400} />
                <h3> Car Website Home Page 1</h3> 
                <button className="button1"> HTML</button>
                <button className="button2">Tailwind CSS</button>
                <button className="button3">Next JS</button>
                </div>
                <div className="boxes"><Image src="/Car website home page 2.JPG" alt="My Projects" width={500} height={400} />
                <h3> Car Website Home Page 2</h3> 
                <button className="button001"> HTML</button>
                <button className="button2">Tailwind CSS</button>
                <button className="button3">Next JS</button>
                </div>
                <div className="boxes"><Image src="/Currency Converter.png" alt="My Projects" width={500} height={400} />
                <h3> A Currency Converter</h3> 
                <button className="button-01"> HTML</button>
                <button className="button2">CSS</button>
                <button className="button3">Typescript</button>
                </div>
                


            </div>


        </div>
    </main>)
}