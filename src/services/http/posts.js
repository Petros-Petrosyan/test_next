import { baseRequest } from '.';


export const getPostsRequest = async() => {
    const res = await baseRequest.get('sample.json');
    return res;
}