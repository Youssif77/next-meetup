import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title="A First Meetup"
      image="https://lh5.googleusercontent.com/p/AF1QipPovlitK5OsVeuN8q5Ng0JjkNUXdC3yqP3iVCBs=w408-h362-k-no"
      address="Some address 5,12345 some city"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipPovlitK5OsVeuN8q5Ng0JjkNUXdC3yqP3iVCBs:w408-h362-k-no",
        address: "Some address 5,12345 some city",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
