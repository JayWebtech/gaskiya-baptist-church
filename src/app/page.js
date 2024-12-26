"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import ChurchGallery from "@/components/Gallery";
import { FaFacebook } from "react-icons/fa6";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const galleryRef = useRef(null);

  const handleRefClick = (ref) => {
    const element = ref.current;
    const elementTop = element.getBoundingClientRect().top;
    const scrollTop = window.scrollY;
    const offset = 150;
    const top = elementTop + scrollTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero h-screen">
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          activitiesRef={activitiesRef}
          galleryRef={galleryRef}
          handleRefClick={handleRefClick}
        />
        <div className="mb-2 container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center my-36">
            <h1 className="text-[2rem] xl:text-[5rem] font-Millik text-white text-center">
              Welcome to <br />
              Gaskiya Baptist Church
            </h1>
            <p className="text-sm xl:text-2xl text-white text-center">
              We are a community of believers passionate about worship,
              fellowship, and serving others in the love of Christ.
              <br /> Join us for services, events, and more as we grow together
              in faith.
            </p>
            <button className="bg-second py-4 px-10 xl:text-base text-sm text-black mt-10" onClick={() => handleRefClick(aboutRef)}>
              Learn more about us
            </button>
            <div
              className="flex flex-col gap-2 justify-center items-center absolute bottom-5 z-auto smbelow:hidden cursor-pointer"
              onClick={() => handleRefClick(aboutRef)}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <circle cx="24" cy="24" r="23.5" stroke="white" />
                <path
                  d="M22.9751 17.8544L22.9751 28.1107L19.0103 24.3889L17.9512 25.3831L23.7241 30.8024L29.4971 25.3831L28.4379 24.3889L24.4732 28.1107L24.4732 17.8544L22.9751 17.8544Z"
                  fill="white"
                />
              </svg>
              <p className="text-white text-xs">Scroll for more</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
        <section className="my-10 xl:my-32" ref={aboutRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10  xl:mb-32">
            <div className="shadow-lg p-8 ring-2 ring-gray-100">
              <h2 className="text-3xl font-Millik text-center text-primary mb-4">
                Our History
              </h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-base">
                Gaskiya Baptist Church was founded in [Year] with the mission to
                serve the community through faith and love. Over the years, we
                have grown into a diverse and vibrant congregation, dedicated to
                serving God and others.
              </p>
            </div>

            <div className="shadow-lg p-8 ring-2 ring-gray-100">
              <h2 className="text-3xl font-Millik text-center text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Our mission is to proclaim the message of Jesus Christ, serve
                our local community, and provide a loving and welcoming space
                for all to grow in faith. We are committed to spreading the love
                and teachings of Jesus in all that we do.
              </p>
            </div>

            <div className="shadow-lg p-8 ring-2 ring-gray-100">
              <h2 className="text-3xl font-Millik text-center text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Our vision is to be a beacon of hope and transformation,
                bringing individuals and families closer to Christ. We strive to
                create a world where love, faith, and service guide every action
                and decision.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-Millik text-center text-primary mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Our leadership team is committed to guiding the congregation with
              wisdom, integrity, and love. Meet the dedicated individuals who
              lead our church.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/img/pastor.jpg"
                  alt="Leader 1"
                  className="w-full h-[20rem] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-DMSansBold text-primary">
                  Rev. Shekolo Kasuwa
                </h3>
                <p className="text-gray-700">Lead Pastor</p>
                <p className="text-gray-600 mt-2">
                  Rev. Shekolo has been leading Gaskiya Baptist Church for over
                  20 years. With a passion for preaching and community outreach,
                  he strives to lead with love and service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/img/pastor.jpg"
                  alt="Leader 2"
                  className="w-full h-[20rem] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-DMSansBold text-primary">
                  Bro. Manasseh Yakubu
                </h3>
                <p className="text-gray-700">Deacon</p>
                <p className="text-gray-600 mt-2">
                  Bro. Manasseh is dedicated to serving as the church secretary.
                  She is passionate about outreach programs and helping those in
                  need in our community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/img/pastor.jpg"
                  alt="Leader 3"
                  className="w-full h-[20rem] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-DMSansBold text-primary">
                  Elder James Johnson
                </h3>
                <p className="text-gray-700">Elder</p>
                <p className="text-gray-600 mt-2">
                  Elder James Johnson has served at Gaskiya Baptist Church for
                  over 20 years, providing spiritual guidance, teaching, and
                  mentoring to the congregation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-primary text-white p-5 xl:p-16 text-center"
          ref={activitiesRef}
        >
          <h2 className="text-4xl font-DMSansBold mb-4">Weekly Activities</h2>
          <p className="text-lg mb-6">
            We invite you to come and experience the love of Christ with us.
            Whether you're new to the area or have been here for years, we're
            here for you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">
                Sunday Worship Service
              </h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> 10:00 AM
              </p>
              <p className="text-gray-700">
                Join us for our weekly worship service, where we gather together
                in praise, worship, and teaching. All are welcome to experience
                the love of Christ through song, prayer, and fellowship.
              </p>
            </div>

            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">Bible Study</h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> Wednesday 7:00 PM
              </p>
              <p className="text-gray-700">
                Deepen your understanding of God’s word during our weekly Bible
                study. Come join us as we explore the Scriptures together and
                grow in faith.
              </p>
            </div>

            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">Prayer Meeting</h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> Tuesday 6:00 PM
              </p>
              <p className="text-gray-700">
                Our weekly prayer meeting is an opportunity for the church
                community to come together in prayer for each other, our church,
                and the world. All are invited to join us as we lift up our
                prayers to God.
              </p>
            </div>

            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">Youth Group</h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> Friday 7:00 PM
              </p>
              <p className="text-gray-700">
                Our Youth Group is a safe space for young people to grow in
                their faith, make friends, and have fun. Join us for Bible
                discussions, games, and exciting activities every Friday
                evening.
              </p>
            </div>

            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">
                Community Outreach
              </h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> Saturday 9:00 AM
              </p>
              <p className="text-gray-700">
                Join us for our weekly outreach program as we serve those in
                need within our community. Whether it's distributing food,
                helping the homeless, or organizing community events, your hands
                and heart are needed.
              </p>
            </div>

            <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-DMSansBold mb-2">Choir Practice</h3>
              <p className="text-lg mb-2">
                <strong>Time:</strong> Thursday 6:30 PM
              </p>
              <p className="text-gray-700">
                Our choir meets weekly to rehearse for Sunday services and
                special events. If you love to sing and want to use your talents
                in worship, come join us!
              </p>
            </div>
          </div>
        </section>
        <section className="py-5 xl:py-20" ref={galleryRef}>
          <ChurchGallery />
        </section>
      </div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
          <h3 className="text-white text-2xl font-DMSansBold">
            Gaskiya Baptist Church
          </h3>
          <p className="text-white text-lg">Bayan Dutse, Narayi</p>
          <a href="">
          <div className="flex gap-3 mt-5 items-center text-white cursor-pointer">
            <FaFacebook className="text-white text-xl" />
            <span>Follow us on facebook</span>
          </div>
          </a>
        </div>
      </section>
    </div>
  );
}
