import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const pid  = router.query.id;  

  return <p>Post: {pid}</p>;
};

export default Post;