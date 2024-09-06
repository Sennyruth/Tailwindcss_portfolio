import ResumeCard from "./ResumeCard"
import { motion } from "framer-motion"
const Achievements = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 5 }} className='w-full flex gap-20' >
    <div className=''>
    <div className='py-12 font-titleFont'>
      <p className='text-5m text-designColor track-[4px]'>FEATURES</p>
      <h2 className='text-4xl font-bold'>Achievements</h2>
    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
  
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  
  </div>
    </div>
    <div className=''>
    <div className='py-12 font-titleFont'>
      <p className='text-5m text-designColor track-[4px]'>2022-2024</p>
      <h2 className='text-4xl font-bold'>Job Experience</h2>
    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
  
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  <ResumeCard 
  title="As-Software Engineering"
  subTitle="Starshine Secondary school"
  grade="A-"
  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
  />
  
  </div>
    </div>
    </motion.div>
  )
}

export default Achievements
