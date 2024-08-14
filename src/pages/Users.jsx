import { useParams } from "react-router-dom"

function Users() {
    const { username } = useParams();

    // useEffect(() => {
    //     // fetch(`https://api.instagram.com/${usermame}`)
    // },[])
    console.log(username)
    return <h1>{username}</h1>
}

export default Users