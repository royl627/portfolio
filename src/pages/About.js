import React from 'react'
import './About.css'
import DownloadButton from '../components/DownloadButton'
import Underline from '../components/Underline'
import Section from '../components/Section'
import Bar from '../components/Bar'
import * as Bullets from '../data/Bullets.js'
import utlogo from '../icons/uoft.svg'
import stelogo from '../icons/ste.png'
import veeva from '../icons/veeva.jpeg'
import rxlogo from '../icons/rx.png'
import cpp from '../icons/cpp.png'
import python from '../icons/python.png'
import java from '../icons/java.png'
import rct from '../icons/react.png'
import felang from '../icons/web.png'
import sql from '../icons/sql.png'
import github from '../icons/github.png'
import white from '../icons/white.png'

function About() {
  return (
    <div className="About">
      <div className='section-container'>
        <div className='section-title'>
          About Me
          <Underline color='#149ddd'/>
          <div className='about-me'>
            <span>I was born in China and moved to Canada at the age of 13. Over the past 10 years in Canada, I discovered my passion for coding since Grade 10. I recently graduated with a degree in Computer Science from the University of Toronto. My academic journey, combined with hands-on experience from various projects and internships, has provided me with a solid foundation in algorithms, data structures, object-oriented design, and software development practices. I am deeply passionate about coding and dedicated to delivering high-quality code and solving challenging problems.</span>
          </div>
          <DownloadButton/>
        </div>
      </div>
      <div className='section-container'>
        <div className='section-title'>
          Education
          <Underline color='#149ddd'/>
        </div>
      </div>
      <div className='subsection-container'>
        <Section
          logo={utlogo}
          timeline="Sept. 2019 - Jun. 2024"
          title='University of Toronto'
          subtitle='Honours Bachelor of Science - Specialist in Computer Science'
          bullets={Bullets.eduSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={stelogo}
          timeline='Sept. 2015 - Jun. 2019'
          title='St. Elizabeth Catholic High School'
          subtitle='Secondary School Diploma'
          bullets={Bullets.hsSection}
        />
      </div>
      <div className='section-container'>
        <div className='section-title'>
          Professional Experiences
          <Underline color='#149ddd'/>
        </div>
      </div>
      <div className='subsection-container'>
        <Section
          logo={veeva}
          timeline="May 2022 - Aug. 2023"
          title='Veeva Systems'
          subtitle="QA Engineer"
          bullets={Bullets.veevaSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={rxlogo}
          timeline="Mar. 2021 - Jul. 2021"
          title='Fujian Renxin Technology'
          subtitle="Software Engineer"
          bullets={Bullets.rxSection}
        />
      </div>
      <div className='section-container'>
        <div className='section-title'>
          Skills
          <Underline color='#149ddd' />
        </div>
      </div>
      <div className='subsection-container'>
        <div className='bars-wrapper'>
          <Bar logo={cpp} skillName='C/C++' percentage={100} />
          <Bar logo={python} skillName='Python' percentage={100} />
          <Bar logo={sql} skillName='SQL' percentage={100} />
          <Bar logo={java} skillName='Java' percentage={80} />
          <Bar logo={rct} skillName='React' percentage={60} />
          <Bar logo={felang} skillName='HTML & CSS & JS' percentage={60} />
          <div className='skill-content'>
            <span>Other important skills and experienced frameworks: AWS, C#, SpringBoot, Jenkins, Node.js, MongoDB, REST API.</span>
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='section-title'>
          Projects
          <Underline color='#149ddd'/>
        </div>
        <span className='reminder'>Projects with GitHub icon are public repositories that you're welcome to explore on my GitHub page.</span>
      </div>
      <div className='subsection-container'>
        <Section
          logo={github}
          timeline='Jan. 2024 - Apr. 2024'
          title='Mock Database System'
          subtitle='Relevant Skills: C++, Python, Shell, Matplotlib'
          bullets={Bullets.dbSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={white}
          timeline='Jan. 2024 - Apr. 2024'
          title='Computer Graphics Tools'
          subtitle='Relevant Skills: NumPy, OpenCV, Python'
          bullets={Bullets.cgSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={white}
          timeline='Jan. 2024 - Apr. 2024'
          title='Mini C Compiler'
          subtitle='Relevant Skills: C++, ANTLR4, LLVM 15, Compiler optimization techniques'
          bullets={Bullets.mcSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={white}
          timeline='Jan. 2022 - May 2022'
          title='Frontier College Reading App'
          subtitle='Relevant Skills: Java, SprintBoot, REST API, AWS, JDBC'
          bullets={Bullets.fcSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={github}
          timeline='Sept. 2021 - Dec. 2021'
          title='Learning Path Website'
          subtitle='Relevant Skills: React, Node.js, MonogoDB, HTML, CSS, JS'
          bullets={Bullets.lpSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={white}
          timeline='Sept. 2020 - Oct. 2020'
          title='Extent Based File System'
          subtitle='Relevant Skills: C#, Linux, File System, Memory Alignment'
          bullets={Bullets.fsSection}
        />
      </div>
      <div className='subsection-container'>
        <Section
          logo={github}
          timeline='Sept. 2020 - Dec. 2020'
          title='Conference System'
          subtitle='Relevant Skills: Java, JavaFX, Design Patterns, OOP, Communication'
          bullets={Bullets.sdSection}
        />
      </div>
    </div>
  )
}

export default About;