
import Title from '../Layouts/Title'
import ProjectCard from './ProjectCard'
import backgroundImg from "../../assets/background.jpg"
const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
       <div className='flex justify-center items-center text-center'>
       <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
       des="My Projects"/>
       </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
            <ProjectCard 
            title="URBAN HAVEN"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, recusandae quisquam corrupti esse tempore ipsam minus ab quasi! Deserunt, magni!"
            src={backgroundImg}
            />
          
        </div>
    </section>
  )
}

export default Projects
