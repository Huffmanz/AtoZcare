import { useSession, signIn, signOut } from "next-auth/react"


export const Header = ({displayName}:{displayName:string}) => {
    const {data: sessionData} = useSession();

    return (
        <div className="navbar text-primary-content shadow-2xl">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {displayName}
            </div>
            <div className="flex-non gap-2">
                <div className="dropdown-end dropdown">
                    {sessionData?.user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}  className="btn btn-ghost btn-circle avatar btn">
                            <div className="w-10 rounded-ful">
                                <img src={sessionData.user.image ? sessionData.user.image : ""} alt={sessionData?.user?.name ? sessionData?.user?.name : ""} />
                            </div>    
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary-focus rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={() => void signOut()}>Logout</a></li>
                        </ul>
                        </div>
                        
                    ): (
                        <button className="btn-ghost rounded-btn btn"
                                onClick={() => void signIn()}
                        >
                            Sign In
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}