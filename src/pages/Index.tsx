
import { useState, useEffect } from "react";
import { Menu, X, Mail, Github, Linkedin, Phone, MapPin, Calendar, ExternalLink, Award, GraduationCap, Briefcase, Code2 } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Convex Technologies",
      period: "November 2024 - Present",
      type: "Hybrid",
      responsibilities: [
        "Deploy and maintain betting and gaming sites",
        "Set up development infrastructure to streamline team workflows",
        "Install, configure, and maintain various tools that enhance productivity",
        "Implement and optimize CI/CD pipeline workflows and containerization",
        "Monitor system performance and troubleshoot issues",
        "Manage databases"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Kacha Digital Financial Services S.C",
      period: "June 2024 - Present",
      type: "Part-Time",
      responsibilities: [
        "Set up development infrastructure, including private GitLab and private Docker image registries",
        "Implemented CI/CD pipelines and containerization strategies"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Ashewa Technology Solutions S.C",
      period: "November 2023 - Present",
      type: "Remote",
      responsibilities: [
        "Specializes in e-commerce, on-demand projects, and ERP software",
        "Automated development processes with CI/CD pipelines",
        "Managed AWS services (EC2, LightSail) and Kubernetes",
        "Deployed Odoo ERP systems, microservices, and SaaS on Kubernetes and Docker",
        "Participated in infrastructure monitoring and incident response"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Addispay Financial Technology S.C",
      period: "April 2023 - May 2024",
      type: "Payment Gateway Provider",
      responsibilities: [
        "Managed infrastructure and data center operations",
        "Streamlined software deployment through CI/CD pipelines",
        "Installed on-premises Kubernetes and deployed systems using Docker and Kubernetes"
      ]
    }
  ];

  const skills = [
    {
      category: "Cloud Platforms",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform (GCP)"]
    },
    {
      category: "CI/CD & Automation",
      icon: <Briefcase className="w-6 h-6" />,
      items: ["GitLab CI, GitHub Actions, Jenkins", "Ansible", "Terraform, AWS CloudFormation, Azure Resource Manager"]
    },
    {
      category: "Containerization & Orchestration",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Docker, Kubernetes", "Helm, Istio, OpenShift"]
    },
    {
      category: "Monitoring & Logging",
      icon: <Briefcase className="w-6 h-6" />,
      items: ["Prometheus, Grafana", "ELK Stack (Elasticsearch, Logstash, Kibana)"]
    },
    {
      category: "Scripting & Programming",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Python, Bash, PowerShell", "YAML, JSON"]
    },
    {
      category: "Version Control & Collaboration",
      icon: <Briefcase className="w-6 h-6" />,
      items: ["Git, GitHub, GitLab, Bitbucket", "Jira, Mattermost"]
    },
    {
      category: "Operating Systems & Networking",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Linux (Ubuntu, CentOS, RHEL)", "Windows Server", "TCP/IP, DNS, HTTP/S, Load Balancing", "Network Security"]
    }
  ];

  const certifications = [
    {
      title: "Cloud Developer Nanodegree",
      issuer: "Udacity",
      date: "October 2022",
      link: "https://www.udacity.com/certificate/WNTCPGWG"
    },
    {
      title: "Container & Kubernetes Essentials V2",
      issuer: "Coursera and IBM",
      date: "September 2023",
      link: "https://www.credly.com/badges/438ae3ac-3481-4016-bb99-27adac6fbcf4/public_url"
    },
    {
      title: "Application Development using Microservices and Serverless",
      issuer: "Coursera and IBM",
      date: "October 2023",
      link: "https://www.credly.com/badges/a41c0ce5-77f1-4723-b186-975b9de8866a/public_url"
    },
    {
      title: "Continuous Integration and Continuous Delivery (CI/CD)",
      issuer: "Coursera",
      date: "September 2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/ETZAXXM7HXTZ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="font-semibold text-gray-900">Shambel Mebratu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "skills", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {section === "education" ? "Education" : section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {["about", "experience", "skills", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-lg capitalize font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {section === "education" ? "Education" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFQlb668rRsbQ/profile-displayphoto-shrink_200_200/B4DZRZ9hStHUAY-/0/1736676088659?e=2147483647&v=beta&t=sfHf9eOj-BurhZLyhYI7nYCebHh1t6kwRaAHZUdI6LM"
                alt="Shambel Mebratu"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Shambel Mebratu
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
              DevOps Engineer
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A DevOps engineer with a solid background in computer science and engineering, 
              specializing in Docker, Kubernetes, and CI/CD pipeline implementation. Proficient 
              in cloud infrastructure and committed to continuous learning and adapting to new 
              technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </button>
              <a
                href="https://www.linkedin.com/in/shambel-mebratu-436bb0164"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey in the world of DevOps and cloud engineering.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-right">
                    <p className="text-gray-600 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-xs">{exp.type}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse skillset honed through years of hands-on experience in various DevOps domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skill.category}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic qualifications and industry-recognized credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    BSc in Computer Science Engineering
                  </h4>
                  <p className="text-green-600 font-medium">
                    Adama Science and Technology University
                  </p>
                  <p className="text-gray-600 text-sm">Adama, Ethiopia</p>
                  <p className="text-gray-500 text-xs flex items-center mt-1">
                    <Calendar className="w-3 h-3 mr-1" />
                    Graduated: December 2020
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Relevant Coursework: Data Structures & Algorithms, Operating Systems, 
                    Computer Networks, Database Management, Software Engineering.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1jIzOjRtgYM-RNu4nAR2sf8oXMJcya5V1/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm mt-2"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Credential
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 text-xs">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs flex items-center mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs mt-1"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Credential
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:shambelmebratu@gmail.com"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-blue-600 text-sm">shambelmebratu@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shambel-mebratu-436bb0164"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-blue-600 text-sm">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/shambelmebratu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Github className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p className="text-blue-600 text-sm">View my projects</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600 text-sm">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shambel Mebratu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
