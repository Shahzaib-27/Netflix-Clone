import React, { useRef, useState } from "react";
import styles1 from "./MainSection.module.css"

export default function MainFile() {

const sectionRef = useRef(null);

const FAQBTNDISPLAY1 = useRef(null);
const FAQBTNDISPLAY2 = useRef(null);
const FAQBTNDISPLAY3 = useRef(null);
const FAQBTNDISPLAY4 = useRef(null);
const FAQBTNDISPLAY5 = useRef(null);
const FAQBTNDISPLAY6 = useRef(null);

const DISPLAYINPUT = () => {
  if (FAQBTNDISPLAY1.current) {

    // first section
    FAQBTNDISPLAY1.current.style.display = 
    FAQBTNDISPLAY1.current.style.display === 
    "flex" ? "none" : "flex";

    // second section
    FAQBTNDISPLAY2.current.style.display = "none";
    // third section
    FAQBTNDISPLAY3.current.style.display = "none";
    // fourth section
    FAQBTNDISPLAY4.current.style.display = "none";
    // five section
    FAQBTNDISPLAY5.current.style.display = "none";
    // six section
    FAQBTNDISPLAY6.current.style.display = "none";
  }
};

const DISPLAYINPUTsec = () => {
  if (FAQBTNDISPLAY2.current) {
    
    // second section
    FAQBTNDISPLAY2.current.style.display = 
    FAQBTNDISPLAY2.current.style.display ===
    "flex" ? "none" : "flex";

    // first section 
    FAQBTNDISPLAY1.current.style.display = "none";
    // third section
    FAQBTNDISPLAY3.current.style.display = "none";
    // fourth section
    FAQBTNDISPLAY4.current.style.display = "none";
    // five section
    FAQBTNDISPLAY5.current.style.display = "none";
    // six section
    FAQBTNDISPLAY6.current.style.display = "none";
  }
};

const DISPLAYINPUTthird = () => {
  if (FAQBTNDISPLAY3.current) {

    // third section
    FAQBTNDISPLAY3.current.style.display = 
    FAQBTNDISPLAY3.current.style.display ===
    "flex" ? "none" : "flex";

    // first section 
    FAQBTNDISPLAY1.current.style.display = "none";
    // second section
    FAQBTNDISPLAY2.current.style.display = "none";
     // fourth section
    FAQBTNDISPLAY4.current.style.display = "none";
    // five section
    FAQBTNDISPLAY5.current.style.display = "none";
    // six section
    FAQBTNDISPLAY6.current.style.display = "none";
  }
};

const  DISPLAYINPUTfourth = () => {
  if (FAQBTNDISPLAY4.current) {

    // fourth section
    FAQBTNDISPLAY4.current.style.display = 
    FAQBTNDISPLAY4.current.style.display ===
    "flex" ? "none" : "flex";

    // first section 
    FAQBTNDISPLAY1.current.style.display = "none";
    // second section
    FAQBTNDISPLAY2.current.style.display = "none";
     // third section
    FAQBTNDISPLAY3.current.style.display = "none";
    // five section
    FAQBTNDISPLAY5.current.style.display = "none";
    // six section
    FAQBTNDISPLAY6.current.style.display = "none";
  }
};

const  DISPLAYINPUTfive = () => {
  if (FAQBTNDISPLAY5.current) {

    // five section
    FAQBTNDISPLAY5.current.style.display = 
    FAQBTNDISPLAY5.current.style.display ===
    "flex" ? "none" : "flex";

    // first section 
    FAQBTNDISPLAY1.current.style.display = "none";
    // second section
    FAQBTNDISPLAY2.current.style.display = "none";
     // third section
    FAQBTNDISPLAY3.current.style.display = "none";
    // fourth section
    FAQBTNDISPLAY4.current.style.display = "none";
    // six section
    FAQBTNDISPLAY6.current.style.display = "none";
  }
};

const  DISPLAYINPUTsix = () => {
  if (FAQBTNDISPLAY6.current) {

    // six section
    FAQBTNDISPLAY6.current.style.display = 
    FAQBTNDISPLAY6.current.style.display ===
    "flex" ? "none" : "flex";

    // first section 
    FAQBTNDISPLAY1.current.style.display = "none";
    // second section
    FAQBTNDISPLAY2.current.style.display = "none";
     // third section
    FAQBTNDISPLAY3.current.style.display = "none";
    // fourth section
    FAQBTNDISPLAY4.current.style.display = "none";
    // five section
    FAQBTNDISPLAY5.current.style.display = "none";
  }
};


  const handleScrollLeft = (e) => {
    e.preventDefault();
    sectionRef.current.scrollBy({ left: -390, behavior: "smooth" });
  };

  const handleScrollRight = (e) => {
    e.preventDefault();
    sectionRef.current.scrollBy({ left: 390, behavior: "smooth" });
  };


  return (
    <>
    
      <main>
        <section className={styles1.container}>
          <div className={styles1.contex}>
            <h1>
              Unlimited movies, TV
              <br />
              shows, and more
            </h1>
            <h5>Starts at Rs 250. Cancel anytime.</h5>
            <p>
              Ready to watch? Enter your email to create or
              <br />
              restart your membership.
            </p>

            <div className={styles1.cta}>
              <form action="htmlfor" className={styles1.cta}>
              <input type="email" placeholder="Email Address" id="inp" required/>
              <button id="gs" className={styles1.cta_btn}>
                Get Started
              </button>
              
              </form>

            </div>
          </div>
        </section>
    
        <section className={styles1.trending} aria-label="Trending now">
          <h2>Trending Now</h2>

          <div className={styles1.trending_inner}>
            
            <button onClick = {handleScrollLeft}
              className={styles1.scroll_btn_left}
            
              
            id={styles1.scroll_btn_left}
              aria-label={styles1.Scroll}

               > &#10094; </button>

            <div className={styles1.movie_slider} 
            id={styles1.movie_slider} ref={sectionRef}>

              <div className={styles1.movie}>
                <img src="/Images/animal.jpg" alt="Movie 1" />
                <span className={styles1.rank}>1</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/azaad.jpg" alt="Movie 2" />
                <span className={styles1.rank}>2</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/war 2.jpg" alt="Movie 3" />
                <span className={styles1.rank}>3</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/trap.jpg" alt="Movie 4" />
                <span className={styles1.rank}>4</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/jawan.jpg" alt="Movie 5" />
                <span className={styles1.rank}>5</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/saiyaara.jpg" alt="Movie 6" />
                <span className={styles1.rank}>6</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/tehran.jpg" alt="Movie 7" />
                <span className={styles1.rank}>7</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/final destinations.jpg" alt="Movie 8" />
                <span className={styles1.rank}>8</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/alice in borderland.jpg" alt="Movie 9" />
                <span className={styles1.rank}>9</span>
              </div>

              <div className={styles1.movie}>
                <img src="/Images/son of sardaar 2.jpg" alt="Movie 10" />
                <span className={styles1.rank}>10</span>
              </div>

            </div>

            <button onClick={handleScrollRight} 
              className={styles1.scroll_btn_right}
                id={styles1.scroll_btn_right}
              aria-label="styles1.Scroll right"> &#10095; 
              </button>
          </div>
        </section>

        <section className={styles1.des}>
          <h3>More Reasons to Join</h3>

          <div className={styles1.center}>

            <div className={styles1.dbox} >

              <div className={styles1.db}>
                <h5>Enjoy on your TV</h5>
                <p>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
                <i className="fa-solid fa-tv"></i>
              </div>
            </div>

            <div className={styles1.dbox}>
              <div className={styles1.db1}>
                <h5>Download your shows to watch offline</h5>
                <p>
                  Save your favorites easily and always have something to watch
                </p>
                <i className="fa-regular fa-circle-down"></i>
              </div>
            </div>

            <div className={styles1.dbox}>
              <div className={styles1.db2}>
                <h5>Watch everywhere</h5>
                <p>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </p>
                <i className="fa-solid fa-swatchbook"></i>
              </div>
            </div>

            <div className={styles1.dbox}>
              <div className={styles1.db3}>
                <h5>Create profiles for kids</h5>
                <p>
                  Send kids on adventures with their favorite characters in a
                  space made just for them — free with your membership.
                </p>
                <i className="fa-solid fa-user-tie"></i>
              </div>
            </div>
          </div>
        </section>


        <section className={styles1.midcon} id={styles1.mtdisplay}>
<div className={styles1.midcontext}>
<h1>Frequently Asked Questions</h1>

<div className={styles1.dd1} id={styles1.data1} onClick={DISPLAYINPUT}>
<h1 >What is Netflix 
<i className="fa-solid fa-xmark"></i>
</h1>

<div className={styles1.dd1t} id={styles1.data2}>
<p ref={FAQBTNDISPLAY1}>Netflix is a streaming service that offers a wide variety of award-winning 
TV shows, movies, anime documentaries, and more on thousands of internet-connected devices.
<br /><br />
You can watch as much as you want, whenever you want without a single 
commercial , all for one low monthly
 price. There's always something new to discover and new TV shows and movies 
 are added every week!</p>
</div>

</div>
        
<div className={styles1.dd1} id={styles1.data3} onClick={DISPLAYINPUTsec}>
<h1>How much does Netflix cost
<i className="fa-solid fa-xmark"></i> 
</h1>        
<div className={styles1.dd1t} id={styles1.data4}>
<p ref={FAQBTNDISPLAY2}>Watch Netflix on your smartphone, tablet, Smart TV,
laptop, or streaming device, all for one fixed monthly fee. <br/> 
Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.</p>
</div>
</div>

<div className={styles1.dd1} id={styles1.data5} onClick={DISPLAYINPUTthird}>
<h1>Where can i watch <i className="fa-solid fa-xmark"></i></h1>        
<div className={styles1.dd1t} id={styles1.data6}>
<p ref={FAQBTNDISPLAY3}>Watch anywhere, anytime. Sign in with your Netflix account to
   watch instantly on the web at netflix.com from your  <br/>
   personal computer or on any internet-connected device that offers 
   the Netflix app, including smart TVs,<br/> s
   martphones, tablets, streaming media players and game consoles.
<br/><br/>
You can also download your favorite shows with the iOS or 
Android app. Use downloads to watch while you're on <br/> 
the go and without an internet connection. Take Netflix with you anywhere. 
<br/> </p>
</div>
</div>

<div className={styles1.dd1} id={styles1.data7} onClick={DISPLAYINPUTfourth}>
<h1>How do i cancel <i className="fa-solid fa-xmark"></i></h1>        
<div className={styles1.dd1t} id={styles1.data8}>
<p ref={FAQBTNDISPLAY4}>Netflix is flexible. There are no pesky contracts and no commitments. 
  You can easily cancel your account online in <br/>two clicks. There are no 
  cancellation fees  start or stop your account anytime. <br/></p>
</div>
</div>

<div className={styles1.dd1} id={styles1.data9} onClick={DISPLAYINPUTfive}>
<h1>What can i watch on Netflix <i className="fa-solid fa-xmark"></i></h1>
<div className={styles1.dd1t} id={styles1.data10}>
<p ref={FAQBTNDISPLAY5}>Netflix has an extensive library of feature films, documentaries, TV shows, 
  anime, award-winning Netflix originals, <br/>and more. Watch as much as you 
  want, anytime you want.</p>
</div>
</div>

<div className={styles1.dd1} id={styles1.data11} onClick={DISPLAYINPUTsix}>
<h1>Is netflix good for kids <i className="fa-solid fa-xmark"></i></h1>  
<div className={styles1.dd1t} id={styles1.data12}>
<p ref={FAQBTNDISPLAY6}>The Netflix Kids experience is included in your membership to give parents 
  control while kids enjoy family-friendly <br/>TV shows and movies in their 
  own space. <br/><br/>
Kids profiles come with PIN-protected parental controls that let you restrict 
the maturity rating of content kids can <br/>watch and block specific titles 
you dont want kids to see.</p>
</div>
</div>
</div>

            </section>
      </main>

     </>
  );
}