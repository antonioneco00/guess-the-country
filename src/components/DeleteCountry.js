import RingLink from "./includes/RingLink"
import SectionHeader from "./includes/SectionHeader"

const DeleteCountry = () => {
  return (
    <section>
        <SectionHeader title='Delete an existing country' />
    
        <RingLink url='/' text='Back' ringColor='rose' />
    </section>
  )
}

export default DeleteCountry