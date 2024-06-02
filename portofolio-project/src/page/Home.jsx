import Navbar from "../components/navbar";

export default function Home (){
    return <>
        <Navbar/>
        <h1>Page Home</h1>
        <div className="justify-between grid grid-cols-2 p-7">
            <div>
                <h1 style={{ textAlign:'center' }}>Deshinta Alfi Aulia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed quidem neque repellat optio, enim eveniet esse non. Fugit animi excepturi eum neque repellendus officiis provident ex quaerat recusandae architecto!</p>

                <div>
                    <ul>
                        <li>github</li>
                        <li>linkedin</li>
                        <li>nomor hp</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center">
                <img className="w-60 rounded-full" src="./profile2.png" alt="profile_image" />
            </div>
        </div>
    </>
}