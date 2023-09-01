import React from 'react'
import "./Home.css"
import dot from "../img/dot-1.png"
import fly from "../img/flying.png"
import MessageForms from '../../Components/MessageForms'
import { coldimage } from '../../Data'
const Home = () => {
  return (
    < >
      <div className="home-page-main">


        <section className="home-hero-section">
          <div className='home-hero-heading glitch'>
            Discover the Ultimate Shopping Experience
            <br />

            <button className='btn btn-danger fs-5 m-1 text-large btn-home'> Get Started</button>
            <button className='btn fs-5 btn-primary m-1 btn-home'>Explore</button>
          </div>

          <img className='home-header-image ' src="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=740&t=st=1692443816~exp=1692444416~hmac=77b76169138dce908753ea4f20818ec98fab6df405f26abc569a0465910aa51b" alt="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=740&t=st=1692443816~exp=1692444416~hmac=77b76169138dce908753ea4f20818ec98fab6df405f26abc569a0465910aa51b" />
          <img src={dot} alt=" Design By Free Pik" id='dot-2' />
          <img src={dot} alt="Design By Free Pik" id='dot-1' />
        </section>


        <section className='home-section-2'>
          <img src={fly} alt="" id='home-fly' />
          <img className='glitch' src="https://img.freepik.com/free-vector/astronaut-flying-rocket-hand-drawn-sketch-vector-illustration_460848-14515.jpg?t=st=1692456964~exp=1692457564~hmac=e60829785a5f260fdf2ad7250dcfd4aeaf4e41a0eb06729b525c5800fd9e8e2b" alt="" id='astro' />

        </section>

        <section className="home-section-4">
          <img src="https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fed5379f-eddd-481a-bf77-11765839c4b5/DreamShaper_v7_decent_background_for_shopping_fashion_0.jpg" alt="" width={"100%"} />
        </section>

        <section className='home-section-3' >

          <p className='home-shop-header'>
            Shop the Latest Trends in Fashion
          </p>
          <div className='home-card-container' >
            <div class="card position-relative home-shop-cards" style={{ width: "300px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/pop-scenes/1000/mobile_device_e-commerce___shopping_cart_online_shop_item_purchase-256.png" class="card-img" alt="Background Imagess" />
              <div class="card-text-overlay">
                <p className='btn btn-light'>Discover</p>
              </div>
            </div>

            <div class="card position-relative home-shop-cards" style={{ width: "300px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/pop-scenes/1000/error_404_mobile_device___warning_danger_not_found_calculator_calculate_hand_gesture-256.png" class="card-img" alt="Background Imagess" />
              <div class="card-text-overlay">
                <p className='btn btn-light'>Discover</p>
              </div>
            </div>

            <div class="card position-relative home-shop-cards" style={{ width: "300px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/pop-scenes/1000/delivery___logistic_package_box_insurance_security_document_tracking_shipment-256.png" class="card-img" alt="Background Imagess" />
              <div class="card-text-overlay">
                <p className='btn btn-light'>Discover</p>
              </div>
            </div>
          </div>
          <img src={dot} alt=" Design By Free Pik" id='dot-4' />

        </section>
        <img src="https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/20b414e7-255e-4c22-96b7-5f599149a456/DreamShaper_v7_fashion_background_store_illustration_watch_0.jpg" alt="" width={"100%"} />

        <section className="home-section-5">
          <div class="outerdiv">
            <div class="innerdiv">
              <div class="div1 eachdiv">
                <div class="userdetails">
                  <div class="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
                  </div>
                  <div class="detbox">
                    <p class="name">Daniel Clifford</p>
                    <p class="designation">Verified Graduate</p>
                  </div>
                </div>
                <div class="review" >
                  <h4>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h4>
                  <p>“ I was an . I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                </div>
              </div>
              <div class="div2 eachdiv">
                <div class="userdetails">
                  <div class="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
                  </div>
                  <div class="detbox">
                    <p class="name">Jonathan Walters</p>
                    <p class="designation">Verified Graduate</p>
                  </div>
                </div>
                <div class="review">
                  <h4>The team was very supportive and kept me motivated</h4>
                  <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
                </div>
              </div>
              <div class="div3 eachdiv">
                <div class="userdetails">
                  <div class="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
                  </div>
                  <div class="detbox">
                    <p class="name dark">Kira Whittle</p>
                    <p class="designation dark">Verified Graduate</p>
                  </div>
                </div>
                <div class="review dark">
                  <h4>Such a life-changing experience. Highly recommended!</h4>
                  <p>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of experience. It certainly helped me land a job as a full-stack. </p>
                </div>
              </div>
              <div class="div4 eachdiv">
                <div class="userdetails">
                  <div class="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
                  </div>
                  <div class="detbox">
                    <p class="name dark">Jeanette Harmon</p>
                    <p class="designation dark">Verified Graduate</p>
                  </div>
                </div>
                <div class="review dark">
                  <h4>An overall wonderful and rewarding experience</h4>
                  <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
                </div>
              </div>
              <div class="div5 eachdiv">
                <div class="userdetails">
                  <div class="imgbox">
                    <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
                  </div>
                  <div class="detbox">
                    <p class="name">Patrick Abrams</p>
                    <p class="designation">Verified Graduate</p>
                  </div>
                </div>
                <div class="review">
                  <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
                  <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
                </div>
              </div>
            </div>
          </div>




        </section>

        <section className="home-section-6">

          <img src={coldimage} alt="" />
        </section>

        <section className="home-section-7">
          <MessageForms />
        </section>

      </div>
    </>
  )
}

export default Home