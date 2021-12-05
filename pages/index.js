import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPovlitK5OsVeuN8q5Ng0JjkNUXdC3yqP3iVCBs=w408-h362-k-no",
    address: "Some address 5,12345 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPovlitK5OsVeuN8q5Ng0JjkNUXdC3yqP3iVCBs=w408-h362-k-no",
    address: "Some address 5,12345 some city",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
