import JobCard from "../eachListComponent";
import ViewAllBtn from "../ViewAllJobsButton";

export default function JobListings( ) {

//   const jobs = [
//     {
//         title: "Senior React Developer",
//         type: "Full Time - Onsite",
//         description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript.",
//         salary: "$70 - $80K / Year",
//         link: "/job-1"
//     },
//     {
//         title: "Front-End Engineer (React)",
//         type: "Remote",
//         description: "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...",
//         salary: "$70K - $80K / Year",
//         link: "/job-2"
//     },
//     {
//         title: "React.js Developer",
//         type: "Remote",
//         description: "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...",
//         salary: "$70K - $80K / Year",
//         link: "/job-3"
//     },
//     {
//       id: "1",
//       title: "Senior React Developer",
//       type: "Full-Time",
//       description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
//       location: "Boston, MA",
//       salary: "$70K - $80K",
//       link:"/job-4",
//       company: {
//         name: "NewTek Solutions",
//         description: "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
//         contactEmail: "contact@teksolutions.com",
//         contactPhone: "555-555-5555"

//       }
//     },
//     {
//       id: "2",
//       title: "Front-End Engineer (React & Redux)",
//       type: "Full-Time",
//       location: "Miami, FL",
//       descripton: "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
//       salary: "$70K - $80K",
//       link:"/job-5",
//       company: {
//         name: "Veneer Solutions",
//         description: "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
//         contactEmail: "contact@loremipsum.com",
//         contactPhone: "555-555-5555"
//       }
//     },
//     {
//       id: "3",
//       title: "React.js Dev",
//       type: "Full-Time",
//       location:" Brooklyn, NY",
//       descripton: "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
//       salary: "$70K - $80K",
//       link:"/job-6",
//       company: {
//         name: "Dolor Cloud",
//         description: "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
//         contactEmail: "contact@dolorsitamet.com",
//         contactPhone: "555-555-5555"
//       }
//     },
//     {
//       id: "4",
//       title: "React Front-End Developer",
//       type: "Part-Time",
//       description: "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
//       location: "Pheonix, AZ",
//       salary: "$60K - $70K",
//       link:"/job-7",
//       company: {
//         name: "Alpha Elite",
//         description: "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
//         contactEmail: "contact@adipisicingelit.com",
//         contactPhone: "555-555-5555"
//       }
//     },
//     {
//       id: "5",
//       title: "Full Stack React Developer",
//       type: "Full-Time",
//       description: "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
//       location: "Atlanta, GA",
//       salary: "$90K - $100K",
//       link:"/job-8",
//       company: {
//         name: "Browning Technologies",
//         description: "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
//         contactEmail: "contact@consecteturadipisicing.com",
//         contactPhone: "555-555-5555"
//       }
//     },
//     {
//       id: "6",
//       title: "React Native Developer",
//       type: "Full-Time",
//       description: "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
//       location: "Portland, OR",
//       salary: "$100K - $110K",
//       link:"/job-9",
//       company: {
//         name: "Port Solutions INC",
//         description: "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
//         contactEmail: "contact@ipsumlorem.com",
//         contactPhone: "555-555-5555"
//       }
//     }
    
    
// ];

const jobs = [
  {
    id: "1",
    title: "Senior React Developer",
    type: "Full-Time",
    description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    location: "Boston, MA",
    salary: "$70K - $80K",
    link: "/job-1",
    company: {
      name: "NewTek Solutions",
      description: "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      contactEmail: "contact@teksolutions.com",
      contactPhone: "555-555-5555"
    }
  },
  {
    id: "2",
    title: "Backend Engineer",
    type: "Full-Time",
    description: "Join our dynamic team in San Francisco, CA, as a Backend Engineer. We are looking for someone proficient in Node.js and API development to help build robust backend services.",
    location: "San Francisco, CA",
    salary: "$90K - $110K",
    link: "/job-2",
    company: {
      name: "Tech Innovations",
      description: "Tech Innovations is a rapidly growing startup focused on creating cutting-edge technology solutions. We value creativity and collaboration.",
      contactEmail: "hr@techinnovations.com",
      contactPhone: "555-555-1234"
    }
  },
  {
    id: "3",
    title: "UI/UX Designer",
    type: "Part-Time",
    description: "Looking for a creative UI/UX Designer to help enhance our product's user experience. Candidates should have a portfolio showcasing their design skills.",
    location: "Remote",
    salary: "$40K - $50K",
    link: "/job-3",
    company: {
      name: "Creative Minds",
      description: "Creative Minds is a design agency that focuses on delivering innovative solutions for our clients. Our team thrives on collaboration and creativity.",
      contactEmail: "info@creativeminds.com",
      contactPhone: "555-555-6789"
    }
  },
  {
    id: "4",
    title: "Data Scientist",
    type: "Contract",
    description: "Seeking a skilled Data Scientist to analyze large datasets and derive actionable insights. Experience with Python and machine learning is a must.",
    location: "New York, NY",
    salary: "$100K - $120K",
    link: "/job-4",
    company: {
      name: "Data Insights",
      description: "Data Insights is dedicated to providing data-driven solutions for businesses. We leverage data analytics to help clients make informed decisions.",
      contactEmail: "contact@datainsights.com",
      contactPhone: "555-555-2468"
    }
  },
  {
    id: "5",
    title: "Project Manager",
    type: "Full-Time",
    description: "We are looking for an experienced Project Manager to lead our software development projects. Strong communication and leadership skills are essential.",
    location: "Chicago, IL",
    salary: "$80K - $95K",
    link: "/job-5",
    company: {
      name: "NextGen Technologies",
      description: "NextGen Technologies specializes in software solutions and project management. We aim to deliver projects on time and within budget.",
      contactEmail: "jobs@nextgentech.com",
      contactPhone: "555-555-7890"
    }
  },
  {
    id: "6",
    title: "Full Stack Developer",
    type: "Full-Time",
    description: "Join our team as a Full Stack Developer. The ideal candidate should have experience with both front-end and back-end technologies.",
    location: "Austin, TX",
    salary: "$85K - $105K",
    link: "/job-6",
    company: {
      name: "Tech Solutions Inc.",
      description: "Tech Solutions Inc. is committed to developing innovative technology solutions that meet the needs of our clients.",
      contactEmail: "careers@techsolutions.com",
      contactPhone: "555-555-8901"
    }
  },
  {
    id: "7",
    title: "Mobile App Developer",
    type: "Full-Time",
    description: "We are seeking a Mobile App Developer to create high-quality applications for iOS and Android platforms. Knowledge of Swift and Kotlin is preferred.",
    location: "Seattle, WA",
    salary: "$95K - $115K",
    link: "/job-7",
    company: {
      name: "App Creators",
      description: "App Creators focuses on developing mobile applications that enhance user experience and engagement.",
      contactEmail: "hello@appcreators.com",
      contactPhone: "555-555-3456"
    }
  },
  {
    id: "8",
    title: "Cloud Solutions Architect",
    type: "Full-Time",
    description: "We are looking for a Cloud Solutions Architect to design and implement cloud-based solutions. Experience with AWS or Azure is required.",
    location: "Denver, CO",
    salary: "$120K - $140K",
    link: "/job-8",
    company: {
      name: "Cloud Technologies",
      description: "Cloud Technologies specializes in providing cloud-based solutions to businesses. We are at the forefront of digital transformation.",
      contactEmail: "info@cloudtechnologies.com",
      contactPhone: "555-555-2345"
    }
  },
  {
    id: "9",
    title: "DevOps Engineer",
    type: "Full-Time",
    description: "Seeking a DevOps Engineer to improve our development processes and infrastructure. Proficiency in CI/CD tools is essential.",
    location: "Los Angeles, CA",
    salary: "$100K - $120K",
    link: "/job-9",
    company: {
      name: "Innovative Solutions",
      description: "Innovative Solutions provides technology consulting and services to help businesses streamline their operations.",
      contactEmail: "careers@innovativesolutions.com",
      contactPhone: "555-555-4567"
    }
  },
  {
    id: "10",
    title: "Digital Marketing Specialist",
    type: "Part-Time",
    description: "Looking for a Digital Marketing Specialist to develop and execute online marketing campaigns. Experience with SEO and social media is a plus.",
    location: "Remote",
    salary: "$30K - $40K",
    link: "/job-10",
    company: {
      name: "Marketing Gurus",
      description: "Marketing Gurus is a digital marketing agency dedicated to helping businesses grow through effective marketing strategies.",
      contactEmail: "contact@marketinggurus.com",
      contactPhone: "555-555-6780"
    }
  }
];

const Recents = jobs.slice(0,3);


  return(
    <section className="bg-gradient-to-bl from-cyan-800 to-green-300 px-4 py-10 bg-opacity-75">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white py-3 mb-8 text-center rounded-lg">
          Browse Jobs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Recents.map(job  => (
            <JobCard 
               key={job.id}
              title={job.title}
              type={job.type}
              description={job.description}
              salary={job.salary}
              link={job.link} />
              
          ))}
          <ViewAllBtn/>
         </div>
      </div>
    </section>
  );
}



