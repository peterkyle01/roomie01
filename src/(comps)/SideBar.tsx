import { FileSpreadsheet, Home, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
	return (
		<div className="w-8 h-screen flex justify-center items-center p-0.5 absolute left-0">
			<div className="w-full h-1/2 flex flex-col justify-evenly items-center rounded-md bg-blue-800">
				<Link to={"/home/hero"}>
					<Home
						size={18}
						color="white"
					/>
				</Link>
				<Link to={"/home/location"}>
					<MapPin
						size={18}
						color="white"
					/>
				</Link>
				<Link to={"/home/booking"}>
					<FileSpreadsheet
						size={18}
						color="white"
					/>
				</Link>

				<Link to={"/home/profile"}>
					<User
						size={18}
						color="white"
					/>
				</Link>
			</div>
		</div>
	);
}