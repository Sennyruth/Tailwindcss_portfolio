import Title from "../Layouts/Title"
import Card from "./Card"
import { IoLogoReact } from "react-icons/io5";
const Features = () => {
  return (
    <section id="services" className="w-full py-20 flex flex-col border-b-[1px] border-b-black ">
    
    <Title title="Features" des="WHAT I DO"/>
<div className="grid grid-cols-3 gap-20">
<Card
title="Web Development"
des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
icon={<IoLogoReact />}
/>
<Card
title="Web Development"
des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
icon={<IoLogoReact />}/>

<Card title="UI/UX Design"
des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
icon={<IoLogoReact />}/>
<Card
title="Web Development"
des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
icon={<IoLogoReact />}/>

<Card 
title="Web Development"
des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
icon={<IoLogoReact />}
/>
<Card
title="Web Development"
 des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione officiis animi officia dolorem enim aliquid at vero dolores maxime."
 icon={<IoLogoReact />}
 />

</div>
<p></p>
       </section> 
  )
}

export default Features
