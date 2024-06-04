import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home (){
    return <>
        <div className="fixed w-screen">
            <Navbar name="home"/>
        </div>
        <div className="grid items-center justify-center min-h-screen grid-cols-2 px-44">
            <div className="grid gap-4 content-center">
                <h1 className="text-3xl text-center">Deshinta Alfi Aulia</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed quidem neque repellat optio, enim eveniet esse non. Fugit animi excepturi eum neque repellendus officiis provident ex quaerat recusandae architecto!</p>

                <div>
                    <ul className="flex gap-3">
                        <FontAwesomeIcon icon="fab fa-linkedin" />
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