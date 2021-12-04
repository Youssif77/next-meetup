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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
