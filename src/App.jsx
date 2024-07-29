import './App.css'
import image1 from "../img/career-mindset-e1667558947493.jpg"
import image2 from "../img/1.jpg"
import image3 from "../img/2.jpg"
import image4 from "../img/3.jpg"


function App() {


  return (
    <>
    <div className="nav-adjust">
      <div className="navbar">
        <div className="logo">
          <h1>Alsabith Nowshad</h1>
        </div>
        <div className="menu">
          <h2>Home</h2>
          <h2>Image</h2>
          <h2>Works</h2>
          <h2>About us</h2>
        </div>
      </div>
      </div>
      <div className="top">
        <div className="img">
          <img className='image' src={image1} alt="" />
        </div>
        <div className="topTxt">
          <div className="maintxt">
          <h1 className='txt1 txts'>I Have Experience In</h1>
          <h3 className='txt2 txts'>Frond End, UI & UX</h3>
          </div>
          <div className="txt3 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis in, nesciunt labore possimus debitis ipsum quaerat ab minus provident, dignissimos at aliquid repudiandae, tenetur incidunt soluta recusandae. Temporibus, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum doloribus! Ipsa neque amet, quasi in est laboriosam perspiciatis. Dicta expedita illum praesentium. Error excepturi rem quis ab sit esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis in, nesciunt labore possimus debitis ipsum quaerat ab minus provident, dignissimos at aliquid repudiandae, tenetur incidunt soluta recusandae. Temporibus, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum doloribus! Ipsa neque amet, quasi in est laboriosam perspiciatis. Dicta expedita illum praesentium. Error excepturi rem quis ab sit esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis in, nesciunt labore possimus debitis ipsum quaerat ab minus provident, dignissimos at aliquid repudiandae, tenetur incidunt soluta recusandae. Temporibus, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum doloribus! Ipsa neque amet, quasi in est laboriosam perspiciatis. Dicta expedita illum praesentium. Error excepturi rem quis ab sit esse.</p>
          </div>
        </div>
      </div>


      {/* second scrool */}

    <div className="secDiv">
    <h1 className='field'>Fields</h1>
    <div className="imagesSec">
        <div>
           <img  className="first" src={image2} alt="" />
           <div className="firstTxt">
            <h1>Frond End Developer</h1>
           </div>
           <div className="firstTxtSub txtsub">
           <p> I Have experiance 3 Year In Frond End HTML & CSS</p>
           <p>& Tailwind and Bootstarp</p>
            <button className='secBtn'>Show More</button>
           </div>
        </div>

        <div>
           <img  className="first" src={image3} alt="" />
           <div className="firstTxt">
            <h1>Frond End Developer</h1>
           </div>
           <div className="firstTxtSub txtsub">
           <p> I Have experiance 3 Year In Frond End HTML & CSS</p>
           <p>& Tailwind and Bootstarp</p>
           <button className='secBtn'>Show More</button>
           </div>
        </div>

        <div>
           <img  className="first" src={image4} alt="" />
           <div className="firstTxt">
            <h1>Frond End Developer</h1>
           </div>
           <div className="firstTxtSub txtsub">
           <p> I Have experiance 3 Year In Frond End HTML & CSS</p>
           <p>& Tailwind and Bootstarp</p>
           <button className='secBtn'>Show More</button>
           </div>
        </div>
      </div>
    </div>

{/* last footer */}

    <div className="footer">
      <h1>Call Me Now</h1>

    <div className="contact">
      <div className="btncnct">
      <button className='cntctBtn'>Send Email</button>
      </div>
      <div className="num">
        <p>+91 7558846282</p>
      </div>
    </div>

    </div>

    <div className="footer2">
      
    <div className="box1">
      <h2> Name : Alsabith Nowshad</h2>
      <h2>country : India</h2>
      <h2>city : kerala,Kottayam,Kanjirappally</h2>
    </div>

    <div className="box2">
      <h2>Instagram : le_njn_alsabith</h2>
      <h2>Youtube : ZOMBIE-OMNES IN UNO</h2>
      <h2>Github : ALSABITH-NOWSHAD</h2>
    </div>

    </div>



    </>
  )
}

export default App
