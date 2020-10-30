// http
import { getPostsRequest } from '../src/services/http';


export default function Home(props) {
    const {_posts} = props;
    console.log(_posts)

    return (
        <div>
            <h2>aaa</h2>
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await getPostsRequest();
    const {data: _posts} = res;
    return {
        props: {
            _posts
        },
    }
}
