import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";

const Welcome = () => {
  return (
    <section className="flex flex-col">
      <SectionHeader title='Welcome to the quickest city quiz' />

      <p>
        Are you studying geography and you don't find an easy way to remember city names? Add your own cities and try this quiz!
      </p>

      <RingLink url='quiz' text='Start' ringColor='cyan' />
      <RingLink url='country-form' text='Add a new country' ringColor='sky' />
      <RingLink url='city-form' text='Add a new city' ringColor='blue' />
      <RingLink url='update-country' text='Update country' ringColor='indigo' />
      <RingLink url='update-city' text='Update city' ringColor='violet' />
      <RingLink url='delete-country' text='Delete country' ringColor='fuchsia' />
      <RingLink url='delete-city' text='Delete city' ringColor='rose' />
    </section>
  );
};

export default Welcome;
