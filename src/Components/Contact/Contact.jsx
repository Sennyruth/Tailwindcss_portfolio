import ContactLeft from "./ContactLeft";
import Title from "../Layouts/Title";
import ContactRight from "./ContactRight";
const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Get in touch with me" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          <ContactRight />
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
