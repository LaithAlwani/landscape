import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to [Landscaping Company Name], a new and dynamic interlock company dedicated to
        providing exceptional landscaping services to our valued clients. With a fresh perspective
        and a passion for creativity, we are eager to make our mark in the industry and establish
        ourselves as a trusted name in interlock installations.
      </p>

      <p>
        At [Landscaping Company Name], we understand the importance of a well-designed outdoor
        space. We believe that your property should be an extension of your personal style and a
        reflection of your unique taste. Our team of skilled professionals is committed to bringing
        your vision to life and creating outdoor spaces that are both functional and visually
        stunning.
      </p>
      <h3>Why choose us for your interlock needs? Here's what sets us apart:</h3>
      <ul>
        <li>
          Expertise: Our team consists of highly trained professionals who are well-versed in the
          latest trends, techniques, and industry standards. We stay updated with the newest
          materials and technologies to provide you with innovative solutions.
        </li>
        <li>
          Custom Designs: We believe that every client is unique, and we strive to create custom
          interlock designs that reflect your individual style and preferences. From traditional to
          contemporary, we have the expertise to bring your dream outdoor space to life.
        </li>
        <li>
          Quality Materials: We source only the finest quality interlock materials from reputable
          suppliers. Our commitment to using premium products ensures that your interlock features
          will maintain their beauty and durability for years to come.
        </li>
        <li>
          Attention to Detail: We pay meticulous attention to every aspect of the installation
          process, from proper site preparation to precise interlock placement. Our team's keen eye
          for detail ensures flawless results that exceed your expectations.
        </li>
        <li>
          Timely Execution: We understand the importance of completing projects within deadlines.
          With our efficient project management and streamlined processes, we strive to deliver your
          interlock project on time and with minimal disruption.
        </li>
        <li>
          Customer Satisfaction: Your satisfaction is our top priority. We are dedicated to
          providing exceptional customer service, actively listening to your needs, and delivering
          personalized solutions that align with your vision.
        </li>
      </ul>
      <p>
        We are excited to embark on this journey with you and be a part of transforming your outdoor
        spaces into havens of beauty and functionality. Trust [Landscaping Company Name] to bring
        innovation, creativity, and professionalism to your next interlock project.
      </p>
      <p>
        Contact us today to schedule a consultation and let's discuss how we can bring your vision
        to life. Together, we can create outdoor spaces that will leave a lasting impression and
        provide enjoyment for years to come. Welcome to the world of [Landscaping Company Name],
        where interlock installations come to life with style and excellence.
      </p>
      <Link href="/contact">
        <button>Contact us</button>
      </Link>
    </>
  );
}
