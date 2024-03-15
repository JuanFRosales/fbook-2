import MediaRow from '../components/MediaRow';
import {useMedia} from '../hooks/graphQLHooks';
// import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <figure>
        <figure >
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </figure>
      </figure>
    </>
  );
};

export default Home;
