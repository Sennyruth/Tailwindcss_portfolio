import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'
import { useState } from 'react'
import Title from '../Layouts/Title'



const Resume = () => {
  const [experienceData, setExperienceData] = useState(false)
  const [educationData, setEducationData] = useState(false)
  const [achievementsData, setAchievementsData] = useState(false)
  const [skillsData, setSkillsData] = useState(false)
 
  return (
    <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'><div>
    <div className='flex justify-center items-center text-center'>
       <Title title="2+ YEARS OF EXPERIENCE"
       des="My Resume"/>
       </div>
  </div>
  <div>
    <ul className='w-full grid grid-cols-4'>
        <li onClick={()=> setEducationData(true) & setSkillsData(false) & setExperienceData(false) & setAchievementsData(false)} className= {`${educationData ? "border-designColor rounded-lg":"border-transparent"} resumeli`}>Education</li>
        <li onClick={()=> setEducationData(false) & setSkillsData(true)& setExperienceData(false) & setAchievementsData(false)}  className={`${skillsData ? "border-designColor rounded-lg":"border-transparent"} resumeli`}>Professional Skills</li>
        <li onClick={()=> setEducationData(false) & setSkillsData(false)& setExperienceData(true) & setAchievementsData(false)}  className={`${experienceData ? "border-designColor rounded-lg":"border-transparent"} resumeli`}>Experience</li>
        <li onClick={()=> setEducationData(false) & setSkillsData(false)& setExperienceData(false) & setAchievementsData(true)}  className={`${achievementsData ? "border-designColor rounded-lg":"border-transparent"} resumeli`}>Achievements</li>
    </ul>

  </div>
  {
    educationData && <Education/>
  }
  {
    skillsData && <Skills/>
  }{
    experienceData && <Experience/>
  }
  {
    achievementsData && <Achievements/>
  } 
  {/* <Education/> 
<Skills/>
<Achievements/>
<Experience/>  */}

  </section>
  );
}

export default Resume
